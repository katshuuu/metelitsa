"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { gallery } from "@/content/media";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Lightbox } from "@/components/media/Lightbox";

const photos = gallery.slice(0, 3);

const cards = [
  { href: "/media/video", title: "Видео", text: "Канал оркестра на RuTube", icon: "play" },
  { href: "/media/photo", title: "Фотогалерея", text: "Концерты и гастроли", icon: "photo" },
  { href: "/media/discography", title: "Дискография", text: "Записи оркестра", icon: "disc" },
];

export function MediaBand() {
  const [index, setIndex] = useState<number | null>(null);
  return (
    <section id="media" className="scroll-mt-28 bg-white py-20 text-navy md:py-28">
      <Container>
        <SectionLabel>Медиа</SectionLabel>
        <h2 className="mt-3 font-display text-h2">Слушать и смотреть</h2>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {photos.map((photo, photoIndex) => (
            <button
              key={photo.src}
              type="button"
              className="group relative aspect-[4/3] overflow-hidden text-left"
              onClick={() => setIndex(photoIndex)}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition duration-700 ease-concert group-hover:scale-[1.03]"
              />
              <span className="absolute inset-0 bg-navy/0 transition duration-300 group-hover:bg-navy/25" />
            </button>
          ))}
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {cards.map((card) => (
            <Link key={card.href} href={card.href} className="border border-navy/20 p-6 transition-colors duration-300 hover:border-navy">
              <Icon name={card.icon} />
              <h3 className="mt-8 font-display text-[28px]">{card.title}</h3>
              <p className="mt-2 text-[15px] text-slate">{card.text}</p>
            </Link>
          ))}
        </div>
      </Container>
      <Lightbox images={photos} index={index} onClose={() => setIndex(null)} onIndex={setIndex} />
    </section>
  );
}

function Icon({ name }: { name: string }) {
  const common = { fill: "none", stroke: "currentColor", strokeWidth: 1 };
  return (
    <svg viewBox="0 0 32 32" className="h-8 w-8" aria-hidden>
      {name === "play" ? <polygon points="12,8 24,16 12,24" {...common} /> : null}
      {name === "photo" ? (
        <>
          <rect x="5" y="8" width="22" height="16" {...common} />
          <circle cx="12" cy="14" r="2" {...common} />
        </>
      ) : null}
      {name === "disc" ? (
        <>
          <circle cx="16" cy="16" r="8" {...common} />
          <circle cx="16" cy="16" r="2" {...common} />
        </>
      ) : null}
    </svg>
  );
}
