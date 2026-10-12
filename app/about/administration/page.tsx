import { Article } from "@/components/layout/Article";
import { administration } from "@/content/people";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta("Администрация", "Администрация ГБУК ЛО оркестр «Метелица».", "/about/administration");

export default function AdministrationPage() {
  return (
    <Article eyebrow="Об оркестре" title="Администрация">
      <ul className="list-none pl-0">
        {administration.map(([name, role]) => (
          <li key={name} className="border-b border-navy/15 py-4">
            <p className="font-display text-[24px]">{name}</p>
            <p className="text-[15px] text-slate">{role}</p>
          </li>
        ))}
      </ul>
    </Article>
  );
}
