import { Frame, PageHero, SectionIntro, SectionTabs, StatGrid } from "@/components/layout/PageFrame";
import { RequestForm } from "@/components/forms/RequestForm";
import { homeCrumbs, programTabs } from "@/content/nav";
import { pageMeta } from "@/lib/seo";

const formats = [
  { n: "01", title: "Концертные программы", text: "Более десяти программ: оркестровая музыка, русская и мировая классика, фольклор разных стран, детские и представительские программы." },
  { n: "02", title: "Школьный абонемент", text: "Цикл концертов для учащихся школ всех возрастов." },
  { n: "03", title: "Праздники и даты", text: "Государственные праздники, юбилеи городов и районов, День матери, День пожилого человека." },
  { n: "04", title: "Культурные акции", text: "Участие в «Ночи музеев» и «Ночи искусств»." },
  { n: "05", title: "Благотворительные концерты", text: "Для детей-сирот, людей с инвалидностью, ветеранов и блокадников." },
];

const offer = [
  "Солисты — лауреаты и дипломанты российских и международных конкурсов",
  "Аудитория от 3 лет до 100+",
  "Собственная звуковая аппаратура, оборудование для записи и обработки звука",
  "Собственный транспорт для людей, инструментов и костюмов",
  "Ведущий программ — Константин Никитин",
];

const rider = [
  "Сцена не менее 8 × 5 м со сценическим светом",
  "25 стульев",
  "Не менее двух гримёрных на 30 музыкантов с вешалками и стульями",
  "Температура воздуха не ниже +15 °C",
  "Предпочтительны закрытые помещения с хорошей технической оснащённостью — оркестр играет на коллекционных инструментах музейного уровня",
];

export const metadata = pageMeta("Сотрудничество", "Приглашаем концертные организации и площадки.", "/schools/cooperation");

export default function CooperationPage() {
  return (
    <>
      <PageHero
        crumbs={[...homeCrumbs, { label: "Программы", href: "/programs" }, { label: "Сотрудничество" }]}
        kicker="Программы"
        title="Приглашаем к сотрудничеству"
        lede="Приглашаем концертные организации и площадки: у оркестра более десяти программ для праздников, фестивалей и благотворительных проектов."
      />
      <SectionTabs items={programTabs} />
      <Frame>
        <SectionIntro kicker="Форматы" title="Как мы можем работать вместе" />
        <ol className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {formats.map((item) => (
            <li key={item.n} className="border border-navy/10 bg-mist p-6">
              <p className="text-[12px] text-slate">{item.n}</p>
              <h3 className="mt-4 font-display text-[24px]">{item.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-slate">{item.text}</p>
            </li>
          ))}
        </ol>
      </Frame>
      <Frame className="pt-0">
        <StatGrid
          items={[
            { value: "35 мин – 1 ч 20 мин", label: "Программа без антракта" },
            { value: "до 2 часов", label: "Программа с антрактом" },
            { value: "Для всех", label: "Выступления для туристических и зарубежных делегаций" },
          ]}
        />
      </Frame>
      <Frame tone="mist">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-[12px] uppercase tracking-[0.16em] text-slate">Что предлагаем</p>
            <h2 className="mt-4 font-display text-[32px] leading-tight md:text-[40px]">«Метелица» — оркестр солистов</h2>
            <ul className="mt-6 space-y-3 text-[16px]">
              {offer.map((item) => (
                <li key={item} className="border-t border-navy/10 pt-3">{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[12px] uppercase tracking-[0.16em] text-slate">Технический райдер</p>
            <h2 className="mt-4 font-display text-[32px] leading-tight md:text-[40px]">Что нужно от площадки</h2>
            <ul className="mt-6 space-y-3 text-[16px]">
              {rider.map((item) => (
                <li key={item} className="border-t border-navy/10 pt-3">{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </Frame>
      <Frame>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="font-display text-[36px] leading-tight md:text-[48px]">Обсудим ваше мероприятие</h2>
            <p className="mt-4 text-[18px] leading-snug text-slate md:text-[20px]">Расскажите о площадке, дате и формате — подберём программу.</p>
          </div>
          <div className="lg:col-span-7">
            <RequestForm />
          </div>
        </div>
      </Frame>
    </>
  );
}
