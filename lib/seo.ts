import type { Metadata } from "next";
import { siteUrl } from "@/content/site";

export function pageMeta(title: string, description: string, path: string): Metadata {
  const url = `${siteUrl}${path}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url,
      locale: "ru_RU",
      type: "website",
      siteName: "Оркестр «Метелица»",
    },
    twitter: { card: "summary_large_image", title, description },
  };
}
