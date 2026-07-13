// Локальный смоук-тест функции без реального YandexGPT: fetch подменён.
// Запуск: node test-local.js
process.env.FOLDER_ID = "b1gtest";
process.env.ALLOWED_ORIGINS = "https://desidoc.ru";

const calls = [];
let scenario = "";

global.fetch = async (url, opts) => {
  const body = JSON.parse(opts.body);
  const isClassifier = body.messages[0].text.includes("определяешь тип");
  calls.push(isClassifier ? "classifier" : "generation");

  if (scenario === "classifier-fails" && isClassifier) throw new Error("network down");

  let text;
  if (isClassifier) {
    text = scenario === "pure-tilda"
      ? JSON.stringify({ route: "landing_tilda", pure: true, brand_name: "Йога+", title: "Лендинг на Tilda для курса йоги", slides: 0 })
      : JSON.stringify({ route: "other", pure: false, brand_name: "", title: "Витрина и постеры", slides: 0 });
  } else {
    // Намеренно «плохой» ответ генерации: слитые этапы, QR на 8 часов, раздутые правки.
    text = JSON.stringify({
      estimate_title: "Оформление витрины",
      project_type: "print",
      brand_name: "",
      stages: [
        { name: "Брифинг и сбор данных", description: "Сбор вводных.", hours: 3 },
        { name: "Разработка концепции витрины", description: "Концепция оформления.", hours: 30 },
        { name: "Добавление логотипа и QR-кода", description: "Размещение логотипа и QR на макетах.", hours: 8 },
        { name: "Дизайн 4 постеров", description: "Постеры A1.", hours: 10, unit: "item", quantity: 4 },
        { name: "Согласование и правки", description: "Правки.", hours: 20 },
      ],
      pricing_risks: [],
      additional_costs: [],
    });
  }
  return { ok: true, json: async () => ({ result: { alternatives: [{ message: { text } }] } }) };
};

const { handler } = require("./index.js");

function makeEvent(brief) {
  return {
    httpMethod: "POST",
    headers: { origin: "https://desidoc.ru" },
    body: JSON.stringify({ brief }),
  };
}
const context = { token: { access_token: "test-token" } };

function assert(cond, label) {
  if (!cond) { console.error("FAIL:", label); process.exitCode = 1; }
  else console.log("ok:", label);
}

(async () => {
  // Сценарий A: чистый типовой проект → шаблон, генерация не вызывается.
  scenario = "pure-tilda"; calls.length = 0;
  let res = await handler(makeEvent("Лендинг на Тильде для курса по йоге Йога+"), context);
  let data = JSON.parse(res.body);
  assert(res.statusCode === 200, "A: статус 200");
  assert(data.mode === "template" && data.project_key === "landing_tilda", "A: маршрут — шаблон landing_tilda");
  assert(data.brand_name === "Йога+", "A: бренд из классификатора");
  assert(calls.join(",") === "classifier", "A: один вызов модели (без генерации)");

  // Сценарий B: пакет → генерация + пост-обработка чинит «плохой» ответ.
  scenario = "package"; calls.length = 0;
  res = await handler(makeEvent("Оформление витрины магазина и 4 постера A1 для печати. Логотип и QR-код уже есть."), context);
  data = JSON.parse(res.body);
  const names = data.stages.map((s) => s.name);
  const byName = (n) => data.stages.find((s) => s.name === n);
  assert(res.statusCode === 200, "B: статус 200");
  assert(calls.join(",") === "classifier,generation", "B: классификатор + генерация");
  assert(names.some((n) => /исследован|анализ/i.test(n)), "B: анализ добавлен отдельным этапом");
  assert(byName("Размещение логотипа и QR-кода")?.hours === 1, "B: QR-этап срезан до 1 часа (было 8)");
  assert(byName("Согласование и правки")?.hours === 10, "B: правки зажаты рамкой (было 20)");
  assert(names.some((n) => /препресс/i.test(n)), "B: препресс добавлен для печати");
  const posters = byName("Дизайн 4 постеров");
  assert(posters && posters.unit === "item" && posters.quantity === 4, "B: поштучный этап сохранён (4 шт)");

  // Сценарий C: классификатор упал → генерация всё равно отвечает.
  scenario = "classifier-fails"; calls.length = 0;
  res = await handler(makeEvent("Оформление витрины магазина и постеры"), context);
  data = JSON.parse(res.body);
  assert(res.statusCode === 200 && Array.isArray(data.stages) && data.stages.length > 0, "C: сбой классификатора не роняет ответ");

  console.log(process.exitCode ? "\nЕСТЬ ОШИБКИ" : "\nВСЕ ТЕСТЫ ПРОШЛИ");
})();
