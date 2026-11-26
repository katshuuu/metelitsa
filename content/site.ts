export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://metelitsa-spb.ru";

export const organization = {
  name: "Государственный оркестр русских народных инструментов «Метелица»",
  shortName: "Метелица",
  legalName: "ГБУК ЛО «Оркестр русских народных инструментов «Метелица»",
  founded: "1989-03-14",
  foundedYear: 1989,
  statusYear: 1992,
  founder: "Комитет по культуре и туризму Ленинградской области",
  copyrightFrom: 2009,
  inn: "7815015298",
  ogrn: "1037843086401",
};

export const contacts = {
  addressLine: "пл. Стачек, 4",
  city: "Санкт-Петербург",
  postalCode: "198095",
  place: "Дворец искусств Ленинградской области, 9 подъезд, 4 этаж, кабинеты 40, 41",
  email: "metelitsa.spb@ya.ru",
  phoneDisplay: "+7 (812) 539-63-58",
  phoneHref: "tel:+78125396358",
  phones: [
    { role: "Директоры", display: "+7 (812) 539-63-60", href: "tel:+78125396360" },
    { role: "Бухгалтерия", display: "+7 (812) 539-63-59", href: "tel:+78125396359" },
    { role: "Концертный отдел", display: "+7 (812) 539-63-58", href: "tel:+78125396358" },
    { role: "Отдел кадров", display: "+7 (812) 539-63-57", href: "tel:+78125396357" },
  ],
};

export const socials = [
  { label: "ВКонтакте", href: "https://vk.com/metelitsa_orkestr89" },
  { label: "RuTube", href: "https://rutube.ru/channel/25585012" },
  { label: "YouTube", href: "https://www.youtube.com/channel/UCvsRr2N8rWeD5n8Q3kc-nBQ" },
  { label: "Яндекс Карты", href: "https://yandex.ru/profile/1092302162" },
] as const;

export type NavChild = { label: string; href: string };

export type NavItem = {
  label: string;
  href: string;
  sectionId?: string;
  children?: NavChild[];
};

/** Пункты шапки из кадров 1440: плоское меню и кнопка «Афиша». */
export const headerNav: NavItem[] = [
  { label: "Об оркестре", href: "/about" },
  { label: "Новости", href: "/news" },
  { label: "Медиа", href: "/media" },
  { label: "Программы", href: "/programs" },
  { label: "Пушкинская карта", href: "/pushkin" },
  { label: "Детские конкурсы", href: "/competitions" },
  { label: "Фестивали", href: "/festivals" },
  { label: "Контакты", href: "/contacts" },
];

export const footerNav = [
  { label: "Об оркестре", href: "/about" },
  { label: "История", href: "/about/history" },
  { label: "Состав", href: "/about/composition" },
  { label: "Афиша", href: "/tickets" },
  { label: "Школам", href: "/schools" },
  { label: "Медиа", href: "/media" },
  { label: "Новости", href: "/news" },
  { label: "Фестивали", href: "/festivals" },
  { label: "Контакты", href: "/contacts" },
  { label: "Политика конфиденциальности", href: "/privacy" },
];

/** Featured video from the source media section. Embed loads only after a click. */
export const featuredVideo = {
  title: "В чешских лугах и лесах",
  description: "Анонс концерта к 180-летию со дня рождения Антонина Дворжака.",
  youtubeId: "wECiMbWhKKw",
  pageHref: "/media/video",
};
