# -*- coding: utf-8 -*-
"""Pop-up window wireframes (grayscale modals over a dimmed page)."""
from wf import (S, wrap_svg, INK, INK2, CARD_BORDER, PHOTO, LINE)

BACKDROP = "#575757"
MODAL = "#f4f4f4"
PAD = 40

def _frame(w, h, mw):
    s = S()
    s.rect(0, 0, w, h, BACKDROP)
    mx = (w - mw) / 2
    s.rect(mx, 40, mw, h - 80, MODAL, stroke="#cfcfcf")
    s.text(mx + mw - 30, 78, "✕", size=18, fill=INK, anchor="end")
    return s, mx

def p_buy():
    w, h, mw = 760, 720, 600
    s, mx = _frame(w, h, mw)
    ix = mx + PAD
    iw = mw - 2 * PAD
    s.kicker(ix, 100, "ПОКУПКА БИЛЕТА")
    s.text(ix, 168, "11", size=56, fill=INK)
    s.text(ix + 100, 150, "«В ритме времени»", size=22, fill=INK)
    s.text(ix + 100, 180, "11 октября 2026 · Яани Кирик", size=14, fill=INK2)
    s.line(ix, 210, ix + iw, 210, stroke=LINE)
    for i, cat in enumerate(["Партер", "Амфитеатр", "Балкон"]):
        ry = 250 + i * 60
        s.text(ix, ry, cat, size=15, fill=INK)
        s.text(ix + iw - 150, ry, "— 0 +", size=15, fill=INK2, anchor="end")
        s.rect(ix + iw - 120, ry - 22, 120, 32, "none", stroke=CARD_BORDER)
    s.line(ix, 440, ix + iw, 440, stroke=LINE)
    s.rect(ix, 470, iw / 2 - 10, 40, "none", stroke=CARD_BORDER)
    s.text(ix + 14, 495, "Банковская карта", size=13, fill=INK2)
    s.rect(ix + iw / 2 + 10, 470, iw / 2 - 10, 40, "none", stroke="#8f8f8f")
    s.text(ix + iw / 2 + 24, 495, "Пушкинская (14–22)", size=13, fill=INK)
    s.text(ix, 548, "E-mail — регистрация не нужна", size=13, fill=INK2)
    s.line(ix, 566, ix + iw, 566, stroke=CARD_BORDER)
    s.rect(ix, 596, 18, 18, "none", stroke="#9a9a9a")
    s.text(ix + 28, 610, "Согласен с правилами продажи", size=12, fill=INK2)
    s.text(ix, 650, "Итого: 0 ₽", size=16, fill=INK)
    s.btn(ix + iw - 220, 630, 220, 44, "Перейти к оплате", dark=True)
    return wrap_svg(s.dump(), w, h), "«Покупка билета»"

def p_done():
    w, h, mw = 760, 440, 600
    s, mx = _frame(w, h, mw)
    ix = mx + PAD
    iw = mw - 2 * PAD
    s.rect(ix + iw / 2 - 26, 120, 52, 52, "none", stroke="#7a7a7a")
    s.line(ix + iw / 2 - 12, 146, ix + iw / 2 - 2, 158, stroke="#7a7a7a", sw=2)
    s.line(ix + iw / 2 - 2, 158, ix + iw / 2 + 16, 132, stroke="#7a7a7a", sw=2)
    s.text(ix + iw / 2, 215, "Билет оформлен", size=28, fill=INK, anchor="middle")
    s.bars(ix + 60, 250, iw - 120, 2, fill="#bdbdbd", bw=7, gap=12)
    s.obtn(ix + iw / 2 - 120, 320, 240, 44, "Добавить в календарь", stroke=CARD_BORDER, ink=INK, size=14)
    return wrap_svg(s.dump(), w, h), "«Билет оформлен»"

def p_pushkin():
    w, h, mw = 760, 560, 600
    s, mx = _frame(w, h, mw)
    ix = mx + PAD
    iw = mw - 2 * PAD
    s.kicker(ix, 100, "ПУШКИНСКАЯ КАРТА")
    s.text(ix, 150, "Как оплатить картой", size=26, fill=INK)
    steps = [("01", "Оформите Пушкинскую карту на Госуслугах"),
             ("02", "Выберите концерт оркестра «Метелица»"),
             ("03", "Оплатите билет картой при оформлении")]
    for i, (n, t) in enumerate(steps):
        ry = 210 + i * 86
        s.text(ix, ry + 20, n, size=30, fill=INK2)
        s.text(ix + 70, ry, t, size=15, fill=INK)
        s.bars(ix + 70, ry + 16, iw - 70, 1, fill="#bdbdbd", bw=7)
    s.btn(ix, 500, 220, 44, "Выбрать концерт", dark=True)
    return wrap_svg(s.dump(), w, h), "«Пушкинская карта»"

