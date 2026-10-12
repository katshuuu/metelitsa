"use client";

import { useRef } from "react";
import { featuredVideo, socials } from "@/content/site";
import { useDialog } from "@/lib/use-dialog";

export function VideoModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  useDialog(open, onClose, ref);
  if (!open) return null;
  const rutube = socials.find((item) => item.label === "RuTube")?.href;

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center bg-navy/80 p-4" role="presentation">
      <div
        ref={ref}
        role="dialog"
        aria-modal="true"
        aria-labelledby="video-title"
        className="w-full max-w-4xl bg-navy text-white"
      >
        <div className="flex items-center justify-between border-b border-white/20 px-4 py-3">
          <h2 id="video-title" className="font-display text-[24px]">
            {featuredVideo.title}
          </h2>
          <button type="button" className="min-h-11 px-3" onClick={onClose}>
            Закрыть
          </button>
        </div>
        <div className="aspect-video bg-black">
          <iframe
            title={`Видео: ${featuredVideo.title}`}
            src={`https://www.youtube-nocookie.com/embed/${featuredVideo.youtubeId}?rel=0`}
            className="h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <p className="px-4 py-4 text-[15px] text-white/80">
          {featuredVideo.description}{" "}
          {rutube ? (
            <a href={rutube} className="link-arrow" target="_blank" rel="noreferrer">
              Канал на RuTube
            </a>
          ) : null}
        </p>
      </div>
    </div>
  );
}
