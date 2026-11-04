# -*- coding: utf-8 -*-
"""Mobile wireframe helpers: iPhone 14, 8 columns, margin 16, gutter 10."""
import html

FRAME_W = 390
MARGIN = 16
GUTTER = 10
CONTENT_W = FRAME_W - 2 * MARGIN  # 358
COL_W = (CONTENT_W - 7 * GUTTER) / 8.0  # 36

DARK = "#3c3c3c"
WHITE = "#f4f4f4"
MIST = "#e4e4e4"
CARD = "#fafafa"
BORDER = "#b5b5b5"
PHOTO = "#cccccc"
PHOTO_LINE = "#8f8f8f"
INK = "#3a3a3a"
INK2 = "#6f6f6f"
LINE = "#c4c4c4"
LINE_DARK = "#5a5a5a"
FONT = "Inter, 'DejaVu Sans', sans-serif"

def esc(s):
    return html.escape(str(s), quote=True)

def colx(i):
    return MARGIN + i * (COL_W + GUTTER)

def span(i, n):
    x = colx(i)
    w = n * COL_W + (n - 1) * GUTTER
    return x, w

class S:
    def __init__(self):
        self.p = []
    def rect(self, x, y, w, h, fill, stroke=None, sw=1):
        s = f'<rect x="{x:.1f}" y="{y:.1f}" width="{w:.1f}" height="{h:.1f}" fill="{fill}"'
        if stroke:
            s += f' stroke="{stroke}" stroke-width="{sw}"'
        self.p.append(s + "/>")
    def line(self, x1, y1, x2, y2, stroke=LINE, sw=1):
        self.p.append(f'<line x1="{x1:.1f}" y1="{y1:.1f}" x2="{x2:.1f}" y2="{y2:.1f}" stroke="{stroke}" stroke-width="{sw}"/>')
    def text(self, x, y, s, size=14, fill=INK, weight=400, anchor="start", spacing=None):
        extra = f' letter-spacing="{spacing}"' if spacing is not None else ""
        self.p.append(
            f'<text x="{x:.1f}" y="{y:.1f}" font-family="{FONT}" font-size="{size}" '
            f'font-weight="{weight}" fill="{fill}" text-anchor="{anchor}"{extra}>{esc(s)}</text>'
        )
    def photo(self, x, y, w, h, fill=PHOTO):
        self.rect(x, y, w, h, fill, stroke=PHOTO_LINE)
        self.line(x, y, x + w, y + h, stroke=PHOTO_LINE)
        self.line(x + w, y, x, y + h, stroke=PHOTO_LINE)
    def bars(self, x, y, w, n, gap=10, bw=7, fill="#bdbdbd", lastw=0.62):
        for i in range(n):
            ww = w * (lastw if i == n - 1 else 1.0)
            self.rect(x, y + i * (bw + gap), ww, bw, fill)
    def btn(self, x, y, w, h, label, dark=True, size=15):
        if dark:
            self.rect(x, y, w, h, "#2e2e2e")
            self.text(x + w / 2, y + h / 2 + size * 0.36, label, size=size, fill="#f2f2f2", anchor="middle")
        else:
            self.rect(x, y, w, h, "#ededed")
            self.text(x + w / 2, y + h / 2 + size * 0.36, label, size=size, fill="#2e2e2e", anchor="middle")
    def obtn(self, x, y, w, h, label, stroke="#8c8c8c", ink="#dcdcdc", size=15):
        self.rect(x, y, w, h, "none", stroke=stroke)
        self.text(x + w / 2, y + h / 2 + size * 0.36, label, size=size, fill=ink, anchor="middle")
    def arrowlink(self, x, y, label, ink=INK, size=15):
        self.text(x, y, label, size=size, fill=ink)
        w = len(label) * size * 0.52
        self.line(x, y + 6, x + w, y + 6, stroke=ink)
        self.text(x + w + 10, y, "→", size=size, fill=ink)
    def kicker(self, x, y, label, ink=INK2):
        self.text(x, y, label, size=11, fill=ink, spacing=1.6)
    def dump(self):
        return "\n".join(self.p)

def wrap_svg(body, w, h, bg=None):
    pre = f'<svg xmlns="http://www.w3.org/2000/svg" width="{w}" height="{h}" viewBox="0 0 {w} {h}">'
    if bg:
        pre += f'<rect width="{w}" height="{h}" fill="{bg}"/>'
    return pre + body + "</svg>"
