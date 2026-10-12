import { Article } from "@/components/layout/Article";
import { documents } from "@/content/documents";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Документы",
  "Устав и положения ГБУК ЛО «Оркестр русских народных инструментов «Метелица».",
  "/about/documents",
);

export default function DocumentsPage() {
  return (
    <Article eyebrow="Об оркестре" title="Документы">
      <ul className="list-none pl-0">
        {documents.map((doc) => (
          <li key={doc.href} className="border-b border-navy/15 py-4">
            <a href={doc.href} className="link-arrow text-[16px]" target="_blank" rel="noreferrer">
              {doc.title}
            </a>
            <p className="text-[13px] text-slate">{doc.size}</p>
          </li>
        ))}
      </ul>
    </Article>
  );
}
