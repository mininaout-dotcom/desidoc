# -*- coding: utf-8 -*-
"""Собирает пошаговую PDF-инструкцию по подключению YandexGPT к DesiDoc.
Запуск:  python3 build_pdf.py
Выход:   Инструкция_YandexGPT_DesiDoc.pdf (рядом со скриптом)
"""
import os, textwrap
from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm
from reportlab.lib.colors import HexColor
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.enums import TA_LEFT, TA_CENTER
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import (BaseDocTemplate, PageTemplate, Frame, Paragraph,
                                Spacer, Table, TableStyle, Preformatted, Flowable,
                                PageBreak, KeepTogether)

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.abspath(os.path.join(HERE, "..", ".."))
OUT = os.path.join(HERE, "Инструкция_YandexGPT_DesiDoc.pdf")

# ── Шрифты ────────────────────────────────────────────────────────────────
FONTS = os.path.join(ROOT, "assets", "fonts", "onest")
pdfmetrics.registerFont(TTFont("Onest", os.path.join(FONTS, "Onest-Regular.ttf")))
pdfmetrics.registerFont(TTFont("Onest-B", os.path.join(FONTS, "Onest-SemiBold.ttf")))
pdfmetrics.registerFont(TTFont("Mono", "/System/Library/Fonts/Supplemental/Courier New.ttf"))
pdfmetrics.registerFont(TTFont("Mono-B", "/System/Library/Fonts/Supplemental/Courier New Bold.ttf"))

# ── Цвета ─────────────────────────────────────────────────────────────────
INK    = HexColor("#141416")
GRAY   = HexColor("#6B6B70")
LINE   = HexColor("#D8D8DE")
BLUE   = HexColor("#027BF3")   # основной акцент (кнопки консоли)
RED    = HexColor("#E5484D")   # маркеры «куда жать»
GREEN  = HexColor("#1B8A4C")
PANEL  = HexColor("#F6F6F9")
CODEBG = HexColor("#F3F3F6")
NOTEBG = HexColor("#FFF7E0")
WARNBG = HexColor("#FDECEC")
OKBG   = HexColor("#E9F6EE")

PAGE_W, PAGE_H = A4
M = 18 * mm
CW = PAGE_W - 2 * M   # ширина контента

# ── Стили ─────────────────────────────────────────────────────────────────
def st(name, **kw):
    base = dict(fontName="Onest", fontSize=10, leading=14.5, textColor=INK)
    base.update(kw)
    return ParagraphStyle(name, **base)

S = {
    "title":  st("title", fontName="Onest-B", fontSize=26, leading=31),
    "sub":    st("sub", fontSize=12, leading=17, textColor=GRAY),
    "part":   st("part", fontName="Onest-B", fontSize=17, leading=21, spaceBefore=14, spaceAfter=4, keepWithNext=1),
    "step":   st("step", fontName="Onest-B", fontSize=12.5, leading=16, spaceBefore=12, spaceAfter=3, keepWithNext=1),
    "body":   st("body", spaceAfter=4),
    "li":     st("li", leftIndent=14, spaceAfter=3, bulletIndent=2),
    "legend": st("legend", fontSize=9.5, leading=13.5, leftIndent=14, spaceAfter=2, textColor=INK),
    "note":   st("note", fontSize=9.5, leading=13.5),
    "code":   ParagraphStyle("code", fontName="Mono", fontSize=7.6, leading=9.6, textColor=INK),
    "codeS":  ParagraphStyle("codeS", fontName="Mono", fontSize=8.2, leading=10.6, textColor=INK),
    "cap":    st("cap", fontSize=8.5, leading=11, textColor=GRAY, spaceBefore=2, spaceAfter=8),
    "th":     st("th", fontName="Onest-B", fontSize=9, leading=12),
    "td":     st("td", fontSize=9, leading=12.5),
}

def P(text, style="body"): return Paragraph(text, S[style])

def note(text, kind="note"):
    bg = {"note": NOTEBG, "warn": WARNBG, "ok": OKBG}[kind]
    bar = {"note": HexColor("#E3B341"), "warn": RED, "ok": GREEN}[kind]
    label = {"note": "Нюанс.", "warn": "Важно!", "ok": "Проверка."}[kind]
    t = Table([[Paragraph("<font name='Onest-B'>%s</font> %s" % (label, text), S["note"])]],
              colWidths=[CW])
    t.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), bg),
        ("LINEBEFORE", (0, 0), (0, -1), 3, bar),
        ("LEFTPADDING", (0, 0), (-1, -1), 10),
        ("RIGHTPADDING", (0, 0), (-1, -1), 10),
        ("TOPPADDING", (0, 0), (-1, -1), 7),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 7),
    ]))
    return t

