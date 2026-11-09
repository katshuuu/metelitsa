# -*- coding: utf-8 -*-
import os
import sys
sys.path.insert(0, "/tmp/report5")
sys.path.insert(0, "/tmp/report5/pr4src")

from mwf import S, wrap_svg, FRAME_W, MARGIN, CONTENT_W, GUTTER, COL_W, colx, DARK, WHITE, MIST, INK, INK2
import mblocks as B
import mpopups as P

OUT = "/tmp/report5/svg"
os.makedirs(OUT, exist_ok=True)

def save(name, svg):
    with open(os.path.join(OUT, name), "w", encoding="utf-8") as f:
        f.write(svg)

# --- individual blocks ---
tones = {
    "header": DARK, "poster": DARK, "intro": DARK,
    "tickets": MIST, "about": DARK, "schools": MIST,
    "media": MIST, "footer": DARK,
}
for key, fn in [
    ("header", B.header), ("poster", B.poster), ("intro", B.intro),
    ("tickets", B.tickets), ("about", B.about), ("schools", B.schools),
    ("media", B.media), ("footer", B.footer),
]:
    s = S()
    h = fn(s, 0)
    save(f"m_block_{key}.svg", wrap_svg(s.dump(), FRAME_W, h, bg=tones[key]))

# --- full mobile landing ---
s = S()
y = 0
order = [B.header, B.poster, B.intro, B.tickets, B.about, B.schools, B.media, B.footer]
for fn in order:
    y += fn(s, y)
# phone chrome: subtle outer frame labels
full_h = y
save("m_landing_full.svg", wrap_svg(s.dump(), FRAME_W, full_h))
print("mobile landing height:", full_h)

# --- popups ---
titles = []
for i, fn in enumerate(P.ALL, 1):
    svg, title = fn()
    save(f"m_popup_{i}.svg", svg)
    titles.append(title)
print("popups:", titles)

# --- grid scheme for adaptive ---
def grid_scheme():
    s = S()
    W, H = 390, 320
    s.rect(0, 0, W, H, "#ededed", stroke="#c4c4c4")
    s.rect(0, 0, W, 69, DARK)
    s.text(MARGIN, 42, "header 69 px · iPhone 14", size=14, fill="#e0e0e0")
    s.rect(0, 69, MARGIN, H - 69, "#dadada")
    s.rect(W - MARGIN, 69, MARGIN, H - 69, "#dadada")
    s.text(MARGIN / 2, 180, "16", size=12, fill="#6f6f6f", anchor="middle")
    s.text(W - MARGIN / 2, 180, "16", size=12, fill="#6f6f6f", anchor="middle")
    for i in range(8):
        x = colx(i)
        s.rect(x, 100, COL_W, 140, "#cfcfcf", stroke="#b5b5b5")
    s.text(W / 2, 90, "390 px · 8 колонок · gutter 10 · колонка 36 px", size=12, fill="#555", anchor="middle")
    s.text(W / 2, 280, "контентная область 358 px", size=13, fill="#555", anchor="middle")
    return wrap_svg(s.dump(), W, H)

save("m_scheme_grid.svg", grid_scheme())

# --- adaptation principle diagram (desktop card row → mobile stack) ---
def adapt_scheme():
    s = S()
    W, H = 900, 420
    s.rect(0, 0, W, H, "#f7f7f7")
    # desktop
    s.text(40, 40, "Десктоп 1920 · 12 колонок", size=16, fill=INK)
    s.rect(40, 60, 500, 140, MIST, stroke="#c4c4c4")
    for i in range(3):
        s.rect(60 + i * 150, 85, 130, 90, "#fafafa", stroke="#b5b5b5")
        s.text(125 + i * 150, 135, f"0{i+1}", size=14, fill=INK2, anchor="middle")
    s.text(40, 230, "Мобильный 390 · 8 колонок · компактность", size=16, fill=INK)
    s.rect(40, 250, 220, 150, MIST, stroke="#c4c4c4")
    for i in range(3):
        s.rect(55, 262 + i * 44, 190, 36, "#fafafa", stroke="#b5b5b5")
        s.text(70, 286 + i * 44, f"0{i+1}  карточка", size=13, fill=INK)
    # arrow
    s.line(560, 130, 700, 130, stroke="#888", sw=2)
    s.line(700, 130, 700, 310, stroke="#888", sw=2)
    s.line(700, 310, 280, 310, stroke="#888", sw=2)
    s.text(720, 220, "вниз\nналево", size=14, fill="#666")
    # rules box
    s.rect(520, 250, 340, 140, "#fff", stroke="#c4c4c4")
    s.text(540, 280, "Поля меньше · элементы меньше", size=13, fill=INK)
    s.text(540, 306, "Ряд → столбец (компактность)", size=13, fill=INK)
    s.text(540, 332, "Tap target ≥ 44 px", size=13, fill=INK)
    s.text(540, 358, "Контент и иерархия сохранены", size=13, fill=INK)
    return wrap_svg(s.dump(), W, H)

save("m_scheme_adapt.svg", adapt_scheme())

# --- phone frame presentation like fig 49 (landing inside device chrome) ---
def phone_presentation(lh):
    landing = open(os.path.join(OUT, "m_landing_full.svg"), encoding="utf-8").read()
    import re
    inner = re.sub(r'^<svg[^>]*>', '', landing)
    inner = re.sub(r'</svg>\s*$', '', inner)
    pad = 24
    phone_w = FRAME_W + pad * 2
    phone_h = lh + pad * 2 + 40
    body = f'''
    <rect x="0" y="0" width="{phone_w}" height="{phone_h}" fill="#d0d0d0" rx="28"/>
    <rect x="{pad-8}" y="{pad-8}" width="{FRAME_W+16}" height="{lh+16}" fill="#2a2a2a" rx="22"/>
    <rect x="{pad}" y="{pad}" width="{FRAME_W}" height="{lh}" fill="#ffffff"/>
    <g transform="translate({pad},{pad})">{inner}</g>
    <rect x="{(phone_w-120)/2}" y="{phone_h-28}" width="120" height="6" fill="#8a8a8a" rx="3"/>
    '''
    return wrap_svg(body, phone_w, phone_h)

save("m_phone_frame.svg", phone_presentation(full_h))
print("phone frame ok")
