import Link from "next/link";
import { Article } from "@/components/layout/Article";
import { news } from "@/content/news";
import { formatFullDate } from "@/lib/dates";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta("Новости", "Новости и публикации об оркестре «Метелица».", "/news");

export default function NewsPage() {
  return (
    <Article eyebrow="Медиа" title="Новости">
      <ul className="list-none pl-0">
        {news.map((item) => (
          <li key={item.slug} className="border-b border-navy/15 py-4">
            <Link href={`/news/${item.slug}`} className="font-display text-[26px] leading-tight">
              {item.title}
            </Link>
            <p className="text-[14px] text-slate">{formatFullDate(item.date)}</p>
          </li>
        ))}
      </ul>
    </Article>
  );
}
