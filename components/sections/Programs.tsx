import Link from "next/link";
import { Container } from "@/components/ui/Container";

const cards = [
  {
    href: "/pushkin",
    title: "Пушкинская карта",
    text: "Билеты на концерты для молодёжи от 14 до 22 лет.",
  },
  {
    href: "/schools/subscription",
    title: "Школьный абонемент",
    text: "Цикл концертов для школьников и классов.",
  },
  {
    href: "/schools/creative-school",
    title: "Творческая школа",
    text: "Образовательная программа оркестра для детей и подростков.",
  },
];

export function Programs() {
  return (
    <section className="bg-white pb-20 text-navy md:pb-28">
      <Container>
        <div className="grid gap-4 md:grid-cols-3">
          {cards.map((card) => (
            <Link key={card.href} href={card.href} className="group border border-navy/15 bg-mist p-6 transition-colors duration-300 hover:border-navy">
              <h3 className="font-display text-[26px] leading-tight">{card.title}</h3>
              <p className="mt-3 max-w-[28ch] text-[15px] leading-relaxed text-slate">{card.text}</p>
              <span className="link-arrow mt-6 inline-flex min-h-11 items-center text-[15px]">Подробнее →</span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
