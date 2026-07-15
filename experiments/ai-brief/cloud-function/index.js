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

// Простой rate limit: тёплые инстансы функции живут между вызовами, поэтому
// память реально ограничивает всплески. Защищает бюджет YandexGPT от спама.
// RATE_LIMIT_PER_MIN — на один IP, RATE_LIMIT_GLOBAL_PER_MIN — на инстанс.
const rateBuckets = new Map();

function isRateLimited(ip) {
  const perIp = Number(process.env.RATE_LIMIT_PER_MIN || 6);
  const global = Number(process.env.RATE_LIMIT_GLOBAL_PER_MIN || 60);
  const now = Date.now();
  const hit = (key, limit) => {
    const bucket = rateBuckets.get(key);
    if (!bucket || now > bucket.resetAt) {
      rateBuckets.set(key, { count: 1, resetAt: now + 60000 });
      return false;
    }
    bucket.count += 1;
    return bucket.count > limit;
  };
  if (rateBuckets.size > 5000) rateBuckets.clear();
  const globalLimited = hit("__global__", global);
  const ipLimited = hit("ip:" + ip, perIp);
  return globalLimited || ipLimited;
}

// ── Маршрут 1: классификатор ──────────────────────────────────────────────
// Если бриф — «чистый» типовой проект, этапы берём из готовых шаблонов DesiDoc
// на сайте, а модель только классифицирует. Для стандартных заказов это
// убирает генерацию (и галлюцинации) полностью.
const TEMPLATE_ROUTES = new Set(["logo", "branding", "landing_design", "landing_tilda", "presentation"]);

const TEMPLATE_TITLES = {
  logo: "Разработка логотипа",
  branding: "Фирменный стиль",
  landing_design: "Дизайн сайта",
  landing_tilda: "Сайт на Tilda",
  presentation: "Дизайн презентации",
};

const CLASSIFIER_PROMPT = [
  "Ты определяешь тип дизайн-проекта по брифу клиента.",
  "Верни ТОЛЬКО JSON без пояснений:",
  '{"route":"logo|branding|landing_design|landing_tilda|presentation|other","pure":true,"brand_name":"","title":"короткое название проекта до 6 слов","slides":0}',
  "",
  "Значения route:",
  "- logo — только логотип (возможно, с гайдом по логотипу), БЕЗ фирменного стиля и носителей;",
  "- branding — логотип + фирменный стиль / айдентика / брендбук;",
  "- landing_tilda — сайт или лендинг именно на Tilda (сборка на платформе);",
  "- landing_design — дизайн сайта или лендинга без сборки на Tilda;",
  "- presentation — презентация (слайды);",
  "- other — всё остальное: упаковка, полиграфия, SMM, маркетплейсы, наружная реклама, нейро-задачи, а также ПАКЕТЫ из нескольких продуктов.",
  "",
  "pure = true только если бриф про ОДИН проект выбранного типа без дополнительных крупных продуктов.",
  "Если к логотипу просят носители, посты, упаковку или сайт — это пакет: route \"other\", pure false.",
  "slides — число слайдов, если это презентация и число указано; иначе 0.",
  "brand_name — название бренда или компании из брифа, иначе пустая строка.",
  "",
  "Примеры:",
  'Бриф: «Нужен логотип для стоматологии, 2-3 варианта» → {"route":"logo","pure":true,"brand_name":"","title":"Логотип для стоматологии","slides":0}',
  'Бриф: «Питч-дек на 18 слайдов для стартапа FinTrack» → {"route":"presentation","pure":true,"brand_name":"FinTrack","title":"Питч-дек для FinTrack","slides":18}',
  'Бриф: «Лендинг на Тильде для курса по йоге» → {"route":"landing_tilda","pure":true,"brand_name":"","title":"Лендинг на Tilda для курса йоги","slides":0}',
  'Бриф: «Логотип и упаковка для мыла ручной работы» → {"route":"other","pure":false,"brand_name":"","title":"Логотип и упаковка","slides":0}',
].join("\n");