def codeblock(text, small=False):
    """Возвращает список таблиц: длинный код режем на куски, чтобы влезал в страницы."""
    style = S["codeS"] if small else S["code"]
    wrapped = []
    for line in text.rstrip("\n").split("\n"):
        wrapped.extend(textwrap.wrap(line, 96, subsequent_indent="      ",
                                     drop_whitespace=False) or [""])
    out = []
    CHUNK = 62  # строк на блок — с запасом влезает в рамку страницы
    for i in range(0, len(wrapped), CHUNK):
        pre = Preformatted("\n".join(wrapped[i:i + CHUNK]), style)
        t = Table([[pre]], colWidths=[CW])
        t.setStyle(TableStyle([
            ("BACKGROUND", (0, 0), (-1, -1), CODEBG),
            ("BOX", (0, 0), (-1, -1), 0.5, LINE),
            ("LEFTPADDING", (0, 0), (-1, -1), 9),
            ("RIGHTPADDING", (0, 0), (-1, -1), 9),
            ("TOPPADDING", (0, 0), (-1, -1), 7),
            ("BOTTOMPADDING", (0, 0), (-1, -1), 7),
        ]))
        out.append(t)
        out.append(Spacer(1, 4))
    return out

# ── Рисовалка макетов экранов ─────────────────────────────────────────────
class Mock(Flowable):
    def __init__(self, h, painter):
        super().__init__()
        self.w, self.h, self.painter = CW, h, painter
    def wrap(self, aw, ah): return (self.w, self.h)
    def draw(self): self.painter(self.canv, self.w, self.h)

def win(c, x, y, w, h, url):
    """Окно браузера с адресной строкой."""
    c.setFillColor(HexColor("#FFFFFF")); c.setStrokeColor(LINE); c.setLineWidth(1)
    c.roundRect(x, y, w, h, 6, stroke=1, fill=1)
    c.setFillColor(PANEL)
    c.roundRect(x, y + h - 20, w, 20, 6, stroke=0, fill=1)
    c.rect(x, y + h - 20, w, 10, stroke=0, fill=1)
    for i, col in enumerate(("#E5484D", "#E3B341", "#1B8A4C")):
        c.setFillColor(HexColor(col)); c.circle(x + 12 + i * 11, y + h - 10, 3, stroke=0, fill=1)
    c.setFillColor(HexColor("#FFFFFF")); c.setStrokeColor(LINE)
    c.roundRect(x + 48, y + h - 16.5, w - 60, 13, 4, stroke=1, fill=1)
    c.setFillColor(GRAY); c.setFont("Onest", 7)
    c.drawString(x + 54, y + h - 13, url)

def btn(c, x, y, w, h, label, primary=True, fs=7.5):
    c.setFillColor(BLUE if primary else HexColor("#FFFFFF"))
    c.setStrokeColor(BLUE if primary else LINE); c.setLineWidth(1)
    c.roundRect(x, y, w, h, 4, stroke=1, fill=1)
    c.setFillColor(HexColor("#FFFFFF") if primary else INK)
    c.setFont("Onest-B", fs); c.drawCentredString(x + w / 2, y + h / 2 - fs * 0.34, label)

def field(c, x, y, w, label, value, mono=False):
    c.setFillColor(GRAY); c.setFont("Onest", 6.5); c.drawString(x, y + 15, label.upper())
    c.setFillColor(HexColor("#FFFFFF")); c.setStrokeColor(LINE)
    c.roundRect(x, y, w, 13, 3, stroke=1, fill=1)
    c.setFillColor(INK); c.setFont("Mono" if mono else "Onest", 7)
    c.drawString(x + 5, y + 4, value)

def marker(c, n, x, y):
    c.setFillColor(RED); c.circle(x, y, 6.2, stroke=0, fill=1)
    c.setFillColor(HexColor("#FFFFFF")); c.setFont("Onest-B", 8)
    c.drawCentredString(x, y - 2.8, str(n))

def sidebar(c, x, y, w, h, items, active=-1):
    c.setFillColor(PANEL); c.rect(x, y, w, h, stroke=0, fill=1)
    iy = y + h - 16
    c.setFont("Onest", 7)
    for i, it in enumerate(items):
        if i == active:
            c.setFillColor(HexColor("#E3EFFD")); c.roundRect(x + 4, iy - 4, w - 8, 13, 3, stroke=0, fill=1)
            c.setFillColor(BLUE)
        else:
            c.setFillColor(INK)
        c.drawString(x + 10, iy, it); iy -= 16

def legend(items):
    out = []
    for n, txt in items:
        out.append(Paragraph(
            "<font color='#E5484D' name='Onest-B'>(%d)</font>&nbsp; %s" % (n, txt), S["legend"]))
    out.append(Spacer(1, 4))
    return out

