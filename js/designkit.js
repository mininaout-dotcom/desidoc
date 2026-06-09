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
    label: "Лендинг Tilda",
    stages: [
      { title: "Брифинг и сбор данных", description: "Изучение продукта, целевой аудитории и задач, которые должен решать лендинг.", hours: { junior: 3, middle: 3, senior: 3 } },
      { title: "Прототип", description: "Текстовая структура страницы, логика блоков и призывов к действию.", hours: { junior: 11, middle: 9, senior: 8 } },
      { title: "Дизайн", description: "Отрисовка всех блоков лендинга в Figma с учётом фирменного стиля.", hours: { junior: 21, middle: 17, senior: 14 } },
      { title: "Сборка", description: "Сборка страницы на платформе Tilda по готовому дизайну.", hours: { junior: 20, middle: 17, senior: 15 } },
      { title: "Адаптив", description: "Настройка мобильной и планшетной версий страницы.", hours: { junior: 8, middle: 6, senior: 4 } },
      { title: "Формы", description: "Подключение форм заявок, настройка уведомлений и интеграций с CRM.", hours: { junior: 2, middle: 1, senior: 1 } },
      { title: "Правки", description: "Корректировки по итогам финального согласования с клиентом.", hours: { junior: 8, middle: 8, senior: 8 } },
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
    label: "Свой проект",
    stages: [
      { title: "Брифинг", description: "Интервью с заказчиком, сбор вводной информации, уточнение задач и ожиданий.", hours: { junior: 3, middle: 2, senior: 2 } },
      { title: "Анализ конкурентов", description: "Изучение рынка, анализ конкурентных решений и позиционирования.", hours: { junior: 5, middle: 4, senior: 3 } },
      { title: "Подборка референсов", description: "Сбор и отбор визуальных референсов, формулировка визуальных принципов.", hours: { junior: 5, middle: 4, senior: 3 } },
      { title: "Концепция", description: "Разработка и презентация визуальной концепции, выбор направления.", hours: { junior: 8, middle: 6, senior: 5 } },
      { title: "Препресс и подготовка к печати", description: "Проверка макетов под печатные требования: цветовые профили, отступы, разрешение, вылеты.", hours: { junior: 3, middle: 3, senior: 3 } },
      { title: "Передача файлов и макетов", description: "Экспорт финальных файлов в нужных форматах, организация папок и передача заказчику.", hours: { junior: 2, middle: 2, senior: 2 } },
    ],
  },
};

const MARKET_RATES = { junior: 1000, middle: 2500, senior: 4000 };
const MODIFIERS = { urgent: 0.3 };
const DEFAULT_DESIGNER_RATE = 3000;
const DEFAULT_PROJECT_KEY = "landing_design";
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
const savedProfile = loadProfile();

const state = {
  view: "home",
  navHistory: [],
  theme: localStorage.getItem("designkit.theme") || "light",
  projectKey: DEFAULT_PROJECT_KEY,
  rateMode: "market",
  marketGrade: "middle",
  designerRate: Number(localStorage.getItem("designkit.designerRate") || DEFAULT_DESIGNER_RATE),
  rate: 0,
  taxMode: "selfEmployed",
  clientType: "individual",
  customTaxRate: Number(localStorage.getItem("designkit.customTaxRate") || 6),
  generated: false,
  stages: [],
  expenses: [],
  mods: new Set(),
  profile: savedProfile,
  estimateMeta: loadEstimateMeta(savedProfile, DEFAULT_PROJECT_KEY),
};

let draggedStageIndex = null;
let contractSaveTimer = null;
let contractObserver = null;
let clientReplyParseTimer = null;

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
const formatMoney = new Intl.NumberFormat("ru-RU", { style: "currency", currency: "RUB", maximumFractionDigits: 0 });
const formatNumber = new Intl.NumberFormat("ru-RU", { maximumFractionDigits: 0 });

