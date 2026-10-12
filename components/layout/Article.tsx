import { PageHero, SectionTabs, type Crumb } from "@/components/layout/PageFrame";
import { Container } from "@/components/ui/Container";

export function Article({
  title,
  lede,
  kicker,
  eyebrow,
  crumbs,
  tabs,
  children,
}: {
  title: string;
  lede?: string;
  kicker?: string;
  eyebrow?: string;
  crumbs?: Crumb[];
  tabs?: { href: string; label: string }[];
  children?: React.ReactNode;
}) {
  const trail = crumbs ?? [
    { label: "Главная", href: "/" },
    { label: title },
  ];
  return (
    <article>
      <PageHero crumbs={trail} kicker={kicker ?? eyebrow ?? "Метелица"} title={title} lede={lede} />
      {tabs ? <SectionTabs items={tabs} /> : null}
      {children ? <Container className="py-16 md:py-20">{children}</Container> : null}
    </article>
  );
}
