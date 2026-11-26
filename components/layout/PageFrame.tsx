"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";

export type Crumb = { label: string; href?: string };

export function PageHero({
  crumbs,
  kicker,
  title,
  lede,
  quote,
  quoteBy,
}: {
  crumbs: Crumb[];
  kicker: string;
  title: string;
  lede?: string;
  quote?: string;
  quoteBy?: string;
}) {
  return (
    <header className="bg-navy text-white">
      <Container className="pb-14 pt-[132px] md:pb-16 md:pt-[150px]">
        <nav aria-label="Хлебные крошки" className="text-[13px] text-white/80">
          <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
            {crumbs.map((crumb, index) => (
              <li key={`${crumb.label}-${index}`} className="flex items-center gap-2">
                {index > 0 ? <span aria-hidden>/</span> : null}
                {crumb.href && index < crumbs.length - 1 ? (
                  <Link href={crumb.href} className="underline decoration-white/40 underline-offset-4">
                    {crumb.label}
                  </Link>
                ) : (
                  <span>{crumb.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>
        <p className="mt-10 text-[12px] uppercase tracking-[0.16em] text-white/75">{kicker}</p>
        <h1 className="mt-6 max-w-[16ch] font-display text-[38px] leading-[1.02] md:text-[84px] md:leading-[0.92]">
          {title}
        </h1>
        {quote ? (
          <blockquote className="mt-6 max-w-[28rem] border-l border-white/40 pl-5">
            <p className="font-display text-[20px] leading-snug md:text-[30px]">{quote}</p>
            {quoteBy ? <footer className="mt-3 text-[13px] tracking-[0.06em] text-white/80">{quoteBy}</footer> : null}
          </blockquote>
        ) : null}
        {lede ? <p className="mt-6 max-w-[46rem] text-[17px] leading-snug text-white/90 md:text-[20px]">{lede}</p> : null}
      </Container>
    </header>
  );
}

export function SectionTabs({ items }: { items: { href: string; label: string }[] }) {
  const pathname = usePathname();
  const active = items
    .filter((item) => pathname === item.href || pathname.startsWith(`${item.href}/`))
    .sort((a, b) => b.href.length - a.href.length)[0]?.href;

  return (
    <div className="border-b border-navy/15 bg-white">
      <Container className="flex gap-x-8 overflow-x-auto">
        {items.map((item) => {
          const on = item.href === active;
          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={on ? "page" : undefined}
              className={cn(
                "-mb-px shrink-0 whitespace-nowrap border-b-2 py-4 text-[14.5px]",
                on ? "border-navy text-navy" : "border-transparent text-slate",
              )}
            >
              {item.label}
            </Link>
          );
        })}
      </Container>
    </div>
  );
}

export function SectionIntro({ kicker, title, text }: { kicker: string; title: string; text?: string }) {
  return (
    <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
      <div className="lg:col-span-6">
        <p className="text-[12px] uppercase tracking-[0.16em] text-slate">{kicker}</p>
        <h2 className="mt-4 max-w-[14ch] font-display text-[30px] leading-[1.05] md:text-[56px]">{title}</h2>
      </div>
      {text ? <p className="max-w-[36ch] text-[17px] leading-snug text-slate md:text-[20px] lg:col-span-6">{text}</p> : null}
    </div>
  );
}

export function StatGrid({ items }: { items: { value: string; label: string }[] }) {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item) => (
        <article key={item.value + item.label}>
          <p className="font-display text-[30px] leading-none md:text-[46px]">{item.value}</p>
          <p className="mt-3 max-w-[24ch] text-[15.5px] leading-snug text-slate md:text-[16px]">{item.label}</p>
        </article>
      ))}
    </div>
  );
}

export function LinkCards({
  items,
}: {
  items: { n: string; title: string; text: string; href: string; action?: string }[];
}) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <Link key={item.n + item.title} href={item.href} className="group flex min-h-[260px] flex-col border border-navy/20 bg-white p-8">
          <p className="text-[12px] tracking-[0.12em] text-slate">{item.n}</p>
          <h3 className="mt-6 font-display text-[24px] leading-tight md:text-[28px]">{item.title}</h3>
          <p className="mt-3 text-[15px] leading-relaxed text-slate">{item.text}</p>
          <span className="link-arrow mt-auto inline-flex min-h-11 items-center pt-6 text-[15px]">
            {item.action ?? "Открыть"} <span aria-hidden>→</span>
          </span>
        </Link>
      ))}
    </div>
  );
}

export function CtaBand({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string }[];
}) {
  return (
    <section className="bg-navy text-white">
      <Container className="flex flex-col gap-8 py-16 md:flex-row md:items-end md:justify-between md:py-20">
        <h2 className="max-w-[12ch] font-display text-[32px] leading-[1.05] md:text-[46px]">{title}</h2>
        <div className="flex flex-wrap gap-x-8 gap-y-2">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="link-arrow inline-flex min-h-11 items-center text-[15px]">
              {link.label}
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function Frame({
  children,
  className,
  tone = "white",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "white" | "mist";
}) {
  return (
    <section className={tone === "mist" ? "bg-mist" : "bg-white"}>
      <Container className={cn("py-16 md:py-20", className)}>{children}</Container>
    </section>
  );
}
