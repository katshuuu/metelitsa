import { Article } from "@/components/layout/Article";
import { LinkArrow } from "@/components/ui/LinkArrow";
import { aboutLead } from "@/content/people";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Об оркестре",
  "Государственный оркестр русских народных инструментов «Метелица», создан в 1989 году.",
  "/about",
);

const links = [
  ["/about/history", "История"],
  ["/about/igor-tonin", "Игорь Тонин"],
  ["/about/administration", "Администрация"],
  ["/about/composition", "Состав"],
  ["/about/documents", "Документы"],
  ["/about/tenders", "Закупки"],
];

export default function AboutPage() {
  return (
    <Article
      eyebrow="Об оркестре"
      title="Сохраняя национальный код — объединяем сердца"
      lede="Слова художественного руководителя И. М. Тонина."
    >
      {aboutLead.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
      <h2>Разделы</h2>
      <ul className="list-none pl-0">
        {links.map(([href, label]) => (
          <li key={href}>
            <LinkArrow href={href}>{label}</LinkArrow>
          </li>
        ))}
      </ul>
    </Article>
  );
}
