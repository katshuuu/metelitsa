import { Tickets } from "@/components/sections/Tickets";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Билеты и абонементы",
  "Афиша концертов Государственного оркестра «Метелица».",
  "/tickets",
);

export default function TicketsPage() {
  return (
    <div className="pt-24">
      <Tickets archive />
    </div>
  );
}