// ── Маршрут 2: генерация для пакетов и нестандартных проектов ─────────────
// Ключевые отличия от старого промпта: закрытое меню этапов с ДИАПАЗОНАМИ
// часов, короткий список правил и примеры с числами. Диапазоны продублированы
// жёсткими рамками в коде (STAGE_HOUR_LIMITS) — даже если модель ошибётся,
// часы вернутся в разумные пределы.
const GENERATION_PROMPT = [
  "Ты — опытный арт-директор. Преврати бриф клиента в предварительную смету для ОДНОГО дизайнера-фрилансера: этапы, короткие описания и реалистичные часы.",
  "",
  "Верни ТОЛЬКО валидный JSON без пояснений:",
  '{"estimate_title":"короткое название сметы","project_type":"website|logo|brand_identity|packaging|presentation|smm|marketplaces|outdoor|print|custom","brand_name":"имя бренда или пустая строка","stages":[{"name":"этап","description":"что входит","hours":число,"unit":"hour|item|slide|screen|page","quantity":число}],"pricing_risks":["риск"],"additional_costs":[{"title":"внешний расход","amount":число}]}',
  "",
  "МЕНЮ ЭТАПОВ — бери названия и описания отсюда; часы держи В УКАЗАННОМ ДИАПАЗОНЕ:",
  "- Брифинг и сбор данных (2-4 ч): интервью с заказчиком, уточнение задач, контекста использования, ограничений и пожеланий, фиксация требований к результату.",
  "- Брифинг и сбор требований (1-3 ч): для сайтов — цели, аудитория, количество страниц и обязательные функции.",
  "- Исследование и стратегия (4-10 ч): конкурентный анализ, изучение ЦА, аудит материалов, позиционирование.",
  "- Исследование и анализ (4-10 ч): для сайтов — анализ конкурентов и референсов, ресерч аудитории.",
  "- Мудборд и референсы (4-12 ч): отбор референсов, визуальные принципы, 1-2 направления концепции.",
  "- Визуальная концепция (4-12 ч): стиль, палитра, типографика, графические приёмы под проект; для печатных носителей — 2-3 варианта оформления ключевой страницы или разворота на согласование.",
  "- Логотип и знаковая графика (10-24 ч): варианты логотипа, выбор и доработка финального знака.",
  "- Цвет и типографика (2-8 ч): палитра, шрифты, типографическая иерархия, правила сочетаний.",
  "- Графические приёмы (6-18 ч): паттерны, формы, иконки, фото-стиль, принципы компоновки.",
  "- Ключевые носители (4-16 ч): визитка, бирка, шаблоны, SMM-шаблоны и другие приоритетные форматы.",
  "- Проектирование и структура (4-12 ч): карта сайта, логика переходов, пользовательские сценарии.",
  "- Прототипирование (4-10 ч): wireframes ключевых страниц, компоновка блоков.",
  "- UI-дизайн (8-40 ч): детальные макеты страниц и адаптация под десктоп, мобильный, планшет.",
  "- Подготовка UI-кита (3-8 ч): систематизация компонентов, цветов и шрифтов.",
  "- Дизайн ключевых блоков (8-16 ч): визуал ключевых экранов и стиль для сборки на Tilda.",
  "- Сборка на Tilda и адаптив (12-30 ч): сборка страниц в Tilda, мобильная и планшетная версии.",
  "- Формы и базовые настройки (1-4 ч): формы, уведомления, настройки перед запуском.",
  "- Дизайн коробки (8-24 ч): все стороны упаковки и внутренняя часть, с учётом развертки.",
  "- Дизайн инструкции (3-10 ч): структура, иконки, схемы, инфографика.",
  "- Дизайн приветственного вкладыша (1-4 ч): карточка с сообщением, QR-кодом и контактами.",
  "- Дизайн стикерпака (3-10 ч): набор стикеров в стиле проекта с подготовкой к производству.",
  "- Структура презентации (2-6 ч): сценарий и логика подачи, порядок слайдов.",
  "- Дизайн-концепция (4-10 ч): визуальное направление на 2-3 ключевых слайдах.",
  '- Простые слайды (0,5-1 ч за слайд; unit "slide"): типовые слайды по мастер-шаблону.',
  '- Сложные слайды (1-3 ч за слайд; unit "slide"): графики, диаграммы, схемы, коллажи, инфографика.',
  "- Подготовка и передача файлов (1-5 ч): экспорт, структура папок, порядок в исходниках.",
  "- Подготовка к передаче (1-5 ч): итоговый пакет, спецификации для разработчиков.",
  "- Подготовка файлов к печати (2-8 ч): растрирование изображений, добавление вылетов, перевод в CMYK, перевод текстов в кривые, печатный PDF по требованиям типографии; многостраничные издания — больше.",
  "- Краткий логотип-гайд (4-8 ч): правила использования логотипа.",
  "- Мини-гайд по фирменному стилю (4-8 ч): краткие правила: логотип, цвет, типографика.",
  "- Брендбук (10-18 ч): структура и наполнение брендбука с примерами.",
  "- Визуализация на носителях (2-6 ч): применение стиля на 2-3 носителях из брифа.",
  "- Согласование и правки (4-10 ч): коммуникация с заказчиком, правки, финальное утверждение.",
  "",
  "ПРАВИЛА (по убыванию важности):",
  "1. Названия этапов — из МЕНЮ. Своё название можно только для работ, которых в меню нет (например «Дизайн 4 постеров», «Монтаж и постобработка»).",
  "2. Часы каждого этапа — строго в диапазоне из меню, и масштабируй их под размер проекта: для небольших задач (1-2 носителя, материалы и стиль уже есть) держись НИЖНЕЙ границы диапазона. Для этапов вне меню — не больше 12 часов.",
  "3. Исследование/анализ и концепция/мудборд — всегда ДВА отдельных этапа, не объединяй их.",
  "4. ПОРЯДОК ЭТАПОВ ФИКСИРОВАН: 1) «Брифинг и сбор данных» — всегда первый; 2) дальше «Исследование и стратегия» ТОЛЬКО если в брифе мало вводных; если клиент уже принёс материалы, референсы или понятный стиль — сразу «Мудборд и референсы»; 3) концепция; 4) дизайн носителей — по одному этапу на каждый носитель; 5) подготовка файлов; 6) «Согласование и правки» — последний этап.",
  "5. Обязательны: подготовка файлов («Подготовка файлов к печати», если что-то печатается, иначе «Подготовка и передача файлов») и «Согласование и правки». Каждый этап встречается в смете не больше одного раза — дубли запрещены.",
  "6. Если материал уже есть у клиента (логотип, QR-код, тексты, фото, брендбук) — его размещение НЕ отдельный этап; если всё же выделяешь, максимум 1 час.",
  "7. Документация — только ОДИН этап: «Брендбук», либо «Мини-гайд по фирменному стилю» (если прямо просят краткий), либо «Краткий логотип-гайд» (если только логотип).",
  "8. Простая задача — 3-5 этапов, средняя — 5-8, пакет из нескольких продуктов — 7-10. Не теряй ни один продукт из брифа.",
  "9. Нейро-задачи: идея/промпты, генерация и отбор, ручная доводка — отдельные этапы; подписки и кредиты сервисов — в additional_costs, НЕ в часы.",
  '10. Для поштучных работ используй unit "item|slide|screen|page" и quantity; hours — общий ориентир на весь этап.',
  "11. Запрещены слова: «правочки», «картинки», «допилки», «свёрстка», «сетка», «PDF/X», «Генерация кода», «Добавление логотипа».",
  "12. Описание — одно деловое предложение о пользе этапа, без канцелярита и воды.",
  "13. Если объём не зафиксирован (число слайдов, страниц, креативов, раундов правок) — добавь pricing_risks.",
  "14. Деньги и итог не считай; в additional_costs — только реальные внешние расходы: шрифты, фотостоки, цветопроба, печать образца, кредиты нейросервисов.",
  "15. Адаптации по уже готовой системе (второй носитель, сезонная версия, дополнительный формат) оценивай примерно вдвое дешевле первого носителя.",
  "16. Конкретные пожелания клиента (шаблонность для самостоятельного обновления, идеи распаковки, варианты первой страницы) не теряй — отражай их в описаниях этапов.",
  "",
  "ОСОБЫЕ СЛУЧАИ:",
  "- Упаковка: Брифинг и сбор данных (3 ч) → (если мало вводных) Исследование и стратегия → Мудборд и референсы → Дизайн коробки (внешняя и внутренняя части — один этап) → отдельные материалы (инструкция, вкладыш, стикерпак) → Подготовка файлов к печати → Согласование и правки.",
  "- Брендинг/фирменный стиль (в том числе в пакете): этапы меню в порядке: Логотип и знаковая графика → Цвет и типографика → Графические приёмы → Ключевые носители → документация.",
  "- Многостраничная печать (брошюра, каталог, журнал): вёрстка и препресс занимают десятки часов, не занижай.",
  "- Отдельный этап «Финальная проверка» допустим только для сайтов и Tilda.",
  "",
  "ПРИМЕР 1. Бриф: «Нужен логотип и фирменный стиль для кофейни Крафт, плюс бирки на стаканы и 3 поста для анонса. Достаточно мини-гайда.»",
  'Ответ: {"estimate_title":"Фирменный стиль для кофейни","project_type":"brand_identity","brand_name":"Крафт","stages":[{"name":"Брифинг и сбор данных","description":"Интервью с заказчиком, уточнение задач, контекста, ограничений и пожеланий, фиксация требований к результату.","hours":3},{"name":"Исследование и стратегия","description":"Конкурентный анализ, изучение аудитории и позиционирование.","hours":6},{"name":"Мудборд и референсы","description":"Отбор референсов и 1-2 направления визуальной концепции.","hours":8},{"name":"Логотип и знаковая графика","description":"Варианты логотипа, выбор и доработка финального знака.","hours":16},{"name":"Цвет и типографика","description":"Палитра, шрифты и правила сочетаний.","hours":4},{"name":"Ключевые носители","description":"Дизайн бирок на стаканы и трёх постов для анонса.","hours":8},{"name":"Мини-гайд по фирменному стилю","description":"Краткие правила: логотип, цвет, типографика и базовые элементы.","hours":6},{"name":"Подготовка и передача файлов","description":"Экспорт материалов и порядок в исходниках для передачи.","hours":3},{"name":"Согласование и правки","description":"Коммуникация с заказчиком, правки и финальное утверждение.","hours":6}],"pricing_risks":["Не зафиксировано количество раундов правок"],"additional_costs":[{"title":"Лицензии на платные шрифты","amount":0}]}',
  "",
  "ПРИМЕР 2. Бриф: «Меню для кофейни: основное А4 двухстороннее и сезонное А5, PDF для типографии. Логотип, цвета и фото есть. Хотим варианты первой страницы и возможность самим менять позиции.»",
  'Ответ: {"estimate_title":"Дизайн меню для кофейни","project_type":"print","brand_name":"","stages":[{"name":"Брифинг и сбор данных","description":"Интервью с заказчиком, уточнение задач, контекста, ограничений и пожеланий, фиксация требований к результату.","hours":2},{"name":"Мудборд и референсы","description":"Отбор референсов под интерьер и стиль кофейни, визуальные принципы подачи меню.","hours":4},{"name":"Визуальная концепция","description":"2-3 варианта оформления первой страницы меню на согласование перед вёрсткой всех разделов.","hours":5},{"name":"Дизайн основного меню","description":"Вёрстка двухстороннего меню А4 по согласованной концепции, структура позволяет самостоятельно менять позиции.","hours":8},{"name":"Дизайн сезонного меню","description":"Адаптация готовой системы под формат А5.","hours":4},{"name":"Подготовка файлов к печати","description":"Растрирование изображений, вылеты, перевод в CMYK, тексты в кривые, печатный PDF по требованиям типографии.","hours":3},{"name":"Согласование и правки","description":"Коммуникация с заказчиком, правки и финальное утверждение.","hours":4}],"pricing_risks":["Список позиций и цены будут предоставлены после старта — объём вёрстки может измениться"],"additional_costs":[]}',
  "",
  "ПРИМЕР 3. Бриф: «Оформление витрины магазина и 4 постера A1. Логотип, брендбук и тексты уже есть. Иллюстрации сгенерировать нейросетью.»",
  'Ответ: {"estimate_title":"Витрина и постеры","project_type":"print","brand_name":"","stages":[{"name":"Брифинг и сбор данных","description":"Сбор вводных, размеров витрины и требований к печати.","hours":2},{"name":"Визуальная концепция","description":"Единый стиль оформления витрины и серии постеров.","hours":6},{"name":"AI-визуалы и ручная доводка","description":"Промпты, генерация, отбор вариантов и ретушь итоговых изображений.","hours":8},{"name":"Дизайн 4 постеров","description":"Макеты постеров A1 на основе концепции и готовых материалов.","hours":10,"unit":"item","quantity":4},{"name":"Подготовка файлов к печати","description":"Растрирование изображений, вылеты, перевод в CMYK, тексты в кривые, экспорт печатного PDF.","hours":4},{"name":"Согласование и правки","description":"Правки по замечаниям заказчика и финальное утверждение.","hours":5}],"pricing_risks":["Не зафиксировано количество генераций и раундов отбора"],"additional_costs":[{"title":"Подписка/кредиты Midjourney / Krea / Magnific","amount":5000}]}',
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

  const clientIp = String(event.headers?.["X-Forwarded-For"] || event.headers?.["x-forwarded-for"] || "unknown")
    .split(",")[0]
    .trim();
  if (isRateLimited(clientIp)) {
    return json(429, { error: "Слишком много запросов. Попробуйте через минуту." }, headers);
  }

  if (!FOLDER_ID) return json(500, { error: "Не задан FOLDER_ID" }, headers);

  // Тело запроса (может прийти в base64 — обрабатываем оба случая).
  let raw = event.body || "{}";
  if (event.isBase64Encoded) raw = Buffer.from(raw, "base64").toString("utf-8");

  let brief = "";
  let level = "middle";
  try {
    const parsed = JSON.parse(raw);
    brief = String(parsed.brief || "").trim();
    if (["junior", "middle", "senior"].includes(parsed.level)) level = parsed.level;
  } catch (e) {}

  if (!brief || brief.length > 4000) {
    return json(400, { error: "Некорректный бриф" }, headers);
  }

  // IAM-токен привязанного сервисного аккаунта — ключ хранить НЕ нужно.
  const token = context.token && context.token.access_token;
  if (!token) return json(500, { error: "Нет токена сервисного аккаунта" }, headers);

  const cleanBrief = stripPII(brief);

  // Маршрут 1: «чистый» типовой проект → готовые шаблоны этапов DesiDoc.
  // Классификация — сильная сторона YandexGPT; этапы модель не генерирует вовсе.
  try {
    const route = await classifyBrief(token, cleanBrief);
    if (route && TEMPLATE_ROUTES.has(route.route) && route.pure === true) {
      return json(200, {
        mode: "template",
        project_key: route.route,
        estimate_title: String(route.title || "").trim().slice(0, 160) || TEMPLATE_TITLES[route.route],
        brand_name: String(route.brand_name || "").trim().slice(0, 120),
        slides: Math.max(0, Math.round(Number(route.slides) || 0)),
        pricing_risks: [],
        additional_costs: [],
      }, headers);
    }
  } catch (e) {
    // Классификатор не критичен: при любом сбое просто идём в генерацию.
  }

  // Маршрут 2: пакеты и нестандартные проекты → генерация сметы моделью.
  let text;
  try {
    text = await callModel(token, GENERATION_PROMPT, cleanBrief, { temperature: 0.15, maxTokens: "2000" });
  } catch (e) {
    return json(502, { error: "AI недоступен" }, headers);
  }

  // Достаём JSON из ответа модели (на случай, если вокруг него будет лишний текст).
  const match = text.match(/\{[\s\S]*\}/);
  let payload;
  try {
    payload = normalizeAnalysis(JSON.parse(match ? match[0] : "{}"), brief, level);
  } catch (error) {
    return json(502, { error: "AI вернул некорректный формат" }, headers);
  }

  return {
    statusCode: 200,
    headers: { ...headers, ...JSON_HEADERS },
    body: JSON.stringify(payload),
  };
};

