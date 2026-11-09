#!/usr/bin/env python3
"""Replace first page of a PR5 PDF with the official title page."""
import sys
from pathlib import Path
import fitz

HERE = Path(__file__).resolve().parent
TITLE = HERE / "title_page_src.pdf"

def main(body_pdf: Path, out_pdf: Path):
    body = fitz.open(body_pdf)
    title = fitz.open(TITLE)
    out = fitz.open()
    out.insert_pdf(title, from_page=0, to_page=0)
    if len(body) > 1:
        out.insert_pdf(body, from_page=1, to_page=len(body) - 1)
    out.save(out_pdf)
    print(f"wrote {out_pdf} ({len(out)} pages)")

if __name__ == "__main__":
    body = Path(sys.argv[1]) if len(sys.argv) > 1 else HERE / "PR5_mobile_wireframe_report.pdf"
    out = Path(sys.argv[2]) if len(sys.argv) > 2 else body
    main(body, out)
