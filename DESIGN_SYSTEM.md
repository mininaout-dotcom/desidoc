# DesiDoc Design System

---

## Принципы

1. **Материальность через стекло.** Поверхности — не плоские, а глазурованные: `backdrop-filter: blur(24px)`, полупрозрачные фоны. Интерфейс «лежит» на живом пейзажном фоне.
2. **Контраст через тему, а не цвет.** Единственный акцент — `--accent` (терракота в светлой, персик в тёмной теме). Всё остальное — нейтральные тёплые серые.
3. **Типографика как архитектура.** Суперэкспрессивные заголовки (`font-weight: 740`, `letter-spacing: -0.065em`), почти незаметный основной текст. Шрифт один — Suisse Intl.
4. **Минимум chrome, максимум контента.** Навигация — узкий рейл 68px слева или плавающая таблетка. Ничего лишнего в поле зрения.
5. **Состояния через трансформацию.** Hover — `translateY(-1px)`, active — `translateY(0)`. Никаких резких цветовых вспышек.

---

## Цветовая палитра

### Светлая тема (`:root`, `color-scheme: light`)

| Токен | Значение | Назначение |
|---|---|---|
| `--bg` | `#f7f4ef` | Фон страницы |
| `--surface` | `rgba(255,255,255,0.76)` | Карточки, панели (полупрозрачно) |
| `--surface-strong` | `#ffffff` | Плотные поверхности (инпуты, модалки) |
| `--surface-muted` | `rgba(255,255,255,0.48)` | Вторичные поверхности |
| `--line` | `rgba(31,29,24,0.12)` | Разделители, бордеры |
| `--line-strong` | `rgba(31,29,24,0.20)` | Активные / акцентные бордеры |
| `--text` | `#1f1d18` | Основной текст |
| `--muted` | `rgba(31,29,24,0.58)` | Вторичный текст, подписи |
| `--soft` | `rgba(31,29,24,0.06)` | Hover-фоны, тонкие слои |
| `--soft-strong` | `rgba(31,29,24,0.10)` | Немного насыщеннее `--soft` |
| `--accent` | `#c76d4d` | Акцент — терракота |
| `--accent-soft` | `rgba(199,109,77,0.13)` | Фон акцентных вставок |
| `--positive` | `#476b5c` | Успех, прогресс |
| `--shadow` | `0 24px 70px rgba(42,35,25,0.10)` | Тень карточек |

### Тёмная тема (`:root[data-theme="dark"]`)

| Токен | Значение |
|---|---|
| `--bg` | `#171612` |
| `--surface` | `rgba(38,36,30,0.76)` |
| `--surface-strong` | `#23211c` |
| `--surface-muted` | `rgba(255,255,255,0.07)` |
| `--line` | `rgba(255,247,232,0.12)` |
| `--line-strong` | `rgba(255,247,232,0.22)` |
| `--text` | `#f6efe2` |
| `--muted` | `rgba(246,239,226,0.62)` |
| `--soft` | `rgba(255,255,255,0.07)` |
| `--soft-strong` | `rgba(255,255,255,0.12)` |
| `--accent` | `#e19a76` |
| `--accent-soft` | `rgba(225,154,118,0.16)` |
| `--positive` | `#a6c3b2` |
| `--shadow` | `0 28px 80px rgba(0,0,0,0.28)` |

### Лендинг-токены (Figma DesiDoc Home, node 49:328)

Эти токены используются **только** в компонентах главного экрана (`deedoc-home`, `deedoc-card`, `deedoc-pill`, `deedoc-toggle`).

| Токен | Светлая | Тёмная (оверрайд) |
|---|---|---|
| `--ddoc-color-bg-base` | `#020201` | — |
| `--ddoc-color-title` | `#373737` | `rgba(255,255,255,0.92)` |
| `--ddoc-color-body-muted` | `#c8c4c4` | `rgba(255,255,255,0.48)` |
| `--ddoc-color-button-bg` | `#262626` | `rgba(255,255,255,0.13)` |
| `--ddoc-color-button-label` | `#c8c4c4` | `rgba(255,255,255,0.80)` |
| `--ddoc-color-card-solid` | `#ffffff` | `rgba(255,255,255,0.09)` |
| `--ddoc-color-glass-card` | `rgba(0,0,0,0.10)` | `rgba(255,255,255,0.09)` |
| `--ddoc-color-card-border` | `rgba(255,255,255,0.50)` | `rgba(255,255,255,0.12)` |
| `--ddoc-color-glass-pill` | `rgba(0,0,0,0.15)` | — |
| `--ddoc-color-text-on-glass` | `rgba(255,255,255,0.7)` | — |
| `--ddoc-color-brand-line` | `rgba(255,255,255,0.8)` | — |
| `--ddoc-blur-glass` | `22.75px` | — |

