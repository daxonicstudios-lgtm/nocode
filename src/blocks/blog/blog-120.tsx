import type { BlockProps } from "@/blocks/types";
import { Quote, ArrowRight } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "Why I Quit Big Tech", description: "After a decade at FAANG companies, I walked away. This is my story and what I learned about purpose.", label: "Personal · 15 min" },
  { title: "The Art of Saying No", description: "Product management is about what you choose not to build. A guide to principled prioritization.", label: "Product · 8 min" },
];

export default function Blog120(props: BlockProps) {
  const {
    theme,
    heading = "Voices",
    subheading = "Personal essays from the people building the future",
    bodyText = "First-person stories that reveal the human side of technology.",
    buttonText = "Read story",
    buttonUrl = "#",
    items = DEFAULT_ITEMS,
  } = props;

  return (
    <section className="px-5 py-24" style={{ backgroundColor: theme?.background ?? "#1a1a1a", color: theme?.foreground ?? "#e5e5e5" }}>
      <div className="max-w-4xl mx-auto">
        <Quote className="w-10 h-10 mb-6 opacity-20" />
        <h2 className="text-4xl sm:text-6xl font-serif italic mb-2">{heading}</h2>
        <p className="text-sm opacity-30 mb-4">{subheading}</p>
        <p className="text-base opacity-30 max-w-md mb-16">{bodyText}</p>
        {items.slice(0, 2).map((item, i) => (
          <article
            key={i}
            className="py-12 border-t"
            style={{ borderColor: `${theme?.foreground ?? "#e5e5e5"}10` }}
          >
            <p className="text-xs font-mono tracking-widest opacity-20 mb-4">
              {String(item.label)}
            </p>
            <a href={buttonUrl}>
              <h3 className="text-3xl sm:text-4xl font-serif italic leading-snug hover:opacity-70 transition-opacity">
                {item.title}
              </h3>
            </a>
            <p className="mt-4 text-lg opacity-40 leading-relaxed max-w-2xl">
              {item.description}
            </p>
            <div className="mt-6 flex items-center gap-4">
              <div className="h-px flex-1 max-w-[64px]" style={{ backgroundColor: theme?.primary ?? "#ef4444" }} />
              <a
                href={buttonUrl}
                className="inline-flex items-center gap-1 text-sm font-semibold"
                style={{ color: theme?.primary ?? "#ef4444" }}
              >
                {buttonText} <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
