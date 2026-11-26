"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { eventKinds, events, type EventKind } from "@/content/events";
import { formatFullDate, monthKey, monthLabel } from "@/lib/dates";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { LinkArrow } from "@/components/ui/LinkArrow";
import { Button } from "@/components/ui/Button";

export function Tickets({ archive = false }: { archive?: boolean }) {
  const [kind, setKind] = useState<"all" | EventKind>("all");
  const [month, setMonth] = useState("all");
  const [open, setOpen] = useState<string | null>(null);

  const months = useMemo(() => {
    const keys = Array.from(new Set(events.map((event) => monthKey(event.start))));
    return keys.sort().reverse();
  }, []);

  const visible = events.filter((event) => {
    if (!archive && events.indexOf(event) > 3 && kind === "all" && month === "all") return false;
    if (kind !== "all" && event.kind !== kind) return false;
    if (month !== "all" && monthKey(event.start) !== month) return false;
    return true;
  });

  return (
    <section id="tickets" className="scroll-mt-28 bg-white py-20 text-navy md:py-28">
      <Container>
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <SectionLabel>Билеты и абонементы</SectionLabel>
            <h2 className="mt-3 font-display text-h2">Ближайшие концерты</h2>
          </div>
          <p className="text-[15px] leading-relaxed text-slate lg:col-span-4 lg:pt-8">
            Билеты можно оплатить Пушкинской картой. Школам и организациям доступен абонемент.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label="Фильтр афиши">
          {eventKinds.map((item) => (
            <button
              key={item.id}
              type="button"
              aria-pressed={kind === item.id}
              className={`min-h-11 border px-3 text-[14px] ${kind === item.id ? "border-navy bg-navy text-white" : "border-navy/25"}`}
              onClick={() => setKind(item.id)}
            >
              {item.label}
            </button>
          ))}
          <label className="ml-auto flex min-h-11 items-center gap-2 text-[14px] text-slate">
            Месяц
            <select
              className="min-h-11 border border-navy/25 bg-white px-2 text-navy"
              value={month}
              onChange={(event) => setMonth(event.target.value)}
            >
              <option value="all">Все</option>
              {months.map((key) => (
                <option key={key} value={key}>
                  {monthLabel(key)}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className="mt-8 border-t border-navy/20">
          {visible.length === 0 ? (
            <p className="border-b border-navy/20 py-8 text-[16px]">В выбранном фильтре концертов нет.</p>
          ) : (
            visible.map((event) => {
              const expanded = open === event.slug;
              return (
                <article key={event.slug} className="border-b border-navy/20">
                  <div className="grid items-center gap-4 py-5 md:grid-cols-12">
                    <button
                      type="button"
                      className="text-left md:col-span-3"
                      aria-expanded={expanded}
                      onClick={() => setOpen(expanded ? null : event.slug)}
                    >
                      <span className="block font-display text-[32px] leading-none">
                        {event.end ? "Гастроли" : event.start.slice(8, 10).replace(/^0/, "")}
                      </span>
                      <span className="mt-1 block text-[14px] text-slate">
                        {event.end ? event.start.slice(0, 4) : formatFullDate(event.start).replace(/^\d+\s/, "")}
                      </span>
                    </button>
                    <div className="md:col-span-6">
                      <h3 className="font-display text-[26px] leading-tight">{event.title}</h3>
                      <p className="mt-1 text-[15px] text-slate">{event.subtitle}</p>
                    </div>
                    <div className="md:col-span-3 md:text-right">
                      <Button href={`/tickets/${event.slug}`} tone="onLight" variant="outline">
                        Подробнее
                      </Button>
                    </div>
                  </div>
                  {expanded ? (
                    <p className="max-w-measure pb-6 text-[16px] leading-relaxed">{event.summary}</p>
                  ) : null}
                </article>
              );
            })
          )}
        </div>
        {archive ? null : (
          <div className="mt-6">
            <LinkArrow href="/tickets">Весь архив афиши</LinkArrow>
          </div>
        )}
      </Container>
    </section>
  );
}
