import type { BlockProps } from "@/blocks/types";
import { Play, Clock, ArrowRight } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "Fireside Chat: Building in Africa", description: "Founders share stories of shipping products across the continent.", label: "Panel", value: "38:00" },
  { title: "Quick Tip: Dark Mode in 5 Minutes", description: "Add a polished dark mode toggle to any site.", label: "Quick Tip", value: "4:52" },
  { title: "Behind the Scenes: Our Design Process", description: "From wireframe to pixel-perfect implementation.", label: "BTS", value: "22:30" },
];

export default function Blog188(props: BlockProps) {
  const { theme, heading = "Latest Videos", buttonText = "View all videos", buttonUrl = "#", items = DEFAULT_ITEMS } = props;

  return (
    <section style={{ backgroundColor: theme?.background ?? "#1c1917", color: theme?.foreground ?? "#fafaf9" }} className="px-5 py-20">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl font-bold">{heading}</h2>
          <a href={buttonUrl} className="hidden sm:flex items-center gap-1 text-sm" style={{ color: theme?.primary ?? "#f97316" }}>
            {buttonText} <ArrowRight className="w-4 h-4" />
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.slice(0, 3).map((item, i) => (
            <a key={i} href={buttonUrl} className="group block rounded-2xl overflow-hidden" style={{ backgroundColor: theme?.secondary ?? "#292524" }}>
              <div className="relative aspect-video">
                <div className="absolute inset-0 flex items-center justify-center" style={{ backgroundColor: theme?.secondary ?? "#292524" }}>
                  <div className="w-12 h-12 rounded-full flex items-center justify-center border-2 border-white/30 group-hover:border-white/60 transition-colors">
                    <Play className="w-5 h-5 text-white fill-white" />
                  </div>
                </div>
                <span className="absolute top-2 left-2 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase" style={{ backgroundColor: theme?.primary ?? "#f97316", color: "#fff" }}>{item.label}</span>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-sm">{item.title}</h3>
                <p className="text-xs opacity-50 mt-1">{item.description}</p>
                <span className="flex items-center gap-1 text-[10px] opacity-40 mt-2"><Clock className="w-3 h-3" />{item.value}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
