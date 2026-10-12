import Link from "next/link";
import { cn } from "@/lib/cn";

export function LinkArrow({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link href={href} className={cn("link-arrow inline-flex min-h-11 items-center gap-2 text-[15px]", className)}>
      {children}
      <span aria-hidden>→</span>
    </Link>
  );
}
