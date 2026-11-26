import { cn } from "@/lib/cn";

export function SectionLabel({
  children,
  className,
  light = false,
}: {
  children: React.ReactNode;
  className?: string;
  light?: boolean;
}) {
  return (
    <p
      className={cn(
        "text-[12px] uppercase tracking-[0.16em]",
        light ? "text-white/70" : "text-slate",
        className,
      )}
    >
      {children}
    </p>
  );
}
