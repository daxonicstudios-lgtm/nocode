import type { BlockProps } from "@/blocks/types";
import { Zap, ArrowRight, Activity } from "lucide-react";

const DEFAULTS = [
  { title: "Neural Interface Design Patterns", description: "How brain-computer interfaces are changing the way we think about user input and interaction.", label: "FUTURE", value: "12 min" },
  { title: "Quantum CSS: Beyond the Grid", description: "Experimental layout techniques that push the boundaries of what is possible.", label: "EXPERIMENTS", value: "8 min" },
  { title: "Holographic UI Components", description: "Building interfaces for the next generation of spatial computing.", label: "XR", value: "10 min" },
  { title: "AI Agents That Build Websites", description: "The evolution from prompt to product. How intelligent agents assemble digital experiences.", label: "AI", value: "15 min" },
];

export default function Blog295(props: BlockProps) {
  const { theme, heading = "TRANSMISSION", subheading = "Dispatches from the frontier", items = DEFAULTS } = props;
  const neon = theme?.primary ?? "#00ff88";

  return (
    <section style={{ backgroundColor: theme?.background ?? "#0a0a0a", color: theme?.foreground ?? "#e0e0e0" }} className="px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-2">
          <Activity className="w-5 h-5" style={{ color: neon }} />
          <h2 className="text-3xl sm:text-4xl font-black tracking-wider" style={{ color: neon }}>{heading}</h2>
        </div>
        <p className="text-sm opacity-40 mb-10 font-mono">{subheading}</p>
        <div className="space-y-4">
          {items.map((post, i) => (
            <article key={i} className="rounded-xl p-5 cursor-pointer group border transition-all hover:shadow-lg" style={{ borderColor: `${neon}33`, backgroundColor: `${neon}08` }}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Zap className="w-3 h-3" style={{ color: neon }} />
                  <span className="text-xs font-mono font-bold tracking-wider" style={{ color: neon }}>{String(post.label ?? "")}</span>
                </div>
                <span className="text-xs font-mono opacity-30">{String(post.value ?? "")}</span>
              </div>
              <h3 className="text-lg font-bold group-hover:pl-2 transition-all">{post.title}</h3>
              <p className="text-sm opacity-50 mt-1">{post.description}</p>
              <div className="flex items-center gap-1 mt-3 text-xs font-mono opacity-0 group-hover:opacity-60 transition-opacity" style={{ color: neon }}>
                <span>READ</span>
                <ArrowRight className="w-3 h-3" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
