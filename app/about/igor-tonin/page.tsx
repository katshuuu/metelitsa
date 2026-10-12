import { Article } from "@/components/layout/Article";
import { biography, quote } from "@/content/people";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Игорь Тонин",
  "Биография художественного руководителя и главного дирижёра оркестра «Метелица», заслуженного артиста РФ Игоря Тонина.",
  "/about/igor-tonin",
);

export default function ToninPage() {
  return (
    <Article
      eyebrow="Об оркестре"
      title="Игорь Тонин"
      lede="Художественный руководитель, главный дирижёр и директор, заслуженный артист РФ."
    >
      <div id="interview" className="mb-10 scroll-mt-32 border border-navy/20 p-6">
        {quote.full.map((paragraph) => (
          <p key={paragraph.slice(0, 20)} className="font-display text-[22px] leading-snug">
            {paragraph}
          </p>
        ))}
        <p className="text-[15px] text-slate">
          {quote.author}, {quote.role}
        </p>
      </div>
      {biography.map((paragraph) => (
        <p key={paragraph.slice(0, 24)}>{paragraph}</p>
      ))}
    </Article>
  );
}
