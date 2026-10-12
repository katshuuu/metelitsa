import Image from "next/image";
import { notFound } from "next/navigation";
import { Article } from "@/components/layout/Article";
import { Button } from "@/components/ui/Button";
import { events, getEvent } from "@/content/events";
import { siteUrl } from "@/content/site";
import { formatRange } from "@/lib/dates";
import { pageMeta } from "@/lib/seo";

export function generateStaticParams() {
  return events.map((event) => ({ slug: event.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const event = getEvent(params.slug);
  if (!event) return {};
  return pageMeta(event.title, event.summary, `/tickets/${event.slug}`);
}

export default function EventPage({ params }: { params: { slug: string } }) {
  const event = getEvent(params.slug);
  if (!event) notFound();
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: event.title,
    startDate: event.start,
    endDate: event.end ?? event.start,
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    location: {
      "@type": "Place",
      name: event.venue ?? event.city,
      address: event.city,
    },
    organizer: { "@type": "Organization", name: "Государственный оркестр «Метелица»", url: siteUrl },
    description: event.summary,
    offers: event.ticketUrl
      ? { "@type": "Offer", url: event.ticketUrl, availability: "https://schema.org/InStock" }
      : undefined,
  };

  return (
    <Article eyebrow="Афиша" title={event.title} lede={formatRange(event.start, event.end)}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <p className="text-slate">
        {event.time ? `${event.time}. ` : null}
        {event.venue ?? event.city}
      </p>
      {event.image ? (
        <Image src={event.image} alt={event.imageAlt ?? ""} width={1000} height={700} className="my-8 h-auto w-full max-w-[640px]" />
      ) : null}
      {event.body.map((paragraph) => (
        <p key={paragraph.slice(0, 32)}>{paragraph}</p>
      ))}
      {event.ticketUrl ? (
        <Button href={event.ticketUrl} className="mt-4">
          Купить билет
        </Button>
      ) : (
        <p>TODO: отдельная ссылка на продажу билетов для этого события на исходном сайте не опубликована.</p>
      )}
    </Article>
  );
}
