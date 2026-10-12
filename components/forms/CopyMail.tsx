"use client";

import { useState } from "react";

export function CopyMail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      type="button"
      className="min-h-11 px-2 text-[14px] underline decoration-navy/30 underline-offset-4"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(email);
          setCopied(true);
        } catch {
          setCopied(false);
        }
      }}
    >
      {copied ? "Скопировано" : "Скопировать"}
    </button>
  );
}
