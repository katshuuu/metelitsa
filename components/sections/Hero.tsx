"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { nearestEvent } from "@/content/events";
import { formatMonthYear } from "@/lib/dates";
import { usePrefersReducedMotion } from "@/lib/use-reduced-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { VideoModal } from "@/components/media/VideoModal";

function dayLabel(event: ReturnType<typeof nearestEvent>) {
  const start = Number(event.start.slice(8, 10));
  if (!event.end || event.end === event.start) return String(start);
  const end = Number(event.end.slice(8, 10));
  return `${start}–${end}`;
}

export function Hero() {
  const event = nearestEvent();
  const reduced = usePrefersReducedMotion();
  const [shift, setShift] = useState({ x: 0, y: 0 });
  const [video, setVideo] = useState(false);

  useEffect(() => {
    if (reduced) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const onMove = (mouse: MouseEvent) => {
      const x = (mouse.clientX / window.innerWidth - 0.5) * 16;
      const y = (mouse.clientY / window.innerHeight - 0.5) * 10;
      setShift({ x, y });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [reduced]);

  const move = (factor: number) =>
    reduced ? undefined : { transform: `translate3d(${shift.x * factor}px, ${shift.y * factor}px, 0)` };

  return (
    <section className="overflow-hidden bg-navy text-white">
      <Container className="relative pb-8 pt-28">
        <Image
          src="/images/ornament.png"
          alt=""
          width={700}
          height={560}
          className="pointer-events-none absolute -left-24 top-28 hidden w-[280px] mix-blend-screen lg:block"
          style={move(-0.8)}
        />
        <Image
          src="/images/ornament.png"
          alt=""
          width={700}
          height={560}
          className="pointer-events-none absolute -right-16 top-36 hidden w-[300px] -scale-x-100 mix-blend-screen lg:block"
          style={move(0.9)}
        />
        <h1
          className="relative z-20 -mb-6 text-center font-display leading-[0.86] text-white sm:-mb-12"
          style={{ fontSize: "clamp(56px, 12vw, 168px)" }}
        >
          Метелица
        </h1>

        <div className="relative z-10 mx-auto mt-2 max-w-[860px] sm:-mt-2" style={move(0.25)}>
          <div className="border border-white p-2 sm:p-3">
            <div className="border border-white/55">
            <div className="relative aspect-[16/10] overflow-hidden bg-navy">
              <Image
                src="/images/gallery-hall.webp"
                alt="Оркестр «Метелица» на сцене парадного зала"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 860px"
                className="object-cover"
              />
            </div>
            </div>
          </div>
        </div>

        <div className="relative z-20 mt-12 grid items-end gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="text-[12px] uppercase tracking-[0.16em] text-white/70">
              Государственный оркестр русских народных инструментов
            </p>
            <p className="measure mt-5 text-[18px] leading-[1.55] text-white/90">
              Каждый музыкант оркестра — солист-виртуоз, большинство — лауреаты международных и всероссийских конкурсов. В концертных программах звучат русская и зарубежная классика, народная музыка и сочинения современных авторов.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/#tickets" tone="onDark">
                Афиша и билеты
              </Button>
              <Button tone="onDark" variant="outline" onClick={() => setVideo(true)}>
                Смотреть видео
              </Button>
            </div>
          </div>
          <article className="bg-white p-6 text-navy sm:p-8 lg:col-span-5">
            <p className="font-display leading-none" style={{ fontSize: "clamp(64px, 8vw, 112px)" }}>
              {dayLabel(event)}
            </p>
            <p className="mt-2 text-[14px] text-slate">{formatMonthYear(event.start)}</p>
            <h2 className="mt-6 font-display text-h3">{event.title}</h2>
            <p className="mt-2 text-[15px] text-slate">{event.venue ?? event.city}</p>
            <Button href={`/tickets/${event.slug}`} tone="onLight" className="mt-8 w-full">
              Подробнее и билеты
            </Button>
          </article>
        </div>
      </Container>
      <VideoModal open={video} onClose={() => setVideo(false)} />
    </section>
  );
}

