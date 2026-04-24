import type { BlockProps } from "@/blocks/types";
import { Layers, ArrowRight } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "Building Multi-Tenant Architectures", description: "Patterns for isolating data while sharing infrastructure.", label: "Architecture", value: "Featured" },
  { title: "The Art of Writing Technical Docs", description: "Clear documentation is a competitive advantage.", label: "Process", value: "Popular" },
  { title: "Database Indexing Strategies", description: "When and how to add indexes without hurting write performance.", label: "Backend", value: "New" },
];

export default function Blog157(props: BlockProps) {
  const { theme, heading = "Engineering Blog", items = DEFAULT_ITEMS, buttonText = "Read article", buttonUrl = "#" } = props;

  return (
    <section style={{ backgroundColor: theme?.background ?? "#e0e5ec", color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center"
            style={{ backgroundColor: theme?.background ?? "#e0e5ec", boxShadow: "6px 6px 12px #b8bec4, -6px -6px 12px #ffffff" }}
          >
            <Layers className="w-5 h-5" style={{ color: theme?.primary ?? "#6366f1" }} />
          </div>
          <h2 className="text-3xl font-bold">{heading}</h2>
        </div>
        {items.slice(0, 3).map((item, i) => (
          <article
            key={i}
            className="rounded-2xl p-6 mb-5"
            style={{ backgroundColor: theme?.background ?? "#e0e5ec", boxShadow: "8px 8px 16px #b8bec4, -8px -8px 16px #ffffff" }}
          >
            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold uppercase tracking-wider" style={{ color: theme?.primary ?? "#6366f1" }}>{item.label}</span>
                  {item.value === "Featured" && (
                    <span className="text-[10px] px-2 py-0.5 rounded-full font-bold" style={{ backgroundColor: theme?.accent ?? "#fef3c7", color: theme?.foreground ?? "#92400e" }}>
                      {item.value}
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className="text-sm opacity-60 mt-1">{item.description}</p>
              </div>
              <a href={buttonUrl} className="flex items-center gap-1 text-sm font-semibold shrink-0" style={{ color: theme?.primary ?? "#6366f1" }}>
                {buttonText} <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
