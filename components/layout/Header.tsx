"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { headerNav } from "@/content/site";
import { cn } from "@/lib/cn";
import { useDialog } from "@/lib/use-dialog";
import { Button } from "@/components/ui/Button";

function isCurrent(pathname: string, href: string) {
  if (href === "/programs" && (pathname === "/schools" || pathname.startsWith("/schools/"))) return true;
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const close = useCallback(() => setOpen(false), []);
  useDialog(open, close, dialogRef);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/20 bg-navy text-white">
      <div className="mx-auto flex h-[69px] w-[min(1300px,calc(100%-40px))] items-center 2xl:h-[77px] 2xl:w-[min(1300px,calc(100%-64px))]">
        <Link href="/" className="shrink-0" aria-label="Метелица, на главную">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand/logo.svg" alt="" className="h-[29px] w-auto" />
        </Link>
        <nav className="ml-auto hidden items-center gap-x-7 2xl:flex" aria-label="Основное меню">
          {headerNav.map((item) => {
            const on = isCurrent(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={on ? "page" : undefined}
                className={cn(
                  "inline-flex h-11 items-center whitespace-nowrap text-[14.5px]",
                  on && "underline decoration-white/70 underline-offset-8",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="ml-7 hidden 2xl:block">
          <Button href="/news" tone="onDark" variant="solid" className="h-11 min-w-[112px] px-5">
            Афиша
          </Button>
        </div>
        <button
          type="button"
          className="ml-auto inline-flex h-11 w-11 items-center justify-center 2xl:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Закрыть меню" : "Открыть меню"}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Закрыть" : "Меню"}</span>
          <span className="flex w-6 flex-col gap-[6px]" aria-hidden>
            <span className={cn("h-px w-full bg-white transition", open && "translate-y-[7px] rotate-45")} />
            <span className={cn("h-px w-full bg-white transition", open && "opacity-0")} />
            <span className={cn("h-px w-full bg-white transition", open && "-translate-y-[7px] -rotate-45")} />
          </span>
        </button>
      </div>

      {open ? (
        <div
          id="mobile-menu"
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-label="Меню"
          className="fixed inset-0 z-50 overflow-y-auto bg-navy text-white 2xl:hidden"
        >
          <div className="mx-auto flex h-[69px] w-[min(1300px,calc(100%-40px))] items-center justify-between">
            <Link href="/" aria-label="Метелица, на главную" onClick={close}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/brand/logo.svg" alt="" className="h-[29px] w-auto" />
            </Link>
            <button type="button" className="h-11 px-3 text-[15px]" onClick={close}>
              Закрыть
            </button>
          </div>
          <nav className="mx-auto w-[min(1300px,calc(100%-40px))] pb-16" aria-label="Мобильное меню">
            {headerNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex min-h-11 items-center border-t border-white/20 font-display text-[28px]"
                onClick={close}
              >
                {item.label}
              </Link>
            ))}
            <Button href="/news" tone="onDark" className="mt-8 w-full">
              Афиша
            </Button>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