function money(value) {
  return formatMoney.format(Math.round(value || 0)).replace("₽", "₽");
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

function syncEstimateMetaInputs() {
  const estimateNameInput = document.querySelector('[data-estimate-meta="estimateName"]');

  if (estimateNameInput && document.activeElement !== estimateNameInput) {
    estimateNameInput.value = state.estimateMeta.estimateName || getEstimateName();
  }
}

function syncExportInputs() {
  const designerInput = document.querySelector('[data-input="designerName"]');
  const estimateInput = document.querySelector('[data-input="estimateName"]');
  if (designerInput) designerInput.value = state.profile.designerName || "";
  if (estimateInput) estimateInput.value = getEstimateName();
}

function syncEstimateNameWithProjectChange(previousProjectKey) {
  const previousDefault = getDefaultEstimateName(previousProjectKey);
  const previousLegacyDefault = `Смета: ${previousDefault}`;
  const currentName = state.estimateMeta.estimateName.trim();
  if (!currentName || currentName === previousDefault || currentName === previousLegacyDefault) {
    state.estimateMeta.estimateName = "";
    persistEstimateMeta();
  }
}

function getProject() {
  return PROJECTS[state.projectKey];
}

function getIncomeRate() {
  const income = Number(document.querySelector('[data-input="monthlyIncome"]')?.value || 0);
  const daysPerWeek = Math.max(Number(document.querySelector('[data-input="workDays"]')?.value || 1), 1);
  const hoursPerDay = Math.max(Number(document.querySelector('[data-input="billableHours"]')?.value || 1), 1);
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
  return project.stages.map((stage) => ({
    title: stage.title,
    description: stage.description || "",
    note: stage.note || "",
    hours: stage.hours[level] || stage.hours.middle,
    defaults: stage.hours,
    manuallyEditedHours: false,
  }));
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

  if (state.view === "contract") renderContractWorkspace();
}

function syncRouteHash(view, replace = false) {
  const nextHash = `#${view}`;
  if (location.hash === nextHash) return;
  history[replace ? "replaceState" : "pushState"](null, "", nextHash);
}

function openSoonModal(target) {
  document.querySelector("[data-soon-title]").textContent = target.dataset.label || "Сценарий";
  document.querySelector("[data-soon-modal]").showModal();
}

function renderProjectOptions() {
  const container = document.querySelector("[data-project-options]");
  container.innerHTML = Object.entries(PROJECTS).map(([key, project]) => `
    <button class="project-option ${key === state.projectKey ? "is-selected" : ""}" type="button" data-project="${key}" role="radio" aria-checked="${key === state.projectKey}">
      <strong>${project.label}</strong>
    </button>
  `).join("");
}

function renderRate() {
  state.rate = getActiveRate();
  const designerRateInput = document.querySelector('[data-input="designerRate"]');
  if (designerRateInput && document.activeElement !== designerRateInput) designerRateInput.value = state.designerRate;
  document.querySelector("[data-income-rate]").textContent = `${formatNumber.format(getIncomeRate())} ₽/час`;

  document.querySelectorAll("[data-rate-mode]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.rateMode === state.rateMode);
  });
  document.querySelectorAll("[data-rate-panel]").forEach((panel) => {
    panel.classList.toggle("is-hidden", panel.dataset.ratePanel !== state.rateMode);
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
  const customTaxInput = document.querySelector('[data-input="customTaxRate"]');
  if (customTaxInput && document.activeElement !== customTaxInput) customTaxInput.value = state.customTaxRate;
  document.querySelector("[data-tax-custom]").classList.toggle("is-hidden", state.taxMode !== "custom");
  document.querySelector("[data-tax-rate-label]").textContent = `${formatNumber.format(getTaxRate())}%`;
}

function generateEstimate(force = false) {
  const project = getProject();
  state.rate = getActiveRate();
  if (force || !state.generated) {
    state.stages = createStages(project, getHoursLevel());
    state.expenses = [];
  }
  state.generated = true;
  renderEstimate();
  routeTo("calculator");
  // На мобиле прокручиваем к результату
  if (window.innerWidth <= 760) {
    const result = document.querySelector("[data-estimate-result]");
    if (result) setTimeout(() => result.scrollIntoView({ behavior: "smooth", block: "start" }), 80);
  }
}

function renderEstimate() {
  renderRate();
  app.dataset.estimate = state.generated ? "ready" : "empty";

  document.querySelector("[data-estimate-empty]").classList.toggle("is-hidden", state.generated);
  document.querySelector("[data-estimate-result]").classList.toggle("is-hidden", !state.generated);
  document.querySelector("[data-sticky-summary]").classList.toggle("is-hidden", !(state.view === "calculator" && state.generated));

  if (!state.generated) return;

  syncEstimateMetaInputs();
  updateTotalsOnly();

  const list = document.querySelector("[data-stage-list]");
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
          <label class="hours-field">
            <input type="number" min="0" step="1" value="${stage.hours}" data-stage-field="hours" data-index="${index}" aria-label="Часы этапа ${index + 1}">
            <span>ч</span>
          </label>
          <div class="stage-stat"><strong data-stage-cost="${index}">${money(getStageCost(stage))}</strong></div>
          <button class="icon-button icon-button--remove" type="button" data-action="remove-stage" data-index="${index}" aria-label="Удалить этап">×</button>
        </div>
      </article>
    `;
  }).join("");

  requestAnimationFrame(() => {
    list.querySelectorAll(".stage-description-input").forEach(el => {
      el.style.height = "auto";
      el.style.height = el.scrollHeight + "px";
    });
  });

  renderExpenses();
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
  localStorage.setItem("designkit.profile", JSON.stringify(state.profile));
  renderGreeting();
  if (state.view === "contract") {
    applyContractAutoDefaults({ force: true });
    renderContractWorkspace();
    scheduleContractSave();
  }
  modal.close();
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
  if (!urgent) return;
  const isActive = state.mods.has("urgent");
  urgent.classList.toggle("is-active", isActive);
  urgent.setAttribute("aria-pressed", String(isActive));
}

function printEstimate() {
  const designerName = document.querySelector('[data-input="designerName"]').value.trim() || "Дизайнер";
  const estimateName = normalizeEstimateName(document.querySelector('[data-input="estimateName"]').value, state.projectKey) || getDefaultEstimateName();
  state.profile = { ...state.profile, designerName };
  state.estimateMeta = { estimateName: estimateName === getDefaultEstimateName() ? "" : estimateName };
  localStorage.setItem("designkit.profile", JSON.stringify(state.profile));
  persistEstimateMeta();
  renderGreeting();
  if (state.generated) syncEstimateMetaInputs();

  const validUntil = new Date();
  validUntil.setDate(validUntil.getDate() + 14);
  const validUntilText = validUntil.toLocaleDateString("ru-RU", { day: "2-digit", month: "2-digit", year: "numeric" });

  const rows = state.stages.map((stage) => `
    <tr>
      <td><div class="pdf-stage-name">${escapeHtml(stage.title)}</div><div class="pdf-stage-desc">${escapeHtml(stage.description)}</div></td>
      <td class="pdf-hours">${stage.hours}</td>
      <td class="pdf-cost">${money(getStageCost(stage))}</td>
    </tr>
  `).join("");

  const expenses = state.expenses.map((expense) => `
    <tr>
      <td><div class="pdf-stage-name">${escapeHtml(expense.title)}</div><div class="pdf-stage-desc">Дополнительный расход</div></td>
      <td class="pdf-hours">—</td>
      <td class="pdf-cost">${money(expense.amount)}</td>
    </tr>
  `).join("");
  const urgencyRow = state.mods.has("urgent")
    ? `<tr class="pdf-summary-row"><td><div class="pdf-stage-name">Срочность +30%</div><div class="pdf-stage-desc">Финальная опция перед экспортом PDF</div></td><td class="pdf-hours">—</td><td class="pdf-cost">${money(getUrgencyAmount())}</td></tr>`
    : "";
  const activeMods = state.mods.has("urgent")
    ? `<div class="pdf-mods"><span class="pdf-mod-tag">Срочность +30%</span></div>`
    : "";
  const today = new Date().toLocaleDateString("ru-RU", { day: "numeric", month: "long", year: "numeric" });

  document.querySelector("[data-print-sheet]").innerHTML = `
    <div class="pdf-page">
      <div class="pdf-header">
        <div class="pdf-logo">DesiDoc</div>
        <div class="pdf-date">${today}</div>
      </div>
      <div class="pdf-title">
        <div class="pdf-doc-label">Смета на разработку</div>
        <div class="pdf-proj-name">${escapeHtml(estimateName)}</div>
      </div>
      <div class="pdf-meta">
        <div class="pdf-meta-item"><div class="pdf-meta-label">Дизайнер</div><div class="pdf-meta-value">${escapeHtml(designerName)}</div></div>
        <div class="pdf-meta-item"><div class="pdf-meta-label">Ставка</div><div class="pdf-meta-value">${money(state.rate)} / час</div></div>
        <div class="pdf-meta-item"><div class="pdf-meta-label">Актуальна до</div><div class="pdf-meta-value">${validUntilText}</div></div>
      </div>
      ${activeMods}
      <table class="pdf-table">
        <colgroup>
          <col>
          <col style="width: 12%;">
          <col style="width: 24%;">
        </colgroup>
        <thead><tr><th>Этап работ</th><th class="pdf-th-hours">Часы</th><th>Стоимость</th></tr></thead>
        <tbody>
          ${rows}
          ${expenses}
          ${urgencyRow}
          <tr class="pdf-summary-row"><td><div class="pdf-stage-name">Работы и расходы</div></td><td class="pdf-hours">—</td><td class="pdf-cost">${money(getSubtotal())}</td></tr>
          <tr class="pdf-summary-row"><td><div class="pdf-stage-name">Налог ${formatNumber.format(getTaxRate())}%</div></td><td class="pdf-hours">—</td><td class="pdf-cost">${money(getTaxAmount())}</td></tr>
        </tbody>
        <tfoot><tr class="pdf-total-row"><td class="pdf-total-label">Итого</td><td class="pdf-total-hours">${getTotalHours()} ч</td><td class="pdf-total-cost">${money(getTotal())}</td></tr></tfoot>
      </table>
      <div class="pdf-footer">
        <div>Финальная сумма сметы. Смета действительна 14 дней.</div>
      </div>
    </div>
  `;

  const exportModal = document.querySelector("[data-export-modal]");
  if (exportModal?.open) exportModal.close();

  const sheet = document.querySelector("[data-print-sheet]");
  sheet.setAttribute("aria-hidden", "false");
  sheet.style.cssText = "display:block;position:fixed;left:-9999px;top:0;width:794px;min-height:1123px;z-index:9999;background:#fff;overflow:visible;padding:0;";
  const page = sheet.querySelector(".pdf-page");

  const projectLabel = getProject().label;
  const filename = `смета-${projectLabel.toLowerCase().replace(/\s+/g, "-")}.pdf`;

  if (!window.jspdf?.jsPDF || !page) { window.print(); sheet.style.cssText = ""; sheet.setAttribute("aria-hidden", "true"); return; }
  const { jsPDF } = window.jspdf;
  const cleanupSheet = () => { sheet.style.cssText = ""; sheet.setAttribute("aria-hidden", "true"); };

  const savePdf = (dataUrl) => {
    const img = new Image();
    img.onload = () => {
      const pdf = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
      const pageW = pdf.internal.pageSize.getWidth();
      const pageH = pdf.internal.pageSize.getHeight();
      const imgH = (img.naturalHeight * pageW) / img.naturalWidth;
      let y = 0;
      while (y < imgH) { if (y > 0) pdf.addPage(); pdf.addImage(dataUrl, "PNG", 0, -y, pageW, imgH); y += pageH; }
      pdf.save(filename);
      cleanupSheet();
    };
    img.src = dataUrl;
  };

  if (window.htmlToImage) {
    window.htmlToImage.toPng(page, { pixelRatio: 1.5, backgroundColor: "#ffffff" }).then(savePdf).catch(() => { window.print(); cleanupSheet(); });
    return;
  }
  window.html2canvas(page, { scale: 2, useCORS: true, backgroundColor: "#ffffff", logging: false })
    .then(c => savePdf(c.toDataURL("image/png"))).catch(() => { window.print(); cleanupSheet(); });
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
  const labelPattern = labels
    .map((label) => label.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
    .join("|");
  const regexp = new RegExp(`^(?:[-–—•]\\s*)?(?:${labelPattern})\\s*(?:[:：—–-]|\\s)\\s*(.+)$`, "i");
  const inlineRegexp = new RegExp(`(?:${labelPattern})\\s*(?:[:：—–-])\\s*([^\\n;]+)`, "i");

  for (const line of lines) {
    const match = line.match(regexp);
    if (match?.[1]) return match[1].trim();
  }

  return text.match(inlineRegexp)?.[1]?.trim() || "";
}

function extractContactDetails(text) {
  const source = String(text || "");
  const contacts = [];
  const email = source.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i)?.[0];
  const phone = source.match(/(?:\+?\d[\d\s().-]{7,}\d)/)?.[0]?.replace(/\s{2,}/g, " ");
  const telegram = source.match(/(?:telegram|телеграм|tg)\s*[:：@]?\s*(@?[a-zA-Z0-9_]{4,})/i)?.[1];
  const labeled = getLabelValueFromText(source, ["контакты", "контакт", "телефон", "e-mail", "email", "почта"]);

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

function setClientReplyStatus(message, isError = false) {
  const status = document.querySelector("[data-client-reply-status]");
  if (!status) return;
  status.textContent = message;
  status.classList.toggle("is-error", isError);
}

function applyClientReplyText(text, { silent = false } = {}) {
  const parsed = parseClientReply(text);
  const labels = [];
  const labelMap = {
    clientName: "ФИО / название",
    clientInn: "ИНН",
    clientAddress: "адрес",
    responsible: "ответственное лицо",
    responsibleContact: "контакты",
  };

  Object.entries(parsed).forEach(([key, value]) => {
    const normalized = String(value || "").trim();
    if (!normalized) return;
    contractState.fields[key] = normalized;
    labels.push(labelMap[key] || key);
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
    signature: {
      dataUrl: savedSignature,
      mode: savedSignature ? "saved" : "once",
      includeInPdf: false,
    },
    addendumFields: {
      number: "1",
      date: formatContractDate(),
      contractNumber: "___",
      contractDate: "",
      city: state.profile?.city || "Москва",
      clientName: "",
      contractorName: state.profile?.contractorName || "",
      taskDescription: "Разработка фирменного стиля бренда",
      taskRequirements: "Логотип (знак + логотип, горизонтальная и вертикальная версии)\nФирменная цветовая палитра (основные + дополнительные цвета, HEX/CMYK/Pantone)\nТипографика (заголовочный и текстовый шрифт, правила использования)\nФирменные паттерны или текстуры (при необходимости)\nВизитная карточка (90×50 мм, лицевая и оборотная сторона)\nБланк для документов А4\nРуководство по фирменному стилю (Brandbook / Brand Guidelines, PDF)\n\nФорматы для передачи: AI, PDF, PNG (на белом и прозрачном фоне), JPG",
      deadline: "",
      price: "",
      paymentTerms: "",
      revisionsPerStage: "2",
      revisionRate: "",
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
    signature: { ...defaults.signature, ...(draft.signature || {}) },
    addendumFields: { ...defaults.addendumFields, ...(draft.addendumFields || {}) },
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
  return `<span class="inline-field" contenteditable="true" spellcheck="false" data-contract-field="${key}" data-placeholder="${escapeHtml(placeholder)}">${escapeHtml(value || placeholder)}</span>`;
}

function isContractFieldFilled(key) {
  const value = String(contractState.fields[key] || "").trim();
  return Boolean(value && !CONTRACT_PLACEHOLDERS.has(value) && !/_/.test(value));
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
  if (panel) panel.open = missing.length > 0;
  if (!missing.length) {
    summary.innerHTML = `<p class="contract-required-summary__ok">Все обязательные поля заполнены. Можно скачивать PDF.</p>`;
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
}

function renderContractTemplateStrip() {
  const strip = document.querySelector("[data-contract-template-strip]");
  if (!strip) return;
  const isAddendum = contractState.docType === "addendum";
  strip.innerHTML = `
    <div class="doc-type-toggle">
      <button class="doc-type-toggle__btn ${!isAddendum ? "is-active" : ""}" type="button" data-action="show-contract-doc"><span class="doc-type-toggle__step">01</span>Договор</button>
      <button class="doc-type-toggle__btn ${isAddendum ? "is-active" : ""}" type="button" data-action="show-addendum-doc"><span class="doc-type-toggle__step">02</span>Допсоглашение</button>
    </div>
    <button class="reset-btn" type="button" data-action="reset-all-data" title="Сбросить все данные">↺ Сбросить</button>
  `;
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
    if (node !== sourceNode) node.textContent = contractState.fields[key] || node.dataset.placeholder || "";
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

function renderContractClause(sectionId, sectionNumber, clauseIndex, clause) {
  if (clause.optionalKey && !contractState.optional[clause.optionalKey]) return "";
  const clauseKey = getContractClauseKey(sectionId, clause);
  const body = contractState.textOverrides?.[clauseKey] || clause.body;
  return `
    <div class="contract-clause ${clause.optionalKey ? "contract-clause--optional" : ""}" data-contract-clause="${clause.optionalKey || "fixed"}">
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
  const outline = document.querySelector("[data-contract-outline]");
  if (!outline) return;
  const sections = (contractState.templateKey === "design" ? CONTRACT_SECTIONS_DESIGN : CONTRACT_SECTIONS);
  outline.innerHTML = sections.map(([id, label], i) => `
    <button class="outline-link" type="button" data-scroll-section="${id}"><span class="outline-link__num">${i + 1}.</span>${label}</button>
  `).join("");
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
  const toggle = document.querySelector("[data-contract-explanation-toggle]");
  if (!toggle) return;
  toggle.checked = Boolean(contractState.showExplanations);
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
}

function renderContractChooser() {
  const chooser = document.querySelector("[data-contract-chooser]");
  if (!chooser) return;
  chooser.innerHTML = `
    <div class="contract-chooser__inner">
      <h2 class="contract-chooser__title">Выбери договор под задачу</h2>
      <div class="contract-chooser__cards">

        <button class="chooser-card" type="button" data-chooser-card="design">
          <div class="chooser-card__badge">Первый шаг</div>
          <div class="chooser-card__icon">📋</div>
          <div class="chooser-card__title">Рамочный договор</div>
          <div class="chooser-card__desc">Подписывается один раз на год. Покрывает любые задачи — логотип, сайт, презентацию.</div>
          <div class="chooser-card__check" aria-hidden="true"></div>
        </button>

        <button class="chooser-card" type="button" data-chooser-card="addendum">
          <div class="chooser-card__badge chooser-card__badge--muted">Уже есть договор</div>
          <div class="chooser-card__icon">📎</div>
          <div class="chooser-card__title">Допсоглашение</div>
          <div class="chooser-card__desc">Фиксирует ТЗ, сроки и стоимость конкретного проекта. Оформляется к рамочному.</div>
          <div class="chooser-card__check" aria-hidden="true"></div>
        </button>

      </div>
      <button class="chooser-cta" type="button" id="chooserCta" data-action="confirm-chooser" disabled>
        Создать документ →
      </button>
    </div>
  `;

  chooser.querySelectorAll(".chooser-card").forEach((card) => {
    card.addEventListener("click", () => {
      chooser.querySelectorAll(".chooser-card").forEach((c) => {
        c.classList.remove("is-selected");
        c.querySelector(".chooser-card__check").textContent = "";
      });
      card.classList.add("is-selected");
      card.querySelector(".chooser-card__check").textContent = "✓";
      const cta = chooser.querySelector("#chooserCta");
      cta.disabled = false;
      cta.dataset.cardType = card.dataset.chooserCard;
    });
  });
}

// ── Addendum helpers ──────────────────────────────────────────

function addendumField(key, placeholder, tag = "span") {
  const value = contractState.addendumFields[key] || "";
  if (tag === "div") {
    return `<div class="inline-field inline-field--block" contenteditable="true" spellcheck="false" data-addendum-field="${key}" data-placeholder="${escapeHtml(placeholder)}">${escapeHtml(value || placeholder)}</div>`;
  }
  return `<span class="inline-field" contenteditable="true" spellcheck="false" data-addendum-field="${key}" data-placeholder="${escapeHtml(placeholder)}">${escapeHtml(value || placeholder)}</span>`;
}

function addendumNote(text) {
  if (!contractState.addendumShowExplanations) return "";
  return `<div class="contract-note">${escapeHtml(text)}</div>`;
}

function syncAddendumField(key) {
  document.querySelectorAll(`[data-addendum-field="${key}"]`).forEach((el) => {
    const val = contractState.addendumFields[key] || "";
    const ph = el.dataset.placeholder || "";
    if (el.textContent !== (val || ph)) el.textContent = val || ph;
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
        <input type="text" autocomplete="off" data-addendum-control="paymentTerms" value="${escapeHtml(f.paymentTerms || "")}" placeholder="50% аванс и 50% после акта">
      </label>
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
}

function renderAddendumModeControls() {
  document.querySelectorAll("[data-contract-explanation-toggle]").forEach((t) => {
    t.checked = Boolean(contractState.addendumShowExplanations);
  });
}

function renderAddendumSidebar() {
  const sidebar = document.querySelector("[data-addendum-sidebar]");
  if (!sidebar) return;
  sidebar.innerHTML = `
    <!-- Шаг 1: Данные -->
    <details class="outline-group contract-data-panel outline-group--collapsible">
      <summary class="outline-title outline-title--toggle"><span class="step-badge">1</span>Заполни данные</summary>
      <div class="outline-group-body">
        <p class="contract-data-hint">Данные подтянутся из договора. Проверь и добавь детали задачи.</p>
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

  const sig = contractState.signature;
  const hasSignature = sig.dataUrl && sig.includeInPdf;
  const signatureHtml = hasSignature
    ? `<img class="signature-image" src="${escapeHtml(sig.dataUrl)}" alt="Подпись исполнителя">`
    : "";

  const paymentText = f.paymentTerms || "50% аванс и 50% после акта";

  canvas.innerHTML = `
    <div class="contract-doc addendum-doc" data-section="addendum-top">
      <h1 class="document-title">Дополнительное соглашение № ${addendumField("number", "___")}<br><span class="document-title__sub">к Договору возмездного оказания услуг № ${addendumField("contractNumber", "___")} от ${addendumField("contractDate", "___")}</span></h1>

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
        <div class="contract-clause">
          <p>Исполнитель обязуется выполнить по заданию Заказчика следующие работы:</p>
          <div class="addendum-tz-block">${addendumField("taskDescription", "Опишите задачу...", "div")}</div>
        </div>
      </section>

      <section class="document-section">
        <h2><span class="section-num">2.</span> Требования к результату работ</h2>
        <div class="contract-clause">
          <p>Результат работ должен соответствовать следующим требованиям:</p>
          <div class="addendum-tz-block">${addendumField("taskRequirements", "Форматы, размеры, стиль, конкретные элементы...", "div")}</div>
        </div>
      </section>

      <section class="document-section">
        <h2><span class="section-num">3.</span> Срок выполнения работ</h2>
        <div class="contract-clause">
          <p>Срок выполнения работ составляет: ${addendumField("deadline", "укажите дату или количество дней")}.</p>
        </div>
      </section>

      <section class="document-section">
        <h2><span class="section-num">4.</span> Стоимость работ и порядок оплаты</h2>
        <div class="contract-clause">
          <p>Стоимость работ составляет: ${addendumField("price", "сумма в рублях")}.</p>
          <p>Порядок оплаты: ${addendumField("paymentTerms", "50% аванс и 50% после акта")}.</p>
        </div>
      </section>

      <section class="document-section">
        <h2><span class="section-num">5.</span> Контактное лицо Заказчика</h2>
        <div class="contract-clause">
          <p>Для согласования результатов работ Заказчик определяет контактное лицо:</p>
          <p>ФИО: ${addendumField("contactName", "__________________________")}</p>
          <p>Контакты: ${addendumField("contactInfo", "______________________")}</p>
        </div>
      </section>

      <section class="document-section">
        <h2><span class="section-num">6.</span> Дополнительные условия</h2>
        <div class="contract-clause">
          ${f.revisionsPerStage ? `<p>Включено до ${addendumField("revisionsPerStage", "2")} итераций бесплатных правок на этап.</p>` : ""}
          ${f.revisionRate ? `<p>В случае дополнительных правок стоимость услуг рассчитывается по тарифу: ${addendumField("revisionRate", "___")} ₽/ч</p>` : ""}
          ${f.includeRightsTransfer !== false ? `<p>Передача прав: все материалы передаются с полными правами использования Заказчику.</p>` : ""}
          ${f.otherConditions ? `<div class="addendum-tz-block">${addendumField("otherConditions", "", "div")}</div>` : ""}
        </div>
      </section>
    </div>

    <div class="contract-doc addendum-doc" data-section="addendum-final">
      <section class="document-section">
        <h2><span class="section-num">7.</span> Заключительные положения</h2>
        <div class="contract-clause">
          <p>Настоящее Дополнительное соглашение является неотъемлемой частью Договора.</p>
          <p>Во всём, что не урегулировано настоящим Дополнительным соглашением, Стороны руководствуются условиями Договора.</p>
          <p>Настоящее Дополнительное соглашение вступает в силу с момента его подписания Сторонами.</p>
        </div>
      </section>
    </div>

    <div class="contract-doc addendum-doc" data-section="addendum-signatures">
      <section class="document-section">
        <h2><span class="section-num">8.</span> Реквизиты и подписи сторон</h2>
        <div class="contract-clause">
          <div class="requisites-grid">
            <div class="requisite-card">
              <p><strong>Заказчик</strong></p>
              <p>${escapeHtml(f.clientName || contractState.fields.clientName || "________________")}</p>
              ${contractState.fields.clientInn ? `<p>ИНН: ${escapeHtml(contractState.fields.clientInn)}</p>` : ""}
              ${contractState.fields.clientAddress ? `<p>Адрес: ${escapeHtml(contractState.fields.clientAddress)}</p>` : ""}
              <span class="sign-line">Подпись</span>
            </div>
            <div class="requisite-card">
              <p><strong>Исполнитель</strong></p>
              <p>${escapeHtml(f.contractorName || contractState.fields.contractorName || "________________")}</p>
              ${contractState.fields.contractorInn ? `<p>ИНН: ${escapeHtml(contractState.fields.contractorInn)}</p>` : ""}
              ${state.profile?.contractorAddress ? `<p>${escapeHtml(state.profile.contractorAddress)}</p>` : ""}
              ${state.profile?.contractorContact ? `<p>${escapeHtml(state.profile.contractorContact)}</p>` : ""}
              <div class="signature-slot">
                ${signatureHtml}
                <span class="sign-line">Подпись</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  `;
}

// ── End Addendum helpers ──────────────────────────────────────

function renderContractWorkspace() {
  const workspace = document.querySelector(".contract-workspace");
  contractState.mode = "fill";
  if (workspace) {
    workspace.dataset.mode = contractState.mode;
    workspace.dataset.docType = contractState.docType || "contract";
  }
  applyContractAutoDefaults();

  renderContractTemplateStrip();

  if (contractState.docType === "addendum") {
    renderAddendumSidebar();
    renderAddendumDocument();
    updateAutosaveStatus("Сохранено");
    return;
  }

  renderContractControls();
  renderContractModeControls();
  renderSignaturePanel();
  renderContractOutline();
  renderContractOptions();
  renderContractDocument();
  renderContractProgress();
  updateAutosaveStatus("Сохранено");
  requestAnimationFrame(setupContractScrollSpy);
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

  const docHeader = `
    <h1 class="document-title">${escapeHtml(template.title)} № ${contractField("number", "___")}</h1>
    <div class="document-meta">
      <span>${contractField("city", "Город")}</span>
      <span>${contractField("date", "дата")}</span>
    </div>
    ${contractNote("Серые пояснения помогают быстро проверить смысл пунктов. В PDF для клиента попадёт только текст договора.")}
  `;

  function renderSignaturesSection() {
    return renderDocumentSection("signatures", "Подписи", [
      {
        title: "Реквизиты и подписи сторон",
        note: "Изображение подписи вставляется только по отдельному согласию пользователя. Это не КЭП и файл можно скопировать из PDF.",
        body: `
          <div class="requisites-grid">
            <div class="requisite-card">
              <p><strong>Заказчик</strong></p>
              <p>${contractField("clientName", "ФИО / название")}</p>
              <p>ИНН: ${contractField("clientInn", "__________")}</p>
              <p>Адрес: ${contractField("clientAddress", "юридический / почтовый адрес")}</p>
              <span class="sign-line">Подпись</span>
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
          note: "Молчание Заказчика в установленный срок = согласие. Рекомендуем всегда добиваться явного «ок».",
          body: `<p>В течение 7 (семи) календарных дней с даты получения результатов работ Заказчик обязан направить Исполнителю либо подтверждение их согласования, либо мотивированный перечень замечаний с описанием необходимых доработок. Сообщения, направленные через согласованные Сторонами каналы связи (электронная почта, мессенджеры), имеют юридическую силу и признаются надлежащим способом взаимодействия Сторон.</p>
          <p>В случае если в течение указанного срока Исполнитель не получил ни подтверждения согласования, ни мотивированного перечня замечаний, соответствующий этап считается выполненным надлежащим образом и утверждённым Заказчиком без замечаний в полном объёме.</p>`,
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
          note: "Бездействие = согласие. Следите за сроком — если хотите предъявить замечания, делайте это в пределах 7 рабочих дней.",
          body: `<p>Если в течение 7 (семи) рабочих дней Исполнитель не получил ни подписанного Акта, ни мотивированного отказа от его подписания, Акт считается подписанным Заказчиком в последний день указанного срока, а Результаты работ — принятыми Заказчиком без замечаний в полном объёме и подлежащими оплате в полном размере.</p>`,
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
          body: `<p>В случае если создаваемый Исполнителем объект содержит рекламную информацию и предназначен для распространения в информационно-телекоммуникационной сети Интернет, Заказчик самостоятельно несёт обязанности оператора рекламных данных в соответствии с Федеральным законом от 13.03.2006 № 38-ФЗ «О рекламе» и при необходимости предоставляет Исполнителю сведения, необходимые для надлежащей маркировки рекламы. Исполнитель не несёт ответственности за соблюдение требований законодательства о маркировке интернет-рекламы.</p>`,
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
          body: `<p>Окончательные Результаты работ передаются Заказчику исключительно после получения Исполнителем полного вознаграждения за фактически выполненные работы. В случае отказа Заказчика от оплаты Исполнитель вправе распорядиться созданными материалами по собственному усмотрению, в том числе разместить их в портфолио или передать третьим лицам, при условии соблюдения прав Заказчика на материалы, ранее переданные Заказчику.</p>`,
        },
      ])}

      ${renderDocumentSection("final", "Заключительные положения", [
        {
          title: "Порядок обмена документами и информацией",
          note: "Позволяет полностью вести документооборот дистанционно — оригиналы по почте отправлять не нужно.",
          body: `<p>Обмен документами, материалами, замечаниями, уведомлениями и иными сведениями по настоящему Договору осуществляется с использованием адресов электронной почты и (или) аккаунтов в мессенджерах Сторон, указанных в разделе 11. Сообщения и документы, направленные с указанных каналов, считаются направленными от имени соответствующей Стороны. Ни одна из Сторон не вправе ссылаться на несанкционированный доступ третьих лиц к каналам связи как на основание оспаривания факта направления или содержания соответствующих сообщений.</p>`,
        },
        {
          title: "Простая электронная подпись и юридическая сила документов",
          body: `<p>Настоящий Договор, дополнительные соглашения, Акты и иные документы могут подписываться путём обмена скан-копиями документов, оформленных на бумажном носителе и направленных через электронные каналы связи, указанные в разделе 11. Такие документы, подписанные посредством обмена скан-копиями, признаются Сторонами равнозначными документам с собственноручными подписями в соответствии с Федеральным законом от 06.04.2011 № 63-ФЗ «Об электронной подписи».</p>`,
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
          body: `<p>При размещении на Сайте рекламы Заказчик самостоятельно выполняет требования законодательства о рекламе и предоставляет Исполнителю необходимые сведения.</p>`,
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

function updateAutosaveStatus(label) {
  document.querySelectorAll("[data-autosave-status]").forEach((status) => {
    status.textContent = label;
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
  if (!links.length || !sections.length) return;
  if (contractObserver) contractObserver.disconnect();
  contractObserver = new IntersectionObserver((entries) => {
    const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!visible) return;
    links.forEach((link) => link.classList.toggle("is-active", link.dataset.scrollSection === visible.target.id));
  }, { rootMargin: "-20% 0px -68% 0px", threshold: [0.1, 0.25, 0.5] });
  sections.forEach((section) => contractObserver.observe(section));
}

function printContract(onDone) {
  const source = document.querySelector("[data-contract-canvas]");
  if (!source) return;
  const clone = source.cloneNode(true);
  clone.querySelectorAll(".optional-section__actions, .document-note, .document-coverline").forEach((node) => node.remove());
  clone.querySelectorAll("[contenteditable]").forEach((node) => node.removeAttribute("contenteditable"));

  const isAddendum = contractState.docType === "addendum";
  const f = contractState.addendumFields;
  const template = getContractTemplate();
  const today = new Date().toLocaleDateString("ru-RU", { day: "numeric", month: "long", year: "numeric" });

  const docLabel = isAddendum
    ? `Доп. соглашение № ${escapeHtml(f.number || "___")} к Договору № ${escapeHtml(f.contractNumber || "___")}`
    : `${escapeHtml(template.title)} № ${escapeHtml(contractState.fields.number || "___")}`;
  const clientName = isAddendum ? f.clientName : contractState.fields.clientName;
  const contractorName = isAddendum ? f.contractorName : contractState.fields.contractorName;
  const dateStr = isAddendum ? f.date : contractState.fields.date;
  const filename = isAddendum
    ? `допсоглашение-${(f.number || "1")}.pdf`
    : `договор-${(contractState.fields.number || "1")}.pdf`;

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
      .pdf-clean-body { padding: 60px 72px; background: #fff; font-family: "Onest", Arial, sans-serif; color: #111; min-height: 1123px; box-sizing: border-box; }
      .pdf-clean-body .inline-field, .pdf-clean-body .inline-field--block { border: none !important; background: none !important; padding: 0 !important; border-radius: 0 !important; }
      .pdf-clean-body .document-note { display: none !important; }
      .pdf-clean-body .optional-section__actions { display: none !important; }
      .pdf-clean-body [contenteditable] { outline: none !important; }
      .pdf-clean-body .contract-signature-img, .pdf-clean-body .signature-image { max-width: 160px; max-height: 60px; }
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
    const img = new Image();
    img.onload = () => {
      const pdf = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
      const pageW = pdf.internal.pageSize.getWidth();
      const pageH = pdf.internal.pageSize.getHeight();
      const imgW = pageW;
      const imgH = (img.naturalHeight * imgW) / img.naturalWidth;
      let y = 0;
      while (y < imgH) {
        if (y > 0) pdf.addPage();
        pdf.addImage(dataUrl, "PNG", 0, -y, imgW, imgH);
        y += pageH;
      }
      pdf.save(filename);
      cleanup();
    };
    img.src = dataUrl;
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

  // Use html-to-image (SVG foreignObject — handles color-mix & P3 natively)
  if (window.htmlToImage) {
    Promise.all(sigPromises).then(() => {
      window.htmlToImage.toPng(page, { pixelRatio: 1.5, backgroundColor: "#ffffff", cacheBust: true })
        .then(renderToPdf)
        .catch(err => { console.error("html-to-image error:", err); window.print(); cleanup(); });
    });
    return;
  }

  // Fallback: html2canvas
  if (window.html2canvas) {
    window.html2canvas(page, { scale: 2, useCORS: true, backgroundColor: "#ffffff", logging: false })
      .then(canvas => renderToPdf(canvas.toDataURL("image/png")))
      .catch(err => { console.error("html2canvas error:", err); window.print(); cleanup(); });
    return;
  }

  window.print(); cleanup();
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
      }
      routeTo(nextRoute);
      syncRouteHash(state.view);
      return;
    }

    const projectTarget = event.target.closest("[data-project]");
    if (projectTarget) {
      const previousProjectKey = state.projectKey;
      state.projectKey = projectTarget.dataset.project;
      syncEstimateNameWithProjectChange(previousProjectKey);
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

    const actionTarget = event.target.closest("[data-action]");
    if (!actionTarget) return;

    const action = actionTarget.dataset.action;
    if (action === "toggle-theme") setTheme(state.theme === "dark" ? "light" : "dark");
    if (action === "go-back") {
      const prev = state.navHistory.pop() || "home";
      routeTo(prev, false);
      syncRouteHash(state.view);
      return;
    }
    if (action === "generate-estimate") generateEstimate(true);
    if (action === "regenerate-estimate") generateEstimate(true);
    if (action === "dismiss-hint") {
      const hint = document.querySelector("[data-estimate-hint]");
      if (hint) hint.classList.add("is-hidden");
      try { localStorage.setItem("designkit.stageHintDismissed", "1"); } catch (e) {}
      return;
    }
    if (action === "add-stage") addStage();
    if (action === "remove-stage") {
      state.stages.splice(Number(actionTarget.dataset.index), 1);
      renderEstimate();
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
      const fresh = createDefaultContractDraft();
      Object.assign(contractState, fresh);
      scheduleContractSave();
      renderContractWorkspace();
      return;
    }
    if (action === "show-contract-doc") {
      contractState.docType = "contract";
      scheduleContractSave();
      renderContractWorkspace();
    }
    if (action === "show-addendum-doc") {
      // Auto-fill addendum parties from contract fields if empty
      if (!contractState.addendumFields.clientName) {
        contractState.addendumFields.clientName = contractState.fields.clientName || "";
      }
      if (!contractState.addendumFields.contractorName) {
        contractState.addendumFields.contractorName = contractState.fields.contractorName || "";
      }
      if (!contractState.addendumFields.city) {
        contractState.addendumFields.city = contractState.fields.city || "";
      }
      if (!contractState.addendumFields.date) {
        contractState.addendumFields.date = formatContractDate();
      }
      contractState.docType = "addendum";
      scheduleContractSave();
      renderContractWorkspace();
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
        scheduleContractSave();
        renderContractWorkspace();
      }
    }
    if (action === "confirm-chooser") {
      const cardType = actionTarget.dataset.cardType;
      if (cardType === "addendum") {
        document.querySelector("[data-addendum-modal]")?.showModal();
      } else if (cardType === "design") {
        contractState.templateKey = "design";
        contractState.mode = "fill";
        scheduleContractSave();
        renderContractWorkspace();
      }
    }
    if (action === "back-to-chooser") {
      contractState.mode = "pick";
      scheduleContractSave();
      renderContractWorkspace();
    }
    if (action === "create-addendum") {
      document.querySelector("[data-addendum-modal]")?.showModal();
    }
    if (action === "copy-client-request") {
      const text = document.querySelector("[data-client-request-text]")?.textContent || "";
      navigator.clipboard.writeText(text).then(() => {
        flashButton('[data-action="copy-client-request"]', "Скопировано ✓");
      });
    }
    if (action === "parse-client-reply") {
      const value = document.querySelector("[data-client-reply-input]")?.value || "";
      applyClientReplyText(value);
    }
    if (action === "focus-contract-field") {
      const field = actionTarget.dataset.field;
      const input = field ? document.querySelector(`[data-contract-control="${field}"]`) : null;
      if (!input) return;
      input.closest("details")?.setAttribute("open", "open");
      input.scrollIntoView({ behavior: "smooth", block: "center" });
      input.focus();
    }
    if (action === "show-soon") openSoonModal(actionTarget);
  });

  document.addEventListener("input", (event) => {
    const input = event.target;
    if (input.matches("[data-addendum-control]")) {
      const key = input.dataset.addendumControl;
      contractState.addendumFields[key] = input.value;
      renderAddendumDocument();
      scheduleContractSave();
      return;
    }

    if (input.matches("[data-addendum-field]")) {
      const key = input.dataset.addendumField;
      contractState.addendumFields[key] = input.textContent.trim();
      scheduleContractSave();
      return;
    }

    if (input.matches("[data-contract-control]")) {
      const key = input.dataset.contractControl;
      contractState.fields[key] = input.value.trim();
      syncContractFieldDom(key);
      renderContractProgress();
      validateContractFields();
      scheduleContractSave();
      return;
    }

    if (input.matches("[data-contract-field]")) {
      const key = input.dataset.contractField;
      contractState.fields[key] = input.textContent.trim();
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
      clearTimeout(clientReplyParseTimer);
      clientReplyParseTimer = setTimeout(() => {
        applyClientReplyText(input.value, { silent: true });
      }, 450);
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
    if (input.matches("[data-signature-pdf-toggle]")) {
      contractState.signature.includeInPdf = input.checked;
      renderContractDocument();
      renderAddendumDocument();
      scheduleContractSave();
      return;
    }
    if (input.matches("[data-addendum-control]") && input.type === "checkbox") {
      const key = input.dataset.addendumControl;
      contractState.addendumFields[key] = input.checked;
      renderAddendumDocument();
      scheduleContractSave();
      return;
    }
    if (input.matches("[data-action='toggle-contract-option']")) {
      const key = input.dataset.option;
      contractState.optional[key] = input.checked;
      renderContractWorkspace();
      scheduleContractSave();
      return;
    }
    if (input.matches("[data-vacation-field]")) {
      const fieldKey = input.dataset.vacationField;
      const [y, m, d] = (input.value || "").split("-");
      contractState.fields[fieldKey] = (y && m && d) ? `${d}.${m}.${y}` : "";
      syncContractControls(fieldKey);
      renderContractDocument();
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

function init() {
  setTheme(state.theme);
  renderProjectOptions();
  renderRate();
  renderGreeting();
  syncExportInputs();
  renderContractWorkspace();
  bindEvents();
  // Скрываем подсказку сметы если пользователь уже закрывал её
  if (localStorage.getItem("designkit.stageHintDismissed") === "1") {
    const hint = document.querySelector("[data-estimate-hint]");
    if (hint) hint.classList.add("is-hidden");
  }
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
    if (rafPending) return;
    rafPending = true;
    requestAnimationFrame(() => { onMove(e); rafPending = false; });
  });
  document.addEventListener("pointerleave", onLeave);
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

// — Card parallax —
(function initCardParallax() {
  const MAX_TILT = 7;       // degrees
  const MAX_LIFT = 14;      // px translateZ
  const EASE_IN  = "transform 0.08s ease-out";
  const EASE_OUT = "transform 0.55s cubic-bezier(0.34, 1.56, 0.64, 1)";

  function applyTilt(card, e) {
    const r = card.getBoundingClientRect();
    const dx = (e.clientX - (r.left + r.width  / 2)) / (r.width  / 2); // −1…1
    const dy = (e.clientY - (r.top  + r.height / 2)) / (r.height / 2);
    const rotX = -dy * MAX_TILT;
    const rotY =  dx * MAX_TILT;
    card.style.transition = EASE_IN;
    card.style.transform  = `perspective(700px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateZ(${MAX_LIFT}px)`;
  }

  function resetTilt(card) {
    card.style.transition = EASE_OUT;
    card.style.transform  = "";
  }

  function bind() {
    document.querySelectorAll(".deedoc-card").forEach(card => {
      card.addEventListener("mousemove",  e => applyTilt(card, e));
      card.addEventListener("mouseleave", ()  => resetTilt(card));
    });
  }

  bind();
}());
