import type { BlockProps } from "@/blocks/types";
import { Clock, Bookmark } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "Why No-Code Matters for Africa", description: "Lowering barriers to digital entrepreneurship across the continent.", label: "5 min read", value: "Startups" },
  { title: "Scaling Without a Dev Team", description: "How three founders shipped a product used by 10k people.", label: "8 min read", value: "Growth" },
  { title: "The Economics of SaaS Pricing", description: "Finding the sweet spot between value and revenue.", label: "6 min read", value: "Business" },
];

export default function Blog152(props: BlockProps) {
  const { theme, heading = "Blog", items = DEFAULT_ITEMS } = props;

  return (
    <section style={{ backgroundColor: theme?.background ?? "#e4e4e4", color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-14">{heading}</h2>
        <div className="space-y-6">
          {items.slice(0, 3).map((item, i) => (
            <article
              key={i}
              className="rounded-xl p-5 flex flex-col sm:flex-row sm:items-center gap-4"
              style={{
                backgroundColor: theme?.background ?? "#e4e4e4",
                boxShadow: "6px 6px 12px #c4c4c4, -6px -6px 12px #ffffff",
              }}
            >
              <div
                className="w-16 h-16 rounded-full shrink-0 flex items-center justify-center"
                style={{
                  backgroundColor: theme?.background ?? "#e4e4e4",
                  boxShadow: "inset 4px 4px 8px #c4c4c4, inset -4px -4px 8px #ffffff",
                }}
              >
                <Bookmark className="w-5 h-5" style={{ color: theme?.primary ?? "#8b5cf6" }} />
              </div>
              <div className="flex-1">
                <span className="text-xs font-bold uppercase tracking-wider" style={{ color: theme?.primary ?? "#8b5cf6" }}>{item.value}</span>
                <h3 className="text-lg font-bold mt-1">{item.title}</h3>
                <p className="text-sm opacity-60 mt-1">{item.description}</p>
              </div>
              <span className="flex items-center gap-1 text-xs opacity-50 shrink-0"><Clock className="w-3 h-3" />{item.label}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
