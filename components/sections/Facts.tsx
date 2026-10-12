"use client";

import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/ui/Container";
import { yearsOnStage, yearsWord } from "@/lib/dates";
import { usePrefersReducedMotion } from "@/lib/use-reduced-motion";

const facts = [
  {
    title: "С 1989 года",
    text: "на сцене Ленинградской области, Санкт-Петербурга и России",
  },
  {
    title: "Оркестр солистов",
    text: "музыканты — лауреаты международных конкурсов",
  },
  {
    title: "Пушкинская карта",
    text: "принимается при покупке билетов на концерты",
  },
];

export function Facts() {
  const years = yearsOnStage();
  const reduced = usePrefersReducedMotion();
  const [value, setValue] = useState(years);
  const ref = useRef<HTMLElement>(null);
  const started = useRef(false);

  useEffect(() => {
    if (reduced) return;
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting || started.current) return;
        started.current = true;
        const from = Math.max(0, years - 18);
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / 900);
          const eased = 1 - (1 - t) ** 3;
          setValue(Math.round(from + (years - from) * eased));
          if (t < 1) requestAnimationFrame(tick);
        };
        setValue(from);
        requestAnimationFrame(tick);
      },
      { threshold: 0.5 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [reduced, years]);

  return (
    <section ref={ref} className="bg-navy pb-16 text-white md:pb-20" aria-label="Факты об оркестре">
      <Container>
        <p className="sr-only">
          Оркестру {years} {yearsWord(years)}: с 1989 года.
        </p>
        <div className="grid gap-8 border-t border-white/25 pt-8 md:grid-cols-3">
          {facts.map((fact, index) => (
            <article key={fact.title}>
              <h2 className="font-display text-[28px] leading-tight md:text-[32px]">{fact.title}</h2>
              <p className="mt-2 max-w-[32ch] text-[15px] leading-relaxed text-white/75">
                {index === 0 ? `${value} ${yearsWord(value)} ${fact.text}` : fact.text}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
