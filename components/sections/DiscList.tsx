"use client";

import { useState } from "react";
import { discs } from "@/content/media";

export function DiscList() {
  const [open, setOpen] = useState<string | null>(null);
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      {discs.map((disc) => {
        const expanded = open === disc.title;
        return (
          <article key={disc.title} className="border border-navy/10">
            <div className="grid md:grid-cols-12">
              <div className="bg-navy p-6 text-white md:col-span-4">
                <p className="text-[11px] uppercase tracking-[0.14em] text-white/70">Метелица · CD</p>
                <p className="mt-8 font-display text-[36px]">{disc.year}</p>
              </div>
              <div className="p-6 md:col-span-8">
                <h2 className="font-display text-[30px]">{disc.title}</h2>
                <dl className="mt-4 space-y-1 text-[14px] text-slate">
                  <div className="flex justify-between gap-4"><dt>Студия</dt><dd>{disc.studio}</dd></div>
                  <div className="flex justify-between gap-4"><dt>Длительность</dt><dd>{disc.duration}</dd></div>
                  <div className="flex justify-between gap-4"><dt>Треков</dt><dd>{disc.tracks.length}</dd></div>
                </dl>
                <button
                  type="button"
                  className="mt-4 min-h-11 text-[15px]"
                  aria-expanded={expanded}
                  onClick={() => setOpen(expanded ? null : disc.title)}
                >
                  Избранные произведения {expanded ? "–" : "+"}
                </button>
                {expanded ? (
                  <ol className="mt-2 list-decimal space-y-1 pl-5 text-[15px]">
                    {disc.tracks.map((track) => (
                      <li key={track}>{track}</li>
                    ))}
                  </ol>
                ) : null}
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
