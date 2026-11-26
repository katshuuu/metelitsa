export type NewsItem = {
  slug: string;
  title: string;
  date: string;
  kind: "news" | "press";
  body?: string[];
};

export const news: NewsItem[] = [
  {
    slug: "stv-sosnovy-bor",
    title: "Телекомпания СТВ. Сосновый Бор. 08.10.2026",
    date: "2026-10-12",
    kind: "press",
    body: [
      "TODO: текст публикации СМИ не перенесён. В ленте «СМИ о нас» материал называется «Телекомпания СТВ. Сосновый Бор. 08.10.2026» и датирован 12.10.2026.",
    ],
  },
  {
    slug: "staraya-ladoga",
    title: "Оркестр «Метелица» в Старой Ладоге",
    date: "2026-07-16",
    kind: "news",
    body: ["TODO: полный текст новости от 15.07.2026 не перенесён. Заголовок взят из ленты новостей."],
  },
  {
    slug: "lodeynoe-pole",
    title: "Концерт в День Свирской Победы. Лодейное Поле",
    date: "2026-06-21",
    kind: "news",
    body: ["TODO: полный текст новости о концерте 20.06.2026 в Лодейном Поле не перенесён."],
  },
  {
    slug: "parizh",
    title: "Оркестр «Метелица» покорил Париж",
    date: "2026-06-12",
    kind: "news",
    body: ["TODO: полный текст новости о парижских гастролях не перенесён. Фотография концерта есть в фотогалерее."],
  },
  {
    slug: "ambassadory",
    title: "Конкурс «Амбассадоры „Пушкинской карты“»",
    date: "2026-05-05",
    kind: "news",
  },
  {
    slug: "serebryanye-struny",
    title: "Солисты оркестра «Метелица» на X фестивале «Серебряные струны» в Туле",
    date: "2025-12-03",
    kind: "news",
  },
  {
    slug: "mogilev",
    title: "22 декабря — артисты оркестра «Метелица» в Могилёве",
    date: "2025-12-03",
    kind: "news",
  },
];

export function getNews(slug: string) {
  return news.find((item) => item.slug === slug);
}