async function callModel(token, systemPrompt, userText, options = {}) {
  const modelUri = MODEL.includes("/")
    ? `gpt://${FOLDER_ID}/${MODEL}`
    : `gpt://${FOLDER_ID}/${MODEL}/latest`;
  const resp = await fetch("https://ai.api.cloud.yandex.net/foundationModels/v1/completion", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      modelUri,
      completionOptions: {
        stream: false,
        temperature: options.temperature ?? 0.15,
        maxTokens: String(options.maxTokens || "2000"),
      },
      jsonObject: true,
      messages: [
        { role: "system", text: systemPrompt },
        { role: "user", text: userText },
      ],
    }),
  });
  if (!resp.ok) throw new Error(`model status ${resp.status}`);
  const data = await resp.json();
  return data?.result?.alternatives?.[0]?.message?.text || "";
}

async function classifyBrief(token, briefText) {
  const text = await callModel(token, CLASSIFIER_PROMPT, briefText, { temperature: 0, maxTokens: "300" });
  const match = text.match(/\{[\s\S]*\}/);
  const parsed = JSON.parse(match ? match[0] : "{}");
  return {
    route: String(parsed.route || "").trim(),
    pure: parsed.pure === true,
    brand_name: parsed.brand_name,
    title: parsed.title,
    slides: parsed.slides,
  };
}

const PROJECT_TYPES = new Set([
  "website", "logo", "brand_identity", "packaging", "presentation",
  "smm", "marketplaces", "outdoor", "print", "custom",
]);
const STAGE_UNITS = new Set(["hour", "item", "slide", "screen", "page"]);

