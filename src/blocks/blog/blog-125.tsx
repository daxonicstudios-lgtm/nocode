import type { BlockProps } from "@/blocks/types";
import { Search, SlidersHorizontal } from "lucide-react";

const CATEGORIES = ["Engineering", "Product", "Design", "Data Science", "Leadership"];

const DEFAULT_ITEMS = [
  { title: "Feature Flags Done Right", description: "Progressive rollouts, A/B testing, and kill switches in production.", label: "Engineering" },
  { title: "User Research on a Budget", description: "Guerrilla research methods for teams without dedicated researchers.", label: "Product" },
  { title: "Accessible Color Systems", description: "Building palettes that meet WCAG standards without sacrificing aesthetics.", label: "Design" },
];

export default function Blog125(props: BlockProps) {
  const { theme, heading = "Resources", subheading = "Browse by category or search directly", items = DEFAULT_ITEMS, buttonUrl = "#" } = props;

  return (
    <section className="px-5 py-20" style={{ backgroundColor: theme?.background ?? "#f1f5f9", color: theme?.foreground ?? "#0f172a" }}>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div>
            <h2 className="text-3xl font-bold">{heading}</h2>
            <p className="text-sm opacity-50 mt-1">{subheading}</p>
          </div>
          <div className="flex gap-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 opacity-40" />
              <input type="text" placeholder="Search..." className="pl-10 pr-4 py-2.5 rounded-lg border text-sm outline-none bg-white w-56" style={{ borderColor: `${theme?.foreground ?? "#0f172a"}12`, color: theme?.foreground ?? "#0f172a" }} />
            </div>
            <button className="p-2.5 rounded-lg border bg-white" style={{ borderColor: `${theme?.foreground ?? "#0f172a"}12` }}>
              <SlidersHorizontal className="w-4 h-4 opacity-50" />
            </button>
          </div>
        </div>
        <div className="flex gap-6 mb-10 overflow-x-auto pb-2">
          {CATEGORIES.map((cat, i) => (
            <button key={cat} className={`text-sm font-medium whitespace-nowrap pb-2 border-b-2 ${i === 0 ? "" : "border-transparent opacity-50"}`} style={i === 0 ? { borderColor: theme?.primary ?? "#6366f1", color: theme?.primary ?? "#6366f1" } : {}}>
              {cat}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {items.slice(0, 3).map((item, i) => (
            <a key={i} href={buttonUrl} className="group bg-white rounded-xl p-5 border hover:shadow-md transition-shadow" style={{ borderColor: `${theme?.foreground ?? "#0f172a"}08` }}>
              <div className="h-36 rounded-lg mb-4" style={{ backgroundColor: theme?.secondary ?? "#e2e8f0" }} />
              <span className="text-xs font-medium" style={{ color: theme?.primary ?? "#6366f1" }}>{String(item.label)}</span>
              <h3 className="mt-1 font-bold group-hover:underline">{item.title}</h3>
              <p className="mt-1 text-sm opacity-50 line-clamp-2">{item.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