---

## Типографика

### Шрифт

```
--font: "Suisse Intl", "Onest", "Helvetica Neue", Arial, sans-serif;
--mono: var(--font);
```

Suisse Intl подключён через `@font-face` в весах: 100, 200, 300, 400, 450 (Book), 500, 600, 700, 900 — с курсивами.

### Шкала весов

Используем только 4 значения — никаких промежуточных:

| Вес | Использование |
|---|---|
| `400` | Основной текст, подписи, лейблы, описания |
| `500` | Средний акцент: активные элементы навигации, карточки |
| `600` | Кнопки, полужирные UI-элементы, шаги |
| `700` | Заголовки, eyebrow, важные числа |

### Шкала размеров

| Токен | Значение | Использование |
|---|---|---|
| `--type-display` | `clamp(34px, 4.2vw, 56px)` | Героические заголовки (глобальный `h1`) |
| `--type-h1` | `clamp(28px, 3.2vw, 40px)` | Заголовки разделов |
| `--type-h2` | `clamp(20px, 1.8vw, 26px)` | Секционные заголовки |
| `--type-body` | `15px` | Основной текст |
| `--type-small` | `12px` | Подписи, метки |
| `--type-caption` | `11px` | Лейблы форм, eyebrow |

Допустимые исключения вне шкалы: `13px` (навигация, мелкие UI-элементы), `14px` (кнопки, описания карточек).

### Применение в CSS

```css
/* Глобальный h1 */
h1 {
  font-size: var(--type-display);
  font-weight: 700;
  letter-spacing: -0.065em;
  line-height: 1;
}

/* Исключение: h1 на главном экране (.deedoc-hero h1) */
.deedoc-hero h1 {
  font-size: 38px; /* фиксирован по Figma */
  font-weight: 400;
  letter-spacing: -0.02em;
  line-height: 1.15;
}

h2 {
  font-size: var(--type-h2);
  font-weight: 700;
  letter-spacing: -0.048em;
  line-height: 1.08;
}

/* Eyebrow */
.eyebrow {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.11em;
  text-transform: uppercase;
  color: var(--accent);
}

/* Lead */
.lead {
  font-size: var(--type-body);
  color: var(--muted);
  line-height: 1.5;
}
```

Глобальный `letter-spacing` тела: `-0.02em`.

### Правила

- **Только 400 / 500 / 600 / 700** — никаких промежуточных значений (680, 720, 740 и т.д.)
- `letter-spacing > 0` — только у `.eyebrow`; для заголовков всегда отрицательный
- `13px` и `14px` допустимы как UI-исключения (навигация, кнопки карточек), в основной контент не идут

---

## Отступы и сетка

### Радиусы

| Токен | Значение | Применение |
|---|---|---|
| `--radius-lg` | `34px` | Крупные карточки, модалки |
| `--radius-md` | `24px` | Средние карточки, тег-карточки |
| `--radius-sm` | `16px` | Мелкие карточки, инпуты |
| `--btn-radius` | `999px` | Кнопки (таблетки) |
| `--input-radius` | `14px` | Поля ввода |
| `--ddoc-radius-card` | `63.394px` | Карточки главного экрана |
| `--ddoc-radius-pill` | `30.5px` | Пилюли главного экрана |
| `--ddoc-radius-button-desktop` | `24px` | Кнопки карточек (десктоп) |
| `--ddoc-radius-button-mobile` | `21px` | Кнопки карточек (мобайл) |

### Высоты кнопок

| Токен | Значение | Применение |
|---|---|---|
| `--btn-height-lg` | `52px` | Главный CTA |
| `--btn-height-md` | `44px` | Стандартная кнопка |
| `--btn-height-sm` | `32px` | Компактная / встроенная |

### Параметры форм

| Токен | Значение |
|---|---|
| `--input-height` | `42px` |
| `--input-radius` | `14px` |
| `--input-padding` | `0 13px` |
| `--input-fs` | `14px` |
| `--label-fs` | `11px` (= `--type-caption`) |
| `--field-gap` | `7px` |

