import { CtaBand, Frame, PageHero, SectionIntro, StatGrid } from "@/components/layout/PageFrame";
import { homeCrumbs } from "@/content/nav";
import { contacts } from "@/content/site";
import { pageMeta } from "@/lib/seo";

const steps = [
  { n: "01", title: "Оформите карту", text: "Подать заявку можно онлайн через Госуслуги, а без смартфона — в отделении Почта Банка." },
  { n: "02", title: "Выберите концерт", text: "Найдите событие оркестра в афише или в приложении «Госуслуги.Культура»." },
  { n: "03", title: "Оплатите билет картой", text: "Билеты на концерты оплачиваются картой «Пушкинская карта». Следите за остатком и сроком действия." },
];

export const metadata = pageMeta("Пушкинская карта", "Билеты на концерты «Метелицы» для молодёжи 14–22 лет.", "/pushkin");

export default function PushkinPage() {
  return (
    <>
      <PageHero
        crumbs={[...homeCrumbs, { label: "Пушкинская карта" }]}
        kicker="Метелица"
        title="Пушкинская карта"
        lede="Молодёжь 14–22 лет может оплатить билеты на концерты оркестра «Метелица» Пушкинской картой."
      />
      <Frame>
        <StatGrid
          items={[
            { value: "14–22 года", label: "Участвовать могут молодые люди этого возраста" },
            { value: "Концерты", label: "Карта принимается для оплаты билетов на концерты оркестра" },
            { value: "Госуслуги", label: "Оформление онлайн или в отделении Почта Банка" },
          ]}
        />
      </Frame>
      <Frame className="pt-0">
        <SectionIntro kicker="Как это работает" title="Три шага до концерта" />
        <ol className="mt-10 grid gap-6 lg:grid-cols-3">
          {steps.map((step) => (
            <li key={step.n}>
              <p className="font-display text-[34px]">{step.n}</p>
              <h3 className="mt-3 font-display text-[24px]">{step.title}</h3>
              <p className="mt-2 text-[16px] leading-relaxed text-slate">{step.text}</p>
            </li>
          ))}
        </ol>
      </Frame>
      <Frame tone="mist">
        <h2 className="font-display text-[26px]">Важно</h2>
        <p className="mt-3 max-w-[70ch] text-[16px] leading-relaxed">
          Размер баланса, сроки и правила программы устанавливаются организаторами и могут меняться. Неиспользованный остаток по окончании периода сгорает — проверяйте актуальные условия в приложении «Госуслуги.Культура».
        </p>
      </Frame>
      <CtaBand
        title="Выберите концерт по Пушкинской карте"
        links={[{ href: "/news", label: "Афиша" }, { href: contacts.phoneHref, label: "Вопросы по билетам" }]}
      />
    </>
  );
}
