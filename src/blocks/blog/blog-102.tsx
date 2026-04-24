import type { BlockProps } from "@/blocks/types";
import { Clock, Eye } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "Rethinking Component Architecture", description: "Why atomic design principles still matter in the age of AI-generated code.", label: "Architecture · 7 min" },
  { title: "Zero to Production in 48 Hours", description: "Our journey launching a new product with a two-person team.", label: "Startup · 4 min" },
  { title: "Color Theory for Developers", description: "Understanding HSL, contrast ratios, and accessible palettes.", label: "Design · 6 min" },
];

export default function Blog102(props: BlockProps) {
  const {
    theme,
    heading = "Featured Stories",
    subheading = "Curated reads for builders",
    items = DEFAULT_ITEMS,
  } = props;

  return (
    <section
      className="px-5 py-20"
      style={{
        background: theme?.background ?? "linear-gradient(180deg, #0d0d1a 0%, #1a1a3e 100%)",
        color: theme?.foreground ?? "#e2e8f0",
      }}
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-2">{heading}</h2>
        <p className="text-sm opacity-60 mb-10">{subheading}</p>
        <div className="space-y-6">
          {items.slice(0, 3).map((item, i) => (
            <article
              key={i}
              className="flex flex-col sm:flex-row gap-5 rounded-2xl p-5 backdrop-blur-lg border border-white/10 hover:border-white/20 transition-colors"
              style={{ background: "rgba(255,255,255,0.05)" }}
            >
              <div
                className="w-full sm:w-48 h-32 rounded-xl flex-shrink-0"
                style={{ background: `linear-gradient(${120 + i * 40}deg, ${theme?.primary ?? "#6366f1"}, ${theme?.accent ?? "#ec4899"})` }}
              />
              <div className="flex flex-col justify-center">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-1 text-sm opacity-60 line-clamp-2">{item.description}</p>
                <div className="flex items-center gap-4 mt-3 text-xs opacity-50">
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{String(item.label)}</span>
                  <span className="flex items-center gap-1"><Eye className="w-3 h-3" />2.{i + 1}k views</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
