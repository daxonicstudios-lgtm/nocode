import type { BlockProps } from "@/blocks/types";
import { ChevronLeft, ChevronRight, Clock } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "Zero-Downtime Deployments", description: "Blue-green, canary, and rolling deployment strategies.", label: "DevOps", value: "6 min" },
  { title: "React Compiler Deep Dive", description: "How automatic memoization changes the optimization game.", label: "React", value: "10 min" },
  { title: "Designing for Low Bandwidth", description: "Building performant web apps for emerging markets.", label: "Performance", value: "8 min" },
  { title: "Multi-Tenant Architecture", description: "Shared vs isolated databases for SaaS platforms.", label: "Architecture", value: "12 min" },
  { title: "TypeScript Decorators", description: "Stage 3 decorators are here. A practical guide to using them.", label: "TypeScript", value: "7 min" },
  { title: "Web Push Notifications", description: "Engaging users with timely, relevant push messages.", label: "Engagement", value: "5 min" },
];

export default function Blog134(props: BlockProps) {
  const { theme, heading = "Archive", items = DEFAULT_ITEMS, buttonUrl = "#" } = props;

  return (
    <section className="px-5 py-20" style={{ backgroundColor: theme?.background ?? "#ffffff", color: theme?.foreground ?? "#0a0a0a" }}>
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-10">{heading}</h2>
        <div className="divide-y mb-12" style={{ borderColor: `${theme?.foreground ?? "#0a0a0a"}08` }}>
          {items.slice(0, 6).map((item, i) => (
            <a key={i} href={buttonUrl} className="group flex items-center justify-between py-5 gap-4">
              <div className="min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-semibold" style={{ color: theme?.primary ?? "#6366f1" }}>{String(item.label)}</span>
                  <span className="flex items-center gap-1 text-xs opacity-30"><Clock className="w-3 h-3" />{String(item.value)}</span>
                </div>
                <h3 className="font-bold group-hover:underline truncate">{item.title}</h3>
              </div>
              <ChevronRight className="w-4 h-4 opacity-20 group-hover:opacity-60 flex-shrink-0" />
            </a>
          ))}
        </div>
        <div className="flex items-center justify-center gap-2">
          <button className="w-8 h-8 rounded flex items-center justify-center opacity-30"><ChevronLeft className="w-4 h-4" /></button>
          {[1, 2, 3, 4, 5].map((n) => (
            <button key={n} className="w-8 h-8 rounded text-sm font-medium" style={n === 1 ? { backgroundColor: theme?.foreground ?? "#0a0a0a", color: theme?.background ?? "#ffffff" } : {}}>
              {n}
            </button>
          ))}
          <button className="w-8 h-8 rounded flex items-center justify-center"><ChevronRight className="w-4 h-4" /></button>
        </div>
      </div>
    </section>
  );
}
