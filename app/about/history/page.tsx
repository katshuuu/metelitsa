import { CtaBand, Frame, PageHero, SectionTabs } from "@/components/layout/PageFrame";
import { aboutTabs, homeCrumbs } from "@/content/nav";
import { pageMeta } from "@/lib/seo";

const steps = [
  { when: "14 марта", year: "1989", title: "Первое выступление", text: "Оркестр впервые выходит к публике на фестивале «Тихвинский Лель» в Тихвине — на родине Римского-Корсакова." },
  { when: "1990", year: "", title: "Государственная капелла", text: "Через год после дебюта оркестр выступает в Государственной академической капелле Санкт-Петербурга и заявляет об оригинальной исполнительской манере." },
  { when: "1990-е", year: "", title: "Годы становления", text: "В непростые экономические годы оркестр развивается при поддержке областного управления культуры, работает как концертная организация Комитета по культуре Ленинградской области и много выступает в городах и посёлках региона." },
  { when: "Июль", year: "1992", title: "Статус государственного", text: "После выступления на Всероссийском семинаре руководителей учреждений культуры оркестр получает статус «Государственный» по личному распоряжению министра культуры." },
  { when: "С начала 1990-х", year: "", title: "Гастроли за рубежом", text: "Германия, Япония, Бельгия, Норвегия, Швейцария и два тура по США с выступлениями в 11 штатах." },
  { when: "1996", year: "", title: "Москва", text: "Приглашение на Первый Всероссийский семинар композиторов и дирижёров оркестров русских народных инструментов — единственный региональный коллектив среди более чем тридцати оркестров." },
  { when: "Май", year: "1997", title: "Золото «Балтики-Гармоники»", text: "Золотая медаль и звание лауреата международного конкурса «Балтика-Гармоника»." },
  { when: "1990-е — 2000-е", year: "", title: "Страны Балтии и Франция", text: "Гастроли в Латвии, Литве, Эстонии и Франции по областной программе работы с соотечественниками за рубежом." },
  { when: "Сегодня", year: "", title: "Более 100 концертов в год", text: "Оркестр работает под руководством Игоря Тонина и выступает на лучших площадках Санкт-Петербурга и России." },
];

export const metadata = pageMeta("История оркестра", "История оркестра «Метелица» с 1989 года.", "/about/history");

export default function HistoryPage() {
  return (
    <>
      <PageHero
        crumbs={[...homeCrumbs, { label: "Об оркестре", href: "/about" }, { label: "История" }]}
        kicker="Об оркестре"
        title="История оркестра"
        lede="Тридцать семь лет на сцене: от первого концерта в Тихвине до мировых гастролей."
      />
      <SectionTabs items={aboutTabs} />
      <Frame>
        <ol className="space-y-8">
          {steps.map((step) => (
            <li key={step.title} className="grid gap-3 border-t border-navy/10 pt-8 md:grid-cols-12">
              <div className="md:col-span-3">
                <p className="font-display text-[32px] leading-none md:text-[40px]">{step.when}</p>
                {step.year ? <p className="mt-2 text-[12px] uppercase tracking-[0.14em] text-slate">{step.year}</p> : null}
              </div>
              <div className="md:col-span-9">
                <h2 className="font-display text-[24px]">{step.title}</h2>
                <p className="mt-2 max-w-[62ch] text-[16px] leading-relaxed text-slate">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </Frame>
      <CtaBand title="Продолжение истории — в афише" links={[{ href: "/news", label: "Анонсы" }, { href: "/media/publications", label: "СМИ о нас" }]} />
    </>
  );
}