def p_school():
    w, h, mw = 760, 620, 600
    s, mx = _frame(w, h, mw)
    ix = mx + PAD
    iw = mw - 2 * PAD
    s.kicker(ix, 100, "ШКОЛЬНЫЙ АБОНЕМЕНТ")
    s.text(ix, 150, "«Волшебный мир", size=26, fill=INK)
    s.text(ix, 184, "народной музыки»", size=26, fill=INK)
    # 10 programs in two columns
    for c in range(2):
        for r in range(5):
            px = ix + c * (iw / 2)
            py = 240 + r * 52
            s.text(px, py, f"{c*5+r+1:02d}", size=13, fill=INK2)
            s.bars(px + 34, py - 10, iw / 2 - 70, 1, fill="#c3c3c3", bw=8)
    s.line(ix, 520, ix + iw, 520, stroke=LINE)
    s.text(ix, 556, "Концерты и мастер-классы по 40–45 минут", size=13, fill=INK2)
    s.btn(ix + iw - 220, 536, 220, 44, "Оставить заявку", dark=True)
    return wrap_svg(s.dump(), w, h), "«Школьный абонемент»"

def p_video():
    w, h, mw = 860, 600, 760
    s, mx = _frame(w, h, mw)
    ix = mx + PAD
    iw = mw - 2 * PAD
    s.photo(ix, 100, iw, 380)
    # play triangle
    cxp, cyp = ix + iw / 2, 290
    s.p.append(f'<polygon points="{cxp-18},{cyp-24} {cxp+26},{cyp} {cxp-18},{cyp+24}" fill="none" stroke="#8f8f8f"/>')
    s.line(ix, 510, ix + iw, 510, stroke="#9a9a9a", sw=4)  # progress
    s.text(ix, 548, "В чешских лугах и лесах — концерт оркестра", size=14, fill=INK)
    s.arrowlink(ix, 578, "Канал оркестра на RuTube", ink=INK, size=13)
    return wrap_svg(s.dump(), w, h), "«Видеоплеер»"

def p_gallery():
    w, h, mw = 860, 620, 760
    s, mx = _frame(w, h, mw)
    ix = mx + PAD
    iw = mw - 2 * PAD
    s.photo(ix + 60, 110, iw - 120, 360)
    s.text(ix + 20, 300, "‹", size=40, fill=INK)
    s.text(ix + iw - 20, 300, "›", size=40, fill=INK, anchor="end")
    s.text(ix + iw / 2, 500, "3 / 24", size=14, fill=INK2, anchor="middle")
    # thumbnail strip
    tw = (iw - 7 * 10) / 8
    for i in range(8):
        s.photo(ix + i * (tw + 10), 524, tw, 56, fill="#d2d2d2", cross=False)
    return wrap_svg(s.dump(), w, h), "«Фотогалерея» (лайтбокс)"

def p_sent():
    w, h, mw = 760, 420, 600
    s, mx = _frame(w, h, mw)
    ix = mx + PAD
    iw = mw - 2 * PAD
    s.rect(ix + iw / 2 - 26, 120, 52, 52, "none", stroke="#7a7a7a")
    s.line(ix + iw / 2 - 12, 146, ix + iw / 2 - 2, 158, stroke="#7a7a7a", sw=2)
    s.line(ix + iw / 2 - 2, 158, ix + iw / 2 + 16, 132, stroke="#7a7a7a", sw=2)
    s.text(ix + iw / 2, 215, "Заявка отправлена", size=26, fill=INK, anchor="middle")
    s.text(ix + iw / 2, 255, "Администрация свяжется по телефону или e-mail", size=14, fill=INK2, anchor="middle")
    s.obtn(ix + iw / 2 - 90, 310, 180, 42, "Закрыть", stroke=CARD_BORDER, ink=INK, size=14)
    return wrap_svg(s.dump(), w, h), "«Заявка отправлена»"

ALL = [p_buy, p_done, p_pushkin, p_school, p_video, p_gallery, p_sent]
