import type { BlockProps } from "@/blocks/types";
import { ArrowUpRight, Heart } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "Mastering CSS Grid", description: "Advanced layout techniques for complex web interfaces.", label: "Frontend · 10 min" },
  { title: "Database Indexing Deep Dive", description: "When to index, what to index, and common pitfalls to avoid.", label: "Database · 12 min" },
  { title: "Accessibility First Development", description: "Why building for everyone improves the product for all users.", label: "A11y · 7 min" },
];

export default function Blog104(props: BlockProps) {
  const {
    theme,
    heading = "Deep Dives",
    buttonUrl = "#",
    items = DEFAULT_ITEMS,
  } = props;

  return (
    <section
      className="px-5 py-20"
      style={{
        background: theme?.background ?? "linear-gradient(160deg, #0c0c1d, #1b1b4b)",
        color: theme?.foreground ?? "#e0e7ff",
      }}
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-black tracking-tight mb-14">{heading}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.slice(0, 3).map((item, i) => (
            <a
              key={i}
              href={buttonUrl}
              className="group block rounded-3xl overflow-hidden backdrop-blur-xl border border-white/10 hover:shadow-2xl transition-shadow"
              style={{ background: "rgba(255,255,255,0.06)" }}
            >
              <div
                className="h-40"
                style={{ background: `linear-gradient(${135 + i * 20}deg, ${theme?.primary ?? "#7c3aed"}80, ${theme?.accent ?? "#06b6d4"}60)` }}
              />
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <p className="text-xs opacity-50">{String(item.label)}</p>
                  <Heart className="w-4 h-4 opacity-30 group-hover:opacity-70 transition-opacity" />
                </div>
                <h3 className="mt-2 text-lg font-bold group-hover:underline">{item.title}</h3>
                <p className="mt-1 text-sm opacity-60 line-clamp-2">{item.description}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold" style={{ color: theme?.primary ?? "#818cf8" }}>
                  Read article <ArrowUpRight className="w-3 h-3" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
