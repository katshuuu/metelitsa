import { Article } from "@/components/layout/Article";
import { LinkArrow } from "@/components/ui/LinkArrow";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta("Фестивали", "Фестивали оркестра «Метелица».", "/festivals");

export default function FestivalsPage() {
  return (
    <Article eyebrow="Фестивали" title="Фестивали">
      <LinkArrow href="/festivals/andreevskie-assamblei">Андреевские ассамблеи</LinkArrow>
    </Article>
  );
}