# ── Макет: титульная схема ────────────────────────────────────────────────
def d_arch(c, w, h):
    bw, bh = 128, 46; gap = (w - 3 * bw) / 2; y = h - 56
    boxes = [("Сайт desidoc.ru", "кнопка «Собрать\nиз брифа»"),
             ("Облачная функция", "ваш бэкенд (API)\nв Яндекс Облаке"),
             ("YandexGPT", "модель, данные\nостаются в РФ")]
    for i, (t, sub) in enumerate(boxes):
        x = i * (bw + gap)
        c.setFillColor(HexColor("#FFFFFF")); c.setStrokeColor(INK); c.setLineWidth(1.2)
        c.roundRect(x, y, bw, bh, 7, stroke=1, fill=1)
        c.setFillColor(INK); c.setFont("Onest-B", 9.5)
        c.drawCentredString(x + bw / 2, y + bh - 16, t)
        c.setFillColor(GRAY); c.setFont("Onest", 7)
        for j, ln in enumerate(sub.split("\n")):
            c.drawCentredString(x + bw / 2, y + bh - 27 - j * 8.5, ln)
    def arrow(x1, x2, yy, label, up=True):
        c.setStrokeColor(BLUE if up else GREEN); c.setLineWidth(1.2)
        c.line(x1, yy, x2, yy)
        hx = x2 if up else x1; s = 4 if up else -4
        c.setFillColor(BLUE if up else GREEN)
        p = c.beginPath(); p.moveTo(hx, yy); p.lineTo(hx - s, yy + 3); p.lineTo(hx - s, yy - 3); p.close()
        c.drawPath(p, stroke=0, fill=1)
        c.setFont("Onest", 6.6); c.setFillColor(BLUE if up else GREEN)
        c.drawCentredString((x1 + x2) / 2, yy + (4 if up else -9.5), label)
    a1, a2 = bw + 6, bw + gap - 6
    b1, b2 = 2 * bw + gap + 6, 2 * bw + 2 * gap - 6
    arrow(a1, a2, y + 32, "бриф")
    arrow(a1, a2, y + 12, "этапы+часы", up=False)
    arrow(b1, b2, y + 32, "запрос")
    arrow(b1, b2, y + 12, "ответ", up=False)
    c.setFillColor(GRAY); c.setFont("Onest", 8)
    c.drawString(0, y - 20, "Наверх уходит бриф (без перс. данных), обратно — JSON с этапами и часами.")
    c.drawString(0, y - 32, "Сумму считает сам калькулятор: часы x ставка + налог. Модель денег не считает.")

# ── Макеты консоли ────────────────────────────────────────────────────────
def d_folder(c, w, h):
    x, y, ww, hh = 10, 8, w - 20, h - 14
    win(c, x, y, ww, hh, "console.yandex.cloud")
    sidebar(c, x + 1, y + 1, 92, hh - 22, ["Обзор", "Сервисы", "Биллинг", "IAM"], active=0)
    c.setFillColor(INK); c.setFont("Onest-B", 10); c.drawString(x + 106, y + hh - 40, "Каталог default")
    c.setFillColor(GRAY); c.setFont("Onest", 7); c.drawString(x + 106, y + hh - 56, "ИДЕНТИФИКАТОР")
    c.setFillColor(HexColor("#FFFFFF")); c.setStrokeColor(LINE)
    c.roundRect(x + 106, y + hh - 76, 170, 15, 3, stroke=1, fill=1)
    c.setFillColor(INK); c.setFont("Mono", 7.5); c.drawString(x + 112, y + hh - 71.5, "b1gabcdef1234567890")
    btn(c, x + 282, y + hh - 76, 66, 15, "Скопировать", primary=False, fs=6.6)
    marker(c, 1, x + 100, y + hh - 40 + 3)
    marker(c, 2, x + 352, y + hh - 68)

def d_ai(c, w, h):
    x, y, ww, hh = 10, 8, w - 20, h - 14
    win(c, x, y, ww, hh, "console.yandex.cloud")
    c.setFillColor(HexColor("#FFFFFF")); c.setStrokeColor(BLUE); c.setLineWidth(1.4)
    c.roundRect(x + 20, y + hh - 46, 220, 16, 4, stroke=1, fill=1)
    c.setFillColor(INK); c.setFont("Onest", 8); c.drawString(x + 27, y + hh - 41, "AI Studio")
    c.setFillColor(PANEL); c.roundRect(x + 20, y + hh - 68, 220, 17, 3, stroke=0, fill=1)
    c.setFillColor(INK); c.setFont("Onest-B", 7.5)
    c.drawString(x + 27, y + hh - 63, "AI Studio (Foundation Models)")
    c.setFillColor(GRAY); c.setFont("Onest", 6.5)
    c.drawString(x + 138, y + hh - 63, "нейросети и агенты")
    btn(c, x + 262, y + hh - 68, 88, 17, "Подключить")
    marker(c, 1, x + 14, y + hh - 38)
    marker(c, 2, x + 358, y + hh - 60)

