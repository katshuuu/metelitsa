import { Frame, PageHero, SectionTabs } from "@/components/layout/PageFrame";
import { EnsembleBoard } from "@/components/sections/EnsembleBoard";
import { aboutTabs, homeCrumbs } from "@/content/nav";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta("Состав оркестра", "Музыканты оркестра «Метелица».", "/about/composition");

export default function CompositionPage() {
  return (
    <>
      <PageHero
        crumbs={[...homeCrumbs, { label: "Об оркестре", href: "/about" }, { label: "Состав" }]}
        kicker="Об оркестре"
        title="Состав оркестра"
        lede="30 музыкантов: дирижёры, балалайки, домры, баяны, гусли и другие инструменты."
      />
      <SectionTabs items={aboutTabs} />
      <Frame>
        <EnsembleBoard />
      </Frame>
    </>
  );
}
