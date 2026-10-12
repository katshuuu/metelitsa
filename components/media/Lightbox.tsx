"use client";

import { useEffect, useRef, useState } from "react";
import type { GalleryImage } from "@/content/media";
import { useDialog } from "@/lib/use-dialog";

export function Lightbox({
  images,
  index,
  onClose,
  onIndex,
}: {
  images: GalleryImage[];
  index: number | null;
  onClose: () => void;
  onIndex: (index: number) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const open = index !== null;
  useDialog(open, onClose, ref);
  const [touchX, setTouchX] = useState<number | null>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") onIndex((index! + 1) % images.length);
      if (event.key === "ArrowLeft") onIndex((index! - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, index, images.length, onIndex]);

  if (index === null) return null;
  const image = images[index];

  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center bg-navy/90 p-4"
      onClick={onClose}
    >
      <div
        ref={ref}
        role="dialog"
        aria-modal="true"
        aria-label={image.alt}
        className="relative w-full max-w-5xl"
        onClick={(event) => event.stopPropagation()}
        onTouchStart={(event) => setTouchX(event.changedTouches[0]?.clientX ?? null)}
        onTouchEnd={(event) => {
          if (touchX === null) return;
          const delta = (event.changedTouches[0]?.clientX ?? touchX) - touchX;
          if (delta > 40) onIndex((index - 1 + images.length) % images.length);
          if (delta < -40) onIndex((index + 1) % images.length);
          setTouchX(null);
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={image.src} alt={image.alt} className="max-h-[78vh] w-full object-contain" />
        <p className="mt-3 text-center text-[15px] text-white">{image.caption}</p>
        <div className="mt-4 flex justify-center gap-3">
          <button type="button" className="min-h-11 border border-white/40 px-4 text-white" onClick={() => onIndex((index - 1 + images.length) % images.length)}>
            Назад
          </button>
          <button type="button" className="min-h-11 border border-white/40 px-4 text-white" onClick={() => onIndex((index + 1) % images.length)}>
            Дальше
          </button>
          <button type="button" className="min-h-11 bg-white px-4 text-navy" onClick={onClose}>
            Закрыть
          </button>
        </div>
      </div>
    </div>
  );
}
