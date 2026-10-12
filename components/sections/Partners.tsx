import { Container } from "@/components/ui/Container";

const partners = [
  "Правительство Ленинградской области",
  "Комитет по культуре и туризму Ленинградской области",
];

export function Partners() {
  return (
    <section className="bg-mist py-16 text-navy md:py-20" aria-labelledby="partners-title">
      <Container>
        <h2 id="partners-title" className="text-center font-display text-h2">
          Наши партнеры
        </h2>
      </Container>
      <div className="mt-10">
        {partners.map((name, index) => (
          <div key={name} className={index % 2 === 0 ? "bg-white" : "bg-mist"}>
            <Container className="py-8 text-center text-[18px]">{name}</Container>
          </div>
        ))}
        <div className="bg-white">
          <Container className="py-6 text-center text-[14px] text-slate">
            TODO: графические логотипы партнёров в макете не переданы — полосы оставлены под них.
          </Container>
        </div>
      </div>
    </section>
  );
}
