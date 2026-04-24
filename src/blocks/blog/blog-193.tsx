import type { BlockProps } from "@/blocks/types";
import { Radio, Play, Download } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "Developer Experience Matters", description: "Why DX is the new UX and how it affects your bottom line.", label: "Season 3, Ep. 8", value: "44 min" },
  { title: "Remote Team Playbook", description: "Processes, tools, and rituals for high-performing distributed teams.", label: "Season 3, Ep. 7", value: "36 min" },
  { title: "The Indie Hacker Path", description: "Building profitable software businesses as a solo developer.", label: "Season 3, Ep. 6", value: "50 min" },
];

export default function Blog193(props: BlockProps) {
  const { theme, heading = "On Air", subheading = "Season 3 now streaming", items = DEFAULT_ITEMS, buttonUrl = "#" } = props;

  return (
    <section style={{ backgroundColor: theme?.background ?? "#0c0a09", color: theme?.foreground ?? "#fafaf9" }} className="px-5 py-20">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-1">
          <Radio className="w-5 h-5 animate-pulse" style={{ color: theme?.primary ?? "#ef4444" }} />
          <h2 className="text-3xl font-bold">{heading}</h2>
        </div>
        <p className="text-sm opacity-40 mb-12">{subheading}</p>
        <div className="space-y-3">
          {items.slice(0, 3).map((item, i) => (
            <div key={i} className="flex items-center gap-4 p-4 rounded-xl" style={{ backgroundColor: theme?.secondary ?? "#1c1917" }}>
              <a href={buttonUrl} className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0 hover:opacity-80 transition-opacity" style={{ backgroundColor: theme?.primary ?? "#ef4444" }}>
                <Play className="w-5 h-5 text-white fill-white" />
              </a>
              <div className="flex-1 min-w-0">
                <span className="text-[10px] font-semibold uppercase tracking-wider opacity-40">{item.label}</span>
                <h3 className="font-bold text-sm truncate">{item.title}</h3>
                <p className="text-xs opacity-40 truncate">{item.description}</p>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <span className="text-xs opacity-40 hidden sm:block">{item.value}</span>
                <button className="opacity-40 hover:opacity-70"><Download className="w-4 h-4" /></button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
