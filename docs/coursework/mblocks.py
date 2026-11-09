# -*- coding: utf-8 -*-
"""Mobile block renderers for Metelitsa landing (iPhone 14 / 390 px)."""
from mwf import (S, span, FRAME_W, MARGIN, CONTENT_W, DARK, WHITE, MIST,
                 CARD, BORDER, INK, INK2, LINE, LINE_DARK)

CX = MARGIN
CR = MARGIN + CONTENT_W

def header(s, y):
    h = 69
    s.rect(0, y, FRAME_W, h, DARK)
    s.line(0, y + h, FRAME_W, y + h, stroke=LINE_DARK)
    s.rect(CX, y + 22, 96, 26, "none", stroke="#9a9a9a")
    s.text(CX + 48, y + 40, "ЛОГО", size=12, fill="#d8d8d8", anchor="middle")
    # hamburger 44×44 tap target
    bx, by = FRAME_W - MARGIN - 44, y + (h - 44) / 2
    s.rect(bx, by, 44, 44, "none")
    for i in range(3):
        s.rect(bx + 10, by + 14 + i * 8, 24, 1.5, "#ffffff")
    return h

def poster(s, y):
    h = 560
    s.rect(0, y, FRAME_W, h, DARK)
    s.text(FRAME_W / 2, y + 70, "Метелица", size=48, fill="#e9e9e9", anchor="middle")
    # framed photo
    fw = CONTENT_W - 20
    fx = CX + 10
    s.rect(fx - 8, y + 100, fw + 16, 300, "none", stroke="#707070", sw=4)
    s.photo(fx, y + 112, fw, 276)
    # soloist cutout cropped at bottom
    s.rect(FRAME_W / 2 - 70, y + 320, 140, 250, "#c2c2c2", stroke="#8f8f8f")
    s.line(FRAME_W / 2 - 70, y + 320, FRAME_W / 2 + 70, y + 560, stroke="#8f8f8f")
    s.text(FRAME_W / 2, y + 520, "фото солистки", size=12, fill="#5c5c5c", anchor="middle")
    return h

def intro(s, y):
    h = 820
    s.rect(0, y, FRAME_W, h, DARK)
    s.line(CX, y + 1, CR, y + 1, stroke=LINE_DARK)
    s.kicker(CX, y + 40, "ГОСУДАРСТВЕННЫЙ ОРКЕСТР", ink="#9d9d9d")
    s.kicker(CX, y + 58, "РУССКИХ НАРОДНЫХ ИНСТРУМЕНТОВ", ink="#9d9d9d")
    s.bars(CX, y + 84, CONTENT_W, 4, fill="#9b9b9b", bw=8, gap=12)
    # stacked CTAs ≥44
    s.btn(CX, y + 180, CONTENT_W, 48, "Афиша и билеты", dark=False)
    s.obtn(CX, y + 240, CONTENT_W, 48, "Смотреть видео", stroke="#8c8c8c", ink="#dcdcdc")
    # concert card full width
    cy = y + 320
    s.rect(CX, cy, CONTENT_W, 280, CARD, stroke=BORDER)
    s.kicker(CX + 24, cy + 40, "АНОНС")
    s.text(CX + 24, cy + 110, "11", size=64, fill=INK)
    s.text(CX + 24, cy + 140, "октября 2026", size=14, fill=INK2)
    s.text(CX + 24, cy + 180, "В ритме времени", size=22, fill=INK)
    s.text(CX + 24, cy + 208, "Яани Кирик", size=14, fill=INK2)
    s.btn(CX + 24, cy + 228, CONTENT_W - 48, 44, "Подробнее и билеты", dark=True)
    # facts stacked (compactness)
    fy = y + 640
    s.line(CX, fy - 20, CR, fy - 20, stroke=LINE_DARK)
    facts = [("37 лет", "С 1989 года — на сцене"),
             ("Оркестр солистов", "Лауреаты конкурсов"),
             ("Пушкинская карта", "Оплата билетов 14–22")]
    yy = fy
    for t, d in facts:
        s.line(CX, yy, CR, yy, stroke="#6a6a6a")
        s.text(CX, yy + 36, t, size=24, fill="#e4e4e4")
        s.text(CX, yy + 58, d, size=13, fill="#9a9a9a")
        yy += 58
    return h

