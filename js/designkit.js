const PROJECTS = {
  branding: {
    label: "Брендинг",
    stages: [
      { title: "Брифинг и сбор данных", description: "Интервью с заказчиком, сбор вводной информации, формулировка задач, ограничений и критериев успеха.", hours: { junior: 3, middle: 3, senior: 3 } },
      { title: "Исследование и стратегия", description: "Конкурентный анализ, изучение ЦА, аудит текущих материалов, формулировка позиционирования и основных стратегических выводов.", hours: { junior: 10, middle: 8, senior: 8 } },
      { title: "Мудборд и референсы", description: "Сбор и отбор референсов, формулировка визуальных принципов, подготовка 1-2 направлений визуальной концепции.", hours: { junior: 12, middle: 10, senior: 8 } },
      { title: "Логотип и знаковая графика", description: "Отрисовка нескольких вариантов логотипа в выбранном направлении, выбор и доработка финальной версии знака.", hours: { junior: 24, middle: 19, senior: 16 } },
      { title: "Цвет и типографика", description: "Подбор основной и дополнительной палитры, выбор шрифтов и настройка типографической иерархии, базовые правила сочетаний.", hours: { junior: 8, middle: 6, senior: 4 } },
      { title: "Графические приёмы", description: "Разработка паттернов, форм и иконок, определение фото-стиля и принципов компоновки для фирменных носителей.", hours: { junior: 18, middle: 14, senior: 12 } },
      { title: "Ключевые носители (до 5 штук)", description: "Дизайн до 5 ключевых носителей на выбор: визитка, шаблон презентации, SMM-шаблоны, лендинг и другие приоритетные форматы.", hours: { junior: 14, middle: 11, senior: 8 } },
      { title: "Подготовка и передача файлов", description: "Экспорт логотипов и элементов в нужных форматах, настройка структуры папок и наведение порядка в рабочих файлах для передачи.", hours: { junior: 3, middle: 3, senior: 2 } },
      { title: "Гайдлайн", description: "Структура и наполнение брендбука: разделы, логика подачи, правила использования фирменного стиля с примерами.", hours: { junior: 19, middle: 15, senior: 10 } },
      { title: "Согласование и правки", description: "Коммуникация с заказчиком, правки по визуалу, финальное утверждение.", hours: { junior: 8, middle: 8, senior: 8 } },
    ],
  },
  logo: {
    label: "Логотип",
    stages: [
      { title: "Брифинг и сбор данных", description: "Интервью с заказчиком, уточнение задач логотипа, контекста использования, ограничений и пожеланий, фиксация требований к результату.", hours: { junior: 2, middle: 2, senior: 2 } },
      { title: "Исследование и стратегия", description: "Краткий анализ ниши и конкурентов, изучение целевой аудитории, сбор референсов по рынку, формулировка позиционирования и основных смысловых опор для логотипа.", hours: { junior: 10, middle: 8, senior: 8 } },
      { title: "Мудборд и референсы", description: "Сбор и отбор визуальных референсов под логотип, формулировка визуальных принципов, подготовка 1-2 направлений визуальной концепции логотипа.", hours: { junior: 13, middle: 8, senior: 8 } },
      { title: "Логотип и знаковая графика", description: "Эскизы и отрисовка нескольких вариантов логотипа в выбранных направлениях, выбор финального варианта и его доработка до аккуратного знака.", hours: { junior: 20, middle: 16, senior: 13 } },
      { title: "Цвет и типографика", description: "Подбор основной цветовой схемы для логотипа, выбор шрифта для логотипа и подписи, базовые настройки начертаний без построения полной типосистемы.", hours: { junior: 4, middle: 3, senior: 2 } },
      { title: "Ключевые носители (2-3 штуки)", description: "Применение логотипа на 2-3 базовых носителях для проверки работоспособности знака в реальном контексте.", hours: { junior: 7, middle: 6, senior: 4 } },
      { title: "Подготовка и передача файлов", description: "Экспорт логотипа в нужных форматах и цветовых вариантах, организация структуры папок и файлов для передачи заказчику.", hours: { junior: 3, middle: 2, senior: 2 } },
      { title: "Краткий логотип-гайд", description: "Документ с правилами использования логотипа: варианты, охранное поле, минимальные размеры, фон и базовые запреты.", hours: { junior: 12, middle: 10, senior: 8 } },
      { title: "Согласование и правки", description: "Коммуникация с заказчиком, правки по визуалу, финальное утверждение.", hours: { junior: 8, middle: 8, senior: 8 } },
    ],
  },
  landing_tilda: {
    label: "Сайт на Tilda",
    stages: [
      { title: "Брифинг и сбор требований", description: "Краткая сессия с заказчиком, уточнение целей, задач, аудитории, количества нужных страниц и обязательных функций.", hours: { junior: 2, middle: 2, senior: 2 } },
      { title: "Исследование и анализ", description: "Анализ конкурентов и референсов, ресерч целевой аудитории, сбор вдохновляющих примеров, фиксация допущений по структуре и стилю.", hours: { junior: 10, middle: 8, senior: 8 } },
      { title: "Проектирование и структура", description: "Составление карты сайта, определение логики переходов и базовых пользовательских сценариев.", hours: { junior: 11, middle: 9, senior: 8 } },
      { title: "Прототипирование", description: "Создание wireframes для ключевых страниц: компоновка блоков, функции и последовательность подачи информации.", hours: { junior: 8, middle: 6, senior: 4 } },
      { title: "Визуальная концепция", description: "Формулировка визуального стиля: moodboard, цветовая палитра, типографика, графические приемы и развитие айдентики под веб.", hours: { junior: 10, middle: 8, senior: 8 } },
      { title: "Дизайн ключевых блоков", description: "Отрисовка визуала ключевых экранов и подготовка стиля для дальнейшей сборки на Tilda.", hours: { junior: 14, middle: 12, senior: 10 } },
      { title: "Сборка на Tilda и адаптив", description: "Сборка страниц и блоков в Tilda, настройка мобильной и планшетной версий сразу внутри платформы.", hours: { junior: 28, middle: 22, senior: 18 } },
      { title: "Формы и базовые настройки", description: "Подключение форм, уведомлений, базовых настроек страницы и проверка технических мелочей перед запуском.", hours: { junior: 4, middle: 3, senior: 2 } },
      { title: "Финальное тестирование и правки", description: "Проверка отображения, кликабельности, форм и внесение финальных правок после согласования.", hours: { junior: 8, middle: 8, senior: 8 } },
    ],
  },
  landing_design: {
    label: "Дизайн сайта",
    stages: [
      { title: "Брифинг и сбор требований", description: "Краткая сессия с заказчиком, уточнение целей, задач, аудитории, количества нужных страниц и обязательных функций.", hours: { junior: 2, middle: 2, senior: 2 } },
      { title: "Исследование и анализ", description: "Анализ конкурентов и референсов, ресерч целевой аудитории, сбор вдохновляющих примеров, фиксация допущений по структуре и стилю.", hours: { junior: 10, middle: 8, senior: 8 } },
      { title: "Проектирование и структура", description: "Составление карты сайта, определение логики переходов и базовых пользовательских сценариев.", hours: { junior: 11, middle: 9, senior: 8 } },
      { title: "Прототипирование", description: "Создание wireframes для ключевых страниц: компоновка блоков, функции и последовательность подачи информации.", hours: { junior: 8, middle: 6, senior: 4 } },
      { title: "Визуальная концепция", description: "Формулировка визуального стиля: moodboard, цветовая палитра, типографика, графические приемы и развитие айдентики под веб.", hours: { junior: 10, middle: 8, senior: 8 } },
      { title: "UI-дизайн", description: "Отрисовка детальных дизайн-макетов: главная, второстепенные страницы, адаптация под десктоп, мобильный и планшет.", hours: { junior: 17, middle: 14, senior: 12 } },
      { title: "Подготовка UI-кита", description: "Систематизация компонентов: кнопки, формы, иконки, элементы интерфейса, цвета и шрифты.", hours: { junior: 8, middle: 7, senior: 7 } },
      { title: "Подготовка к передаче", description: "Сборка итогового пакета: экспорт макетов, спецификации для разработчиков и инструкция по использованию.", hours: { junior: 2, middle: 2, senior: 1 } },
      { title: "Финальное согласование и правки", description: "Работа по замечаниям заказчика, обычно 1-2 раунда правок, адаптация по дополнительным пожеланиям.", hours: { junior: 8, middle: 8, senior: 8 } },
    ],
  },
  presentation: {
    label: "Презентация",
    stages: [
      { title: "Брифинг", description: "Изучение цели, аудитории и содержания презентации.", hours: { junior: 2, middle: 1, senior: 1 } },
      { title: "Структура", description: "Сценарий и логика подачи: порядок слайдов, нарратив и переходы.", hours: { junior: 4, middle: 4, senior: 4 } },
      { title: "Дизайн-концепция", description: "Стиль, цвет, шрифты — утверждение визуального направления на 2-3 слайдах.", hours: { junior: 8, middle: 8, senior: 8 } },
      { title: "Слайды", description: "Дизайн всех слайдов с финальным контентом и иллюстрациями.", note: "Время зависит от количества слайдов — скорректируйте вручную.", hours: { junior: 16, middle: 12, senior: 9 } },
      { title: "Верстка", description: "Финальная правка текстов, выравнивание, экспорт в PDF и PPTX.", hours: { junior: 6, middle: 5, senior: 4 } },
      { title: "Правки", description: "Корректировки по итогам согласования с клиентом.", hours: { junior: 6, middle: 6, senior: 6 } },
    ],
  },
  custom: {
    label: "Другое",
    stages: [
      { title: "Брифинг и сбор данных", description: "Уточнение задачи, целей, ограничений и ожидаемого результата.", hours: { junior: 4, middle: 3, senior: 3 } },
      { title: "Анализ и референсы", description: "Изучение контекста проекта и подбор визуальных ориентиров.", hours: { junior: 6, middle: 5, senior: 4 } },
      { title: "Концепция", description: "Разработка основного визуального направления.", hours: { junior: 10, middle: 8, senior: 6 } },
      { title: "Дизайн-макеты", description: "Создание основных материалов проекта.", hours: { junior: 12, middle: 10, senior: 8 } },
      { title: "Подготовка файлов", description: "Экспорт, проверка и подготовка материалов к передаче.", hours: { junior: 4, middle: 3, senior: 3 } },
      { title: "Согласование и правки", description: "Коммуникация с клиентом и финальные корректировки.", hours: { junior: 6, middle: 5, senior: 5 } },
    ],
  },
};

const PROJECT_ORDER = ["logo", "branding", "landing_design", "landing_tilda", "presentation", "custom"];

const MARKET_RATES = { junior: 600, middle: 1800, senior: 3000 };
const MODIFIERS = { urgent: 0.3 };
const DEFAULT_DESIGNER_RATE = 1500;
const DEFAULT_PROJECT_KEY = "landing_design";
const BRIEF_AI_ENTRY_ENABLED = false;
const PROFILE_CONSENT_VERSION = "2026-06-16";
const RU_CONTRACT_MONTHS = [
  "января",
  "февраля",
  "марта",
  "апреля",
  "мая",
  "июня",
  "июля",
  "августа",
  "сентября",
  "октября",
  "ноября",
  "декабря",
];
const PROFILE_STORAGE_KEY = "designkit.profile";
const ESTIMATE_META_STORAGE_KEY = "designkit.estimateMeta";
const COOKIE_CONSENT_STORAGE_KEY = "designkit.cookieConsent";
const FEEDBACK_FORM_URL = "https://forms.yandex.ru/u/6a305ae94936390f65dd7fe0/";
const FEEDBACK_COMPLETED_KEY = "desidoc_feedback_completed";
const FEEDBACK_SNOOZED_UNTIL_KEY = "desidoc_feedback_snoozed_until";
const FEEDBACK_SNOOZE_DELAY = 7 * 24 * 60 * 60 * 1000;
const PDF_PAGE_MARGIN_MM = Object.freeze({ top: 8, right: 8, bottom: 16, left: 8 });
const CONTRACT_PDF_DISCLAIMER = "Документ носит ознакомительный характер. Перед использованием проконсультируйтесь со своим юристом.";
const YANDEX_METRIKA_ID = 109865409;
const YANDEX_METRIKA_SCRIPT_URL = `https://mc.yandex.ru/metrika/tag.js?id=${YANDEX_METRIKA_ID}`;
const DEFAULT_CURRENCY = "RUB";
const CURRENCIES = {
  RUB: { label: "RUB · ₽", symbol: "₽" },
  USD: { label: "USD · $", symbol: "$" },
  EUR: { label: "EUR · €", symbol: "€" },
  KZT: { label: "KZT · ₸", symbol: "₸" },
};
const savedProfile = loadProfile();

const state = {
  view: "home",
  navHistory: [],
  theme: "light",
  projectKey: DEFAULT_PROJECT_KEY,
  rateMode: "custom",
  marketGrade: "middle",
  designerRate: Number(localStorage.getItem("designkit.designerRate") || DEFAULT_DESIGNER_RATE),
  monthlyIncome: Number(localStorage.getItem("designkit.monthlyIncome") || 240000),
  workDays: Number(localStorage.getItem("designkit.workDays") || 5),
  billableHours: Number(localStorage.getItem("designkit.billableHours") || 6),
  currency: CURRENCIES[localStorage.getItem("designkit.currency")] ? localStorage.getItem("designkit.currency") : DEFAULT_CURRENCY,
  rate: 0,
  taxMode: "selfEmployed",
  clientType: "individual",
  customTaxRate: Number(localStorage.getItem("designkit.customTaxRate") || 6),
  generated: false,
  stages: [],
  expenses: [],
  mods: new Set(),
  exportShowHours: localStorage.getItem("designkit.exportShowHours") !== "false",
  exportHideBranding: localStorage.getItem("designkit.exportHideBranding") === "true",
  profile: savedProfile,
  estimateMeta: loadEstimateMeta(savedProfile, DEFAULT_PROJECT_KEY),
  briefAi: {
    sourceText: "",
    analysis: null,
    isLoading: false,
  },
  addendumBrief: {
    sourceText: "",
    isLoading: false,
  },
};

let draggedStageIndex = null;
let contractSaveTimer = null;
let contractScrollSpyCleanup = null;
let clientReplyParseTimer = null;
let mobileCalcSheetKey = "";
let mobileContractSheetKey = "";
let mobileContractDocVisible = false;
let mobileContractClientImportOpen = false;
let mobileContractSheetSignature = "";
let mobileContractClientReplyDraft = "";
let isRenderingMobileContractUI = false;
let lastDeletedContractClause = null;
let contractOutlineVisibilityFrame = 0;

const CONTRACT_SECTIONS = [
  ["parties", "Стороны"],
  ["subject", "Предмет"],
  ["stages", "Этапы"],
  ["terms", "Сроки"],
  ["payment", "Оплата"],
  ["rights", "Права"],
  ["revisions", "Правки"],
  ["termination", "Расторжение"],
  ["signatures", "Подписи"],
];

const CONTRACT_SECTIONS_DESIGN = [
  ["parties", "Стороны"],
  ["subject", "Предмет"],
  ["workflow", "Порядок работы"],
  ["terms", "Сроки"],
  ["payment", "Оплата"],
  ["rights", "Права на РИД"],
  ["approval", "Согласование"],
  ["acceptance", "Приёмка"],
  ["liability", "Ответственность"],
  ["termination", "Расторжение"],
  ["final", "Заключительные"],
  ["signatures", "Подписи"],
];

const CONTRACT_TEMPLATES = {
  design: {
    label: "Рамочный",
    description: "Подходит для любых задач. Оформляется на год, а ТЗ по каждому проекту фиксируется отдельно.",
    title: "Договор возмездного оказания услуг по графическому дизайну",
  },
  site_design: {
    label: "Дизайн сайта",
    description: "Подходит, если сайт потом собирает разработчик или другая команда.",
    title: "Договор на создание дизайна сайта",
  },
  site_full: {
    label: "Сайт на Tilda",
    description: "Подходит, если нужен готовый сайт, собранный на конструкторе.",
    title: "Договор на создание сайта",
  },
};

const CONTRACT_FIELD_GROUPS = [
  {
    title: "Документ",
    fields: [
      ["number", "Номер", "1"],
      ["city", "Город", "Москва"],
      ["date", "Дата", "«__» ________ 2026 г."],
    ],
  },
  {
    title: "Клиент",
    fields: [
      ["clientName", "ФИО / название", "Заказчик"],
      ["clientInn", "ИНН", "771234567890"],
      ["clientAddress", "Адрес", "юридический / почтовый адрес"],
      ["responsible", "Ответственное лицо", "ФИО, должность"],
      ["responsibleContact", "Контакты", "телефон / telegram"],
    ],
  },
  {
    title: "Исполнитель",
    fields: [
      ["contractorName", "ФИО / название", "Исполнитель"],
      ["contractorInn", "ИНН", "771234567890"],
      ["bank", "Реквизиты оплаты", "банк / карта / счет"],
      ["hourly", "Час доп. работы", "2 500"],
    ],
  },
  {
    title: "Условия",
    get fields() {
      const isDesign = (typeof contractState !== "undefined") && contractState.templateKey === "design";
      return [["days", isDesign ? "Действует до (дата)" : "Срок работы, дней", isDesign ? "31.12.2026" : "30"]];
    },
  },
];

const ADDENDUM_REQUIRED_FIELDS = [
  "number",
  "city",
  "date",
  "contractNumber",
  "contractDate",
  "clientName",
  "contractorName",
  "taskDescription",
  "taskRequirements",
  "deadline",
  "price",
  "paymentTerms",
  "contactName",
  "contactInfo",
];

const ADDENDUM_FIELD_LABELS = {
  number: "Номер допсоглашения",
  city: "Город",
  date: "Дата допсоглашения",
  contractNumber: "Номер договора",
  contractDate: "Дата договора",
  clientName: "Заказчик",
  contractorName: "Исполнитель",
  taskDescription: "Предмет задания",
  taskRequirements: "Техническое задание",
  deadline: "Срок выполнения",
  price: "Стоимость",
  paymentTerms: "Порядок оплаты",
  contactName: "Контактное лицо",
  contactInfo: "Контакты",
};

const DEFAULT_ADDENDUM_PAYMENT_TERMS = "50% предоплата и 50% после подписания акта";
const ADDENDUM_PAYMENT_TERMS = [
  { label: "50 / 50", value: DEFAULT_ADDENDUM_PAYMENT_TERMS },
  { label: "100% предоплата", value: "100% предоплата до начала работ" },
  { label: "100% постоплата", value: "100% оплата после подписания акта" },
  { label: "30 / 70", value: "30% предоплата и 70% после подписания акта" },
];

const CONTRACT_REQUIRED_FIELDS = ["number", "city", "date", "clientName", "clientInn", "contractorName", "contractorInn", "bank", "days"];

const CONTRACT_PLACEHOLDERS = new Set([
  "___",
  "__________",
  "Заказчик",
  "Исполнитель",
  "ФИО, должность",
  "телефон / telegram",
  "юридический / почтовый адрес",
  "банк / карта / счет",
  "реквизиты для оплаты",
]);

const CONTRACT_OPTIONAL_BLOCKS = {
  vacation: {
    label: "Плановый перерыв",
    question: "Добавляем плановый перерыв (отпуск)?",
    why: "Зафиксирует даты отпуска прямо в договоре — сдвинет дедлайны автоматически.",
  },
};

const contractState = loadContractDraft();

const app = document.querySelector(".app");
const root = document.documentElement;
const formatNumber = new Intl.NumberFormat("ru-RU", { maximumFractionDigits: 0 });

function getEstimateCurrency() {
  if (state?.rateMode === "market") return DEFAULT_CURRENCY;
  return CURRENCIES[state?.currency] ? state.currency : DEFAULT_CURRENCY;
}

function money(value, currencyKey = getEstimateCurrency()) {
  const currency = CURRENCIES[currencyKey] || CURRENCIES[DEFAULT_CURRENCY];
  return `${formatNumber.format(Math.round(value || 0))} ${currency.symbol}`;
}

function getCurrencyLabel() {
  return CURRENCIES[getEstimateCurrency()]?.symbol || CURRENCIES[DEFAULT_CURRENCY].symbol;
}

function loadProfile() {
  try {
    return JSON.parse(localStorage.getItem(PROFILE_STORAGE_KEY) || "{}") || {};
  } catch {
    return {};
  }
}

function getDefaultEstimateName(projectKey = state.projectKey) {
  return PROJECTS[projectKey]?.label || "Смета";
}

function normalizeEstimateName(value, projectKey = DEFAULT_PROJECT_KEY) {
  const name = String(value || "").trim();
  if (!name) return "";
  const defaultName = getDefaultEstimateName(projectKey);
  return name === `Смета: ${defaultName}` ? "" : name;
}

function loadEstimateMeta(profile = {}, projectKey = DEFAULT_PROJECT_KEY) {
  try {
    const stored = JSON.parse(localStorage.getItem(ESTIMATE_META_STORAGE_KEY) || "{}") || {};
    return {
      estimateName: normalizeEstimateName(stored.estimateName ?? profile.estimateName ?? "", projectKey),
    };
  } catch {
    return {
      estimateName: normalizeEstimateName(profile.estimateName || "", projectKey),
    };
  }
}

function persistEstimateMeta() {
  localStorage.setItem(ESTIMATE_META_STORAGE_KEY, JSON.stringify(state.estimateMeta));
}

function getEstimateName(projectKey = state.projectKey) {
  return state.estimateMeta.estimateName.trim() || getDefaultEstimateName(projectKey);
}

function resizeEstimateNameInput(input) {
  if (!input) return;
  input.style.height = "auto";
  input.style.height = `${input.scrollHeight}px`;
}

function syncEstimateMetaInputs() {
  const estimateNameInput = document.querySelector('[data-estimate-meta="estimateName"]');

  if (estimateNameInput && document.activeElement !== estimateNameInput) {
    estimateNameInput.value = state.estimateMeta.estimateName || getEstimateName();
    resizeEstimateNameInput(estimateNameInput);
  }
}

function syncExportInputs() {
  const designerInput = document.querySelector('[data-input="designerName"]');
  const estimateInput = document.querySelector('[data-input="estimateName"]');
  if (designerInput) designerInput.value = state.profile.designerName || "";
  if (estimateInput) estimateInput.value = getEstimateName();
}

function syncEstimateNameWithProjectChange() {
  state.estimateMeta.estimateName = "";
  persistEstimateMeta();
  syncEstimateMetaInputs();
}

function getProject() {
  return PROJECTS[state.projectKey];
}

function getIncomeRate() {
  const income = Number(state.monthlyIncome || 0);
  const daysPerWeek = Math.max(Number(state.workDays || 1), 1);
  const hoursPerDay = Math.max(Number(state.billableHours || 1), 1);
  return Math.round(income / (daysPerWeek * 4.33 * hoursPerDay));
}

function getActiveRate() {
  if (state.rateMode === "income") return getIncomeRate();
  if (state.rateMode === "custom") return state.designerRate;
  return MARKET_RATES[state.marketGrade];
}

function getHoursLevel() {
  return state.rateMode === "market" ? state.marketGrade : "middle";
}

function getBaseStageCost(stage) {
  return Number(stage.hours || 0) * state.rate;
}

function getStageCost(stage) {
  return getBaseStageCost(stage);
}

function getBaseStagesTotal() {
  return state.stages.reduce((sum, stage) => sum + getBaseStageCost(stage), 0);
}

function getUrgencyAmount() {
  return state.mods.has("urgent") ? getBaseStagesTotal() * MODIFIERS.urgent : 0;
}

function getStagesTotal() {
  return getBaseStagesTotal() + getUrgencyAmount();
}

function getExpensesTotal() {
  return state.expenses.reduce((sum, expense) => sum + Number(expense.amount || 0), 0);
}

function getSubtotal() {
  return getStagesTotal() + getExpensesTotal();
}

function getTaxRate() {
  if (state.taxMode === "selfEmployed") {
    return state.clientType === "business" ? 6 : 4;
  }
  if (state.taxMode === "ipUsn") return 6;
  return Math.max(Number(state.customTaxRate || 0), 0);
}

function getTaxAmount() {
  return getSubtotal() * (getTaxRate() / 100);
}

function getTotal() {
  return getSubtotal() + getTaxAmount();
}

function getTotalHours() {
  return state.stages.reduce((sum, stage) => sum + Number(stage.hours || 0), 0);
}

function createStages(project, level) {
  return (project.stages || []).map((stage) => ({
    title: stage.title,
    description: stage.description || "",
    note: stage.note || "",
    hours: stage.hours[level] || stage.hours.middle,
    defaults: stage.hours,
    manuallyEditedHours: false,
  }));
}

const BRIEF_PROJECT_META = {
  logo: {
    titleBase: "Разработка логотипа",
    projectTypeLabel: "логотипа",
    entity: "бренда",
    patterns: [/логотип/i, /\bлого\b/i, /знак/i],
  },
  brand_identity: {
    titleBase: "Разработка фирменного стиля",
    projectTypeLabel: "фирменного стиля",
    entity: "бренда",
    patterns: [/фирменн/i, /айдентик/i, /брендинг/i, /брендбук/i, /палитр/i],
  },
  packaging: {
    titleBase: "Дизайн упаковки",
    projectTypeLabel: "упаковки",
    entity: "бренда",
    patterns: [/упаков/i, /этикет/i, /\bsku\b/i, /скю/i, /пачк/i, /короб/i],
  },
  website: {
    titleBase: "Разработка сайта",
    projectTypeLabel: "сайта",
    entity: "компании",
    patterns: [/сайт/i, /лендинг/i, /tilda/i, /тильд/i, /экран/i, /страниц/i, /интернет-магазин/i],
  },
  presentation: {
    titleBase: "Разработка презентации",
    projectTypeLabel: "презентации",
    entity: "проекта",
    patterns: [/презентац/i, /слайд/i, /pitch/i, /питч/i, /deck/i],
  },
  smm: {
    titleBase: "Разработка SMM-дизайна",
    projectTypeLabel: "SMM-дизайна",
    entity: "бренда",
    patterns: [/smm/i, /соцсет/i, /пост/i, /сторис/i, /instagram/i, /инстаграм/i, /контент/i],
  },
  marketplaces: {
    titleBase: "Дизайн карточек маркетплейса",
    projectTypeLabel: "карточек маркетплейса",
    entity: "бренда",
    patterns: [/маркетплейс/i, /wildberries/i, /\bwb\b/i, /ozon/i, /карточ/i, /инфографик/i],
  },
  outdoor: {
    titleBase: "Дизайн наружной рекламы",
    projectTypeLabel: "наружной рекламы",
    entity: "бренда",
    patterns: [/наружн/i, /баннер/i, /билборд/i, /вывеск/i, /ситиборд/i, /афиш/i],
  },
  print: {
    titleBase: "Дизайн полиграфии",
    projectTypeLabel: "полиграфии",
    entity: "бренда",
    patterns: [/полиграф/i, /буклет/i, /листовк/i, /визитк/i, /каталог/i, /плакат/i, /меню/i],
  },
  custom: {
    titleBase: "Разработка проекта",
    projectTypeLabel: "проекта",
    entity: "проекта",
    patterns: [],
  },
};

function includesAny(text, patterns) {
  return patterns.some((pattern) => pattern.test(text));
}

function detectBriefProjectType(text) {
  const source = String(text || "");
  const order = ["brand_identity", "packaging", "website", "presentation", "marketplaces", "smm", "outdoor", "print", "logo"];
  return order.find((type) => includesAny(source, BRIEF_PROJECT_META[type].patterns)) || "custom";
}

function cleanBriefName(value) {
  return String(value || "")
    .replace(/^["«“„]+|["»”]+$/g, "")
    .replace(/\s+(?:нужно|надо|хотим|логотип|сайт|упаковк[ауи]|презентац(?:ия|ию)|фирменн(?:ый|ого)|палитр[ауи]|шрифт[ыа]?|и\s+.+)$/i, "")
    .replace(/[,:;.].*$/g, "")
    .trim();
}

