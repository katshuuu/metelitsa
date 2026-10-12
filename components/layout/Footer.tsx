import Link from "next/link";
import { contacts, footerNav, organization, socials } from "@/content/site";
import { Container } from "@/components/ui/Container";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer id="contacts" className="scroll-mt-28 bg-navy text-white">
      <Container className="grid gap-12 py-16 md:grid-cols-12 md:py-20">
        <div className="md:col-span-5">
          <p className="font-display text-[40px] leading-none">Метелица</p>
          <p className="mt-5 max-w-[36ch] text-[15px] leading-relaxed text-white/80">
            Государственный оркестр русских народных инструментов. Санкт-Петербург и Ленинградская область.
          </p>
        </div>
        <div className="md:col-span-3">
          <p className="text-[12px] uppercase tracking-[0.16em] text-white/60">Контакты</p>
          <address className="mt-4 space-y-2 text-[15px] not-italic leading-relaxed">
            <p>
              {contacts.addressLine}, {contacts.city},
              <br />
              {contacts.postalCode}
            </p>
            <p>
              <a href={contacts.phoneHref}>{contacts.phoneDisplay}</a>
            </p>
            <p>
              <a href={`mailto:${contacts.email}`}>{contacts.email}</a>
            </p>
          </address>
        </div>
        <div className="md:col-span-2">
          <p className="text-[12px] uppercase tracking-[0.16em] text-white/60">Мы в сети</p>
          <ul className="mt-4 space-y-2 text-[15px]">
            {socials.map((item) => (
              <li key={item.href}>
                <a href={item.href} target="_blank" rel="noreferrer">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-2">
          <p className="text-[12px] uppercase tracking-[0.16em] text-white/60">Разделы</p>
          <ul className="mt-4 space-y-2 text-[15px]">
            {footerNav.slice(0, 6).map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
      <Container className="border-t border-white/20 py-6">
        <div className="flex flex-col gap-3 text-[13px] text-white/70 md:flex-row md:items-center md:justify-between">
          <p>Учредитель: {organization.founder}</p>
          <p>
            © {organization.copyrightFrom}–{year} Государственный оркестр «Метелица»
          </p>
        </div>
      </Container>
    </footer>
  );
}
