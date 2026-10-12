import { Frame, PageHero, SectionTabs } from "@/components/layout/PageFrame";
import { DiscList } from "@/components/sections/DiscList";
import { homeCrumbs, mediaTabs } from "@/content/nav";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta("Дискография", "Альбомы оркестра «Метелица», 1997–2008.", "/media/discography");

export default function DiscographyPage() {
  return (
    <>
      <PageHero
        crumbs={[...homeCrumbs, { label: "Медиа", href: "/media" }, { label: "Дискография" }]}
        kicker="Медиа"
        title="Дискография"
        lede="Четыре альбома, записанных оркестром в 1997–2008 годах."
      />
      <SectionTabs items={mediaTabs} />
      <Frame>
        <DiscList />
        <p className="mt-8 text-[16px] text-slate">Полные списки произведений и MP3-фрагменты доступны на сайте оркестра.</p>
      </Frame>
    </>
  );
}
