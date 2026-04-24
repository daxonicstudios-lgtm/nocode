import type { BlockProps } from "@/blocks/types";
import { Search, X, ArrowRight } from "lucide-react";

const TAGS = ["React", "TypeScript", "CSS", "Node.js", "DevOps", "AI/ML"];

const DEFAULT_ITEMS = [
  { title: "Building Type-Safe APIs", description: "End-to-end type safety from database to frontend with tRPC.", label: "TypeScript" },
  { title: "CSS Nesting is Here", description: "Native CSS nesting is in all major browsers. Time to ditch preprocessors?", label: "CSS" },
  { title: "React Server Components Deep Dive", description: "Understanding the mental model behind RSC and when to use them.", label: "React" },
];

export default function Blog123(props: BlockProps) {
  const { theme, heading = "Explore Topics", subheading = "Find articles by technology or topic", items = DEFAULT_ITEMS, buttonUrl = "#" } = props;

  return (
    <section className="px-5 py-20" style={{ backgroundColor: theme?.background ?? "#ffffff", color: theme?.foreground ?? "#0f172a" }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold">{heading}</h2>
          <p className="mt-2 text-sm opacity-50">{subheading}</p>
        </div>
        <div className="max-w-xl mx-auto mb-6 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 opacity-30" />
          <input
            type="text"
            placeholder="Search by title, tag, or keyword..."
            className="w-full pl-12 pr-10 py-3.5 rounded-2xl border text-sm outline-none"
            style={{ borderColor: `${theme?.foreground ?? "#0f172a"}15`, color: theme?.foreground ?? "#0f172a" }}
          />
          <button className="absolute right-3 top-1/2 -translate-y-1/2 opacity-30 hover:opacity-60"><X className="w-4 h-4" /></button>
        </div>
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {TAGS.map((tag) => (
            <span key={tag} className="px-3 py-1.5 rounded-full text-xs font-medium border cursor-pointer hover:bg-gray-50" style={{ borderColor: `${theme?.foreground ?? "#0f172a"}15` }}>
              {tag}
            </span>
          ))}
        </div>
        <div className="space-y-4">
          {items.slice(0, 3).map((item, i) => (
            <a key={i} href={buttonUrl} className="group flex items-center justify-between p-5 rounded-xl border hover:border-gray-300 transition-colors" style={{ borderColor: `${theme?.foreground ?? "#0f172a"}10` }}>
              <div>
                <span className="text-xs font-semibold px-2 py-0.5 rounded" style={{ backgroundColor: `${theme?.primary ?? "#6366f1"}10`, color: theme?.primary ?? "#6366f1" }}>
                  {String(item.label)}
                </span>
                <h3 className="mt-2 text-lg font-bold group-hover:underline">{item.title}</h3>
                <p className="text-sm opacity-50 mt-1">{item.description}</p>
              </div>
              <ArrowRight className="w-5 h-5 opacity-30 group-hover:opacity-70 flex-shrink-0 ml-4" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
