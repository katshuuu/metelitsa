import { Article } from "@/components/layout/Article";
import { history } from "@/content/people";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "История",
  "История Государственного оркестра «Метелица» с первого концерта 14 марта 1989 года в Тихвине.",
  "/about/history",
);

export default function HistoryPage() {
  return (
    <Article eyebrow="Об оркестре" title="История">
      {history.map((paragraph) => (
        <p key={paragraph.slice(0, 24)}>{paragraph}</p>
      ))}
    </Article>
  );
}