function extractBriefBrandName(text) {
  const source = String(text || "");
  const labeled = getLabelValueFromText(source, [
    "название бренда",
    "бренд",
    "название компании",
    "компания",
    "название проекта",
    "проект",
  ]);
  if (labeled) return cleanBriefName(labeled);

  const pattern = /(?:для\s+)?(?:бренд[а]?|компани[ия]|проект[а]?)\s+["«“]?([A-ZА-ЯЁ0-9][A-ZА-ЯЁA-Za-zА-Яа-яЁё0-9&._ -]{1,48})/i;
  const match = source.match(pattern);
  if (match?.[1]) return cleanBriefName(match[1]);
  return "";
}

function getBriefQuantity(text, patterns) {
  const source = String(text || "");
  for (const pattern of patterns) {
    const match = source.match(pattern);
    if (match?.[1]) return Math.max(Number(match[1]), 0);
  }
  return 0;
}

function getBriefQuantities(text) {
  return {
    concepts: getBriefQuantity(text, [
      /(\d+)\s*(?:концепц|вариант[а-я]*\s+логотип|направлен)/i,
      /(?:концепц|вариант[а-я]*\s+логотип|направлен)[^\d]{0,16}(\d+)/i,
    ]),
    revisions: getBriefQuantity(text, [
      /(\d+)\s*(?:раунд[а-я]*\s+прав|итераци[а-я]*\s+прав|правк[иок]?)/i,
      /(?:правк[иок]?|раунд[а-я]*\s+прав)[^\d]{0,16}(\d+)/i,
    ]),
    sku: getBriefQuantity(text, [
      /(\d+)\s*(?:sku|скю|артикул[а-я]*|товар[а-я]*)/i,
      /(?:sku|скю|артикул[а-я]*|товар[а-я]*)[^\d]{0,16}(\d+)/i,
    ]),
    carriers: getBriefQuantity(text, [
      /(\d+)\s*(?:носител[а-я]*|мерч[а-я]*|предмет[а-я]*|мокап[а-я]*)/i,
      /(?:носител[а-я]*|мерч[а-я]*|предмет[а-я]*)[^\d]{0,16}(\d+)/i,
    ]),
    pages: getBriefQuantity(text, [
      /(\d+)\s*(?:страниц[а-я]*|page[s]?)/i,
      /(?:страниц[а-я]*|page[s]?)[^\d]{0,16}(\d+)/i,
    ]),
    screens: getBriefQuantity(text, [
      /(\d+)\s*(?:экран[а-я]*|screen[s]?)/i,
      /(?:экран[а-я]*|screen[s]?)[^\d]{0,16}(\d+)/i,
    ]),
    layouts: getBriefQuantity(text, [
      /(\d+)\s*(?:макет[а-я]*|layout[s]?)/i,
      /(?:макет[а-я]*|layout[s]?)[^\d]{0,16}(\d+)/i,
    ]),
    formats: getBriefQuantity(text, [
      /(\d+)\s*(?:формат[а-я]*|размер[а-я]*)/i,
      /(?:формат[а-я]*|размер[а-я]*)[^\d]{0,16}(\d+)/i,
    ]),
    slides: getBriefQuantity(text, [
      /(\d+)\s*(?:слайд[а-я]*|slide[s]?)/i,
      /(?:слайд[а-я]*|slide[s]?)[^\d]{0,16}(\d+)/i,
    ]),
    posts: getBriefQuantity(text, [
      /(\d+)\s*(?:пост[а-я]*|сторис|сториз|stories|публикац[а-я]*)/i,
      /(?:пост[а-я]*|сторис|сториз|stories|публикац[а-я]*)[^\d]{0,16}(\d+)/i,
    ]),
  };
}

function makeBriefStage(title, description, hours) {
  return {
    name: title,
    description,
    hours: Math.max(1, Math.round(hours)),
  };
}

function buildBriefStages(projectType, q) {
  const concepts = Math.max(q.concepts || 1, 1);
  const revisions = Math.max(q.revisions || 1, 1);
  const revisionHours = Math.min(10, 3 + revisions * 2);

  if (projectType === "logo") {
    return [
      makeBriefStage("Анализ проекта", "Изучение задачи, аудитории, конкурентов и визуального контекста", 5),
      makeBriefStage("Поиск визуального направления", "Референсы, мудборд и формулировка критериев для логотипа", 6),
      makeBriefStage("Разработка логотипа", "Создание и проработка концепций логотипа", 12 + concepts * 4),
      makeBriefStage("Доработка выбранной концепции", "Финализация знака, шрифтовой части и базовых цветовых вариантов", 6),
      makeBriefStage("Подготовка файлов", "Экспорт логотипа в нужных форматах и подготовка к передаче", 3),
      makeBriefStage("Согласование и правки", "Коммуникация с клиентом и внесение согласованных корректировок", revisionHours),
    ];
  }

  if (projectType === "brand_identity") {
    const carriers = q.carriers || q.formats || 5;
    return [
      makeBriefStage("Анализ проекта", "Изучение брифа, аудитории, конкурентов и визуального контекста", 4),
      makeBriefStage("Визуальная концепция", "Мудборд, референсы и выбор направления фирменного стиля", 8 + concepts * 2),
      makeBriefStage("Разработка логотипа", "Создание и доработка концепции логотипа", 16 + concepts * 3),
      makeBriefStage("Разработка фирменной системы", "Цветовая палитра, типографика и графические элементы", 12),
      makeBriefStage("Адаптация на носители", "Применение фирменного стиля на выбранных носителях", Math.max(8, carriers * 2)),
      makeBriefStage("Подготовка файлов", "Экспорт и подготовка материалов к передаче заказчику", 4),
      makeBriefStage("Согласование и правки", "Работа с обратной связью и финальные корректировки", revisionHours),
    ];
  }

  if (projectType === "packaging") {
    const sku = q.sku || 1;
    return [
      makeBriefStage("Анализ продукта и полки", "Изучение товара, конкурентов, референсов и ограничений формата", 5),
      makeBriefStage("Концепция упаковки", "Поиск визуального направления и подготовка первых вариантов", 10 + concepts * 3),
      makeBriefStage("Дизайн основной упаковки", "Разработка макета ключевого SKU с композицией, графикой и текстами", 12),
      makeBriefStage("Адаптация на SKU", "Перенос дизайн-системы на дополнительные вкусы, объёмы или артикулы", Math.max(4, (sku - 1) * 3)),
      makeBriefStage("Подготовка к печати", "Проверка размеров, вылетов, цветового профиля и экспорт файлов", 5),
      makeBriefStage("Согласование и правки", "Внесение правок после проверки макетов", revisionHours),
    ];
  }

  if (projectType === "website") {
    const pages = q.pages || q.screens || 5;
    return [
      makeBriefStage("Анализ задачи", "Изучение цели сайта, аудитории, конкурентов и вводных материалов", 4),
      makeBriefStage("Структура и прототип", "Карта страниц, логика блоков и пользовательские сценарии", Math.max(6, pages * 1.5)),
      makeBriefStage("Визуальная концепция", "Moodboard, цвет, типографика и направление интерфейса", 8),
      makeBriefStage("UI-дизайн страниц", "Отрисовка макетов ключевых страниц и состояний", Math.max(12, pages * 3)),
      makeBriefStage("Адаптив", "Подготовка мобильных и планшетных версий", Math.max(6, pages * 1.4)),
      makeBriefStage("Подготовка к передаче", "UI-kit, экспорт ассетов и комментарии для разработки", 4),
      makeBriefStage("Согласование и правки", "Финальные корректировки по обратной связи", revisionHours),
    ];
  }

  if (projectType === "presentation") {
    const slides = q.slides || 10;
    return [
      makeBriefStage("Разбор материалов", "Изучение цели презентации, аудитории и исходного контента", 3),
      makeBriefStage("Структура презентации", "Логика подачи, сценарий и группировка смысловых блоков", 4),
      makeBriefStage("Дизайн-концепция", "Визуальное направление на ключевых слайдах", 6),
      makeBriefStage("Дизайн слайдов", "Оформление всех слайдов, графиков и визуальных акцентов", Math.max(8, slides * 0.9)),
      makeBriefStage("Финальная верстка", "Выравнивание, проверка текста и подготовка PDF/PPTX", Math.max(3, slides * 0.25)),
      makeBriefStage("Согласование и правки", "Внесение корректировок после просмотра", revisionHours),
    ];
  }

  if (projectType === "smm") {
    const posts = q.posts || q.formats || 8;
    return [
      makeBriefStage("Анализ контента", "Изучение бренда, рубрик, референсов и задач коммуникации", 3),
      makeBriefStage("Визуальная концепция", "Настройка стиля, сетки, типографики и графических приёмов", 6),
      makeBriefStage("Шаблоны постов и сторис", "Разработка набора шаблонов для публикаций", Math.max(8, posts * 1.5)),
      makeBriefStage("Адаптация форматов", "Подготовка вариантов под разные размеры и сценарии публикации", Math.max(4, (q.formats || 3) * 1.5)),
      makeBriefStage("Подготовка файлов", "Экспорт шаблонов и организация материалов для передачи", 3),
      makeBriefStage("Согласование и правки", "Корректировки по обратной связи", revisionHours),
    ];
  }

  if (projectType === "marketplaces") {
    const sku = q.sku || q.layouts || 5;
    return [
      makeBriefStage("Анализ карточек", "Изучение товара, конкурентов и требований площадки", 4),
      makeBriefStage("Структура инфографики", "Сценарий слайдов карточки и ключевые преимущества продукта", 5),
      makeBriefStage("Дизайн основной карточки", "Визуальная система, обложка и инфографика для первого товара", 10),
      makeBriefStage("Адаптация на товары", "Перенос решения на дополнительные SKU или карточки", Math.max(6, sku * 2)),
      makeBriefStage("Экспорт и проверка", "Подготовка файлов под требования маркетплейса", 3),
      makeBriefStage("Согласование и правки", "Корректировки после проверки", revisionHours),
    ];
  }

  if (projectType === "outdoor") {
    const formats = q.formats || q.layouts || 2;
    return [
      makeBriefStage("Анализ задачи", "Изучение места размещения, аудитории и ограничений носителя", 3),
      makeBriefStage("Идея и композиция", "Поиск ключевого сообщения и визуального решения", 6),
      makeBriefStage("Дизайн основного макета", "Разработка макета наружной рекламы", 8),
      makeBriefStage("Адаптация форматов", "Подготовка вариантов под разные размеры и носители", Math.max(4, formats * 2)),
      makeBriefStage("Подготовка к производству", "Проверка размеров, вылетов, разрешения и экспорт", 3),
      makeBriefStage("Согласование и правки", "Финальные корректировки", revisionHours),
    ];
  }

  if (projectType === "print") {
    const layouts = q.layouts || q.formats || 2;
    return [
      makeBriefStage("Разбор материалов", "Изучение задачи, текстов, форматов и требований к печати", 3),
      makeBriefStage("Концепция макета", "Композиция, сетка, стиль и визуальная логика", 5),
      makeBriefStage("Дизайн макетов", "Верстка и оформление основных страниц или носителей", Math.max(8, layouts * 3)),
      makeBriefStage("Подготовка к печати", "Проверка вылетов, цветов, разрешения и экспорт файлов", 4),
      makeBriefStage("Согласование и правки", "Внесение корректировок перед передачей", revisionHours),
    ];
  }

  return [
    makeBriefStage("Брифинг и сбор данных", "Уточнение задачи, целей, ограничений и ожидаемого результата", 3),
    makeBriefStage("Анализ и референсы", "Изучение контекста проекта и подбор визуальных ориентиров", 5),
    makeBriefStage("Концепция", "Разработка основного визуального направления", 8),
    makeBriefStage("Дизайн-макеты", "Создание основных материалов проекта", Math.max(8, q.layouts * 3 || q.formats * 2 || 10)),
    makeBriefStage("Подготовка файлов", "Экспорт, проверка и подготовка материалов к передаче", 3),
    makeBriefStage("Согласование и правки", "Коммуникация с клиентом и финальные корректировки", revisionHours),
  ];
}

function buildBriefPricingRisks(projectType, text, q) {
  const risks = [];
  const source = String(text || "");
  const hasDeadline = /(срок|дедлайн|до\s+\d|недел|месяц|дня|дней|сроч)/i.test(source);
  const addIf = (condition, label) => {
    if (condition && !risks.includes(label)) risks.push(label);
  };

  addIf(!q.concepts && ["logo", "brand_identity", "packaging", "outdoor"].includes(projectType), "Не указано количество концепций.");
  addIf(!q.revisions, "Не указано количество раундов правок.");
  addIf(!q.sku && ["packaging", "marketplaces"].includes(projectType), "Не указано количество SKU.");
  addIf(!q.carriers && projectType === "brand_identity", "Не указано количество носителей.");
  addIf(!q.pages && projectType === "website", "Не указано количество страниц сайта.");
  addIf(!q.screens && projectType === "website", "Не указано количество экранов.");
  addIf(!q.layouts && ["marketplaces", "print", "outdoor", "custom"].includes(projectType), "Не указано количество макетов.");
  addIf(!hasDeadline, "Не указана срочность проекта.");
  addIf(!q.formats && ["smm", "outdoor", "print", "marketplaces"].includes(projectType), "Не указано количество форматов.");
  addIf(!q.slides && projectType === "presentation", "Не указано количество слайдов.");
  addIf(!q.posts && projectType === "smm", "Не указано количество постов или сторис.");

  return risks.slice(0, 6);
}

function buildBriefAdditionalCosts(projectType, text) {
  const source = String(text || "");
  const costs = [];
  const add = (label) => {
    if (!costs.includes(label)) costs.push(label);
  };

  if (/ai|нейросет|midjourney|gpt|генерац/i.test(source)) {
    add("Добавьте стоимость токенов нейросетей, если используете AI-инструменты в работе.");
  } else {
    add("Добавьте стоимость токенов нейросетей, если используете AI-инструменты в работе.");
  }

  if (["website", "presentation", "smm", "brand_identity", "marketplaces"].includes(projectType)) {
    add("Добавьте стоимость фотостоков, если планируется использование стоковых изображений.");
  }
  if (["logo", "brand_identity", "website", "presentation", "packaging", "print"].includes(projectType)) {
    add("Добавьте стоимость лицензий на шрифты, если используются платные шрифты.");
  }
  if (["packaging", "print", "outdoor"].includes(projectType)) {
    add("Добавьте расходы на печать или тестовые образцы, если это предусмотрено проектом.");
  }
  if (["website", "smm", "marketplaces", "presentation", "custom"].includes(projectType)) {
    add("Добавьте стоимость подрядчиков, если часть работ передаётся на аутсорс.");
  }

  return costs.slice(0, 4);
}

function buildBriefEstimateTitle(projectType, brandName) {
  const meta = BRIEF_PROJECT_META[projectType] || BRIEF_PROJECT_META.custom;
  if (!brandName) return meta.titleBase;
  return `${meta.titleBase} для ${meta.entity} ${brandName}`;
}

async function analyzeBrief(text) {
  const source = String(text || "").trim();
  if (!source) {
    throw new Error("Добавьте бриф или сообщение клиента.");
  }

  const projectType = detectBriefProjectType(source);
  const brandName = extractBriefBrandName(source);
  const quantities = getBriefQuantities(source);

  return {
    estimate_title: buildBriefEstimateTitle(projectType, brandName),
    project_type: projectType,
    brand_name: brandName || undefined,
    stages: buildBriefStages(projectType, quantities),
    pricing_risks: buildBriefPricingRisks(projectType, source, quantities),
    additional_costs: buildBriefAdditionalCosts(projectType, source),
  };
}

function refreshStageHours(level) {
  state.stages.forEach((stage) => {
    if (!stage.manuallyEditedHours && stage.defaults) {
      stage.hours = stage.defaults[level] || stage.defaults.middle;
    }
  });
}

function setTheme(theme) {
  state.theme = theme;
  root.dataset.theme = theme === "dark" ? "dark" : "light";
  document.querySelectorAll(".deedoc-card").forEach((card) => {
    card.style.removeProperty("transform");
    card.style.removeProperty("transition");
  });
  localStorage.setItem("designkit.theme", state.theme);
}

function routeTo(view, pushHistory = true) {
  const prev = state.view;
  state.view = ["calculator", "contract"].includes(view) ? view : "home";
  if (pushHistory && prev !== state.view) state.navHistory.push(prev);
  app.dataset.view = state.view;
  document.body.dataset.view = state.view;
  app.dataset.estimate = state.generated ? "ready" : "empty";
  document.querySelectorAll("[data-route]").forEach((item) => {
    const route = item.dataset.route;
    if (item.classList.contains("rail__link") || item.classList.contains("topbar__link")) {
      item.classList.toggle("is-active", route === state.view);
    }
  });
  document.querySelector("[data-sticky-summary]").classList.toggle("is-hidden", !(state.view === "calculator" && state.generated));

  const isInner = state.view !== "home";
  const sectionNav = document.querySelector(".deedoc-section-nav");
  if (sectionNav) {
    sectionNav.hidden = !isInner;
    sectionNav.querySelectorAll(".deedoc-section-tab").forEach(btn => {
      btn.classList.toggle("is-current", btn.dataset.route === state.view);
    });
  }

  if (state.view !== "calculator") {
    mobileCalcSheetKey = "";
  }

  if (state.view !== "contract") {
    mobileContractSheetKey = "";
    mobileContractDocVisible = false;
    mobileContractClientImportOpen = false;
    mobileContractSheetSignature = "";
    mobileContractClientReplyDraft = "";
  }

  renderMobileCalculatorUI();
  renderMobileContractUI();
  if (state.view === "contract") renderContractWorkspace();
}

function syncRouteHash(view, replace = false) {
  const nextHash = `#${view}`;
  if (location.hash === nextHash) return;
  history[replace ? "replaceState" : "pushState"](null, "", nextHash);
}

function openSoonModal(target) {
  const description = target.dataset.description || "Раздел находится в очереди MVP. Сейчас можно работать со сметой и договором.";
  document.querySelector("[data-soon-title]").textContent = target.dataset.label || "Сценарий";
  document.querySelector("[data-soon-description]").textContent = description;
  document.querySelector("[data-soon-modal]").showModal();
}

function isMobileCalculatorUI() {
  return window.innerWidth <= 760;
}

function getMobileRateChipLabel() {
  if (state.rateMode === "market") {
    return `${({
      junior: "Джун",
      middle: "Мидл",
      senior: "Синьор",
    }[state.marketGrade] || "Мидл")} · ${formatNumber.format(MARKET_RATES[state.marketGrade] || 0)} ₽`;
  }
  if (state.rateMode === "income") {
    return `Доход · ${formatNumber.format(getIncomeRate())} ₽`;
  }
  return `${formatNumber.format(state.designerRate || 0)} ₽/ч`;
}

function getMobileTaxChipLabel() {
  if (state.taxMode === "selfEmployed") {
    return `СЗ · ${formatNumber.format(getTaxRate())}%`;
  }
  if (state.taxMode === "ipUsn") {
    return "ИП · 6%";
  }
  return `Свой · ${formatNumber.format(getTaxRate())}%`;
}

function renderMobileCalculatorUI() {
  const rootNode = document.querySelector("[data-mobile-calc-sheet]");
  const isOpen = Boolean(mobileCalcSheetKey && state.view === "calculator" && isMobileCalculatorUI());
  const titleMap = {
    project: "Тип проекта",
    rate: "Ставка",
    tax: "Налог",
  };

  document.querySelectorAll("[data-mobile-chip-value]").forEach((node) => {
    if (node.dataset.mobileChipValue === "project") node.textContent = getProject().label;
    if (node.dataset.mobileChipValue === "rate") node.textContent = getMobileRateChipLabel();
    if (node.dataset.mobileChipValue === "tax") node.textContent = getMobileTaxChipLabel();
  });

  document.querySelectorAll("[data-action=\"open-mobile-calc-sheet\"]").forEach((button) => {
    const isActive = button.dataset.mobileSheet === mobileCalcSheetKey && isOpen;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  document.querySelectorAll(".mobile-calc-controls__cta").forEach((button) => {
    button.textContent = state.generated ? "Пересчитать стоимость" : "Рассчитать стоимость";
  });

  if (!rootNode) return;

  rootNode.hidden = !isOpen;
  rootNode.setAttribute("aria-hidden", String(!isOpen));
  document.body.classList.toggle("mobile-calc-sheet-open", isOpen);

  const titleNode = document.querySelector("[data-mobile-sheet-title]");
  if (titleNode) titleNode.textContent = titleMap[mobileCalcSheetKey] || "Параметр сметы";

  document.querySelectorAll(".mobile-calc-sheet__handle").forEach((button) => {
    button.setAttribute("aria-label", isOpen ? "Свернуть панель параметров" : "Развернуть панель параметров");
    button.dataset.mobileSheet = mobileCalcSheetKey || "project";
  });

  document.querySelectorAll("[data-mobile-sheet-panel]").forEach((panel) => {
    panel.hidden = panel.dataset.mobileSheetPanel !== mobileCalcSheetKey;
  });
}

function openMobileCalcSheet(key) {
  if (mobileCalcSheetKey === key && state.view === "calculator" && isMobileCalculatorUI()) {
    closeMobileCalcSheet();
    return;
  }
  mobileCalcSheetKey = key;
  renderMobileCalculatorUI();
}

function closeMobileCalcSheet() {
  mobileCalcSheetKey = "";
  renderMobileCalculatorUI();
}

function renderProjectOptions() {
  document.querySelectorAll("[data-project-options]").forEach((container) => {
    container.innerHTML = PROJECT_ORDER.map((key) => [key, PROJECTS[key]]).filter(([, project]) => project).map(([key, project]) => `
      <button class="project-option ${key === state.projectKey ? "is-selected" : ""}" type="button" data-project="${key}" role="radio" aria-checked="${key === state.projectKey}">
        <strong>${project.label}</strong>
      </button>
    `).join("");
  });
  renderBriefAiEntry();
  updateEmptyHint();
  renderMobileCalculatorUI();
}

function updateEmptyHint() {
  const hint = document.querySelector("[data-empty-hint]");
  if (!hint || state.generated) return;
  hint.textContent = "Выберите тип проекта, ставку и налог\nи нажмите Рассчитать стоимость";
}

function renderBriefAiEntry() {
  document.querySelectorAll("[data-brief-ai-entry]").forEach((entry) => {
    entry.hidden = !BRIEF_AI_ENTRY_ENABLED || state.projectKey !== "custom";
  });
}

function clearBriefAnalysis() {
  state.briefAi.analysis = null;
  renderBriefAiInsights();
}

function openBriefAiModal() {
  closeMobileCalcSheet();
  const modal = document.querySelector("[data-brief-ai-modal]");
  const input = document.querySelector("[data-brief-ai-input]");
  if (!modal || !input) return;
  input.value = state.briefAi.sourceText || "";
  setBriefAiStatus("AI-оценка примерная: часы и стоимость нужно проверить под свою скорость и договорённости с клиентом.");
  modal.showModal();
  requestAnimationFrame(() => input.focus());
}

function setBriefAiStatus(message, isError = false) {
  const status = document.querySelector("[data-brief-ai-status]");
  if (!status) return;
  status.textContent = message;
  status.classList.toggle("is-error", isError);
}

function setBriefAiLoading(isLoading) {
  state.briefAi.isLoading = isLoading;
  document.querySelectorAll("[data-action='analyze-brief']").forEach((button) => {
    button.disabled = isLoading;
    button.textContent = isLoading ? "✨ Считаю..." : "✨ Рассчитать";
  });
}

async function runBriefAnalysis() {
  const input = document.querySelector("[data-brief-ai-input]");
  const text = input?.value.trim() || "";
  if (!text) {
    setBriefAiStatus("Вставьте бриф, сообщение клиента или заметки после созвона.", true);
    input?.focus();
    return;
  }

  setBriefAiLoading(true);
  setBriefAiStatus("Анализирую задачу и собираю структуру сметы...");
  try {
    const analysis = await analyzeBrief(text);
    applyBriefAnalysis(analysis, text);
    document.querySelector("[data-brief-ai-modal]")?.close();
  } catch (error) {
    setBriefAiStatus(error?.message || "Не получилось разобрать бриф. Попробуйте добавить больше деталей.", true);
  } finally {
    setBriefAiLoading(false);
  }
}

function applyBriefAnalysis(analysis, sourceText) {
  state.projectKey = "custom";
  state.rate = getActiveRate();
  state.stages = (analysis.stages || []).map((stage) => ({
    title: stage.name || stage.title || "Этап работ",
    description: stage.description || "",
    note: "",
    hours: Math.max(Number(stage.hours || 0), 1),
    defaults: null,
    manuallyEditedHours: true,
  }));
  state.expenses = [];
  state.generated = true;
  state.briefAi.sourceText = sourceText;
  state.briefAi.analysis = analysis;
  state.estimateMeta.estimateName = normalizeEstimateName(analysis.estimate_title || "", state.projectKey);
  persistEstimateMeta();
  renderProjectOptions();
  renderEstimate();
  routeTo("calculator");

  if (window.innerWidth <= 760) {
    const result = document.querySelector("[data-estimate-result]");
    if (result) setTimeout(() => result.scrollIntoView({ behavior: "smooth", block: "start" }), 80);
  }
}

function renderInfoList(items) {
  if (!items?.length) return "";
  return `<ul>${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`;
}

function renderBriefAiInsights() {
  const node = document.querySelector("[data-ai-estimate-insights]");
  if (!node) return;
  const analysis = state.briefAi.analysis;
  const isAiEstimate = Boolean(analysis && state.generated);

  const stagesNote = document.querySelector("[data-ai-stages-note]");
  if (stagesNote) stagesNote.hidden = !isAiEstimate;
  const customStagesNote = document.querySelector("[data-custom-stages-note]");
  if (customStagesNote) customStagesNote.hidden = !(state.generated && state.projectKey === "custom" && !isAiEstimate);

  const risks = isAiEstimate ? (analysis.pricing_risks || []) : [];
  node.hidden = !risks.length;
  if (!risks.length) {
    node.innerHTML = "";
    return;
  }

  node.innerHTML = `
    <section class="ai-insight-card ai-insight-card--warning">
      <h3>Уточните данные</h3>
      ${renderInfoList(risks)}
      <p>Некоторые данные отсутствуют и могут повлиять на точность расчёта. Добавьте недостающую информацию в описание проекта и нажмите «Рассчитать» повторно.</p>
    </section>
  `;
}

function renderRate() {
  state.rate = getActiveRate();
  const currencyLabel = getCurrencyLabel();
  document.querySelectorAll('[data-input="designerRate"]').forEach((designerRateInput) => {
    if (document.activeElement !== designerRateInput) designerRateInput.value = state.designerRate;
  });
  ["monthlyIncome", "workDays", "billableHours"].forEach((key) => {
    document.querySelectorAll(`[data-input="${key}"]`).forEach((input) => {
      if (document.activeElement !== input) input.value = state[key] || "";
    });
  });
  document.querySelectorAll("[data-income-rate]").forEach((node) => {
    node.textContent = `${money(getIncomeRate())}/час`;
  });
  document.querySelectorAll("[data-currency-rate-label]").forEach((node) => {
    node.textContent = `${currencyLabel}/час`;
  });
  Object.entries(MARKET_RATES).forEach(([grade, rate]) => {
    document.querySelectorAll(`[data-market-rate-label="${grade}"]`).forEach((node) => {
      node.textContent = money(rate, DEFAULT_CURRENCY);
    });
  });
  document.querySelectorAll("[data-currency-picker]").forEach((node) => {
    node.classList.toggle("is-hidden", state.rateMode === "market");
  });
  document.querySelectorAll("[data-currency]").forEach((button) => {
    const isActive = button.dataset.currency === state.currency;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  document.querySelectorAll("[data-rate-mode]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.rateMode === state.rateMode);
  });
  document.querySelectorAll("[data-rate-panel]").forEach((panel) => {
    const isHidden = panel.dataset.ratePanel !== state.rateMode;
    panel.classList.toggle("is-hidden", isHidden);
    panel.hidden = isHidden;
  });
  document.querySelectorAll("[data-market-grade]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.marketGrade === state.marketGrade);
  });
  document.querySelectorAll("[data-tax-mode]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.taxMode === state.taxMode);
  });
  document.querySelectorAll("[data-client-type]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.clientType === state.clientType);
  });
  document.querySelectorAll('[data-input="customTaxRate"]').forEach((customTaxInput) => {
    if (document.activeElement !== customTaxInput) customTaxInput.value = state.customTaxRate;
  });
  document.querySelectorAll("[data-tax-custom]").forEach((node) => {
    node.classList.toggle("is-hidden", state.taxMode !== "custom");
  });
  document.querySelectorAll("[data-tax-rate-label]").forEach((node) => {
    node.textContent = `${formatNumber.format(getTaxRate())}%`;
  });
  renderMobileCalculatorUI();
}

function generateEstimate(force = false, { preserveBrief = false } = {}) {
  const project = getProject();
  state.rate = getActiveRate();
  if (!preserveBrief) state.briefAi.analysis = null;
  if (force || !state.generated) {
    state.stages = createStages(project, getHoursLevel());
    state.expenses = [];
  }
  state.generated = true;
  renderEstimate();
  routeTo("calculator");
  if (state.stages.length || state.expenses.length) trackMetrikaGoal("estimate_calculated");
  // На мобиле прокручиваем к результату
  if (window.innerWidth <= 760) {
    const result = document.querySelector("[data-estimate-result]");
    if (result) setTimeout(() => result.scrollIntoView({ behavior: "smooth", block: "start" }), 80);
  }
}

function resetEstimate() {
  state.generated = false;
  state.stages = [];
  state.expenses = [];
  state.mods.clear();
  state.briefAi.sourceText = "";
  state.briefAi.analysis = null;
  state.estimateMeta.estimateName = "";
  persistEstimateMeta();
  renderEstimate();
  routeTo("calculator");
}

function renderEstimate() {
  renderRate();
  app.dataset.estimate = state.generated ? "ready" : "empty";

  document.querySelector("[data-estimate-empty]").classList.toggle("is-hidden", state.generated);
  document.querySelector("[data-estimate-result]").classList.toggle("is-hidden", !state.generated);
  document.querySelector("[data-sticky-summary]").classList.toggle("is-hidden", !(state.view === "calculator" && state.generated));
  renderBriefAiEntry();
  renderMobileCalculatorUI();

  if (!state.generated) {
    renderBriefAiInsights();
    return;
  }

  syncEstimateMetaInputs();
  updateTotalsOnly();

  const list = document.querySelector("[data-stage-list]");
  if (!state.stages.length) {
    list.innerHTML = `
      <div class="stage-list-empty">
        <strong>Добавьте этапы проекта вручную</strong>
        <p>Вы удалили все этапы. Добавьте хотя бы один этап, чтобы смета и PDF собрались корректно.</p>
      </div>
    `;
  } else {
    list.innerHTML = state.stages.map((stage, index) => {
    return `
      <article class="stage-card" data-stage-index="${index}">
        <div class="stage-order">
          <button class="drag-handle" type="button" draggable="true" data-drag-stage="${index}" aria-label="Перетащить этап">⋮⋮</button>
          <span>${String(index + 1).padStart(2, "0")}</span>
        </div>
        <div class="stage-card__body">
          <input class="stage-title-input" type="text" value="${escapeHtml(stage.title)}" data-stage-field="title" data-index="${index}" aria-label="Название этапа ${index + 1}">
          <textarea class="stage-description-input" data-stage-field="description" data-index="${index}" aria-label="Описание этапа ${index + 1}">${escapeHtml(stage.description)}</textarea>
          ${stage.note ? `<p class="stage-note">${escapeHtml(stage.note)}</p>` : ""}
        </div>
        <div class="stage-card__side">
          <div class="hours-stepper" aria-label="Часы этапа ${index + 1}">
            <button class="hours-stepper__btn" type="button" data-action="adjust-stage-hours" data-index="${index}" data-delta="-1" aria-label="Уменьшить часы этапа ${index + 1}">−</button>
            <label class="hours-field">
              <input type="number" min="0" step="1" value="${stage.hours}" data-stage-field="hours" data-index="${index}" aria-label="Часы этапа ${index + 1}">
              <span>ч</span>
            </label>
            <button class="hours-stepper__btn" type="button" data-action="adjust-stage-hours" data-index="${index}" data-delta="1" aria-label="Увеличить часы этапа ${index + 1}">+</button>
          </div>
          <div class="stage-stat"><strong data-stage-cost="${index}">${money(getStageCost(stage))}</strong></div>
        </div>
        <button class="icon-button icon-button--remove" type="button" data-action="remove-stage" data-index="${index}" aria-label="Удалить этап">×</button>
      </article>
    `;
    }).join("");
  }

  requestAnimationFrame(() => {
    list.querySelectorAll(".stage-description-input").forEach(el => {
      el.style.height = "auto";
      el.style.height = el.scrollHeight + "px";
    });
  });

  renderExpenses();
  renderBriefAiInsights();
}

function updateTotalsOnly() {
  const total = money(getTotal());
  document.querySelector("[data-estimate-total]").textContent = total;
  document.querySelector("[data-sticky-total]").textContent = total;
  const taxLabel = document.querySelector("[data-estimate-tax-label]");
  if (taxLabel) taxLabel.textContent = `налог ${formatNumber.format(getTaxRate())}%`;
  const breakdown = document.querySelector("[data-estimate-breakdown]");
  if (breakdown) {
    const urgencyRow = state.mods.has("urgent")
      ? `<div class="breakdown-row"><span>Срочность +30%</span><strong>${money(getUrgencyAmount())}</strong></div>`
      : "";
    const expensesRow = state.expenses.length
      ? `<div class="breakdown-row"><span>Расходы</span><strong>${money(getExpensesTotal())}</strong></div>`
      : "";
    breakdown.innerHTML = `
      <div class="breakdown-row"><span>Работы</span><strong>${money(getBaseStagesTotal())}</strong></div>
      ${urgencyRow}
      ${expensesRow}
      <div class="breakdown-row"><span>Налог ${formatNumber.format(getTaxRate())}%</span><strong>${money(getTaxAmount())}</strong></div>
      <div class="breakdown-row breakdown-row--total"><span>Итого</span><strong>${money(getTotal())}</strong></div>
    `;
  }
  state.stages.forEach((stage, index) => {
    const costNode = document.querySelector(`[data-stage-cost="${index}"]`);
    if (costNode) costNode.textContent = money(getStageCost(stage));
  });
}

function renderExpenses() {
  const list = document.querySelector("[data-expense-list]");
  if (!state.expenses.length) {
    list.innerHTML = "";
    return;
  }
  list.innerHTML = state.expenses.map((expense, index) => `
    <span class="expense-chip">
      ${escapeHtml(expense.title)} · ${money(expense.amount)}
      <button type="button" data-action="remove-expense" data-index="${index}" aria-label="Удалить расход">×</button>
    </span>
  `).join("");
}

function addStage() {
  state.stages.push({ title: "Новый этап", hours: 4, description: "Коротко опишите результат этапа.", defaults: null, manuallyEditedHours: true });
  renderEstimate();
}

function moveStage(index, direction) {
  const nextIndex = index + direction;
  if (nextIndex < 0 || nextIndex >= state.stages.length) return;
  const copy = [...state.stages];
  [copy[index], copy[nextIndex]] = [copy[nextIndex], copy[index]];
  state.stages = copy;
  renderEstimate();
}

function moveStageTo(fromIndex, toIndex) {
  if (fromIndex === toIndex || fromIndex < 0 || toIndex < 0 || fromIndex >= state.stages.length || toIndex >= state.stages.length) return;
  const copy = [...state.stages];
  const [stage] = copy.splice(fromIndex, 1);
  copy.splice(toIndex, 0, stage);
  state.stages = copy;
  renderEstimate();
}

function saveEstimate() {
  const saves = JSON.parse(localStorage.getItem("designkit.estimates") || "[]");
  saves.unshift({
    id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()),
    createdAt: new Date().toISOString(),
    estimateName: getEstimateName(),
    project: getProject().label,
    rateMode: state.rateMode,
    marketGrade: state.marketGrade,
    rate: state.rate,
    modifiers: [...state.mods],
    taxMode: state.taxMode,
    clientType: state.clientType,
    taxRate: getTaxRate(),
    taxAmount: getTaxAmount(),
    stages: state.stages,
    expenses: state.expenses,
    total: getTotal(),
  });
  localStorage.setItem("designkit.estimates", JSON.stringify(saves.slice(0, 12)));
  flashButton('[data-action="save-estimate"]', "Сохранено");
}

function openProfileModal() {
  const modal = document.querySelector("[data-profile-modal]");
  const p = state.profile;
  modal.querySelectorAll("[data-profile]").forEach(input => {
    input.value = p[input.dataset.profile] || "";
  });
  const consent = modal.querySelector("[data-profile-consent]");
  if (consent) {
    consent.checked = p.personalDataConsentVersion === PROFILE_CONSENT_VERSION;
    consent.closest(".modal__consent")?.style.removeProperty("color");
  }
  modal.showModal();
}

function saveProfile() {
  const modal = document.querySelector("[data-profile-modal]");
  const consent = modal.querySelector("[data-profile-consent]");
  if (consent && !consent.checked) {
    consent.closest(".modal__consent").style.color = "var(--accent)";
    consent.focus();
    return;
  }
  modal.querySelectorAll("[data-profile]").forEach(input => {
    const val = input.value.trim();
    if (val) state.profile[input.dataset.profile] = val;
    else delete state.profile[input.dataset.profile];
  });
  state.profile.personalDataConsentVersion = PROFILE_CONSENT_VERSION;
  state.profile.personalDataConsentAcceptedAt = new Date().toISOString();
  localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(state.profile));
  renderGreeting();
  if (state.view === "contract") {
    applyContractAutoDefaults({ force: true });
    renderContractWorkspace();
    scheduleContractSave();
  }
  modal.close();
  trackMetrikaGoal("profile_saved");
}

function bindProfileModalBackdropClose() {
  const modal = document.querySelector("[data-profile-modal]");
  if (!modal) return;
  modal.addEventListener("click", (event) => {
    if (event.target === modal) modal.close();
  });
}

function renderGreeting() {
  const el = document.querySelector("[data-home-greeting]");
  if (!el) return;
  const name = state.profile.designerName?.trim();
  const firstName = name ? name.split(" ")[0] : "";
  el.innerHTML = firstName
    ? `Привет, <em>${escapeHtml(firstName)}!</em><br>С чего начнем работу?`
    : `Привет!<br>С чего начнем работу?`;
}

function hasCookieConsent() {
  try {
    return localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY) === "accepted";
  } catch (error) {
    return false;
  }
}

function initYandexMetrika(force = false) {
  if (!force && !hasCookieConsent()) return;
  if (window.__desidocMetrikaLoaded) return;
  window.__desidocMetrikaLoaded = true;
  window.ym = window.ym || function ymStub() {
    (window.ym.a = window.ym.a || []).push(arguments);
  };
  window.ym.l = window.ym.l || Date.now();
  if (!document.querySelector(`script[src="${YANDEX_METRIKA_SCRIPT_URL}"]`)) {
    const script = document.createElement("script");
    script.async = true;
    script.src = YANDEX_METRIKA_SCRIPT_URL;
    document.head.appendChild(script);
  }
  window.ym(YANDEX_METRIKA_ID, "init", {
    ssr: true,
    webvisor: false,
    clickmap: false,
    referrer: document.referrer,
    url: location.href,
    accurateTrackBounce: true,
    trackLinks: false,
  });
}

function initCookieBanner() {
  const banner = document.querySelector("[data-cookie-banner]");
  if (!banner) return;
  if (hasCookieConsent()) {
    initYandexMetrika();
    return;
  }
  banner.hidden = false;
  requestAnimationFrame(() => banner.classList.add("is-visible"));
}

function acceptCookies() {
  const banner = document.querySelector("[data-cookie-banner]");
  try {
    localStorage.setItem(COOKIE_CONSENT_STORAGE_KEY, "accepted");
  } catch (error) {}
  initYandexMetrika(true);
  if (banner) {
    banner.classList.remove("is-visible");
    setTimeout(() => { banner.hidden = true; }, 220);
  }
}

let feedbackPromptCloseHandled = false;

function trackMetrikaGoal(goal) {
  if (window.__desidocMetrikaLoaded && typeof window.ym === "function") {
    window.ym(YANDEX_METRIKA_ID, "reachGoal", goal);
  }
}

