import type { BlockProps } from "@/blocks/types";
import { Play, Clock } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "Building Your First Landing Page", description: "A complete walkthrough from blank canvas to published site in under 20 minutes.", label: "Tutorial", value: "18:42" },
  { title: "Design Systems Deep Dive", description: "How to create tokens, components, and documentation that scale.", label: "Workshop", value: "34:15" },
  { title: "State of Web Development 2026", description: "The trends, tools, and technologies shaping the next era.", label: "Talk", value: "22:08" },
];

export default function Blog181(props: BlockProps) {
  const { theme, heading = "Video Blog", subheading = "Watch and learn", items = DEFAULT_ITEMS, buttonUrl = "#" } = props;

  return (
    <section style={{ backgroundColor: theme?.background ?? "#111111", color: theme?.foreground ?? "#f5f5f5" }} className="px-5 py-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-2">{heading}</h2>
        <p className="text-sm opacity-50 mb-12">{subheading}</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.slice(0, 3).map((item, i) => (
            <a key={i} href={buttonUrl} className="group block">
              <div className="relative aspect-video rounded-xl overflow-hidden mb-4" style={{ backgroundColor: theme?.secondary ?? "#222" }}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center bg-white/20 backdrop-blur-sm group-hover:bg-white/30 transition-colors">
                    <Play className="w-6 h-6 text-white fill-white" />
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded text-xs font-mono bg-black/70 text-white">{item.value}</div>
              </div>
              <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: theme?.primary ?? "#6366f1" }}>{item.label}</span>
              <h3 className="mt-1 font-bold leading-snug group-hover:opacity-80 transition-opacity">{item.title}</h3>
              <p className="mt-1 text-sm opacity-50">{item.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
