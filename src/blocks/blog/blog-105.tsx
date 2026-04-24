import type { BlockProps } from "@/blocks/types";
import { Sparkles } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "Web Performance in 2026", description: "Core Web Vitals benchmarks have shifted. Here is what you need to know.", label: "Performance" },
  { title: "State Management Showdown", description: "Comparing Zustand, Jotai, and signals for modern React apps.", label: "React" },
  { title: "Micro-frontends Done Right", description: "Module federation patterns that actually work in production.", label: "Architecture" },
];

export default function Blog105(props: BlockProps) {
  const {
    theme,
    heading = "Editor's Picks",
    subheading = "Handpicked by our editorial team",
    buttonText = "Explore",
    buttonUrl = "#",
    items = DEFAULT_ITEMS,
  } = props;

  return (
    <section
      className="px-5 py-20 relative overflow-hidden"
      style={{
        background: theme?.background ?? "#0a0a1a",
        color: theme?.foreground ?? "#f8fafc",
      }}
    >
      <div className="absolute inset-0 opacity-30" style={{ background: `radial-gradient(ellipse at 20% 50%, ${theme?.primary ?? "#6366f1"}40, transparent 70%)` }} />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex items-center gap-2 mb-2">
          <Sparkles className="w-5 h-5" style={{ color: theme?.accent ?? "#f59e0b" }} />
          <p className="text-sm font-semibold uppercase tracking-widest opacity-70">{subheading}</p>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold mb-10">{heading}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.slice(0, 3).map((item, i) => (
            <article
              key={i}
              className="rounded-2xl p-6 backdrop-blur-2xl border border-white/10 hover:scale-[1.02] transition-transform"
              style={{ background: "rgba(255,255,255,0.05)" }}
            >
              <span className="text-xs font-bold uppercase tracking-wider" style={{ color: theme?.accent ?? "#f59e0b" }}>
                {String(item.label)}
              </span>
              <h3 className="mt-3 text-xl font-bold leading-tight">{item.title}</h3>
              <p className="mt-2 text-sm opacity-60">{item.description}</p>
              <a
                href={buttonUrl}
                className="mt-4 inline-block text-sm font-semibold px-4 py-2 rounded-full border border-white/20 hover:bg-white/10 transition-colors"
              >
                {buttonText}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
