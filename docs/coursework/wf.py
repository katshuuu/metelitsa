# -*- coding: utf-8 -*-
"""Grayscale wireframe generator for PR4 (Метелица landing)."""
import html

# ---- Frame / grid (1920 px, 12 cols, content 1300, margin 310, gutter 24) ----
FRAME_W = 1920
MARGIN = 310
CONTENT_W = 1300
GUTTER = 24
COL_W = (CONTENT_W - 11 * GUTTER) / 12.0  # ≈ 86.33

def colx(i):
    """Left x of column i (0-based)."""
    return MARGIN + i * (COL_W + GUTTER)

def span(i, n):
    """(x, width) for n columns starting at column i."""
    x = colx(i)
    w = n * COL_W + (n - 1) * GUTTER
    return x, w

# ---- Grayscale palette (navy->dark gray, white->#F4F4F4, mist->#E4E4E4) ----
DARK = "#3c3c3c"          # navy section bg
WHITE = "#f4f4f4"         # white section bg
MIST = "#e4e4e4"          # mist section bg
CARD_ON_LIGHT = "#fafafa"
CARD_BORDER = "#b5b5b5"
PHOTO = "#cccccc"
PHOTO_LINE = "#8f8f8f"
INK = "#3a3a3a"           # text on light
INK2 = "#6f6f6f"          # secondary text on light
LIGHT_INK = "#efefef"     # text on dark
LIGHT_INK2 = "#b9b9b9"
BTN_DARK = "#2e2e2e"
BTN_LIGHT = "#ededed"
LINE = "#c4c4c4"
LINE_DARK = "#5a5a5a"

FONT = "Inter, 'DejaVu Sans', sans-serif"

def esc(s):
    return html.escape(str(s), quote=True)

class S:
    def __init__(self):
        self.p = []
    def rect(self, x, y, w, h, fill, stroke=None, sw=1, rx=0):
        s = f'<rect x="{x:.1f}" y="{y:.1f}" width="{w:.1f}" height="{h:.1f}" fill="{fill}"'
        if stroke:
            s += f' stroke="{stroke}" stroke-width="{sw}"'
        if rx:
            s += f' rx="{rx}"'
        self.p.append(s + '/>')
    def line(self, x1, y1, x2, y2, stroke=LINE, sw=1):
        self.p.append(f'<line x1="{x1:.1f}" y1="{y1:.1f}" x2="{x2:.1f}" y2="{y2:.1f}" stroke="{stroke}" stroke-width="{sw}"/>')
    def text(self, x, y, s, size=14, fill=INK, weight=400, anchor="start", spacing=None, style="normal"):
        extra = ''
        if spacing is not None:
            extra += f' letter-spacing="{spacing}"'
        if style != "normal":
            extra += f' font-style="{style}"'
        self.p.append(
            f'<text x="{x:.1f}" y="{y:.1f}" font-family="{FONT}" font-size="{size}" '
            f'font-weight="{weight}" fill="{fill}" text-anchor="{anchor}"{extra}>{esc(s)}</text>'
        )
    def photo(self, x, y, w, h, fill=PHOTO, cross=True):
        self.rect(x, y, w, h, fill, stroke=PHOTO_LINE, sw=1)
        if cross:
            self.line(x, y, x + w, y + h, stroke=PHOTO_LINE, sw=1)
            self.line(x + w, y, x, y + h, stroke=PHOTO_LINE, sw=1)
    def bars(self, x, y, w, n, gap=11, bw=7, fill=None, lastw=0.6):
        """Stacked text-line placeholders."""
        fill = fill or "#bdbdbd"
        for i in range(n):
            ww = w * (lastw if i == n - 1 else 1.0)
            self.rect(x, y + i * (bw + gap), ww, bw, fill)
    def btn(self, x, y, w, h, label, dark=True, size=15):
        if dark:
            self.rect(x, y, w, h, BTN_DARK)
            self.text(x + w / 2, y + h / 2 + size * 0.36, label, size=size, fill="#f2f2f2", anchor="middle")
        else:
            self.rect(x, y, w, h, BTN_LIGHT)
            self.text(x + w / 2, y + h / 2 + size * 0.36, label, size=size, fill="#2e2e2e", anchor="middle")
    def obtn(self, x, y, w, h, label, stroke, ink, size=15):
        self.rect(x, y, w, h, "none", stroke=stroke, sw=1)
        self.text(x + w / 2, y + h / 2 + size * 0.36, label, size=size, fill=ink, anchor="middle")
    def arrowlink(self, x, y, label, ink=INK, size=15):
        self.text(x, y, label, size=size, fill=ink)
        w = len(label) * size * 0.52
        self.line(x, y + 7, x + w, y + 7, stroke=ink, sw=1)
        self.text(x + w + 14, y, "→", size=size, fill=ink)
    def kicker(self, x, y, label, ink=INK2):
        self.text(x, y, label, size=12, fill=ink, spacing=2, weight=400)
    def dump(self):
        return "\n".join(self.p)


def wrap_svg(body, w, h, bg=None):
    pre = f'<svg xmlns="http://www.w3.org/2000/svg" width="{w}" height="{h}" viewBox="0 0 {w} {h}">'
    if bg:
        pre += f'<rect x="0" y="0" width="{w}" height="{h}" fill="{bg}"/>'
    return pre + body + "</svg>"
