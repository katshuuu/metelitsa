# -*- coding: utf-8 -*-
import os
from wf import S, wrap_svg, FRAME_W, DARK, WHITE, MIST
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
print("landing height:", y)

# ---- popups ----
titles = []
for i, fn in enumerate(P.ALL, 1):
    svg, title = fn()
    save(f"popup_{i}.svg", svg)
    titles.append(title)
print("popups:", titles)
