import Link from "next/link";
import { Frame, PageHero, SectionIntro } from "@/components/layout/PageFrame";
import { homeCrumbs } from "@/content/nav";
import { pageMeta } from "@/lib/seo";

const nearby = [
  { date: "12 апреля 2026", title: "Закрытие VI Открытого фестиваля исполнителей на гуслях «Гуслей серебристый перезвон»", href: "/tickets/gusli-perezvon" },
  { date: "2 ноября 2025", title: "III Приваловский форум в Нижнем Тагиле", href: "/festivals" },
  { date: "II Всероссийский", title: "Конкурс-фестиваль «Балалайка во фраке»", href: "/competitions" },
];

export const metadata = pageMeta("Фестивали", "Фестивали и форумы с участием оркестра «Метелица».", "/festivals");

export default function FestivalsPage() {
  return (
    <>
      <PageHero
        crumbs={[...homeCrumbs, { label: "Фестивали" }]}
        kicker="Метелица"
        title="Фестивали"
        lede="Фестивали и форумы, в которых участвует оркестр «Метелица»."
      />
      <Frame>
        <Link href="/festivals/andreevskie-assamblei" className="block max-w-xl border border-navy/10 bg-mist p-8">
          <p className="text-[12px] text-slate">01</p>
          <h2 className="mt-6 font-display text-[28px]">Андреевские ассамблеи</h2>
          <p className="mt-3 text-[15px] text-slate">Информация о фестивале скоро появится на сайте.</p>
        </Link>
      </Frame>
      <Frame className="pt-0">
        <SectionIntro kicker="Рядом" title="Фестивали с участием оркестра" />
        <ul className="mt-8 border-t border-navy/15">
          {nearby.map((item) => (
            <li key={item.title} className="border-b border-navy/15">
              <Link href={item.href} className="grid gap-2 py-5 md:grid-cols-12 md:items-center">
                <span className="text-[15px] text-slate md:col-span-3">{item.date}</span>
                <span className="font-display text-[22px] leading-tight md:col-span-8 md:text-[30px]">{item.title}</span>
                <span className="md:col-span-1 md:text-right" aria-hidden>→</span>
              </Link>
            </li>
          ))}
        </ul>
      </Frame>
    </>
  );
}
