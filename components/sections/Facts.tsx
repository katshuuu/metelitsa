import { Container } from "@/components/ui/Container";
import { yearsOnStage, yearsWord } from "@/lib/dates";

export function Facts() {
  const years = yearsOnStage();
  const items = [
    {
      title: (
        <>
          {years} {yearsWord(years)}
        </>
      ),
      text: "С 1989 года — на сцене Ленинградской области, Санкт-Петербурга и России",
    },
    {
      title: (
        <>
          <span className="2xl:block">Оркестр </span>
          <span className="2xl:block">солистов</span>
        </>
      ),
      text: "Музыканты — лауреаты международных и всероссийских конкурсов",
    },
    {
      title: (
        <>
          <span className="2xl:block">Пушкинская </span>
          <span className="2xl:block">карта</span>
        </>
      ),
      text: "Принимается при покупке билетов на концерты оркестра",
    },
  ];

  return (
    <section className="bg-white py-16 text-navy md:py-20" aria-label="Факты об оркестре">
      <Container>
        <div className="grid gap-8 2xl:grid-cols-3 2xl:gap-10">
          {items.map((item) => (
            <article key={item.text} className="min-w-0 border-t border-navy/20 pt-6">
              <h2 className="font-display text-[30px] leading-none 2xl:text-[46px]">{item.title}</h2>
              <p className="mt-3 max-w-[28ch] text-[16px] leading-snug text-slate">{item.text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