def tickets(s, y):
    rows = [
        ("11", "октября 2026", "КОНЦЕРТ", "«В ритме времени»", "Яани Кирик"),
        ("12", "апреля 2026", "ФЕСТИВАЛЬ", "«Гуслей серебристый перезвон»", "Капелла СПб"),
        ("8", "июня", "КОНЦЕРТ", "Ко Дню семьи", "ЛО"),
        ("28", "декабря", "КОНЦЕРТ", "«Киносерпантин»", "Капелла СПб"),
    ]
    cards = [
        ("01", "Пушкинская карта", "Оплата билетов 14–22 лет"),
        ("02", "Школьный абонемент", "«Волшебный мир…»"),
        ("03", "Творческая школа", "Мастер-классы солистов"),
    ]
    row_h = 108
    list_h = 150 + len(rows) * row_h + 50
    cards_h = len(cards) * 170 + 40
    h = list_h + cards_h + 40
    s.rect(0, y, FRAME_W, h, MIST)
    s.kicker(CX, y + 40, "БИЛЕТЫ И АБОНЕМЕНТЫ")
    s.text(CX, y + 84, "Ближайшие", size=32, fill=INK)
    s.text(CX, y + 120, "концерты", size=32, fill=INK)
    ry = y + 160
    s.line(CX, ry - 16, CR, ry - 16, stroke="#c9c9c9")
    for d, dt, kind, title, place in rows:
        s.text(CX, ry + 36, d, size=34, fill=INK)
        s.text(CX, ry + 58, dt, size=13, fill=INK2)
        s.text(CX + 90, ry + 24, kind, size=10, fill=INK2, spacing=1.2)
        s.text(CX + 90, ry + 48, title, size=16, fill=INK)
        s.text(CX + 90, ry + 70, place, size=13, fill=INK2)
        s.text(CR, ry + 48, "→", size=16, fill=INK, anchor="end")
        s.line(CX, ry + row_h - 16, CR, ry + row_h - 16, stroke="#c9c9c9")
        ry += row_h
    s.arrowlink(CX, ry + 20, "Весь архив афиши", ink=INK, size=14)
    cy = y + list_h
    for i, (n, t, d) in enumerate(cards):
        yy = cy + i * 170
        s.rect(CX, yy, CONTENT_W, 150, CARD, stroke=BORDER)
        s.text(CX + 20, yy + 36, n, size=12, fill=INK2, spacing=1.6)
        s.text(CX + 20, yy + 72, t, size=22, fill=INK)
        s.bars(CX + 20, yy + 90, CONTENT_W - 40, 1, fill="#bdbdbd", bw=7)
        # tap target 44
        s.arrowlink(CX + 20, yy + 128, "Подробнее", ink=INK, size=14)
    return h

def about(s, y):
    h = 720
    s.rect(0, y, FRAME_W, h, DARK)
    s.photo(CX, y + 40, CONTENT_W, 260, fill="#565656")
    s.kicker(CX, y + 340, "ОБ ОРКЕСТРЕ", ink="#9d9d9d")
    s.text(CX, y + 390, "Сохраняя", size=32, fill="#e7e7e7")
    s.text(CX, y + 428, "национальный код —", size=32, fill="#e7e7e7")
    s.text(CX, y + 466, "объединяем сердца", size=32, fill="#e7e7e7")
    s.bars(CX, y + 500, CONTENT_W, 3, fill="#8f8f8f", bw=8, gap=12)
    links = ["История оркестра", "Состав", "Игорь Тонин"]
    for i, lab in enumerate(links):
        s.arrowlink(CX, y + 590 + i * 36, lab, ink="#dcdcdc", size=14)
    return h

