import { Container } from "@/components/ui/Container";
import { LinkCards, SectionIntro } from "@/components/layout/PageFrame";

const cards = [
  {
    n: "01",
    href: "/schools/subscription",
    title: "Школьный абонемент",
    text: "Интерактивные концерты-путешествия «Волшебный мир народной музыки».",
    action: "Подробнее",
  },
  {
    n: "02",
    href: "/schools/creative-school",
    title: "Творческая школа",
    text: "Мастер-классы Игоря Тонина и солистов оркестра для детей и юношества.",
    action: "Подробнее",
  },
  {
    n: "03",
    href: "/schools/cooperation",
    title: "Сотрудничество",
    text: "Концерты к праздникам, на городских площадках и в благотворительных проектах.",
    action: "Подробнее",
  },
];

export function Programs() {
  return (
    <section id="schools" className="scroll-mt-24 bg-mist py-16 text-navy md:py-24">
      <Container>
        <SectionIntro
          kicker="Программы"
          title="Оркестр — не только на сцене"
          text="Просветительские проекты, школы и партнёрские программы для детей, школ и организаций."
        />
        <div className="mt-12">
          <LinkCards items={cards} />
        </div>
      </Container>
    </section>
  );
}