### Брейкпоинты

| Точка | Поведение |
|---|---|
| `> 1080px` | Двух- и трёхколоночные сетки, sticky sidebar |
| `≤ 1080px` | Все сетки становятся однополосными (`grid-template-columns: 1fr`) |
| `≤ 760px` | Мобайл: рейл скрыт, topbar показан, отступы `16px 14px`, карточки главного экрана перестраиваются |

### Отступы workspace

- Десктоп: `padding: 34px clamp(22px, 4vw, 68px) 140px`
- Мобайл: `padding: 16px 14px 134px`
- Калькулятор: `padding: 104px clamp(24px, 4vw, 56px) 78px`

---

## Компоненты

### Кнопки

**Базовый класс:** `.button`

Минимальная высота: `var(--btn-height-md)` = 44px. Радиус: `--btn-radius` = 999px. Размер шрифта: 14px, font-weight: 600.

| Вариант | Класс | Стиль |
|---|---|---|
| Тёмная (primary) | `.button--dark` | bg `var(--text)`, color `var(--bg)` |
| Ghost | `.button--ghost` | border `var(--line)`, bg transparent |
| Soft | `.button--soft` | border `var(--line)`, bg `var(--soft)` |
| Danger | `.button--danger` | bg `rgba(200,77,77,0.12)`, border `rgba(200,77,77,0.22)`, color `#c84d4d` |
| Primary (wide) | `.button--primary.button--wide` | Широкая версия на 100% |
| Small | `.button--sm` | min-height `32px`, padding `0 14px`, font-size `12px` |
| Wide | `.button--wide` | `width: 100%` |

**Hover:** `transform: translateY(-1px)`

**Текстовая кнопка:** `.text-button` — прозрачная, color `var(--muted)`, без border, размер 14px.

**Link-кнопка:** `.link-btn` — как текст, с `text-decoration: underline`.

**Большой CTA (калькулятор):** `.cv-cta-btn` — height `var(--btn-height-lg)` = 52px, bg `--ddoc-color-button-bg`, box-shadow `var(--ddoc-shadow-button)`.

### Инпуты и формы

**Контейнер поля:**
```html
<label class="field">
  <span>Лейбл</span>
  <input type="text">
</label>
```

Стили инпута: `min-height: 42px`, `border: 1px solid var(--line)`, `border-radius: 14px`, `background: var(--surface-strong)`, `padding: 0 13px`, `font-size: 14px`.

**Состояния:**
- Focus: `border-color: var(--accent)`, `outline: none`
- Invalid: `border-color: #c84d4d`, `background: rgba(200,77,77,0.10)`

**Двухколоночная строка:** `.field-row` — `grid-template-columns: repeat(2, 1fr)`, gap `var(--field-gap)`.

**Поле часов:** `.hours-field` — 124px ширина, сетка `1fr auto`, border-radius `14px`.

**Textarea:** `.stage-description-input` / `.client-reply-textarea` — `field-sizing: content`, resize none.

**Инлайн-поле в документе:** `.inline-field` — `display: inline`, border-bottom dashed, background `--accent-soft`, cursor text.

**Чекбокс:** `accent-color: var(--accent)`, размер 16×16px.

### Карточки

#### Сценарий-карточка (`.scenario-card`)
`min-height: 250px`, border `var(--line)`, border-radius `var(--radius-lg)` = 34px, background `var(--surface)`, backdrop-filter blur 24px, box-shadow `var(--shadow)`, padding `clamp(24px,3vw,36px)`.

Вариант primary: `.scenario-card--primary` — border и inset-shadow с оттенком `--accent`.

#### Карточки setup/estimate (`.setup-card`, `.estimate-card`)
border-radius `var(--radius-lg)`, background `var(--surface)`, box-shadow `var(--shadow)`, backdrop-filter blur 24px.

#### Карточки главного экрана (`.deedoc-card`)
267×267px, border-radius `63.394px`.

- `.deedoc-card--quick` — glass-карточка: bg `var(--ddoc-color-glass-card)`, backdrop-filter blur `22.75px`, color `var(--ddoc-color-text-on-glass)`, border `1px solid rgba(255,255,255,0.22)`.
- `.deedoc-card--paper` — плотная: bg `var(--ddoc-color-card-solid)`, padding `35px 30px`.

