import { Article } from "@/components/layout/Article";
import { ensemble } from "@/content/people";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta("Состав", "Состав Государственного оркестра «Метелица».", "/about/composition");

export default function CompositionPage() {
  return (
    <Article eyebrow="Об оркестре" title="Состав">
      {ensemble.map((group) => (
        <section key={group.title} className="mb-8">
          <h2>{group.title}</h2>
          <p>{group.people.join(", ")}</p>
        </section>
      ))}
      <p className="text-[14px] text-slate">
        TODO: написание «Викториия Тубакова» сохранено так, как оно опубликовано на исходном сайте.
      </p>
    </Article>
  );
}
