import { Schools } from "@/components/sections/Schools";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Школам и организациям",
  "Пригласите оркестр «Метелица» на мероприятие: абонемент, выездные концерты, заявка.",
  "/schools",
);

export default function SchoolsPage() {
  return (
    <div className="pt-20">
      <Schools />
    </div>
  );
}
