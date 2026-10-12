import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function Article({
  eyebrow,
  title,
  lede,
  children,
}: {
  eyebrow: string;
  title: string;
  lede?: string;
  children: React.ReactNode;
}) {
  return (
    <article>
      <header className="bg-navy text-white">
        <Container className="pb-14 pt-32 md:pb-16">
          <SectionLabel light>{eyebrow}</SectionLabel>
          <h1 className="mt-4 max-w-[16ch] font-display text-h1">{title}</h1>
          {lede ? <p className="measure mt-6 text-[18px] leading-[1.55] text-white/80">{lede}</p> : null}
        </Container>
      </header>
      <Container className="prose-metelitsa py-16 md:py-20">{children}</Container>
    </article>
  );
}