function getFeedbackSnoozedUntilTime() {
  const value = localStorage.getItem(FEEDBACK_SNOOZED_UNTIL_KEY);
  if (!value) return 0;
  const numericValue = Number(value);
  if (Number.isFinite(numericValue) && numericValue > 0) return numericValue;
  const dateValue = Date.parse(value);
  return Number.isFinite(dateValue) ? dateValue : 0;
}

function canShowFeedbackPrompt() {
  if (localStorage.getItem(FEEDBACK_COMPLETED_KEY)) return false;
  const snoozedUntil = getFeedbackSnoozedUntilTime();
  return !snoozedUntil || snoozedUntil <= Date.now();
}

function showFeedbackPrompt() {
  const modal = document.querySelector("[data-feedback-modal]");
  if (!modal || modal.open || !canShowFeedbackPrompt()) return;
  feedbackPromptCloseHandled = false;
  modal.showModal();
  trackMetrikaGoal("feedback_prompt_shown");
}

function notifyPdfDownloadSuccess(goal) {
  if (goal) trackMetrikaGoal(goal);
  setTimeout(showFeedbackPrompt, 220);
}

function notifyPdfDownloadFailure(message) {
  const safeMessage = message || "Не удалось безопасно собрать PDF. Попробуйте сократить документ или повторить экспорт позже.";
  console.error(safeMessage);
  window.alert(safeMessage);
}

function startFeedbackSurvey() {
  const modal = document.querySelector("[data-feedback-modal]");
  feedbackPromptCloseHandled = true;
  localStorage.setItem(FEEDBACK_COMPLETED_KEY, "true");
  localStorage.removeItem(FEEDBACK_SNOOZED_UNTIL_KEY);
  trackMetrikaGoal("feedback_started");
  window.open(FEEDBACK_FORM_URL, "_blank", "noopener");
  modal?.close();
}

function snoozeFeedbackPrompt({ closeModal = true } = {}) {
  const modal = document.querySelector("[data-feedback-modal]");
  if (localStorage.getItem(FEEDBACK_COMPLETED_KEY)) return;
  feedbackPromptCloseHandled = true;
  localStorage.setItem(FEEDBACK_SNOOZED_UNTIL_KEY, new Date(Date.now() + FEEDBACK_SNOOZE_DELAY).toISOString());
  trackMetrikaGoal("feedback_snoozed");
  if (closeModal) modal?.close();
}

function bindFeedbackPromptModal() {
  const modal = document.querySelector("[data-feedback-modal]");
  if (!modal) return;
  modal.addEventListener("cancel", (event) => {
    event.preventDefault();
    snoozeFeedbackPrompt();
  });
  modal.addEventListener("close", () => {
    if (feedbackPromptCloseHandled) {
      feedbackPromptCloseHandled = false;
      return;
    }
    snoozeFeedbackPrompt({ closeModal: false });
    feedbackPromptCloseHandled = false;
  });
}

let metrikaPrivacyObserver = null;

const METRIKA_PRIVATE_FIELD_SELECTOR = [
  "input",
  "textarea",
  "[contenteditable=\"true\"]",
].join(",");

const METRIKA_PRIVATE_CONTENT_SELECTOR = [
  "[data-print-sheet]",
  ".document-canvas",
  ".document-page",
  ".contract-clause__body",
  ".inline-field",
  ".inline-field--block",
  ".signature-image",
  ".contract-signature-img",
].join(",");

function applyMetrikaPrivacyGuards(root = document) {
  const addClassIfMatch = (selector, className) => {
    if (root.matches?.(selector)) root.classList.add(className);
    root.querySelectorAll?.(selector).forEach((node) => node.classList.add(className));
  };
  addClassIfMatch(METRIKA_PRIVATE_FIELD_SELECTOR, "ym-disable-keys");
  addClassIfMatch(METRIKA_PRIVATE_CONTENT_SELECTOR, "ym-hide-content");
}

function initMetrikaPrivacyGuards() {
  applyMetrikaPrivacyGuards();
  if (metrikaPrivacyObserver || !window.MutationObserver || !document.body) return;
  metrikaPrivacyObserver = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        if (node.nodeType === Node.ELEMENT_NODE) applyMetrikaPrivacyGuards(node);
      });
    });
  });
  metrikaPrivacyObserver.observe(document.body, { childList: true, subtree: true });
}

function openExport(force = false) {
  const hasProfile = !!state.profile.designerName;
  syncExportInputs();
  if (hasProfile && !force) {
    // Данные уже есть — скачиваем сразу
    printEstimate();
    return;
  }
  const modal = document.querySelector("[data-export-modal]");
  renderExportOptions();
  modal.showModal();
}

function renderExportOptions() {
  const urgent = document.querySelector('[data-action="toggle-export-urgent"]');
  if (urgent) {
    const isActive = state.mods.has("urgent");
    urgent.classList.toggle("is-active", isActive);
    urgent.setAttribute("aria-pressed", String(isActive));
  }
  const hours = document.querySelector("[data-export-hours-toggle]");
  if (hours) {
    hours.checked = !state.exportShowHours;
  }
  const branding = document.querySelector("[data-export-branding-toggle]");
  if (branding) {
    branding.checked = state.exportHideBranding;
  }
}

function getPdfRenderScale() {
  return Math.min(4, Math.max(3, window.devicePixelRatio || 1));
}

const MAX_RASTER_FALLBACK_PAGES = 40;

const PDF_LAYOUT_RULES = {
  estimate: {
    bottomSafePx: 26,
  },
  contract: {
    bottomSafePt: 24,
    widowLines: 2,
    orphanLines: 2,
    keepLeadLines: 2,
    keepWholeParagraphLines: 5,
    sectionLeadGap: 28,
  },
  addendum: {
    bottomSafePt: 32,
    widowLines: 2,
    orphanLines: 2,
    keepLeadLines: 3,
    keepWholeParagraphLines: 7,
    sectionLeadGap: 34,
  },
};

function saveTallPngAsPdf(dataUrl, { jsPDF, filename, margin = PDF_PAGE_MARGIN_MM, onDone, onError }) {
  const image = new Image();
  image.onload = () => {
    const pdf = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    const contentWidth = pageWidth - margin.left - margin.right;
    const contentHeight = pageHeight - margin.top - margin.bottom;
    const renderedImageHeight = (image.naturalHeight * contentWidth) / image.naturalWidth;
    if (!Number.isFinite(renderedImageHeight) || renderedImageHeight <= 0 || !Number.isFinite(contentHeight) || contentHeight <= 0) {
      if (onError) onError(new Error("PDF raster fallback received invalid image dimensions."));
      return;
    }

    const estimatedPages = Math.ceil(renderedImageHeight / contentHeight);
    if (estimatedPages > MAX_RASTER_FALLBACK_PAGES) {
      if (onError) {
        onError(new Error(`PDF raster fallback aborted: estimated ${estimatedPages} pages exceeds safe limit ${MAX_RASTER_FALLBACK_PAGES}.`));
      }
      return;
    }

    let consumedHeight = 0;
    while (consumedHeight < renderedImageHeight - 0.2) {
      if (consumedHeight > 0) pdf.addPage();
      pdf.addImage(dataUrl, "PNG", margin.left, margin.top - consumedHeight, contentWidth, renderedImageHeight);
      consumedHeight += contentHeight;
    }

    pdf.save(filename);
    if (onDone) onDone();
  };
  image.onerror = () => {
    if (onError) onError();
  };
  image.src = dataUrl;
}

/* ============================================================
   Векторный (текстовый) PDF — выделяемый текст, без пикселей
   при зуме. Шрифт PT Sans (кириллица) подгружается по требованию.
   ============================================================ */

const PDF_FONT_URLS = {
  normal: "assets/fonts/onest/Onest-Regular.ttf",
  bold: "assets/fonts/onest/Onest-SemiBold.ttf",
};
let _pdfFontCache = null;

function arrayBufferToBase64(buffer) {
  let binary = "";
  const bytes = new Uint8Array(buffer);
  const chunk = 0x8000;
  for (let i = 0; i < bytes.length; i += chunk) {
    binary += String.fromCharCode.apply(null, bytes.subarray(i, i + chunk));
  }
  return btoa(binary);
}

function loadPdfFonts() {
  if (_pdfFontCache) return Promise.resolve(_pdfFontCache);
  const fetchB64 = (url) => fetch(url).then((r) => {
    if (!r.ok) throw new Error("font fetch failed: " + url);
    return r.arrayBuffer();
  }).then(arrayBufferToBase64);
  return Promise.all([fetchB64(PDF_FONT_URLS.normal), fetchB64(PDF_FONT_URLS.bold)])
    .then(([normal, bold]) => { _pdfFontCache = { normal, bold }; return _pdfFontCache; });
}

function registerPdfFonts(doc, fonts) {
  doc.addFileToVFS("Onest-Regular.ttf", fonts.normal);
  doc.addFont("Onest-Regular.ttf", "Onest", "normal");
  doc.addFileToVFS("Onest-Bold.ttf", fonts.bold);
  doc.addFont("Onest-Bold.ttf", "Onest", "bold");
  doc.setFont("Onest", "normal");
}

// Заменяем экзотические пробелы/дефисы, которых нет в сабсете шрифта
function pdfText(value) {
  return String(value == null ? "" : value)
    .replace(/[    ⁠]/g, " ")
    .replace(/[‑]/g, "-");
}

const PDF_INLINE_TAGS = new Set(["SPAN", "STRONG", "B", "EM", "I", "A", "BR", "SUP", "SUB", "SMALL", "U", "MARK", "CODE", "LABEL", "TIME"]);

function pdfBlockStyle(el) {
  const cls = el.classList;
  if (cls.contains("document-title") || el.tagName === "H1") return "title";
  if (el.tagName === "H2") return "h2";
  if (cls.contains("clause-title") || el.tagName === "H3" || el.tagName === "H4") return "h3";
  if (cls.contains("document-meta") || cls.contains("sign-line") || cls.contains("pdf-meta-label") || cls.contains("pdf-doc-label")) return "label";
  return "body";
}

function collectPdfBlocks(root) {
  const blocks = [];
  const hasBlockChild = (el) => Array.from(el.children).some((c) => !PDF_INLINE_TAGS.has(c.tagName));
  const walk = (el) => {
    if (el.nodeType !== 1) return;
    if (el.getClientRects && getComputedStyle(el).display === "none") return;
    if (el.tagName === "IMG" || el.tagName === "CANVAS") { blocks.push({ type: "img", el }); return; }
    if (el.classList.contains("signature-slot")) { Array.from(el.children).forEach(walk); return; }
    if (hasBlockChild(el)) { Array.from(el.children).forEach(walk); return; }
    const text = (el.textContent || "").replace(/\s+/g, " ").trim();
    if (text) blocks.push({ type: pdfBlockStyle(el), text });
  };
  walk(root);
  return blocks;
}

const PDF_BLOCK_STYLES = {
  title: { size: 17, font: "bold", lh: 1.25, before: 0, after: 16, align: "center", color: [17, 17, 17] },
  h2: { size: 12.5, font: "bold", lh: 1.3, before: 17, after: 6, color: [20, 20, 20] },
  h3: { size: 10.5, font: "bold", lh: 1.3, before: 10, after: 3, color: [28, 28, 28] },
  body: { size: 10, font: "normal", lh: 1.42, before: 0, after: 7, color: [34, 34, 34] },
  label: { size: 8.6, font: "normal", lh: 1.3, before: 0, after: 5, color: [140, 140, 140] },
};

function renderPdfFromBlocks(blocks, { jsPDF, fonts, filename, onDone }) {
  const doc = new jsPDF({ orientation: "portrait", unit: "pt", format: "a4" });
  registerPdfFonts(doc, fonts);
  const pageW = doc.internal.pageSize.getWidth();
  const pageH = doc.internal.pageSize.getHeight();
  const M = { l: 56, r: 56, t: 58, b: 58 };
  const cw = pageW - M.l - M.r;
  let y = M.t;
  const newPage = (need) => { if (y + need > pageH - M.b) { doc.addPage(); y = M.t; } };

  blocks.forEach((b) => {
    if (b.type === "img") {
      try {
        const src = b.el.tagName === "CANVAS" ? b.el.toDataURL("image/png") : b.el.src;
        const natW = b.el.naturalWidth || b.el.width || 160;
        const natH = b.el.naturalHeight || b.el.height || 60;
        let w = Math.min(150, cw * 0.42);
        let h = w * (natH / natW);
        if (h > 70) { h = 70; w = h * (natW / natH); }
        newPage(h + 6);
        doc.addImage(src, "PNG", M.l, y, w, h);
        y += h + 8;
      } catch (e) { /* skip broken image */ }
      return;
    }
    const st = PDF_BLOCK_STYLES[b.type] || PDF_BLOCK_STYLES.body;
    y += st.before;
    doc.setFont("Onest", st.font);
    doc.setFontSize(st.size);
    doc.setTextColor(st.color[0], st.color[1], st.color[2]);
    const lineH = st.size * st.lh;
    doc.splitTextToSize(pdfText(b.text), cw).forEach((line) => {
      newPage(lineH);
      if (st.align === "center") doc.text(line, pageW / 2, y + st.size * 0.82, { align: "center" });
      else doc.text(line, M.l, y + st.size * 0.82);
      y += lineH;
    });
    y += st.after;
  });

  doc.save(filename);
  if (onDone) onDone();
}

// Векторная (текстовая) смета в том же «швейцарском» дизайне, что и растровая.
// Координаты заданы в px макета (ширина листа 794px) и масштабируются в pt листа A4.
function renderEstimatePdf({ jsPDF, fonts, filename, title, number, projectName, total, kicker, meta, rows, summary, footer, chip, showHours = true, onDone }) {
  const doc = new jsPDF({ orientation: "portrait", unit: "pt", format: "a4" });
  registerPdfFonts(doc, fonts);
  const rules = PDF_LAYOUT_RULES.estimate;
  const pageWpt = doc.internal.pageSize.getWidth();
  const SHEET_W = 794, SHEET_H = 1123;
  const k = pageWpt / SHEET_W;             // px → pt
  const BLACK = [5, 5, 5], GRAY = [139, 139, 139];
  const padX = 32, contentR = SHEET_W - padX;     // 32 … 762

  let y = 0; // курсор в px макета
  let curCharSpace = 0; // текущий charSpace в pt — нужен для ручного выравнивания
  const pageTop = 40;
  const pageBottom = SHEET_H - 56 - rules.bottomSafePx;

  const font = (px, weight) => { doc.setFont("Onest", weight === "bold" ? "bold" : "normal"); doc.setFontSize(px * k); };
  const color = (c) => doc.setTextColor(c[0], c[1], c[2]);
  const space = (emPx) => { curCharSpace = (emPx || 0) * k; doc.setCharSpace(curCharSpace); };
  // jsPDF считает ширину для align:"right"/"center" без учёта charSpace, поэтому у чисел
  // с трекингом остаётся зазор у правого края. Выравниваем вручную с поправкой на charSpace.
  const T = (s, xpx, ypx, align) => {
    const str = pdfText(s);
    if (align === "right" || align === "center") {
      doc.setCharSpace(0);
      const w = doc.getTextWidth(str) + curCharSpace * Math.max(str.length - 1, 0);
      doc.setCharSpace(curCharSpace);
      doc.text(str, xpx * k - (align === "center" ? w / 2 : w), ypx * k);
    } else {
      doc.text(str, xpx * k, ypx * k);
    }
  };
  const rule = (x1, x2, ypx, wpx, c) => { doc.setDrawColor((c || BLACK)[0], (c || BLACK)[1], (c || BLACK)[2]); doc.setLineWidth(wpx * k); doc.line(x1 * k, ypx * k, x2 * k, ypx * k); };
  const wrap = (s, wpx, px, weight) => { font(px, weight); return doc.splitTextToSize(pdfText(s), wpx * k).map((l) => l); };
  const startNewPage = () => { doc.addPage(); y = pageTop; };
  const ensure = (need) => {
    if (y + need > pageBottom) {
      startNewPage();
      return true;
    }
    return false;
  };

  // ── Верхняя линия + герой ─────────────────────────────────
  rule(padX, contentR, 28, 2);
  y = 50;
  font(10, "normal"); color(BLACK); space(0.8); T(kicker || "DesiDoc / Estimate", padX, y + 10); space(0);
  font(22, "bold"); color(BLACK); space(-0.9); T(number, contentR, y + 18, "right"); space(0);
  font(100, "bold"); color(BLACK); space(-10.5); T(title, padX - 4, y + 14 + 78); space(0);
  y = y + 14 + 86 + 30;   // конец героя + margin

  // ── Проект + Итого ────────────────────────────────────────
  const introTop = y;
  font(10, "normal"); color(BLACK); space(0.8); T("ПРОЕКТ", padX, introTop + 9); space(0);
  const projLines = wrap(projectName, 460, 30, "bold");
  font(30, "bold"); color(BLACK); space(-1.95);
  let py = introTop + 9 + 14;
  projLines.forEach((l) => { T(l, padX, py + 23); py += 29.4; });
  space(0);
  const projBottom = py;
  // Итого (справа, выровнено по низу блока проекта)
  font(10, "normal"); color(GRAY); space(0.8); T("ИТОГО", contentR, projBottom - 30 - 8, "right"); space(0);
  font(30, "bold"); color(BLACK); space(-2.25); T(total, contentR, projBottom - 2, "right"); space(0);
  const introBottom = projBottom + 16;
  rule(padX, contentR, introBottom, 1.5);
  y = introBottom + 24;

  // ── Мета (Исполнитель / Дата / Ставка) ────────────────────
  const metaTop = y;
  const cW = (contentR - padX), c1 = padX, c2 = padX + cW * (1.45 / 3.45), c3 = padX + cW * (2.45 / 3.45);
  [[c1, meta[0]], [c2, meta[1]], [c3, meta[2]]].forEach(([x, m]) => {
    if (!m) return;
    font(10, "normal"); color(BLACK); space(0.8); T((m.label || "").toUpperCase(), x, metaTop + 9); space(0);
    font(14, "bold"); color(BLACK); space(-0.6); T(m.value, x, metaTop + 9 + 9 + 11); space(0);
    if (m.note) { font(10, "normal"); color(GRAY); T(m.note, x, metaTop + 9 + 9 + 11 + 5 + 9); }
  });
  const metaBottom = metaTop + 9 + 9 + 11 + 5 + 9 + 14;
  y = metaBottom + 28;

  // ── Таблица ───────────────────────────────────────────────
  const numX = padX, descX = padX + 58;
  const costRX = contentR;
  const costColLeft = showHours ? contentR - 160.6 : contentR - 128;
  const hoursRX = costColLeft - 6;
  const descW = costColLeft - descX - 12;
  const drawTableHead = () => {
    rule(padX, contentR, y, 1.5);
    font(10, "normal"); color(BLACK); space(0.8);
    T("№", numX, y + 9 + 8); T("ОПИСАНИЕ", descX, y + 9 + 8);
    if (showHours) T("ЧАСЫ", hoursRX, y + 9 + 8, "right");
    T("СУММА", costRX, y + 9 + 8, "right");
    space(0);
    y = y + 9 + 8 + 9;
    rule(padX, contentR, y, 1.5);
  };
  drawTableHead();

  rows.forEach((row) => {
    const nameLines = wrap(row.name, descW, 14, "bold");
    const descLines = row.desc ? wrap(row.desc, Math.min(descW, 380), 10.5, "normal") : [];
    const rowH = 9 + nameLines.length * 14.7 + (descLines.length ? 4 + descLines.length * 13.4 : 0) + 10;
    if (ensure(rowH + 2)) drawTableHead();
    const top = y + 9; // td padding-top
    font(11, "normal"); color(BLACK); T(row.idx, numX, top + 9);
    font(14, "bold"); color(BLACK); space(-0.6);
    if (showHours) T(row.hours, hoursRX, top + 11, "right");
    T(row.cost, costRX, top + 11, "right"); space(0);
    let ly = top;
    font(14, "bold"); color(BLACK); space(-0.6);
    nameLines.forEach((l) => { T(l, descX, ly + 11); ly += 14.7; }); space(0);
    if (descLines.length) { ly += 4; font(10.5, "normal"); color(GRAY); descLines.forEach((l) => { T(l, descX, ly + 8); ly += 13.4; }); }
    y = top + (rowH - 9);
    rule(padX, contentR, y, 1);
  });

  // ── Итоги (справа, ширина 282px) ──────────────────────────
  const footerWidth = chip ? 470 : contentR - padX;
  const footerLines = wrap(footer, footerWidth, 10, "normal");
  const footerHeight = 12 + footerLines.length * 13 + (chip ? 24 : 0) + 8;
  const summaryHeight = summary.reduce((acc, item) => acc + (item.total ? 42 : 26), 0) + 24;
  ensure(46 + summaryHeight + 48 + footerHeight);
  y += 46;
  const sumL = contentR - 282;
  rule(sumL, contentR, y, 1.5);
  summary.forEach((s) => {
    if (s.total) {
      const baseline = y + 30;
      font(13, "normal"); color(BLACK); space(0.78); T("ВСЕГО", sumL, baseline - 6); space(0);
      font(24, "bold"); color(BLACK); space(-1.56); T(s.value, contentR, baseline, "right"); space(0);
      y = baseline + 12;
      rule(sumL, contentR, y, 1.5);
    } else {
      const baseline = y + 18;
      font(12, "normal"); color(BLACK); space(-0.3); T(s.label, sumL, baseline); T(s.value, contentR, baseline, "right"); space(0);
      y = baseline + 8;
      rule(sumL, contentR, y, 1);
    }
  });

  // ── Подвал ────────────────────────────────────────────────
  y += 48;
  ensure(footerHeight);
  rule(padX, contentR, y, 1.5);
  y += 12;
  font(10, "normal"); color(GRAY); space(0);
  let fy = y;
  footerLines.forEach((l) => { T(l, padX, fy + 8); fy += 13; });
  if (chip) {
    const label = pdfText(chip).toUpperCase();
    font(9, "bold"); space(0.54);
    const tw = doc.getTextWidth(label) / k;       // px
    const chipW = tw + 18, chipH = 22, chipX = contentR - chipW, chipY = y - 4;
    doc.setDrawColor(5, 5, 5); doc.setLineWidth(1 * k);
    doc.roundedRect(chipX * k, chipY * k, chipW * k, chipH * k, 11 * k, 11 * k);
    color(BLACK); T(label, chipX + 9, chipY + 15); space(0);
  }

  doc.save(filename);
  if (onDone) onDone();
}

// Векторный договор/допсоглашение: два столбца — слева пункт (номер + название),
// справа текст. Правила пагинации выбираются по типу документа.
function renderContractPdf(root, { jsPDF, fonts, filename, docType = "contract", onDone }) {
  const doc = new jsPDF({ orientation: "portrait", unit: "pt", format: "a4" });
  registerPdfFonts(doc, fonts);
  const rules = PDF_LAYOUT_RULES[docType] || PDF_LAYOUT_RULES.contract;
  const pageW = doc.internal.pageSize.getWidth();
  const pageH = doc.internal.pageSize.getHeight();
  const M = { l: 54, r: 54, t: 54, b: 68 };
  const leftW = 132, gap = 16, rightX = M.l + leftW + gap, rightW = pageW - M.r - rightX;
  const pageBottom = pageH - M.b - rules.bottomSafePt, maxBlock = pageBottom - M.t;
  const BLACK = [17, 17, 17], GRAY = [140, 140, 140];
  let y = M.t;

  const setF = (px, weight, c) => { doc.setFont("Onest", weight === "bold" ? "bold" : "normal"); doc.setFontSize(px); if (c) doc.setTextColor(c[0], c[1], c[2]); };
  const txt = (s) => pdfText((s || "").replace(/\s+/g, " ").trim());
  const startNewPage = () => {
    doc.addPage();
    y = M.t;
  };
  const ensureSpace = (need) => {
    if (y + need > pageBottom && need <= maxBlock) {
      startNewPage();
      return true;
    }
    return false;
  };
  const drawLines = (lines, x, lh, widowOrphan) => {
    if (!widowOrphan) {
      lines.forEach((line) => {
        if (y + lh > pageBottom) startNewPage();
        y += lh;
        doc.text(line, x, y);
      });
      return;
    }
    // Контроль «висячих» строк: не оставлять и не переносить меньше заданного минимума строк.
    const widowMin = rules.widowLines || 2;
    const orphanMin = rules.orphanLines || widowMin;
    let i = 0;
    while (i < lines.length) {
      let fit = Math.floor((pageBottom - y) / lh);
      if (fit < 1) { startNewPage(); fit = Math.floor((pageBottom - y) / lh); }
      const rem = lines.length - i;
      let take = Math.min(fit, rem);
      if (rem - take > 0 && rem - take < widowMin) take = Math.max(1, rem - widowMin);
      if (i === 0 && rem > orphanMin && take < orphanMin) { startNewPage(); continue; }
      for (let k = 0; k < take; k++) { y += lh; doc.text(lines[i + k], x, y); }
      i += take;
      if (i < lines.length) startNewPage();
    }
  };
  const getTextSpec = (type, isClauseTitle = false) => {
    if (isClauseTitle || type === "h3") return { size: 9.8, font: "bold", lh: 12.6, color: BLACK, after: 2 };
    if (type === "label") return { size: 8.6, font: "normal", lh: 11.4, color: GRAY, after: 4 };
    return { size: 9.5, font: "normal", lh: 13.4, color: BLACK, after: 5 };
  };
  const prepareImage = (el, maxW = rightW) => {
    const natW = el.naturalWidth || el.width || 160;
    const natH = el.naturalHeight || el.height || 60;
    let width = Math.min(150, maxW);
    let height = width * (natH / natW);
    if (height > 64) {
      height = 64;
      width = height * (natW / natH);
    }
    return { width, height, total: height + 8 };
  };

  // — Заголовок —
  const titleEl = root.querySelector(".document-title");
  if (titleEl) {
    setF(17, "bold", BLACK);
    const titlePartNodes = titleEl.querySelectorAll(".document-title__kind, .document-title__rest, .document-title__date");
    const titleParts = titlePartNodes.length
      ? Array.from(titlePartNodes).map((node) => txt(node.textContent)).filter(Boolean)
      : [txt(titleEl.textContent)];
    titleParts.forEach((part, partIndex) => {
      const lines = doc.splitTextToSize(part, pageW - M.l - M.r);
      lines.forEach((line) => {
        if (y + 22 > pageBottom) startNewPage();
        y += 22;
        doc.text(line, pageW / 2, y, { align: "center" });
      });
      if (partIndex === 0 && titleParts.length > 1) y += 1;
    });
  }
  const metaEl = root.querySelector(".document-meta");
  if (metaEl) {
    const metaItems = Array.from(metaEl.children).map((node) => txt(node.textContent)).filter(Boolean);
    setF(9, "normal", GRAY);
    y += 18;
    if (metaItems.length >= 2) {
      doc.text(metaItems[0], M.l, y);
      doc.text(metaItems[1], pageW - M.r, y, { align: "right" });
    } else {
      doc.text(txt(metaEl.textContent), M.l, y);
    }
  }
  y += 16;

  // — Секции: слева h2, справа пункты —
  const colGap = 16;
  const reqColW = (rightW - colGap) / 2;
  const buildBlocks = (container, width) => collectPdfBlocks(container).map((block) => {
    if (block.type === "img") return { kind: "img", el: block.el, ...prepareImage(block.el, width) };
    const spec = getTextSpec(block.type);
    setF(spec.size, spec.font);
    const lines = doc.splitTextToSize(pdfText(block.text), width);
    const isSignature = block.type === "label" && /^подпись$/i.test(pdfText(block.text).trim());
    return {
      kind: isSignature ? "signature" : "text",
      lines,
      spec,
      total: isSignature ? 26 : lines.length * spec.lh + spec.after,
    };
  });

  root.querySelectorAll(".document-section").forEach((sec) => {
    const h2 = sec.querySelector("h2");
    setF(11, "bold");
    const leftTitleLines = doc.splitTextToSize(txt(h2 ? h2.textContent : ""), leftW);
    const clauses = Array.from(sec.querySelectorAll(".contract-clause")).map((clause) => {
      const clauseTitle = clause.querySelector(".clause-title");
      const clauseTitleText = clauseTitle ? txt(clauseTitle.textContent).replace(/^(\d+\.\d+)(?=\S)/, "$1 ") : "";
      setF(9.8, "bold");
      const clauseTitleLines = clauseTitleText ? doc.splitTextToSize(clauseTitleText, rightW) : [];
      const body = clause.querySelector(".contract-clause__body") || clause;

      // Реквизиты и подписи — две колонки (Заказчик слева, Исполнитель справа)
      const grid = body.querySelector(".requisites-grid");
      let columns = null, blocks = null;
      if (grid) {
        columns = Array.from(grid.querySelectorAll(".requisite-card")).map((card) => {
          const colBlocks = buildBlocks(card, reqColW);
          if (colBlocks[0] && colBlocks[0].kind === "text") {
            colBlocks[0] = { ...colBlocks[0], spec: { ...colBlocks[0].spec, font: "bold" } };
          }
          const signatureLineIndex = colBlocks.findIndex((block) => block.kind === "signature");
          const signatureStartIndex = signatureLineIndex > 0 && colBlocks[signatureLineIndex - 1].kind === "img"
            ? signatureLineIndex - 1
            : signatureLineIndex;
          const signatureHeight = signatureStartIndex >= 0
            ? colBlocks.slice(signatureStartIndex).reduce((acc, block) => acc + block.total, 0)
            : 0;
          const preSignatureHeight = signatureStartIndex >= 0
            ? colBlocks.slice(0, signatureStartIndex).reduce((acc, block) => acc + block.total, 0)
            : 0;
          const rawHeight = colBlocks.reduce((a, b) => a + b.total, 0);
          const signatureReserve = signatureStartIndex >= 0 ? 86 : 0;
          return {
            blocks: colBlocks,
            height: Math.max(rawHeight, preSignatureHeight + signatureReserve),
            signatureStartIndex,
            signatureHeight,
          };
        });
      } else {
        blocks = buildBlocks(body, rightW);
      }

      const firstBlock = blocks ? blocks[0] : null;
      // Держим вместе только заголовок пункта и пару первых строк (без больших пустот)
      const columnsTopGap = columns ? 18 : 0;
      const firstKeep = firstBlock
        ? (firstBlock.kind === "img"
          ? firstBlock.total
          : Math.min(Math.max(rules.keepLeadLines + 1, rules.orphanLines || 2), firstBlock.lines.length) * firstBlock.spec.lh + firstBlock.spec.after)
        : (columns ? 44 : 0);
      const titleHeight = clauseTitleLines.length ? clauseTitleLines.length * 12.6 + 2 : 0;
      const firstBodyHeight = columns
        ? Math.max(...columns.map((column) => column.height))
        : (firstBlock
          ? (firstBlock.kind === "img"
            ? firstBlock.total + 10
            : (firstBlock.lines.length <= rules.keepWholeParagraphLines
              ? firstBlock.total + 6
              : firstKeep + 6))
          : 0);
      const leadHeight = titleHeight + columnsTopGap + firstKeep + 8;
      return { clauseTitleLines, blocks, columns, columnsTopGap, leadHeight, titleHeight, firstBodyHeight };
    });
    const firstClause = clauses[0];
    const sectionFrameHeight = 30;
    const firstClauseStartHeight = firstClause
      ? firstClause.titleHeight + firstClause.columnsTopGap + firstClause.firstBodyHeight + 12
      : 0;
    const sectionLeadHeight = sectionFrameHeight + Math.max(leftTitleLines.length * 13, firstClauseStartHeight);
    ensureSpace(sectionLeadHeight);
    y += 16;
    doc.setDrawColor(212, 212, 212); doc.setLineWidth(0.6); doc.line(M.l, y, pageW - M.r, y);
    y += 14;

    const top = y;
    setF(11, "bold", BLACK);
    let hy = top;
    leftTitleLines.forEach((line) => { hy += 13; doc.text(line, M.l, hy); });
    const leftBottom = hy;
    const headerPage = doc.getNumberOfPages();

    y = top;
    clauses.forEach((clause, clauseIndex) => {
      if (clauseIndex > 0) ensureSpace(clause.leadHeight);
      const clauseStartHeight = clause.titleHeight + clause.columnsTopGap + clause.firstBodyHeight + 12;
      if (clause.clauseTitleLines.length && y + clauseStartHeight > pageBottom && clauseStartHeight <= maxBlock) {
        startNewPage();
      }
      if (clause.clauseTitleLines.length) {
        setF(9.8, "bold", BLACK);
        drawLines(clause.clauseTitleLines, rightX, 12.6);
        y += 2;
      }

      if (clause.columns) {
        y += clause.columnsTopGap;
        const blockH = Math.max(...clause.columns.map((c) => c.height));
        if (y + blockH > pageBottom && blockH <= maxBlock) startNewPage();
        const startY = y;
        let maxY = startY;
        clause.columns.forEach((col, ci) => {
          const cx = rightX + ci * (reqColW + colGap);
          let cy = startY;
          const drawBlock = (block) => {
            if (block.kind === "img") {
              try {
                const src = block.el.tagName === "CANVAS" ? block.el.toDataURL("image/png") : block.el.src;
                doc.addImage(src, "PNG", cx, cy + 4, block.width, block.height);
              } catch (e) { /* пропускаем битую картинку */ }
              cy += block.total;
              return;
            }
            if (block.kind === "signature") {
              doc.setDrawColor(172, 172, 172);
              doc.setLineWidth(0.6);
              doc.line(cx, cy + 1, cx + Math.min(reqColW, 148), cy + 1);
              setF(block.spec.size, block.spec.font, block.spec.color);
              cy += block.spec.lh + 5;
              doc.text(block.lines[0] || "Подпись", cx, cy);
              cy += block.spec.after;
              return;
            }
            setF(block.spec.size, block.spec.font, block.spec.color);
            block.lines.forEach((line) => { cy += block.spec.lh; doc.text(line, cx, cy); });
            cy += block.spec.after;
          };
          if (col.signatureStartIndex >= 0) {
            col.blocks.slice(0, col.signatureStartIndex).forEach(drawBlock);
            cy = startY + blockH - col.signatureHeight;
            col.blocks.slice(col.signatureStartIndex).forEach(drawBlock);
          } else {
            col.blocks.forEach(drawBlock);
          }
          if (cy > maxY) maxY = cy;
        });
        y = maxY + 4;
        return;
      }

      clause.blocks.forEach((block, blockIndex) => {
        if (block.kind === "img") {
          const needed = blockIndex === 0 ? block.total + 10 : block.total;
          if (y + needed > pageBottom && needed <= maxBlock) startNewPage();
          try {
            const src = block.el.tagName === "CANVAS" ? block.el.toDataURL("image/png") : block.el.src;
            doc.addImage(src, "PNG", rightX, y + 4, block.width, block.height);
            y += block.total;
          } catch (e) { /* пропускаем битую картинку */ }
          return;
        }
        const spec = block.spec;
        const needed = blockIndex === 0 ? block.total + 6 : block.total;
        const keepWholeTextBlock = block.lines.length <= rules.keepWholeParagraphLines && needed <= maxBlock;
        if (y + needed > pageBottom && needed <= maxBlock) startNewPage();
        setF(spec.size, spec.font, spec.color);
        drawLines(block.lines, rightX, spec.lh, !keepWholeTextBlock);
        y += spec.after;
      });
      y += 4;
    });

    // Если пункты ушли на новую страницу, leftBottom относится к прошлой —
    // не учитываем его, иначе курсор прыгает вниз и плодит пустые страницы.
    y = (doc.getNumberOfPages() === headerPage ? Math.max(y, leftBottom) : y) + 10;
  });

  doc.save(filename);
  if (onDone) onDone();
}

