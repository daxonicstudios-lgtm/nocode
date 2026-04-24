import type { BlockProps } from "@/blocks/types";
import { Search, ChevronDown, Rss } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "Streaming SSR Explained", description: "How streaming server-side rendering improves time-to-first-byte.", label: "Performance" },
  { title: "Design Handoff Best Practices", description: "Bridge the gap between design and development with better processes.", label: "Workflow" },
  { title: "Monitoring Microservices", description: "Observability stacks for distributed systems: logs, metrics, traces.", label: "Ops" },
];

export default function Blog130(props: BlockProps) {
  const { theme, heading = "Tech Blog", subheading = "Stay ahead with our latest insights", items = DEFAULT_ITEMS, buttonUrl = "#", buttonText = "Read Article" } = props;

  return (
    <section className="px-5 py-20" style={{ backgroundColor: theme?.background ?? "#0f172a", color: theme?.foreground ?? "#e2e8f0" }}>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div className="flex items-center gap-3">
            <Rss className="w-6 h-6" style={{ color: theme?.accent ?? "#f97316" }} />
            <div>
              <h2 className="text-3xl font-bold">{heading}</h2>
              <p className="text-sm opacity-40">{subheading}</p>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 opacity-30" />
              <input type="text" placeholder="Search..." className="pl-9 pr-4 py-2 rounded-lg border text-sm outline-none w-48 bg-white/5" style={{ borderColor: "rgba(255,255,255,0.1)", color: theme?.foreground ?? "#e2e8f0" }} />
            </div>
            <button className="flex items-center gap-1 px-3 py-2 rounded-lg border text-sm" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
              Filter <ChevronDown className="w-3 h-3" />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {items.slice(0, 3).map((item, i) => (
            <article key={i} className="rounded-xl border p-5 hover:bg-white/5 transition-colors" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
              <div className="h-36 rounded-lg mb-4" style={{ background: `linear-gradient(${135 + i * 25}deg, ${theme?.primary ?? "#6366f1"}40, ${theme?.accent ?? "#06b6d4"}20)` }} />
              <span className="text-xs font-semibold" style={{ color: theme?.accent ?? "#06b6d4" }}>{String(item.label)}</span>
              <h3 className="mt-1 font-bold">{item.title}</h3>
              <p className="mt-1 text-sm opacity-40 line-clamp-2">{item.description}</p>
              <a href={buttonUrl} className="mt-3 inline-block text-xs font-semibold" style={{ color: theme?.primary ?? "#818cf8" }}>{buttonText}</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
