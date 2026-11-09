# -*- coding: utf-8 -*-
"""Generate all PR4 wireframe SVGs + overview composition (landing + popups)."""
import os
from wf import S, wrap_svg, FRAME_W, DARK, WHITE, MIST, FONT, esc
import blocks as B
import popups as P

OUT = "/tmp/report4/svg"
os.makedirs(OUT, exist_ok=True)

def save(name, svg):
    with open(os.path.join(OUT, name), "w", encoding="utf-8") as f:
        f.write(svg)

# ---- individual remaining blocks (for detail figures) ----
def one(fn, tone):
    s = S()
    h = fn(s, 0)
    return wrap_svg(s.dump(), FRAME_W, h, bg=tone), h

for key, fn, tone in [("tickets", B.tickets, MIST), ("about", B.about, DARK),
                      ("schools", B.schools, MIST), ("media", B.media, MIST),
                      ("footer", B.footer, DARK)]:
    svg, h = one(fn, tone)
    save(f"block_{key}.svg", svg)

# ---- full landing (all 8 blocks stacked) ----
s = S()
y = 0
for fn in [B.header, B.poster, B.intro, B.tickets, B.about, B.schools, B.media, B.footer]:
    y += fn(s, y)
full = wrap_svg(s.dump(), FRAME_W, y)
save("landing_full.svg", full)
landing_h = y
print("landing height:", landing_h)

# ---- popups ----
titles = []
popup_svgs = []
for i, fn in enumerate(P.ALL, 1):
    svg, title = fn()
    save(f"popup_{i}.svg", svg)
    titles.append(title)
    popup_svgs.append(svg)
print("popups:", titles)

# ---- grid schematic ----
from wf import MARGIN, CONTENT_W, GUTTER, COL_W, colx, LINE
s = S()
W, H = FRAME_W, 360
s.rect(0, 0, W, H, "#ededed", stroke="#c4c4c4")
s.rect(0, 0, W, 120, "#3c3c3c")
s.text(MARGIN, 70, "header 120 px", size=20, fill="#e0e0e0")
s.rect(0, 120, MARGIN, H - 120, "#dadada")
s.rect(W - MARGIN, 120, MARGIN, H - 120, "#dadada")
s.text(MARGIN / 2, 250, "поле 310", size=18, fill="#6f6f6f", anchor="middle")
s.text(W - MARGIN / 2, 250, "поле 310", size=18, fill="#6f6f6f", anchor="middle")
for i in range(12):
    x = colx(i)
    s.rect(x, 160, COL_W, 150, "#cfcfcf", stroke="#b5b5b5")
s.text(MARGIN, 340, "12 колонок · контентная область 1300 px · gutter 24 px · колонка ≈ 86 px", size=18, fill="#555")
s.text(W / 2, 150, "1920 px", size=18, fill="#555", anchor="middle")
save("scheme_grid.svg", wrap_svg(s.dump(), W, H))

# ---- Overview composition like the assignment example:
# tall landing on the left + two representative popups on the right.
# We embed the already-generated SVGs via <image> with data URIs after raster,
# so here we only build an SVG layout using nested <svg> via foreignObject-like
# approach: draw scaled landing and popup frames with labels.
#
# Practical approach: produce a layout SVG that references external files;
# after PNG rasterization of parts, assemble the overview as PNG in rasterize.py.
print("generate done")
