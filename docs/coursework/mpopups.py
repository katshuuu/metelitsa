# -*- coding: utf-8 -*-
"""Mobile pop-ups for iPhone 14 wireframe (full-bleed / near-full width)."""
from mwf import S, wrap_svg, FRAME_W, MARGIN, CONTENT_W, INK, INK2, BORDER, LINE, CARD

BACKDROP = "#575757"
PAD = 20
MW = FRAME_W - 24  # almost full width on mobile

def _frame(h):
    s = S()
    s.rect(0, 0, FRAME_W, h, BACKDROP)
    mx = (FRAME_W - MW) / 2
    s.rect(mx, 16, MW, h - 32, "#f4f4f4", stroke="#cfcfcf")
    # close 44×44
    s.rect(mx + MW - 48, 24, 44, 44, "none")
    s.text(mx + MW - 26, 52, "✕", size=18, fill=INK, anchor="middle")
    return s, mx

def p_buy():
    h = 720
    s, mx = _frame(h)
    ix = mx + PAD
    iw = MW - 2 * PAD
    s.kicker(ix, 72, "ПОКУПКА БИЛЕТА")
    s.text(ix, 130, "11", size=48, fill=INK)
    s.text(ix, 158, "«В ритме времени»", size=18, fill=INK)
    s.text(ix, 182, "11 октября 2026 · Яани Кирик", size=13, fill=INK2)
    s.line(ix, 204, ix + iw, 204, stroke=LINE)
    for i, cat in enumerate(["Партер", "Амфитеатр", "Балкон"]):
        ry = 240 + i * 56
        s.text(ix, ry, cat, size=15, fill=INK)
        s.rect(ix + iw - 120, ry - 24, 120, 44, "none", stroke=BORDER)
        s.text(ix + iw - 60, ry + 4, "— 0 +", size=14, fill=INK2, anchor="middle")
    s.line(ix, 420, ix + iw, 420, stroke=LINE)
    s.rect(ix, 448, iw, 44, "none", stroke=BORDER)
    s.text(ix + 14, 476, "Банковская карта", size=13, fill=INK2)
    s.rect(ix, 504, iw, 44, "none", stroke="#8f8f8f")
    s.text(ix + 14, 532, "Пушкинская карта (14–22)", size=13, fill=INK)
    s.text(ix, 580, "E-mail — регистрация не нужна", size=12, fill=INK2)
    s.line(ix, 596, ix + iw, 596, stroke=BORDER)
    s.rect(ix, 620, 18, 18, "none", stroke="#9a9a9a")
    s.text(ix + 28, 634, "Согласен с правилами", size=12, fill=INK2)
    s.btn(ix, 656, iw, 48, "Перейти к оплате", dark=True)
    return wrap_svg(s.dump(), FRAME_W, h), "«Покупка билета»"

def p_done():
    h = 420
    s, mx = _frame(h)
    ix = mx + PAD
    iw = MW - 2 * PAD
    s.rect(FRAME_W / 2 - 26, 100, 52, 52, "none", stroke="#7a7a7a")
    s.line(FRAME_W / 2 - 12, 126, FRAME_W / 2 - 2, 138, stroke="#7a7a7a", sw=2)
    s.line(FRAME_W / 2 - 2, 138, FRAME_W / 2 + 16, 112, stroke="#7a7a7a", sw=2)
    s.text(FRAME_W / 2, 190, "Билет оформлен", size=24, fill=INK, anchor="middle")
    s.bars(ix + 20, 220, iw - 40, 2, fill="#bdbdbd", bw=7, gap=12)
    s.obtn(ix, 300, iw, 48, "Добавить в календарь", stroke=BORDER, ink=INK, size=14)
    return wrap_svg(s.dump(), FRAME_W, h), "«Билет оформлен»"

