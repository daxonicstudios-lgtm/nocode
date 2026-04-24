import type { BlockProps } from "@/blocks/types";
import { MoreHorizontal } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "Signals: The Future of Reactivity", description: "Fine-grained reactivity is coming to every framework.", label: "Frameworks" },
  { title: "Designing Error States", description: "Empty states, loading skeletons, and error boundaries done right.", label: "UX" },
  { title: "Rate Limiting Strategies", description: "Token bucket, sliding window, and leaky bucket algorithms explained.", label: "Backend" },
  { title: "Semantic HTML Matters", description: "Why proper HTML structure improves SEO, accessibility, and maintenance.", label: "HTML" },
  { title: "Building a Plugin System", description: "Extensible architecture patterns for platforms and tools.", label: "Architecture" },
  { title: "Image Optimization Pipeline", description: "Automated compression, resizing, and format conversion for the web.", label: "Performance" },
];

export default function Blog133(props: BlockProps) {
  const { theme, heading = "Latest Articles", items = DEFAULT_ITEMS, buttonUrl = "#" } = props;

  return (
    <section className="px-5 py-20" style={{ backgroundColor: theme?.background ?? "#f9fafb", color: theme?.foreground ?? "#111827" }}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10">{heading}</h2>
        <div className="space-y-4 mb-12">
          {items.slice(0, 6).map((item, i) => (
            <a key={i} href={buttonUrl} className="group flex items-center gap-4 p-4 rounded-xl bg-white border hover:shadow-sm transition-shadow" style={{ borderColor: `${theme?.foreground ?? "#111827"}06` }}>
              <div className="w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0" style={{ backgroundColor: `${theme?.primary ?? "#6366f1"}10`, color: theme?.primary ?? "#6366f1" }}>
                {i + 1}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold group-hover:underline truncate">{item.title}</h3>
                <p className="text-sm opacity-50 truncate">{item.description}</p>
              </div>
              <span className="text-xs opacity-30 hidden sm:block flex-shrink-0">{String(item.label)}</span>
            </a>
          ))}
        </div>
        <nav className="flex items-center justify-center gap-1">
          {[1, 2, 3].map((n) => (
            <button key={n} className="w-10 h-10 rounded-full text-sm font-semibold" style={n === 1 ? { backgroundColor: theme?.primary ?? "#6366f1", color: "#fff" } : {}}>
              {n}
            </button>
          ))}
          <MoreHorizontal className="w-5 h-5 opacity-30 mx-1" />
          <button className="w-10 h-10 rounded-full text-sm font-semibold">20</button>
        </nav>
      </div>
    </section>
  );
}
