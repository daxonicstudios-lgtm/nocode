import type { BlockProps } from "@/blocks/types";
import { ArrowRight } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "The Death of the Homepage", description: "Why landing pages are replacing traditional homepages for growth-stage startups.", label: "Opinion · Issue 47" },
  { title: "Code as Craft", description: "Treating software engineering as an artisan discipline, not a factory process.", label: "Essay · Issue 46" },
  { title: "Digital Minimalism in Product", description: "Removing features to create better user experiences.", label: "Philosophy · Issue 45" },
];

export default function Blog111(props: BlockProps) {
  const {
    theme,
    heading = "The Editorial",
    subheading = "Long-form thinking on technology and craft",
    bodyText = "Thoughtful essays on building products, leading teams, and shaping technology.",
    items = DEFAULT_ITEMS,
    buttonUrl = "#",
  } = props;

  return (
    <section className="px-5 py-24" style={{ backgroundColor: theme?.background ?? "#fafaf9", color: theme?.foreground ?? "#1c1917" }}>
      <div className="max-w-4xl mx-auto">
        <p className="text-xs font-mono uppercase tracking-[0.3em] opacity-40 mb-4">{subheading}</p>
        <h2 className="text-5xl sm:text-7xl font-black tracking-tighter leading-none mb-4">{heading}</h2>
        <p className="text-base opacity-40 mb-16 max-w-xl">{bodyText}</p>
        <div className="divide-y" style={{ borderColor: `${theme?.foreground ?? "#1c1917"}15` }}>
          {items.slice(0, 3).map((item, i) => (
            <article key={i} className="py-10 group">
              <p className="text-xs font-mono uppercase tracking-widest opacity-30 mb-3">{String(item.label)}</p>
              <a href={buttonUrl} className="block">
                <h3 className="text-3xl sm:text-4xl font-black tracking-tight group-hover:underline decoration-2 underline-offset-4">{item.title}</h3>
              </a>
              <p className="mt-3 text-lg opacity-60 max-w-2xl">{item.description}</p>
              <a href={buttonUrl} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold" style={{ color: theme?.primary ?? "#dc2626" }}>
                Read essay <ArrowRight className="w-4 h-4" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
