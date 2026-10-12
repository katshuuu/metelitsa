import { Frame, LinkCards, PageHero, SectionTabs } from "@/components/layout/PageFrame";
import { tenders } from "@/content/documents";
import { aboutTabs, homeCrumbs } from "@/content/nav";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta("Закупки", "Закупки оркестра «Метелица».", "/about/tenders");

export default function TendersPage() {
  return (
    <>
      <PageHero
        crumbs={[...homeCrumbs, { label: "Об оркестре", href: "/about" }, { label: "Закупки" }]}
        kicker="Об оркестре"
        title="Закупки"
        lede="Информация о закупках размещается на внешних государственных ресурсах."
      />
      <SectionTabs items={aboutTabs} />
      <Frame>
        <LinkCards
          items={[
            {
              n: "01",
              title: "План-график закупок",
              text: "План-график закупок товаров, работ и услуг, размещённый Комитетом по культуре и туризму Ленинградской области.",
              href: tenders[0].href,
            },
            {
              n: "02",
              title: "Извещения о закупках",
              text: "Извещения публикуются в единой информационной системе в сфере закупок. Для поиска используйте наименование организации.",
              href: tenders[1].href,
            },
            {
              n: "03",
              title: "Реестр закупок региона",
              text: "Сводный реестр закупок Комитета государственного заказа Ленинградской области ищите в ЕИС по ИНН организации.",
              href: tenders[1].href,
            },
          ]}
        />
      </Frame>
    </>
  );
}
