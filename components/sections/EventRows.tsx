import Link from "next/link";
import type { Announcement } from "@/content/announcements";

export function EventRows({ items }: { items: Announcement[] }) {
  return (
    <ul className="border-t border-navy/15">
      {items.map((item) => (
        <li key={item.title + item.date} className="border-b border-navy/15">
          <Link href={item.href} className="grid items-center gap-3 py-6 md:grid-cols-12 md:gap-6">
            <span className="md:col-span-2">
              <span className="block font-display text-[44px] leading-none">{item.day}</span>
              <span className="mt-1 block text-[15px] text-slate">{item.date}</span>
            </span>
            <span className="md:col-span-7">
              <span className="text-[11px] uppercase tracking-[0.14em] text-slate">{item.kind}</span>
              <span className="mt-1 block font-display text-[22px] leading-tight md:text-[30px]">{item.title}</span>
            </span>
            <span className="text-[14px] text-slate md:col-span-2">{item.place}</span>
            <span className="text-[16px] md:col-span-1 md:text-right" aria-hidden>
              →
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
