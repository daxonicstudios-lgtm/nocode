import type { BlockProps } from "@/blocks/types";
import { Play } from "lucide-react";

export default function Video014(props: BlockProps) {
  const { theme, heading = "Our Story", subheading = "Watch the 2-minute overview.", imageUrl } = props;

  return (
    <section className="px-4 py-24" style={{ backgroundColor: theme?.primary ?? "#0f172a", color: "#fff" }}>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-5xl font-bold">{heading}</h2>
        <p className="mt-4 opacity-60">{subheading}</p>
        <div className="mt-10 relative aspect-video rounded-2xl overflow-hidden cursor-pointer group" style={{ backgroundColor: "rgba(255,255,255,0.05)" }}>
          {imageUrl && <img src={imageUrl} alt="" className="w-full h-full object-cover" />}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 rounded-full flex items-center justify-center border-2 border-white/30 group-hover:border-white/60 transition-colors">
              <Play className="w-8 h-8 ml-1 text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
