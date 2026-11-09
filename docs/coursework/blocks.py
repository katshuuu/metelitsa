# -*- coding: utf-8 -*-
"""Block renderers for the Метелица landing wireframe."""
from wf import (S, span, colx, FRAME_W, MARGIN, CONTENT_W, COL_W,
                DARK, WHITE, MIST, CARD_ON_LIGHT, CARD_BORDER, PHOTO,
                INK, INK2, LIGHT_INK, LIGHT_INK2, LINE, LINE_DARK)

CX = MARGIN                 # content left
CR = MARGIN + CONTENT_W     # content right

# ---------- Block 1: Header (120) ----------
def header(s, y):
    h = 120
    s.rect(0, y, FRAME_W, h, DARK)
    s.line(0, y + h, FRAME_W, y + h, stroke=LINE_DARK)
    # logo
    s.rect(CX, y + 44, 120, 34, "none", stroke="#9a9a9a")
    s.text(CX + 60, y + 66, "ЛОГО", size=14, fill="#d8d8d8", anchor="middle")
    # 5 menu anchors
    items = ["Об оркестре", "Билеты и абонементы", "Школам и организациям", "Медиа", "Контакты"]
    tx = CX + 470
    for it in items:
        s.text(tx, y + 66, it, size=14.5, fill="#dcdcdc")
        tx += len(it) * 8.0 + 34
    # buy-ticket button (only filled element)
    bw = 150
    s.btn(CR - bw, y + 38, bw, 46, "Купить билет", dark=False)
    return h

# ---------- Block 2: First screen / poster (680) ----------
def poster(s, y):
    h = 680
    s.rect(0, y, FRAME_W, h, DARK)
    # ornament hints at frame edges (simple shapes, not on grid)
    for ox in (150, FRAME_W - 230):
        s.rect(ox, y + 150, 80, 150, "none", stroke="#565656")
        s.line(ox + 40, y + 150, ox + 40, y + 300, stroke="#565656")
    # lettering "Метелица"
    s.text(FRAME_W / 2, y + 150, "Метелица", size=96, fill="#e9e9e9", anchor="middle")
    # photo in barocco frame (center)
    fw, fx = 820, FRAME_W / 2 - 410
    s.rect(fx - 18, y + 180, fw + 36, 420, "none", stroke="#707070", sw=6)  # frame
    s.photo(fx, y + 198, fw, 384)
    # soloist cutout silhouette in front, cropped by screen bottom
    s.rect(FRAME_W / 2 - 110, y + 360, 220, 340, PHOTO, stroke="#8f8f8f")
    s.line(FRAME_W / 2 - 110, y + 360, FRAME_W / 2 + 110, y + 700, stroke="#8f8f8f")
    s.text(FRAME_W / 2, y + 640, "фото солистки", size=13, fill="#5c5c5c", anchor="middle")
    return h

# ---------- Block 3: Intro + nearest concert + facts (720) ----------
def intro(s, y):
    h = 720
    s.rect(0, y, FRAME_W, h, DARK)
    s.line(CX, y + 1, CR, y + 1, stroke=LINE_DARK)
    # left: status + description + 2 buttons (cols 1-6)
    lx, lw = span(0, 6)
    s.kicker(lx, y + 60, "ГОСУДАРСТВЕННЫЙ ОРКЕСТР РУССКИХ НАРОДНЫХ ИНСТРУМЕНТОВ", ink="#9d9d9d")
    s.bars(lx, y + 92, lw, 4, fill="#9b9b9b", bw=9, gap=14)
    s.btn(lx, y + 212, 190, 48, "Афиша и билеты", dark=False)
    s.obtn(lx + 210, y + 212, 165, 48, "Смотреть видео", stroke="#8c8c8c", ink="#dcdcdc")
    # right: nearest concert card (cols 9-12)
    cx, cw = span(8, 4)
    s.rect(cx, y + 20, cw, 360, CARD_ON_LIGHT, stroke=CARD_BORDER)
    s.kicker(cx + 32, y + 70, "АНОНС")
    s.text(cx + 32, y + 150, "11", size=84, fill=INK)
    s.text(cx + 32, y + 182, "октября 2026", size=15, fill=INK2)
    s.text(cx + 32, y + 232, "В ритме времени", size=24, fill=INK)
    s.text(cx + 32, y + 262, "Яани Кирик", size=15, fill=INK2)
    s.btn(cx + 32, y + 296, cw - 64, 48, "Подробнее и билеты", dark=True)
    # facts row (3 × 4 cols) under a divider
    fy = y + 470
    s.line(CX, fy - 30, CR, fy - 30, stroke=LINE_DARK)
    facts = [("37 лет", "С 1989 года — на сцене Ленинградской области"),
             ("Оркестр солистов", "Музыканты — лауреаты всероссийских конкурсов"),
             ("Пушкинская карта", "Принимается при покупке билетов")]
    for i, (t, d) in enumerate(facts):
        fx, fwi = span(i * 4, 4)
        s.line(fx, fy, fx + fwi, fy, stroke="#6a6a6a")
        s.text(fx, fy + 70, t, size=40, fill="#e4e4e4")
        s.bars(fx, fy + 100, fwi, 2, fill="#8f8f8f", bw=7, gap=11)
    return h

