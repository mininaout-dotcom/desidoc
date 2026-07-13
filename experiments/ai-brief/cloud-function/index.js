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
  "Ты — senior project estimator и арт-директор для графического дизайнера-фрилансера.",
  "Твоя задача — превратить клиентский бриф в аккуратную предварительную смету: этапы, понятные клиенту описания и реалистичные часы.",
  "",
  "Думай как дизайнер, который оценивает реальную работу:",
  "- отделяй анализ/концепцию, дизайн, производство макетов, подготовку файлов и согласования;",
  "- не объединяй слишком разные работы в один этап;",
  "- не добавляй этапы, которых нет в брифе или которые не нужны для результата;",
  "- не используй технические термины в названиях этапов, если клиенту можно сказать проще;",
  "- названия этапов должны быть профессиональными, короткими и понятными клиенту;",
  "- описания должны объяснять пользу этапа, а не повторять название;",
  "- тон описаний: спокойный, деловой, человеческий, без канцелярита, маркетинговой воды и сленга;",
  "- часы оценивай реалистично для ОДНОГО дизайнера, без оптимистичного занижения.",
  "",
  "Запрещенные слова и формулировки:",
  "- не используй «правочки», «картинки», «допилки», «свёрстка»;",
  "- правильный термин: «Вёрстка»;",
  "- не выделяй «сетку» отдельным этапом и не пиши это слово в названиях этапов;",
  "- не используй PDF/X в названиях этапов; если нужно, пиши в описании проще: «печатный PDF по требованиям типографии».",
  "",
  "Для печатной продукции:",
  "- учитывай обложку, внутренние развороты/полосы, изображения, иллюстрации/карты/схемы, рекламные блоки, согласования;",
  "- финальный этап называй «Препресс и подготовка файлов к передаче»;",
  "- в описании финального этапа укажи проверку макетов, вылетов, цветового режима и экспорт печатного PDF плюс версии для онлайн-просмотра;",
  "- для многостраничных брошюр, каталогов и журналов не занижай часы: вёрстка, препресс и согласования обычно занимают десятки часов.",
  "",
  "Примеры хороших этапов по типам проекта:",
  "- website: Анализ задачи и структуры сайта; Прототипирование ключевых экранов; Визуальная концепция; UI-дизайн экранов; Адаптивные версии; Подготовка макетов к передаче; Согласование и правки.",
  "- logo: Брифинг и анализ контекста; Поиск визуальных направлений; Эскизы и варианты знака; Доработка выбранной концепции; Цветовые и шрифтовые версии; Подготовка файлов логотипа; Мини-гайд по использованию.",
  "- brand_identity: Анализ бренда и аудитории; Визуальная концепция; Логотип и фирменная графика; Цвет и типографика; Носители фирменного стиля; Бренд-гайд; Подготовка файлов к передаче.",
  "- packaging: Анализ продукта и требований производства; Концепция упаковки; Дизайн лицевой стороны; Дизайн боковых/оборотных сторон; Адаптация под линейку SKU; Препресс и подготовка файлов к передаче; Согласование и правки.",
  "- presentation: Анализ материалов и сценарий; Структура презентации; Визуальная концепция; Дизайн типовых слайдов; Дизайн сложных слайдов; Подготовка PDF/PPTX к передаче; Согласование и правки.",
  "- smm: Анализ рубрик и задач; Визуальная концепция соцсетей; Шаблоны постов; Шаблоны сторис; Обложки и рекламные форматы; Подготовка файлов к передаче; Согласование и правки.",
  "- marketplaces: Анализ товара и требований площадки; Концепция карточки; Дизайн главного изображения; Инфографика преимуществ; Галерея изображений; Адаптация под площадки; Подготовка файлов к передаче.",
  "- outdoor: Анализ носителей и требований печати; Концепция наружной рекламы; Дизайн основного макета; Адаптации под форматы; Проверка читаемости; Препресс и подготовка файлов к передаче; Согласование и правки.",
  "- print: Анализ материалов и концепция; Дизайн обложки; Вёрстка внутренних разворотов; Работа с изображениями и схемами; Макеты рекламных блоков; Согласование и правки; Препресс и подготовка файлов к передаче.",
  "- custom: Анализ задачи; Концепция решения; Дизайн основных материалов; Адаптация форматов; Подготовка файлов к передаче; Согласование и правки.",
  "",
  "Верни ТОЛЬКО валидный JSON без пояснений, по схеме:",
  '{',
  '  "estimate_title": "короткое название сметы",',
  '  "project_type": "website|logo|brand_identity|packaging|presentation|smm|marketplaces|outdoor|print|custom",',
  '  "brand_name": "имя бренда или пустая строка",',
  '  "stages": [{ "name": "этап", "description": "что входит в этап", "hours": число }],',
  '  "pricing_risks": ["возможный риск по цене"],',
  '  "additional_costs": ["возможный доп. расход"]',
  '}',
  "Сделай 5–8 этапов. Деньги и итоговую сумму НЕ считай — только часы.",
  "В additional_costs указывай только реальные внешние расходы или оплачиваемые сверх объема работы: фотостоки, шрифты, цветопроба, печать тестового экземпляра, срочная ретушь сверх брифа.",
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
    payload = normalizeAnalysis(JSON.parse(match ? match[0] : "{}"), brief);
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

