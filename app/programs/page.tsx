import { Frame, LinkCards, PageHero, SectionTabs } from "@/components/layout/PageFrame";
import { homeCrumbs, programTabs } from "@/content/nav";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta("Программы", "Просветительские и партнёрские проекты оркестра «Метелица».", "/programs");

export default function ProgramsPage() {
  return (
    <>
      <PageHero
        crumbs={[...homeCrumbs, { label: "Программы" }]}
        kicker="Метелица"
        title="Программы"
        lede="Просветительские и партнёрские проекты оркестра."
      />
      <SectionTabs items={programTabs} />
      <Frame>
        <LinkCards
          items={[
            {
              n: "01",
              title: "Школьный абонемент",
              text: "Цикл интерактивных концертов-путешествий «Волшебный мир народной музыки» для детей и подростков.",
              href: "/schools/subscription",
              action: "Подробнее",
            },
            {
              n: "02",
              title: "Творческая школа",
              text: "Детско-юношеская школа «Метелица»: мастер-классы с Игорем Тониным и солистами оркестра.",
              href: "/schools/creative-school",
              action: "Подробнее",
            },
            {
              n: "03",
              title: "Приглашаем к сотрудничеству",
              text: "Концертные программы для праздников, площадок и благотворительных проектов.",
              href: "/schools/cooperation",
              action: "Подробнее",
            },
          ]}
        />
      </Frame>
    </>
  );
}
