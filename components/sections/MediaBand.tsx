"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { gallery } from "@/content/media";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Lightbox } from "@/components/media/Lightbox";

const photos = gallery.slice(0, 4);

export function MediaBand({ titleAs = "h2" }: { titleAs?: "h1" | "h2" }) {
  const [index, setIndex] = useState<number | null>(null);
  const Title = titleAs;
  return (
    <section id="media" className="scroll-mt-28 bg-mist py-16 text-navy md:py-24">
      <Container>
        <SectionLabel>Медиа</SectionLabel>
        <Title className="mt-4 max-w-[10ch] font-display text-[32px] leading-[1.05] md:text-[56px]">Слушать и смотреть</Title>
        <div className="mt-10 grid grid-cols-2 gap-4 2xl:grid-cols-4">
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
                sizes="(max-width: 1440px) 50vw, 25vw"
                className="object-cover transition duration-700 ease-concert group-hover:scale-[1.03]"
              />
              <span className="absolute inset-0 bg-navy/10" />
            </button>
          ))}
        </div>
        <Link href="/media/photo" className="link-arrow mt-8 inline-flex min-h-11 items-center text-[15px]">
          Фотогалерея <span aria-hidden>→</span>
        </Link>
      </Container>
      <Lightbox images={photos} index={index} onClose={() => setIndex(null)} onIndex={setIndex} />
    </section>
  );
}
