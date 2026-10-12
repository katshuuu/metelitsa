import { CtaBand, Frame, PageHero, SectionTabs } from "@/components/layout/PageFrame";
import { aboutTabs, homeCrumbs } from "@/content/nav";
import { pageMeta } from "@/lib/seo";

const facts = [
  { label: "Родился", value: "6 ноября 1958 года, Москва" },
  { label: "Должности", value: "Художественный руководитель, главный дирижёр и директор оркестра «Метелица»" },
  { label: "Звание", value: "Заслуженный артист Российской Федерации (1995)" },
  { label: "Академия", value: "Действительный член Петровской академии" },
  { label: "Награда", value: "Почётный знак Ленинградской области «За заслуги перед Ленинградской областью»" },
];

const path = [
  { when: "8 лет", title: "Начало пути", text: "Начал играть в оркестре русских народных инструментов." },
  { when: "1979", title: "Тверское музыкальное училище", text: "Окончил училище, после службы в армии начал работать в Доме пионеров Зеленограда: сначала вёл кружок балалайки и домры, а через три месяца создал оркестр." },
  { when: "1983–1988", title: "Консерватория", text: "Учился в Ленинградской консерватории имени Римского-Корсакова сразу по двум специальностям: концертный исполнитель (балалайка, класс А. Б. Шалова) и дирижёр (класс А. Р. Паулавичюса). Руководил несколькими оркестрами города." },
  { when: "После 1988", title: "Преподавание", text: "Преподавал инструментовку и дирижирование в музыкальном колледже имени Римского-Корсакова." },
  { when: "1988–1989", title: "Рождение «Метелицы»", text: "Вместе с выпускниками и преподавателями консерватории создал профессиональный оркестр русских народных инструментов — будущую «Метелицу»." },
];

export const metadata = pageMeta("Игорь Тонин", "Художественный руководитель оркестра «Метелица».", "/about/igor-tonin");

export default function ToninPage() {
  return (
    <>
      <PageHero
        crumbs={[...homeCrumbs, { label: "Об оркестре", href: "/about" }, { label: "Игорь Тонин" }]}
        kicker="Об оркестре"
        title="Игорь Тонин"
        lede="Дирижёр, балалаечник и основатель оркестра «Метелица», заслуженный артист РФ."
      />
      <SectionTabs items={aboutTabs} />
      <Frame>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-[12px] uppercase tracking-[0.16em] text-slate">Художественный руководитель</p>
            <h2 className="mt-4 font-display text-[40px] leading-[1.05] md:text-[54px]">Игорь Михайлович Тонин</h2>
          </div>
          <dl className="space-y-5 lg:col-span-7">
            {facts.map((fact) => (
              <div key={fact.label} className="grid gap-1 border-t border-navy/10 pt-4 md:grid-cols-12">
                <dt className="text-[12px] uppercase tracking-[0.14em] text-slate md:col-span-3">{fact.label}</dt>
                <dd className="text-[18px] md:col-span-9">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Frame>
      <Frame className="pt-0">
        <p className="text-[12px] uppercase tracking-[0.16em] text-slate">Путь</p>
        <h2 className="mt-4 max-w-[12ch] font-display text-[32px] leading-[1.05] md:text-[56px]">От оркестра в Доме пионеров до «Метелицы»</h2>
        <ol className="mt-10 space-y-8">
          {path.map((step) => (
            <li key={step.when} className="grid gap-2 border-t border-navy/10 pt-6 md:grid-cols-12">
              <p className="font-display text-[32px] md:col-span-3">{step.when}</p>
              <div className="md:col-span-9">
                <h3 className="font-display text-[24px]">{step.title}</h3>
                <p className="mt-2 max-w-[62ch] text-[16px] leading-relaxed text-slate">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </Frame>
      <CtaBand title="Знакомьтесь с оркестром" links={[{ href: "/about/composition", label: "Состав" }, { href: "/about/history", label: "История" }]} />
    </>
  );
}
