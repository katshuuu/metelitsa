import { MediaBand } from "@/components/sections/MediaBand";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta("Медиа", "Видео, фотографии и записи оркестра «Метелица».", "/media");

export default function MediaPage() {
  return (
    <div className="pt-20">
      <MediaBand />
    </div>
  );
}
