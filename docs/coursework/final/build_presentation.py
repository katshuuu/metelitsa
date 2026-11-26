# -*- coding: utf-8 -*-
"""Build final coursework presentation PDF (landscape slides)."""
import base64
from pathlib import Path

A = Path("/tmp/final_pres/assets")
F = Path("/tmp/final_pres/fonts")
OUT = Path("/tmp/final_pres")

NAVY = "#030A3C"
MIST = "#EEF1F6"
SLATE = "#56637F"
WHITE = "#FFFFFF"


def b64(path: Path) -> str:
    return base64.b64encode(path.read_bytes()).decode("ascii")


def font_face(name, weight, style):
    data = b64(F / name)
    return f"""@font-face {{
  font-family: "Times New Roman";
  src: url("data:font/ttf;base64,{data}") format("truetype");
  font-weight: {weight};
  font-style: {style};
}}"""


def img(path: Path, style=""):
    mime = "image/png" if path.suffix.lower() == ".png" else "image/jpeg"
    return f'<img src="data:{mime};base64,{b64(path)}" alt="{path.name}" style="{style}"/>'


CSS = "\n".join([
    font_face("TimesNewRoman.ttf", 400, "normal"),
    font_face("TimesNewRomanBold.ttf", 700, "normal"),
    font_face("TimesNewRomanItalic.ttf", 400, "italic"),
    font_face("TimesNewRomanBoldItalic.ttf", 700, "italic"),
    f"""
@page {{ size: 338mm 190mm; margin: 0; }}
* {{ box-sizing: border-box; }}
html, body {{
  margin: 0; padding: 0;
  font-family: "Times New Roman", Times, serif;
  color: {NAVY};
  background: #ddd;
}}
.slide {{
  width: 338mm; height: 190mm;
  page-break-after: always;
  position: relative;
  overflow: hidden;
  background: {WHITE};
  padding: 14mm 16mm 12mm;
}}
.slide:last-child {{ page-break-after: auto; }}
.slide.dark {{ background: {NAVY}; color: {WHITE}; }}
.eyebrow {{
  font-size: 12pt; letter-spacing: 0.18em; text-transform: uppercase;
  color: {SLATE}; margin: 0 0 6mm;
}}
.dark .eyebrow {{ color: rgba(255,255,255,0.65); }}
h1 {{
  font-size: 34pt; font-weight: 700; line-height: 1.15; margin: 0 0 6mm;
}}
h2 {{
  font-size: 26pt; font-weight: 700; line-height: 1.2; margin: 0 0 5mm;
}}
h3 {{
  font-size: 16pt; font-weight: 700; margin: 0 0 3mm;
}}
p, li {{
  font-size: 13.5pt; line-height: 1.4; margin: 0 0 3mm;
}}
ul {{ margin: 0 0 3mm; padding-left: 6mm; }}
.row {{ display: flex; gap: 8mm; align-items: stretch; }}
.col {{ flex: 1; min-width: 0; }}
.card {{
  background: {MIST}; border: 1px solid {SLATE}; padding: 5mm 5.5mm;
}}
.dark .card {{
  background: rgba(255,255,255,0.06); border-color: rgba(255,255,255,0.28); color: {WHITE};
}}
.swatch {{
  display: inline-block; width: 18mm; height: 18mm; border: 1px solid {SLATE};
  vertical-align: middle; margin-right: 3mm;
}}
.palette {{ display: flex; gap: 5mm; flex-wrap: wrap; margin-top: 4mm; }}
.palette .item {{ width: 48mm; }}
.palette .name {{ font-size: 11.5pt; margin-top: 2mm; }}
.palette .hex {{ font-size: 11pt; color: {SLATE}; }}
.fig {{
  border: 1px solid {SLATE}; background: #fafafa; padding: 2mm;
  text-align: center; height: 100%;
}}
.fig img {{
  max-width: 100%; max-height: 132mm; object-fit: contain; display: block; margin: 0 auto;
}}
.fig.tall img {{ max-height: 145mm; }}
.caption {{
  font-size: 11pt; color: {SLATE}; margin-top: 2mm; text-align: center;
}}
.footer {{
  position: absolute; left: 16mm; right: 16mm; bottom: 7mm;
  display: flex; justify-content: space-between;
  font-size: 10.5pt; color: {SLATE};
}}
.dark .footer {{ color: rgba(255,255,255,0.55); }}
.title-center {{
  height: 100%; display: flex; flex-direction: column; justify-content: center; align-items: center;
  text-align: center;
}}
.title-center .logo {{ width: 28mm; height: 28mm; margin-bottom: 6mm; }}
.title-center h1 {{ font-size: 30pt; margin-bottom: 4mm; }}
.title-center .sub {{ font-size: 16pt; margin-bottom: 10mm; }}
.title-center .meta {{ font-size: 13pt; line-height: 1.5; }}
.grid2 {{ display: grid; grid-template-columns: 1fr 1fr; gap: 6mm; }}
.grid3 {{ display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 5mm; }}
.ia {{
  font-size: 12pt; line-height: 1.35;
}}
.ia .block {{
  border: 1px solid {SLATE}; padding: 3.5mm 4mm; margin-bottom: 3mm; background: {MIST};
}}
.ia .block b {{ display: block; margin-bottom: 1.5mm; }}
.num {{
  display: inline-block; width: 7mm; height: 7mm; border-radius: 50%;
  background: {NAVY}; color: {WHITE}; text-align: center; line-height: 7mm;
  font-size: 11pt; margin-right: 2mm;
}}
""",
])