function printEstimate() {
  if (!state.stages.length) {
    if (state.projectKey === "custom") {
      notifyPdfDownloadFailure("Добавьте хотя бы один этап проекта, чтобы скачать PDF сметы.");
      return;
    }
    state.rate = getActiveRate();
    state.stages = createStages(getProject(), getHoursLevel());
    state.generated = true;
    renderEstimate();
  }
  const designerName = document.querySelector('[data-input="designerName"]').value.trim() || "Дизайнер";
  const estimateName = normalizeEstimateName(document.querySelector('[data-input="estimateName"]').value, state.projectKey) || getDefaultEstimateName();
  const profileName = state.profile.contractorName || designerName;
  const profileContact = state.profile.contractorContact || "";
  state.profile = { ...state.profile, designerName };
  state.estimateMeta = { estimateName: estimateName === getDefaultEstimateName() ? "" : estimateName };
  localStorage.setItem("designkit.profile", JSON.stringify(state.profile));
  persistEstimateMeta();
  renderGreeting();
  if (state.generated) syncEstimateMetaInputs();

  const validUntil = new Date();
  validUntil.setDate(validUntil.getDate() + 14);
  const validUntilText = validUntil.toLocaleDateString("ru-RU", { day: "2-digit", month: "2-digit", year: "numeric" });
  const issuedAt = new Date();
  const todayShort = issuedAt.toLocaleDateString("ru-RU", { day: "2-digit", month: "2-digit", year: "numeric" });
  const estimateNumber = issuedAt.toISOString().slice(0, 10).replace(/-/g, "").slice(2);
  const estimateKicker = state.exportHideBranding
    ? "Предварительная оценка"
    : "DESIDOC / Предварительная оценка";
  const showHoursInPdf = state.exportShowHours;

  const rows = state.stages.map((stage, index) => `
    <tr>
      <td class="pdf-index">${String(index + 1).padStart(2, "0")}</td>
      <td><div class="pdf-stage-name">${escapeHtml(stage.title)}</div><div class="pdf-stage-desc">${escapeHtml(stage.description)}</div></td>
      ${showHoursInPdf ? `<td class="pdf-hours">${stage.hours}</td>` : ""}
      <td class="pdf-cost">${money(getStageCost(stage))}</td>
    </tr>
  `).join("");

  const expenses = state.expenses.map((expense, index) => `
    <tr>
      <td class="pdf-index">E${index + 1}</td>
      <td><div class="pdf-stage-name">${escapeHtml(expense.title)}</div><div class="pdf-stage-desc">Дополнительный расход</div></td>
      ${showHoursInPdf ? `<td class="pdf-hours">—</td>` : ""}
      <td class="pdf-cost">${money(expense.amount)}</td>
    </tr>
  `).join("");
  const urgencyRow = state.mods.has("urgent")
    ? `<tr><td class="pdf-index">U</td><td><div class="pdf-stage-name">Срочность +30%</div><div class="pdf-stage-desc">Финальная опция перед экспортом PDF</div></td>${showHoursInPdf ? `<td class="pdf-hours">—</td>` : ""}<td class="pdf-cost">${money(getUrgencyAmount())}</td></tr>`
    : "";
  const pdfRateMeta = showHoursInPdf
    ? `<div class="pdf-meta-item"><div class="pdf-meta-label">Ставка</div><div class="pdf-meta-value">${money(state.rate)} / час</div><div class="pdf-meta-note">${getTotalHours()} ч работы</div></div>`
    : `<div class="pdf-meta-item"><div class="pdf-meta-label">Формат</div><div class="pdf-meta-value">Стоимость по этапам</div></div>`;
  const activeMods = state.mods.has("urgent")
    ? `<span class="pdf-note-chip">Срочность +30%</span>`
    : "";

  document.querySelector("[data-print-sheet]").innerHTML = `
    <div class="pdf-page pdf-page--swiss">
      <header class="pdf-swiss-hero">
        <div>
          <div class="pdf-swiss-kicker">${estimateKicker}</div>
          <h1>СМЕТА</h1>
        </div>
        <div class="pdf-swiss-number">#${estimateNumber}</div>
      </header>

      <section class="pdf-swiss-intro">
        <div>
          <div class="pdf-doc-label">Проект</div>
          <div class="pdf-proj-name">${escapeHtml(estimateName)}</div>
        </div>
        <div class="pdf-swiss-total-card">
          <span>Итого</span>
          <strong>${money(getTotal())}</strong>
        </div>
      </section>

      <section class="pdf-meta">
        <div class="pdf-meta-item"><div class="pdf-meta-label">Исполнитель</div><div class="pdf-meta-value">${escapeHtml(profileName)}</div>${profileContact ? `<div class="pdf-meta-note">${escapeHtml(profileContact)}</div>` : ""}</div>
        <div class="pdf-meta-item"><div class="pdf-meta-label">Дата</div><div class="pdf-meta-value">${todayShort}</div><div class="pdf-meta-note">Актуальна до ${validUntilText}</div></div>
        ${pdfRateMeta}
      </section>

      <table class="pdf-table">
        <colgroup>
          <col style="width: 8%;">
          <col>
          ${showHoursInPdf ? `<col style="width: 12%;">` : ""}
          <col style="width: 22%;">
        </colgroup>
        <thead><tr><th>№</th><th>Описание</th>${showHoursInPdf ? `<th class="pdf-th-hours">Часы</th>` : ""}<th>Сумма</th></tr></thead>
        <tbody>
          ${rows}
          ${expenses}
          ${urgencyRow}
        </tbody>
      </table>

      <section class="pdf-swiss-bottom">
        <div class="pdf-summary">
          <div><span>Работы</span><strong>${money(getBaseStagesTotal())}</strong></div>
          ${state.mods.has("urgent") ? `<div><span>Срочность</span><strong>${money(getUrgencyAmount())}</strong></div>` : ""}
          ${state.expenses.length ? `<div><span>Расходы</span><strong>${money(getExpensesTotal())}</strong></div>` : ""}
          <div><span>Налог ${formatNumber.format(getTaxRate())}%</span><strong>${money(getTaxAmount())}</strong></div>
          <div class="pdf-summary-total"><span>Всего</span><strong>${money(getTotal())}</strong></div>
        </div>
      </section>

      <footer class="pdf-footer">
        <div>Оценка действует 14 дней. Итоговые сроки и состав работ фиксируются в договоре или допсоглашении.</div>
        <div>${activeMods}</div>
      </footer>
    </div>
  `;

  const exportModal = document.querySelector("[data-export-modal]");
  if (exportModal?.open) exportModal.close();

  const sheet = document.querySelector("[data-print-sheet]");
  sheet.setAttribute("aria-hidden", "false");
  sheet.style.cssText = "display:block;position:fixed;left:-9999px;top:0;width:794px;min-height:1123px;z-index:9999;background:#fff;overflow:visible;padding:0;";
  const page = sheet.querySelector(".pdf-page");

  const filename = generatePdfFileName({
    documentType: "estimate",
    projectName: estimateName,
    date: issuedAt,
  });

  if (!window.jspdf?.jsPDF || !page) { window.print(); sheet.style.cssText = ""; sheet.setAttribute("aria-hidden", "true"); return; }
  const { jsPDF } = window.jspdf;
  const cleanupSheet = () => { sheet.style.cssText = ""; sheet.setAttribute("aria-hidden", "true"); };

  const savePdf = (dataUrl) => {
    saveTallPngAsPdf(dataUrl, {
      jsPDF,
      filename,
      onDone: () => {
        cleanupSheet();
        notifyPdfDownloadSuccess("estimate_pdf_download");
      },
      onError: (err) => {
        cleanupSheet();
        console.warn("Estimate PDF fallback failed:", err);
        notifyPdfDownloadFailure("Не удалось безопасно собрать PDF сметы. Текстовый рендер недоступен, а запасной растровый вариант превысил безопасный лимит страниц.");
      },
    });
  };

  const rasterFallback = () => {
    if (window.htmlToImage) {
      window.htmlToImage.toPng(page, { pixelRatio: getPdfRenderScale(), backgroundColor: "#ffffff", cacheBust: true }).then(savePdf).catch(() => { window.print(); cleanupSheet(); });
      return;
    }
    if (window.html2canvas) {
      window.html2canvas(page, { scale: getPdfRenderScale(), useCORS: true, backgroundColor: "#ffffff", logging: false })
        .then((canvas) => savePdf(canvas.toDataURL("image/png"))).catch(() => { window.print(); cleanupSheet(); });
      return;
    }
    window.print();
    cleanupSheet();
  };

  // Структурированные данные для векторного (текстового) PDF
  const pdfRows = state.stages.map((stage, index) => ({
    idx: String(index + 1).padStart(2, "0"),
    name: stage.title,
    desc: stage.description,
    hours: String(stage.hours),
    cost: money(getStageCost(stage)),
  }));
  state.expenses.forEach((expense, index) => pdfRows.push({
    idx: "E" + (index + 1), name: expense.title, desc: "Дополнительный расход", hours: "—", cost: money(expense.amount),
  }));
  if (state.mods.has("urgent")) pdfRows.push({ idx: "U", name: "Срочность +30%", desc: "Финальная опция перед экспортом PDF", hours: "—", cost: money(getUrgencyAmount()) });

  const pdfSummary = [{ label: "Работы", value: money(getBaseStagesTotal()) }];
  if (state.mods.has("urgent")) pdfSummary.push({ label: "Срочность", value: money(getUrgencyAmount()) });
  if (state.expenses.length) pdfSummary.push({ label: "Расходы", value: money(getExpensesTotal()) });
  pdfSummary.push({ label: "Налог " + formatNumber.format(getTaxRate()) + "%", value: money(getTaxAmount()) });
  pdfSummary.push({ label: "Всего", value: money(getTotal()), total: true });

  loadPdfFonts().then((fonts) => {
    renderEstimatePdf({
      jsPDF, fonts, filename,
      title: "СМЕТА",
      number: "#" + estimateNumber,
      kicker: estimateKicker,
      projectName: estimateName,
      total: money(getTotal()),
      chip: state.mods.has("urgent") ? "Срочность +30%" : "",
      meta: [
        { label: "Исполнитель", value: profileName, note: profileContact || "" },
        { label: "Дата", value: todayShort, note: "Актуальна до " + validUntilText },
        showHoursInPdf
          ? { label: "Ставка", value: money(state.rate) + " / час", note: getTotalHours() + " ч работы" }
          : { label: "Формат", value: "Стоимость по этапам", note: "" },
      ],
      rows: pdfRows,
      summary: pdfSummary,
      footer: "Оценка действует 14 дней. Итоговые сроки и состав работ фиксируются в договоре или допсоглашении.",
      showHours: showHoursInPdf,
      onDone: () => { cleanupSheet(); notifyPdfDownloadSuccess("estimate_pdf_download"); },
    });
  }).catch((err) => { console.warn("Векторный PDF не удался, растровый запасной вариант:", err); rasterFallback(); });
}

function flashButton(selector, label) {
  const button = document.querySelector(selector);
  const original = button.textContent;
  button.textContent = label;
  setTimeout(() => { button.textContent = original; }, 1400);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function padDatePart(value) {
  return String(value).padStart(2, "0");
}

function formatContractDate(date = new Date()) {
  const safeDate = Number.isNaN(date.getTime()) ? new Date() : date;
  const day = padDatePart(safeDate.getDate());
  const month = RU_CONTRACT_MONTHS[safeDate.getMonth()];
  const year = safeDate.getFullYear();
  return `«${day}» ${month} ${year} г.`;
}

function formatNumericDate(date = new Date()) {
  const safeDate = Number.isNaN(date.getTime()) ? new Date() : date;
  return [
    padDatePart(safeDate.getDate()),
    padDatePart(safeDate.getMonth() + 1),
    safeDate.getFullYear(),
  ].join(".");
}

function formatFileDate(date = new Date()) {
  const safeDate = Number.isNaN(date.getTime()) ? new Date() : date;
  return [
    padDatePart(safeDate.getDate()),
    padDatePart(safeDate.getMonth() + 1),
    safeDate.getFullYear(),
  ].join("-");
}

function generatePdfFileName({ documentType = "document", projectName = "", date = new Date() } = {}) {
  const typeName = {
    estimate: "Смета",
    contract: "Договор",
    addendum: "Допсоглашение",
    document: "Документ",
  }[documentType] || "Документ";
  const formattedDate = formatFileDate(date);
  let safeProjectName = String(projectName || "Без названия")
    .trim()
    .replace(/[\/\\:*?"<>|]/g, "")
    .replace(/[«»“”„'`]/g, "")
    .replace(/\s+/g, "_")
    .replace(/_+/g, "_")
    .replace(/^_+|_+$/g, "");
  if (!safeProjectName) safeProjectName = "Без_названия";
  const maxProjectLength = Math.max(1, 120 - typeName.length - formattedDate.length - 6);
  safeProjectName = safeProjectName.slice(0, maxProjectLength).replace(/_+$/g, "") || "Без_названия";
  return `${typeName}_${safeProjectName}_${formattedDate}.pdf`;
}

function addCalendarYears(date, years) {
  const nextDate = new Date(date);
  nextDate.setFullYear(nextDate.getFullYear() + years);
  return nextDate;
}

function getDefaultFrameContractEndDate() {
  return formatNumericDate(addCalendarYears(new Date(), 1));
}

function isPlaceholderLike(value) {
  const normalized = String(value || "").trim();
  return !normalized || CONTRACT_PLACEHOLDERS.has(normalized) || /_{2,}/.test(normalized);
}

function refreshContractDynamicDefaults() {
  if (typeof contractState === "undefined") return false;
  let changed = false;
  const fields = contractState.fields;

  if (!fields.date) {
    fields.date = formatContractDate();
    changed = true;
  }

  if (contractState.templateKey === "design") {
    const days = String(fields.days || "").trim();
    if (!days || days === "30" || days === "31.12.2026" || /_{2,}/.test(days)) {
      fields.days = getDefaultFrameContractEndDate();
      changed = true;
    }
  } else if (/^\d{2}\.\d{2}\.\d{4}$/.test(String(fields.days || "").trim())) {
    fields.days = "30";
    changed = true;
  }

  return changed;
}

function applyContractProfileDefaults({ force = false } = {}) {
  if (typeof contractState === "undefined") return false;
  const profile = state.profile || {};
  const fieldMap = {
    city: profile.city,
    contractorName: profile.contractorName || profile.designerName,
    contractorInn: profile.contractorInn,
    bank: profile.bank,
    hourly: profile.hourly,
  };
  let changed = false;

  Object.entries(fieldMap).forEach(([key, value]) => {
    const nextValue = String(value || "").trim();
    if (!nextValue) return;
    const currentValue = String(contractState.fields[key] || "").trim();
    const shouldReplace = force || isPlaceholderLike(currentValue) || (key === "city" && currentValue === "Москва");
    if (shouldReplace && currentValue !== nextValue) {
      contractState.fields[key] = nextValue;
      changed = true;
    }
  });

  if (profile.signatureDataUrl && !contractState.signature.dataUrl) {
    contractState.signature.dataUrl = profile.signatureDataUrl;
    contractState.signature.mode = "saved";
    contractState.signature.includeInPdf = true;
    changed = true;
  }

  return changed;
}

function applyContractAutoDefaults(options = {}) {
  const profileChanged = applyContractProfileDefaults(options);
  const dynamicChanged = refreshContractDynamicDefaults();
  return profileChanged || dynamicChanged;
}

function getLabelValueFromText(text, labels) {
  const lines = String(text || "").split(/\r?\n/).map((line) => line.trim()).filter(Boolean);
  const sortedLabels = [...labels].sort((a, b) => b.length - a.length);
  const escapedLabels = sortedLabels.map((label) => label.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  const inlineRegexp = new RegExp(`(?:${escapedLabels.join("|")})\\s*(?:[:：—–-])\\s*([^\\n;]+)`, "i");
  const labelLineRegexp = new RegExp(`^(?:[-–—•]\\s*)?(?:${escapedLabels.join("|")})\\s*(?:[:：—–-])?\\s*$`, "i");
  const genericLabelOnlyRegexp = /^(?:[-–—•]\s*)?[a-zа-яё0-9\s/().-]+[:：]\s*$/i;
  const isLabelOnlyLine = (line) => labelLineRegexp.test(line);

  for (let lineIndex = 0; lineIndex < lines.length; lineIndex += 1) {
    const line = lines[lineIndex];
    for (let labelIndex = 0; labelIndex < sortedLabels.length; labelIndex += 1) {
      const label = escapedLabels[labelIndex];
      const match = line.match(new RegExp(`^(?:[-–—•]\\s*)?${label}\\s*`, "i"));
      if (!match) continue;
      const rest = line.slice(match[0].length).replace(/^[:：—–-]\s*/, "").trim();
      if (rest && !rest.startsWith("/")) return rest;
      for (let nextIndex = lineIndex + 1; nextIndex < lines.length; nextIndex += 1) {
        const nextLine = lines[nextIndex];
        if (isLabelOnlyLine(nextLine) || genericLabelOnlyRegexp.test(nextLine)) continue;
        return nextLine;
      }
      return "";
    }
  }

  return text.match(inlineRegexp)?.[1]?.trim() || "";
}

function extractContactDetails(text) {
  const source = String(text || "");
  const contacts = [];
  const email = source.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i)?.[0];
  const phone = source.match(/(?:\+?\d[\d\s().-]{7,}\d)/)?.[0]?.replace(/\s{2,}/g, " ");
  const telegramMatch = source.match(/(?:telegram|телеграм|tg)\s*[:：@]?\s*(@?[a-zA-Z0-9_]{4,})|(@[a-zA-Z0-9_]{4,})/i);
  const telegram = telegramMatch?.[1] || telegramMatch?.[2];
  const labeled = getLabelValueFromText(source, ["телефон / telegram", "телефон/telegram", "телефон / телеграм", "контакты", "контакт", "телефон", "e-mail", "email", "почта"]);

  if (labeled) contacts.push(labeled);
  if (phone && !contacts.some((item) => item.includes(phone))) contacts.push(phone.trim());
  if (email && !contacts.some((item) => item.includes(email))) contacts.push(email.trim());
  if (telegram) {
    const normalizedTelegram = telegram.startsWith("@") ? telegram : `@${telegram}`;
    if (!contacts.some((item) => item.includes(normalizedTelegram))) contacts.push(normalizedTelegram);
  }

  return contacts.join(", ");
}

function guessClientName(text) {
  const source = String(text || "");
  const labeled = getLabelValueFromText(source, [
    "фио / название компании",
    "фио или название",
    "полное имя",
    "фио",
    "название компании",
    "название организации",
    "компания",
    "организация",
    "заказчик",
    "имя",
  ]);
  if (labeled) return labeled;

  const lines = source.split(/\r?\n/).map((line) => line.trim()).filter(Boolean);
  const ignored = /(инн|контакт|телефон|email|e-mail|почта|telegram|телеграм|адрес|реквизит|банк|счет|счёт)/i;
  return lines.find((line) => !ignored.test(line) && line.length > 3 && line.length < 140) || "";
}

function parseClientReply(text) {
  const source = String(text || "").trim();
  if (!source) return {};
  const inn = getLabelValueFromText(source, ["инн"]) || source.match(/\b\d{10}\b|\b\d{12}\b/)?.[0] || "";
  const address = getLabelValueFromText(source, [
    "юридический или почтовый адрес",
    "юридический адрес",
    "почтовый адрес",
    "адрес",
  ]);
  const responsible = getLabelValueFromText(source, [
    "ответственное лицо",
    "контактное лицо",
    "представитель",
    "директор",
  ]);
  const contacts = extractContactDetails(source);

  return {
    clientName: guessClientName(source),
    clientInn: inn,
    clientAddress: address,
    responsible,
    responsibleContact: contacts,
  };
}

const CLIENT_REPLY_LABELS = {
  clientName: "ФИО / название",
  clientInn: "ИНН",
  clientAddress: "адрес",
  responsible: "ответственное лицо",
  responsibleContact: "контакты",
};

function getParsedClientReplyLabels(parsed) {
  return Object.entries(parsed)
    .filter(([, value]) => String(value || "").trim())
    .map(([key]) => CLIENT_REPLY_LABELS[key] || key);
}

function setClientReplyStatus(message, isError = false) {
  document.querySelectorAll("[data-client-reply-status]").forEach((status) => {
    status.textContent = message;
    status.classList.toggle("is-error", isError);
  });
}

function applyClientReplyText(text, { silent = false } = {}) {
  const parsed = parseClientReply(text);
  const labels = getParsedClientReplyLabels(parsed);

  Object.entries(parsed).forEach(([key, value]) => {
    const normalized = String(value || "").trim();
    if (!normalized) return;
    contractState.fields[key] = normalized;
  });

  if (!labels.length) {
    if (!silent) setClientReplyStatus("Не нашла данные для заполнения. Лучше вставить ответ с подписями: ФИО, ИНН, контакты, адрес.", true);
    return false;
  }

  renderContractControls();
  renderContractDocument();
  renderContractProgress();
  validateContractFields();
  scheduleContractSave();
  mobileContractClientImportOpen = false;
  mobileContractSheetSignature = "";
  renderMobileContractUI({ forceSheet: true });
  setClientReplyStatus(`Заполнила: ${labels.join(", ")}.`);
  return true;
}

function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result || ""));
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function loadImageElement(src) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = reject;
    image.src = src;
  });
}

async function processSignatureFile(file) {
  const source = await readFileAsDataUrl(file);
  const image = await loadImageElement(source);
  const maxWidth = 1600;
  const scale = Math.min(1, maxWidth / image.width);
  const width = Math.max(1, Math.round(image.width * scale));
  const height = Math.max(1, Math.round(image.height * scale));
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d", { willReadFrequently: true });
  canvas.width = width;
  canvas.height = height;
  context.drawImage(image, 0, 0, width, height);

  const imageData = context.getImageData(0, 0, width, height);
  const data = imageData.data;
  const blue = [28, 82, 205];

  // --- 1. Определяем цвет фона по углам изображения (5x5 пикселей каждый угол) ---
  let bgR = 0, bgG = 0, bgB = 0, bgCount = 0;
  const sampleSize = 5;
  const corners = [
    [0, 0], [width - sampleSize, 0],
    [0, height - sampleSize], [width - sampleSize, height - sampleSize],
  ];
  for (const [cx, cy] of corners) {
    for (let dy = 0; dy < sampleSize; dy++) {
      for (let dx = 0; dx < sampleSize; dx++) {
        const i = ((cy + dy) * width + (cx + dx)) * 4;
        bgR += data[i]; bgG += data[i + 1]; bgB += data[i + 2];
        bgCount++;
      }
    }
  }
  bgR = Math.round(bgR / bgCount);
  bgG = Math.round(bgG / bgCount);
  bgB = Math.round(bgB / bgCount);

  // --- 2. Для каждого пикселя вычисляем расстояние от цвета фона ---
  let minX = width, minY = height, maxX = -1, maxY = -1;

  for (let index = 0; index < data.length; index += 4) {
    const pixelIndex = index / 4;
    const x = pixelIndex % width;
    const y = Math.floor(pixelIndex / width);
    const r = data[index];
    const g = data[index + 1];
    const b = data[index + 2];

    // Евклидово расстояние от фона в RGB
    const dr = r - bgR, dg = g - bgG, db = b - bgB;
    const dist = Math.sqrt(dr * dr + dg * dg + db * db);

    // Нормализуем: dist=0 → чистый фон, dist=441 → максимум
    // Порог: если < 40 от фона — прозрачный, > 80 — непрозрачный
    const LOW = 35, HIGH = 90;
    let alpha = dist < LOW ? 0 : dist > HIGH ? 1 : (dist - LOW) / (HIGH - LOW);

    // Убираем почти-прозрачные артефакты
    if (alpha < 0.12) alpha = 0;

    if (alpha > 0) {
      minX = Math.min(minX, x);
      minY = Math.min(minY, y);
      maxX = Math.max(maxX, x);
      maxY = Math.max(maxY, y);
      data[index] = blue[0];
      data[index + 1] = blue[1];
      data[index + 2] = blue[2];
      data[index + 3] = Math.round(alpha * 255);
    } else {
      data[index + 3] = 0;
    }
  }

  context.putImageData(imageData, 0, 0);
  if (maxX < minX || maxY < minY) return source;

  // --- 3. Тугой кроп по bounding box подписи ---
  const margin = 12;
  const cropX = Math.max(0, minX - margin);
  const cropY = Math.max(0, minY - margin);
  const cropWidth = Math.min(width - cropX, maxX - cropX + margin);
  const cropHeight = Math.min(height - cropY, maxY - cropY + margin);
  const cropped = document.createElement("canvas");
  const croppedContext = cropped.getContext("2d");
  cropped.width = cropWidth;
  cropped.height = cropHeight;
  croppedContext.drawImage(canvas, cropX, cropY, cropWidth, cropHeight, 0, 0, cropWidth, cropHeight);
  return cropped.toDataURL("image/png");
}

function createDefaultContractDraft() {
  const savedSignature = state.profile?.signatureDataUrl || "";
  return {
    templateKey: "design",
    mode: "fill",
    docType: "contract",
    showExplanations: true,
    fields: {
      number: "___",
      city: state.profile.city || "Москва",
      date: formatContractDate(),
      clientName: "Заказчик",
      clientInn: "__________",
      clientAddress: "",
      contractorName: state.profile.contractorName || "Исполнитель",
      contractorInn: state.profile.contractorInn || "__________",
      responsible: "ФИО, должность",
      responsibleContact: "телефон / telegram",
      days: getDefaultFrameContractEndDate(),
      bank: state.profile.bank || "банк / карта / счет",
      hourly: state.profile.hourly || "2 500",
    },
    optional: {
      footerAuthor: true,
      illness: true,
      replaceMaterials: true,
      tildaRules: true,
      freepik: true,
      ads: false,
    },
    textOverrides: {},
    hiddenClauses: {},
    signature: {
      dataUrl: savedSignature,
      mode: savedSignature ? "saved" : "once",
      includeInPdf: Boolean(savedSignature),
    },
    addendumFields: {
      number: "1",
      date: formatContractDate(),
      contractNumber: "___",
      contractDate: "",
      city: state.profile?.city || "Москва",
      clientName: "",
      contractorName: state.profile?.contractorName || "",
      taskDescription: "",
      taskRequirements: "",
      deadline: "",
      price: "",
      paymentTerms: DEFAULT_ADDENDUM_PAYMENT_TERMS,
      revisionsPerStage: "2",
      revisionRate: state.profile?.hourly || "",
      includeRightsTransfer: true,
      otherConditions: "",
      contactName: "",
      contactInfo: "",
    },
    addendumShowExplanations: true,
  };
}

