"use client";

import { useState } from "react";
import { announcements, type Announcement } from "@/content/announcements";
import { EventRows } from "@/components/sections/EventRows";
import { cn } from "@/lib/cn";

const filters = [
  { id: "all", label: "Все" },
  { id: "concert", label: "Концерты" },
  { id: "festival", label: "Фестивали и форумы" },
  { id: "tour", label: "Гастроли" },
] as const;

export function AnnouncementBoard() {
  const [filter, setFilter] = useState<(typeof filters)[number]["id"]>("all");
  const items: Announcement[] = filter === "all" ? announcements : announcements.filter((item) => item.filter === filter);
  return (
    <div>
      <div className="mb-8 flex gap-2 overflow-x-auto">
        {filters.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setFilter(item.id)}
            className={cn("min-h-11 shrink-0 border px-4 text-[14px]", filter === item.id ? "border-navy bg-navy text-white" : "border-navy/20")}
          >
            {item.label}
          </button>
        ))}
      </div>
      <EventRows items={items} />
    </div>
  );
}
