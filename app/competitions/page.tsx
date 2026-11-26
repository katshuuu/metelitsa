import { CtaBand, Frame, PageHero } from "@/components/layout/PageFrame";
import { homeCrumbs } from "@/content/nav";
import { contacts } from "@/content/site";
import { pageMeta } from "@/lib/seo";

const items = [
  { n: "01", title: "Ленинградский областной", text: "Открытый детский конкурс исполнителей на народных инструментах" },
  { n: "02", title: "Международный", text: "Детский конкурс исполнителей на народных инструментах имени Н. Н. Калинина" },
];

export const metadata = pageMeta("Детские конкурсы", "Конкурсы юных исполнителей, которые проводит оркестр.", "/competitions");

export default function CompetitionsPage() {
  return (
    <>
      <PageHero
        crumbs={[...homeCrumbs, { label: "Детские конкурсы" }]}
        kicker="Метелица"
        title="Детские конкурсы"
        lede="Конкурсы юных исполнителей на народных инструментах, которые проводит оркестр."
      />
      <Frame>
        <div className="grid gap-4 md:grid-cols-2">
          {items.map((item) => (
            <article key={item.n} className="border border-navy/10 bg-mist p-8">
              <p className="text-[12px] text-slate">{item.n}</p>
              <h2 className="mt-6 font-display text-[28px]">{item.title}</h2>
              <p className="mt-3 text-[15px] text-slate">{item.text}</p>
            </article>
          ))}
        </div>
      </Frame>
      <Frame className="pt-0">
        <h2 className="font-display text-[32px] md:text-[44px]">Участие</h2>
        <p className="mt-4 max-w-[62ch] text-[16px] leading-relaxed text-slate">
          Организатор конкурсов — Государственный оркестр русских народных инструментов «Метелица». Возрастные группы, номинации, сроки и порядок подачи заявок уточняйте у организаторов.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <div>
            <p className="text-[12px] uppercase tracking-[0.14em] text-slate">Телефон</p>
            <p className="mt-2 font-display text-[22px]"><a href={contacts.phoneHref}>{contacts.phoneDisplay}</a></p>
          </div>
          <div>
            <p className="text-[12px] uppercase tracking-[0.14em] text-slate">E-mail</p>
            <p className="mt-2 text-[16px]"><a href={`mailto:${contacts.email}`}>{contacts.email}</a></p>
          </div>
        </div>
        <p className="mt-8 text-[15px]">
          <a href="https://metelitsa-spb.ru/" className="link-arrow">Архив конкурсов и фотогалерея на сайте оркестра</a>
        </p>
      </Frame>
      <CtaBand title="Следующий сезон" links={[{ href: "/competitions/2027", label: "2027 год" }, { href: "/contacts", label: "Написать" }]} />
    </>
  );
}