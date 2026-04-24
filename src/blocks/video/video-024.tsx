import type { BlockProps } from "@/blocks/types";
import { Play } from "lucide-react";

export default function Video024(props: BlockProps) {
  const { theme, heading = "Watch How It Works", subheading = "A quick tour of everything you can do.", imageUrl } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold">{heading}</h2>
          <p className="mt-3 opacity-60">{subheading}</p>
        </div>
        <div className="relative aspect-video rounded-2xl overflow-hidden cursor-pointer group" style={{ backgroundColor: theme?.accent ?? "#1a1a2e" }}>
          {imageUrl && <img src={imageUrl} alt="" className="w-full h-full object-cover" />}
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
            <div className="w-16 h-16 rounded-full flex items-center justify-center bg-white/90 group-hover:scale-110 transition-transform">
              <Play className="w-6 h-6 ml-1" style={{ color: theme?.primary ?? "#6366f1" }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
