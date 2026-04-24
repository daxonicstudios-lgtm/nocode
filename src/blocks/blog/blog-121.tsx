import type { BlockProps } from "@/blocks/types";
import { Search, ChevronDown } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "Getting Started with Edge Functions", description: "Deploy serverless functions closer to your users for faster response times.", label: "Tutorial" },
  { title: "Database Migration Strategies", description: "Zero-downtime migrations for production databases at scale.", label: "Engineering" },
  { title: "Design System Governance", description: "Who owns the design system? Roles, rituals, and responsibility.", label: "Design" },
];

export default function Blog121(props: BlockProps) {
  const { theme, heading = "Knowledge Base", subheading = "Search our articles", items = DEFAULT_ITEMS, buttonUrl = "#" } = props;

  return (
    <section className="px-5 py-20" style={{ backgroundColor: theme?.background ?? "#ffffff", color: theme?.foreground ?? "#111827" }}>
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-3">{heading}</h2>
        <p className="text-center text-sm opacity-50 mb-8">{subheading}</p>
        <div className="flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto mb-14">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 opacity-40" />
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full pl-10 pr-4 py-3 rounded-xl border text-sm outline-none"
              style={{ borderColor: `${theme?.foreground ?? "#111827"}15`, backgroundColor: theme?.background ?? "#ffffff", color: theme?.foreground ?? "#111827" }}
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-3 rounded-xl border text-sm" style={{ borderColor: `${theme?.foreground ?? "#111827"}15` }}>
            All Categories <ChevronDown className="w-4 h-4 opacity-50" />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.slice(0, 3).map((item, i) => (
            <a key={i} href={buttonUrl} className="group block p-6 rounded-xl border hover:shadow-md transition-shadow" style={{ borderColor: `${theme?.foreground ?? "#111827"}10` }}>
              <span className="text-xs font-semibold px-2 py-1 rounded-md" style={{ backgroundColor: `${theme?.primary ?? "#6366f1"}15`, color: theme?.primary ?? "#6366f1" }}>
                {String(item.label)}
              </span>
              <h3 className="mt-3 text-lg font-bold group-hover:underline">{item.title}</h3>
              <p className="mt-2 text-sm opacity-60 line-clamp-2">{item.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