# ---------- Block 4: Билеты и абонементы (mist) ----------
def tickets(s, y):
    rows = [("11", "октября 2026", "КОНЦЕРТ", "«В ритме времени»", "Яани Кирик"),
            ("12", "апреля 2026", "ФЕСТИВАЛЬ", "«Гуслей серебристый перезвон»", "Капелла Санкт-Петербурга"),
            ("8", "июня", "КОНЦЕРТ", "Ко Дню семьи, любви и верности", "Ленинградская область"),
            ("28", "декабря", "КОНЦЕРТ", "Новогодний «Киносерпантин»", "Капелла Санкт-Петербурга")]
    row_h = 118
    top = 150
    list_h = top + len(rows) * row_h + 70
    cards_h = 300
    h = list_h + cards_h + 110
    s.rect(0, y, FRAME_W, h, MIST)
    s.kicker(CX, y + 70, "БИЛЕТЫ И АБОНЕМЕНТЫ")
    s.text(CX, y + 128, "Ближайшие концерты", size=56, fill=INK)
    ry = y + top + 40
    s.line(CX, ry - 20, CR, ry - 20, stroke="#c9c9c9")
    for d, dt, kind, title, place in rows:
        s.text(CX, ry + 44, d, size=44, fill=INK)
        s.text(CX, ry + 74, dt, size=15, fill=INK2)
        kx = colx(2)
        s.text(kx, ry + 24, kind, size=11, fill=INK2, spacing=1.4)
        s.text(kx, ry + 56, title, size=26, fill=INK)
        s.text(colx(8), ry + 46, place, size=14, fill=INK2)
        s.text(CR, ry + 46, "→", size=18, fill=INK, anchor="end")
        s.line(CX, ry + row_h - 20, CR, ry + row_h - 20, stroke="#c9c9c9")
        ry += row_h
    s.arrowlink(CX, ry + 30, "Весь архив афиши", ink=INK)
    # 3 product cards
    cy = y + list_h + 40
    cards = [("01", "Пушкинская карта", "Оплата билетов молодёжи 14–22 лет"),
             ("02", "Школьный абонемент", "«Волшебный мир народной музыки»"),
             ("03", "Творческая школа", "Мастер-классы Игоря Тонина и солистов")]
    for i, (n, t, d) in enumerate(cards):
        cx, cw = span(i * 4, 4)
        s.rect(cx, cy, cw, 240, CARD_ON_LIGHT, stroke=CARD_BORDER)
        s.text(cx + 32, cy + 52, n, size=12, fill=INK2, spacing=2)
        s.text(cx + 32, cy + 110, t, size=28, fill=INK)
        s.bars(cx + 32, cy + 134, cw - 64, 2, fill="#bdbdbd", bw=7, gap=11)
        s.arrowlink(cx + 32, cy + 210, "Подробнее", ink=INK, size=14)
    return h

# ---------- Block 5: Об оркестре (navy) ----------
def about(s, y):
    h = 760
    s.rect(0, y, FRAME_W, h, DARK)
    px, pw = span(0, 5)
    s.photo(px, y + 90, pw, 560, fill="#565656")
    tx, tw = span(6, 6)
    s.kicker(tx, y + 120, "ОБ ОРКЕСТРЕ", ink="#9d9d9d")
    s.text(tx, y + 200, "Сохраняя", size=56, fill="#e7e7e7")
    s.text(tx, y + 262, "национальный код —", size=56, fill="#e7e7e7")
    s.text(tx, y + 324, "объединяем сердца", size=56, fill="#e7e7e7")
    s.bars(tx, y + 370, tw, 3, fill="#8f8f8f", bw=9, gap=15)
    for i, lab in enumerate(["История оркестра", "Состав", "Игорь Тонин"]):
        s.arrowlink(tx + i * 230, y + 490, lab, ink="#dcdcdc", size=15)
    return h

