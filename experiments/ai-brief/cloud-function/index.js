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
  "- если в брифе несколько сущностей, считай это как пакет работ: общая база один раз, затем отдельные носители/форматы;",
  "- не теряй deliverables из брифа: логотип, брендинг, бирки, упаковка, посты, сторис, презентация, лендинг, сайт, печатные материалы, наружная реклама;",
  "- не используй технические термины в названиях этапов, если клиенту можно сказать проще;",
  "- названия этапов должны быть профессиональными, короткими и понятными клиенту;",
  "- описания должны объяснять пользу этапа, а не повторять название;",
  "- тон описаний: спокойный, деловой, человеческий, без канцелярита, маркетинговой воды и сленга;",
  "- часы оценивай реалистично для ОДНОГО дизайнера, без оптимистичного занижения.",
  "",
  "Обязательная логика структуры:",
  "- любой проект начинается с «Брифинг и сбор данных» или, для сайта, «Брифинг и сбор требований»;",
  "- для средних и сложных проектов после брифинга добавляй «Исследование и стратегия» или «Исследование и анализ»;",
  "- для простых задач вроде визитки, простого баннера, одной бирки или одного поста НЕ добавляй отдельное исследование и стратегию: после брифинга переходи к «Мудборд и референсы» или дизайну макета;",
  "- в каждой смете должен быть этап подготовки файлов: «Подготовка и передача файлов», «Подготовка к передаче» или для печати «Препресс и подготовка файлов к передаче»;",
  "- в каждой смете должен быть этап «Согласование и правки» или «Финальное согласование и правки».",
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
  "Эталонные формулировки из согласованных шаблонов DesiDoc. По возможности используй эти названия и тон описаний, адаптируя под бриф:",
  "- Брифинг и сбор данных: Интервью с заказчиком, сбор вводной информации, формулировка задач, ограничений и критериев успеха.",
  "- Брифинг и сбор требований: Краткая сессия с заказчиком, уточнение целей, задач, аудитории, количества нужных страниц и обязательных функций.",
  "- Исследование и стратегия: Конкурентный анализ, изучение ЦА, аудит текущих материалов, формулировка позиционирования и основных стратегических выводов.",
  "- Исследование и анализ: Анализ конкурентов и референсов, ресерч целевой аудитории, сбор вдохновляющих примеров, фиксация допущений по структуре и стилю.",
  "- Мудборд и референсы: Сбор и отбор референсов, формулировка визуальных принципов, подготовка 1-2 направлений визуальной концепции.",
  "- Визуальная концепция: Формулировка визуального стиля: moodboard, цветовая палитра, типографика, графические приемы и развитие айдентики под проект.",
  "- Логотип и знаковая графика: Отрисовка нескольких вариантов логотипа в выбранном направлении, выбор и доработка финальной версии знака.",
  "- Цвет и типографика: Подбор основной и дополнительной палитры, выбор шрифтов и настройка типографической иерархии, базовые правила сочетаний.",
  "- Графические приёмы: Разработка паттернов, форм и иконок, определение фото-стиля и принципов компоновки для фирменных носителей.",
  "- Ключевые носители: Дизайн ключевых носителей на выбор: визитка, бирка, шаблон презентации, SMM-шаблоны, лендинг и другие приоритетные форматы.",
  "- Проектирование и структура: Составление карты сайта, определение логики переходов и базовых пользовательских сценариев.",
  "- Прототипирование: Создание wireframes для ключевых страниц: компоновка блоков, функции и последовательность подачи информации.",
  "- UI-дизайн: Отрисовка детальных дизайн-макетов: главная, второстепенные страницы, адаптация под десктоп, мобильный и планшет.",
  "- Подготовка UI-кита: Систематизация компонентов: кнопки, формы, иконки, элементы интерфейса, цвета и шрифты.",
  "- Дизайн ключевых блоков: Отрисовка визуала ключевых экранов и подготовка стиля для дальнейшей сборки на Tilda.",
  "- Сборка на Tilda и адаптив: Сборка страниц и блоков в Tilda, настройка мобильной и планшетной версий сразу внутри платформы.",
  "- Формы и базовые настройки: Подключение форм, уведомлений, базовых настроек страницы и проверка технических мелочей перед запуском.",
  "- Структура презентации: Сценарий и логика подачи: порядок слайдов, нарратив и переходы.",
  "- Дизайн-концепция: Стиль, цвет, шрифты — утверждение визуального направления на 2-3 слайдах.",
  "- Простые слайды: Типовые слайды: заголовок, текст, списки по готовому мастер-шаблону.",
  "- Сложные слайды: Слайды с графиками, диаграммами, схемами, коллажами и инфографикой.",
  "- Подготовка и передача файлов: Экспорт логотипов и элементов в нужных форматах, настройка структуры папок и наведение порядка в рабочих файлах для передачи.",
  "- Подготовка к передаче: Сборка итогового пакета: экспорт макетов, спецификации для разработчиков и инструкция по использованию.",
  "- Препресс и подготовка файлов к передаче: Проверка макетов, вылетов, цветового режима и экспорт печатного PDF плюс версии для онлайн-просмотра.",
  "- Гайдлайн: Структура и наполнение брендбука: разделы, логика подачи, правила использования фирменного стиля с примерами.",
  "- Согласование и правки: Коммуникация с заказчиком, правки по визуалу, финальное утверждение.",
  "- Финальное согласование и правки: Работа по замечаниям заказчика, обычно 1-2 раунда правок, адаптация по дополнительным пожеланиям.",
  "",
  "Примеры сборки сложных пакетов:",
  "- логотип + брендинг + бирки + 3 поста: Брифинг и сбор данных; Исследование и стратегия; Мудборд и референсы; Логотип и знаковая графика; Цвет и типографика; Ключевые носители; Подготовка и передача файлов; Согласование и правки.",
  "- упаковка + карточки маркетплейса + баннеры: Брифинг и сбор данных; Исследование и стратегия; Визуальная концепция; Дизайн упаковки; Карточки товара и инфографика; Баннеры и рекламные форматы; Препресс и подготовка файлов к передаче; Согласование и правки.",
  "- презентация + лендинг + SMM-анонсы: Брифинг и сбор требований; Исследование и анализ; Структура презентации; Дизайн-концепция; UI-дизайн; SMM-шаблоны; Подготовка к передаче; Финальное согласование и правки.",
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
