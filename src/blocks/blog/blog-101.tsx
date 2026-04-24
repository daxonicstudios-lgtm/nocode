import type { BlockProps } from "@/blocks/types";
import { ArrowRight } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "The Future of AI Design", description: "How machine learning is reshaping creative workflows and empowering designers.", label: "AI · 6 min read" },
  { title: "Building Resilient Systems", description: "Lessons learned from scaling infrastructure to serve millions of users.", label: "Engineering · 8 min read" },
  { title: "Design Tokens at Scale", description: "A practical guide to maintaining consistency across products.", label: "Design · 5 min read" },
];

export default function Blog101(props: BlockProps) {
  const {
    theme,
    heading = "Latest Articles",
    subheading = "Insights from our team",
    buttonText = "Read More",
    buttonUrl = "#",
    items = DEFAULT_ITEMS,
  } = props;

  return (
    <section
      className="px-5 py-20"
      style={{
        background: theme?.background
          ? `linear-gradient(135deg, ${theme.background}, ${theme.secondary ?? "#1a1a2e"})`
          : "linear-gradient(135deg, #0f0c29, #302b63, #24243e)",
        color: theme?.foreground ?? "#ffffff",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <p className="text-sm font-medium uppercase tracking-widest opacity-60 mb-2">{subheading}</p>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-12">{heading}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.slice(0, 3).map((item, i) => (
            <article
              key={i}
              className="rounded-2xl p-6 backdrop-blur-xl border border-white/10 transition-transform hover:-translate-y-1"
              style={{ background: "rgba(255,255,255,0.08)" }}
            >
              <div
                className="aspect-video rounded-xl mb-4"
                style={{ background: `linear-gradient(135deg, ${theme?.primary ?? "#6366f1"}, ${theme?.accent ?? "#a855f7"})` }}
              />
              <p className="text-xs font-medium uppercase tracking-wider opacity-50">{String(item.label)}</p>
              <h3 className="mt-2 text-lg font-semibold leading-snug">{item.title}</h3>
              <p className="mt-2 text-sm opacity-70 line-clamp-2">{item.description}</p>
              <a href={buttonUrl} className="mt-4 inline-flex items-center gap-1 text-sm font-medium" style={{ color: theme?.primary ?? "#818cf8" }}>
                {buttonText} <ArrowRight className="w-4 h-4" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
