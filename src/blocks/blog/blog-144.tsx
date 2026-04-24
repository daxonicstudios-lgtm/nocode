import type { BlockProps } from "@/blocks/types";
import { Scissors, ArrowUpRight } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "Spring 2026 Trend Report", description: "The colors, silhouettes, and textures defining this season on runways worldwide.", label: "Trends" },
  { title: "Capsule Wardrobe Essentials", description: "Build a versatile wardrobe with just 30 carefully chosen pieces that work together.", label: "Style Guide" },
  { title: "Sustainable Fashion Brands to Watch", description: "Emerging labels leading the charge on ethical production and transparent sourcing.", label: "Sustainability" },
];

export default function Blog144(props: BlockProps) {
  const {
    theme,
    heading = "Style Edit",
    subheading = "Fashion insights and curated picks",
    bodyText = "Exploring the intersection of personal style, sustainability, and culture.",
    buttonText = "Read",
    buttonUrl = "#",
    items = DEFAULT_ITEMS,
  } = props;

  return (
    <section className="px-5 py-20" style={{ backgroundColor: theme?.background ?? "#fdf2f8", color: theme?.foreground ?? "#4a044e" }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <Scissors className="w-6 h-6 mx-auto mb-3 opacity-40" />
          <h2 className="text-4xl sm:text-5xl font-serif italic">{heading}</h2>
          <p className="mt-2 text-sm opacity-50">{subheading}</p>
          <p className="mt-3 text-sm opacity-30 max-w-md mx-auto">{bodyText}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.slice(0, 3).map((item, i) => (
            <a key={i} href={buttonUrl} className="group block">
              <div
                className="aspect-[3/4] rounded-2xl mb-4"
                style={{ backgroundColor: theme?.secondary ?? "#fce7f3" }}
              />
              <span
                className="text-xs font-semibold tracking-wider uppercase"
                style={{ color: theme?.primary ?? "#be185d" }}
              >
                {String(item.label)}
              </span>
              <h3 className="mt-1 text-lg font-bold group-hover:underline">
                {item.title}
              </h3>
              <p className="mt-1 text-sm opacity-50 line-clamp-2">
                {item.description}
              </p>
              <span
                className="mt-2 inline-flex items-center gap-1 text-xs font-semibold"
                style={{ color: theme?.primary ?? "#be185d" }}
              >
                {buttonText} <ArrowUpRight className="w-3 h-3" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
