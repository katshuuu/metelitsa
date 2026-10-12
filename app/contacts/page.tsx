import { Article } from "@/components/layout/Article";
import { RequestForm } from "@/components/forms/RequestForm";
import { contacts, organization, socials } from "@/content/site";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta("Контакты", "Адрес, телефоны и почта оркестра «Метелица».", "/contacts");

export default function ContactsPage() {
  return (
    <Article eyebrow="Контакты" title="Контактная информация" lede={contacts.place}>
      <p>
        {contacts.addressLine}. {contacts.city}, {contacts.postalCode}
      </p>
      <p>
        <a href={contacts.phoneHref}>{contacts.phoneDisplay}</a>
        <br />
        <a href={`mailto:${contacts.email}`}>{contacts.email}</a>
      </p>
      <p>
        ИНН {organization.inn}
        <br />
        ОГРН {organization.ogrn}
      </p>
      <h2>Телефоны</h2>
      <ul>
        {contacts.phones.map((phone) => (
          <li key={phone.href}>
            {phone.role}: <a href={phone.href}>{phone.display}</a>
          </li>
        ))}
      </ul>
      <h2>Социальные сети</h2>
      <ul>
        {socials.map((item) => (
          <li key={item.href}>
            <a href={item.href} target="_blank" rel="noreferrer">
              {item.label}
            </a>
          </li>
        ))}
      </ul>
      <p>
        <a href={socials[3].href} target="_blank" rel="noreferrer">
          Открыть адрес на Яндекс Картах
        </a>
      </p>
      <h2>Написать в концертный отдел</h2>
      <div className="max-w-[560px]">
        <RequestForm />
      </div>
    </Article>
  );
}
