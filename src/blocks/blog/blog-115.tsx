import type { BlockProps } from "@/blocks/types";
import { Minus, ArrowRight } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "The Founder's Dilemma", description: "When to build vs. when to buy. A framework for early-stage decisions.", label: "Startup" },
  { title: "Writing for Engineers", description: "How better documentation leads to faster shipping and fewer bugs.", label: "Communication" },
  { title: "Remote Work, Two Years Later", description: "Data from 500 companies on what actually works in distributed teams.", label: "Research" },
];

export default function Blog115(props: BlockProps) {
  const {
    theme,
    heading = "The Observer",
    subheading = "Weekly perspectives on tech and business",
    bodyText = "Sharp analysis from people who build and ship products every day.",
    buttonText = "Read more",
    buttonUrl = "#",
    items = DEFAULT_ITEMS,
  } = props;

  return (
    <section className="px-5 py-24" style={{ backgroundColor: theme?.background ?? "#fffbeb", color: theme?.foreground ?? "#1c1917" }}>
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-6xl sm:text-7xl font-serif font-bold italic">{heading}</h2>
        <p className="mt-3 text-sm opacity-40 font-mono">{subheading}</p>
        <Minus className="w-12 h-12 mx-auto mt-4 opacity-20" />
        <p className="mt-4 text-base opacity-40 max-w-md mx-auto">{bodyText}</p>
      </div>
      <div className="max-w-3xl mx-auto space-y-12">
        {items.slice(0, 3).map((item, i) => (
          <article key={i} className="border-l-2 pl-6" style={{ borderColor: theme?.primary ?? "#b91c1c" }}>
            <span className="text-xs font-mono uppercase tracking-widest opacity-30">
              {String(item.label)}
            </span>
            <a href={buttonUrl}>
              <h3 className="mt-2 text-2xl sm:text-3xl font-bold hover:underline">
                {item.title}
              </h3>
            </a>
            <p className="mt-2 text-base opacity-50 leading-relaxed">{item.description}</p>
            <a
              href={buttonUrl}
              className="mt-3 inline-flex items-center gap-1 text-sm font-semibold"
              style={{ color: theme?.primary ?? "#b91c1c" }}
            >
              {buttonText} <ArrowRight className="w-4 h-4" />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