function normalizeContractDraft(saved) {
  const defaults = createDefaultContractDraft();
  const draft = saved || {};
  const addendumFields = { ...defaults.addendumFields, ...(draft.addendumFields || {}) };
  if (String(addendumFields.taskDescription || "").trim() === "Разработка фирменного стиля бренда") {
    addendumFields.taskDescription = "";
  }
  if (/^Логотип \(знак \+ логотип/.test(String(addendumFields.taskRequirements || "").trim())) {
    addendumFields.taskRequirements = "";
  }
  return {
    ...defaults,
    ...draft,
    templateKey: CONTRACT_TEMPLATES[draft.templateKey] ? draft.templateKey : defaults.templateKey,
    mode: "fill",
    docType: draft.docType === "addendum" ? "addendum" : "contract",
    showExplanations: draft.showExplanations ?? defaults.showExplanations,
    fields: { ...defaults.fields, ...(draft.fields || {}) },
    optional: { ...defaults.optional, ...(draft.optional || {}) },
    textOverrides: { ...defaults.textOverrides, ...(draft.textOverrides || {}) },
    hiddenClauses: { ...defaults.hiddenClauses, ...(draft.hiddenClauses || {}) },
    signature: { ...defaults.signature, ...(draft.signature || {}) },
    addendumFields,
    addendumShowExplanations: draft.addendumShowExplanations ?? defaults.addendumShowExplanations,
  };
}

function loadContractDraft() {
  let saved = null;
  try {
    saved = JSON.parse(localStorage.getItem("designkit.contractDraft") || "null");
  } catch (error) {
    localStorage.removeItem("designkit.contractDraft");
  }
  return normalizeContractDraft(saved);
}

function getContractTemplate() {
  return CONTRACT_TEMPLATES[contractState.templateKey] || CONTRACT_TEMPLATES.design;
}

function saveProfileSignature() {
  state.profile = state.profile || {};
  if (contractState.signature.mode === "saved" && contractState.signature.dataUrl) {
    state.profile.signatureDataUrl = contractState.signature.dataUrl;
  }
  if (!contractState.signature.dataUrl && state.profile.signatureDataUrl) {
    delete state.profile.signatureDataUrl;
  }
  localStorage.setItem("designkit.profile", JSON.stringify(state.profile));
}

function contractField(key, placeholder) {
  const value = contractState.fields[key] || "";
  return `<span class="inline-field" contenteditable="true" spellcheck="false" data-contract-field="${key}" data-placeholder="${escapeHtml(placeholder)}">${escapeHtml(value)}</span>`;
}

function normalizeInlineFieldValue(value, placeholder = "") {
  let normalized = String(value || "").trim();
  const normalizedPlaceholder = String(placeholder || "").trim();
  if (!normalized) return "";
  const isUnderlinePlaceholder = /^_+$/.test(normalizedPlaceholder) || /_{2,}/.test(normalizedPlaceholder);
  if (isUnderlinePlaceholder && normalized === normalizedPlaceholder) return "";
  if (isUnderlinePlaceholder && normalized.endsWith(normalizedPlaceholder)) {
    normalized = normalized.slice(0, -normalizedPlaceholder.length).trim();
  }
  return normalized.replace(/[_\s]{2,}$/g, "").trim();
}

function isUnderscorePlaceholder(value) {
  return !value || /^_+$/.test(value) || /_{2,}/.test(value);
}

function isContractPlaceholderValue(value) {
  const normalized = String(value || "").trim();
  return !normalized || CONTRACT_PLACEHOLDERS.has(normalized) || isUnderscorePlaceholder(normalized);
}

function isContractFieldFilled(key) {
  const value = String(contractState.fields[key] || "").trim();
  return Boolean(value && !isContractPlaceholderValue(value));
}

function getContractFieldLabel(key) {
  for (const group of CONTRACT_FIELD_GROUPS) {
    for (const [fieldKey, label] of group.fields) {
      if (fieldKey === key) return label;
    }
  }
  return key;
}

function renderContractProgress() {
  const progress = document.querySelector("[data-contract-progress]");
  const summary = document.querySelector("[data-contract-required-summary]");
  const missing = CONTRACT_REQUIRED_FIELDS.filter((key) => !isContractFieldFilled(key));
  const filled = CONTRACT_REQUIRED_FIELDS.length - missing.length;
  if (!progress) return;
  progress.textContent = `Заполнено ${filled} из ${CONTRACT_REQUIRED_FIELDS.length}`;
  progress.classList.toggle("is-complete", filled === CONTRACT_REQUIRED_FIELDS.length);
  if (!summary) return;
  const panel = document.querySelector("[data-contract-fields-panel]");
  if (panel && missing.length) panel.open = true;
  if (!missing.length) {
    summary.innerHTML = `<p class="contract-required-summary__ok">Все обязательные поля заполнены. Можно скачивать PDF.</p>`;
    if (!isRenderingMobileContractUI && !(document.activeElement && document.activeElement.closest?.("[data-mobile-contract-sheet]"))) {
      renderMobileContractUI();
    }
    return;
  }
  summary.innerHTML = `
    <p class="contract-required-summary__title">Осталось заполнить</p>
    <div class="contract-required-summary__list">
      ${missing.map((key) => `
        <button class="contract-required-chip" type="button" data-action="focus-contract-field" data-field="${key}">
          ${escapeHtml(getContractFieldLabel(key))}
        </button>
      `).join("")}
    </div>
  `;
  if (!isRenderingMobileContractUI && !(document.activeElement && document.activeElement.closest?.("[data-mobile-contract-sheet]"))) {
    renderMobileContractUI();
  }
}

function renderContractTemplateStrip() {
  const strips = document.querySelectorAll("[data-contract-template-strip]");
  if (!strips.length) return;
  const isAddendum = contractState.docType === "addendum";
  const markup = `
    <div class="doc-type-toggle">
      <button class="doc-type-toggle__btn ${!isAddendum ? "is-active" : ""}" type="button" data-action="show-contract-doc"><span class="doc-type-toggle__step">01</span>Договор</button>
      <button class="doc-type-toggle__btn ${isAddendum ? "is-active" : ""}" type="button" data-action="show-addendum-doc"><span class="doc-type-toggle__step">02</span>Допсоглашение</button>
    </div>
    <button class="reset-btn" type="button" data-action="reset-all-data" title="Сбросить все данные">↺ Сбросить</button>
  `;
  strips.forEach((strip) => {
    strip.innerHTML = markup;
  });
}

function openAddendumDocument() {
  syncAddendumFromContract();
  contractState.docType = "addendum";
  contractState.mode = "fill";
  mobileContractDocVisible = false;
  mobileContractSheetKey = "";
  scheduleContractSave();
  renderContractWorkspace();
}

function resetContractDocuments() {
  const fresh = createDefaultContractDraft();
  Object.assign(contractState, fresh);
  mobileContractDocVisible = false;
  mobileContractSheetKey = "";
  mobileContractClientImportOpen = false;
  scheduleContractSave();
  renderContractWorkspace();
}

function renderContractControls() {
  const container = document.querySelector("[data-contract-fields]");
  if (!container) return;
  container.innerHTML = CONTRACT_FIELD_GROUPS.map((group) => `
    <details class="contract-form__group">
      <summary>${escapeHtml(group.title)}</summary>
      ${group.fields.map(([key, label, placeholder]) => `
        <label class="contract-control">
          <span>${escapeHtml(label)}</span>
          <input type="text" data-contract-control="${key}" value="${escapeHtml(contractState.fields[key] || "")}" placeholder="${escapeHtml(placeholder)}">
        </label>
      `).join("")}
    </details>
  `).join("");
  renderContractProgress();
  validateContractFields();
}

function syncContractControls(key) {
  document.querySelectorAll(`[data-contract-control="${key}"]`).forEach((node) => {
    if (document.activeElement !== node) node.value = contractState.fields[key] || "";
  });
  renderContractProgress();
}

function syncContractFieldDom(key, sourceNode = null) {
  document.querySelectorAll(`[data-contract-field="${key}"]`).forEach((node) => {
    if (node !== sourceNode) node.textContent = contractState.fields[key] || "";
  });
}

function contractNote(text) {
  if (!contractState.showExplanations) return "";
  return `<aside class="document-note"><strong>Пояснение</strong><span>${escapeHtml(text)}</span></aside>`;
}

let contractSectionCounter = 0;

function getContractClauseKey(sectionId, clause) {
  const raw = `${contractState.templateKey}:${sectionId}:${clause.optionalKey || clause.title}`;
  let hash = 0;
  for (let index = 0; index < raw.length; index += 1) {
    hash = ((hash << 5) - hash) + raw.charCodeAt(index);
    hash |= 0;
  }
  return `clause-${Math.abs(hash)}`;
}

function isContractClauseHidden(key) {
  return Boolean(contractState.hiddenClauses?.[key]);
}

function renderClauseDeleteButton(key) {
  return `
    <button class="contract-clause-delete" type="button" data-action="delete-contract-clause" data-clause-key="${escapeHtml(key)}" aria-label="Удалить пункт">
      ×
    </button>
  `;
}

function renderContractClause(sectionId, sectionNumber, clauseIndex, clause) {
  if (clause.optionalKey && !contractState.optional[clause.optionalKey]) return "";
  const clauseKey = getContractClauseKey(sectionId, clause);
  if (isContractClauseHidden(clauseKey)) return "";
  const body = contractState.textOverrides?.[clauseKey] || clause.body;
  return `
    <div class="contract-clause ${clause.optionalKey ? "contract-clause--optional" : ""}" data-contract-clause="${clause.optionalKey || "fixed"}" data-clause-key="${escapeHtml(clauseKey)}">
      ${renderClauseDeleteButton(clauseKey)}
      ${clause.optionalKey ? `
        <div class="optional-section__actions">
          <button type="button" data-action="toggle-contract-option" data-option="${clause.optionalKey}">Убрать пункт</button>
        </div>
      ` : ""}
      <p class="clause-title"><span>${sectionNumber}.${clauseIndex}</span>${escapeHtml(clause.title)}</p>
      ${clause.note ? contractNote(clause.note) : ""}
      <div class="contract-clause__body" contenteditable="true" spellcheck="true" data-contract-clause-body="${clauseKey}">${body}</div>
    </div>
  `;
}

function renderDocumentSection(id, title, clauses) {
  contractSectionCounter += 1;
  const sectionNumber = contractSectionCounter;
  let clauseIndex = 0;
  const body = clauses.map((clause) => {
    if (clause.optionalKey && !contractState.optional[clause.optionalKey]) return "";
    if (isContractClauseHidden(getContractClauseKey(id, clause))) return "";
    clauseIndex += 1;
    return renderContractClause(id, sectionNumber, clauseIndex, clause);
  }).join("");
  return `
    <section class="document-section" id="${id}" data-contract-section>
      <h2><span class="section-num">${String(sectionNumber).padStart(2, "0")}</span> ${escapeHtml(title)}</h2>
      ${body}
    </section>
  `;
}

function renderContractOutline() {
  const outlines = [...document.querySelectorAll("[data-contract-outline]")];
  if (!outlines.length) return;
  if (contractState.docType === "addendum") {
    outlines.forEach((outline) => { outline.innerHTML = ""; });
    return;
  }
  const sections = (contractState.templateKey === "design" ? CONTRACT_SECTIONS_DESIGN : CONTRACT_SECTIONS);
  const markup = `
    <div class="document-section-nav__label">Разделы</div>
    <div class="document-section-nav__list">
      ${sections.map(([id, label], i) => `
    <button class="outline-link" type="button" data-scroll-section="${id}"><span class="outline-link__num">${i + 1}.</span>${label}</button>
      `).join("")}
    </div>
    <button class="document-section-nav__top" type="button" data-action="scroll-contract-top">↑ Наверх</button>
  `;
  outlines.forEach((outline) => {
    outline.innerHTML = markup;
  });
}

function syncContractOutlineVisibility() {
  const floatingOutline = document.querySelector(".document-section-nav--floating");
  if (!floatingOutline) return;
  const canFloat = state.view === "contract" && contractState.docType === "contract" && window.innerWidth >= 1081;
  floatingOutline.classList.toggle("is-floating-mode", canFloat);
  floatingOutline.classList.toggle("is-visible", canFloat && window.scrollY > 48);
}

function scheduleContractOutlineVisibilitySync() {
  if (contractOutlineVisibilityFrame) return;
  contractOutlineVisibilityFrame = requestAnimationFrame(() => {
    contractOutlineVisibilityFrame = 0;
    syncContractOutlineVisibility();
  });
}

function renderContractOptions() {
  const list = document.querySelector("[data-contract-options]");
  if (!list) return;
  const vacationOn = Boolean(contractState.optional.vacation);
  const toDateInputValue = (ddmmyyyy) => {
    if (!ddmmyyyy) return "";
    const [d, m, y] = String(ddmmyyyy).split(".");
    if (!d || !m || !y) return "";
    return `${y}-${m.padStart(2,"0")}-${d.padStart(2,"0")}`;
  };
  list.innerHTML = `
    <label class="optional-switch">
      <input type="checkbox" data-action="toggle-contract-option" data-option="vacation" ${vacationOn ? "checked" : ""}>
      <span>Добавить плановый перерыв</span>
    </label>
    ${vacationOn ? `
      <div class="vacation-dates">
        <label class="vacation-date-field">
          <span>С</span>
          <input type="date" class="vacation-date-input" data-vacation-field="vacationFrom"
            value="${toDateInputValue(contractState.fields.vacationFrom)}">
        </label>
        <label class="vacation-date-field">
          <span>По</span>
          <input type="date" class="vacation-date-input" data-vacation-field="vacationTo"
            value="${toDateInputValue(contractState.fields.vacationTo)}">
        </label>
      </div>
    ` : ""}
  `;
}

function renderContractModeControls() {
  const checked = contractState.docType === "addendum"
    ? Boolean(contractState.addendumShowExplanations)
    : Boolean(contractState.showExplanations);
  document.querySelectorAll("[data-contract-explanation-toggle]").forEach((toggle) => {
    toggle.checked = checked;
  });
}

function renderSignaturePanel() {
  const hasSignature = Boolean(contractState.signature.dataUrl);

  document.querySelectorAll("[data-signature-preview]").forEach(preview => {
    preview.innerHTML = hasSignature
      ? `<img class="signature-image" src="${escapeHtml(contractState.signature.dataUrl)}" alt="Загруженная подпись">`
      : `<span class="signature-empty">Подпись не загружена</span>`;
  });

  document.querySelectorAll("[data-signature-pdf-toggle]").forEach(el => {
    el.disabled = !hasSignature;
    el.checked = hasSignature && contractState.signature.includeInPdf;
  });
  if (!isRenderingMobileContractUI && !(document.activeElement && document.activeElement.closest?.("[data-mobile-contract-sheet]"))) {
    renderMobileContractUI();
  }
}

function isMobileContractUI() {
  return window.innerWidth <= 760;
}

function isAddendumFieldFilled(key) {
  const value = String(contractState.addendumFields[key] ?? "").trim();
  if (!value || isUnderscorePlaceholder(value)) return false;
  if ((key === "clientName" || key === "contractorName") && isContractPlaceholderValue(value)) return false;
  if (key === "contractNumber" && isContractPlaceholderValue(value)) return false;
  return true;
}

function getAddendumFieldLabel(key) {
  return ADDENDUM_FIELD_LABELS[key] || key;
}

function renderAddendumProgress() {
  const progress = document.querySelector("[data-addendum-progress]");
  const summary = document.querySelector("[data-addendum-required-summary]");
  const missing = ADDENDUM_REQUIRED_FIELDS.filter((key) => !isAddendumFieldFilled(key));
  const filled = ADDENDUM_REQUIRED_FIELDS.length - missing.length;
  if (progress) {
    progress.textContent = `Заполнено ${filled} из ${ADDENDUM_REQUIRED_FIELDS.length}`;
    progress.classList.toggle("is-complete", filled === ADDENDUM_REQUIRED_FIELDS.length);
  }
  const panel = document.querySelector("[data-addendum-fields-panel]");
  if (panel && missing.length) panel.open = true;
  if (!summary) return;
  if (!missing.length) {
    summary.innerHTML = `<p class="contract-required-summary__ok">Все обязательные поля заполнены. Можно скачивать PDF.</p>`;
    if (!isRenderingMobileContractUI && !(document.activeElement && document.activeElement.closest?.("[data-mobile-contract-sheet]"))) {
      renderMobileContractUI();
    }
    return;
  }
  summary.innerHTML = `
    <p class="contract-required-summary__title">Осталось заполнить</p>
    <div class="contract-required-summary__list">
      ${missing.map((key) => `
        <button class="contract-required-chip" type="button" data-action="focus-addendum-field" data-field="${key}">
          ${escapeHtml(getAddendumFieldLabel(key))}
        </button>
      `).join("")}
    </div>
  `;
  if (!isRenderingMobileContractUI && !(document.activeElement && document.activeElement.closest?.("[data-mobile-contract-sheet]"))) {
    renderMobileContractUI();
  }
}

function getCurrentDocumentMissingRequiredFields() {
  if (contractState.docType === "addendum") {
    return ADDENDUM_REQUIRED_FIELDS.filter((key) => !isAddendumFieldFilled(key));
  }
  return CONTRACT_REQUIRED_FIELDS.filter((key) => !isContractFieldFilled(key));
}

function getCurrentDocumentFieldLabel(key) {
  return contractState.docType === "addendum"
    ? getAddendumFieldLabel(key)
    : getContractFieldLabel(key);
}

function focusContractControlField(field) {
  const input = field ? document.querySelector(`[data-contract-control="${field}"]`) : null;
  if (!input) return;
  input.closest("details")?.setAttribute("open", "open");
  input.scrollIntoView({ behavior: "smooth", block: "center" });
  input.focus();
}

function focusAddendumControlField(field) {
  const input = field ? document.querySelector(`[data-addendum-control="${field}"]`) : null;
  if (!input) return;
  input.closest("details")?.setAttribute("open", "open");
  input.scrollIntoView({ behavior: "smooth", block: "center" });
  input.focus();
}

function focusCurrentDocumentField(field) {
  if (contractState.docType === "addendum") {
    focusAddendumControlField(field);
    return;
  }
  focusContractControlField(field);
}

function ensureCurrentDocumentReadyForPdf() {
  const missing = getCurrentDocumentMissingRequiredFields();
  if (!missing.length) return true;
  if (contractState.docType === "addendum") {
    renderAddendumProgress();
  } else {
    renderContractProgress();
  }
  const labels = missing.map(getCurrentDocumentFieldLabel);
  const documentName = contractState.docType === "addendum" ? "допсоглашения" : "договора";
  updateAutosaveStatus(
    `Осталось заполнить: ${labels.length} ${getMobileContractFieldWord(labels.length)}`,
    `Осталось заполнить: ${labels.join(", ")}`
  );
  setClientReplyStatus(`Перед скачиванием PDF заполните обязательные поля ${documentName}: ${labels.join(", ")}.`, true);
  focusCurrentDocumentField(missing[0]);
  return false;
}

function shouldAutoFillAddendumField(value) {
  const normalized = String(value ?? "").trim();
  return !normalized || /^_+$/.test(normalized) || normalized === "Заказчик" || normalized === "Исполнитель";
}

function syncAddendumFromContract({ force = false } = {}) {
  const fields = contractState.fields;
  const addendum = contractState.addendumFields;
  const pairs = [
    ["clientName", fields.clientName, isContractFieldFilled("clientName")],
    ["contractorName", fields.contractorName, isContractFieldFilled("contractorName")],
    ["city", fields.city, Boolean(String(fields.city || "").trim())],
    ["contractNumber", fields.number, isContractFieldFilled("number")],
    ["contractDate", fields.date, isContractFieldFilled("date")],
  ];

  pairs.forEach(([key, value, isValid]) => {
    if (force || shouldAutoFillAddendumField(addendum[key])) {
      if (isValid && value) {
        addendum[key] = value;
      } else if (shouldAutoFillAddendumField(addendum[key])) {
        addendum[key] = "";
      }
    }
  });

  if ((force || shouldAutoFillAddendumField(addendum.contactName)) && isContractFieldFilled("responsible")) {
    addendum.contactName = fields.responsible;
  }
  if ((force || shouldAutoFillAddendumField(addendum.contactInfo)) && isContractFieldFilled("responsibleContact")) {
    addendum.contactInfo = fields.responsibleContact;
  }

  const revisionRate = String(fields.hourly || state.profile?.hourly || "").trim();
  const currentRevisionRate = String(addendum.revisionRate || "").trim();
  const canAutoFillRevisionRate = shouldAutoFillAddendumField(currentRevisionRate) || currentRevisionRate === "2 500";
  if ((force || canAutoFillRevisionRate) && revisionRate) {
    addendum.revisionRate = revisionRate;
  }

  if (force || shouldAutoFillAddendumField(addendum.paymentTerms)) {
    addendum.paymentTerms = DEFAULT_ADDENDUM_PAYMENT_TERMS;
  }

  if (force || shouldAutoFillAddendumField(addendum.date)) {
    addendum.date = formatContractDate();
  }
}

function getMobileContractFieldWord(count) {
  const mod10 = count % 10;
  const mod100 = count % 100;
  if (mod10 === 1 && mod100 !== 11) return "поле";
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return "поля";
  return "полей";
}

function getMobileContractTitle() {
  if (contractState.docType === "addendum") return "Допсоглашение";
  return contractState.templateKey === "design" ? "Рамочный договор" : getContractTemplate().title;
}

function getMobileContractSteps() {
  if (contractState.docType === "addendum") {
    return [
      {
        key: "document",
        title: "Документ",
        required: true,
        allKeys: ["number", "city", "date", "contractNumber", "contractDate"],
        requiredKeys: ["number", "city", "date", "contractNumber", "contractDate"],
        filled: isAddendumFieldFilled,
      },
      {
        key: "parties",
        title: "Стороны",
        required: true,
        allKeys: ["clientName", "contractorName"],
        requiredKeys: ["clientName", "contractorName"],
        filled: isAddendumFieldFilled,
      },
      {
        key: "task",
        title: "Задача",
        required: true,
        allKeys: ["taskDescription", "deadline", "price", "paymentTerms"],
        requiredKeys: ["taskDescription", "deadline", "price", "paymentTerms"],
        filled: isAddendumFieldFilled,
      },
      {
        key: "requirements",
        title: "ТЗ и условия",
        required: true,
        allKeys: ["taskRequirements", "revisionsPerStage", "revisionRate"],
        requiredKeys: ["taskRequirements"],
        filled: isAddendumFieldFilled,
      },
      {
        key: "contact",
        title: "Контактное лицо",
        required: true,
        allKeys: ["contactName", "contactInfo"],
        requiredKeys: ["contactName", "contactInfo"],
        filled: isAddendumFieldFilled,
      },
      {
        key: "signature",
        title: "Подпись",
        required: false,
        allKeys: ["signature"],
        requiredKeys: [],
        filled: (fieldKey) => fieldKey === "signature" ? Boolean(contractState.signature.dataUrl) : false,
      },
    ];
  }

  return [
    {
      key: "contractor",
      title: "Исполнитель",
      required: true,
      allKeys: ["contractorName", "contractorInn", "bank", "hourly"],
      requiredKeys: ["contractorName", "contractorInn", "bank"],
      filled: isContractFieldFilled,
    },
    {
      key: "document",
      title: "Документ",
      required: true,
      allKeys: ["number", "city", "date"],
      requiredKeys: ["number", "city", "date"],
      filled: isContractFieldFilled,
    },
    {
      key: "client",
      title: "Клиент",
      required: true,
      allKeys: ["clientName", "clientInn", "clientAddress", "responsible", "responsibleContact"],
      requiredKeys: ["clientName", "clientInn"],
      filled: isContractFieldFilled,
    },
    {
      key: "terms",
      title: "Условия",
      required: true,
      allKeys: ["days"],
      requiredKeys: ["days"],
      filled: isContractFieldFilled,
    },
    {
      key: "signature",
      title: "Подпись",
      required: false,
      allKeys: ["signature"],
      requiredKeys: [],
      filled: (fieldKey) => fieldKey === "signature" ? Boolean(contractState.signature.dataUrl) : false,
    },
  ];
}

function getMobileContractStepState(step) {
  const filledFn = step.filled || (() => false);
  const allKeys = step.allKeys || [];
  const requiredKeys = step.requiredKeys || [];
  const allFilled = allKeys.filter((key) => filledFn(key)).length;
  const requiredFilled = requiredKeys.filter((key) => filledFn(key)).length;

  return {
    allCount: allKeys.length,
    allFilled,
    requiredCount: requiredKeys.length,
    requiredFilled,
    remaining: Math.max(0, allKeys.length - allFilled),
    requiredRemaining: Math.max(0, requiredKeys.length - requiredFilled),
    requiredComplete: requiredKeys.length === 0 ? true : requiredFilled === requiredKeys.length,
    allComplete: allKeys.length === 0 ? false : allFilled === allKeys.length,
  };
}

function getMobileContractStepSubtitle(step, stepState) {
  if (contractState.docType === "addendum") {
    if (step.key === "document") {
      if (!stepState.requiredComplete) return `осталось ${stepState.requiredRemaining} ${getMobileContractFieldWord(stepState.requiredRemaining)}`;
      return `№ ${contractState.addendumFields.number || "___"} · договор ${contractState.addendumFields.contractNumber || "___"}`;
    }
    if (step.key === "parties") {
      if (stepState.requiredComplete) return contractState.addendumFields.clientName || "Стороны заполнены";
      return stepState.requiredRemaining ? `осталось ${stepState.requiredRemaining} ${getMobileContractFieldWord(stepState.requiredRemaining)}` : "проверь стороны";
    }
    if (step.key === "task") {
      if (stepState.requiredComplete) return contractState.addendumFields.taskDescription || "Задача заполнена";
      return `осталось ${stepState.requiredRemaining} ${getMobileContractFieldWord(stepState.requiredRemaining)}`;
    }
    if (step.key === "requirements") {
      return stepState.requiredComplete ? "конкретизация задачи готова" : "добавьте техническое задание";
    }
    if (step.key === "contact") {
      if (stepState.requiredComplete) return contractState.addendumFields.contactName || "контакт заполнен";
      return `осталось ${stepState.requiredRemaining} ${getMobileContractFieldWord(stepState.requiredRemaining)}`;
    }
    if (step.key === "signature") {
      return contractState.signature.dataUrl ? "подпись загружена" : "не обязательно";
    }
  }

  if (step.key === "contractor") {
    if (stepState.requiredComplete) return "из профиля";
    return stepState.requiredRemaining ? `осталось ${stepState.requiredRemaining} ${getMobileContractFieldWord(stepState.requiredRemaining)}` : "проверьте данные";
  }
  if (step.key === "document") {
    if (!stepState.requiredComplete) return `осталось ${stepState.requiredRemaining} ${getMobileContractFieldWord(stepState.requiredRemaining)}`;
    return `№ ${contractState.fields.number || "___"} · ${contractState.fields.city || "Город"}`;
  }
  if (step.key === "client") {
    if (stepState.requiredComplete) return contractState.fields.clientName || "Клиент заполнен";
    return stepState.requiredRemaining ? `осталось ${stepState.requiredRemaining} ${getMobileContractFieldWord(stepState.requiredRemaining)}` : "проверьте клиента";
  }
  if (step.key === "terms") {
    return stepState.requiredComplete
      ? `${contractState.templateKey === "design" ? "до" : "срок"} ${contractState.fields.days || "___"}`
      : "укажите срок";
  }
  if (step.key === "signature") {
    return contractState.signature.dataUrl ? "подпись загружена" : "не обязательно";
  }

  return "";
}

function renderMobileContractControl(label, key, placeholder, options = {}) {
  const {
    value = contractState.fields[key] || "",
    kind = "contract",
    type = "text",
    multiline = false,
    rows = 4,
  } = options;
  const attr = kind === "addendum" ? "data-addendum-control" : "data-contract-control";
  const safeValue = escapeHtml(String(value || ""));

  if (multiline) {
    return `
      <label class="mobile-contract-sheet__field">
        <span>${escapeHtml(label)}</span>
        <textarea ${attr}="${key}" rows="${rows}" placeholder="${escapeHtml(placeholder)}">${safeValue}</textarea>
      </label>
    `;
  }

  return `
    <label class="mobile-contract-sheet__field">
      <span>${escapeHtml(label)}</span>
      <input type="${type}" ${attr}="${key}" value="${safeValue}" placeholder="${escapeHtml(placeholder)}">
    </label>
  `;
}

function renderMobileContractSheetContent() {
  const body = document.querySelector("[data-mobile-contract-sheet-body]");
  if (!body) return;
  const signature = `${contractState.docType}:${mobileContractSheetKey}:${mobileContractClientImportOpen}`;
  if (signature === mobileContractSheetSignature) return;
  mobileContractSheetSignature = signature;

  const vacationOn = Boolean(contractState.optional.vacation);
  const toDateInputValue = (ddmmyyyy) => {
    if (!ddmmyyyy) return "";
    const [d, m, y] = String(ddmmyyyy).split(".");
    if (!d || !m || !y) return "";
    return `${y}-${m.padStart(2, "0")}-${d.padStart(2, "0")}`;
  };

  if (contractState.docType === "addendum") {
    if (mobileContractSheetKey === "document") {
      body.innerHTML = `
        <div class="mobile-contract-sheet__section">
          <p class="mobile-contract-sheet__hint">Проверьте номер документа и привязку к рамочному договору.</p>
          ${renderMobileContractControl("Номер допсоглашения", "number", "1", { kind: "addendum", value: contractState.addendumFields.number })}
          ${renderMobileContractControl("Город", "city", "Москва", { kind: "addendum", value: contractState.addendumFields.city })}
          ${renderMobileContractControl("Дата допсоглашения", "date", formatContractDate(), { kind: "addendum", value: contractState.addendumFields.date })}
          ${renderMobileContractControl("Номер договора", "contractNumber", "___", { kind: "addendum", value: contractState.addendumFields.contractNumber })}
          ${renderMobileContractControl("Дата договора", "contractDate", formatContractDate(), { kind: "addendum", value: contractState.addendumFields.contractDate })}
        </div>
      `;
      return;
    }

    if (mobileContractSheetKey === "parties") {
      body.innerHTML = `
        <div class="mobile-contract-sheet__section">
          <p class="mobile-contract-sheet__hint">Эти данные можно подтянуть из рамочного договора и поправить вручную.</p>
          ${renderMobileContractControl("Заказчик", "clientName", "ФИО или ООО «... »", { kind: "addendum", value: contractState.addendumFields.clientName })}
          ${renderMobileContractControl("Исполнитель", "contractorName", "ИП Фамилия И.О.", { kind: "addendum", value: contractState.addendumFields.contractorName })}
        </div>
      `;
      return;
    }

    if (mobileContractSheetKey === "task") {
      body.innerHTML = `
        <div class="mobile-contract-sheet__section">
          <p class="mobile-contract-sheet__hint">Здесь фиксируем саму задачу, сроки и деньги — это потом попадёт в документ.</p>
          ${renderMobileContractControl("Предмет задания", "taskDescription", "Разработка логотипа", { kind: "addendum", value: contractState.addendumFields.taskDescription })}
          ${renderMobileContractControl("Срок выполнения", "deadline", "до 30.06.2026 или 14 дней", { kind: "addendum", value: contractState.addendumFields.deadline })}
          ${renderMobileContractControl("Стоимость", "price", "50 000 ₽", { kind: "addendum", value: contractState.addendumFields.price })}
          ${renderMobileContractControl("Порядок оплаты", "paymentTerms", DEFAULT_ADDENDUM_PAYMENT_TERMS, { kind: "addendum", value: contractState.addendumFields.paymentTerms })}
          ${renderAddendumPaymentTermChips(contractState.addendumFields.paymentTerms)}
        </div>
      `;
      return;
    }

    if (mobileContractSheetKey === "requirements") {
      body.innerHTML = `
        <div class="mobile-contract-sheet__section">
          <p class="mobile-contract-sheet__hint">Это и есть конкретизация задачи: формат, объём, материалы и важные ограничения.</p>
          ${renderMobileContractControl("Техническое задание", "taskRequirements", "Формат, размеры, стиль, конкретные элементы...", {
            kind: "addendum",
            value: contractState.addendumFields.taskRequirements,
            multiline: true,
            rows: 9,
          })}
          ${renderMobileContractControl("Бесплатных правок на этап", "revisionsPerStage", "2", { kind: "addendum", value: contractState.addendumFields.revisionsPerStage })}
          ${renderMobileContractControl("Тариф доп. правок, ₽/ч", "revisionRate", "2 500", { kind: "addendum", value: contractState.addendumFields.revisionRate })}
        </div>
      `;
      return;
    }
  } else {
    if (mobileContractSheetKey === "contractor") {
      body.innerHTML = `
        <div class="mobile-contract-sheet__section">
          <p class="mobile-contract-sheet__hint">Данные подставляются из профиля, но здесь их можно быстро поправить перед выгрузкой.</p>
          ${renderMobileContractControl("ФИО / название", "contractorName", "Исполнитель")}
          ${renderMobileContractControl("ИНН", "contractorInn", "771234567890")}
          ${renderMobileContractControl("Реквизиты оплаты", "bank", "банк / карта / счёт")}
          ${renderMobileContractControl("Час доп. работы", "hourly", "2 500")}
        </div>
      `;
      return;
    }

    if (mobileContractSheetKey === "document") {
      body.innerHTML = `
        <div class="mobile-contract-sheet__section">
          <p class="mobile-contract-sheet__hint">Номер, город и дата автоматически подставятся в шапку договора.</p>
          ${renderMobileContractControl("Номер", "number", "1")}
          ${renderMobileContractControl("Город", "city", "Москва")}
          ${renderMobileContractControl("Дата", "date", "«__» ________ 2026 г.")}
        </div>
      `;
      return;
    }

    if (mobileContractSheetKey === "client") {
      body.innerHTML = `
        <div class="mobile-contract-sheet__section">
          <button class="mobile-contract-sheet__import-toggle" type="button" data-action="toggle-mobile-client-import">
            Вставить ответ клиента
          </button>
          ${mobileContractClientImportOpen ? `
            <div class="mobile-contract-sheet__import-box">
              <pre class="client-request-preview" data-client-request-text>Привет! Для подготовки договора пришлите, пожалуйста, одним сообщением:

ФИО / название компании:
ИНН:
Ответственное лицо:
Телефон / Telegram:
Юридический или почтовый адрес:

Для выставления счёта также нужны:
Расчётный счёт:
БИК банка:
Название банка:

Если вы самозанятый или физлицо — реквизиты счёта всё равно нужны для оплаты.</pre>
              <button class="button button--ghost button--wide" type="button" data-action="copy-client-request">Скопировать запрос</button>
              <textarea class="client-reply-textarea" data-client-reply-input rows="5" placeholder="Вставьте ответ клиента — разложу данные по полям автоматически.">${escapeHtml(mobileContractClientReplyDraft)}</textarea>
              <label class="mobile-contract-sheet__toggle mobile-contract-sheet__toggle--compact">
                <input type="checkbox" data-client-pd-ack>
                <span>Подтверждаю, что вправе использовать данные клиента в документе</span>
              </label>
              <button class="button button--primary button--wide" type="button" data-action="parse-client-reply">Заполнить из ответа</button>
              <p class="client-reply-status" data-client-reply-status>Принимаю свободный текст: ФИО, ИНН, телефон, email, Telegram, адрес.</p>
            </div>
          ` : ""}
          ${renderMobileContractControl("ФИО / название", "clientName", "ООО «Ромашка»")}
          ${renderMobileContractControl("ИНН", "clientInn", "10 или 12 цифр")}
          ${renderMobileContractControl("Адрес", "clientAddress", "юридический / почтовый адрес")}
          ${renderMobileContractControl("Ответственное лицо", "responsible", "ФИО, должность")}
          ${renderMobileContractControl("Контакты", "responsibleContact", "телефон / telegram")}
        </div>
      `;
      return;
    }

    if (mobileContractSheetKey === "terms") {
      body.innerHTML = `
        <div class="mobile-contract-sheet__section">
          <p class="mobile-contract-sheet__hint">Здесь настраиваются срок и базовые условия. Текст пунктов можно потом править уже в самом документе.</p>
          ${renderMobileContractControl(contractState.templateKey === "design" ? "Действует до" : "Срок работы, дней", "days", contractState.templateKey === "design" ? "31.12.2026" : "30")}
          <label class="mobile-contract-sheet__toggle">
            <input type="checkbox" data-action="toggle-contract-option" data-option="vacation" ${vacationOn ? "checked" : ""}>
            <span>Добавить плановый перерыв</span>
          </label>
          ${vacationOn ? `
            <div class="mobile-contract-sheet__dates">
              <label class="mobile-contract-sheet__field">
                <span>С</span>
                <input type="date" data-vacation-field="vacationFrom" value="${toDateInputValue(contractState.fields.vacationFrom)}">
              </label>
              <label class="mobile-contract-sheet__field">
                <span>По</span>
                <input type="date" data-vacation-field="vacationTo" value="${toDateInputValue(contractState.fields.vacationTo)}">
              </label>
            </div>
          ` : ""}
        </div>
      `;
      return;
    }
  }

  body.innerHTML = `
    <div class="mobile-contract-sheet__section">
      <p class="mobile-contract-sheet__hint">Подпись опциональна. Если загрузите её один раз, можно вставлять в PDF автоматически.</p>
      <div class="signature-preview" data-signature-preview></div>
      <div class="signature-actions">
        <button class="button button--ghost button--wide" type="button" data-action="upload-signature">Загрузить подпись</button>
        <button class="button button--ghost button--wide" type="button" data-action="delete-signature">Удалить</button>
      </div>
      <label class="mobile-contract-sheet__toggle">
        <input type="checkbox" data-signature-pdf-toggle>
        <span>Включить подпись в PDF</span>
      </label>
      <p class="signature-legal-note">Подпись используется только как изображение в документах и не является электронной подписью.</p>
    </div>
  `;
}

function renderMobileContractUI({ forceSheet = false } = {}) {
  if (isRenderingMobileContractUI) return;
  isRenderingMobileContractUI = true;

  const workspace = document.querySelector(".contract-workspace");
  const flow = document.querySelector("[data-mobile-contract-flow]");
  const stepsNode = document.querySelector("[data-mobile-contract-steps]");
  const sheet = document.querySelector("[data-mobile-contract-sheet]");
  const backButton = document.querySelector(".mobile-contract-back");
  const actionBar = document.querySelector(".mobile-contract-actions");
  const undoButton = document.querySelector("[data-action='undo-contract-delete']");
  const titleNode = document.querySelector("[data-mobile-contract-title]");
  const progressFill = document.querySelector("[data-mobile-contract-progress-fill]");
  const progressLabel = document.querySelector("[data-mobile-contract-progress-label]");
  const cta = document.querySelector(".mobile-contract-cta");
  const canUseMobileFlow = Boolean(
    workspace &&
    state.view === "contract" &&
    contractState.mode === "fill" &&
    isMobileContractUI()
  );

  if (workspace) {
    workspace.dataset.mobileDoc = mobileContractDocVisible ? "doc" : "steps";
  }

  if (!canUseMobileFlow) {
    if (flow) flow.hidden = true;
    if (sheet) {
      sheet.hidden = true;
      sheet.setAttribute("aria-hidden", "true");
    }
    if (backButton) backButton.hidden = true;
    if (actionBar) actionBar.hidden = true;
    document.body.classList.remove("mobile-contract-sheet-open");
    isRenderingMobileContractUI = false;
    return;
  }

  renderContractTemplateStrip();

  if (flow) flow.hidden = mobileContractDocVisible;
  if (backButton) backButton.hidden = !mobileContractDocVisible;
  if (actionBar) actionBar.hidden = !mobileContractDocVisible;

  const steps = getMobileContractSteps();
  const requiredSteps = steps.filter((step) => step.required);
  const completedRequiredSteps = requiredSteps.filter((step) => getMobileContractStepState(step).requiredComplete).length;
  const progressRatio = requiredSteps.length ? completedRequiredSteps / requiredSteps.length : 0;

  if (titleNode) titleNode.textContent = getMobileContractTitle();
  if (progressFill) progressFill.style.width = `${Math.round(progressRatio * 100)}%`;
  if (progressLabel) progressLabel.textContent = `${completedRequiredSteps} из ${requiredSteps.length}`;

  if (stepsNode) {
    stepsNode.innerHTML = steps.map((step) => {
      const stepState = getMobileContractStepState(step);
      const isActive = step.key === mobileContractSheetKey && !mobileContractDocVisible;
      const isOptional = !step.required;
      const isDone = isOptional ? Boolean(contractState.signature.dataUrl) : stepState.requiredComplete;
      const icon = isDone ? "✓" : (isOptional ? "∿" : "✎");
      const subtitle = getMobileContractStepSubtitle(step, stepState);
      return `
        <button class="mobile-contract-step ${isActive ? "is-active" : ""} ${isDone ? "is-complete" : ""}" type="button" data-action="open-mobile-contract-sheet" data-mobile-contract-step="${step.key}">
          <span class="mobile-contract-step__icon" aria-hidden="true">${icon}</span>
          <span class="mobile-contract-step__copy">
            <strong>${escapeHtml(step.title)}</strong>
            <small>${escapeHtml(subtitle)}</small>
          </span>
          <span class="mobile-contract-step__arrow" aria-hidden="true">›</span>
        </button>
      `;
    }).join("");
  }

  if (cta) {
    cta.disabled = false;
    cta.textContent = contractState.docType === "addendum" ? "Показать допсоглашение" : "Показать договор";
  }

  if (undoButton) {
    undoButton.disabled = !lastDeletedContractClause;
  }

  const isSheetOpen = Boolean(mobileContractSheetKey && !mobileContractDocVisible);
  if (sheet) {
    sheet.hidden = !isSheetOpen;
    sheet.setAttribute("aria-hidden", String(!isSheetOpen));
  }
  document.body.classList.toggle("mobile-contract-sheet-open", isSheetOpen);

  if (!isSheetOpen) {
    isRenderingMobileContractUI = false;
    return;
  }

  const currentStep = steps.find((step) => step.key === mobileContractSheetKey);
  const sheetTitleNode = document.querySelector("[data-mobile-contract-sheet-title]");
  if (sheetTitleNode) sheetTitleNode.textContent = currentStep?.title || "Шаг договора";

  document.querySelectorAll(".mobile-contract-sheet__handle").forEach((button) => {
    button.setAttribute("aria-label", isSheetOpen ? "Свернуть панель договора" : "Развернуть панель договора");
  });

  if (forceSheet) mobileContractSheetSignature = "";
  renderMobileContractSheetContent();
  renderSignaturePanel();
  isRenderingMobileContractUI = false;
}

function openMobileContractSheet(key) {
  mobileContractSheetKey = key;
  mobileContractSheetSignature = "";
  renderMobileContractUI({ forceSheet: true });
}

function closeMobileContractSheet() {
  mobileContractSheetKey = "";
  mobileContractSheetSignature = "";
  mobileContractClientImportOpen = false;
  renderMobileContractUI({ forceSheet: true });
}

function showMobileContractDoc() {
  mobileContractDocVisible = true;
  closeMobileContractSheet();
  renderMobileContractUI({ forceSheet: true });
}

function hideMobileContractDoc() {
  mobileContractDocVisible = false;
  closeMobileContractSheet();
  renderMobileContractUI({ forceSheet: true });
}

function renderActiveContractDocument(options = {}) {
  if (contractState.docType === "addendum") {
    renderAddendumDocument();
  } else {
    renderContractDocument();
  }
  renderMobileContractUI(options);
}

function deleteContractClause(key) {
  if (!key) return;
  contractState.hiddenClauses = contractState.hiddenClauses || {};
  if (contractState.hiddenClauses[key]) return;
  contractState.hiddenClauses[key] = true;
  lastDeletedContractClause = key;
  renderActiveContractDocument();
  scheduleContractSave();
}

function undoLastContractClauseDelete() {
  if (!lastDeletedContractClause) return;
  contractState.hiddenClauses = contractState.hiddenClauses || {};
  delete contractState.hiddenClauses[lastDeletedContractClause];
  lastDeletedContractClause = null;
  renderActiveContractDocument();
  scheduleContractSave();
}

function renderContractChooser() {}

// ── Addendum helpers ──────────────────────────────────────────

function addendumField(key, placeholder, tag = "span") {
  const value = contractState.addendumFields[key] || "";
  const fieldClass = `inline-field${["date", "contractDate", "deadline"].includes(key) ? " inline-field--nowrap" : ""}`;
  if (tag === "div") {
    return `<div class="${fieldClass} inline-field--block" contenteditable="true" spellcheck="false" data-addendum-field="${key}" data-placeholder="${escapeHtml(placeholder)}">${escapeHtml(value)}</div>`;
  }
  return `<span class="${fieldClass}" contenteditable="true" spellcheck="false" data-addendum-field="${key}" data-placeholder="${escapeHtml(placeholder)}">${escapeHtml(value)}</span>`;
}

function addendumNote(text) {
  if (!contractState.addendumShowExplanations) return "";
  return `<div class="contract-note">${escapeHtml(text)}</div>`;
}

function renderAddendumPaymentTermChips(activeValue = contractState.addendumFields.paymentTerms) {
  const current = String(activeValue || "").trim();
  return `
    <div class="addendum-payment-chips" role="list" aria-label="Варианты порядка оплаты">
      ${ADDENDUM_PAYMENT_TERMS.map((term) => `
        <button class="addendum-payment-chip ${current === term.value ? "is-active" : ""}" type="button" data-action="set-addendum-payment" data-payment-term-value="${escapeHtml(term.value)}" aria-pressed="${current === term.value ? "true" : "false"}">
          ${escapeHtml(term.label)}
        </button>
      `).join("")}
    </div>
  `;
}

function syncAddendumField(key) {
  document.querySelectorAll(`[data-addendum-field="${key}"]`).forEach((el) => {
    const val = contractState.addendumFields[key] || "";
    if (el.textContent !== val) el.textContent = val;
  });
}

function renderAddendumControls() {
  const container = document.querySelector("[data-addendum-fields]");
  if (!container) return;
  const f = contractState.addendumFields;
  container.innerHTML = `
    <details class="contract-form__group">
      <summary>Реквизиты</summary>
      <label class="contract-control">
        <span>Номер допсоглашения</span>
        <input type="text" autocomplete="off" data-addendum-control="number" value="${escapeHtml(f.number || "")}" placeholder="1">
      </label>
      <label class="contract-control">
        <span>Город</span>
        <input type="text" autocomplete="off" data-addendum-control="city" value="${escapeHtml(f.city || "")}" placeholder="Москва">
      </label>
      <label class="contract-control">
        <span>Дата допсоглашения</span>
        <input type="text" autocomplete="off" data-addendum-control="date" value="${escapeHtml(f.date || "")}" placeholder="${formatContractDate()}">
      </label>
      <label class="contract-control">
        <span>Номер договора</span>
        <input type="text" autocomplete="off" data-addendum-control="contractNumber" value="${escapeHtml(f.contractNumber || "")}" placeholder="___">
      </label>
      <label class="contract-control">
        <span>Дата договора</span>
        <input type="text" autocomplete="off" data-addendum-control="contractDate" value="${escapeHtml(f.contractDate || "")}" placeholder="${formatContractDate()}">
      </label>
    </details>
    <details class="contract-form__group">
      <summary>Стороны</summary>
      <label class="contract-control">
        <span>Заказчик</span>
        <input type="text" autocomplete="off" data-addendum-control="clientName" value="${escapeHtml(f.clientName || "")}" placeholder="ФИО или ООО «...»">
      </label>
      <label class="contract-control">
        <span>Исполнитель</span>
        <input type="text" autocomplete="off" data-addendum-control="contractorName" value="${escapeHtml(f.contractorName || "")}" placeholder="ИП Фамилия И.О.">
      </label>
    </details>
    <details class="contract-form__group">
      <summary>Задача</summary>
      <label class="contract-control">
        <span>Предмет задания</span>
        <input type="text" autocomplete="off" data-addendum-control="taskDescription" value="${escapeHtml(f.taskDescription || "")}" placeholder="Разработка логотипа">
      </label>
      <label class="contract-control">
        <span>Срок выполнения</span>
        <input type="text" autocomplete="off" inputmode="text" data-addendum-control="deadline" value="${escapeHtml(f.deadline || "")}" placeholder="до 30.06.2026 или 14 дней">
      </label>
      <label class="contract-control">
        <span>Стоимость</span>
        <input type="text" autocomplete="off" data-addendum-control="price" value="${escapeHtml(f.price || "")}" placeholder="50 000 ₽">
      </label>
      <label class="contract-control">
        <span>Порядок оплаты</span>
        <input type="text" autocomplete="off" data-addendum-control="paymentTerms" value="${escapeHtml(f.paymentTerms || "")}" placeholder="${escapeHtml(DEFAULT_ADDENDUM_PAYMENT_TERMS)}">
      </label>
      ${renderAddendumPaymentTermChips(f.paymentTerms)}
    </details>
    <details class="contract-form__group">
      <summary>Контактное лицо</summary>
      <label class="contract-control">
        <span>ФИО</span>
        <input type="text" autocomplete="off" data-addendum-control="contactName" value="${escapeHtml(f.contactName || "")}" placeholder="Иванова Анна">
      </label>
      <label class="contract-control">
        <span>Контакты</span>
        <input type="text" autocomplete="off" data-addendum-control="contactInfo" value="${escapeHtml(f.contactInfo || "")}" placeholder="@telegram или телефон">
      </label>
    </details>
    <details class="contract-form__group">
      <summary>Доп. условия</summary>
      <label class="contract-control">
        <span>Бесплатных правок на этап</span>
        <input type="text" autocomplete="off" data-addendum-control="revisionsPerStage" value="${escapeHtml(f.revisionsPerStage ?? "2")}" placeholder="2">
      </label>
      <label class="contract-control">
        <span>Тариф за доп. правки, ₽/ч</span>
        <input type="text" autocomplete="off" data-addendum-control="revisionRate" value="${escapeHtml(f.revisionRate || "")}" placeholder="5 000">
      </label>
      <label class="contract-control contract-control--checkbox">
        <input type="checkbox" data-addendum-control="includeRightsTransfer" ${f.includeRightsTransfer !== false ? "checked" : ""}>
        <span>Передача прав Заказчику</span>
      </label>
    </details>
  `;
  renderAddendumProgress();
  if (!isRenderingMobileContractUI && !(document.activeElement && document.activeElement.closest?.("[data-mobile-contract-sheet]"))) {
    renderMobileContractUI();
  }
}

function renderAddendumModeControls() {
  renderContractModeControls();
}

function getAddendumClauseKey(key) {
  return `addendum-${key}`;
}

function renderAddendumClause(key, body) {
  const clauseKey = getAddendumClauseKey(key);
  if (isContractClauseHidden(clauseKey)) return "";
  return `
    <div class="contract-clause" data-clause-key="${escapeHtml(clauseKey)}">
      ${renderClauseDeleteButton(clauseKey)}
      ${body}
    </div>
  `;
}

function renderAddendumSidebar() {
  const sidebar = document.querySelector("[data-addendum-sidebar]");
  if (!sidebar) return;
  sidebar.innerHTML = `
    <!-- Шаг 1: Данные -->
    <details class="outline-group contract-data-panel outline-group--collapsible" data-addendum-fields-panel>
      <summary class="outline-title outline-title--toggle"><span class="step-badge">1</span>Заполни данные</summary>
      <div class="outline-group-body">
        <p class="contract-data-hint">Данные подтянутся из договора. Проверь и добавь детали задачи.</p>
        <div class="contract-progress" data-addendum-progress></div>
        <div class="contract-required-summary" data-addendum-required-summary></div>
        <div class="contract-form" data-addendum-fields></div>
      </div>
    </details>

    <!-- Шаг 2: ТЗ -->
    <details class="outline-group outline-group--collapsible">
      <summary class="outline-title outline-title--toggle"><span class="step-badge">2</span>Техническое задание</summary>
      <div class="outline-group-body">
        <p class="contract-data-hint">Опишите требования к результату. Это ТЗ, которое будет зафиксировано в документе.</p>
        <textarea class="addendum-tz-textarea" data-addendum-control="taskRequirements" rows="6" placeholder="Формат, размер, стиль, конкретные элементы...">${escapeHtml(contractState.addendumFields.taskRequirements || "")}</textarea>
      </div>
    </details>

    <!-- Шаг 3: Подпись -->
    <details class="outline-group contract-signature-panel outline-group--collapsible" data-signature-panel>
      <summary class="outline-title outline-title--toggle"><span class="step-badge">3</span>Добавь подпись</summary>
      <div class="outline-group-body">
        <p class="contract-data-hint">Сфотографируйте подпись на белом листе — уберём фон и сделаем синей автоматически.</p>
        <div class="signature-preview" data-signature-preview></div>
        <input class="visually-hidden" type="file" accept="image/*" data-signature-file>
        <div class="signature-actions">
          <button class="button button--ghost button--wide" type="button" data-action="upload-signature">Загрузить подпись</button>
          <button class="button button--ghost button--wide" type="button" data-action="delete-signature">Удалить</button>
        </div>
        <label class="contract-control contract-control--checkbox" style="margin-top:10px" data-signature-pdf-label>
          <input type="checkbox" data-signature-pdf-toggle>
          <span>Включить подпись в PDF</span>
        </label>
        <p class="signature-legal-note">Подпись используется только как изображение в документах и не является электронной подписью.</p>
      </div>
    </details>

    <!-- Шаг 4: Плановый перерыв -->
    <details class="outline-group outline-group--utility outline-group--collapsible">
      <summary class="outline-title outline-title--toggle"><span class="step-badge">4</span>Запланируй отпуск</summary>
      <div class="outline-group-body">
        <div class="optional-list" data-contract-options></div>
      </div>
    </details>
  `;
  // Render sub-parts
  renderAddendumControls();
  renderSignaturePanel();
  renderContractOptions();
  renderAddendumModeControls();
}

function renderAddendumDocument() {
  const canvas = document.querySelector("[data-contract-canvas]");
  if (!canvas) return;
  const f = contractState.addendumFields;
  const addendumPartyValue = (key, fallback = "________________") => isAddendumFieldFilled(key)
    ? escapeHtml(String(f[key] || "").trim())
    : fallback;
  const contractValue = (key) => isContractFieldFilled(key)
    ? escapeHtml(String(contractState.fields[key] || "").trim())
    : "";

  const sig = contractState.signature;
  const hasSignature = sig.dataUrl && sig.includeInPdf;
  const signatureHtml = hasSignature
    ? `<img class="signature-image" src="${escapeHtml(sig.dataUrl)}" alt="Подпись исполнителя">`
    : "";

  canvas.innerHTML = `
    <div class="contract-doc addendum-doc" data-section="addendum-top">
      <h1 class="document-title">
        <span class="document-title__kind">Дополнительное соглашение № ${addendumField("number", "___")}</span>
        <span class="document-title__rest">к Договору возмездного оказания услуг № ${addendumField("contractNumber", "___")}</span>
        <span class="document-title__date">от ${addendumField("contractDate", "___")}</span>
      </h1>

      <div class="document-meta">
        <span class="document-meta__city">${addendumField("city", "Москва")}</span>
        <span class="document-meta__date">${addendumField("date", formatContractDate())}</span>
      </div>

      <div class="addendum-parties-table">
        <div class="addendum-party-row">
          <span class="addendum-party-label">Заказчик:</span>
          <span class="addendum-party-value">${addendumField("clientName", "ФИО или наименование организации")}</span>
        </div>
        <div class="addendum-party-row">
          <span class="addendum-party-label">Исполнитель:</span>
          <span class="addendum-party-value">${addendumField("contractorName", "ИП Фамилия И.О.")}</span>
        </div>
      </div>

      <p>Стороны согласовали следующие условия выполнения работ:</p>
    </div>

    <div class="contract-doc addendum-doc" data-section="addendum-task">
      <section class="document-section">
        <h2><span class="section-num">1.</span> Предмет задания</h2>
        ${renderAddendumClause("task-description", `
          <p>Исполнитель обязуется выполнить по заданию Заказчика следующие работы:</p>
          <div class="addendum-tz-block">${addendumField("taskDescription", "Опишите задачу...", "div")}</div>
        `)}
      </section>

      <section class="document-section">
        <h2><span class="section-num">2.</span> Требования к результату работ</h2>
        ${renderAddendumClause("task-requirements", `
          <p>Результат работ должен соответствовать следующим требованиям:</p>
          <div class="addendum-tz-block">${addendumField("taskRequirements", "Форматы, размеры, стиль, конкретные элементы...", "div")}</div>
        `)}
      </section>

      <section class="document-section">
        <h2><span class="section-num">3.</span> Срок выполнения работ</h2>
        ${renderAddendumClause("deadline", `
          <p>Срок выполнения работ составляет: ${addendumField("deadline", "укажите дату или количество дней")}.</p>
        `)}
      </section>

      <section class="document-section">
        <h2><span class="section-num">4.</span> Стоимость работ и порядок оплаты</h2>
        ${renderAddendumClause("payment", `
          <p>Стоимость работ составляет: ${addendumField("price", "сумма в рублях")}.</p>
          <p>Порядок оплаты: ${addendumField("paymentTerms", DEFAULT_ADDENDUM_PAYMENT_TERMS)}.</p>
        `)}
      </section>

      <section class="document-section">
        <h2><span class="section-num">5.</span> Контактное лицо Заказчика</h2>
        ${renderAddendumClause("client-contact", `
          <p>Для согласования результатов работ Заказчик определяет контактное лицо:</p>
          <p>ФИО: ${addendumField("contactName", "__________________________")}</p>
          <p>Контакты: ${addendumField("contactInfo", "______________________")}</p>
        `)}
      </section>

      <section class="document-section">
        <h2><span class="section-num">6.</span> Дополнительные условия</h2>
        ${renderAddendumClause("extra-conditions", `
          ${f.revisionsPerStage ? `<p>Включено до ${addendumField("revisionsPerStage", "2")} итераций бесплатных правок на этап.</p>` : ""}
          ${f.revisionRate ? `<p>В случае дополнительных правок стоимость услуг рассчитывается по тарифу: ${addendumField("revisionRate", "___")} ₽/ч</p>` : ""}
          ${f.includeRightsTransfer !== false ? `<p>Передача прав: все материалы передаются с полными правами использования Заказчику.</p>` : ""}
          ${f.otherConditions ? `<div class="addendum-tz-block">${addendumField("otherConditions", "", "div")}</div>` : ""}
        `)}
      </section>
    </div>

    <div class="contract-doc addendum-doc" data-section="addendum-final">
      <section class="document-section">
        <h2><span class="section-num">7.</span> Заключительные положения</h2>
        ${renderAddendumClause("final", `
          <p>Настоящее Дополнительное соглашение является неотъемлемой частью Договора.</p>
          <p>Во всём, что не урегулировано настоящим Дополнительным соглашением, Стороны руководствуются условиями Договора.</p>
          <p>Настоящее Дополнительное соглашение вступает в силу с момента его подписания Сторонами.</p>
        `)}
      </section>
    </div>

    <div class="contract-doc addendum-doc" data-section="addendum-signatures">
      <section class="document-section">
        <h2><span class="section-num">8.</span> Реквизиты и подписи сторон</h2>
        ${renderAddendumClause("signatures", `
          <div class="requisites-grid">
            <div class="requisite-card">
              <p><strong>Заказчик</strong></p>
              <p>${addendumPartyValue("clientName")}</p>
              ${contractValue("clientInn") ? `<p>ИНН: ${contractValue("clientInn")}</p>` : ""}
              ${contractState.fields.clientAddress ? `<p>Адрес: ${escapeHtml(contractState.fields.clientAddress)}</p>` : ""}
              <div class="signature-slot signature-slot--empty">
                <span class="sign-line">Подпись</span>
              </div>
            </div>
            <div class="requisite-card">
              <p><strong>Исполнитель</strong></p>
              <p>${addendumPartyValue("contractorName")}</p>
              ${contractValue("contractorInn") ? `<p>ИНН: ${contractValue("contractorInn")}</p>` : ""}
              ${state.profile?.contractorAddress ? `<p>${escapeHtml(state.profile.contractorAddress)}</p>` : ""}
              ${state.profile?.contractorContact ? `<p>${escapeHtml(state.profile.contractorContact)}</p>` : ""}
              <div class="signature-slot">
                ${signatureHtml}
                <span class="sign-line">Подпись</span>
              </div>
            </div>
          </div>
        `)}
      </section>
    </div>
  `;
}

// ── End Addendum helpers ──────────────────────────────────────

function renderContractWorkspace() {
  const workspace = document.querySelector(".contract-workspace");
  if (workspace) {
    workspace.dataset.mode = "fill";
    workspace.dataset.docType = contractState.docType || "contract";
    workspace.dataset.mobileDoc = mobileContractDocVisible ? "doc" : "steps";
  }
  applyContractAutoDefaults();
  mobileContractSheetSignature = "";

  renderContractTemplateStrip();

  if (contractState.docType === "addendum") {
    syncAddendumFromContract();
    renderAddendumSidebar();
    renderAddendumDocument();
    renderContractOutline();
    renderMobileContractUI({ forceSheet: true });
    updateAutosaveStatus("Сохранено");
    requestAnimationFrame(() => {
      setupContractScrollSpy();
      syncContractOutlineVisibility();
    });
    return;
  }

  renderContractControls();
  renderContractModeControls();
  renderSignaturePanel();
  renderContractOptions();
  renderContractDocument();
  renderContractOutline();
  renderContractProgress();
  renderMobileContractUI({ forceSheet: true });
  updateAutosaveStatus("Сохранено");
  requestAnimationFrame(() => {
    setupContractScrollSpy();
    syncContractOutlineVisibility();
  });
}

function renderContractDocument() {
  const canvas = document.querySelector("[data-contract-canvas]");
  if (!canvas) return;
  const template = getContractTemplate();
  const isDesign = contractState.templateKey === "design";
  const isSiteFull = contractState.templateKey === "site_full";
  const isSiteDesign = contractState.templateKey === "site_design";
  const isSite = isSiteFull || isSiteDesign;

  const defaultStages = isSiteDesign
    ? ["Прототип", "Дизайн-концепция", "Дизайн сайта"]
    : ["Прототип", "Дизайн-концепция", "Дизайн сайта", "Верстка на Tilda"];
  const stageNames = state.stages.length ? state.stages.map((s) => s.title) : defaultStages;
  contractSectionCounter = 0;

  // ── Subject section differs by template ──────────────────────
  const subjectClauses = isSiteDesign ? [
    {
      title: "Предмет договора",
      note: "Это договор только на дизайн — без верстки. Результат — файлы в Figma или PDF. Верстку клиент делает сам или привлекает разработчика.",
      body: `<p>Исполнитель обязуется разработать дизайн сайта Заказчика в соответствии с Техническим заданием (Приложение № 1 к Договору), а Заказчик обязуется принять и оплатить выполненные работы.</p>`,
    },
    {
      title: "Передача результата",
      body: `<p>Результат работы — итоговые файлы дизайна в Figma и/или в формате PDF. Состав и порядок передачи материалов определяются Техническим заданием. После передачи Стороны подписывают акт о выполнении работ.</p>`,
    },
  ] : isDesign ? [
    {
      title: "Предмет договора",
      note: "Рамочный договор нужен для того, чтобы зафиксировать начало сотрудничества. Сам договор определяет общий порядок работы на протяжении срока его действия. Укажите все виды работ, которые вы реально готовы выполнять — всё лишнее лучше исключить.",
      body: `<p>В соответствии с условиями настоящего Договора Исполнитель обязуется по заданию Заказчика оказывать услуги (выполнять работы) по созданию объектов графического дизайна: логотипы, фирменную айдентику, иллюстрации, иконографику, шаблоны презентаций, брендбуки, рекламные материалы, макеты для печати и иные визуальные материалы (далее — «Результаты работ»), а Заказчик обязуется оплатить их в порядке и на условиях, предусмотренных настоящим Договором.</p>`,
    },
    {
      title: "Конкретизация задач",
      note: "Конкретные проекты и задачи оформляются отдельными дополнительными соглашениями. Таких допсоглашений может быть любое количество — столько, сколько проектов возникнет в течение срока действия договора.",
      body: `<p>Конкретный состав, объём, технические требования к Результатам работ, сроки выполнения и стоимость отдельных заданий определяются Сторонами в дополнительных соглашениях, заключаемых в письменной форме и являющихся неотъемлемой частью настоящего Договора. В случае коллизии между условиями дополнительного соглашения и положениями настоящего Договора приоритет имеют условия соответствующего дополнительного соглашения.</p>`,
    },
    {
      title: "Место и самостоятельность исполнения",
      note: "Этот пункт фиксирует: Исполнитель работает самостоятельно и не является штатным сотрудником. Он сам решает, когда, где и как выполнять задачи — главное выполнить в срок.",
      body: `<p>Исполнитель самостоятельно определяет место, время, способы и порядок выполнения работ. Заказчик вправе контролировать только результат и соблюдение согласованных сроков выполнения работ.</p>`,
    },
  ] : [
    {
      title: "Предмет договора",
      note: "Это договор на конкретный сайт. Все детали — в Техническом задании (Приложение № 1). Без подписанного ТЗ работа не начинается.",
      body: `<p>Исполнитель обязуется разработать сайт Заказчика в соответствии с Техническим заданием (Приложение № 1 к Договору), а Заказчик обязуется принять и оплатить выполненные работы в полном объёме.</p>`,
    },
    {
      title: "Передача результата",
      body: `<p>Состав, форматы и способ передачи итоговых материалов определяются Техническим заданием. После передачи Стороны подписывают акт о выполнении работ.</p>`,
    },
    {
      title: "Ограничения платформы Tilda",
      note: "Оставляем только если сайт действительно собирается на Tilda.",
      body: `<p>Сайт создаётся с использованием платформы Tilda. Заказчик подтверждает ознакомление с пользовательским соглашением Платформы и принимает её технические ограничения. После завершения работы Исполнитель передаёт сайт на аккаунт Заказчика.</p>`,
    },
  ];

  // ── Stages section differs by template ───────────────────────
  const stagesClauses = isSiteDesign ? [
    {
      title: "Этапы создания дизайна",
      note: "Дизайн разрабатывается поэтапно. Каждый этап согласовывается до перехода к следующему.",
      body: `<p>Работы выполняются поэтапно:</p><ol>${stageNames.map((n) => `<li>${escapeHtml(n)}</li>`).join("")}</ol>`,
    },
    {
      title: "Согласование этапов",
      body: `<p>После завершения каждого этапа Исполнитель направляет результат Заказчику. Заказчик согласовывает этап или направляет единый перечень замечаний в течение 5 календарных дней.</p>`,
    },
    {
      title: "Место и порядок работы",
      body: `<p>Работы выполняются в месте нахождения Исполнителя. Исполнитель самостоятельно определяет порядок и последовательность работы с учётом согласованных сроков.</p>`,
    },
  ] : isDesign ? [
    {
      title: "Привлечение субисполнителей",
      note: "Исполнитель вправе работать с командой или фрилансерами без отдельного согласия Заказчика.",
      body: `<p>Исполнитель вправе без уведомления и согласия Заказчика привлекать к исполнению обязательств по настоящему Договору третьих лиц. В указанном случае Исполнитель несёт перед Заказчиком солидарную ответственность за действия (бездействие) привлечённых лиц.</p>`,
    },
    {
      title: "Контроль исполнения Заказчиком",
      body: `<p>Заказчик вправе в любое время запрашивать у Исполнителя сведения о ходе выполнения работ, не вмешиваясь при этом в производственную деятельность Исполнителя. Исполнитель обязан предоставить запрошенную информацию в течение 1 (одного) рабочего дня с даты получения соответствующего запроса.</p>`,
    },
    {
      title: "Предоставление материалов и исходных данных",
      note: "Если клиент не прислал материалы — счёт времени не идёт. Без материалов работа не начинается.",
      body: `<p>В случае если надлежащее исполнение соответствующего задания требует предоставления Заказчиком исходных материалов (текстов, изображений, элементов фирменного стиля, технических данных и иных), Заказчик обязан передать такие материалы Исполнителю в течение 3 (трёх) календарных дней с даты подписания соответствующего дополнительного соглашения, если иной срок в нём не предусмотрен.</p>`,
    },
    {
      title: "Запрос дополнительных сведений",
      body: `<p>В процессе выполнения работ Исполнитель вправе направлять Заказчику запросы о предоставлении дополнительных материалов, сведений и разъяснений без ограничений по количеству обращений. Заказчик обязан предоставить запрошенное в течение 3 (трёх) рабочих дней с даты получения соответствующего запроса, если Стороны не согласовали иной срок в письменной форме.</p>`,
    },
    {
      title: "Ответственное лицо Заказчика",
      note: "Нужен для того, чтобы у проекта было одно ответственное лицо со стороны Заказчика. Контактное лицо можно указать в допсоглашении, техническом задании или сообщить отдельно при запуске проекта.",
      body: `<p>Заказчик определяет лицо, уполномоченное взаимодействовать с Исполнителем по вопросам выполнения работ, согласования результатов и предоставления обратной связи: ${contractField("responsible", "ФИО, должность")}, контакты: ${contractField("responsibleContact", "телефон / telegram")}.</p>`,
    },
  ] : [
    {
      title: "Этапы создания сайта",
      note: "Сайт создаётся поэтапно. Каждый промежуточный результат согласовывается с заказчиком до перехода к следующему этапу.",
      body: `<p>Работы выполняются поэтапно:</p><ol>${stageNames.map((n) => `<li>${escapeHtml(n)}</li>`).join("")}</ol>`,
    },
    {
      title: "Согласование этапов",
      body: `<p>После завершения каждого этапа Исполнитель направляет результат Заказчику. Заказчик согласовывает этап или направляет единый перечень замечаний в течение 5 календарных дней.</p>`,
    },
    {
      title: "Место и порядок работы",
      body: `<p>Работы выполняются в месте нахождения Исполнителя. Исполнитель самостоятельно определяет последовательность работ с учётом согласованных сроков.</p>`,
    },
  ];

  // ── Terms section differs by template ────────────────────────
  const termsClauses = isSite ? [
    {
      title: "Срок выполнения",
      note: "Отсчёт начинается с даты подписания договора И получения от клиента всех материалов для работы.",
      body: `<p>Исполнитель выполняет работы в течение ${contractField("days", "___")} календарных дней с даты подписания Договора и получения материалов, необходимых для работы.</p>`,
    },
    {
      title: "Продление сроков",
      note: "Этот пункт защищает, когда сроки горят из-за задержки материалов или долгого согласования на стороне клиента.",
      body: `<p>Срок автоматически продлевается на период согласования промежуточных результатов, устранения замечаний и ожидания материалов от Заказчика.</p>`,
    },
    {
      title: "Временная нетрудоспособность",
      body: `<p>Исполнитель освобождается от ответственности за нарушение сроков при временной нетрудоспособности, препятствующей выполнению работ, подтверждённой документом врача.</p>`,
    },
  ] : isDesign ? [
    {
      title: "Период заключения дополнительных соглашений",
      note: "Это не срок выполнения работ, а срок, в течение которого можно подписывать новые задания. Работы, начатые до окончания этого периода, могут завершаться и после него.",
      body: `<p>Стороны вправе заключать дополнительные соглашения, предусматривающие выполнение отдельных заданий в рамках настоящего Договора, в срок до ${contractField("days", "__.__.__")} включительно (далее — «Период согласования»).</p>`,
    },
    {
      title: "Продление Периода согласования",
      body: `<p>Период согласования может быть продлён по взаимному письменному соглашению Сторон, оформленному в виде дополнительного соглашения к настоящему Договору.</p>`,
    },
    {
      title: "Срок действия Договора",
      note: "Срок действия может выходить за рамки периода: новые допсоглашения подписывать нельзя, но уже принятые задания продолжают исполняться.",
      body: `<p>Договор вступает в силу с даты подписания последней из Сторон и действует до полного исполнения обязательств по всем заключённым дополнительным соглашениям.</p>`,
    },
    {
      title: "Сроки выполнения работ. Автоматическое продление",
      note: "Защита от ситуации, когда сроки горят из-за задержек на стороне клиента.",
      body: `<p>Сроки оказания услуг (выполнения работ) по каждому заданию устанавливаются в соответствующем дополнительном соглашении. Указанные сроки подлежат автоматическому продлению на количество календарных дней:</p>
      <p>— в течение которых осуществлялось согласование Заказчиком промежуточных и (или) окончательных результатов работ;</p>
      <p>— устранения Исполнителем замечаний и (или) выполнения дополнительных доработок по требованию Заказчика;</p>
      <p>— ожидания Исполнителем материалов, информации и (или) исходных данных, необходимых для выполнения работ, — со стороны Заказчика.</p>`,
    },
    {
      title: "Приостановление при непредоставлении материалов",
      body: `<p>Если период ожидания материалов от Заказчика превышает 20 (двадцать) календарных дней, Исполнитель вправе приостановить исполнение соответствующего допсоглашения и/или увеличить сроки на период фактического ожидания.</p>`,
    },
    {
      optionalKey: "vacation",
      title: "Плановый перерыв",
      note: "Запланированный отпуск. Лучше зафиксировать даты заранее, чтобы не было неожиданностей.",
      body: `<p>Оказание услуг приостанавливается на период с ${contractField("vacationFrom", "__.__.____")} по ${contractField("vacationTo", "__.__.____")} включительно. Сроки, наступающие в этот период, переносятся на первый рабочий день после его окончания.</p>`,
    },
  ] : [
    {
      title: "Срок выполнения",
      note: "Отсчёт начинается с даты подписания договора И получения от клиента всех материалов, необходимых для работы.",
      body: `<p>Исполнитель выполняет работы в течение ${contractField("days", "___")} календарных дней с даты подписания Договора и получения материалов, необходимых для работы.</p>`,
    },
    {
      title: "Продление сроков",
      note: "Этот пункт защищает от ситуации, когда сроки горят из-за задержки материалов или долгого согласования на стороне клиента.",
      body: `<p>Срок автоматически продлевается на период согласования промежуточных результатов, устранения замечаний и ожидания материалов от Заказчика.</p>`,
    },
    {
      title: "Временная нетрудоспособность",
      body: `<p>Исполнитель освобождается от ответственности за нарушение сроков при временной нетрудоспособности, препятствующей выполнению работ, подтверждённой документом врача.</p>`,
    },
  ];

  // ── Payment section differs by template ──────────────────────
  const paymentClauses = isSite ? [
    {
      title: "Стоимость и порядок оплаты",
      note: "Стандартная схема — предоплата 50% при подписании договора, оставшиеся 50% после подписания акта.",
      body: `<p>Стоимость работ и порядок оплаты фиксируются в Смете (Приложение № 2). Если иное не согласовано: предоплата 50% при подписании Договора, оставшиеся 50% — в течение 3 дней после подписания акта о выполнении работ.</p>`,
    },
    {
      title: "Реквизиты исполнителя",
      body: `<p>Оплата производится по реквизитам Исполнителя: ${contractField("bank", "банк / карта / счёт")}.</p>`,
    },
    {
      title: "Дополнительные работы",
      body: `<p>Работы сверх Технического задания выполняются только после письменного согласования и составления дополнения к Смете. Ставка за час дополнительной работы: ${contractField("hourly", "2 500")} ₽.</p>`,
    },
  ] : isDesign ? [
    {
      title: "Авансовый платёж",
      note: "Порядок оплаты можно переопределить в каждом допсоглашении — например, установить 100% предоплату.",
      body: `<p>Если иное не предусмотрено допсоглашением, Заказчик обязан перечислить авансовый платёж в размере 50% от согласованной стоимости работ в течение 3 (трёх) календарных дней с даты подписания допсоглашения. Обязательство Исполнителя приступить к работе возникает с момента получения аванса в полном объёме.</p>`,
    },
    {
      title: "Окончательный расчёт",
      body: `<p>Оставшиеся 50% стоимости выплачиваются Заказчиком в течение 3 (трёх) календарных дней с даты подписания Акта об оказании услуг (выполнении работ), если иное не предусмотрено допсоглашением.</p>`,
    },
    {
      title: "Форма расчётов",
      body: `<p>Расчёты по настоящему Договору осуществляются в безналичной форме посредством перечисления денежных средств на банковский счёт Исполнителя или перевода на банковскую карту Исполнителя по реквизитам: ${contractField("bank", "банк / карта / счёт")}, если Стороны письменно не согласовали иное.</p>`,
    },
  ] : [
    {
      title: "Стоимость и порядок оплаты",
      note: "Стандартная схема — предоплата 50% при подписании договора, оставшиеся 50% после подписания акта. Можно изменить в смете или допсоглашении.",
      body: `<p>Стоимость работ и порядок оплаты фиксируются в Смете (Приложение № 2). Если иное не согласовано: предоплата 50% при подписании Договора, оставшиеся 50% — в течение 3 дней после подписания акта о выполнении работ.</p>`,
    },
    {
      title: "Реквизиты исполнителя",
      body: `<p>Оплата производится по реквизитам Исполнителя: ${contractField("bank", "банк / карта / счёт")}.</p>`,
    },
    {
      title: "Дополнительные работы",
      body: `<p>Работы сверх Технического задания выполняются только после письменного согласования и составления дополнения к Смете. Ставка за час дополнительной работы: ${contractField("hourly", "2 500")} ₽.</p>`,
    },
  ];

  const contractTitleRest = template.title.replace(/^Договор\s*/i, "").trim();
  const docHeader = `
    <nav class="document-section-nav document-section-nav--inline" data-contract-outline aria-label="Навигация по разделам договора"></nav>
    <h1 class="document-title">
      <span class="document-title__kind">Договор</span>
      <span class="document-title__rest">${escapeHtml(contractTitleRest)} № ${contractField("number", "___")}</span>
    </h1>
    <div class="document-meta">
      <span class="document-meta__city">${contractField("city", "Город")}</span>
      <span class="document-meta__date">${contractField("date", "дата")}</span>
    </div>
    ${contractNote("Серые пояснения помогают быстро проверить смысл пунктов. В PDF для клиента попадёт только текст договора. Отключить можно тумблером «Пояснения» в панели под документом.")}
  `;

  function renderSignaturesSection() {
    return renderDocumentSection("signatures", "Подписи", [
      {
        title: "Реквизиты и подписи сторон",
        note: "",
        body: `
          <div class="requisites-grid">
            <div class="requisite-card">
              <p><strong>Заказчик</strong></p>
              <p>${contractField("clientName", "ФИО / название")}</p>
              <p>ИНН: ${contractField("clientInn", "__________")}</p>
              <p>Адрес: ${contractField("clientAddress", "юридический / почтовый адрес")}</p>
              <div class="signature-slot signature-slot--empty">
                <span class="sign-line">Подпись</span>
              </div>
            </div>
            <div class="requisite-card">
              <p><strong>Исполнитель</strong></p>
              <p>${contractField("contractorName", "ФИО / название")}</p>
              <p>ИНН: ${contractField("contractorInn", "__________")}</p>
              ${state.profile.contractorAddress ? `<p>${escapeHtml(state.profile.contractorAddress)}</p>` : ""}
              ${state.profile.contractorContact ? `<p>${escapeHtml(state.profile.contractorContact)}</p>` : ""}
              <div class="signature-slot">
                ${contractState.signature.dataUrl && contractState.signature.includeInPdf ? `<img class="signature-image" src="${escapeHtml(contractState.signature.dataUrl)}" alt="Подпись исполнителя">` : ""}
                <span class="sign-line">Подпись</span>
              </div>
            </div>
          </div>
        `,
      },
    ]);
  }

  if (isDesign) {
    canvas.innerHTML = docHeader + `
      ${renderDocumentSection("parties", "Стороны", [
        {
          title: "Участники договора",
          note: "Укажите точное ФИО или юридическое название — так договор однозначно связывается с конкретными людьми или организациями.",
          body: `<p>${contractField("clientName", "Заказчик")}, именуемый(ая) в дальнейшем <strong>Заказчик</strong>, и ${contractField("contractorName", "Исполнитель")}, именуемый(ая) в дальнейшем <strong>Исполнитель</strong>, совместно именуемые Стороны, заключили настоящий Договор о нижеследующем.</p>`,
        },
      ])}

      ${renderDocumentSection("subject", "Предмет", subjectClauses)}

      ${renderDocumentSection("workflow", "Порядок работы", stagesClauses)}

      ${renderDocumentSection("terms", "Сроки", termsClauses)}

      ${renderDocumentSection("payment", "Оплата", paymentClauses)}

      ${renderDocumentSection("rights", "Права на РИД", [
        {
          title: "Отчуждение исключительного права",
          note: "Права переходят только после оплаты И подписания Акта. Даже если работа выполнена, но не оплачена — Заказчик не вправе использовать результаты.",
          body: `<p>Исключительное право на Результаты работ, являющиеся объектами авторского права или иными результатами интеллектуальной деятельности (ст. 1225 ГК РФ), созданными Исполнителем в ходе исполнения настоящего Договора, в полном объёме переходит к Заказчику с момента надлежащей уплаты Заказчиком итогового вознаграждения и подписания Сторонами Акта (в зависимости от того, что наступит позднее). С указанного момента Заказчик вправе использовать Результаты работ любыми способами, в любых целях, на любой территории, без ограничений по сроку и без выплаты Исполнителю дополнительного вознаграждения.</p>`,
        },
        {
          title: "Вознаграждение за передачу прав",
          body: `<p>Вознаграждение за отчуждение исключительных прав на Результаты работ включено в общую стоимость услуг (работ) по каждому дополнительному соглашению. Выплата Исполнителю какого-либо дополнительного вознаграждения в связи с передачей прав не предусмотрена.</p>`,
        },
        {
          title: "Использование Результатов в деятельности третьих лиц",
          body: `<p>Заказчик вправе использовать переданные ему Результаты работ как в рамках собственной предпринимательской деятельности, так и при оказании услуг (выполнении работ) третьим лицам в рамках заключаемых с ними гражданско-правовых договоров.</p>`,
        },
        {
          title: "Право автора на имя",
          note: "Право на авторство неотчуждаемо (ст. 1228 ГК РФ): нельзя присвоить авторство другому лицу. Но имя Исполнителя при использовании указывать не обязательно.",
          body: `<p>Заказчик вправе использовать Результаты работ без указания имени Исполнителя. При этом право Исполнителя на авторство является неотчуждаемым; Заказчик не вправе присваивать авторство Результатов работ иным лицам, в том числе себе.</p>`,
        },
      ])}

      ${renderDocumentSection("approval", "Согласование", [
        {
          title: "Согласование результатов работ",
          body: `<p>Исполнитель направляет Заказчику результаты выполненных работ посредством каналов связи, предусмотренных разделом заключительных положений настоящего Договора.</p>`,
        },
        {
          title: "Срок предоставления обратной связи",
          note: "Молчание лучше не считать автоматическим согласием без напоминания. Рекомендуем всегда добиваться явного «ок».",
          body: `<p>В течение 7 (семи) календарных дней с даты получения результатов работ Заказчик обязан направить Исполнителю либо подтверждение их согласования, либо мотивированный перечень замечаний с описанием необходимых доработок. Сообщения, направленные через согласованные Сторонами каналы связи (электронная почта, мессенджеры), имеют юридическую силу и признаются надлежащим способом взаимодействия Сторон.</p>
          <p>Если в течение указанного срока Исполнитель не получил ни подтверждения согласования, ни мотивированного перечня замечаний, Исполнитель вправе направить Заказчику повторное уведомление. При отсутствии ответа в течение 3 (трёх) рабочих дней после такого уведомления соответствующий этап может считаться согласованным, если иное не установлено обязательными требованиями закона или письменным соглашением Сторон.</p>`,
        },
        {
          title: "Порядок предоставления замечаний и доработок",
          note: "Один сводный список — один раунд. Количество раундов определяется в допсоглашении, по умолчанию — 2.",
          body: `<p>Замечания и предложения по доработке результатов работ направляются Заказчиком единым консолидированным сообщением через согласованные каналы связи.</p>
          <p>Количество раундов доработок определяется соответствующим Дополнительным соглашением. Если иное не предусмотрено Дополнительным соглашением, в стоимость работ включены 2 (два) раунда доработок. Дополнительные доработки сверх установленного количества выполняются за отдельную плату по согласованию Сторон.</p>`,
        },
        {
          title: "Критерии оценки результатов работ",
          body: `<p>Результаты работ считаются выполненными надлежащим образом, если соответствуют требованиям, согласованным Сторонами в Дополнительном соглашении, техническом задании и иных письменных договорённостях по проекту.</p>
          <p>Изменение предпочтений Заказчика или возникновение новых требований, не предусмотренных ранее согласованными условиями, не является основанием для признания результатов работ выполненными ненадлежащим образом.</p>`,
        },
      ])}

      ${renderDocumentSection("acceptance", "Приёмка", [
        {
          title: "Передача окончательных результатов и Акта",
          body: `<p>По завершении выполнения работ (оказания услуг) в рамках соответствующего дополнительного соглашения Исполнитель направляет Заказчику окончательные Результаты работ и подписанный со своей стороны Акт об оказании услуг (выполнении работ). Акт составляется в 2 (двух) экземплярах при бумажном документообороте или направляется в одном экземпляре (скан-копия) — при электронном.</p>`,
        },
        {
          title: "Порядок и сроки приёмки Заказчиком",
          note: "Услуги считаются принятыми при наступлении первого из трёх событий.",
          body: `<p>В течение 7 (семи) рабочих дней с даты получения окончательных Результатов работ и Акта Заказчик обязан по своему усмотрению:</p>
          <p>— подписать Акт и направить подписанный экземпляр Исполнителю; либо</p>
          <p>— направить Исполнителю письменное подтверждение принятия Результатов работ посредством согласованных каналов связи; либо</p>
          <p>— произвести окончательный расчёт по соответствующему заданию в полном объёме.</p>
          <p>Услуги считаются принятыми надлежащим образом с наступлением первого из указанных событий.</p>`,
        },
        {
          title: "Порядок предъявления замечаний при окончательной приёмке",
          body: `<p>При обнаружении недостатков в Результатах работ Заказчик в срок, установленный настоящим разделом, направляет Исполнителю мотивированный перечень замечаний. Устранение выявленных недостатков осуществляется в порядке, предусмотренном разделом согласования. По устранении недостатков Исполнитель повторно направляет Заказчику Результаты работ и оформляет новый Акт.</p>`,
        },
        {
          title: "Последствия непредъявления замечаний",
          note: "Безопаснее сначала направить напоминание и только потом считать результаты принятыми.",
          body: `<p>Если в течение 7 (семи) рабочих дней Исполнитель не получил ни подписанного Акта, ни мотивированного отказа от его подписания, Исполнитель вправе направить Заказчику повторное уведомление о необходимости подписать Акт или представить мотивированные замечания. При отсутствии ответа в течение 3 (трёх) рабочих дней после такого уведомления Результаты работ могут считаться принятыми без замечаний, если иное не установлено обязательными требованиями закона или письменным соглашением Сторон.</p>`,
        },
      ])}

      ${renderDocumentSection("liability", "Ответственность", [
        {
          title: "Ответственность за нарушение сроков исполнения",
          body: `<p>В случае нарушения Исполнителем сроков оказания услуг (выполнения работ) по вине Исполнителя Заказчик вправе потребовать уплаты неустойки (пени) в размере 0,1% (одной десятой процента) от стоимости соответствующего задания за каждый календарный день просрочки, но в совокупности не более суммы вознаграждения по данному дополнительному соглашению.</p>`,
        },
        {
          title: "Ответственность за нарушение сроков оплаты",
          body: `<p>В случае нарушения Заказчиком сроков выплаты вознаграждения Исполнитель вправе потребовать уплаты неустойки (пени) в размере 0,1% (одной десятой процента) от суммы просроченной задолженности за каждый календарный день просрочки, но в совокупности не более суммы вознаграждения по соответствующему дополнительному соглашению.</p>`,
        },
        {
          title: "Расчёты при одностороннем отказе Заказчика",
          note: "Справедливый порядок: Заказчик оплачивает только уже выполненную часть, остаток аванса возвращается.",
          body: `<p>В случае одностороннего отказа Заказчика от исполнения настоящего Договора (соответствующего Дополнительного соглашения) Заказчик обязан оплатить Исполнителю стоимость фактически выполненных на момент отказа работ. Суммы, ранее перечисленные Заказчиком в качестве аванса, засчитываются в счёт оплаты фактически выполненных работ. В случае если размер аванса превышает стоимость фактически выполненных работ, разница подлежит возврату Заказчику. Если стоимость фактически выполненных работ превышает размер полученного аванса, Заказчик обязан оплатить образовавшуюся разницу.</p>`,
        },
        {
          title: "Ограничение ответственности Исполнителя",
          note: "Ограничивает размер возможных претензий стоимостью конкретного проекта — защита от несоразмерных требований.",
          body: `<p>Совокупная ответственность Исполнителя перед Заказчиком в рамках каждого отдельного дополнительного соглашения ограничена размером фактически полученного Исполнителем вознаграждения по данному соглашению. Исполнитель не несёт ответственности за косвенные убытки Заказчика (упущенную выгоду, репутационный ущерб и т.п.).</p>`,
        },
        {
          title: "Гарантии Заказчика в отношении прав третьих лиц",
          note: "Защищает Исполнителя, когда Заказчик предоставляет чужие логотипы, фото, шрифты. Исполнитель не обязан проверять юридическую чистоту предоставленных материалов.",
          body: `<p>В случае если выполнение задания предполагает использование коммерческих обозначений, товарных знаков, логотипов или иных объектов интеллектуальной собственности третьих лиц, Заказчик гарантирует наличие у него всех необходимых прав и разрешений на такое использование. Заказчик самостоятельно несёт ответственность перед соответствующими правообладателями и освобождает Исполнителя от любых претензий, связанных с нарушением прав третьих лиц.</p>`,
        },
        {
          title: "Маркировка рекламы",
          body: `<p>Если создаваемый объект содержит рекламную информацию и предназначен для распространения в сети Интернет, Стороны до размещения определяют свои роли по Федеральному закону от 13.03.2006 № 38-ФЗ «О рекламе» и правилам учёта интернет-рекламы. Заказчик предоставляет сведения, необходимые для маркировки и передачи данных, а каждая из Сторон выполняет обязанности в пределах своей фактической роли рекламодателя, рекламораспространителя, оператора рекламной системы или иного участника размещения.</p>`,
        },
      ])}

      ${renderDocumentSection("termination", "Изменение и расторжение", [
        {
          title: "Изменение Договора по соглашению Сторон",
          body: `<p>Настоящий Договор может быть изменён или дополнен по взаимному соглашению Сторон. Любые изменения и дополнения к Договору действительны исключительно при условии их оформления в письменной форме и подписания уполномоченными представителями обеих Сторон.</p>`,
        },
        {
          title: "Односторонний отказ от исполнения Договора",
          body: `<p>Каждая из Сторон вправе в одностороннем внесудебном порядке отказаться от исполнения настоящего Договора (соответствующего дополнительного соглашения) в случае неисполнения или ненадлежащего исполнения другой Стороной принятых обязательств, направив письменное уведомление не менее чем за 7 (семь) календарных дней до предполагаемой даты прекращения Договора. Исполнитель дополнительно вправе отказаться от исполнения Договора, если Заказчик систематически уклоняется от согласования Результатов работ, предъявляет требования, выходящие за рамки технического задания, или грубо нарушает предусмотренные Договором сроки. Каждая из Сторон вправе также расторгнуть Договор при возникновении неустранимых разногласий относительно концепции или Результатов работ (ст. 782 ГК РФ).</p>`,
        },
        {
          title: "Исполнение принятых заданий при расторжении",
          body: `<p>При прекращении Договора по любому основанию Исполнитель обязан завершить выполнение заданий, принятых в работу до даты получения уведомления о расторжении, и передать Заказчику их результаты, если Стороны не договорились об ином в письменной форме.</p>`,
        },
        {
          title: "Взаиморасчёты при досрочном прекращении",
          body: `<p>Взаиморасчёты Сторон при досрочном прекращении Договора осуществляются на основании соглашения Сторон исходя из стоимости фактически выполненных работ (оказанных услуг). Фактически оказанные Услуги (выполненные работы) подлежат оплате Заказчиком в любом случае, если их результаты переданы и приняты в порядке, предусмотренном Договором.</p>`,
        },
        {
          title: "Удержание результатов работ при неоплате",
          note: "Не передавайте финальные файлы до получения оплаты.",
          body: `<p>Окончательные Результаты работ передаются Заказчику после получения Исполнителем полного вознаграждения за фактически выполненные работы, если иное не согласовано Сторонами письменно. При просрочке оплаты Исполнитель вправе приостановить передачу финальных файлов и исключительных прав до погашения задолженности. Исполнитель не вправе передавать неоплаченные материалы третьим лицам; публичная демонстрация таких материалов допускается только при отсутствии конфиденциальной информации и персональных данных и если это не запрещено Договором или отдельным письменным соглашением Сторон.</p>`,
        },
      ])}

      ${renderDocumentSection("final", "Заключительные положения", [
        {
          title: "Порядок обмена документами и информацией",
          note: "Позволяет полностью вести документооборот дистанционно — оригиналы по почте отправлять не нужно.",
          body: `<p>Обмен документами, материалами, замечаниями, уведомлениями и иными сведениями по настоящему Договору осуществляется с использованием адресов электронной почты и (или) аккаунтов в мессенджерах Сторон, указанных в разделе 11. Сообщения и документы, направленные с указанных каналов, считаются направленными от имени соответствующей Стороны. Ни одна из Сторон не вправе ссылаться на несанкционированный доступ третьих лиц к каналам связи как на основание оспаривания факта направления или содержания соответствующих сообщений.</p>`,
        },
        {
          title: "Обмен скан-копиями документов",
          body: `<p>Настоящий Договор, дополнительные соглашения, Акты и иные документы могут подписываться путём обмена скан-копиями документов, оформленных на бумажном носителе и направленных через согласованные электронные каналы связи. Такие скан-копии подтверждают содержание договорённостей и факт направления документа, если позволяют определить отправителя и содержание документа. Признание скан-копий простой электронной подписью или равнозначными документам с собственноручными подписями возможно только при наличии отдельного соглашения Сторон об использовании электронной подписи и соблюдении требований Федерального закона от 06.04.2011 № 63-ФЗ «Об электронной подписи».</p>`,
        },
        {
          title: "Претензионный порядок. Разрешение споров",
          note: "Укажите своё место нахождения (Исполнитель) или место нахождения Заказчика — в зависимости от того, в чьём суде удобнее рассматривать спор.",
          body: `<p>Споры и разногласия, возникающие из настоящего Договора или в связи с ним, разрешаются Сторонами путём переговоров. Сторона, считающая свои права нарушенными, направляет другой Стороне письменную претензию. Срок рассмотрения претензии — 15 (пятнадцать) календарных дней с даты её получения. В случае невозможности урегулирования разногласий в досудебном порядке спор передаётся на рассмотрение компетентного суда по месту нахождения ${contractField("city", "город")}.</p>`,
        },
        {
          title: "Право на демонстрацию Результатов работ",
          note: "По умолчанию — нельзя без согласия. Если хотите свободно показывать работу в портфолио, согласуйте это с Заказчиком отдельно.",
          body: `<p>Исполнитель не вправе без предварительного письменного согласия Заказчика публично демонстрировать Результаты работ, созданные по настоящему Договору, в том числе в портфолио, социальных сетях, рекламных материалах и на профессиональных конкурсах.</p>`,
        },
        {
          title: "Право Исполнителя на упоминание о сотрудничестве",
          body: `<p>Исполнитель вправе размещать наименование и (или) логотип Заказчика в своём портфолио и рекламных материалах в целях информирования третьих лиц о факте состоявшегося сотрудничества, если иное не согласовано Сторонами в письменной форме.</p>`,
        },
        {
          title: "Использование контента по подписке",
          body: `<p>Заказчик уведомлён о том, что Исполнитель вправе использовать в работе графические ресурсы, приобретённые в рамках лицензионных подписок сервисов Freepik, Flaticon и аналогичных платформ. Передача права использования таких ресурсов Заказчику осуществляется в соответствии с условиями лицензионных соглашений соответствующих сервисов. Заказчик подтверждает ознакомление с этими условиями и гарантирует соответствие требованиям, предъявляемым к конечному пользователю.</p>`,
        },
        {
          title: "Материалы, принадлежащие третьим лицам",
          note: "Например: вставили в дизайн брошюры триальный шрифт. Обязательно предупредите Заказчика письменно — нужно купить лицензию. Без предупреждения этот пункт не работает.",
          body: `<p>В случае если при выполнении задания Исполнитель использует фотографии, шрифты, иллюстрации или иные объекты интеллектуальной собственности, принадлежащие третьим лицам и требующие получения отдельного разрешения или уплаты лицензионного вознаграждения, Исполнитель уведомляет об этом Заказчика при передаче Результатов работ. До начала коммерческого использования Результатов работ Заказчик самостоятельно и за свой счёт обязан получить соответствующие разрешения правообладателей либо заменить такие материалы. Ответственность перед правообладателями несёт Заказчик.</p>`,
        },
        {
          title: "Место заключения Договора",
          body: `<p>Местом заключения настоящего Договора Стороны определяют город ${contractField("city", "_______________")} Российской Федерации.</p>`,
        },
      ])}

      ${renderSignaturesSection()}
    `;
  } else {
    canvas.innerHTML = docHeader + `
      ${renderDocumentSection("parties", "Стороны", [
        {
          title: "Участники договора",
          note: "Укажите точное ФИО или юридическое название сторон — так договор однозначно связывается с конкретными людьми или организациями.",
          body: `<p>${contractField("clientName", "Заказчик")}, именуемый(ая) в дальнейшем <strong>Заказчик</strong>, и ${contractField("contractorName", "Исполнитель")}, именуемый(ая) в дальнейшем <strong>Исполнитель</strong>, совместно именуемые Стороны, заключили настоящий Договор о нижеследующем.</p>`,
        },
        {
          title: "Контактное лицо",
          body: `<p>Ответственное лицо Заказчика: ${contractField("responsible", "ФИО, должность")}. Контакты: ${contractField("responsibleContact", "телефон / telegram")}.</p>`,
        },
      ])}

      ${renderDocumentSection("subject", "Предмет", subjectClauses)}

      ${renderDocumentSection("stages", "Этапы", stagesClauses)}

      ${renderDocumentSection("terms", "Сроки", termsClauses)}

      ${renderDocumentSection("payment", "Оплата", paymentClauses)}

      ${renderDocumentSection("rights", "Права", [
        {
          title: "Переход прав",
          body: `<p>Исключительное право на результаты работы переходит к Заказчику после подписания акта и исполнения финансовых условий соответствующего этапа.</p>`,
        },
        {
          title: "Авторство в футере",
          note: "Оставляем, если дизайнер хочет право на видимую ссылку или кредит в проекте.",
          body: `<p>Исполнитель вправе размещать в нижней части страниц Сайта свое имя, логотип и ссылку как создателя Сайта. Удаление или изменение этой подписи согласуется отдельно.</p>`,
        },
        {
          title: "Замена материалов",
          body: `<p>Если в проекте используются временные или сторонние материалы, Заказчик обязан заменить их до начала публичного коммерческого использования, если права на такие материалы не приобретены.</p>`,
        },
        {
          title: "Freepik / Flaticon",
          body: `<p>Заказчик уведомлен, что часть графического контента может использоваться по условиям премиум-подписок Freepik или Flaticon, если это согласовано в проекте.</p>`,
        },
      ])}

      ${renderDocumentSection("revisions", "Правки", [
        {
          title: "Порядок правок",
          note: "Важно просить единый список правок, иначе проект расползается на бесконечные микрозадачи.",
          body: `<p>Заказчик направляет замечания единым перечнем. Несогласованные дополнительные доработки сверх технического задания оплачиваются отдельно.</p>`,
        },
        {
          title: "Молчаливое согласование",
          body: `<p>Если замечания не поступили в течение 5 календарных дней после передачи результата этапа, этап считается выполненным и согласованным без замечаний.</p>`,
        },
      ])}

      ${renderDocumentSection("termination", "Расторжение", [
        {
          title: "Порядок расторжения",
          body: `<p>Стороны вправе расторгнуть Договор по соглашению Сторон или в одностороннем порядке, уведомив другую Сторону не менее чем за 15 календарных дней.</p>`,
        },
        {
          title: "Расчеты при расторжении",
          body: `<p>При расторжении Стороны оформляют акт по фактически выполненным работам, а расчеты производятся на условиях подписанной сметы или дополнительного соглашения.</p>`,
        },
        {
          optionalKey: "ads",
          title: "Маркировка рекламы",
          body: `<p>Если на Сайте размещается рекламная информация, Стороны до размещения определяют свои роли по законодательству о рекламе и правилам учёта интернет-рекламы. Заказчик предоставляет необходимые сведения для маркировки и передачи данных, а каждая из Сторон выполняет обязанности в пределах своей фактической роли при размещении рекламы.</p>`,
        },
      ])}

      ${renderSignaturesSection()}
    `;
  }
  validateContractFields();
}

function scheduleContractSave() {
  updateAutosaveStatus("Сохраняю...");
  clearTimeout(contractSaveTimer);
  contractSaveTimer = setTimeout(() => {
    if (contractState.signature.mode === "saved") saveProfileSignature();
    try {
      localStorage.setItem("designkit.contractDraft", JSON.stringify(contractState));
      updateAutosaveStatus("Сохранено");
    } catch (e) {
      updateAutosaveStatus("⚠ Не удалось сохранить");
      console.error("localStorage quota exceeded:", e);
    }
  }, 500);
}

function updateAutosaveStatus(label, title = "") {
  document.querySelectorAll("[data-autosave-status]").forEach((status) => {
    status.textContent = label;
    if (title) {
      status.title = title;
    } else {
      status.removeAttribute("title");
    }
  });
}

function validateContractFields() {
  const validateInn = (node, value) => {
    const digits = String(value || "").replace(/\D/g, "");
    const isEmptyPlaceholder = !digits.length || /_/.test(String(value || ""));
    const isValid = isEmptyPlaceholder || digits.length === 10 || digits.length === 12;
    node.classList.toggle("is-invalid", !isValid);
  };
  document.querySelectorAll("[data-contract-field='clientInn'], [data-contract-field='contractorInn']").forEach((node) => {
    validateInn(node, node.textContent);
  });
  document.querySelectorAll("[data-contract-control='clientInn'], [data-contract-control='contractorInn']").forEach((node) => {
    const digits = node.value.replace(/\D/g, "");
    const isEmptyPlaceholder = !digits.length || /_/.test(node.value);
    const isValid = isEmptyPlaceholder || digits.length === 10 || digits.length === 12;
    node.classList.toggle("is-invalid", !isValid);
  });
}

function setupContractScrollSpy() {
  const links = [...document.querySelectorAll("[data-scroll-section]")];
  const sections = [...document.querySelectorAll("[data-contract-section]")];
  if (contractScrollSpyCleanup) { contractScrollSpyCleanup(); contractScrollSpyCleanup = null; }
  if (!links.length || !sections.length) return;

  let activeId = null;
  let ticking = false;

  const update = () => {
    ticking = false;
    if (typeof state !== "undefined" && state.view !== "contract") return;
    // Линия чтения ~28% высоты экрана (под фиксированной шапкой). Активен последний
    // раздел, чья верхняя граница уже прошла эту линию (разделы идут по порядку).
    const line = Math.max(150, window.innerHeight * 0.28);
    let currentId = sections[0].id;
    for (const section of sections) {
      if (section.getBoundingClientRect().top - line <= 0) currentId = section.id;
      else break;
    }
    if (currentId !== activeId) {
      activeId = currentId;
      links.forEach((link) => link.classList.toggle("is-active", link.dataset.scrollSection === currentId));
    }
  };

  const onScroll = () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } };
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll, { passive: true });
  update();

  contractScrollSpyCleanup = () => {
    window.removeEventListener("scroll", onScroll);
    window.removeEventListener("resize", onScroll);
  };
}