def d_sa(c, w, h):
    x, y, ww, hh = 10, 8, w - 20, h - 14
    win(c, x, y, ww, hh, "console.yandex.cloud -> IAM")
    sidebar(c, x + 1, y + 1, 118, hh - 22,
            ["Пользователи", "Сервисные аккаунты", "Роли"], active=1)
    c.setFillColor(INK); c.setFont("Onest-B", 9.5)
    c.drawString(x + 132, y + hh - 38, "Создание сервисного аккаунта")
    field(c, x + 132, y + hh - 74, 150, "Имя", "ai-brief-sa", mono=True)
    field(c, x + 132, y + hh - 108, 190, "Роли в каталоге", "ai.languageModels.user", mono=True)
    btn(c, x + 132, y + 14, 74, 17, "Создать")
    marker(c, 1, x + 60, y + hh - 52)
    marker(c, 2, x + 292, y + hh - 68)
    marker(c, 3, x + 332, y + hh - 102)
    marker(c, 4, x + 214, y + 22)

def d_fn(c, w, h):
    x, y, ww, hh = 10, 8, w - 20, h - 14
    win(c, x, y, ww, hh, "console.yandex.cloud -> Cloud Functions")
    c.setFillColor(INK); c.setFont("Onest-B", 10); c.drawString(x + 20, y + hh - 40, "Functions")
    btn(c, x + ww - 128, y + hh - 46, 108, 17, "Создать функцию")
    field(c, x + 20, y + hh - 86, 170, "Имя", "ai-brief-proxy", mono=True)
    c.setFillColor(GRAY); c.setFont("Onest", 7)
    c.drawString(x + 20, y + 18, "После создания откроется страница функции с вкладками: Обзор, Редактор, Тестирование, Логи")
    marker(c, 1, x + ww - 136, y + hh - 38)
    marker(c, 2, x + 196, y + hh - 80)

def d_ver(c, w, h):
    x, y, ww, hh = 10, 8, w - 20, h - 14
    win(c, x, y, ww, hh, "функция ai-brief-proxy -> Редактор")
    col = x + 20
    field(c, col, y + hh - 58, 150, "Среда выполнения", "Node.js 20", mono=True)
    field(c, col + 168, y + hh - 58, 150, "Точка входа", "index.handler", mono=True)
    field(c, col, y + hh - 94, 150, "Таймаут, сек", "30", mono=True)
    field(c, col + 168, y + hh - 94, 150, "Сервисный аккаунт", "ai-brief-sa", mono=True)
    c.setFillColor(GRAY); c.setFont("Onest", 6.5); c.drawString(col, y + hh - 116, "ПЕРЕМЕННЫЕ ОКРУЖЕНИЯ")
    c.setFillColor(HexColor("#FFFFFF")); c.setStrokeColor(LINE)
    c.roundRect(col, y + hh - 150, 318, 30, 3, stroke=1, fill=1)
    c.setFillColor(INK); c.setFont("Mono", 7)
    c.drawString(col + 6, y + hh - 132, "FOLDER_ID      = b1gabcdef1234567890")
    c.drawString(col + 6, y + hh - 144, "ALLOWED_ORIGIN = https://desidoc.ru")
    btn(c, col, y + 12, 100, 17, "Создать версию")
    marker(c, 1, col + 158, y + hh - 52)
    marker(c, 2, col + 326, y + hh - 52)
    marker(c, 3, col + 326, y + hh - 88)
    marker(c, 4, col + 326, y + hh - 136)
    marker(c, 5, col + 108, y + 20)

def d_pub(c, w, h):
    x, y, ww, hh = 10, 8, w - 20, h - 14
    win(c, x, y, ww, hh, "функция ai-brief-proxy -> Обзор")
    c.setFillColor(INK); c.setFont("Onest", 8); c.drawString(x + 20, y + hh - 42, "Публичная функция")
    c.setFillColor(HexColor("#CDEBD8")); c.roundRect(x + 110, y + hh - 47, 26, 13, 6.5, stroke=0, fill=1)
    c.setFillColor(GREEN); c.circle(x + 129, y + hh - 40.5, 5, stroke=0, fill=1)
    c.setFillColor(GRAY); c.setFont("Onest", 6.5); c.drawString(x + 20, y + hh - 66, "ССЫЛКА ДЛЯ ВЫЗОВА")
    c.setFillColor(HexColor("#FFFFFF")); c.setStrokeColor(LINE)
    c.roundRect(x + 20, y + hh - 86, 268, 15, 3, stroke=1, fill=1)
    c.setFillColor(INK); c.setFont("Mono", 7)
    c.drawString(x + 26, y + hh - 81.5, "https://functions.yandexcloud.net/d4e...")
    btn(c, x + 294, y + hh - 86, 66, 15, "Скопировать", primary=False, fs=6.6)
    marker(c, 1, x + 146, y + hh - 40)
    marker(c, 2, x + 366, y + hh - 78)