def p_pushkin():
    h = 560
    s, mx = _frame(h)
    ix = mx + PAD
    iw = MW - 2 * PAD
    s.kicker(ix, 72, "ПУШКИНСКАЯ КАРТА")
    s.text(ix, 116, "Как оплатить картой", size=22, fill=INK)
    steps = [
        ("01", "Оформите карту на Госуслугах"),
        ("02", "Выберите концерт «Метелицы»"),
        ("03", "Оплатите билет картой"),
    ]
    for i, (n, t) in enumerate(steps):
        ry = 170 + i * 90
        s.text(ix, ry + 20, n, size=26, fill=INK2)
        s.text(ix + 56, ry + 8, t, size=14, fill=INK)
        s.bars(ix + 56, ry + 24, iw - 56, 1, fill="#bdbdbd", bw=7)
    s.btn(ix, 470, iw, 48, "Выбрать концерт", dark=True)
    return wrap_svg(s.dump(), FRAME_W, h), "«Пушкинская карта»"

def p_school():
    h = 620
    s, mx = _frame(h)
    ix = mx + PAD
    iw = MW - 2 * PAD
    s.kicker(ix, 72, "ШКОЛЬНЫЙ АБОНЕМЕНТ")
    s.text(ix, 116, "«Волшебный мир", size=22, fill=INK)
    s.text(ix, 146, "народной музыки»", size=22, fill=INK)
    for r in range(10):
        py = 190 + r * 32
        s.text(ix, py, f"{r+1:02d}", size=12, fill=INK2)
        s.bars(ix + 34, py - 10, iw - 34, 1, fill="#c3c3c3", bw=7)
    s.btn(ix, 530, iw, 48, "Оставить заявку", dark=True)
    return wrap_svg(s.dump(), FRAME_W, h), "«Школьный абонемент»"

def p_video():
    h = 520
    s, mx = _frame(h)
    ix = mx + PAD
    iw = MW - 2 * PAD
    s.photo(ix, 80, iw, 260)
    cxp, cyp = FRAME_W / 2, 210
    s.p.append(f'<polygon points="{cxp-16},{cyp-20} {cxp+22},{cyp} {cxp-16},{cyp+20}" fill="none" stroke="#8f8f8f"/>')
    s.line(ix, 370, ix + iw, 370, stroke="#9a9a9a", sw=4)
    s.text(ix, 410, "В чешских лугах и лесах", size=13, fill=INK)
    s.arrowlink(ix, 450, "Канал на RuTube", ink=INK, size=13)
    return wrap_svg(s.dump(), FRAME_W, h), "«Видеоплеер»"

def p_gallery():
    h = 580
    s, mx = _frame(h)
    ix = mx + PAD
    iw = MW - 2 * PAD
    s.photo(ix, 80, iw, 300)
    s.text(ix + 8, 240, "‹", size=32, fill=INK)
    s.text(ix + iw - 8, 240, "›", size=32, fill=INK, anchor="end")
    s.text(FRAME_W / 2, 410, "3 / 24", size=13, fill=INK2, anchor="middle")
    tw = (iw - 5 * 6) / 6
    for i in range(6):
        s.photo(ix + i * (tw + 6), 430, tw, 50, fill="#d2d2d2")
    return wrap_svg(s.dump(), FRAME_W, h), "«Фотогалерея» (лайтбокс)"

def p_sent():
    h = 400
    s, mx = _frame(h)
    ix = mx + PAD
    iw = MW - 2 * PAD
    s.rect(FRAME_W / 2 - 26, 100, 52, 52, "none", stroke="#7a7a7a")
    s.line(FRAME_W / 2 - 12, 126, FRAME_W / 2 - 2, 138, stroke="#7a7a7a", sw=2)
    s.line(FRAME_W / 2 - 2, 138, FRAME_W / 2 + 16, 112, stroke="#7a7a7a", sw=2)
    s.text(FRAME_W / 2, 190, "Заявка отправлена", size=22, fill=INK, anchor="middle")
    s.text(FRAME_W / 2, 230, "Администрация свяжется", size=13, fill=INK2, anchor="middle")
    s.text(FRAME_W / 2, 250, "по телефону или e-mail", size=13, fill=INK2, anchor="middle")
    s.obtn(ix, 300, iw, 48, "Закрыть", stroke=BORDER, ink=INK, size=14)
    return wrap_svg(s.dump(), FRAME_W, h), "«Заявка отправлена»"

ALL = [p_buy, p_done, p_pushkin, p_school, p_video, p_gallery, p_sent]