function normalizeAnalysis(value, sourceText = "") {
  if (!value || typeof value !== "object" || !Array.isArray(value.stages) || !value.stages.length) {
    throw new Error("Empty analysis");
  }
  const projectType = PROJECT_TYPES.has(value.project_type) ? value.project_type : "custom";
  const stages = value.stages.slice(0, 8).map((stage) => {
    const hours = Math.round(Number(stage?.hours));
    if (!stage || !String(stage.name || "").trim() || !Number.isFinite(hours) || hours < 1 || hours > 1000) {
      throw new Error("Invalid stage");
    }
    return {
      name: normalizeStageName(stage.name),
      description: normalizeStageDescription(stage.description),
      hours,
    };
  });
  const adjustedStages = applyPrintMinimumHours(stages, projectType, sourceText);
  return {
    estimate_title: String(value.estimate_title || "Смета по брифу").trim().slice(0, 160),
    project_type: projectType,
    brand_name: String(value.brand_name || "").trim().slice(0, 120),
    stages: adjustedStages,
    pricing_risks: asStringList(value.pricing_risks),
    additional_costs: asStringList(value.additional_costs),
  };
}

function normalizeStageName(value) {
  const name = String(value || "").trim();
  const normalized = name.toLowerCase();
  if (["правочки", "правки", "корректировки"].includes(normalized) || /правоч/i.test(normalized)) return "Согласование и правки";
  if (/pdf\/?x/i.test(normalized) || /финальн.*файл/i.test(normalized) || /допечат/i.test(normalized) || /препресс/i.test(normalized)) return "Препресс и подготовка файлов к передаче";
  if (/сетк/i.test(normalized)) return "Визуальная концепция и структура макетов";
  if (/^св[её]рстк/i.test(normalized)) return capitalizeStageName(name.replace(/^св[её]рстк/i, "вёрстк"));
  if (/^верстка$/i.test(name) || /^вёрстка$/i.test(name)) return "Вёрстка брошюры";
  return capitalizeStageName(name).slice(0, 120);
}

function normalizeStageDescription(value) {
  const text = String(value || "")
    .trim()
    .replace(/правоч[а-яё]*/gi, "правок")
    .replace(/^создание файла в формате pdf\/x для типографии и отдельного файла для онлайн-просмотра$/i, "Проверка макетов, вылетов и цветового режима, экспорт печатного PDF и версии для онлайн-просмотра")
    .replace(/pdf\/x/gi, "печатный PDF")
    .replace(/создание\s+сетк[а-яё]*/gi, "проработка структуры")
    .replace(/сетк[а-яё]*/gi, "структуры")
    .replace(/\bсв[её]рстк/gi, "вёрстк")
    .slice(0, 500);
  return capitalizeStageName(text);
}

function capitalizeStageName(value) {
  const text = String(value || "").trim();
  return text ? text.charAt(0).toUpperCase() + text.slice(1) : "";
}

function applyPrintMinimumHours(stages, projectType, sourceText) {
  const source = String(sourceText || "").toLowerCase();
  const looksLikeMultipagePrint = projectType === "print"
    && /(брошюр|каталог|журнал|многостранич|буклет)/i.test(source);
  if (!looksLikeMultipagePrint) return stages;

  const pagesMatch = source.match(/(\d{1,3})\s*(?:страниц|страницы|страница|стр\.|полос|полосы|полоса)/i);
  const pages = pagesMatch ? Number(pagesMatch[1]) : 0;
  const minimum = pages >= 20 ? 70 : pages >= 12 ? 55 : pages >= 8 ? 40 : 0;
  const total = stages.reduce((sum, stage) => sum + stage.hours, 0);
  if (!minimum || total >= minimum) return stages;

  const factor = minimum / total;
  const scaled = stages.map((stage) => ({
    ...stage,
    hours: Math.max(1, Math.round(stage.hours * factor)),
  }));
  let diff = minimum - scaled.reduce((sum, stage) => sum + stage.hours, 0);
  for (let index = 0; diff > 0; index = (index + 1) % scaled.length) {
    scaled[index].hours += 1;
    diff -= 1;
  }
  return scaled;
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
