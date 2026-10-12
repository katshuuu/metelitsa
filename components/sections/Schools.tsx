import { contacts } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { LinkArrow } from "@/components/ui/LinkArrow";
import { RequestForm } from "@/components/forms/RequestForm";

export function Schools() {
  return (
    <section id="schools" className="relative scroll-mt-28 overflow-hidden bg-mist py-20 text-navy md:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60 mix-blend-screen"
        style={{
          backgroundImage: "url(/images/ornament.png)",
          backgroundSize: "540px",
          backgroundRepeat: "repeat",
        }}
      />
      <Container className="relative grid items-start gap-12 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <SectionLabel>Школам и организациям</SectionLabel>
          <h2 className="mt-4 max-w-[14ch] font-display text-h2">Пригласите оркестр на своё мероприятие</h2>
          <p className="measure mt-6 text-[16px] leading-[1.6]">
            Школьный абонемент, выездные концерты и выступления на вашей площадке. Оставьте заявку, администрация оркестра свяжется с вами.
          </p>
          <div className="mt-8 text-[16px] leading-relaxed">
            <p className="text-[12px] uppercase tracking-[0.14em] text-slate">Администрация</p>
            <p className="mt-2">
              <a href={contacts.phoneHref}>{contacts.phoneDisplay}</a>
            </p>
            <p>
              <a href={`mailto:${contacts.email}`}>{contacts.email}</a>
            </p>
          </div>
          <div className="mt-8 flex flex-col gap-2 sm:flex-row sm:gap-8">
            <LinkArrow href="/schools/subscription">Условия абонемента</LinkArrow>
            <LinkArrow href="/schools/cooperation">Приглашаем к сотрудничеству</LinkArrow>
          </div>
        </div>
        <div className="lg:col-span-6">
          <RequestForm />
        </div>
      </Container>
    </section>
  );
}