function printContract(onDone) {
  const source = document.querySelector("[data-contract-canvas]");
  if (!source) return;
  const clone = source.cloneNode(true);
  clone.querySelectorAll(".document-section-nav, .optional-section__actions, .contract-clause-delete, .document-note, .document-coverline").forEach((node) => node.remove());
  clone.querySelectorAll("[contenteditable]").forEach((node) => node.removeAttribute("contenteditable"));

  const isAddendum = contractState.docType === "addendum";
  const pdfDownloadGoal = isAddendum ? "" : "contract_pdf_download";
  const f = contractState.addendumFields;
  const template = getContractTemplate();
  const today = new Date().toLocaleDateString("ru-RU", { day: "numeric", month: "long", year: "numeric" });

  const docLabel = isAddendum
    ? `Доп. соглашение № ${escapeHtml(f.number || "___")} к Договору № ${escapeHtml(f.contractNumber || "___")}`
    : `${escapeHtml(template.title)} № ${escapeHtml(contractState.fields.number || "___")}`;
  const clientName = isAddendum ? f.clientName : contractState.fields.clientName;
  const contractorName = isAddendum ? f.contractorName : contractState.fields.contractorName;
  const dateStr = isAddendum ? f.date : contractState.fields.date;
  const filename = generatePdfFileName({
    documentType: isAddendum ? "addendum" : "contract",
    projectName: isAddendum ? f.taskDescription : (contractState.fields.taskDescription || template.title),
    date: new Date(),
  });

  // Strip interactive styling from clone: inline-field borders, highlights
  clone.querySelectorAll(".inline-field, .inline-field--block").forEach(el => {
    el.style.borderBottom = "none";
    el.style.background = "none";
    el.style.padding = "0";
    el.style.borderRadius = "0";
  });
  // Strip document-note (explanations) if shown
  clone.querySelectorAll(".document-note").forEach(el => el.remove());

  const sheet = document.querySelector("[data-print-sheet]");
  // Clean Word-style PDF — no DesiDoc header, just the document body
  sheet.innerHTML = `
    <style>
      .pdf-clean-body { width: 794px; min-height: 1123px; padding: 64px 76px 108px; background: #fff; color: #111; box-sizing: border-box; font-family: "Onest", Arial, sans-serif; font-size: 13px; line-height: 1.5; text-rendering: geometricPrecision; }
      .pdf-clean-body, .pdf-clean-body * { box-sizing: border-box; hyphens: auto; overflow-wrap: break-word; word-break: normal; }
      .pdf-clean-body p { line-height: 1.5; }
      .pdf-clean-body .inline-field, .pdf-clean-body .inline-field--block { max-width: 100%; white-space: normal !important; border: none !important; background: none !important; padding: 0 !important; border-radius: 0 !important; }
      .pdf-clean-body .document-note { display: none !important; }
      .pdf-clean-body .optional-section__actions, .pdf-clean-body .contract-clause-delete { display: none !important; }
      .pdf-clean-body [contenteditable] { outline: none !important; }
      .pdf-clean-body .contract-signature-img, .pdf-clean-body .signature-image { max-width: 160px; max-height: 60px; }
      .pdf-clean-body .document-title { text-align: center; margin: 0 0 18px; line-height: 1.12; }
      .pdf-clean-body .document-title__kind, .pdf-clean-body .document-title__rest, .pdf-clean-body .document-title__date { display: block; }
      .pdf-clean-body .document-title__kind, .pdf-clean-body .document-title__date, .pdf-clean-body .inline-field--nowrap { white-space: nowrap !important; }
      .pdf-clean-body .document-meta { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); margin-bottom: 24px; color: #555; }
      .pdf-clean-body .document-meta__date { text-align: right; }
      .pdf-clean-body .document-section { display: grid; grid-template-columns: 150px minmax(0, 1fr); column-gap: 28px; row-gap: 8px; align-items: start; padding: 20px 0; border-top: 1px solid #ddd; break-inside: avoid; }
      .pdf-clean-body .document-section:first-of-type { border-top: 0; }
      .pdf-clean-body .document-section h2 { grid-column: 1; margin: 0; font-size: 13px; line-height: 1.24; letter-spacing: -0.02em; }
      .pdf-clean-body .document-section > :not(h2) { grid-column: 2; min-width: 0; }
      .pdf-clean-body .contract-clause { padding-right: 0; }
      .pdf-clean-body .contract-clause + .contract-clause { padding-top: 14px; border-top: 1px solid #e2e2e2; }
      .pdf-clean-body .requisites-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 16px; margin-top: 18px; }
      .pdf-clean-body .requisite-card { min-height: 178px; padding: 16px; border: 1px solid #ddd; border-radius: 18px; background: #f7f7f7; display: flex; flex-direction: column; }
      .pdf-clean-body .signature-slot { min-height: 86px; margin-top: auto; display: flex; flex-direction: column; justify-content: flex-end; }
      .pdf-clean-body .signature-slot--empty { min-height: 92px; }
      .pdf-clean-body .sign-line { display: block; margin-top: 0; padding-top: 10px; border-top: 1px solid #aaa; color: #8c8c8c; font-size: 11px; }
    </style>
    <div class="pdf-clean-body">${clone.innerHTML}</div>
  `;

  sheet.setAttribute("aria-hidden", "false");
  sheet.style.cssText = "display:block;position:fixed;left:-9999px;top:0;width:794px;min-height:1123px;z-index:9999;background:#fff;overflow:visible;padding:0;";
  const page = sheet.querySelector(".pdf-clean-body") || sheet.querySelector(".pdf-page");
  const cleanup = () => { sheet.style.cssText = ""; sheet.setAttribute("aria-hidden", "true"); if (onDone) onDone(); };

  if (!window.jspdf?.jsPDF || !page) { window.print(); cleanup(); return; }
  const { jsPDF } = window.jspdf;

  const renderToPdf = (dataUrl) => {
    saveTallPngAsPdf(dataUrl, {
      jsPDF,
      filename,
      onDone: () => {
        cleanup();
        notifyPdfDownloadSuccess(pdfDownloadGoal);
      },
      onError: (err) => {
        cleanup();
        console.warn("Contract PDF fallback failed:", err);
        notifyPdfDownloadFailure("Не удалось безопасно собрать PDF документа. Текстовый рендер недоступен, а запасной растровый вариант превысил безопасный лимит страниц.");
      },
    });
  };

  // Pre-resolve base64 signature images → canvas so SVG foreignObject can paint them
  const sigImgs = page.querySelectorAll(".signature-image, .contract-signature-img");
  const sigPromises = Array.from(sigImgs).map(img => new Promise(resolve => {
    if (!img.src || !img.src.startsWith("data:")) { resolve(); return; }
    const tmp = new Image();
    tmp.onload = () => {
      const c = document.createElement("canvas");
      c.width = tmp.naturalWidth; c.height = tmp.naturalHeight;
      c.style.maxWidth = "160px"; c.style.maxHeight = "60px";
      c.style.display = "block";
      c.getContext("2d").drawImage(tmp, 0, 0);
      img.replaceWith(c);
      resolve();
    };
    tmp.onerror = resolve;
    tmp.src = img.src;
  }));

  const rasterFallback = () => {
    if (window.htmlToImage) {
      window.htmlToImage.toPng(page, { pixelRatio: getPdfRenderScale(), backgroundColor: "#ffffff", cacheBust: true })
        .then(renderToPdf)
        .catch(err => { console.error("html-to-image error:", err); window.print(); cleanup(); });
      return;
    }
    if (window.html2canvas) {
      window.html2canvas(page, { scale: getPdfRenderScale(), useCORS: true, backgroundColor: "#ffffff", logging: false })
        .then(canvas => renderToPdf(canvas.toDataURL("image/png")))
        .catch(err => { console.error("html2canvas error:", err); window.print(); cleanup(); });
      return;
    }
    window.print(); cleanup();
  };

  // Векторный (текстовый) PDF: выделяемый текст, без пикселей при зуме.
  Promise.all(sigPromises)
    .then(() => loadPdfFonts())
    .then((fonts) => {
      renderContractPdf(page, {
        jsPDF, fonts, filename,
        docType: isAddendum ? "addendum" : "contract",
        onDone: () => { cleanup(); notifyPdfDownloadSuccess(pdfDownloadGoal); },
      });
    })
    .catch((err) => { console.warn("Векторный PDF не удался, растровый запасной вариант:", err); rasterFallback(); });
}

