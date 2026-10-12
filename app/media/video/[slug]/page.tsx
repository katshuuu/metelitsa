import { notFound } from "next/navigation";
import { Article } from "@/components/layout/Article";
import { videos } from "@/content/media";
import { formatFullDate } from "@/lib/dates";
import { pageMeta } from "@/lib/seo";

export function generateStaticParams() {
  return videos.map((video) => ({ slug: video.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const video = videos.find((item) => item.slug === params.slug);
  if (!video) return {};
  return pageMeta(video.title, video.text ?? video.title, `/media/video/${video.slug}`);
}

export default function VideoItemPage({ params }: { params: { slug: string } }) {
  const video = videos.find((item) => item.slug === params.slug);
  if (!video) notFound();
  return (
    <Article eyebrow="Видео" title={video.title} lede={formatFullDate(video.date)}>
      {video.text ? <p>{video.text}</p> : null}
      {video.youtubeId ? (
        <div className="mt-6 aspect-video max-w-3xl bg-navy">
          <iframe
            title={video.title}
            src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?rel=0`}
            className="h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      ) : (
        <p>TODO: ссылка на ролик на исходной странице не найдена.</p>
      )}
    </Article>
  );
}
