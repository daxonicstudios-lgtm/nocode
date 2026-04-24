import type { BlockProps } from "@/blocks/types";
import { ArrowRight } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "Pixel Perfect is Dead", description: "Why design fidelity matters less than design intent in responsive systems.", label: "01" },
  { title: "The Empathy Gap in Tech", description: "Building for users whose reality looks nothing like Silicon Valley.", label: "02" },
  { title: "Complexity Budget", description: "Every team has a finite amount of complexity they can manage. Spend it wisely.", label: "03" },
];

export default function Blog116(props: BlockProps) {
  const {
    theme,
    heading = "Three Things",
    subheading = "A curated trio of essential reads each week",
    buttonText = "Read article",
    buttonUrl = "#",
    items = DEFAULT_ITEMS,
  } = props;

  return (
    <section className="px-5 py-24" style={{ backgroundColor: theme?.background ?? "#18181b", color: theme?.foreground ?? "#fafafa" }}>
      <div className="max-w-5xl mx-auto">
        <h2 className="text-5xl sm:text-7xl font-black">{heading}</h2>
        <p className="mt-2 text-base opacity-30 mb-20">{subheading}</p>
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-0 md:divide-x"
          style={{ borderColor: `${theme?.foreground ?? "#fafafa"}10` }}
        >
          {items.slice(0, 3).map((item, i) => (
            <article
              key={i}
              className="px-0 md:px-8 first:pl-0 last:pr-0 py-6 md:py-0"
              style={{ borderColor: `${theme?.foreground ?? "#fafafa"}10` }}
            >
              <span className="text-7xl font-black opacity-10">{String(item.label)}</span>
              <a href={buttonUrl}>
                <h3 className="mt-4 text-xl font-black hover:underline decoration-2">
                  {item.title}
                </h3>
              </a>
              <p className="mt-3 text-sm opacity-40 leading-relaxed">{item.description}</p>
              <a
                href={buttonUrl}
                className="mt-4 inline-flex items-center gap-1 text-xs font-bold"
                style={{ color: theme?.primary ?? "#818cf8" }}
              >
                {buttonText} <ArrowRight className="w-3 h-3" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