// Внутренний ориентир по внешним AI-расходам.
// Основан на опубликованном прайсе подписок/кредитов нейросервисов:
// Midjourney, Krea, Magnific, Kling, Runway, Luma, ElevenLabs, Minimax.
// Это не цена работы дизайнера, а резерв на подписки, кредиты и платные генерации.
const AI_TOOL_COSTS = {
  imageSmall: {
    title: "Подписка/кредиты Midjourney / Krea / Magnific",
    amount: 3000,
  },
  imageSeries: {
    title: "Подписка/кредиты Midjourney / Krea / Magnific",
    amount: 8000,
  },
  imageLarge: {
    title: "Подписка/кредиты Midjourney / Krea / Magnific",
    amount: 12000,
  },
  imageUpscale: {
    title: "Подписка/кредиты Midjourney / Magnific для генерации и апскейла",
    amount: 6000,
  },
  videoShort: {
    title: "Кредиты Kling / Runway / Luma для нейровидео",
    amount: 15000,
  },
  videoMedium: {
    title: "Кредиты Kling / Runway / Luma для нейровидео",
    amount: 30000,
  },
  audio: {
    title: "Кредиты ElevenLabs / Minimax для озвучки",
    amount: 3000,
  },
};

function normalizeAnalysis(value, sourceText = "", level = "middle") {
  if (!value || typeof value !== "object" || !Array.isArray(value.stages) || !value.stages.length) {
    throw new Error("Empty analysis");
  }
  const projectType = normalizeProjectType(value.project_type, sourceText);
  const stages = value.stages
    .slice(0, 10)
    .map((stage) => {
    let hours = Math.round(Number(stage?.hours));
    if (!stage || !String(stage.name || "").trim() || !Number.isFinite(hours) || hours < 1 || hours > 1000) {
      throw new Error("Invalid stage");
    }
    if (isProvidedAssetPlacementStage(stage, sourceText)) hours = 1;
    if (isVisualizationStage(stage)) hours = Math.min(hours, 6);
    const stageName = normalizeStageName(stage.name, projectType, sourceText);
    return {
      name: stageName,
      description: normalizeStageDescription(stage.description, stageName),
      hours,
      ...normalizeStageBilling(stage),
    };
  });
  if (!stages.length) throw new Error("Empty analysis");
  const adjustedStages = applyPrintMinimumHours(
    scaleHoursForLevel(
      orderStages(dedupeStages(clampStageHours(postProcessStages(stages, projectType, sourceText))), projectType),
      level
    ),
    projectType,
    sourceText
  );
  const costs = ensureAiToolCosts(
    filterIrrelevantAiCosts(normalizeAdditionalCosts(value.additional_costs), sourceText),
    sourceText
  );
  return {
    estimate_title: String(value.estimate_title || "Смета по брифу").trim().slice(0, 160),
    project_type: projectType,
    brand_name: String(value.brand_name || "").trim().slice(0, 120),
    stages: adjustedStages,
    pricing_risks: asStringList(value.pricing_risks),
    additional_costs: costs,
  };
}

function normalizeProjectType(value, sourceText) {
  const projectType = PROJECT_TYPES.has(value) ? value : "custom";
  if (projectType === "packaging" || hasPackagingProjectIntent(sourceText)) return "packaging";
  if (hasBrandIdentityIntent(sourceText)) return "brand_identity";
  if (hasWebsiteProjectIntent(sourceText)) return "website";
  return projectType;
}

function normalizeStageBilling(stage) {
  const unit = STAGE_UNITS.has(stage?.unit) ? stage.unit : "hour";
  if (unit === "hour") return {};
  const quantity = Math.round(Number(stage?.quantity || 0));
  if (!Number.isFinite(quantity) || quantity < 1 || quantity > 1000) return {};
  const unitPrice = Math.round(Number(stage?.unit_price ?? stage?.unitPrice ?? 0));
  return {
    unit,
    quantity,
    ...(Number.isFinite(unitPrice) && unitPrice > 0 ? { unit_price: unitPrice } : {}),
  };
}

function postProcessStages(stages, projectType, sourceText) {
  const result = [];
  stages.forEach((stage) => {
    if (isDocumentationStage(stage)) {
      const documentationStage = normalizeDocumentationStage(stage, projectType, sourceText);
      const existingIndex = result.findIndex(isDocumentationStage);
      if (existingIndex === -1) {
        result.push(documentationStage);
      } else {
        result[existingIndex] = mergeDocumentationStages(result[existingIndex], documentationStage, sourceText);
      }
      return;
    }
    result.push(stage);
  });

  const projectStages = projectType === "packaging"
    ? postProcessPackagingStages(result, sourceText)
    : result;

  return ensureRequiredWorkflowStages(projectStages, projectType, sourceText);
}

function ensureRequiredWorkflowStages(stages, projectType, sourceText = "") {
  const result = [...stages];
  const hasBriefing = result.some(isBriefingStage);
  if (!hasBriefing) {
    if (projectType === "website") {
      result.unshift({
        name: "Брифинг и сбор требований",
        description: "Краткая сессия с заказчиком, уточнение целей, задач, аудитории, количества нужных страниц и обязательных функций.",
        hours: 2,
      });
    } else if (projectType === "packaging") {
      result.unshift({
        name: "Брифинг и сбор данных",
        description: "Сбор вводных, продукта, материалов, развертки и требований типографии.",
        hours: 3,
      });
    } else {
      result.unshift({
        name: "Брифинг и сбор данных",
        description: "Интервью с заказчиком, уточнение задач, контекста использования, ограничений и пожеланий, фиксация требований к результату.",
        hours: 3,
      });
    }
  }

  if (!result.some(isAnalysisReferenceStage) && !briefShowsClearDirection(sourceText)) {
    insertStageAfter(result, getAnalysisReferenceStage(projectType), isBriefingStage);
  }

  if (!result.some(isConceptStage)) {
    insertStageAfter(result, getConceptStage(projectType), isAnalysisReferenceStage);
  }

  if (!result.some((stage) => isPreparationStage(stage, projectType))) {
    insertBeforeAgreement(result, getPreparationStage(projectType));
  }

  const hasAgreement = result.some(isAgreementStage);
  if (!hasAgreement) {
    result.push({
      name: "Согласование и правки",
      description: "Коммуникация с заказчиком, правки по визуалу, финальное утверждение.",
      hours: 6,
    });
  }

  return result;
}

function insertStageAfter(stages, stage, predicate) {
  const index = stages.findIndex(predicate);
  stages.splice(index >= 0 ? index + 1 : 0, 0, stage);
}

function insertBeforeAgreement(stages, stage) {
  const index = stages.findIndex(isAgreementStage);
  stages.splice(index >= 0 ? index : stages.length, 0, stage);
}

function isBriefingStage(stage) {
  return /(брифинг|сбор\s+(данн|требован|информац|вводн)|интервью)/i.test(normalizeAiText(stage?.name));
}

function isAnalysisReferenceStage(stage) {
  const title = normalizeAiText(stage?.name);
  return /(исследован|анализ|ресерч|аудит|структура\s+презентац)/i.test(title)
    && !/(концепц|мудборд|разработк[а-я\s]+дизайн|дизайн\s+(коробк|упаковк|макет|слайд|сайт|пост|носител))/i.test(title);
}

function isConceptStage(stage) {
  const title = normalizeAiText(stage?.name);
  return /(концепц|выбор\s+направлен|визуальн[а-я\s]+направлен|дизайн-концепц|мудборд|идея\s+и\s+композиция|поиск\s+визуальн)/i.test(title);
}

function isPreparationStage(stage, projectType) {
  const title = normalizeAiText(stage?.name);
  return /(препресс|подготовк[а-я\s]*(и\s+)?(передач|файл|производств|печати)|передач[а-я\s]*файл|экспорт|исходник|ui-kit|подготовк[а-я\s]+к\s+передач)/i.test(title)
    && !(projectType === "website" && /формы|настройк|сборк/i.test(title));
}

