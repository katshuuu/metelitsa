import Image from "next/image";
import { Article } from "@/components/layout/Article";
import { LinkArrow } from "@/components/ui/LinkArrow";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta("Детские конкурсы", "Детские конкурсы оркестра «Метелица».", "/competitions");

export default function CompetitionsPage() {
  return (
    <Article eyebrow="Программы" title="Детские конкурсы">
      <Image
        src="/images/competition.webp"
        alt="Участница конкурса играет на гуслях"
        width={1302}
        height={990}
        className="mb-8 h-auto w-full max-w-[720px]"
      />
      <p>На исходном сайте раздел состоит из страницы текущего года и фотогалереи.</p>
      <LinkArrow href="/competitions/2027">2027 год</LinkArrow>
    </Article>
  );
}
