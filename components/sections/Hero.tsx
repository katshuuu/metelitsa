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
          className="relative z-30 -mb-[0.28em] text-center font-display leading-[0.86] text-white"
          style={{ fontSize: "clamp(56px, 12vw, 168px)" }}
        >
          Метелица
        </h1>

        <div className="relative z-10 mx-auto mb-[12%] max-w-[860px] sm:mb-[11%]" style={move(0.2)}>
          <div className="relative aspect-[949/658]">
            <div
              className="absolute overflow-hidden"
              style={{ left: "8.75%", top: "11.55%", width: "81.14%", height: "77.05%" }}
            >
              <Image
                src="/images/gallery-hall.webp"
                alt="Оркестр «Метелица» на сцене парадного зала"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 700px"
                className="object-cover object-[center_40%]"
              />
            </div>
            <Image
              src="/images/frame.png"
              alt=""
              fill
              priority
              sizes="(max-width: 768px) 100vw, 860px"
              className="pointer-events-none z-10 object-fill"
            />
          </div>
          <Image
            src="/images/soloist.png"
            alt="Солистка оркестра «Метелица»"
            width={681}
            height={608}
            priority
            sizes="(max-width: 768px) 70vw, 520px"
            className="pointer-events-none absolute z-20 h-auto w-[64%] max-w-none"
            style={{
              left: "23%",
              top: "33%",
              ...(reduced ? {} : { transform: `translate3d(${shift.x * 0.45}px, ${shift.y * 0.45}px, 0)` }),
            }}
          />
        </div>

        <div className="relative z-20 mt-8 grid items-start gap-10 lg:grid-cols-12">
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

