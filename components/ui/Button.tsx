import Link from "next/link";
import { cn } from "@/lib/cn";

type Tone = "onDark" | "onLight";
type Variant = "solid" | "outline";

const styles: Record<Tone, Record<Variant, string>> = {
  onDark: {
    solid: "bg-white text-navy hover:bg-mist",
    outline: "border border-white/80 text-white hover:bg-white hover:text-navy",
  },
  onLight: {
    solid: "bg-navy text-white hover:bg-navy/90",
    outline: "border border-navy text-navy hover:bg-navy hover:text-white",
  },
};

const base =
  "inline-flex min-h-11 items-center justify-center px-5 text-[15px] transition-colors duration-300 ease-concert";

export function Button({
  href,
  children,
  tone = "onLight",
  variant = "solid",
  className,
  type = "button",
  onClick,
}: {
  href?: string;
  children: React.ReactNode;
  tone?: Tone;
  variant?: Variant;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
}) {
  const cls = cn(base, styles[tone][variant], className);
  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type} onClick={onClick} className={cls}>
      {children}
    </button>
  );
}
