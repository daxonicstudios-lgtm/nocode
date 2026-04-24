import type { BlockProps } from "@/blocks/types";
import { Play, Maximize2 } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "Keynote: The Next Chapter", description: "Our annual keynote covering vision, roadmap, and major announcements for 2026.", label: "Keynote", value: "52:00" },
  { title: "Workshop: Component Architecture", description: "Hands-on session building a scalable component library.", label: "Workshop", value: "1:30:00" },
  { title: "AMA: Engineering Team", description: "Our engineers answer your most pressing technical questions.", label: "AMA", value: "45:00" },
  { title: "Tutorial: Custom Themes", description: "Create and apply custom color themes to any site.", label: "Tutorial", value: "15:20" },
];

export default function Blog189(props: BlockProps) {
  const { theme, heading = "Video Hub", items = DEFAULT_ITEMS, buttonUrl = "#" } = props;

  return (
    <section style={{ backgroundColor: theme?.background ?? "#000", color: theme?.foreground ?? "#fff" }} className="px-5 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12">{heading}</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {items.slice(0, 4).map((item, i) => (
            <a key={i} href={buttonUrl} className="group block">
              <div className="relative aspect-[9/16] sm:aspect-video rounded-xl overflow-hidden" style={{ backgroundColor: theme?.secondary ?? "#1a1a1a" }}>
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                  <Play className="w-8 h-8 text-white/50 group-hover:text-white fill-current transition-colors" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                  <span className="text-[10px] font-mono opacity-60">{item.value}</span>
                  <h3 className="text-xs font-bold mt-0.5 leading-tight">{item.title}</h3>
                </div>
                <span className="absolute top-2 right-2 opacity-0 group-hover:opacity-60 transition-opacity"><Maximize2 className="w-3 h-3 text-white" /></span>
                <span className="absolute top-2 left-2 px-1.5 py-0.5 rounded text-[9px] font-bold uppercase bg-white/20 backdrop-blur-sm">{item.label}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
