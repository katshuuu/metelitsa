export type Announcement = {
  day: string;
  date: string;
  kind: string;
  title: string;
  place: string;
  href: string;
  filter: "concert" | "festival" | "tour";
};

/** Строки афиши из кадра «Анонсы» / главной. */
export const announcements: Announcement[] = [
  {
    day: "11",
    date: "октября 2026",
    kind: "КОНЦЕРТ",
    title: "«В ритме времени»",
    place: "Яани Кирик",
    href: "/tickets/v-ritme-vremeni",
    filter: "concert",
  },
  {
    day: "—",
    date: "Дата уточняется",
    kind: "ГАСТРОЛИ",
    title: "Гастроли по Южному федеральному округу",
    place: "Южный федеральный округ",
    href: "/tickets/gastroli-yug",
    filter: "tour",
  },
  {
    day: "8",
    date: "июня",
    kind: "КОНЦЕРТ",
    title: "Концерт ко Дню семьи, любви и верности",
    place: "Ленинградская область",
    href: "/tickets/den-semi",
    filter: "concert",
  },
  {
    day: "12",
    date: "апреля 2026",
    kind: "ФЕСТИВАЛЬ",
    title: "Закрытие VI Открытого фестиваля исполнителей на гуслях «Гуслей серебристый перезвон»",
    place: "Государственная академическая капелла Санкт-Петербурга",
    href: "/tickets/gusli-perezvon",
    filter: "festival",
  },
  {
    day: "28",
    date: "декабря · 19:30",
    kind: "КОНЦЕРТ",
    title: "Новогодний «Киносерпантин» с оркестром «Метелица»",
    place: "Академическая капелла Санкт-Петербурга",
    href: "/tickets/kinoserpantin",
    filter: "concert",
  },
  {
    day: "6",
    date: "ноября 2025 · 18:30",
    kind: "КОНЦЕРТ",
    title: "Концерт в городе Сосновый Бор",
    place: "Концертный зал «Балтика»",
    href: "/tickets/sosnovy-bor",
    filter: "concert",
  },
  {
    day: "2",
    date: "ноября 2025",
    kind: "ФОРУМ",
    title: "III Приваловский форум в Нижнем Тагиле",
    place: "Нижнетагильская филармония",
    href: "/festivals",
    filter: "festival",
  },
  {
    day: "30",
    date: "октября 2025",
    kind: "КОНЦЕРТ",
    title: "Концерт «Истории любви»",
    place: "Государственная капелла Санкт-Петербурга",
    href: "/news",
    filter: "concert",
  },
  {
    day: "—",
    date: "Санкт-Петербург",
    kind: "ФЕСТИВАЛЬ",
    title: "Концерт-открытие II Всероссийского конкурса-фестиваля «Балалайка во фраке»",
    place: "Санкт-Петербург",
    href: "/competitions",
    filter: "festival",
  },
];

export const press = [
  { date: "12.10.2026", source: "Телекомпания СТВ", title: "Сюжет, Сосновый Бор" },
  { date: "16.07.2026", source: "Syas News", title: "Музею-заповеднику «Старая Ладога» исполнилось 55 лет" },
  { date: "24.06.2026", source: "Нашрайон", title: "Публикация от 10 июня 2026" },
  { date: "24.06.2026", source: "ivbg.ru", title: "Сергей Перминов о праздновании Дня русского языка в Париже" },
  { date: "19.06.2026", source: "ЛенТВ 24", title: "Сюжет от 11 июня 2026" },
  { date: "16.06.2026", source: "Онлайн47.ру", title: "Публикация от 10 июня 2026" },
  { date: "13.06.2026", source: "Лента новостей Санкт-Петербурга", title: "Публикация от 9 июня 2026" },
  { date: "11.06.2026", source: "mk.ru", title: "Ленинградский оркестр выступил в штаб-квартире ЮНЕСКО в Париже" },
  { date: "10.06.2026", source: "Русский мир", title: "Публикация от 9 июня 2026" },
];