def d_test(c, w, h):
    x, y, ww, hh = 10, 8, w - 20, h - 14
    win(c, x, y, ww, hh, "функция ai-brief-proxy -> Тестирование")
    c.setFillColor(GRAY); c.setFont("Onest", 6.5); c.drawString(x + 20, y + hh - 40, "ТЕЛО ЗАПРОСА")
    c.setFillColor(HexColor("#FFFFFF")); c.setStrokeColor(LINE)
    c.roundRect(x + 20, y + hh - 76, 340, 30, 3, stroke=1, fill=1)
    c.setFillColor(INK); c.setFont("Mono", 6.8)
    c.drawString(x + 26, y + hh - 58, '{ "brief": "Лендинг для кофейни, 5 экранов,')
    c.drawString(x + 26, y + hh - 70, '  нужен дизайн и графики" }')
    btn(c, x + 20, y + hh - 102, 96, 17, "Запустить тест")
    c.setFillColor(OKBG); c.roundRect(x + 20, y + 12, 340, hh - 124, 3, stroke=0, fill=1)
    c.setFillColor(GREEN); c.setFont("Mono", 6.8)
    c.drawString(x + 26, y + hh - 124, '{ "estimate_title": "...", "stages": [')
    c.drawString(x + 26, y + hh - 136, '  { "name": "Брифинг", "hours": 3 }, ... ] }')
    marker(c, 1, x + 368, y + hh - 62)
    marker(c, 2, x + 124, y + hh - 94)
    marker(c, 3, x + 368, y + 24)

# ── Футер ─────────────────────────────────────────────────────────────────
def footer(canv, doc):
    canv.saveState()
    canv.setFont("Onest", 7.5); canv.setFillColor(GRAY)
    canv.drawString(M, 12 * mm, "DesiDoc  ·  AI-разбор брифа через YandexGPT")
    canv.drawRightString(PAGE_W - M, 12 * mm, "стр. %d" % doc.page)
    canv.restoreState()

