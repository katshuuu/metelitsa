import Link from "next/link";
import { Frame, PageHero, SectionTabs } from "@/components/layout/PageFrame";
import { aboutTabs, homeCrumbs } from "@/content/nav";
import { administration } from "@/content/people";
import { contacts } from "@/content/site";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta("Администрация", "Руководство и сотрудники оркестра «Метелица».", "/about/administration");

export default function AdministrationPage() {
  return (
    <>
      <PageHero
        crumbs={[...homeCrumbs, { label: "Об оркестре", href: "/about" }, { label: "Администрация" }]}
        kicker="Об оркестре"
        title="Администрация"
        lede="Руководство и сотрудники оркестра. Личные контакты не публикуются — пишите на общий адрес или звоните в концертный отдел."
      />
      <SectionTabs items={aboutTabs} />
      <Frame>
        <div className="grid gap-12 lg:grid-cols-12">
          <ol className="lg:col-span-8">
            {administration.map(([name, role], index) => (
              <li key={name} className="grid gap-2 border-b border-navy/10 py-5 md:grid-cols-12">
                <span className="text-[12px] text-slate md:col-span-1">{String(index + 1).padStart(2, "0")}</span>
                <span className="font-display text-[22px] leading-tight md:col-span-5">{name}</span>
                <span className="text-[16px] text-slate md:col-span-6">{role}</span>
              </li>
            ))}
          </ol>
          <aside className="h-fit border border-navy/10 bg-mist p-6 lg:col-span-4">
            <p className="text-[12px] uppercase tracking-[0.16em] text-slate">Общие контакты</p>
            <p className="mt-4 font-display text-[24px]">
              <a href={contacts.phoneHref}>{contacts.phoneDisplay}</a>
            </p>
            <p className="mt-2 text-[16px]">
              <a href={`mailto:${contacts.email}`}>{contacts.email}</a>
            </p>
            <Link href="/contacts" className="link-arrow mt-6 inline-flex min-h-11 items-center text-[15px]">
              Все контакты <span aria-hidden>→</span>
            </Link>
          </aside>
        </div>
      </Frame>
    </>
  );
}