Hover paper: `box-shadow: 0 28px 70px rgba(32,20,16,0.22)`.

#### Шаблонная карточка договора (`.contract-template-card`)
min-height `74px`, border-radius `24px`, background `var(--surface)`. Активная: border-color mix с `--accent`, background mix с `--accent-soft`.

#### Stage-карточка (`.stage-card`)
border-radius `16px`, background `var(--surface-strong)`. Сетка `52px 1fr 120px`. Состояние dragging: opacity 0.44. Drop-target: `border-color: var(--accent)`.

### Модальные окна

```html
<dialog class="modal">
  <form method="dialog" class="modal__panel">
    <button class="modal__close" value="cancel">×</button>
    ...
    <div class="modal__actions">
      <button class="button button--ghost" value="cancel">Отмена</button>
      <button class="button button--dark">OK</button>
    </div>
  </form>
</dialog>
```

- `.modal` — ширина `min(560px, calc(100vw - 32px))`, без рамки/фона у самого `<dialog>`
- `::backdrop` — `rgba(18,17,14,0.46)`, backdrop-filter blur 6px
- `.modal__panel` — border-radius `var(--radius-lg)` = 34px, bg `var(--surface-strong)`, padding `30px`, gap `16px`, box-shadow `var(--shadow)`
- `.modal__panel--small` — max-width `440px`
- `.modal__panel--privacy` — max-height `80vh`, overflow-y auto
- `.modal__close` — 28×28px, circle, top 12px, right 12px
- `.modal__actions` — `justify-content: flex-end`, gap `10px`
- `.modal__lead` — `color: var(--muted)`, line-height 1.5

### Тоглы и переключатели

#### Главный тогл темы (`.deedoc-toggle`)
87×61px, border-radius `30.5px`, bg `#FFFBFA`. Содержит иконки луны и солнца + скользящий ноб `.deedoc-toggle__knob` (27×27px, круг).

- Светлая: ноб на правой позиции (`left: 43px`), луна видна, солнце скрыто
- Тёмная (`[data-theme="dark"]`): ноб уходит влево (`left: 17px`), луна скрыта, солнце видно
- Анимация ноба: `transition: left 0.28s cubic-bezier(0.34, 1.56, 0.64, 1)` — пружинистый

Мобайл: 60×42px, border-radius `21px`.

#### Второй тогл темы в рейле (`.theme-toggle`)
44×44px, circle, border `var(--line)`, bg `var(--surface-strong)`. Содержит `.theme-toggle__dot` — градиентный кружок.

#### Сегментированный контрол (`.segmented`)
`padding: 4px`, `gap: 4px`, border-radius `999px`, bg `var(--soft)`, border `var(--line)`.

Элемент `.segmented__item`: min-height `42px`, border-radius `999px`, по умолчанию color `var(--muted)`. Активный `.is-active`: bg `var(--surface-strong)`, color `var(--text)`.

Варианты: `.segmented--tax` (3 колонки), `.segmented--client` (2 колонки).

#### Контракт-свитч (`.contract-switch`)
`min-height: 38px`, border-radius `999px`, bg `var(--surface-strong)`. Содержит чекбокс `accent-color: var(--accent)`.

#### Тогл пояснений (`.expl-toggle`)
Custom toggle: `.expl-toggle__track` + `.expl-toggle__thumb` + `.expl-toggle__label`.

### Бейджи и пилюли

#### Стеклянная пилюля (`.deedoc-pill`)
`display: inline-flex`, border-radius `var(--ddoc-radius-pill)` = 30.5px, bg `var(--ddoc-color-glass-pill)`, color `var(--ddoc-color-text-on-glass)`, padding `23px 25px 22px`, font-size `14px`, backdrop-filter blur `22.75px`.

Состояния:
- `.deedoc-pill--back` — кнопка «Назад», скрыта на главном, видна на других экранах
- `.deedoc-pill--section.is-current` — bg `rgba(255,255,255,0.35)`, font-weight `600`

Hover-эффект «слот-машина»: `.pill-clip` / `.pill-reel` — при hover `transform: translateY(-120%)`, показывая текст `data-text`.

Мобайл: padding `16px 20px 15px`, font-size `12px`.

#### Прогресс-бейдж (`.contract-progress`)
`min-height: 24px`, border-radius `999px`, bg `var(--surface-strong)`, padding `0 9px`, font-size `11px`.

