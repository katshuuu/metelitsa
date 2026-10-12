import { Article } from "@/components/layout/Article";
import { discs } from "@/content/media";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta("Дискография", "Записи оркестра «Метелица».", "/media/discography");

export default function DiscographyPage() {
  return (
    <Article eyebrow="Медиа" title="Дискография">
      {discs.map((disc) => (
        <section key={disc.title} className="mb-10">
          <h2>{disc.title}</h2>
          <p className="text-slate">
            {disc.year}. Студия: {disc.studio}. Время звучания: {disc.duration}
          </p>
          <ul>
            {disc.tracks.map((track) => (
              <li key={track}>{track}</li>
            ))}
          </ul>
        </section>
      ))}
      <p className="text-[14px] text-slate">
        TODO: файлы треков для скачивания остались на исходном сайте и в эту сборку не копировались.
      </p>
    </Article>
  );
}
