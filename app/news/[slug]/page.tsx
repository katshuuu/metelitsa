import { notFound } from "next/navigation";
import { Article } from "@/components/layout/Article";
import { getNews, news } from "@/content/news";
import { formatFullDate } from "@/lib/dates";
import { pageMeta } from "@/lib/seo";

export function generateStaticParams() {
  return news.map((item) => ({ slug: item.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const item = getNews(params.slug);
  if (!item) return {};
  return pageMeta(item.title, item.title, `/news/${item.slug}`);
}

export default function NewsItemPage({ params }: { params: { slug: string } }) {
  const item = getNews(params.slug);
  if (!item) notFound();
  return (
    <Article eyebrow={item.kind === "press" ? "СМИ о нас" : "Новости"} title={item.title} lede={formatFullDate(item.date)}>
      {(item.body ?? ["TODO: полный текст этой публикации не перенесён."]).map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </Article>
  );
}