slides = []


def slide(body, dark=False, num=None, total=12):
    cls = "slide dark" if dark else "slide"
    foot = ""
    if num is not None:
        foot = f'<div class="footer"><span>Ребрендинг сайта оркестра «Метелица»</span><span>{num} / {total}</span></div>'
    slides.append(f'<section class="{cls}">{body}{foot}</section>')


# 1. Title
logo = img(A / "mirea_logo.png", "width:28mm;height:28mm;object-fit:contain;") if (A / "mirea_logo.png").exists() else ""
slide(f"""
<div class="title-center">
  {logo}
  <div class="eyebrow">РТУ МИРЭА · Компьютерный дизайн</div>
  <h1>Финальный дизайн и презентация проекта</h1>
  <div class="sub">Ребрендинг сайта Государственного оркестра<br>русских народных инструментов «Метелица»</div>
  <div class="meta">
    Выполнила: студентка группы ЭФБО-01-24<br>
    Шусталова Е. М.<br><br>
    Москва, 2026
  </div>
</div>
""", num=1)

# 2. Contents
slide("""
<div class="eyebrow">Содержание</div>
<h2>Этапы работы</h2>
<div class="grid2" style="margin-top:6mm">
  <div>
    <div class="card" style="margin-bottom:4mm"><h3><span class="num">1</span>Исследование</h3>
    <p>Анализ текущего сайта, конкурентов, аудитории и формулировка задач ребрендинга (практическая работа 2).</p></div>
    <div class="card" style="margin-bottom:4mm"><h3><span class="num">2</span>Архитектура сайта</h3>
    <p>Информационная архитектура лендинга, сценарии пользователей и вайрфрейм первого экрана (практическая работа 3).</p></div>
  </div>
  <div>
    <div class="card" style="margin-bottom:4mm"><h3><span class="num">3</span>Вайрфреймы</h3>
    <p>Десктопные блоки и pop-up’ы (ПР4), мобильная адаптация iPhone 14 (ПР5).</p></div>
    <div class="card"><h3><span class="num">4</span>Итоговый дизайн</h3>
    <p>Цветовая система (4 цвета), единые обводки, согласованная обработка фото; десктоп и мобайл.</p></div>
  </div>
</div>
""", num=2)

# 3. Research
slide("""
<div class="eyebrow">Исследование · практическая работа 2</div>
<h2>Проблемы текущего сайта и цели ребрендинга</h2>
<div class="grid2">
  <div class="card">
    <h3>Проблемы metelitsa-spb.ru</h3>
    <ul>
      <li>Устаревшая визуальная система и слабый бренд-сигнал</li>
      <li>Сложная навигация, нет явного пути к покупке билета</li>
      <li>Нет адаптации под мобильные устройства</li>
      <li>Разрозненный контент: афиша, медиа, школы, контакты</li>
    </ul>
  </div>
  <div class="card">
    <h3>Цели нового лендинга</h3>
    <ul>
      <li>Собрать ключевые сценарии на одной странице</li>
      <li>Выделить целевые действия: билеты и заявка от школ</li>
      <li>Сохранить статус государственного коллектива</li>
      <li>Заложить адаптив с первых этапов проектирования</li>
    </ul>
  </div>
</div>
<div class="grid3" style="margin-top:5mm">
  <div class="card"><h3>Персона А</h3><p>Зритель 25–45: ищет концерт и быстро покупает билет.</p></div>
  <div class="card"><h3>Персона Б</h3><p>Учитель / организатор: оформляет школьный абонемент.</p></div>
  <div class="card"><h3>Персона В</h3><p>Новая аудитория: знакомится с оркестром через медиа.</p></div>
</div>
""", num=3)