function isAgreementStage(stage) {
  return /(согласован|правк|корректировк)/i.test(normalizeAiText(`${stage?.name || ""} ${stage?.description || ""}`));
}

function getAnalysisReferenceStage(projectType) {
  if (projectType === "website") return {
    name: "Исследование и анализ",
    description: "Анализ конкурентов и референсов, ресерч целевой аудитории, сбор вдохновляющих примеров, фиксация допущений по структуре и стилю.",
    hours: 8,
  };
  if (projectType === "presentation") return {
    name: "Структура презентации",
    description: "Сценарий и логика подачи: порядок слайдов, нарратив и переходы.",
    hours: 4,
  };
  if (["logo", "brand_identity", "packaging"].includes(projectType)) return {
    name: "Исследование и стратегия",
    description: "Конкурентный анализ, изучение ЦА, аудит текущих материалов, формулировка позиционирования и основных стратегических выводов.",
    hours: projectType === "packaging" ? 4 : 8,
  };
  return {
    name: "Анализ и референсы",
    description: "Изучение контекста проекта и подбор визуальных ориентиров.",
    hours: 4,
  };
}

function getConceptStage(projectType) {
  if (["logo", "brand_identity", "packaging"].includes(projectType)) return {
    name: "Мудборд и референсы",
    description: "Сбор и отбор референсов, формулировка визуальных принципов, подготовка 1-2 направлений визуальной концепции.",
    hours: projectType === "packaging" ? 6 : 8,
  };
  if (projectType === "website") return {
    name: "Визуальная концепция",
    description: "Формулировка визуального стиля: moodboard, цветовая палитра, типографика, графические приемы и развитие айдентики под веб.",
    hours: 8,
  };
  if (projectType === "presentation") return {
    name: "Дизайн-концепция",
    description: "Стиль, цвет, шрифты — утверждение визуального направления на 2-3 слайдах.",
    hours: 8,
  };
  if (projectType === "print") return {
    name: "Концепция макета",
    description: "Композиция, стиль и визуальная логика будущих материалов.",
    hours: 5,
  };
  if (projectType === "outdoor") return {
    name: "Идея и композиция",
    description: "Поиск ключевого сообщения и визуального решения.",
    hours: 6,
  };
  return {
    name: "Концепция",
    description: "Разработка основного визуального направления.",
    hours: 6,
  };
}

function getPreparationStage(projectType) {
  if (["packaging", "print", "outdoor"].includes(projectType)) {
    return {
      name: "Подготовка файлов к печати",
      description: "Растрирование изображений, добавление вылетов, перевод в CMYK, перевод текстов в кривые, экспорт печатного PDF по требованиям типографии.",
      hours: 4,
    };
  }
  if (projectType === "website") {
    return {
      name: "Подготовка к передаче",
      description: "Сборка итогового пакета: экспорт макетов, спецификации для разработчиков и инструкция по использованию.",
      hours: 2,
    };
  }
  return {
    name: "Подготовка и передача файлов",
    description: "Экспорт итоговых материалов в нужных форматах, структура папок и подготовка рабочих файлов к передаче.",
    hours: 3,
  };
}

function postProcessPackagingStages(stages, sourceText) {
  const result = [];
  stages.forEach((stage) => {
    const normalizedName = normalizeAiText(stage.name);
    if (isPackagingBriefingStage(stage)) {
      result.push({
        ...stage,
        name: "Брифинг и сбор данных",
        description: "Сбор вводных, продукта, материалов, развертки и требований типографии.",
        hours: Math.min(stage.hours, 3),
      });
      return;
    }
    if (isPackagingAnalysisStage(stage)) {
      result.push({
        ...stage,
        name: "Исследование и стратегия",
        description: "Конкурентный анализ, изучение ЦА, аудит текущих материалов, формулировка позиционирования и основных стратегических выводов.",
        hours: Math.min(Math.max(stage.hours, 3), 5),
      });
      return;
    }
    if (normalizedName === "дизайн коробки" || isPackagingBoxStage(stage, sourceText)) {
      const existingIndex = result.findIndex((item) => normalizeAiText(item.name) === "дизайн коробки");
      const boxStage = {
        ...stage,
        name: "Дизайн коробки",
        description: "Дизайн всех сторон упаковки и внутренней части коробки при необходимости, с учётом развертки и технических ограничений.",
      };
      if (existingIndex === -1) {
        result.push(boxStage);
      } else {
        result[existingIndex] = {
          ...result[existingIndex],
          hours: Math.min(result[existingIndex].hours + boxStage.hours, 24),
        };
      }
      return;
    }
    result.push(stage);
  });

  return result;
}

function isPackagingBriefingStage(stage) {
  const text = normalizeAiText(`${stage?.name || ""} ${stage?.description || ""}`);
  const title = normalizeAiText(stage?.name);
  return /(брифинг|сбор\s+(вводн|данн|информац|требован))/i.test(text)
    && !/(анализ|исследован|концепц|дизайн\s+коробк|дизайн\s+упаковк|инструкц|вкладыш|стикер|накле)/i.test(title);
}

function isPackagingAnalysisStage(stage) {
  const text = normalizeAiText(`${stage?.name || ""} ${stage?.description || ""}`);
  const title = normalizeAiText(stage?.name);
  return /(анализ|исследован|изучен|референс|конкурент|полк[аи]|рынк|визуальн[а-я\s]+контекст)/i.test(text)
    && !/(концепц|дизайн\s+коробк|дизайн\s+упаковк|инструкц|вкладыш|стикер|накле)/i.test(title);
}

function isPackagingBoxStage(stage, sourceText) {
  const stageText = normalizeAiText(`${stage?.name || ""} ${stage?.description || ""}`);
  const title = normalizeAiText(stage?.name);
  if (/концепц/.test(title)) return false;
  const source = normalizeAiText(sourceText);
  const hasBoxContext = /(коробк|развертк|упаковк[а-я\s]*(фен|товар|продукт|внешн|внутрен|сторон|гран))/i.test(`${source} ${stageText}`);
  return hasBoxContext && /(дизайн|макет|оформлен|разработк).*(коробк|упаковк|сторон|гран|внешн|внутрен)|(?:коробк|упаковк|сторон|гран|внешн|внутрен).*(дизайн|макет|оформлен|разработк)/i.test(stageText);
}

function hasBrandIdentityIntent(sourceText) {
  const source = normalizeAiText(sourceText);
  return /(фирменн[а-я\s-]*(стил|график|знак|шрифт|цвет|палитр|паттерн|носител)|брендинг|брендбук|гайдбук|гайдлайн|айдентик|identity|brand\s*book)/i.test(source);
}

function hasMiniGuideRequest(sourceText) {
  const source = normalizeAiText(sourceText);
  return /(мини\s*[-–—]?\s*гайд|кратк[а-я\s-]*(гайд|руководств)|mini\s*guide)/i.test(source);
}

function hasWebsiteProjectIntent(sourceText) {
  const source = normalizeAiText(sourceText);
  return /((разработ|созда|собра|сверст|сверст|дизайн|макет|прототип|запуск)[а-я\s-]{0,40}(сайт|лендинг|tilda|тильд)|(сайт|лендинг|tilda|тильд)[а-я\s-]{0,40}(разработ|созда|собра|сверст|сверст|дизайн|макет|прототип|запуск|адаптив|формы|форму))/i.test(source);
}