def schools(s, y):
    h = 900
    s.rect(0, y, FRAME_W, h, MIST)
    s.kicker(CX, y + 40, "ШКОЛАМ И ОРГАНИЗАЦИЯМ")
    s.text(CX, y + 90, "Пригласите", size=30, fill=INK)
    s.text(CX, y + 126, "оркестр на своё", size=30, fill=INK)
    s.text(CX, y + 162, "мероприятие", size=30, fill=INK)
    s.bars(CX, y + 190, CONTENT_W, 3, fill="#bdbdbd", bw=7, gap=11)
    s.arrowlink(CX, y + 280, "Условия абонемента", ink=INK, size=14)
    s.arrowlink(CX, y + 316, "Приглашаем к сотрудничеству", ink=INK, size=14)
    # form card full width
    fy = y + 360
    s.rect(CX, fy, CONTENT_W, 500, CARD, stroke=BORDER)
    s.text(CX + 20, fy + 44, "Напишите нам", size=24, fill=INK)
    labels = ["Имя", "Организация", "Телефон или e-mail", "Сообщение"]
    iy = fy + 80
    for i, lab in enumerate(labels):
        s.text(CX + 20, iy + 4, lab, size=12, fill=INK2)
        hh = 64 if i == 3 else 28
        s.line(CX + 20, iy + hh, CR - 20, iy + hh, stroke="#b9b9b9")
        iy += hh + 36
    s.rect(CX + 20, iy - 10, 18, 18, "none", stroke="#9a9a9a")
    s.text(CX + 48, iy + 4, "Согласие с правилами", size=12, fill=INK2)
    s.btn(CX + 20, iy + 36, CONTENT_W - 40, 48, "Отправить заявку", dark=True)
    return h

def media(s, y):
    h = 520
    s.rect(0, y, FRAME_W, h, MIST)
    s.kicker(CX, y + 40, "МЕДИА")
    s.text(CX, y + 86, "Слушать и", size=32, fill=INK)
    s.text(CX, y + 122, "смотреть", size=32, fill=INK)
    # 2×2 grid (compactness from 4-in-a-row)
    gap = 10
    gw = (CONTENT_W - gap) / 2
    gy = y + 160
    for r in range(2):
        for c in range(2):
            s.photo(CX + c * (gw + gap), gy + r * (gw * 0.75 + gap), gw, gw * 0.75)
    s.arrowlink(CX, gy + 2 * (gw * 0.75 + gap) + 24, "Фотогалерея", ink=INK, size=14)
    return h

def footer(s, y):
    h = 620
    s.rect(0, y, FRAME_W, h, DARK)
    s.line(0, y, FRAME_W, y, stroke=LINE_DARK)
    s.rect(CX, y + 36, 96, 26, "none", stroke="#8c8c8c")
    s.text(CX + 48, y + 54, "ЛОГО", size=12, fill="#cfcfcf", anchor="middle")
    s.bars(CX, y + 80, CONTENT_W, 3, fill="#6f6f6f", bw=6, gap=10)
    blocks = [
        ("РАЗДЕЛЫ", ["Об оркестре", "Новости", "Медиа", "Программы", "Пушкинская карта"]),
        ("КОНТАКТЫ", ["пл. Стачек, 4, СПб", "+7 (812) 539-63-58", "metelitsa.spb@ya.ru", "Все контакты →"]),
        ("МЫ В СЕТИ", ["ВКонтакте", "RuTube", "Яндекс Карты", "YouTube"]),
    ]
    yy = y + 160
    for head, items in blocks:
        s.kicker(CX, yy, head, ink="#9d9d9d")
        for j, it in enumerate(items):
            s.text(CX, yy + 28 + j * 28, it, size=14, fill="#cfcfcf")
        yy += 28 + len(items) * 28 + 24
    s.line(CX, y + h - 70, CR, y + h - 70, stroke=LINE_DARK)
    s.text(CX, y + h - 42, "Учредитель: Комитет по культуре и туризму ЛО", size=11, fill="#a7a7a7")
    s.text(CX, y + h - 22, "© 2009–2026 Оркестр «Метелица»", size=11, fill="#a7a7a7")
    return h
