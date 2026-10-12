import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { LinkArrow } from "@/components/ui/LinkArrow";

export function AboutBand() {
  return (
    <section id="about" className="scroll-mt-24 bg-navy py-20 text-white md:py-28">
      <Container className="grid items-center gap-10 lg:grid-cols-12">
        <div className="relative aspect-[4/5] lg:col-span-5">
          <Image
            src="/images/hero-hall.webp"
            alt="Игорь Тонин дирижирует оркестром «Метелица»"
            fill
            sizes="(max-width: 1024px) 100vw, 480px"
            className="object-cover object-[center_20%]"
          />
        </div>
        <div className="lg:col-span-7">
          <p className="text-[12px] uppercase tracking-[0.16em] text-white/70">Об оркестре</p>
          <h2 className="mt-4 max-w-[14ch] font-display text-[32px] leading-[1.05] md:text-[56px]">
            Сохраняя национальный код — объединяем сердца
          </h2>
          <p className="mt-6 max-w-[36ch] text-[18px] leading-snug text-white/90 md:text-[20px]">
            Оркестр основан в 1989 году, с 1992 года имеет статус государственного. Художественный руководитель и главный дирижёр — заслуженный артист РФ Игорь Тонин.
          </p>
          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-2">
            <LinkArrow href="/about/history" className="text-white">
              История оркестра
            </LinkArrow>
            <LinkArrow href="/about/composition" className="text-white">
              Состав
            </LinkArrow>
            <LinkArrow href="/about/igor-tonin" className="text-white">
              Игорь Тонин
            </LinkArrow>
          </div>
        </div>
      </Container>
    </section>
  );
}
