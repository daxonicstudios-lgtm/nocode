import type { BlockProps } from "@/blocks/types";
import { Search, Filter } from "lucide-react";

const CATEGORIES = ["All", "Development", "Design", "Marketing", "Business"];

const DEFAULT_ITEMS = [
  { title: "SEO for Developers", description: "Technical SEO fundamentals every frontend engineer should know.", label: "Marketing" },
  { title: "Component Testing Patterns", description: "Unit, integration, and visual regression testing for UI components.", label: "Development" },
  { title: "Brand Identity Workshop", description: "A step-by-step process for defining your visual brand language.", label: "Design" },
  { title: "Pricing Page Psychology", description: "How anchoring, framing, and choice architecture drive conversions.", label: "Business" },
];

export default function Blog122(props: BlockProps) {
  const { theme, heading = "Blog", items = DEFAULT_ITEMS, buttonUrl = "#" } = props;

  return (
    <section className="px-5 py-20" style={{ backgroundColor: theme?.background ?? "#f9fafb", color: theme?.foreground ?? "#111827" }}>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10">
          <h2 className="text-3xl font-bold">{heading}</h2>
          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 opacity-40" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2.5 rounded-lg border text-sm outline-none"
              style={{ borderColor: `${theme?.foreground ?? "#111827"}15`, backgroundColor: "#fff", color: theme?.foreground ?? "#111827" }}
            />
          </div>
        </div>
        <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2">
          <Filter className="w-4 h-4 opacity-40 flex-shrink-0" />
          {CATEGORIES.map((cat, i) => (
            <button
              key={cat}
              className="px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap border"
              style={i === 0 ? { backgroundColor: theme?.primary ?? "#6366f1", color: "#fff", borderColor: "transparent" } : { borderColor: `${theme?.foreground ?? "#111827"}15` }}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {items.slice(0, 4).map((item, i) => (
            <a key={i} href={buttonUrl} className="group flex gap-4 p-4 rounded-xl hover:bg-white transition-colors">
              <div className="w-20 h-20 rounded-lg flex-shrink-0" style={{ backgroundColor: theme?.secondary ?? "#e5e7eb" }} />
              <div>
                <span className="text-xs font-medium opacity-40">{String(item.label)}</span>
                <h3 className="text-base font-bold group-hover:underline">{item.title}</h3>
                <p className="text-xs opacity-50 mt-1 line-clamp-2">{item.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
