import type { BlockProps } from "@/blocks/types";
import { ChevronLeft, ChevronRight } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "Incremental Static Regeneration", description: "Update static pages without rebuilding the entire site.", label: "Next.js" },
  { title: "State Machines in React", description: "Using XState to model complex UI interactions.", label: "React" },
  { title: "Edge Database Queries", description: "Running SQL at the edge with D1, Turso, and Neon.", label: "Database" },
  { title: "Web Components in 2026", description: "The state of custom elements, shadow DOM, and interop with frameworks.", label: "Standards" },
  { title: "Functional CSS Debate", description: "Utility-first versus semantic CSS: settling the argument with data.", label: "CSS" },
  { title: "OAuth 2.1 Simplified", description: "The updated OAuth spec and what it means for your auth flow.", label: "Security" },
];

export default function Blog131(props: BlockProps) {
  const { theme, heading = "All Posts", items = DEFAULT_ITEMS, buttonUrl = "#" } = props;

  return (
    <section className="px-5 py-20" style={{ backgroundColor: theme?.background ?? "#ffffff", color: theme?.foreground ?? "#111827" }}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10">{heading}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {items.slice(0, 6).map((item, i) => (
            <a key={i} href={buttonUrl} className="group block">
              <div className="aspect-video rounded-xl mb-3" style={{ backgroundColor: theme?.secondary ?? "#f3f4f6" }} />
              <span className="text-xs font-semibold" style={{ color: theme?.primary ?? "#6366f1" }}>{String(item.label)}</span>
              <h3 className="mt-1 font-bold group-hover:underline">{item.title}</h3>
              <p className="mt-1 text-sm opacity-50 line-clamp-2">{item.description}</p>
            </a>
          ))}
        </div>
        <div className="flex items-center justify-center gap-2">
          <button className="w-9 h-9 rounded-lg border flex items-center justify-center" style={{ borderColor: `${theme?.foreground ?? "#111827"}15` }}>
            <ChevronLeft className="w-4 h-4" />
          </button>
          {[1, 2, 3, 4, 5].map((n) => (
            <button
              key={n}
              className="w-9 h-9 rounded-lg text-sm font-medium"
              style={n === 1 ? { backgroundColor: theme?.primary ?? "#6366f1", color: "#fff" } : { border: `1px solid ${theme?.foreground ?? "#111827"}15` }}
            >
              {n}
            </button>
          ))}
          <button className="w-9 h-9 rounded-lg border flex items-center justify-center" style={{ borderColor: `${theme?.foreground ?? "#111827"}15` }}>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