# 4. Research conclusions
slide("""
<div class="eyebrow">Исследование · выводы</div>
<h2>Референсы и решения для дизайна</h2>
<div class="row">
  <div class="col card">
    <h3>Что взять у сильных культурных сайтов</h3>
    <ul>
      <li>Тёмный «театральный» hero и крупная типографика</li>
      <li>Короткая афиша на первом экране</li>
      <li>Карточки продуктов (карта, абонемент, школа)</li>
      <li>Медиа-блок как точка входа для новой аудитории</li>
    </ul>
  </div>
  <div class="col card">
    <h3>Ограничения задания на финал</h3>
    <ul>
      <li>Не более 4 цветов на весь макет</li>
      <li>Все обводки — одной толщины (1 px)</li>
      <li>Единая обработка фото: яркость, контраст, насыщенность, гамма</li>
      <li>Десктоп + мобильная версия в одной системе</li>
    </ul>
  </div>
</div>
<p style="margin-top:6mm">Формат решения — одностраничный лендинг с модальными окнами покупки, медиа и заявки.</p>
""", num=4)

# 5. Architecture
slide("""
<div class="eyebrow">Архитектура сайта · практическая работа 3</div>
<h2>Информационная архитектура лендинга</h2>
<div class="ia grid2">
  <div>
    <div class="block"><b>1. Шапка</b>Логотип · якорное меню · «Афиша / Купить билет»</div>
    <div class="block"><b>2. Первый экран</b>Бренд «Метелица» · постер · статус оркестра</div>
    <div class="block"><b>3. Интро и факты</b>Описание · анонс ближайшего концерта · 3 факта</div>
    <div class="block"><b>4. Билеты и абонементы</b>Список концертов · Пушкинская карта · школьный абонемент</div>
  </div>
  <div>
    <div class="block"><b>5. Об оркестре</b>Доверие · цитата · ссылки на историю и состав</div>
    <div class="block"><b>6. Школам и организациям</b>Оффер · форма заявки</div>
    <div class="block"><b>7. Медиа</b>Фото / видео / дискография · лайтбокс</div>
    <div class="block"><b>8. Подвал</b>Контакты госучреждения · соцсети · копирайт</div>
  </div>
</div>
""", num=5)

# 6. Architecture grid
slide("""
<div class="eyebrow">Архитектура · сетка</div>
<h2>Параметры фреймов</h2>
<div class="grid2">
  <div class="card">
    <h3>Десктоп</h3>
    <ul>
      <li>Ширина фрейма: 1920 px (контент 1300 px)</li>
      <li>Сетка: 12 колонок</li>
      <li>Margin 310 · gutter 24</li>
      <li>Колонка ≈ 86 px</li>
    </ul>
  </div>
  <div class="card">
    <h3>Мобильный (iPhone 14)</h3>
    <ul>
      <li>Ширина фрейма: 390 px</li>
      <li>Сетка: 8 колонок</li>
      <li>Margin 16 · gutter 10</li>
      <li>Колонка 36 px · tap target ≥ 44 px</li>
    </ul>
  </div>
</div>
<div class="card" style="margin-top:5mm">
  <h3>Принципы адаптации</h3>
  <p>Контент не удаляется; иерархия сохраняется; элементы, шедшие в ряд на десктопе, на мобильном выстраиваются в столбец (компактность).</p>
</div>
""", num=6)

# 7. Wireframes desktop
slide(f"""
<div class="eyebrow">Вайрфреймы · десктоп · практическая работа 4</div>
<h2>Вайрфрейм остальных блоков и pop-up’ов</h2>
<div class="fig tall">
  {img(A/'wf_desktop.jpg', 'max-height:145mm;width:auto;')}
  <div class="caption">Серый макет: 8 блоков лендинга + всплывающие окна</div>
</div>
""", num=7)