# ---------- Block 6: Школам и организациям (mist) + form ----------
def schools(s, y):
    h = 740
    s.rect(0, y, FRAME_W, h, MIST)
    lx, lw = span(0, 5)
    s.kicker(lx, y + 80, "ШКОЛАМ И ОРГАНИЗАЦИЯМ")
    s.text(lx, y + 150, "Пригласите", size=46, fill=INK)
    s.text(lx, y + 202, "оркестр на своё", size=46, fill=INK)
    s.text(lx, y + 254, "мероприятие", size=46, fill=INK)
    s.bars(lx, y + 300, lw, 3, fill="#bdbdbd", bw=8, gap=13)
    s.arrowlink(lx, y + 420, "Условия абонемента", ink=INK)
    s.arrowlink(lx, y + 470, "Приглашаем к сотрудничеству", ink=INK)
    # form card on the right (cols 7-12) — общая область
    fx, fw = span(6, 6)
    s.rect(fx, y + 70, fw, 600, CARD_ON_LIGHT, stroke=CARD_BORDER)
    s.text(fx + 40, y + 130, "Напишите нам", size=30, fill=INK)
    labels = ["Имя", "Организация", "Телефон или e-mail", "Сообщение"]
    iy = y + 180
    for i, lab in enumerate(labels):
        s.text(fx + 40, iy + 4, lab, size=13, fill=INK2)
        hh = 70 if i == 3 else 28
        s.line(fx + 40, iy + hh, fx + fw - 40, iy + hh, stroke="#b9b9b9")
        iy += hh + 44
    s.rect(fx + 40, y + 190, 18, 18, "none", stroke="#9a9a9a")  # consent
    s.text(fx + 68, y + 190 + 14, "Согласие с правилами", size=12, fill=INK2)
    s.btn(fx + 40, iy - 10, fw - 80, 50, "Отправить заявку", dark=True)
    return h

# ---------- Block 7: Медиа (mist) ----------
def media(s, y):
    h = 620
    s.rect(0, y, FRAME_W, h, MIST)
    s.kicker(CX, y + 80, "МЕДИА")
    s.text(CX, y + 140, "Слушать и смотреть", size=56, fill=INK)
    gy = y + 200
    gw = (CONTENT_W - 3 * 24) / 4.0
    for i in range(4):
        s.photo(CX + i * (gw + 24), gy, gw, 250)
    s.arrowlink(CX, gy + 310, "Фотогалерея", ink=INK)
    return h

# ---------- Block 8: Контакты / footer (navy) ----------
def footer(s, y):
    h = 560
    s.rect(0, y, FRAME_W, h, DARK)
    s.line(0, y, FRAME_W, y, stroke=LINE_DARK)
    # col 1: logo + description
    s.rect(CX, y + 70, 120, 34, "none", stroke="#8c8c8c")
    s.text(CX + 60, y + 92, "ЛОГО", size=13, fill="#cfcfcf", anchor="middle")
    s.bars(CX, y + 130, span(0, 3)[1], 3, fill="#6f6f6f", bw=7, gap=12)
    cols = [("РАЗДЕЛЫ", ["Об оркестре", "Новости", "Медиа", "Программы", "Пушкинская карта"]),
            ("КОНТАКТЫ", ["пл. Стачек, 4, Санкт-Петербург", "+7 (812) 539-63-58", "metelitsa.spb@ya.ru", "Все контакты →"]),
            ("МЫ В СЕТИ", ["ВКонтакте", "RuTube", "Яндекс Карты", "YouTube"])]
    for i, (head, items) in enumerate(cols):
        cxp = colx(4 + i * 3)
        s.kicker(cxp, y + 86, head, ink="#9d9d9d")
        for j, it in enumerate(items):
            s.text(cxp, y + 128 + j * 34, it, size=14.5, fill="#cfcfcf")
    # bottom line
    s.line(CX, y + h - 90, CR, y + h - 90, stroke=LINE_DARK)
    s.text(CX, y + h - 52, "Учредитель: Комитет по культуре и туризму Ленинградской области", size=13, fill="#a7a7a7")
    s.text(CR, y + h - 52, "© 2009–2026 Государственный оркестр «Метелица»", size=13, fill="#a7a7a7", anchor="end")
    return h
