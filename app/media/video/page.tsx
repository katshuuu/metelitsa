import Link from "next/link";
import { Article } from "@/components/layout/Article";
import { videos } from "@/content/media";
import { socials } from "@/content/site";
import { formatFullDate } from "@/lib/dates";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta("Видео", "Видеозаписи и телесюжеты оркестра «Метелица».", "/media/video");

export default function VideoPage() {
  const rutube = socials.find((item) => item.label === "RuTube");
  return (
    <Article eyebrow="Медиа" title="Видео" lede="Ролики открываются по запросу, без автозапуска звука.">
      {rutube ? (
        <p>
          <a href={rutube.href} className="link-arrow" target="_blank" rel="noreferrer">
            Канал оркестра на RuTube
          </a>
        </p>
      ) : null}
      <ul className="list-none pl-0">
        {videos.map((video) => (
          <li key={video.slug} className="border-b border-navy/15 py-4">
            <Link href={`/media/video/${video.slug}`} className="font-display text-[24px]">
              {video.title}
            </Link>
            <p className="text-[14px] text-slate">{formatFullDate(video.date)}</p>
          </li>
        ))}
      </ul>
      <p className="text-[14px] text-slate">
        TODO: у части сюжетов на исходном сайте нет прямой ссылки на ролик — для них перенесены только название и дата.
      </p>
    </Article>
  );
}
