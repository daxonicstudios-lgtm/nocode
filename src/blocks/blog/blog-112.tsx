import type { BlockProps } from "@/blocks/types";
import { ArrowRight } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "Why We Chose Simplicity", description: "In a world of feature bloat, we went the other direction. Here is what happened.", label: "Strategy", value: "12 min read" },
  { title: "Shipping Weekly for a Year", description: "52 consecutive weeks of releases. The rituals that made it possible.", label: "Process", value: "8 min read" },
  { title: "The Quiet Power of Constraints", description: "How working within strict limits produced our best creative work.", label: "Culture", value: "6 min read" },
];

export default function Blog112(props: BlockProps) {
  const {
    theme,
    heading = "Dispatches",
    subheading = "Reflections on building products that matter",
    buttonText = "Continue reading",
    buttonUrl = "#",
    items = DEFAULT_ITEMS,
  } = props;

  return (
    <section className="px-5 py-24" style={{ backgroundColor: theme?.background ?? "#ffffff", color: theme?.foreground ?? "#0a0a0a" }}>
      <div className="max-w-3xl mx-auto">
        <h2 className="text-6xl sm:text-8xl font-black tracking-tighter mb-4">{heading}</h2>
        <p className="text-sm opacity-40 mb-20">{subheading}</p>
        {items.slice(0, 3).map((item, i) => (
          <article key={i} className="mb-14">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs font-mono uppercase tracking-widest opacity-30">
                {String(item.label)}
              </span>
              <hr className="flex-1 border-t" style={{ borderColor: `${theme?.foreground ?? "#0a0a0a"}10` }} />
              <span className="text-xs opacity-30">{String(item.value)}</span>
            </div>
            <a href={buttonUrl}>
              <h3 className="text-2xl sm:text-3xl font-black leading-tight hover:opacity-70 transition-opacity">
                {item.title}
              </h3>
            </a>
            <p className="mt-3 text-base opacity-50 leading-relaxed">{item.description}</p>
            <a
              href={buttonUrl}
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold"
              style={{ color: theme?.primary ?? "#dc2626" }}
            >
              {buttonText} <ArrowRight className="w-4 h-4" />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
