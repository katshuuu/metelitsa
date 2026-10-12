import ProgramsPage from "../programs/page";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta("Программы", "Просветительские и партнёрские проекты оркестра «Метелица».", "/schools");

export default function SchoolsPage() {
  return <ProgramsPage />;
}