# 8. Wireframes mobile
slide(f"""
<div class="eyebrow">Вайрфреймы · мобильная версия · практическая работа 5</div>
<h2>Адаптивный вайрфрейм iPhone 14</h2>
<div class="fig tall">
  {img(A/'wf_mobile.jpg', 'max-height:145mm;width:auto;')}
  <div class="caption">Лендинг в корпусе смартфона и мобильные окна заявки / покупки</div>
</div>
""", num=8)

# 9. Design system
slide(f"""
<div class="eyebrow">Итоговый дизайн · дизайн-система</div>
<h2>Цвета, обводки, фото</h2>
<div class="palette">
  <div class="item"><div class="swatch" style="background:{NAVY}"></div><div class="name">Navy</div><div class="hex">#030A3C</div></div>
  <div class="item"><div class="swatch" style="background:{WHITE}"></div><div class="name">White</div><div class="hex">#FFFFFF</div></div>
  <div class="item"><div class="swatch" style="background:{MIST}"></div><div class="name">Mist</div><div class="hex">#EEF1F6</div></div>
  <div class="item"><div class="swatch" style="background:{SLATE}"></div><div class="name">Slate</div><div class="hex">#56637F</div></div>
</div>
<div class="grid2" style="margin-top:7mm">
  <div class="card">
    <h3>Обводки</h3>
    <p>Все рамки карточек, полей ввода и разделители — <b>1 px</b>, цвет slate / полупрозрачный white на тёмном фоне. Скругления кнопок и полей едины.</p>
  </div>
  <div class="card">
    <h3>Обработка фотографий</h3>
    <p>Единый стиль: тёплый сценический свет, повышенный контраст, умеренная насыщенность, общая «театральная» гамма под navy. Плейсхолдеры вайрфрейма заменены согласованными кадрами оркестра.</p>
  </div>
</div>
<p style="margin-top:5mm">Типографика: выразительный антиквенный акцидентный шрифт для бренда и заголовков + нейтральный гротеск для UI.</p>
""", num=9)

# 10. Final design desktop hero
slide(f"""
<div class="eyebrow">Итоговый дизайн · десктоп</div>
<h2>Первый экран</h2>
<div class="fig">
  {img(A/'design_desktop_hero.jpg', 'max-height:138mm;width:auto;')}
  <div class="caption">Hero: бренд, постер в раме, шапка с целевым действием «Афиша»</div>
</div>
""", num=10)

# 11. Final design desktop full + mobile
slide(f"""
<div class="eyebrow">Итоговый дизайн · десктоп и мобайл</div>
<h2>Полный лендинг</h2>
<div class="fig tall">
  {img(A/'design_both_overview.jpg', 'max-height:148mm;width:auto;')}
  <div class="caption">Слева — десктоп (1440 px), справа — мобильная версия (390 px)</div>
</div>
""", num=11)

# 12. Final mobile + conclusion
slide(f"""
<div class="eyebrow">Итоговый дизайн · мобильная версия</div>
<h2>Адаптив iPhone 14</h2>
<div class="row">
  <div class="col" style="flex:0.42">
    <div class="fig" style="padding:3mm">
      {img(A/'design_mobile_hero.jpg', 'max-height:145mm;width:auto;')}
    </div>
  </div>
  <div class="col">
    <div class="card" style="margin-bottom:4mm">
      <h3>Что сделано</h3>
      <ul>
        <li>Все 8 блоков перенесены без потери контента</li>
        <li>Ряды карточек → вертикальный столбец</li>
        <li>Tap targets ≥ 44 px</li>
        <li>Те же 4 цвета и толщина обводок</li>
      </ul>
    </div>
    <div class="card">
      <h3>Итог проекта</h3>
      <p>Пройден полный цикл: исследование → архитектура → вайрфреймы (десктоп и адаптив) → финальный визуальный дизайн. Лендинг готов к публикации и защите.</p>
    </div>
  </div>
</div>
""", num=12)

html = f"""<!doctype html>
<html lang="ru">
<head>
<meta charset="utf-8"/>
<title>Презентация — Метелица</title>
<style>{CSS}</style>
</head>
<body>
{''.join(slides)}
</body>
</html>
"""

html_path = OUT / "presentation.html"
html_path.write_text(html, encoding="utf-8")
print("html bytes", len(html), "slides", len(slides))