# ── Контент ───────────────────────────────────────────────────────────────
def build():
    doc = BaseDocTemplate(OUT, pagesize=A4,
                          leftMargin=M, rightMargin=M, topMargin=16 * mm, bottomMargin=18 * mm,
                          title="Подключение YandexGPT к DesiDoc — пошаговая инструкция",
                          author="DesiDoc")
    frame = Frame(M, 18 * mm, CW, PAGE_H - 34 * mm, id="f")
    doc.addPageTemplates([PageTemplate(id="p", frames=[frame], onPage=footer)])

    E = []  # elements

    # ══ Титул ══
    E.append(Spacer(1, 8))
    E.append(P("AI-разбор брифа для DesiDoc", "title"))
    E.append(Spacer(1, 4))
    E.append(P("Пошаговая инструкция: подключаем YandexGPT через Яндекс Облако — "
               "свой бэкенд (API), без хранения ключей и без передачи данных за рубеж.", "sub"))
    E.append(Spacer(1, 14))
    E.append(Mock(126, d_arch))
    E.append(Spacer(1, 6))
    E.append(P("<font name='Onest-B'>Что понадобится:</font> аккаунт в Яндекс Облаке (уже есть), "
               "около 40 минут. <font name='Onest-B'>Стоимость:</font> примерно 0,2–0,8 ₽ за один разбор "
               "брифа; тысяча смет — несколько сотен рублей."))
    E.append(Spacer(1, 4))
    E.append(note("Картинки в инструкции — схемы экранов, а не скриншоты. Консоль Яндекса иногда "
                  "меняет названия кнопок; ориентируйтесь по смыслу. Красные кружки (1)(2)(3) — "
                  "места, куда смотреть и жать."))
    E.append(Spacer(1, 6))
    E.append(P("<font name='Onest-B'>Маршрут:</font> Часть 1 — доступ к модели (шаги 1–5) · "
               "Часть 2 — бэкенд/API (шаги 6–10) · Часть 3 — сайт (шаги 11–14) · "
               "Часть 4 — политика (шаги 15–16) · Часть 5 — проверка (шаг 17). "
               "В конце: полный код, решение проблем, чек-лист."))
    E.append(PageBreak())

    # ══ Часть 1 ══
    E.append(P("Часть 1. Доступ к YandexGPT", "part"))

    E.append(P("Шаг 1. Вход в консоль", "step"))
    E.append(P("Откройте <font name='Mono'>console.yandex.cloud</font> и войдите под своим "
               "Яндекс-аккаунтом. Аккаунт у вас уже одобрен — просто входим."))

    E.append(P("Шаг 2. Проверить платёжный аккаунт", "step"))
    E.append(P("Слева в меню найдите <font name='Onest-B'>Billing (Платежи)</font>. Статус должен быть "
               "<font name='Onest-B'>ACTIVE</font> или «Пробный период». Если так — идём дальше."))

    E.append(P("Шаг 3. Узнать ID каталога (FOLDER_ID)", "step"))
    E.append(P("На главной странице консоли выберите своё облако — внутри будет "
               "<font name='Onest-B'>каталог</font> (обычно называется <font name='Mono'>default</font>). "
               "Нужен именно каталог, не облако! Откройте его."))
    E.append(Mock(130, d_folder))
    E.extend(legend([(1, "Название каталога — вы внутри каталога <font name='Mono'>default</font>."),
                     (2, "Строка «Идентификатор» — нажмите «Скопировать». Это ваш "
                         "<font name='Mono'>FOLDER_ID</font> (вид: <font name='Mono'>b1g…</font>). "
                         "Запишите его — понадобится на шаге 8.")]))

    E.append(P("Шаг 4. Включить YandexGPT (AI Studio)", "step"))
    E.append(Mock(110, d_ai))
    E.extend(legend([(1, "В поиске сверху наберите <font name='Onest-B'>AI Studio</font> "
                         "(старое название — Foundation Models) и откройте сервис."),
                     (2, "Если появится кнопка «Подключить» или экран с условиями — нажмите и "
                         "примите условия. После этого модель доступна в вашем каталоге.")]))

    E.append(P("Шаг 5. Сервисный аккаунт (доступ функции к модели)", "step"))
    E.append(P("Это «технический пользователь», от имени которого функция будет ходить к модели. "
               "Благодаря ему не нужно создавать и прятать API-ключи."))
    E.append(Mock(160, d_sa))
    E.extend(legend([(1, "В поиске наберите <font name='Onest-B'>IAM</font> &gt; раздел "
                         "«Сервисные аккаунты» &gt; «Создать сервисный аккаунт»."),
                     (2, "Имя: <font name='Mono'>ai-brief-sa</font> (можно любое, но так будет "
                         "совпадать с инструкцией)."),
                     (3, "Нажмите «Добавить роль» и выберите роль "
                         "<font name='Mono'>ai.languageModels.user</font> — начните печатать "
                         "«ai.lang…», она найдётся."),
                     (4, "Нажмите «Создать». Готово — ключей создавать не нужно.")]))
    E.append(note("Роль пишется именно так: <font name='Mono'>ai.languageModels.user</font>. "
                  "Если взять похожую (например, viewer) — функция получит ошибку доступа."))
    E.append(PageBreak())

    # ══ Часть 2 ══
    E.append(P("Часть 2. Бэкенд (API): облачная функция", "part"))
    E.append(P("Функция — это маленький сервер, который живёт в Яндекс Облаке и просыпается только "
               "на время запроса. Платить за «простой» не нужно. Она принимает бриф с сайта, вырезает "
               "персональные данные, спрашивает YandexGPT и возвращает JSON с этапами."))

    E.append(P("Шаг 6. Создать функцию", "step"))
    E.append(Mock(125, d_fn))
    E.extend(legend([(1, "В поиске наберите <font name='Onest-B'>Cloud Functions</font> &gt; "
                         "«Создать функцию»."),
                     (2, "Имя: <font name='Mono'>ai-brief-proxy</font> &gt; «Создать».")]))

    E.append(P("Шаг 7. Вставить код", "step"))
    E.append(P("Откройте вкладку <font name='Onest-B'>Редактор</font>. Выберите среду выполнения "
               "<font name='Mono'>Node.js 20</font>. В файл <font name='Mono'>index.js</font> вставьте "
               "ПОЛНОСТЬЮ код из Приложения A (он же лежит в проекте: "
               "<font name='Mono'>experiments/ai-brief/cloud-function/index.js</font>)."))

    E.append(P("Шаг 8. Настроить версию", "step"))
    E.append(Mock(180, d_ver))
    E.extend(legend([(1, "Среда выполнения: <font name='Mono'>Node.js 20</font>."),
                     (2, "Точка входа: <font name='Mono'>index.handler</font> — именно так, "
                         "с точкой посередине."),
                     (3, "Таймаут: 30 секунд. Сервисный аккаунт: выберите "
                         "<font name='Mono'>ai-brief-sa</font> из списка — это самый важный пункт!"),
                     (4, "Переменные окружения: добавьте <font name='Mono'>FOLDER_ID</font> = ваш ID "
                         "из шага 3 и <font name='Mono'>ALLOWED_ORIGIN</font> = "
                         "<font name='Mono'>https://desidoc.ru</font>."),
                     (5, "Нажмите «Создать версию» и подождите несколько секунд.")]))
    E.append(note("Необязательная переменная <font name='Mono'>YAGPT_MODEL</font>: значение "
                  "<font name='Mono'>yandexgpt</font> — модель Pro (умнее, стоит дороже), "
                  "<font name='Mono'>yandexgpt-lite</font> — Lite (дешевле). Если переменную не "
                  "добавлять, используется Pro."))

    E.append(P("Шаг 9. Сделать функцию публичной и взять ссылку", "step"))
    E.append(Mock(125, d_pub))
    E.extend(legend([(1, "Вкладка «Обзор» &gt; включите тумблер <font name='Onest-B'>«Публичная "
                         "функция»</font>. Без этого сайт получит ошибку 403."),
                     (2, "Скопируйте <font name='Onest-B'>ссылку для вызова</font> — вид "
                         "<font name='Mono'>https://functions.yandexcloud.net/d4e…</font> "
                         "Это адрес вашего API. Запишите — понадобится на шаге 12.")]))

    E.append(P("Шаг 10. Проверить функцию (ещё без сайта)", "step"))
    E.append(Mock(170, d_test))
    E.extend(legend([(1, "Вкладка «Тестирование»: в поле тела запроса вставьте JSON с брифом "
                         "(как на схеме)."),
                     (2, "Нажмите «Запустить тест»."),
                     (3, "Успех — в ответе JSON с полем <font name='Mono'>stages</font> "
                         "(этапы и часы). Если вместо этого ошибка — загляните в "
                         "Приложение B «Решение проблем».")]))
    E.append(note("Если во вкладке Тестирование просят «тип данных» — выберите "
                  "<font name='Onest-B'>HTTPS / http-запрос</font>, метод POST, и вставьте JSON в тело.", "note"))
    E.append(PageBreak())

    # ══ Часть 3 ══
    E.append(P("Часть 3. Подключить сайт", "part"))
    E.append(P("Правим один файл: <font name='Mono'>js/designkit.js</font>. Совет: сначала "
               "потренируйтесь на копии в <font name='Mono'>experiments/unit-pricing/js/designkit.js</font>."))

    E.append(P("Шаг 11. Переименовать старую логику в запасную", "step"))
    E.append(P("Найдите в файле функцию <font name='Mono'>async function analyzeBrief(text)</font> "
               "и переименуйте её в <font name='Mono'>analyzeBriefLocal</font>. Она останется запасным "
               "вариантом: если интернет или функция недоступны — калькулятор всё равно посчитает."))

    E.append(P("Шаг 12. Добавить новую функцию analyzeBrief", "step"))
    E.append(P("Вставьте над <font name='Mono'>analyzeBriefLocal</font> код ниже и подставьте свою "
               "ссылку из шага 9 в первую строку:"))
    E.extend(codeblock(SNIPPET, small=True))

    E.append(P("Шаг 13. Включить кнопку AI", "step"))
    E.append(P("Найдите строку <font name='Mono'>const BRIEF_AI_ENTRY_ENABLED = false;</font> "
               "и поменяйте <font name='Mono'>false</font> на <font name='Mono'>true</font>."))

    E.append(P("Шаг 14. Поднять версию файла", "step"))
    E.append(P("В <font name='Mono'>index.html</font> найдите строку с "
               "<font name='Mono'>designkit.js?v=…</font> и увеличьте число на 1. Иначе браузеры "
               "покажут старую версию из кэша, и кнопка не появится."))

    # ══ Часть 4 ══
    E.append(P("Часть 4. Согласие и политика (обязательно)", "part"))
    E.append(P("Шаг 15. Предупреждение в окне брифа", "step"))
    E.append(P("В окне ввода брифа покажите текст (удобно через существующую строку статуса "
               "<font name='Mono'>setBriefAiStatus</font>):"))
    E.append(note("«Текст обрабатывается ИИ для оценки сметы. Не вставляйте персональные данные "
                  "третьих лиц (телефоны, почту, ФИО клиентов).»", "warn"))
    E.append(P("Шаг 16. Строка в политику", "step"))
    E.append(P("В <font name='Mono'>policy.html</font> добавьте пункт:"))
    E.append(note("«Для предварительной оценки сметы введённый текст обрабатывается языковой моделью "
                  "YandexGPT (Yandex Cloud, РФ). Текст не сохраняется. Не вводите персональные данные "
                  "третьих лиц.»", "warn"))
    E.append(P("Финальные формулировки политики стоит показать юристу — разовая недорогая страховка "
               "на фоне нынешних штрафов по 152-ФЗ."))

    # ══ Часть 5 ══
    E.append(P("Часть 5. Финальная проверка", "part"))
    E.append(P("Шаг 17. Проверяем всё вместе", "step"))
    for t in ["1. Откройте сайт (убедитесь, что загрузилась новая версия — шаг 14).",
              "2. Выберите проект «Другое» — появится кнопка «Собрать из брифа».",
              "3. Вставьте: «Презентация на 15 слайдов для стартапа, есть графики и схемы».",
              "4. Нажмите «Рассчитать»."]:
        E.append(P(t, "li"))
    E.append(note("Должны появиться этапы с часами, и сумма посчитается автоматически. "
                  "Затем выключите интернет и повторите — сработает запасной вариант без ошибок.", "ok"))
    E.append(PageBreak())

    # ══ Приложение A ══
    E.append(P("Приложение A. Полный код облачной функции", "part"))
    E.append(P("Скопируйте всё содержимое в файл <font name='Mono'>index.js</font> в редакторе функции "
               "(шаг 7). Этот же файл лежит в проекте: "
               "<font name='Mono'>experiments/ai-brief/cloud-function/index.js</font>."))
    with open(os.path.join(HERE, "cloud-function", "index.js"), encoding="utf-8") as f:
        E.extend(codeblock(f.read()))
    E.append(PageBreak())

    # ══ Приложение B ══
    E.append(P("Приложение B. Решение проблем", "part"))
    rows = [["Что видите", "Причина", "Что делать"],
            ["«Нет токена сервисного аккаунта»", "К версии функции не привязан сервисный аккаунт",
             "Шаг 8, пункт (3): выберите ai-brief-sa и создайте версию заново"],
            ["«AI недоступен» (ошибка 502)", "Неверный FOLDER_ID, модель не активирована или нет роли",
             "Проверьте шаги 3–5 и переменную FOLDER_ID в шаге 8"],
            ["«Некорректный бриф» (400)", "Пустой текст или длиннее 4000 символов", "Сократите бриф"],
            ["Ошибка 403 при вызове по ссылке", "Функция не публичная", "Шаг 9: включите тумблер"],
            ["В консоли браузера ошибка CORS", "ALLOWED_ORIGIN не совпадает с адресом сайта",
             "Поставьте https://desidoc.ru (на время локальных тестов можно *)"],
            ["Кнопки «Собрать из брифа» нет", "Флаг выключен или браузер держит старый файл",
             "Шаги 13–14: включите флаг и поднимите версию"],
            ["Этапы пришли, но часы странные", "Модель оценивает «средне по рынку»",
             "Это нормально: часы — прикидка, поправьте под свою скорость"]]
    tdata = [[Paragraph(cell, S["th" if r == 0 else "td"]) for cell in row]
             for r, row in enumerate(rows)]
    tb = Table(tdata, colWidths=[CW * 0.30, CW * 0.32, CW * 0.38], repeatRows=1)
    tb.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, 0), PANEL),
        ("GRID", (0, 0), (-1, -1), 0.5, LINE),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING", (0, 0), (-1, -1), 6), ("RIGHTPADDING", (0, 0), (-1, -1), 6),
        ("TOPPADDING", (0, 0), (-1, -1), 5), ("BOTTOMPADDING", (0, 0), (-1, -1), 5),
    ]))
    E.append(tb)

    E.append(P("Приложение C. Чек-лист безопасности (152-ФЗ)", "part"))
    for t in ["[x]  Данные остаются в РФ (YandexGPT) — трансграничной передачи нет.",
              "[x]  Персональные данные вырезаются в функции до отправки в модель (stripPII).",
              "[x]  Функция ничего не сохраняет — нет базы персональных данных.",
              "[x]  Ключи не хранятся — доступ через сервисный аккаунт.",
              "[  ]  Предупреждение в окне брифа добавлено (шаг 15).",
              "[  ]  Строка в политике добавлена (шаг 16).",
              "[  ]  Финальный текст политики показан юристу."]:
        E.append(Paragraph("<font name='Mono'>%s</font>" % t, S["li"]))
    E.append(Spacer(1, 8))
    E.append(P("Готово! После шага 17 фича работает: бриф &gt; этапы и часы от YandexGPT &gt; сумма "
               "по вашей ставке и налогу. Если что-то не сходится — таблица в Приложении B.", "body"))

    doc.build(E)
    print("OK:", OUT)

SNIPPET = r'''const AI_BRIEF_ENDPOINT = "https://functions.yandexcloud.net/dXXXXXXXX"; // <-- ваша ссылка (шаг 9)

async function analyzeBrief(text) {
  const source = String(text || "").trim();
  if (!source) throw new Error("Добавьте бриф или сообщение клиента.");
  try {
    const res = await fetch(AI_BRIEF_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ brief: source }),
    });
    if (!res.ok) throw new Error("bad status");
    const data = await res.json();
    if (!data || !Array.isArray(data.stages) || !data.stages.length) throw new Error("empty");
    return data;                      // формат тот же — applyBriefAnalysis не меняем
  } catch (e) {
    return analyzeBriefLocal(source); // запасной вариант, если AI не ответил
  }
}'''

if __name__ == "__main__":
    build()
