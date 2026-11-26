import { Frame, PageHero, SectionTabs } from "@/components/layout/PageFrame";
import { press } from "@/content/announcements";
import { homeCrumbs, newsTabs } from "@/content/nav";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta("СМИ о нас", "Телевидение, порталы и газеты об оркестре «Метелица».", "/media/publications");

export default function PublicationsPage() {
  return (
    <>
      <PageHero
        crumbs={[...homeCrumbs, { label: "Новости", href: "/news" }, { label: "СМИ о нас" }]}
        kicker="Новости"
        title="СМИ о нас"
        lede="Телевидение, порталы и газеты о концертах и гастролях оркестра."
      />
      <SectionTabs items={newsTabs} />
      <Frame>
        <ul className="border-t border-navy/15">
          {press.map((item) => (
            <li key={item.date + item.source} className="grid gap-2 border-b border-navy/15 py-6 md:grid-cols-12 md:items-center">
              <p className="text-[15px] text-slate md:col-span-2">{item.date}</p>
              <div className="md:col-span-9">
                <p className="text-[11px] uppercase tracking-[0.14em] text-slate">{item.source}</p>
                <p className="mt-1 font-display text-[24px] leading-tight md:text-[30px]">{item.title}</p>
              </div>
              <span className="md:col-span-1 md:text-right" aria-hidden>→</span>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-[16px] text-slate">
          Показаны последние публикации. Полный архив — на{" "}
          <a href="https://metelitsa-spb.ru/" className="underline">сайте оркестра</a>.
        </p>
      </Frame>
    </>
  );
}
