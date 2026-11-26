import Link from "next/link";
import { announcements } from "@/content/announcements";
import { Container } from "@/components/ui/Container";
import { SectionIntro } from "@/components/layout/PageFrame";
import { EventRows } from "@/components/sections/EventRows";

export function HomeEvents() {
  const rows = [announcements[0], announcements[3], announcements[4]].filter(Boolean);
  return (
    <section id="tickets" className="scroll-mt-24 bg-white py-16 text-navy md:py-24">
      <Container>
        <SectionIntro kicker="Новости и анонсы" title="Ближайшие события" />
        <div className="mt-10">
          <EventRows items={rows} />
        </div>
        <Link href="/news" className="link-arrow mt-8 inline-flex min-h-11 items-center text-[15px]">
          Все анонсы <span aria-hidden>→</span>
        </Link>
      </Container>
    </section>
  );
}
