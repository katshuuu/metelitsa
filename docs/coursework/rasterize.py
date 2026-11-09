# -*- coding: utf-8 -*-
"""Rasterize SVGs to PNG and build overview composition (landing + popups)."""
import os
from pathlib import Path
import cairosvg
from PIL import Image, ImageDraw, ImageFont

SVG = Path("/tmp/report4/svg")
PNG = Path("/tmp/report4/png")
PNG.mkdir(parents=True, exist_ok=True)

# High DPI so thin lines stay crisp in A4 PDF
SCALE = 1.35

def to_png(name, scale=SCALE):
    src = SVG / name
    dst = PNG / (src.stem + ".png")
    cairosvg.svg2png(url=str(src), write_to=str(dst), scale=scale)
    print(f"  {dst.name}: {dst.stat().st_size} bytes")
    return dst

print("rasterizing SVGs...")
names = [
    "scheme_grid.svg",
    "landing_full.svg",
    "block_tickets.svg", "block_about.svg", "block_schools.svg",
    "block_media.svg", "block_footer.svg",
] + [f"popup_{i}.svg" for i in range(1, 8)]
for n in names:
    to_png(n)

# ---- Overview composition (like assignment figure): landing + 2 popups ----
print("building overview composition...")
landing = Image.open(PNG / "landing_full.png").convert("RGB")
# Scale landing to a manageable height for A4 figure (~2200 px tall)
target_h = 2400
ratio = target_h / landing.height
lw = int(landing.width * ratio)
landing = landing.resize((lw, target_h), Image.Resampling.LANCZOS)

p1 = Image.open(PNG / "popup_1.png").convert("RGB")  # buy ticket
p2 = Image.open(PNG / "popup_5.png").convert("RGB")  # video
# Scale popups to ~0.42 of landing height each
ph = int(target_h * 0.42)
for label, im in [("p1", p1), ("p2", p2)]:
    r = ph / im.height
    nw = int(im.width * r)
    if label == "p1":
        p1 = im.resize((nw, ph), Image.Resampling.LANCZOS)
    else:
        p2 = im.resize((nw, ph), Image.Resampling.LANCZOS)

pad = 36
gap = 28
label_h = 40
pw = max(p1.width, p2.width)
canvas_w = lw + gap + pw + pad * 2
canvas_h = target_h + label_h + pad * 2
canvas = Image.new("RGB", (canvas_w, canvas_h), "#f7f7f7")
draw = ImageDraw.Draw(canvas)

# try Inter / DejaVu for labels
font = None
for fp in [
    "/usr/share/fonts/truetype/inter/Inter-Regular.ttf",
    "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf",
]:
    if os.path.exists(fp):
        font = ImageFont.truetype(fp, 22)
        break
if font is None:
    font = ImageFont.load_default()

# landing with frame + label
lx, ly = pad, pad + label_h
draw.rectangle([lx - 2, ly - 2, lx + lw + 2, ly + target_h + 2], outline="#b0b0b0", width=2)
canvas.paste(landing, (lx, ly))
draw.text((lx, pad + 8), "лендинг", fill="#444444", font=font)

# popups stacked on the right
rx = lx + lw + gap
ry1 = ly
draw.rectangle([rx - 2, ry1 - 2, rx + p1.width + 2, ry1 + p1.height + 2], outline="#b0b0b0", width=2)
canvas.paste(p1, (rx, ry1))
draw.text((rx, pad + 8), "всплывающие окна", fill="#444444", font=font)

ry2 = ry1 + p1.height + gap
draw.rectangle([rx - 2, ry2 - 2, rx + p2.width + 2, ry2 + p2.height + 2], outline="#b0b0b0", width=2)
canvas.paste(p2, (rx, ry2))

out = PNG / "overview_composition.png"
canvas.save(out, optimize=True)
print(f"  {out.name}: {out.stat().st_size} bytes ({canvas.size})")
print("done")
