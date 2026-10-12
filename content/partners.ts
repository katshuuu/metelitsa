export type Partner = {
  name: string;
  src: string;
  width: number;
  height: number;
  href?: string;
};

/** Логотипы и ссылки с блока «Наши партнёры» на metelitsa-spb.ru. */
export const partners: Partner[] = [
  {
    name: "Культура.РФ",
    src: "/images/partners/culture.webp",
    width: 960,
    height: 640,
    href: "https://www.culture.ru",
  },
  {
    name: "ForMusical",
    src: "/images/partners/formus.jpg",
    width: 168,
    height: 34,
    href: "https://formusical.ru",
  },
  {
    name: "Отель «Гоголь»",
    src: "/images/partners/gogol.jpg",
    width: 169,
    height: 68,
    href: "http://gogolhotel.com",
  },
  {
    name: "Телеканал Санкт-Петербург",
    src: "/images/partners/topspb.jpg",
    width: 160,
    height: 64,
  },
  {
    name: "Культурная столица",
    src: "/images/partners/kulturnaya-stolitsa.jpg",
    width: 162,
    height: 34,
  },
  {
    name: "Курьер-Медиа",
    src: "/images/partners/kuryer-media.jpg",
    width: 160,
    height: 32,
  },
  {
    name: "Петербург.ру",
    src: "/images/partners/peterburg-ru.jpg",
    width: 160,
    height: 32,
    href: "https://peterburg.ru/",
  },
  {
    name: "Петровский курьер",
    src: "/images/partners/petrovsky-kuryer.jpg",
    width: 159,
    height: 55,
  },
  {
    name: "Радио России Санкт-Петербург",
    src: "/images/partners/radio-spb.jpg",
    width: 162,
    height: 73,
  },
  {
    name: "Таксовичкоф",
    src: "/images/partners/taksovichkof.jpg",
    width: 188,
    height: 98,
  },
];