function hasPackagingProjectIntent(sourceText) {
  const source = normalizeAiText(sourceText);
  return /((разработ|созда|дизайн|макет|оформлен|подготов).{0,60}(упаковк|коробк|этикет|пачк|развертк)|(упаковк|коробк|этикет|пачк|развертк).{0,60}(разработ|созда|дизайн|макет|оформлен|подготов|типограф|печать))/i.test(source);
}

function isVisualizationStage(stage) {
  const text = normalizeAiText(`${stage?.name || ""} ${stage?.description || ""}`);
  return /(визуализац|мокап|mockup|пример[а-я\s]+применен|применен[а-я\s]+на\s+(вывес|форм|автомоб|носител)|вывеск|форм[аы]\s+сотрудник|автомобил)/i.test(text);
}

function isDocumentationStage(stage) {
  const text = normalizeAiText(`${stage?.name || ""} ${stage?.description || ""}`);
  return /(брендбук|brand\s*book|гайдбук|гайдлайн|мини\s*[-–—]?\s*гайд|логотип\s*[-–—]?\s*гайд|правил[а-я\s]*(использован|применен)[а-я\s]*(логотип|фирменн|стил)|документ[а-я\s]*(правил|использован)[а-я\s]*(логотип|фирменн|стил))/i.test(text);
}

function getDocumentationStageName(projectType, sourceText) {
  const brandIdentity = projectType === "brand_identity" || hasBrandIdentityIntent(sourceText);
  if (hasMiniGuideRequest(sourceText)) return brandIdentity ? "Мини-гайд по фирменному стилю" : "Краткий логотип-гайд";
  if (projectType === "logo" && !brandIdentity) return "Краткий логотип-гайд";
  if (brandIdentity) return "Брендбук";
  return "Гайдлайн";
}

function getDocumentationStageDescription(name) {
  if (name === "Мини-гайд по фирменному стилю") {
    return "Краткие правила использования логотипа, цвета, типографики и базовых элементов фирменного стиля.";
  }
  if (name === "Краткий логотип-гайд") {
    return "Документ с правилами использования логотипа: варианты, охранное поле, минимальные размеры, фон и базовые запреты.";
  }
  if (name === "Брендбук") {
    return "Структура и наполнение брендбука: разделы, логика подачи, правила использования фирменного стиля с примерами.";
  }
  return "Правила использования визуальной системы и базовые примеры применения.";
}

function normalizeDocumentationHours(hours, name) {
  const value = Math.max(1, Math.round(Number(hours) || 0));
  if (name === "Брендбук") return Math.min(Math.max(value, 10), 18);
  if (name === "Мини-гайд по фирменному стилю") return Math.min(Math.max(value, 4), 8);
  if (name === "Краткий логотип-гайд") return Math.min(Math.max(value, 4), 8);
  return Math.min(Math.max(value, 4), 10);
}

function normalizeDocumentationStage(stage, projectType, sourceText) {
  const name = getDocumentationStageName(projectType, sourceText);
  return {
    ...stage,
    name,
    description: getDocumentationStageDescription(name),
    hours: normalizeDocumentationHours(stage.hours, name),
  };
}

function mergeDocumentationStages(current, next, sourceText) {
  const name = hasMiniGuideRequest(sourceText) ? next.name : current.name;
  return {
    ...current,
    ...next,
    name,
    description: getDocumentationStageDescription(name),
    hours: normalizeDocumentationHours(Math.max(current.hours || 0, next.hours || 0), name),
  };
}

function isProvidedAssetPlacementStage(stage, sourceText) {
  const title = normalizeAiText(stage?.name);
  const description = normalizeAiText(stage?.description);
  const source = normalizeAiText(sourceText);
  const stageText = `${title} ${description}`;
  const isAssetPlacement = /(интеграц|добавлен|размещен|вставк|нанесен|подстановк).*(логотип|лого|qr|куар|куэр)|(?:логотип|лого|qr|куар|куэр).*(интеграц|добавлен|размещен|вставк|нанесен|подстановк)/i.test(stageText);
  const isPartOfLargerLayout = /(постер|плакат|витрин|баннер|макет|наружн|упаковк|презентац|лендинг|сайт|smm|соцсет)/i.test(source);
  const assetsProvided = /(логотип|лого|qr|куар|куэр|брендбук|фирменн|текст|фото).{0,60}(есть|готов|предоставлен|имеет|уже)|(?:есть|готов|предоставлен|имеет|уже).{0,60}(логотип|лого|qr|куар|куэр|брендбук|фирменн|текст|фото)/i.test(source);
  return isAssetPlacement && isPartOfLargerLayout && assetsProvided;
}

function normalizeStageName(value, projectType = "custom", sourceText = "") {
  const name = String(value || "").trim();
  const normalized = name.toLowerCase();
  if (["правочки", "правки", "корректировки"].includes(normalized) || /правоч/i.test(normalized)) return "Согласование и правки";
  if (["logo", "brand_identity"].includes(projectType)) {
    if (/(исследован|анализ|ресерч|аудит)/i.test(normalized)) return "Исследование и стратегия";
    if (/мудборд|референс|визуальн[а-я\s]+направлен/i.test(normalized)) return "Мудборд и референсы";
    if (/(создан|разработк|отрисовк|доработк|выбор).*(концепц|логотип|знак)|(?:концепц|логотип|знак).*(создан|разработк|отрисовк|доработк|выбор)/i.test(normalized)) return "Логотип и знаковая графика";
    if (/(цвет|палитр).*(шрифт|типограф)|типограф.*(цвет|палитр|шрифт)/i.test(normalized)) return "Цвет и типографика";
    if (/(фирменн.*(систем|знак|паттерн|график)|паттерн|графическ.*при[её]м)/i.test(normalized)) return "Графические приёмы";
    if (/(носител|мокап|визитк|сертификат|соцсет|упаковк|форма|вывеск)/i.test(normalized) && !isDocumentationStage({ name, description: "" })) return "Ключевые носители";
  }
  if (projectType === "packaging") {
    if (/(анализ|исследован|изучен|сбор).*(концепц)|концепц.*(анализ|исследован|изучен|сбор)/i.test(normalized)) return "Исследование и стратегия";
    if (/(брифинг|сбор\s+(вводн|данн|информац|требован))/i.test(normalized)) return "Брифинг и сбор данных";
    if (/(анализ|исследован|изучен|конкурент|полк[аи]|рынк|визуальн[а-я\s]+контекст)/i.test(normalized)) return "Исследование и стратегия";
    if (/референс|мудборд|концепц/i.test(normalized)) return "Мудборд и референсы";
    if (/(внешн|внутрен|коробк|сторон|гран).*(упаковк|коробк)|(?:упаковк|коробк).*(внешн|внутрен|сторон|гран)/i.test(normalized)) return "Дизайн коробки";
    if (/дизайн\s+упаковк|разработк[а-я\s]+упаковк|макет[а-я\s]+упаковк/i.test(normalized)) return isBoxPackaging(sourceText) ? "Дизайн коробки" : "Дизайн упаковки";
    if (/инструкц/i.test(normalized)) return "Дизайн инструкции";
    if (/вкладыш|карточк/i.test(normalized)) return "Дизайн приветственного вкладыша";
    if (/стикер|накле/i.test(normalized)) return "Дизайн стикерпака";
  }
  if (/финальн.*проверк|проверк.*коррект|проверка\s+макет|экспорт\s+и\s+провер/i.test(normalized) && !allowsSeparateFinalTesting(projectType, sourceText)) {
    if (/(печат|печать|препресс|постер|плакат|витрин|буклет|брошюр|каталог)/i.test(normalizeAiText(sourceText))) return "Подготовка файлов к печати";
    return "Согласование и правки";
  }
  if (isDocumentationStage({ name, description: "" })) return getDocumentationStageName(projectType, sourceText);
  if (/(визуализац|мокап|mockup|пример[а-я\s]+применен|применен[а-я\s]+на\s+(вывес|форм|автомоб|носител)|вывеск|форм[аы]\s+сотрудник|автомобил)/i.test(normalized)) return "Визуализация на носителях";
  if (/интеграц.*логотип|добавлен.*логотип|логотип.*qr|qr.*логотип|добавлен.*qr/i.test(normalized)) return "Размещение логотипа и QR-кода";
  if (/генерац.*код|код/i.test(normalized) && !/qr/i.test(normalized)) return "Дизайн макетов";
  if (/pdf\/?x/i.test(normalized) || /допечат/i.test(normalized) || /препресс/i.test(normalized)) return "Подготовка файлов к печати";
  if (/(подготовк|экспорт|передач).*(файл|исходник)|финальн.*файл/i.test(normalized)) {
    return isPrintLike(projectType, sourceText) ? "Препресс и подготовка файлов к передаче" : "Подготовка и передача файлов";
  }
  if (/(цвет|палитр).*(шрифт|типограф)|типограф.*(цвет|палитр|шрифт)/i.test(normalized)) return "Цвет и типографика";
  if (/(фирменн.*(знак|паттерн|график)|паттерн|графическ.*при[её]м)/i.test(normalized)) return "Графические приёмы";
  if (/сетк/i.test(normalized)) return "Визуальная концепция и структура макетов";
  if (/^св[её]рстк/i.test(normalized)) return capitalizeStageName(name.replace(/^св[её]рстк/i, "вёрстк"));
  if (/^верстка$/i.test(name) || /^вёрстка$/i.test(name)) return "Вёрстка брошюры";
  return capitalizeStageName(name).slice(0, 120);
}

