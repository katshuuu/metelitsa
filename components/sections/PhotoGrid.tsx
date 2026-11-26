"use client";

import Image from "next/image";
import { useState } from "react";
import { albums, gallery } from "@/content/media";
import { formatFullDate } from "@/lib/dates";
import { Lightbox } from "@/components/media/Lightbox";

export function PhotoGrid() {
  const [index, setIndex] = useState<number | null>(null);
  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {gallery.map((photo, photoIndex) => (
          <button key={photo.src} type="button" className="text-left" onClick={() => setIndex(photoIndex)}>
            <span className="relative block aspect-[4/3]">
              <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 640px) 100vw, 33vw" className="object-cover" />
            </span>
            <span className="mt-2 block text-[15px]">{photo.caption}</span>
          </button>
        ))}
      </div>
      <h2 className="mt-14 font-display text-h3">Альбомы</h2>
      <ul className="mt-4">
        {albums.map((album) => (
          <li key={album.title} className="border-b border-navy/15 py-3 text-[16px]">
            {album.title}
            <span className="mt-1 block text-[14px] text-slate">{formatFullDate(album.date)}</span>
          </li>
        ))}
      </ul>
      <p className="mt-6 text-[14px] text-slate">
        TODO: файлы альбомов без локальной фотографии остались на исходном сайте, в эту сборку перенесены шесть кадров.
      </p>
      <Lightbox images={gallery} index={index} onClose={() => setIndex(null)} onIndex={setIndex} />
    </>
  );
}
