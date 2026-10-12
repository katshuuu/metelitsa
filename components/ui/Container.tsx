import { cn } from "@/lib/cn";

export function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={cn("mx-auto w-[min(1300px,calc(100%-40px))] md:w-[min(1300px,calc(100%-64px))]", className)}>{children}</div>;
}
