import { cn } from "@/lib/cn";

export function Mark({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex flex-col items-center leading-none text-white", className)}>
      <svg viewBox="0 0 36 14" className="h-3 w-7" aria-hidden>
        <path d="M6 12 10 3l4 6 4-6 4 6 4-9" fill="none" stroke="currentColor" strokeWidth="1" />
        <path d="M14 12h8l-1 2h-6z" fill="currentColor" />
      </svg>
      <span className="font-display text-[28px] leading-none">М</span>
      <svg viewBox="0 0 40 16" className="h-3 w-8" aria-hidden>
        <path
          d="M20 2c2 3 2 5 0 8M14 6c-4 1-6 4-6 7M26 6c4 1 6 4 6 7M20 8c-3 2-4 4-3 6M20 8c3 2 4 4 3 6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        />
      </svg>
    </span>
  );
}
