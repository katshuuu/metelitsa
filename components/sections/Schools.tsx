import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { LinkArrow } from "@/components/ui/LinkArrow";

export function Schools() {
  return (
    <section className="bg-navy py-16 text-white md:py-20">
      <Container className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <h2 className="max-w-[14ch] font-display text-[32px] leading-[1.05] md:text-[46px]">
          Пригласите оркестр на своё мероприятие
        </h2>
        <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
          <Button href="/contacts" tone="onDark">
            Написать нам
          </Button>
          <LinkArrow href="/schools/cooperation" className="text-white">
            Условия сотрудничества
          </LinkArrow>
        </div>
      </Container>
    </section>
  );
}