function clearDragClasses() {
  document.querySelectorAll(".stage-card").forEach((card) => {
    card.classList.remove("is-dragging", "is-drop-target");
  });
}

function bindEvents() {
  document.addEventListener("click", (event) => {
    const routeTarget = event.target.closest("[data-route]");
    if (routeTarget) {
      event.preventDefault();
      const nextRoute = routeTarget.dataset.route;
      if (nextRoute === "contract" && state.view === "home") {
        contractState.mode = "fill";
        contractState.docType = "contract";
        mobileContractDocVisible = false;
        mobileContractSheetKey = "";
      }
      routeTo(nextRoute);
      syncRouteHash(state.view);
      return;
    }

    const projectTarget = event.target.closest("[data-project]");
    if (projectTarget) {
      state.projectKey = projectTarget.dataset.project;
      syncEstimateNameWithProjectChange();
      renderProjectOptions();
      if (state.generated) generateEstimate(true);
      return;
    }

    const scrollTarget = event.target.closest("[data-scroll-section]");
    if (scrollTarget) {
      document.getElementById(scrollTarget.dataset.scrollSection)?.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    const rateTarget = event.target.closest("[data-rate-mode]");
    if (rateTarget) {
      state.rateMode = rateTarget.dataset.rateMode;
      renderRate();
      if (state.generated) {
        if (state.rateMode === "market") refreshStageHours(state.marketGrade);
        state.rate = getActiveRate();
        renderEstimate();
      }
      return;
    }

    const gradeTarget = event.target.closest("[data-market-grade]");
    if (gradeTarget) {
      state.marketGrade = gradeTarget.dataset.marketGrade;
      renderRate();
      if (state.generated && state.rateMode === "market") {
        refreshStageHours(state.marketGrade);
        state.rate = getActiveRate();
        renderEstimate();
      }
      return;
    }

    const taxModeTarget = event.target.closest("[data-tax-mode]");
    if (taxModeTarget) {
      state.taxMode = taxModeTarget.dataset.taxMode;
      renderRate();
      if (state.generated) updateTotalsOnly();
      return;
    }

    const clientTypeTarget = event.target.closest("[data-client-type]");
    if (clientTypeTarget) {
      state.clientType = clientTypeTarget.dataset.clientType;
      renderRate();
      if (state.generated) updateTotalsOnly();
      return;
    }

    const currencyTarget = event.target.closest("[data-currency]");
    if (currencyTarget) {
      state.currency = CURRENCIES[currencyTarget.dataset.currency] ? currencyTarget.dataset.currency : DEFAULT_CURRENCY;
      localStorage.setItem("designkit.currency", state.currency);
      renderRate();
      if (state.generated) updateTotalsOnly();
      return;
    }

    const actionTarget = event.target.closest("[data-action]");
    if (!actionTarget) return;

    const action = actionTarget.dataset.action;
    if (action === "toggle-theme") setTheme(state.theme === "dark" ? "light" : "dark");
    if (action === "scroll-contract-top") {
      document.querySelector("[data-contract-canvas]")?.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    if (action === "go-back") {
      const prev = state.navHistory.pop() || "home";
      routeTo(prev, false);
      syncRouteHash(state.view);
      return;
    }
    if (action === "open-mobile-calc-sheet") {
      openMobileCalcSheet(actionTarget.dataset.mobileSheet || "project");
      return;
    }
    if (action === "toggle-mobile-calc-sheet") {
      if (mobileCalcSheetKey) {
        closeMobileCalcSheet();
      } else {
        openMobileCalcSheet(actionTarget.dataset.mobileSheet || "project");
      }
      return;
    }
    if (action === "close-mobile-calc-sheet") {
      closeMobileCalcSheet();
      return;
    }
    if (action === "apply-mobile-calc-sheet") {
      closeMobileCalcSheet();
      return;
    }
    if (action === "open-brief-ai") {
      openBriefAiModal();
      return;
    }
    if (action === "analyze-brief") {
      runBriefAnalysis();
      return;
    }
    if (action === "open-mobile-contract-sheet") {
      openMobileContractSheet(actionTarget.dataset.mobileContractStep || "document");
      return;
    }
    if (action === "toggle-mobile-contract-sheet") {
      if (mobileContractSheetKey) {
        closeMobileContractSheet();
      } else {
        openMobileContractSheet("document");
      }
      return;
    }
    if (action === "close-mobile-contract-sheet") {
      closeMobileContractSheet();
      return;
    }
    if (action === "apply-mobile-contract-sheet") {
      mobileContractSheetSignature = "";
      renderMobileContractUI({ forceSheet: true });
      return;
    }
    if (action === "toggle-mobile-client-import") {
      mobileContractClientImportOpen = !mobileContractClientImportOpen;
      mobileContractSheetSignature = "";
      renderMobileContractUI({ forceSheet: true });
      return;
    }
    if (action === "show-mobile-contract-doc") {
      showMobileContractDoc();
      return;
    }
    if (action === "hide-mobile-contract-doc") {
      hideMobileContractDoc();
      return;
    }
    if (action === "reset-contract-data") {
      if (!confirm("Сбросить все данные договора и допсоглашения? Это действие нельзя отменить.")) return;
      resetContractDocuments();
      return;
    }
    if (action === "delete-contract-clause") {
      deleteContractClause(actionTarget.dataset.clauseKey);
      return;
    }
    if (action === "undo-contract-delete") {
      undoLastContractClauseDelete();
      return;
    }
    if (action === "generate-estimate") {
      closeMobileCalcSheet();
      generateEstimate(true);
      return;
    }
    if (action === "regenerate-estimate") generateEstimate(true);
    if (action === "reset-estimate") {
      resetEstimate();
      return;
    }
    if (action === "add-stage") addStage();
    if (action === "remove-stage") {
      state.stages.splice(Number(actionTarget.dataset.index), 1);
      renderEstimate();
    }
    if (action === "adjust-stage-hours") {
      const index = Number(actionTarget.dataset.index);
      const delta = Number(actionTarget.dataset.delta || 0);
      const stage = state.stages[index];
      if (!stage || !delta) return;
      stage.hours = Math.max(0, Number(stage.hours || 0) + delta);
      stage.manuallyEditedHours = true;
      updateTotalsOnly();
      const input = document.querySelector(`[data-stage-field="hours"][data-index="${index}"]`);
      if (input) input.value = stage.hours;
      return;
    }
    if (action === "add-expense") {
      const titleInput = document.querySelector('[data-input="expenseTitle"]');
      const amountInput = document.querySelector('[data-input="expenseAmount"]');
      const title = titleInput.value.trim();
      const amount = Number(amountInput.value || 0);
      if (!title || amount <= 0) return;
      state.expenses.push({ title, amount });
      titleInput.value = "";
      amountInput.value = "";
      renderEstimate();
    }
    if (action === "remove-expense") {
      state.expenses.splice(Number(actionTarget.dataset.index), 1);
      renderEstimate();
    }
    if (action === "save-estimate") saveEstimate();
    if (action === "open-export") openExport();
    if (action === "open-export-settings") openExport(true);
    if (action === "open-profile") openProfileModal();
    if (action === "save-profile") saveProfile();
    if (action === "accept-cookies") {
      acceptCookies();
      return;
    }
    if (action === "start-feedback-survey") {
      startFeedbackSurvey();
      return;
    }
    if (action === "snooze-feedback-survey") {
      snoozeFeedbackPrompt();
      return;
    }
    if (action === "open-privacy") document.querySelector("[data-privacy-modal]").showModal();
    if (action === "toggle-export-urgent") {
      state.mods.has("urgent") ? state.mods.delete("urgent") : state.mods.add("urgent");
      renderExportOptions();
      if (state.generated) updateTotalsOnly();
    }
    if (action === "print-estimate") printEstimate();
    if (action === "set-contract-template") {
      const key = actionTarget.dataset.template;
      if (CONTRACT_TEMPLATES[key]) {
        contractState.templateKey = key;
        renderContractWorkspace();
        scheduleContractSave();
      }
    }
    if (action === "reset-all-data") {
      if (!confirm("Сбросить все данные договора и допсоглашения? Это действие нельзя отменить.")) return;
      resetContractDocuments();
      return;
    }
    if (action === "show-contract-doc") {
      const keepMobileDocVisible = mobileContractDocVisible && isMobileContractUI();
      contractState.docType = "contract";
      mobileContractDocVisible = keepMobileDocVisible;
      mobileContractSheetKey = "";
      scheduleContractSave();
      renderContractWorkspace();
    }
    if (action === "show-addendum-doc") {
      const keepMobileDocVisible = mobileContractDocVisible && isMobileContractUI();
      syncAddendumFromContract();
      contractState.docType = "addendum";
      contractState.mode = "fill";
      mobileContractDocVisible = keepMobileDocVisible;
      mobileContractSheetKey = "";
      scheduleContractSave();
      renderContractWorkspace();
    }
    if (action === "set-addendum-payment") {
      contractState.addendumFields.paymentTerms = actionTarget.dataset.paymentTermValue || DEFAULT_ADDENDUM_PAYMENT_TERMS;
      renderAddendumControls();
      renderAddendumDocument();
      renderAddendumProgress();
      renderMobileContractUI({ forceSheet: true });
      scheduleContractSave();
      return;
    }
    if (action === "upload-signature") {
      document.querySelector("[data-signature-file]")?.click();
    }
    if (action === "delete-signature") {
      contractState.signature.dataUrl = "";
      contractState.signature.includeInPdf = false;
      saveProfileSignature();
      renderContractWorkspace();
      scheduleContractSave();
    }
    if (action === "set-signature-mode") {
      contractState.signature.mode = actionTarget.dataset.signatureModeValue || "once";
      if (contractState.signature.mode === "saved") saveProfileSignature();
      renderSignaturePanel();
      scheduleContractSave();
    }
    if (action === "toggle-signature-pdf") { /* handled via change event on checkbox */ }
    if (action === "toggle-contract-option") {
      const key = actionTarget.dataset.option;
      contractState.optional[key] = !contractState.optional[key];
      renderContractWorkspace();
      scheduleContractSave();
    }
    if (action === "duplicate-contract-section") {
      flashButton(`[data-option="${actionTarget.dataset.option}"]`, "Дубль");
    }
    if (action === "duplicate-contract") {
      localStorage.setItem(`designkit.contractDraft.${Date.now()}`, JSON.stringify(contractState));
      updateAutosaveStatus("Дубликат сохранён");
    }
    if (action === "archive-contract") {
      localStorage.setItem(`designkit.contractArchive.${Date.now()}`, JSON.stringify(contractState));
      updateAutosaveStatus("В архиве");
    }
    if (action === "print-contract") {
      const btn = actionTarget;
      if (btn.disabled) return;
      if (!ensureCurrentDocumentReadyForPdf()) return;
      if (!confirm(`${CONTRACT_PDF_DISCLAIMER}\n\nПродолжить скачивание PDF?`)) return;
      btn.disabled = true;
      btn.dataset.originalText = btn.textContent;
      btn.textContent = "Готовлю PDF…";
      printContract(() => {
        btn.disabled = false;
        btn.textContent = btn.dataset.originalText || "Скачать PDF";
      });
    }
    if (action === "choose-contract-type") {
      const key = actionTarget.dataset.template;
      if (CONTRACT_TEMPLATES[key]) {
        contractState.templateKey = key;
        contractState.mode = "fill";
        mobileContractDocVisible = false;
        mobileContractSheetKey = "";
        scheduleContractSave();
        renderContractWorkspace();
      }
    }
    if (action === "confirm-chooser") {
      const cardType = actionTarget.dataset.cardType;
      if (cardType === "addendum") {
        openAddendumDocument();
      } else if (cardType === "design") {
        contractState.templateKey = "design";
        contractState.mode = "fill";
        mobileContractDocVisible = false;
        mobileContractSheetKey = "";
        scheduleContractSave();
        renderContractWorkspace();
      }
    }
    if (action === "back-to-chooser") {
      contractState.mode = "fill";
      contractState.docType = "contract";
      mobileContractDocVisible = false;
      mobileContractSheetKey = "";
      scheduleContractSave();
      renderContractWorkspace();
    }
    if (action === "create-addendum") {
      openAddendumDocument();
    }
    if (action === "copy-client-request") {
      const text = document.querySelector("[data-client-request-text]")?.textContent || "";
      navigator.clipboard.writeText(text).then(() => {
        flashButton('[data-action="copy-client-request"]', "Скопировано ✓");
        trackMetrikaGoal("client_request_copied");
      });
    }
    if (action === "parse-client-reply") {
      const container = actionTarget.closest(".client-reply-import, .mobile-contract-sheet__import-box");
      const consent = container?.querySelector("[data-client-pd-ack]") || document.querySelector("[data-client-pd-ack]");
      if (consent && !consent.checked) {
        setClientReplyStatus("Подтвердите, что вправе использовать данные клиента в документе.", true);
        consent.focus();
        return;
      }
      const value = container?.querySelector("[data-client-reply-input]")?.value
        || document.querySelector("[data-client-reply-input]")?.value
        || mobileContractClientReplyDraft
        || "";
      if (applyClientReplyText(value)) trackMetrikaGoal("client_data_parsed");
    }
    if (action === "focus-contract-field") {
      focusContractControlField(actionTarget.dataset.field);
    }
    if (action === "focus-addendum-field") {
      focusAddendumControlField(actionTarget.dataset.field);
    }
    if (action === "show-soon") openSoonModal(actionTarget);
  });

  window.addEventListener("scroll", scheduleContractOutlineVisibilitySync, { passive: true });
  window.addEventListener("resize", scheduleContractOutlineVisibilitySync);

  document.addEventListener("input", (event) => {
    const input = event.target;
    if (input.matches("[data-addendum-control]")) {
      const key = input.dataset.addendumControl;
      contractState.addendumFields[key] = input.value;
      renderAddendumDocument();
      renderAddendumProgress();
      if (!input.closest("[data-mobile-contract-sheet]")) renderMobileContractUI();
      scheduleContractSave();
      return;
    }

    if (input.matches("[data-addendum-field]")) {
      const key = input.dataset.addendumField;
      const normalized = normalizeInlineFieldValue(input.textContent, input.dataset.placeholder);
      contractState.addendumFields[key] = normalized;
      if (input.textContent.trim() !== normalized) input.textContent = normalized;
      renderAddendumProgress();
      renderMobileContractUI();
      scheduleContractSave();
      return;
    }

    if (input.matches("[data-contract-control]")) {
      const key = input.dataset.contractControl;
      contractState.fields[key] = input.value.trim();
      renderActiveContractDocument();
      renderContractProgress();
      validateContractFields();
      scheduleContractSave();
      return;
    }

    if (input.matches("[data-contract-field]")) {
      const key = input.dataset.contractField;
      const normalized = normalizeInlineFieldValue(input.textContent, input.dataset.placeholder);
      contractState.fields[key] = normalized;
      if (input.textContent.trim() !== normalized) input.textContent = normalized;
      syncContractControls(key);
      syncContractFieldDom(key, input);
      validateContractFields();
      scheduleContractSave();
      return;
    }

    if (input.matches("[data-contract-clause-body]")) {
      const key = input.dataset.contractClauseBody;
      contractState.textOverrides = contractState.textOverrides || {};
      contractState.textOverrides[key] = input.innerHTML.trim();
      scheduleContractSave();
      return;
    }

    if (input.matches("[data-client-reply-input]")) {
      mobileContractClientReplyDraft = input.value;
      clearTimeout(clientReplyParseTimer);
      clientReplyParseTimer = setTimeout(() => {
        const labels = getParsedClientReplyLabels(parseClientReply(input.value));
        if (labels.length) {
          setClientReplyStatus(`Нашла: ${labels.join(", ")}. Поставьте галочку и нажмите «Заполнить из ответа».`);
        } else {
          setClientReplyStatus("Вставьте ответ клиента — данные попадут в договор только после галочки и кнопки.");
        }
      }, 250);
      return;
    }

    if (input.matches("[data-brief-ai-input]")) {
      state.briefAi.sourceText = input.value;
      return;
    }

    if (input.matches('[data-input="designerRate"]')) {
      state.designerRate = Number(input.value || 0);
      localStorage.setItem("designkit.designerRate", String(state.designerRate));
      renderRate();
      if (state.generated && state.rateMode === "custom") {
        state.rate = getActiveRate();
        updateTotalsOnly();
      }
    }

    if (input.matches('[data-input="monthlyIncome"], [data-input="workDays"], [data-input="billableHours"]')) {
      const key = input.dataset.input;
      state[key] = Number(input.value || 0);
      localStorage.setItem(`designkit.${key}`, String(state[key]));
      renderRate();
      if (state.generated && state.rateMode === "income") {
        state.rate = getActiveRate();
        updateTotalsOnly();
      }
    }

    if (input.matches('[data-input="customTaxRate"]')) {
      state.customTaxRate = Number(input.value || 0);
      localStorage.setItem("designkit.customTaxRate", String(state.customTaxRate));
      renderRate();
      if (state.generated) updateTotalsOnly();
    }

    if (input.matches("[data-estimate-meta]")) {
      const key = input.dataset.estimateMeta;
      if (key === "estimateName") {
        state.estimateMeta.estimateName = normalizeEstimateName(input.value, state.projectKey);
        resizeEstimateNameInput(input);
      }
      persistEstimateMeta();
      return;
    }

    if (input.matches(".stage-description-input")) {
      input.style.height = "auto";
      input.style.height = input.scrollHeight + "px";
    }

    if (input.matches("[data-stage-field]")) {
      const index = Number(input.dataset.index);
      const field = input.dataset.stageField;
      if (!state.stages[index]) return;
      if (field === "hours") {
        state.stages[index].hours = Number(input.value || 0);
        state.stages[index].manuallyEditedHours = true;
      } else {
        state.stages[index][field] = input.value;
      }
      updateTotalsOnly();
    }
  });

  document.addEventListener("change", (event) => {
    const input = event.target;
    if (input.matches("[data-export-hours-toggle]")) {
      state.exportShowHours = !input.checked;
      localStorage.setItem("designkit.exportShowHours", String(state.exportShowHours));
      renderExportOptions();
      trackMetrikaGoal("estimate_pdf_hours_toggled");
      return;
    }
    if (input.matches("[data-export-branding-toggle]")) {
      state.exportHideBranding = input.checked;
      localStorage.setItem("designkit.exportHideBranding", String(state.exportHideBranding));
      renderExportOptions();
      return;
    }
    if (input.matches("[data-signature-pdf-toggle]")) {
      contractState.signature.includeInPdf = input.checked;
      renderContractDocument();
      renderAddendumDocument();
      renderMobileContractUI();
      scheduleContractSave();
      return;
    }
    if (input.matches("[data-addendum-control]") && input.type === "checkbox") {
      const key = input.dataset.addendumControl;
      contractState.addendumFields[key] = input.checked;
      renderAddendumDocument();
      renderMobileContractUI();
      scheduleContractSave();
      return;
    }
    if (input.matches("[data-action='toggle-contract-option']")) {
      const key = input.dataset.option;
      contractState.optional[key] = input.checked;
      renderContractOptions();
      renderActiveContractDocument({ forceSheet: true });
      scheduleContractSave();
      return;
    }
    if (input.matches("[data-vacation-field]")) {
      const fieldKey = input.dataset.vacationField;
      const [y, m, d] = (input.value || "").split("-");
      contractState.fields[fieldKey] = (y && m && d) ? `${d}.${m}.${y}` : "";
      syncContractControls(fieldKey);
      renderContractDocument();
      renderMobileContractUI();
      scheduleContractSave();
      return;
    }
    if (input.matches("[data-contract-explanation-toggle]")) {
      if (contractState.docType === "addendum") {
        contractState.addendumShowExplanations = input.checked;
        renderAddendumDocument();
      } else {
        contractState.showExplanations = input.checked;
        renderContractDocument();
      }
      renderContractModeControls();
      renderAddendumModeControls();
      renderMobileContractUI();
      scheduleContractSave();
      return;
    }

    if (input.matches("[data-signature-file]")) {
      const file = input.files?.[0];
      if (!file || !file.type.startsWith("image/")) return;
      const applySignature = (dataUrl) => {
        contractState.signature.dataUrl = dataUrl;
        contractState.signature.includeInPdf = true;
        if (contractState.signature.mode === "saved") saveProfileSignature();
        renderSignaturePanel();
        renderContractDocument();
        renderAddendumDocument();
        scheduleContractSave();
        trackMetrikaGoal("signature_uploaded");
      };
      processSignatureFile(file).then(applySignature).catch((err) => {
        console.warn("processSignatureFile failed, using raw:", err);
        readFileAsDataUrl(file).then(applySignature);
      });
      input.value = "";
    }
  });

  document.addEventListener("dragstart", (event) => {
    const handle = event.target.closest("[data-drag-stage]");
    if (!handle) return;
    draggedStageIndex = Number(handle.dataset.dragStage);
    const card = handle.closest(".stage-card");
    if (card) card.classList.add("is-dragging");
    if (event.dataTransfer) {
      event.dataTransfer.effectAllowed = "move";
      event.dataTransfer.setData("text/plain", String(draggedStageIndex));
    }
  });

  document.addEventListener("dragover", (event) => {
    const card = event.target.closest(".stage-card");
    if (!card || draggedStageIndex === null) return;
    event.preventDefault();
    document.querySelectorAll(".stage-card.is-drop-target").forEach((item) => item.classList.remove("is-drop-target"));
    card.classList.add("is-drop-target");
  });

  document.addEventListener("drop", (event) => {
    const card = event.target.closest(".stage-card");
    if (!card || draggedStageIndex === null) return;
    event.preventDefault();
    const targetIndex = Number(card.dataset.stageIndex);
    moveStageTo(draggedStageIndex, targetIndex);
    draggedStageIndex = null;
    clearDragClasses();
  });

  document.addEventListener("dragend", () => {
    draggedStageIndex = null;
    clearDragClasses();
  });

  document.addEventListener("keydown", (event) => {
    const routeCard = event.target.closest(".deedoc-card[data-route]");
    if (!routeCard || !["Enter", " "].includes(event.key)) return;
    event.preventDefault();
    if (routeCard.dataset.route === "contract" && state.view === "home") {
      contractState.mode = "fill";
      contractState.docType = "contract";
      mobileContractDocVisible = false;
      mobileContractSheetKey = "";
    }
    routeTo(routeCard.dataset.route);
    syncRouteHash(state.view);
  });

  document.addEventListener("keydown", (event) => {
    const actionCard = event.target.closest(".deedoc-card[data-action]");
    if (!actionCard || !["Enter", " "].includes(event.key)) return;
    event.preventDefault();
    if (actionCard.dataset.action === "show-soon") openSoonModal(actionCard);
  });

  window.addEventListener("hashchange", () => {
    const nextRoute = location.hash.replace("#", "");
    routeTo(["home", "calculator", "contract"].includes(nextRoute) ? nextRoute : "home");
  });
}

const AVATAR_ANIMALS = [
  "🐱","🐶","🐭","🐹","🐰","🦊","🐻","🐼","🐨","🐯",
  "🦁","🐮","🐷","🐸","🐙","🦝","🦦","🦥","🦔","🐺",
  "🦉","🦋","🐧","🐦","🐤","🦜","🐊","🦎","🐢","🐠",
  "🐡","🐟","🦭","🐬","🦈","🐻‍❄️","🐿️","🦔","🦡","🦨"
];

function randomAvatar() {
  const btn = document.querySelector(".deedoc-user__avatar");
  if (!btn) return;
  const stored = sessionStorage.getItem("designkit.avatarEmoji");
  if (stored) { btn.textContent = stored; return; }
  const emoji = AVATAR_ANIMALS[Math.floor(Math.random() * AVATAR_ANIMALS.length)];
  btn.textContent = emoji;
  try { sessionStorage.setItem("designkit.avatarEmoji", emoji); } catch(e) {}
}

function init() {
  randomAvatar();
  setTheme(state.theme);
  renderProjectOptions();
  renderRate();
  renderGreeting();
  syncExportInputs();
  renderContractWorkspace();
  bindEvents();
  bindFeedbackPromptModal();
  bindProfileModalBackdropClose();
  initMetrikaPrivacyGuards();
  initCookieBanner();
  updateEmptyHint();
  const initialRoute = location.hash.replace("#", "");
  routeTo(["calculator", "contract"].includes(initialRoute) ? initialRoute : "home");
  syncRouteHash(state.view, true);
}

init();

// — Card proximity effect (macOS dock style) —
(function initCardProximity() {
  const RADIUS = 320;
  const MAX_SCALE = 0.13;

  function onMove(e) {
    if (state.view !== "home") return;
    document.querySelectorAll(".deedoc-card").forEach(el => {
      const r = el.getBoundingClientRect();
      const cx = r.x + r.width / 2;
      const cy = r.y + r.height / 2;
      const dist = Math.sqrt((e.clientX - cx) ** 2 + (e.clientY - cy) ** 2);
      const t = Math.max(0, 1 - dist / RADIUS);
      el.style.transform = t > 0.01 ? `scale(${(1 + t * MAX_SCALE).toFixed(4)})` : "";
    });
  }

  function onLeave() {
    document.querySelectorAll(".deedoc-card").forEach(el => {
      el.style.transform = "";
    });
  }

  let rafPending = false;
  document.addEventListener("pointermove", (e) => {
    // Эффект только для мыши: на тач pointerleave не срабатывает и
    // scale «залипает», вынося карточку из центра. См. onLeave.
    if (e.pointerType && e.pointerType !== "mouse") return;
    if (rafPending) return;
    rafPending = true;
    requestAnimationFrame(() => { onMove(e); rafPending = false; });
  });
  document.addEventListener("pointerleave", onLeave);
  document.addEventListener("pointercancel", onLeave);
})();

// — Background parallax (multi-layer) —
(function initBgParallax() {
  const home = document.querySelector(".deedoc-home");
  if (!home) return;

  // Speed multipliers per layer: sky slowest, water fastest
  const LAYERS = [
    { selector: '[data-layer="sky"]',       speed: 0.3 },
    { selector: '[data-layer="mountains"]', speed: 0.6 },
    { selector: '[data-layer="water"]',     speed: 1.0 },
  ];

  const MAX  = 12;   // max px shift for the fastest layer
  const LERP = 0.07;

  const layers = LAYERS.map(({ selector, speed }) => {
    const el = home.querySelector(selector);
    return el ? { el, speed, cx: 0, cy: 0 } : null;
  }).filter(Boolean);

  let targetX = 0, targetY = 0;
  let rafId = null;

  function tick() {
    let stillMoving = false;
    layers.forEach(l => {
      const tx = -targetX * l.speed;
      const ty = -targetY * l.speed;
      l.cx += (tx - l.cx) * LERP;
      l.cy += (ty - l.cy) * LERP;
      l.el.style.transform = `translate3d(${l.cx}px,${l.cy}px,0)`;
      if (Math.abs(tx - l.cx) > 0.05 || Math.abs(ty - l.cy) > 0.05) stillMoving = true;
    });
    rafId = stillMoving ? requestAnimationFrame(tick) : null;
  }

  function start() { if (!rafId) rafId = requestAnimationFrame(tick); }

  home.addEventListener("mousemove", e => {
    const r  = home.getBoundingClientRect();
    targetX = (e.clientX - r.left - r.width  / 2) / (r.width  / 2) * MAX;
    targetY = (e.clientY - r.top  - r.height / 2) / (r.height / 2) * MAX;
    start();
  });

  home.addEventListener("mouseleave", () => {
    targetX = 0; targetY = 0;
    start();
  });
}());

/* Hide the top nav (Смета / Мои данные) on scroll down, reveal on scroll up */
(function initNavHideOnScroll() {
  const header = document.querySelector(".deedoc-home__top--global");
  if (!header) return;
  const THRESHOLD = 80; // stay visible near the very top
  const DELTA = 6;      // ignore tiny scroll jitter
  let lastY = window.scrollY || 0;
  let ticking = false;

  function update() {
    ticking = false;
    const y = window.scrollY || 0;
    // Прокрученное состояние: на не-домашних экранах включаем фон под шапкой,
    // чтобы контент не просвечивал сквозь неё и не было «каши».
    header.classList.toggle("is-scrolled", y > 6);
    if (Math.abs(y - lastY) < DELTA) { lastY = y; return; }
    if (y > lastY && y > THRESHOLD) {
      header.classList.add("is-nav-hidden");    // scrolling down
    } else {
      header.classList.remove("is-nav-hidden");  // scrolling up / near top
    }
    lastY = y;
  }

  window.addEventListener("scroll", () => {
    if (!ticking) { ticking = true; requestAnimationFrame(update); }
  }, { passive: true });
}());

/* Mouse-move parallax on the calculator landscape (same feel as the home screen) */
(function initCalcParallax() {
  const MAX = 14;    // max px the background drifts
  const LERP = 0.08; // smoothing
  let targetX = 0, targetY = 0, curX = 0, curY = 0, rafId = null;

  function tick() {
    curX += (targetX - curX) * LERP;
    curY += (targetY - curY) * LERP;
    document.body.style.setProperty("--cv-px", curX.toFixed(2) + "px");
    document.body.style.setProperty("--cv-py", curY.toFixed(2) + "px");
    if (Math.abs(targetX - curX) > 0.05 || Math.abs(targetY - curY) > 0.05) {
      rafId = requestAnimationFrame(tick);
    } else {
      rafId = null;
    }
  }
  function start() { if (!rafId) rafId = requestAnimationFrame(tick); }

  const PARALLAX_VIEWS = ["calculator", "contract"];

  window.addEventListener("mousemove", (e) => {
    if (!PARALLAX_VIEWS.includes(document.body.dataset.view)) return;
    const w = window.innerWidth, h = window.innerHeight;
    targetX = -((e.clientX - w / 2) / (w / 2)) * MAX; // drift opposite the cursor
    targetY = -((e.clientY - h / 2) / (h / 2)) * MAX;
    start();
  }, { passive: true });

  // ease the landscape back to centre when leaving a parallax view
  window.addEventListener("hashchange", () => {
    if (!PARALLAX_VIEWS.includes(document.body.dataset.view)) { targetX = 0; targetY = 0; start(); }
  });
}());
