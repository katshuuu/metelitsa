import Link from "next/link";
import { Frame, PageHero, SectionTabs } from "@/components/layout/PageFrame";
import { AnnouncementBoard } from "@/components/sections/AnnouncementBoard";
import { homeCrumbs, newsTabs } from "@/content/nav";
import { contacts } from "@/content/site";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta("Анонсы", "Концерты, фестивали и гастроли оркестра «Метелица».", "/news");

export default function NewsPage() {
  return (
    <>
      <PageHero
        crumbs={[...homeCrumbs, { label: "Новости", href: "/news" }, { label: "Анонсы" }]}
        kicker="Новости"
        title="Анонсы"
        lede="Концерты, фестивали и гастроли оркестра «Метелица»."
      />
      <SectionTabs items={newsTabs} />
      <Frame>
        <AnnouncementBoard />
        <aside className="mt-12 grid gap-4 bg-mist p-6 md:grid-cols-12 md:items-center">
          <div className="md:col-span-7">
            <h2 className="font-display text-[26px]">Билеты и вопросы</h2>
            <p className="mt-2 text-[16px] text-slate">Цены и наличие билетов уточняйте по телефону или у организаторов площадки.</p>
          </div>
          <div className="flex flex-wrap gap-6 md:col-span-5 md:justify-end">
            <a href={contacts.phoneHref} className="min-h-11 text-[15px]">{contacts.phoneDisplay}</a>
            <Link href="/pushkin" className="min-h-11 text-[15px]">Пушкинская карта</Link>
          </div>
        </aside>
      </Frame>
    </>
  );
}
