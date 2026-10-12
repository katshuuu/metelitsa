import type { MetadataRoute } from "next";
import { events } from "@/content/events";
import { news } from "@/content/news";
import { siteUrl } from "@/content/site";
import { videos } from "@/content/media";

const paths = [
  "",
  "/about",
  "/about/history",
  "/about/igor-tonin",
  "/about/administration",
  "/about/composition",
  "/about/documents",
  "/about/tenders",
  "/tickets",
  "/schools",
  "/programs",
  "/schools/subscription",
  "/schools/creative-school",
  "/schools/cooperation",
  "/media",
  "/media/publications",
  "/media/photo",
  "/media/video",
  "/media/discography",
  "/news",
  "/pushkin",
  "/competitions",
  "/competitions/2027",
  "/festivals",
  "/festivals/andreevskie-assamblei",
  "/contacts",
  "/privacy",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = paths.map((path) => ({
    url: `${siteUrl}${path || "/"}`,
    lastModified: now,
  }));
  const eventRoutes = events.map((event) => ({
    url: `${siteUrl}/tickets/${event.slug}`,
    lastModified: now,
  }));
  const newsRoutes = news.map((item) => ({
    url: `${siteUrl}/news/${item.slug}`,
    lastModified: now,
  }));
  const videoRoutes = videos.map((item) => ({
    url: `${siteUrl}/media/video/${item.slug}`,
    lastModified: now,
  }));
  return [...staticRoutes, ...eventRoutes, ...newsRoutes, ...videoRoutes];
}
