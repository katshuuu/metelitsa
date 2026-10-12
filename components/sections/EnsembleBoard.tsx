"use client";

import { useState } from "react";
import { ensemble } from "@/content/people";
import { cn } from "@/lib/cn";

const filters = ["Все", "Балалайки", "Домры", "Баяны", "Другие инструменты"] as const;

function groupOf(title: string) {
  if (title.includes("Балалай")) return "Балалайки";
  if (title.includes("Домр")) return "Домры";
  if (title.includes("Баян")) return "Баяны";
  if (title.includes("Дириж") || title.includes("руководитель")) return "Все";
  return "Другие инструменты";
}

export function EnsembleBoard() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("Все");
  const visible = ensemble.filter((group) => filter === "Все" || groupOf(group.title) === filter);

  return (
    <div>
      <div className="flex gap-2 overflow-x-auto pb-8">
        {filters.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setFilter(item)}
            className={cn(
              "min-h-11 shrink-0 border px-4 text-[14px]",
              filter === item ? "border-navy bg-navy text-white" : "border-navy/20 text-navy",
            )}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="space-y-10">
        {visible.map((group) => (
          <section key={group.title}>
            <h2 className="font-display text-[26px]">{group.title}</h2>
            <ul className="mt-4 border-t border-navy/10">
              {group.people.map((person) => (
                <li key={person} className="border-b border-navy/10 py-3 text-[16px]">
                  {person}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
      <p className="mt-10 text-[16px] text-slate">Состав приведён по данным сайта оркестра и может обновляться.</p>
    </div>
  );
}
