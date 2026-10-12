import { Frame, PageHero } from "@/components/layout/PageFrame";
import { CopyMail } from "@/components/forms/CopyMail";
import { RequestForm } from "@/components/forms/RequestForm";
import { homeCrumbs } from "@/content/nav";
import { contacts, organization, socials } from "@/content/site";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta("Контакты", "Адрес, телефоны и почта оркестра «Метелица».", "/contacts");

const phones = [
  { label: "Концертный отдел", value: "+7 (812) 539-63-58", href: "tel:+78125396358" },
  { label: "Директор", value: "+7 (812) 539-63-60", href: "tel:+78125396360" },
  { label: "Бухгалтерия", value: "+7 (812) 539-63-59", href: "tel:+78125396359" },
  { label: "Отдел кадров", value: "+7 (812) 539-63-57", href: "tel:+78125396357" },
];

export default function ContactsPage() {
  return (
    <>
      <PageHero
        crumbs={[...homeCrumbs, { label: "Контакты" }]}
        kicker="Метелица"
        title="Контакты"
        lede="Государственный оркестр русских народных инструментов «Метелица», Санкт-Петербург."
      />
      <Frame>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="space-y-8 lg:col-span-7">
            <div>
              <p className="text-[12px] uppercase tracking-[0.16em] text-slate">Адрес</p>
              <p className="mt-3 font-display text-[28px] leading-tight md:text-[32px]">
                {contacts.addressLine}, {contacts.city}, {contacts.postalCode}
              </p>
              <p className="mt-2 text-[16px] text-slate">{contacts.place}</p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {phones.map((phone) => (
                <div key={phone.href}>
                  <p className="text-[12px] uppercase tracking-[0.16em] text-slate">{phone.label}</p>
                  <p className="mt-2 text-[16px]">
                    <a href={phone.href}>{phone.value}</a>
                  </p>
                </div>
              ))}
            </div>
            <div>
              <p className="text-[12px] uppercase tracking-[0.16em] text-slate">E-mail</p>
              <p className="mt-2 flex flex-wrap items-center gap-3 font-display text-[28px] md:text-[32px]">
                <a href={`mailto:${contacts.email}`}>{contacts.email}</a>
                <CopyMail email={contacts.email} />
              </p>
            </div>
            <div>
              <p className="text-[12px] uppercase tracking-[0.16em] text-slate">Мы в сети</p>
              <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-[15px]">
                {socials.map((item) => (
                  <li key={item.href}>
                    <a href={item.href} target="_blank" rel="noreferrer" className="link-arrow">
                      {item.label} →
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[12px] uppercase tracking-[0.16em] text-slate">Реквизиты</p>
              <p className="mt-2 text-[16px]">
                ИНН {organization.inn} · ОГРН {organization.ogrn}
              </p>
            </div>
          </div>
          <aside className="bg-navy p-8 text-white lg:col-span-5">
            <p className="font-display text-[28px]">Дворец искусств ЛО</p>
            <p className="mt-2 text-[16px] text-white/80">{contacts.addressLine}</p>
            <a href={socials[3].href} target="_blank" rel="noreferrer" className="mt-6 inline-flex min-h-11 items-center bg-white px-4 text-[15px] text-navy">
              Открыть на Яндекс Картах
            </a>
          </aside>
        </div>
      </Frame>
      <Frame tone="mist">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="font-display text-[36px] leading-tight md:text-[48px]">Напишите нам</h2>
            <p className="mt-4 text-[18px] leading-snug text-slate md:text-[20px]">
              По вопросам концертов, школьного абонемента, сотрудничества и прессы.
            </p>
          </div>
          <div className="lg:col-span-7">
            <RequestForm />
          </div>
        </div>
      </Frame>
    </>
  );
}
