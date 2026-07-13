// Облачная функция Яндекса — «переходник» между сайтом и YandexGPT.
// Держит доступ к модели, вырезает персональные данные, ничего не хранит.
// Runtime: Node.js 22. Точка входа: index.handler
// Переменная окружения: FOLDER_ID (ID каталога в Яндекс Облаке)
// Сервисный аккаунт с ролью ai.languageModels.user должен быть привязан к функции.

const FOLDER_ID = process.env.FOLDER_ID;
// "yandexgpt" = Pro (умнее), "yandexgpt-lite" = Lite (дешевле). Можно поменять переменной YAGPT_MODEL.
const MODEL = process.env.YAGPT_MODEL || "yandexgpt";

// Укажите один или несколько origin через запятую. Например:
// ALLOWED_ORIGINS=https://desidoc.ru,http://localhost:5500
const ALLOWED_ORIGINS = (process.env.ALLOWED_ORIGINS || process.env.ALLOWED_ORIGIN || "https://desidoc.ru")
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

function corsHeaders(origin) {
  const allowAny = ALLOWED_ORIGINS.includes("*");
  const isAllowed = allowAny || !origin || ALLOWED_ORIGINS.includes(origin);
  return {
    ...(isAllowed && origin ? { "Access-Control-Allow-Origin": origin, Vary: "Origin" } : {}),
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };
}

const JSON_HEADERS = {
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
  "Content-Type": "application/json; charset=utf-8",
};

const SYSTEM_PROMPT = [
  "Ты — ассистент дизайнера-фрилансера. По брифу клиента собери структуру сметы.",
  "Верни ТОЛЬКО валидный JSON без пояснений, по схеме:",
  '{',
  '  "estimate_title": "короткое название сметы",',
  '  "project_type": "website|logo|brand_identity|packaging|presentation|smm|marketplaces|outdoor|print|custom",',
  '  "brand_name": "имя бренда или пустая строка",',
  '  "stages": [{ "name": "этап", "description": "что делается", "hours": число }],',
  '  "pricing_risks": ["возможный риск по цене"],',
  '  "additional_costs": ["возможный доп. расход"]',
  '}',
  "Оцени часы реалистично для ОДНОГО дизайнера. Сделай 5–8 этапов.",
  "Деньги и итоговую сумму НЕ считай — только часы.",
].join("\n");

// Убираем персональные данные из текста ДО отправки в модель (второй рубеж защиты).
function stripPII(text) {
  return String(text)
    .replace(/[\w.+-]+@[\w-]+\.[\w.-]+/g, "[email]")
    .replace(/(?:\+7|8)[\s\-()]*\d{3}[\s\-()]*\d{3}[\s\-()]*\d{2}[\s\-()]*\d{2}/g, "[телефон]")
    .replace(/@[a-zA-Z0-9_]{3,}/g, "[ник]");
}

module.exports.handler = async (event, context) => {
  const method = event.httpMethod || "POST";
  const origin = event.headers?.origin || event.headers?.Origin || "";
  const headers = corsHeaders(origin);
  const originAllowed = !origin || ALLOWED_ORIGINS.includes("*") || ALLOWED_ORIGINS.includes(origin);
  if (!originAllowed) return json(403, { error: "Origin не разрешён" }, headers);
  if (method === "OPTIONS") return { statusCode: 204, headers, body: "" };
  if (method !== "POST") return { statusCode: 405, headers, body: "Method Not Allowed" };

  if (!FOLDER_ID) return json(500, { error: "Не задан FOLDER_ID" }, headers);

  // Тело запроса (может прийти в base64 — обрабатываем оба случая).
  let raw = event.body || "{}";
  if (event.isBase64Encoded) raw = Buffer.from(raw, "base64").toString("utf-8");

  let brief = "";
  try { brief = String(JSON.parse(raw).brief || "").trim(); } catch (e) {}

  if (!brief || brief.length > 4000) {
    return json(400, { error: "Некорректный бриф" }, headers);
  }

  // IAM-токен привязанного сервисного аккаунта — ключ хранить НЕ нужно.
  const token = context.token && context.token.access_token;
  if (!token) return json(500, { error: "Нет токена сервисного аккаунта" }, headers);

  let resp;
  try {
    resp = await fetch("https://ai.api.cloud.yandex.net/foundationModels/v1/completion", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        modelUri: `gpt://${FOLDER_ID}/${MODEL}`,
        completionOptions: { stream: false, temperature: 0.2, maxTokens: "2000" },
        jsonObject: true,
        messages: [
          { role: "system", text: SYSTEM_PROMPT },
          { role: "user", text: stripPII(brief) },
        ],
      }),
    });
  } catch (e) {
    return json(502, { error: "AI недоступен" }, headers);
  }

  if (!resp.ok) return json(502, { error: "AI недоступен" }, headers);

  const data = await resp.json();
  const text = data?.result?.alternatives?.[0]?.message?.text || "{}";

  // Достаём JSON из ответа модели (на случай, если вокруг него будет лишний текст).
  const match = text.match(/\{[\s\S]*\}/);
  let payload;
  try {
    payload = normalizeAnalysis(JSON.parse(match ? match[0] : "{}"));
  } catch (error) {
    return json(502, { error: "AI вернул некорректный формат" }, headers);
  }

  return {
    statusCode: 200,
    headers: { ...headers, ...JSON_HEADERS },
    body: JSON.stringify(payload),
  };
};

const PROJECT_TYPES = new Set([
  "website", "logo", "brand_identity", "packaging", "presentation",
  "smm", "marketplaces", "outdoor", "print", "custom",
]);

function normalizeAnalysis(value) {
  if (!value || typeof value !== "object" || !Array.isArray(value.stages) || !value.stages.length) {
    throw new Error("Empty analysis");
  }
  const stages = value.stages.slice(0, 8).map((stage) => {
    const hours = Math.round(Number(stage?.hours));
    if (!stage || !String(stage.name || "").trim() || !Number.isFinite(hours) || hours < 1 || hours > 1000) {
      throw new Error("Invalid stage");
    }
    return {
      name: String(stage.name).trim().slice(0, 120),
      description: String(stage.description || "").trim().slice(0, 500),
      hours,
    };
  });
  return {
    estimate_title: String(value.estimate_title || "Смета по брифу").trim().slice(0, 160),
    project_type: PROJECT_TYPES.has(value.project_type) ? value.project_type : "custom",
    brand_name: String(value.brand_name || "").trim().slice(0, 120),
    stages,
    pricing_risks: asStringList(value.pricing_risks),
    additional_costs: asStringList(value.additional_costs),
  };
}

function asStringList(value) {
  return Array.isArray(value)
    ? value.map((item) => String(item || "").trim().slice(0, 300)).filter(Boolean).slice(0, 8)
    : [];
}

function json(statusCode, obj, headers = {}) {
  return {
    statusCode,
    headers: { ...headers, ...JSON_HEADERS },
    body: JSON.stringify(obj),
  };
}
