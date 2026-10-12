import { Frame, PageHero, SectionTabs } from "@/components/layout/PageFrame";
import { documents } from "@/content/documents";
import { aboutTabs, homeCrumbs } from "@/content/nav";
import { pageMeta } from "@/lib/seo";

const groups: { title: string; match: (title: string) => boolean }[] = [
  { title: "Устав", match: (title) => title.startsWith("Устав") },
  { title: "Положения и локальные акты", match: (title) => title.startsWith("Положение") },
  { title: "Противодействие коррупции", match: (title) => title.startsWith("Уведомление") },
  { title: "Отчёты о деятельности", match: (title) => title.startsWith("Отчёт") },
  { title: "Прочее", match: (title) => title === "ИНН" },
];

export const metadata = pageMeta("Документы", "Устав, положения и отчёты оркестра «Метелица».", "/about/documents");

export default function DocumentsPage() {
  return (
    <>
      <PageHero
        crumbs={[...homeCrumbs, { label: "Об оркестре", href: "/about" }, { label: "Документы" }]}
        kicker="Об оркестре"
        title="Документы"
        lede="Устав, положения, отчёты и полезные материалы для зрителей."
      />
      <SectionTabs items={aboutTabs} />
      <Frame>
        <div className="space-y-12">
          {groups.map((group) => {
            const files = documents.filter((doc) => group.match(doc.title));
            if (!files.length) return null;
            return (
              <section key={group.title}>
                <h2 className="font-display text-[28px]">{group.title}</h2>
                <ul className="mt-4">
                  {files.map((doc) => (
                    <li key={doc.href} className="border-b border-navy/10">
                      <a href={doc.href} target="_blank" rel="noreferrer" className="grid gap-2 py-4 md:grid-cols-12 md:items-center">
                        <span className="text-[11px] uppercase tracking-[0.14em] md:col-span-1">PDF</span>
                        <span className="text-[16px] md:col-span-9">{doc.title}</span>
                        <span className="text-[13px] text-slate md:col-span-2 md:text-right">{doc.size.replace("MB", "МБ").replace("KB", "КБ")}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            );
          })}
        </div>
        <p className="mt-10 text-[16px] text-slate">Файлы открываются на официальном сайте оркестра.</p>
      </Frame>
    </>
  );
}
