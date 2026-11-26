import { Article } from "@/components/layout/Article";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta("Детские конкурсы, 2027 год", "Страница конкурса 2027 года.", "/competitions/2027");

export default function CompetitionYearPage() {
  return (
    <Article eyebrow="Детские конкурсы" title="2027 год">
      <p>
        TODO: на исходной странице (адрес childrens-competitions/2023-god, заголовок «2027 год») нет описательного текста — только название раздела.
      </p>
    </Article>
  );
}
