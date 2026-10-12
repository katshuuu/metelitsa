import { PhotoGrid } from "@/components/sections/PhotoGrid";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta("Фотогалерея", "Концерты и гастроли оркестра «Метелица».", "/media/photo");

export default function PhotoPage() {
  return (
    <article>
      <header className="bg-navy text-white">
        <div className="mx-auto w-[min(1300px,calc(100%-40px))] pb-14 pt-32 md:w-[min(1300px,calc(100%-64px))]">
          <p className="text-[12px] uppercase tracking-[0.16em] text-white/70">Медиа</p>
          <h1 className="mt-4 font-display text-h1">Фотогалерея</h1>
        </div>
      </header>
      <div className="mx-auto w-[min(1300px,calc(100%-40px))] py-16 md:w-[min(1300px,calc(100%-64px))]">
        <PhotoGrid />
      </div>
    </article>
  );
}
