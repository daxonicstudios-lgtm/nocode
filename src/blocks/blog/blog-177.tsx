import type { BlockProps } from "@/blocks/types";
import { ArrowRight } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "A Meditation on Craft", description: "What centuries of artisan tradition teach us about building digital products with care.", label: "Volume XII", value: "Featured" },
];

export default function Blog177(props: BlockProps) {
  const { theme, heading = "The Latest", subheading = "From our editorial desk", items = DEFAULT_ITEMS, buttonText = "Read the piece", buttonUrl = "#" } = props;

  const featured = items[0];

  return (
    <section style={{ backgroundColor: theme?.background ?? "#1a1612", color: theme?.foreground ?? "#e5ddd0" }} className="px-6 py-24">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-[10px] uppercase tracking-[0.5em] opacity-40 mb-4" style={{ fontFamily: "Georgia, serif" }}>{subheading}</p>
        <h2 className="text-4xl sm:text-5xl font-light mb-20" style={{ fontFamily: "Georgia, serif" }}>{heading}</h2>
        <article className="group">
          <div className="aspect-[16/9] rounded-sm mb-8" style={{ backgroundColor: theme?.secondary ?? "#2d261f" }} />
          <span className="text-[10px] uppercase tracking-[0.4em] opacity-40" style={{ fontFamily: "Georgia, serif" }}>{featured?.label}</span>
          <h3 className="mt-3 text-2xl sm:text-3xl font-light leading-snug" style={{ fontFamily: "Georgia, serif" }}>{featured?.title}</h3>
          <p className="mt-4 text-sm opacity-40 leading-loose max-w-lg mx-auto" style={{ fontFamily: "Georgia, serif" }}>{featured?.description}</p>
          <a href={buttonUrl} className="inline-flex items-center gap-2 mt-8 text-xs uppercase tracking-[0.2em] opacity-50 hover:opacity-100 transition-opacity" style={{ fontFamily: "Georgia, serif" }}>
            {buttonText} <ArrowRight className="w-3 h-3" />
          </a>
        </article>
      </div>
    </section>
  );
}
