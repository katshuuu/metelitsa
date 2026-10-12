"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { mainNav } from "@/content/site";
import { cn } from "@/lib/cn";
import { useDialog } from "@/lib/use-dialog";
import { usePrefersReducedMotion } from "@/lib/use-reduced-motion";
import { Mark } from "@/components/ui/Mark";
import { Button } from "@/components/ui/Button";

export function Header() {
  const pathname = usePathname();
  const reduced = usePrefersReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const [expanded, setExpanded] = useState<string | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const close = useCallback(() => setOpen(false), []);
  useDialog(open, close, dialogRef);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (pathname !== "/") return;
    const nodes = mainNav
      .map((item) => (item.sectionId ? document.getElementById(item.sectionId) : null))
      .filter((node): node is HTMLElement => Boolean(node));
    if (!nodes.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0.1, 0.3, 0.6] },
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [pathname]);

  const go = (event: React.MouseEvent<HTMLAnchorElement>, sectionId?: string) => {
    if (!sectionId || pathname !== "/") return;
    const target = document.getElementById(sectionId);
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "start" });
    history.replaceState(null, "", `/#${sectionId}`);
    setOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 text-white transition-colors duration-300",
        scrolled || pathname !== "/" ? "bg-navy" : "bg-navy/0",
      )}
    >
      <div className="mx-auto flex h-24 w-[min(1300px,calc(100%-40px))] items-center gap-6 md:w-[min(1300px,calc(100%-64px))]">
        <Link href="/" className="shrink-0" aria-label="Метелица, на главную">
          <Mark />
        </Link>
        <nav className="hidden flex-1 items-center justify-end gap-6 lg:flex" aria-label="Основное меню">
          {mainNav.map((item) => {
            const current =
              (item.sectionId && active === item.sectionId && pathname === "/") ||
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href));
            const href = pathname === "/" && item.sectionId ? `/#${item.sectionId}` : item.href;
            return (
              <div key={item.href} className="group relative">
                <Link
                  href={href}
                  onClick={(event) => go(event, item.sectionId)}
                  aria-current={current ? "page" : undefined}
                  className={cn(
                    "inline-flex min-h-11 items-center text-[15px]",
                    current ? "underline decoration-white/70 underline-offset-8" : "",
                  )}
                >
                  {item.label}
                </Link>
                {item.children ? (
                  <div className="pointer-events-none absolute left-0 top-full z-20 min-w-[240px] border border-white/20 bg-navy py-2 opacity-0 transition-opacity duration-200 group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2 text-[15px] hover:bg-white/10"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            );
          })}
        </nav>
        <Button href="/tickets" tone="onDark" variant="solid" className="ml-6 hidden lg:inline-flex">
          Купить билет
        </Button>
        <button
          type="button"
          className="ml-auto inline-flex h-11 w-11 items-center justify-center lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Закрыть меню" : "Открыть меню"}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Закрыть" : "Меню"}</span>
          <span className="flex w-6 flex-col gap-1.5" aria-hidden>
            <span className={cn("h-px w-full bg-white transition", open && "translate-y-[7px] rotate-45")} />
            <span className={cn("h-px w-full bg-white transition", open && "opacity-0")} />
            <span className={cn("h-px w-full bg-white transition", open && "-translate-y-[7px] -rotate-45")} />
          </span>
        </button>
      </div>
      <div className={cn("h-px w-full", scrolled ? "bg-white/25" : "bg-white/20")} />

      {open ? (
        <div
          id="mobile-menu"
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-label="Меню"
          className="fixed inset-0 z-50 overflow-y-auto bg-navy text-white lg:hidden"
        >
          <div className="flex h-24 items-center justify-between px-5">
            <Mark />
            <button type="button" className="h-11 px-3 text-[15px]" onClick={close}>
              Закрыть
            </button>
          </div>
          <nav className="px-5 pb-16" aria-label="Мобильное меню">
            {mainNav.map((item) => (
              <div key={item.href} className="border-t border-white/20">
                <div className="flex items-center justify-between">
                  <Link
                    href={pathname === "/" && item.sectionId ? `/#${item.sectionId}` : item.href}
                    onClick={(event) => go(event, item.sectionId)}
                    className="inline-flex min-h-11 items-center font-display text-[28px]"
                  >
                    {item.label}
                  </Link>
                  {item.children ? (
                    <button
                      type="button"
                      className="h-11 w-11"
                      aria-expanded={expanded === item.href}
                      aria-label={`Разделы: ${item.label}`}
                      onClick={() => setExpanded((value) => (value === item.href ? null : item.href))}
                    >
                      {expanded === item.href ? "–" : "+"}
                    </button>
                  ) : null}
                </div>
                {item.children && expanded === item.href ? (
                  <div className="pb-4">
                    {item.children.map((child) => (
                      <Link key={child.href} href={child.href} className="block py-2 text-[16px] text-white/80" onClick={close}>
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
            <Button href="/tickets" tone="onDark" className="mt-8 w-full">
              Купить билет
            </Button>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
