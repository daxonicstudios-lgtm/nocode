import type { BlockProps } from "@/blocks/types";
import { Play } from "lucide-react";

export default function Video143(props: BlockProps) {
  const { theme, heading = "Behind the Scenes", imageUrl } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-16">
      <div className="max-w-5xl mx-auto">
        <div className="relative aspect-[21/9] rounded-xl overflow-hidden cursor-pointer group" style={{ backgroundColor: theme?.accent ?? "#1e293b" }}>
          {imageUrl && <img src={imageUrl} alt="" className="w-full h-full object-cover" />}
          <div className="absolute inset-0 flex items-center justify-center bg-black/20">
            <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/90 shadow-lg group-hover:scale-105 transition-transform">
              <Play className="w-5 h-5" style={{ color: theme?.primary ?? "#6366f1" }} />
              <span className="font-semibold text-sm" style={{ color: theme?.primary ?? "#6366f1" }}>{heading}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
