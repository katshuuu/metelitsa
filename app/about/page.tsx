import { CtaBand, Frame, LinkCards, PageHero, SectionIntro, SectionTabs, StatGrid } from "@/components/layout/PageFrame";
import { aboutTabs, homeCrumbs } from "@/content/nav";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Об оркестре",
  "Государственный оркестр русских народных инструментов «Метелица», создан в 1989 году.",
  "/about",
);

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumbs={[...homeCrumbs, { label: "Об оркестре" }]}
        kicker="Метелица"
        title="Об оркестре"
        quote="«Сохраняя национальный код — объединяем сердца!»"
        quoteBy="И. М. Тонин"
      />
      <SectionTabs items={aboutTabs} />
      <Frame>
        <StatGrid
          items={[
            { value: "1989", label: "Год основания оркестра" },
            { value: "1992", label: "Присвоен статус государственного" },
            { value: "100+", label: "Концертов в год" },
            { value: "Солисты", label: "Музыканты — лауреаты конкурсов" },
          ]}
        />
      </Frame>
      <Frame className="pt-0">
        <SectionIntro kicker="Оркестр солистов" title="Один из ведущих профессиональных оркестров народных инструментов России" />
        <div className="mt-8 max-w-[68ch] space-y-4 text-[16px] leading-relaxed">
          <p>
            Основная деятельность коллектива — концертное обслуживание жителей Ленинградской области и соседних регионов. Оркестр также выступает по всей России и за рубежом.
          </p>
          <p>
            Его музыканты — солисты, многие из них — лауреаты международных и всероссийских конкурсов. В репертуаре русская и зарубежная классика, народная музыка, современные и авангардные сочинения: оркестр показывает, что народные инструменты способны исполнить музыку любого стиля для любой аудитории.
          </p>
        </div>
      </Frame>
      <Frame tone="mist">
        <SectionIntro kicker="Разделы" title="Об оркестре подробнее" />
        <div className="mt-10">
          <LinkCards
            items={[
              { n: "01", title: "История", text: "От первого концерта в Тихвине в 1989 году до гастролей по миру.", href: "/about/history" },
              { n: "02", title: "Игорь Тонин", text: "Художественный руководитель, главный дирижёр и директор оркестра.", href: "/about/igor-tonin" },
              { n: "03", title: "Состав", text: "Солисты-лауреаты: балалайки, домры, баяны, гусли и другие.", href: "/about/composition" },
              { n: "04", title: "Администрация", text: "Руководство и сотрудники оркестра.", href: "/about/administration" },
              { n: "05", title: "Документы", text: "Устав, положения, отчёты и материалы для зрителей.", href: "/about/documents" },
              { n: "06", title: "Закупки", text: "План-график и извещения о закупках.", href: "/about/tenders" },
            ]}
          />
        </div>
      </Frame>
      <CtaBand title="Хотите услышать оркестр вживую?" links={[{ href: "/news", label: "Афиша" }, { href: "/contacts", label: "Контакты" }]} />
    </>
  );
}
