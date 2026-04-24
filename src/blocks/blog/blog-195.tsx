import type { BlockProps } from "@/blocks/types";
import { Volume2, Play, SkipForward } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "The Art of Saying No", description: "How product teams decide what not to build.", label: "Episode 30", value: "25 min" },
  { title: "Pricing Psychology", description: "What behavioral science tells us about setting the right price.", label: "Episode 29", value: "33 min" },
  { title: "Building Trust Online", description: "The signals that make users feel safe on your platform.", label: "Episode 28", value: "29 min" },
  { title: "Content as Product", description: "Treating your content strategy like a product roadmap.", label: "Episode 27", value: "37 min" },
];

export default function Blog195(props: BlockProps) {
  const { theme, heading = "Wavelength", items = DEFAULT_ITEMS, buttonUrl = "#" } = props;

  return (
    <section style={{ backgroundColor: theme?.background ?? "#18181b", color: theme?.foreground ?? "#fafafa" }} className="px-5 py-20">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-2 mb-12">
          <Volume2 className="w-5 h-5" style={{ color: theme?.primary ?? "#22d3ee" }} />
          <h2 className="text-2xl font-bold">{heading}</h2>
        </div>
        {items.slice(0, 4).map((item, i) => (
          <a key={i} href={buttonUrl} className="flex items-center gap-4 py-4 border-b border-white/10 group">
            <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform" style={{ backgroundColor: theme?.primary ?? "#22d3ee" }}>
              <Play className="w-4 h-4 text-black fill-black" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-semibold uppercase tracking-wider opacity-40">{item.label}</span>
                <span className="text-[10px] opacity-20">·</span>
                <span className="text-[10px] opacity-40">{item.value}</span>
              </div>
              <h3 className="font-bold text-sm mt-0.5 truncate">{item.title}</h3>
              <p className="text-xs opacity-40 truncate">{item.description}</p>
            </div>
            <SkipForward className="w-4 h-4 opacity-0 group-hover:opacity-40 transition-opacity shrink-0" />
          </a>
        ))}
      </div>
    </section>
  );
}
