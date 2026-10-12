import { CtaBand, Frame, PageHero, SectionTabs, StatGrid } from "@/components/layout/PageFrame";
import { homeCrumbs, programTabs } from "@/content/nav";
import { contacts } from "@/content/site";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta("Творческая школа", "Детско-юношеская творческая школа «Метелица».", "/schools/creative-school");

export default function CreativeSchoolPage() {
  return (
    <>
      <PageHero
        crumbs={[...homeCrumbs, { label: "Программы", href: "/programs" }, { label: "Творческая школа" }]}
        kicker="Программы"
        title="Творческая школа"
        lede="Детско-юношеская творческая школа «Метелица» при Государственном оркестре русских народных инструментов."
      />
      <SectionTabs items={programTabs} />
      <Frame>
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5 lg:col-start-7">
            <p className="text-[12px] uppercase tracking-[0.16em] text-slate">О школе</p>
            <h2 className="mt-4 font-display text-[32px] leading-[1.05] md:text-[46px]">Сохранять традиции и учить новое поколение</h2>
            <div className="mt-6 space-y-4 text-[16px] leading-relaxed">
              <p>Детско-юношеская творческая школа «Метелица» создана, чтобы сохранять и развивать традиции русской народной музыки, а вместе с ними — культурные, просветительские и нравственные ценности.</p>
              <p>Занятия проходят в формате мастер-классов: их ведут Игорь Тонин и солисты оркестра — лауреаты международных конкурсов. Среди прошедших занятий — ударные, балалайка и малая домра.</p>
            </div>
          </div>
        </div>
      </Frame>
      <Frame className="pt-0">
        <StatGrid
          items={[
            { value: "Осень 2019", label: "Первый набор открылся осенью 2019 года" },
            { value: "Мастер-классы", label: "Балалайка, малая домра, ударные" },
            { value: "Совместный концерт", label: "Первый цикл завершился концертом в «Ротонде»" },
          ]}
        />
      </Frame>
      <CtaBand
        title="Условия набора — по телефону"
        links={[{ href: contacts.phoneHref, label: contacts.phoneDisplay }]}
      />
    </>
  );
}