Завершён `.is-complete`: border-color mix с `--positive`, color `var(--positive)`.

#### Expense chip (`.expense-chip`)
`border-radius: 999px`, bg `var(--surface-muted)`, padding `9px 12px`, font-size `13px`.

#### Step badge (`.step-badge`)
Используется в навигации по шагам договора.

#### Legal note (`.legal-note`)
Padding `15px`, border-radius `18px`, bg `var(--accent-soft)`, border mix с `--accent`, font-size `13px`.

### Навигация

#### Рейл (`.rail`)
Фиксированный, `inset: 20px auto 20px 20px`, ширина `68px`, border-radius `999px`, bg `var(--surface)`, backdrop-filter blur 24px. На мобайле скрыт (`display: none` при ≤ 760px).

Ссылки `.rail__link`: 48×48px, круг. Активная `.is-active`: bg `var(--soft)`, маркер `.rail__link::before` меняется с 8px серого кружка на 18px акцентного.

`.rail__link.is-muted`: маркер с opacity `0.35`.

#### Топбар (`.topbar`)
Виден только на мобайле (≤ 760px). Sticky, border-radius `999px`, bg `var(--surface)`, backdrop-filter blur 24px.

Ссылки `.topbar__link`: min-height `36px`, padding `0 12px`, border-radius `999px`, font-size `13px`. Активная: bg `var(--soft)`, color `var(--text)`.

#### Навигация договора (`.contract-outline`)
Sticky сайдбар 274px, border-radius `28px`, backdrop-filter blur `18px`. Содержит коллапсируемые группы `.outline-group` с шагами.

Ссылки `.outline-link`: min-height `34px`, border-radius `14px`, font-size `12px`. Активная: bg `var(--surface-strong)`, color `var(--text)`.

---

## Правила и запреты

### Можно
- Использовать `--accent` для интерактивных акцентов, иконок, нумерации
- Смешивать `color-mix(in srgb, ...)` для промежуточных оттенков бордеров и фонов
- Применять `backdrop-filter: blur()` на поверхностях поверх фотофона
- Использовать `transform: translateY(-1px)` как единственный hover-эффект кнопок
- Менять только `--ddoc-color-*` переменные для компонентов главного экрана

### Нельзя
- Использовать полностью непрозрачные плотные цвета там, где ожидается стеклянность
- Добавлять новые акцентные цвета кроме `--accent` / `--positive` / красного `#c84d4d` (danger)
- Применять `letter-spacing > 0` для заголовков (там всегда отрицательный трекинг)
- Убирать `backdrop-filter` с поверхностей поверх пейзажа — это разрушает layering
- Задавать `outline: none` без альтернативной индикации фокуса (исключения прописаны явно: `.deedoc-pill`, `.deedoc-toggle`, `.deedoc-user__avatar`)
- Использовать `--ddoc-color-*` токены за пределами компонентов главного экрана

---

## Тёмная тема

### Как переключается

Атрибут `data-theme="dark"` добавляется на `:root`. JS-обработчик отслеживает кнопки `data-action="toggle-theme"`.

```css
:root[data-theme="dark"] { ... }
[data-theme="dark"] .component { ... }
```

### Что меняется

**Глобальные токены:** все `--bg`, `--surface`, `--text`, `--muted`, `--line`, `--accent`, `--positive`, `--shadow` переопределяются.

**Главный экран:** через CSS-переменные `.deedoc-home` переопределяет `--ddoc-color-*`:
- Карточки `.deedoc-card` получают `border: 1px solid var(--ddoc-color-card-border)`
- `.deedoc-card--paper` добавляет `backdrop-filter`

**Ночной пейзаж:** псевдоэлементы `::after` у `body[data-view="calculator"]` и `::after` у `.deedoc-home__bg-layer[data-layer="sky"]` переходят `opacity: 0 → 1` через `transition: opacity 1.4s cubic-bezier(0.4,0,0.2,1)`.

**Калькулятор:** `[data-theme="dark"] .view--calculator` переопределяет все `--cv-*` токены на полупрозрачные белые.

**Тогл:** ноб `.deedoc-toggle__knob` съезжает влево, луна исчезает, солнце появляется.

**Иконка календаря:** `filter: invert(1)` для `.vacation-date-input::-webkit-calendar-picker-indicator`.
