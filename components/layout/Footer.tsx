import Link from "next/link";
import { contacts, organization, socials } from "@/content/site";
import { Container } from "@/components/ui/Container";

const sections = [
  { label: "Об оркестре", href: "/about" },
  { label: "Новости", href: "/news" },
  { label: "Медиа", href: "/media" },
  { label: "Программы", href: "/programs" },
  { label: "Пушкинская карта", href: "/pushkin" },
  { label: "Детские конкурсы", href: "/competitions" },
  { label: "Фестивали", href: "/festivals" },
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer id="contacts" className="scroll-mt-24 bg-navy text-white">
      <Container className="grid gap-12 py-16 md:grid-cols-12 md:py-20">
        <div className="md:col-span-4">
          <p className="max-w-[28ch] text-[15px] leading-relaxed text-white/80">
            Государственный оркестр русских народных инструментов. Санкт-Петербург и Ленинградская область.
          </p>
        </div>
        <div className="md:col-span-3">
          <p className="text-[12px] uppercase tracking-[0.16em] text-white/60">Разделы</p>
          <ul className="mt-4 space-y-2 text-[15px]">
            {sections.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-3">
          <p className="text-[12px] uppercase tracking-[0.16em] text-white/60">Контакты</p>
          <address className="mt-4 space-y-2 text-[15px] not-italic leading-relaxed">
            <p>
              {contacts.addressLine}, {contacts.city}, {contacts.postalCode}
            </p>
            <p>
              <a href={contacts.phoneHref}>{contacts.phoneDisplay}</a>
            </p>
            <p>
              <a href={`mailto:${contacts.email}`}>{contacts.email}</a>
            </p>
            <p>
              <Link href="/contacts">Все контакты →</Link>
            </p>
          </address>
        </div>
        <div className="md:col-span-2">
          <p className="text-[12px] uppercase tracking-[0.16em] text-white/60">Мы в сети</p>
          <ul className="mt-4 space-y-2 text-[15px]">
            {["ВКонтакте", "RuTube", "Яндекс Карты", "YouTube"].map((label) => {
              const item = socials.find((entry) => entry.label === label);
              if (!item) return null;
              return (
                <li key={item.href}>
                  <a href={item.href} target="_blank" rel="noreferrer">
                    {item.label === "Яндекс Карты" ? "Яндекс" : item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
      <Container className="flex flex-wrap gap-x-8 gap-y-2 pb-8 text-[15px] text-white/85">
        <a href="https://www.culture.ru" target="_blank" rel="noreferrer">
          culture.ru
        </a>
        <a href="https://formusical.ru" target="_blank" rel="noreferrer">
          formusical.ru
        </a>
        <a href="http://gogolhotel.com" target="_blank" rel="noreferrer">
          gogolhotel.com
        </a>
        <a href="https://peterburg.ru/" target="_blank" rel="noreferrer">
          peterburg.ru
        </a>
        <a href="https://lenobl.ru" target="_blank" rel="noreferrer">
          Правительство Ленинградской области
        </a>
        <a href="https://travel.lenobl.ru/" target="_blank" rel="noreferrer">
          Комитет по культуре и туризму ЛО
        </a>
      </Container>
      <Container className="border-t border-white/20 py-6">
        <div className="flex flex-col gap-3 text-[13.5px] text-white/65 md:flex-row md:items-center md:justify-between">
          <p>Учредитель: {organization.founder}</p>
          <p>
            © {organization.copyrightFrom}–{year} Государственный оркестр «Метелица»
          </p>
        </div>
      </Container>
    </footer>
  );
}
