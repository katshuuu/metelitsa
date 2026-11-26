import Link from "next/link";
import { Frame, PageHero, SectionTabs, StatGrid } from "@/components/layout/PageFrame";
import { homeCrumbs, programTabs } from "@/content/nav";
import { pageMeta } from "@/lib/seo";

const lessons = [
  { n: "01", kicker: "Урок музыки", title: "Знакомство с русским народным оркестром" },
  { n: "02", kicker: "Музыкальная география", title: "По странам и континентам" },
  { n: "03", kicker: "Волшебная литература", title: "Сказочные герои в музыке народных инструментов" },
  { n: "04", kicker: "Музыкальная генеалогия", title: "Народная песня и её близкие родственники" },
  { n: "05", kicker: "Урок фантазии", title: "О чём рассказывает музыка" },
  { n: "06", kicker: "Музыкальная перемена", title: "Музыкальный калейдоскоп" },
  { n: "07", kicker: "Кино", title: "Музыка с экрана" },
  { n: "08", kicker: "Военно-патриотическая программа", title: "Война. Победа. Память" },
  { n: "09", kicker: "Звучащая хореография", title: "Музыкальные образы танца" },
  { n: "10", kicker: "Праздничный концерт", title: "Программа ко Дню матери" },
];

export const metadata = pageMeta("Школьный абонемент", "Цикл «Волшебный мир народной музыки».", "/schools/subscription");

export default function SubscriptionPage() {
  return (
    <>
      <PageHero
        crumbs={[...homeCrumbs, { label: "Программы", href: "/programs" }, { label: "Школьный абонемент" }]}
        kicker="Программы"
        title="Школьный абонемент"
        lede="Арт-образовательный цикл «Волшебный мир народной музыки»: концерты-путешествия с интерактивом о национальной культуре и народных инструментах."
      />
      <SectionTabs items={programTabs} />
      <Frame>
        <StatGrid
          items={[
            { value: "40–45 минут", label: "Одна тема — один школьный урок" },
            { value: "5 инструментов", label: "Баян, балалайка, гусли, домра и гитара — история и особенности звучания" },
            { value: "Игра и рассказ", label: "Слово ведущего чередуется с игровыми эпизодами" },
          ]}
        />
      </Frame>
      <Frame className="pt-0">
        <p className="text-[12px] uppercase tracking-[0.16em] text-slate">Программа</p>
        <h2 className="mt-4 max-w-[12ch] font-display text-[32px] leading-[1.05] md:text-[56px]">«Волшебный мир народной музыки»</h2>
        <p className="mt-4 text-[18px] text-slate md:text-[20px]">Десять тем — десять путешествий по миру народной музыки.</p>
        <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {lessons.map((lesson) => (
            <li key={lesson.n} className="border border-navy/10 p-5">
              <p className="text-[12px] uppercase tracking-[0.12em] text-slate">{lesson.kicker}</p>
              <p className="mt-3 font-display text-[28px]">{lesson.n}</p>
              <p className="mt-2 text-[15px]">{lesson.title}</p>
            </li>
          ))}
        </ol>
      </Frame>
      <Frame tone="mist">
        <p className="text-[12px] uppercase tracking-[0.16em] text-slate">Для кого</p>
        <h2 className="mt-4 max-w-[14ch] font-display text-[32px] leading-[1.05] md:text-[46px]">Оркестр приезжает в школы</h2>
        <div className="mt-6 max-w-[68ch] space-y-4 text-[16px] leading-relaxed">
          <p>Программа рассчитана на детей и подростков: оркестр выступает в школах Ленинградской области, а педагоги могут заказать тему, подходящую именно их ученикам.</p>
          <p>Автор и ведущий — Константин Никитин, художественный руководитель — Игорь Тонин. Стоимость и порядок заявок не публикуются: их уточняют у администрации оркестра.</p>
        </div>
        <Link href="/contacts" className="mt-8 inline-flex min-h-11 items-center bg-navy px-5 text-[15px] text-white">
          Оставить заявку
        </Link>
      </Frame>
    </>
  );
}
