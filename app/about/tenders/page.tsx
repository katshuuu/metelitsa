import { Article } from "@/components/layout/Article";
import { tenders } from "@/content/documents";
import { organization } from "@/content/site";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta("Закупки", "Закупки оркестра «Метелица» в Единой информационной системе.", "/about/tenders");

export default function TendersPage() {
  return (
    <Article eyebrow="Об оркестре" title="Закупки" lede={`ИНН ${organization.inn}`}>
      <ul className="list-none pl-0">
        {tenders.map((item) => (
          <li key={item.href} className="py-3">
            <a href={item.href} className="link-arrow" target="_blank" rel="noreferrer">
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </Article>
  );
}
