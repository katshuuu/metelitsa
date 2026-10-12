import { Article } from "@/components/layout/Article";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta("Андреевские ассамблеи", "Фестиваль «Андреевские ассамблеи».", "/festivals/andreevskie-assamblei");

export default function AndreevPage() {
  return (
    <Article eyebrow="Фестивали" title="Андреевские ассамблеи">
      <p>Информация скоро появится.</p>
    </Article>
  );
}
