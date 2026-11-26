import type { Metadata } from "next";
import localFont from "next/font/local";
import { Prata } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { contacts, organization, siteUrl, socials } from "@/content/site";
import "./globals.css";

const prata = Prata({
  weight: "400",
  subsets: ["latin", "cyrillic"],
  variable: "--font-prata",
  display: "swap",
});

const namu = localFont({
  src: "../public/fonts/NAMU-1850.otf",
  weight: "400",
  style: "normal",
  variable: "--font-namu",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Государственный оркестр «Метелица»",
    template: "%s — Метелица",
  },
  description:
    "Государственный оркестр русских народных инструментов «Метелица». Концерты, абонементы для школ, Санкт-Петербург и Ленинградская область.",
  openGraph: {
    locale: "ru_RU",
    siteName: "Оркестр «Метелица»",
    images: [{ url: "/images/gallery-hall.webp", width: 1000, height: 666 }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["Organization", "PerformingGroup"],
  name: organization.name,
  legalName: organization.legalName,
  url: siteUrl,
  foundingDate: organization.founded,
  email: contacts.email,
  telephone: "+78125396358",
  address: {
    "@type": "PostalAddress",
    streetAddress: contacts.addressLine,
    addressLocality: contacts.city,
    postalCode: contacts.postalCode,
    addressCountry: "RU",
  },
  sameAs: socials.map((item) => item.href),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={`${prata.variable} ${namu.variable}`}>
      <body className="bg-white font-sans text-[16px] leading-[1.6] text-navy antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <a className="skip-link" href="#content">
          Перейти к содержимому
        </a>
        <Header />
        <main id="content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
