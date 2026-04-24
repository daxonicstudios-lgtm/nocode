import type { BlockProps } from "@/blocks/types";
import { ArrowRight } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "LESS IS MORE", description: "A manifesto for building products that respect your users' time and attention.", label: "Manifesto", value: "Jan 2026" },
  { title: "SPEED AS A FEATURE", description: "Performance is not a technical concern. It is a product decision that defines user trust.", label: "Perspective", value: "Feb 2026" },
  { title: "THE END OF TEMPLATES", description: "AI-assembled websites will make static templates obsolete within two years.", label: "Prediction", value: "Mar 2026" },
];

export default function Blog114(props: BlockProps) {
  const {
    theme,
    heading = "Bold Takes",
    subheading = "Provocative opinions backed by experience",
    buttonText = "Read take",
    buttonUrl = "#",
    items = DEFAULT_ITEMS,
  } = props;

  return (
    <section className="px-5 py-24" style={{ backgroundColor: theme?.background ?? "#0a0a0a", color: theme?.foreground ?? "#fafafa" }}>
      <div className="max-w-4xl mx-auto">
        <h2
          className="text-4xl font-black uppercase tracking-widest mb-3 border-b pb-6"
          style={{ borderColor: `${theme?.foreground ?? "#fafafa"}20` }}
        >
          {heading}
        </h2>
        <p className="text-sm opacity-30 mb-16">{subheading}</p>
        {items.slice(0, 3).map((item, i) => (
          <a key={i} href={buttonUrl} className="block group">
            <article
              className="py-8 border-b"
              style={{ borderColor: `${theme?.foreground ?? "#fafafa"}10` }}
            >
              <div className="flex items-baseline justify-between mb-2">
                <span className="text-xs font-mono tracking-widest opacity-30">
                  {String(item.label)}
                </span>
                <span className="text-xs opacity-20">{String(item.value)}</span>
              </div>
              <h3 className="text-3xl sm:text-5xl font-black uppercase tracking-wider group-hover:tracking-[0.15em] transition-all">
                {item.title}
              </h3>
              <p className="mt-3 text-sm opacity-40 max-w-xl">{item.description}</p>
              <span
                className="mt-3 inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider"
                style={{ color: theme?.primary ?? "#ef4444" }}
              >
                {buttonText} <ArrowRight className="w-3 h-3" />
              </span>
            </article>
          </a>
        ))}
      </div>
    </section>
  );
}