function isPrintLike(projectType, sourceText) {
  // Явные признаки печати в брифе важнее типа проекта: меню для типографии
  // остаётся печатным, даже если модель классифицировала проект иначе.
  const source = normalizeAiText(sourceText);
  if (/(печат|печать|препресс|типограф|буклет|брошюр|каталог|листовк|постер|плакат|наружн[а-я]*\s+реклам|витрин)/i.test(source)) return true;
  return ["print", "outdoor", "packaging"].includes(projectType);
}

function isBoxPackaging(sourceText) {
  return /(коробк|развертк|внешн[а-я\s]+упаков|внутренн[а-я\s]+упаков|сторон[ыа]\s+упаков|грани\s+упаков)/i.test(normalizeAiText(sourceText));
}

function allowsSeparateFinalTesting(projectType, sourceText) {
  const source = normalizeAiText(sourceText);
  return projectType === "website"
    || (hasWebsiteProjectIntent(sourceText) && /(tilda|тильд|сайт|лендинг|форм[аы]|адаптив|публикац|домен|хостинг|html|css|javascript|react|frontend|backend|фронтенд|бэкенд|верстк[а-я]*\s+сайт|код\s+сайт|кодинг)/i.test(source));
}

function normalizeStageDescription(value, stageName = "") {
  const stage = normalizeAiText(stageName);
  let text = String(value || "")
    .trim()
    .replace(/правоч[а-яё]*/gi, "правок")
    .replace(/^создание файла в формате pdf\/x для типографии и отдельного файла для онлайн-просмотра$/i, "Проверка макетов, вылетов и цветового режима, экспорт печатного PDF и версии для онлайн-просмотра")
    .replace(/pdf\/x/gi, "печатный PDF")
    .replace(/создание\s+сетк[а-яё]*/gi, "проработка структуры")
    .replace(/сетк[а-яё]*/gi, "структуры")
    .replace(/\bсв[её]рстк/gi, "вёрстк")
    .slice(0, 500);
  if (!/согласован/.test(stage)) {
    text = text
      .replace(/,?\s*согласовани[ея]\s+с\s+клиентом\.?/gi, "")
      .replace(/,?\s*согласовани[ея]\s+с\s+заказчиком\.?/gi, "")
      .replace(/\s{2,}/g, " ")
      .replace(/\s+,/g, ",")
      .trim();
  }
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

function normalizeAdditionalCosts(value) {
  if (!Array.isArray(value)) return [];
  return value.map((item) => {
    if (typeof item === "string") {
      return { title: item.trim().slice(0, 120), amount: 0 };
    }
    const title = String(item?.title || item?.name || "").trim().slice(0, 120);
    const amount = Math.max(Math.round(Number(item?.amount || 0)), 0);
    if (!title) return null;
    return { title, amount };
  }).filter(Boolean).slice(0, 8);
}

function normalizeAiText(value) {
  return String(value || "").toLowerCase().replace(/ё/g, "е");
}

// Жёсткие рамки часов по каноническим этапам DesiDoc. Диапазоны совпадают с
// меню в GENERATION_PROMPT: промпт подсказывает модели, код гарантирует.
// Ключи — в нижнем регистре, «ё» заменена на «е» (как в normalizeAiText).
const STAGE_HOUR_LIMITS = {
  "брифинг и сбор данных": [1, 4],
  "брифинг и сбор требований": [1, 3],
  "брифинг": [1, 4],
  "исследование и стратегия": [3, 10],
  "исследование и анализ": [3, 10],
  "анализ и референсы": [3, 10],
  "мудборд и референсы": [4, 12],
  "визуальная концепция": [4, 12],
  "структура презентации": [2, 6],
  "дизайн-концепция": [4, 10],
  "логотип и знаковая графика": [10, 24],
  "цвет и типографика": [2, 8],
  "графические приемы": [6, 18],
  "ключевые носители": [4, 16],
  "проектирование и структура": [4, 12],
  "прототипирование": [4, 10],
  "ui-дизайн": [8, 40],
  "подготовка ui-кита": [3, 8],
  "дизайн ключевых блоков": [8, 16],
  "сборка на tilda и адаптив": [12, 30],
  "формы и базовые настройки": [1, 4],
  "дизайн коробки": [8, 24],
  "дизайн упаковки": [8, 24],
  "дизайн инструкции": [3, 10],
  "дизайн приветственного вкладыша": [1, 4],
  "дизайн стикерпака": [3, 10],
  "простые слайды": [2, 20],
  "сложные слайды": [3, 30],
  "подготовка и передача файлов": [1, 5],
  "подготовка к передаче": [1, 5],
  "препресс и подготовка файлов к передаче": [2, 8],
  "подготовка файлов к печати": [2, 8],
  "краткий логотип-гайд": [4, 8],
  "мини-гайд по фирменному стилю": [4, 8],
  "брендбук": [10, 18],
  "визуализация на носителях": [2, 6],
  "согласование и правки": [4, 10],
  "финальное согласование и правки": [4, 10],
  "размещение логотипа и qr-кода": [1, 1],
};

// Меню и рамки часов рассчитаны на middle. Для других грейдов масштабируем
// так же, как в готовых шаблонах DesiDoc: junior +25%, senior −25%.
const LEVEL_HOUR_FACTORS = { junior: 1.25, middle: 1, senior: 0.75 };

function scaleHoursForLevel(stages, level) {
  const factor = LEVEL_HOUR_FACTORS[level] || 1;
  if (factor === 1) return stages;
  return stages.map((stage) => ({
    ...stage,
    hours: Math.max(1, Math.round(stage.hours * factor)),
  }));
}

function clampStageHours(stages) {
  return stages.map((stage) => {
    const limits = STAGE_HOUR_LIMITS[normalizeAiText(stage.name)];
    if (!limits) return stage;
    return { ...stage, hours: Math.min(Math.max(stage.hours, limits[0]), limits[1]) };
  });
}

// Клиент уже принёс материалы/референсы/понятный стиль — этап стратегии не нужен.
function briefShowsClearDirection(sourceText) {
  const source = normalizeAiText(sourceText);
  return /(нравится|нравятся|референс|уже\s+есть|что\s+уже\s+есть|готовы[ей]?\s+(логотип|материал|фирменн|текст)|хотим\s+(чист|минимал|лаконичн|премиал))/i.test(source);
}

// Дубли этапов сливаем: остаётся первый, часы — максимум из дублей.
function dedupeStages(stages) {
  const seen = new Map();
  const result = [];
  stages.forEach((stage) => {
    const key = normalizeAiText(stage.name);
    if (seen.has(key)) {
      const kept = result[seen.get(key)];
      kept.hours = Math.max(kept.hours, stage.hours);
      return;
    }
    seen.set(key, result.length);
    result.push(stage);
  });
  return result;
}

// Фиксированный порядок сметы: брифинг → стратегия → мудборд → концепция →
// дизайн носителей → документация → подготовка файлов → правки.
function stageOrderRank(stage, projectType) {
  const name = normalizeAiText(stage.name);
  if (isBriefingStage(stage)) return 0;
  if (isAnalysisReferenceStage(stage)) return 1;
  if (/мудборд|референс/.test(name)) return 2;
  if (isConceptStage(stage)) return 3;
  if (isDocumentationStage(stage)) return 5;
  if (isPreparationStage(stage, projectType)) return 6;
  if (/(согласован|финальн[а-я\s]*правк|^правки$)/.test(name)) return 7;
  return 4;
}

function orderStages(stages, projectType) {
  return stages
    .map((stage, index) => ({ stage, index }))
    .sort((a, b) => {
      const diff = stageOrderRank(a.stage, projectType) - stageOrderRank(b.stage, projectType);
      return diff !== 0 ? diff : a.index - b.index;
    })
    .map((item) => item.stage);
}

function hasAiMediaIntent(sourceText) {
  const text = normalizeAiText(sourceText);
  return /(нейросет|нейро|midjourney|stable\s*diffusion|flux|runway|kling|luma|pika|hailuo|heygen|magnific|krea|recraft|leonardo|ideogram|elevenlabs|minimax|suno|генерац|генератив|искусственн.*интеллект|промпт|\bai\b|(^|[^a-zа-я])ии([^a-zа-я]|$))/i.test(text);
}

function getMaxMentionedQuantity(text, unitPattern) {
  const re = new RegExp(`(\\d{1,3})\\s*(?:(?:ai|ии|нейро|нейросетев[а-я]*)[-\\s]*)?(?:${unitPattern})`, "gi");
  let match;
  let max = 0;
  while ((match = re.exec(text))) {
    const value = Number(match[1]);
    if (Number.isFinite(value) && value > max && value <= 300) max = value;
  }
  return max;
}

function estimateAiToolCosts(sourceText) {
  const text = normalizeAiText(sourceText);
  if (!hasAiMediaIntent(text)) return [];

  const costs = [];
  const hasVideo = /(нейровидео|runway|kling|luma|pika|hailuo|heygen|видео|ролик|анимац|аватар)/i.test(text);
  const hasAudio = /(elevenlabs|minimax|suno|озвуч|голос|voice|диктор|музык|саундтрек|дубляж)/i.test(text);
  const hasImage = /(нейрофото|midjourney|stable\s*diffusion|flux|magnific|krea|recraft|leonardo|ideogram|изображ|иллюстрац|фото|картин|облож|баннер|пост|постер|плакат|креатив|ретуш|апскейл|upscale|генератив|искусственн.*интеллект)/i.test(text);

  if (hasVideo) {
    const seconds = getMaxMentionedQuantity(text, "сек(?:унд[а-я]*)?|s\\b");
    const clips = getMaxMentionedQuantity(text, "ролик[а-я]*|видео|шорт[а-я]*|short[а-я]*");
    const mediumVideo = seconds >= 25 || clips >= 2 || /(серия|несколько|пакет|кампания)/i.test(text);
    costs.push(mediumVideo ? AI_TOOL_COSTS.videoMedium : AI_TOOL_COSTS.videoShort);
  }

  if (hasImage || (!hasVideo && !hasAudio)) {
    const items = Math.max(
      getMaxMentionedQuantity(text, "пост[а-я]*|креатив[а-я]*|облож[а-я]*|баннер[а-я]*|изображен[а-я]*|иллюстрац[а-я]*|фото|картин[а-я]*|кадр[а-я]*"),
      /(серия|пакет|подборк|линейк|кампания)/i.test(text) ? 4 : 0
    );
    let imageCost = items >= 10 ? AI_TOOL_COSTS.imageLarge : items >= 4 ? AI_TOOL_COSTS.imageSeries : AI_TOOL_COSTS.imageSmall;
    if (/(magnific|апскейл|upscale|ретуш|улучшени[ея]\s+качеств)/i.test(text)) {
      imageCost = Number(imageCost.amount) > AI_TOOL_COSTS.imageUpscale.amount ? imageCost : AI_TOOL_COSTS.imageUpscale;
    }
    costs.push(imageCost);
  }

  if (hasAudio) costs.push(AI_TOOL_COSTS.audio);

  return costs
    .filter((cost, index, list) => list.findIndex((item) => item.title === cost.title) === index)
    .slice(0, 3)
    .map((cost) => ({ ...cost }));
}

function getAiCostCategory(title) {
  const text = normalizeAiText(title);
  if (/(runway|kling|luma|pika|hailuo|heygen|нейровидео|видео|ролик)/i.test(text)) return "video";
  if (/(elevenlabs|minimax|suno|озвуч|голос|музык|дубляж)/i.test(text)) return "audio";
  if (/(midjourney|krea|magnific|recraft|leonardo|ideogram|stable|нейрофото|изображ|иллюстрац|апскейл|ретуш)/i.test(text)) return "image";
  if (/(нейросет|генерац|токен|кредит)/i.test(text)) return "general";
  return "";
}

function filterIrrelevantAiCosts(costs, sourceText) {
  if (hasAiMediaIntent(sourceText)) return costs;
  return costs.filter((cost) => !getAiCostCategory(cost.title));
}

function ensureAiToolCosts(costs, sourceText) {
  const suggestions = estimateAiToolCosts(sourceText);
  if (!suggestions.length) return costs;

  const result = costs.map((cost) => ({ ...cost }));
  suggestions.forEach((suggestion) => {
    const category = getAiCostCategory(suggestion.title);
    const existing = result.find((cost) => getAiCostCategory(cost.title) === category)
      || (suggestions.length === 1 ? result.find((cost) => getAiCostCategory(cost.title) === "general") : null);

    if (existing) {
      if (!Number(existing.amount)) existing.amount = suggestion.amount;
      if (getAiCostCategory(existing.title) === "general") existing.title = suggestion.title;
      return;
    }

    result.push({ ...suggestion });
  });

  return result.slice(0, 8);
}

function json(statusCode, obj, headers = {}) {
  return {
    statusCode,
    headers: { ...headers, ...JSON_HEADERS },
    body: JSON.stringify(obj),
  };
}
