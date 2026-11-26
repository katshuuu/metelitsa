import { CtaBand, PageHero, SectionTabs } from "@/components/layout/PageFrame";
import { PhotoGrid } from "@/components/sections/PhotoGrid";
import { homeCrumbs, mediaTabs } from "@/content/nav";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta("Фотогалерея", "Концерты и гастроли оркестра «Метелица».", "/media/photo");

export default function PhotoPage() {
  return (
    <>
      <PageHero
        crumbs={[...homeCrumbs, { label: "Медиа", href: "/media" }, { label: "Фото" }]}
        kicker="Медиа"
        title="Фотогалерея"
        lede="Концерты, репетиции и гастроли. Нажмите на фотографию, чтобы открыть её крупно; листайте стрелками или свайпом."
      />
      <SectionTabs items={mediaTabs} />
      <div className="mx-auto w-[min(1300px,calc(100%-40px))] py-16 md:w-[min(1300px,calc(100%-64px))] md:py-20">
        <PhotoGrid />
      </div>
      <CtaBand title="Больше — в видео и на концертах" links={[{ href: "/media/video", label: "Видео на RuTube" }, { href: "/news", label: "Анонсы" }]} />
    </>
  );
}
