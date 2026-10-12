import Image from "next/image";
import { quote } from "@/content/people";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { LinkArrow } from "@/components/ui/LinkArrow";

export function AboutBand() {
  return (
    <section id="about" className="relative scroll-mt-28 overflow-hidden bg-navy py-20 text-white md:py-28">
      <Image
        src="/images/ornament.png"
        alt=""
        width={640}
        height={480}
        className="pointer-events-none absolute -right-10 top-0 hidden w-[340px] mix-blend-screen lg:block"
      />
      <Container className="grid items-center gap-10 lg:grid-cols-12">
        <div className="relative aspect-[3/4] lg:col-span-5">
          <Image
            src="/images/hero-hall.webp"
            alt="Игорь Тонин дирижирует оркестром «Метелица»"
            fill
            sizes="(max-width: 1024px) 100vw, 480px"
            className="object-cover object-[center_20%]"
          />
        </div>
        <div className="lg:col-span-7">
          <SectionLabel light>Об оркестре</SectionLabel>
          <h2 className="mt-4 max-w-[12ch] font-display text-h2">Нужно уметь объединить сердца</h2>
          <p className="measure mt-6 text-[16px] leading-[1.6] text-white/85">
            Оркестр русских народных инструментов «Метелица» создан в 1989 году. Музыканты — солисты-виртуозы, большинство — лауреаты конкурсов, поэтому репертуар свободно соединяет классику, народную музыку и современные сочинения.
          </p>
          <blockquote className="mt-8 border-t border-white/25 pt-8">
            <p className="max-w-[28ch] font-display text-[clamp(26px,3vw,40px)] leading-[1.15]">«{quote.text}»</p>
            <footer className="mt-5 text-[15px] text-white/70">
              {quote.author}, {quote.role}
            </footer>
          </blockquote>
          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-2">
            <LinkArrow href="/about/history">История оркестра</LinkArrow>
            <LinkArrow href="/about/composition">Состав</LinkArrow>
            <LinkArrow href="/about/igor-tonin#interview">Читать интервью</LinkArrow>
          </div>
        </div>
      </Container>
    </section>
  );
}
