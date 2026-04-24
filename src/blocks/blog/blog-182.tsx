import type { BlockProps } from "@/blocks/types";
import { Play, Eye } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "Responsive Design Masterclass", description: "From mobile to ultrawide: building layouts that adapt beautifully.", label: "12.5k views", value: "45:30" },
  { title: "CSS Animation Techniques", description: "Keyframes, transitions, and performant animations for real projects.", label: "8.2k views", value: "28:15" },
];

export default function Blog182(props: BlockProps) {
  const { theme, heading = "Featured Videos", items = DEFAULT_ITEMS, buttonUrl = "#" } = props;

  const featured = items[0];
  const secondary = items[1];

  return (
    <section style={{ backgroundColor: theme?.background ?? "#0a0a0a", color: theme?.foreground ?? "#fafafa" }} className="px-5 py-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-10">{heading}</h2>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          <a href={buttonUrl} className="lg:col-span-3 group block">
            <div className="relative aspect-video rounded-2xl overflow-hidden" style={{ backgroundColor: theme?.secondary ?? "#1a1a1a" }}>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center bg-white/10 group-hover:bg-white/20 transition-colors border-2 border-white/30">
                  <Play className="w-7 h-7 text-white fill-white" />
                </div>
              </div>
              <div className="absolute bottom-3 right-3 px-2 py-1 rounded bg-black/80 text-xs font-mono">{featured?.value}</div>
            </div>
            <h3 className="mt-4 text-xl font-bold">{featured?.title}</h3>
            <p className="mt-1 text-sm opacity-50">{featured?.description}</p>
            <span className="flex items-center gap-1 mt-2 text-xs opacity-40"><Eye className="w-3 h-3" />{featured?.label}</span>
          </a>
          <div className="lg:col-span-2">
            <a href={buttonUrl} className="group block">
              <div className="relative aspect-video rounded-xl overflow-hidden" style={{ backgroundColor: theme?.secondary ?? "#1a1a1a" }}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-white/10 group-hover:bg-white/20 transition-colors">
                    <Play className="w-5 h-5 text-white fill-white" />
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-black/80 text-[10px] font-mono">{secondary?.value}</div>
              </div>
              <h3 className="mt-3 font-bold">{secondary?.title}</h3>
              <p className="mt-1 text-sm opacity-50">{secondary?.description}</p>
              <span className="flex items-center gap-1 mt-2 text-xs opacity-40"><Eye className="w-3 h-3" />{secondary?.label}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
