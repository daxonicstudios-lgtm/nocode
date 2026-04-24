import type { BlockProps } from "@/blocks/types";
import { Star, ArrowRight } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "How We Reduced Load Time by 70%", description: "A deep dive into our performance optimization journey from 4s to 1.2s.", label: "Performance", value: "Editor Pick" },
];

export default function Blog160(props: BlockProps) {
  const { theme, heading = "Featured Story", subheading = "Hand-picked by our editors", items = DEFAULT_ITEMS, buttonText = "Read the full story", buttonUrl = "#" } = props;

  const featured = items[0];

  return (
    <section style={{ backgroundColor: theme?.background ?? "#e0e0e0", color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-3xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Star className="w-5 h-5" style={{ color: theme?.primary ?? "#f59e0b" }} />
          <h2 className="text-3xl sm:text-4xl font-bold">{heading}</h2>
        </div>
        <p className="text-sm opacity-60 mb-10">{subheading}</p>
        <article
          className="rounded-3xl p-8 sm:p-12"
          style={{ backgroundColor: theme?.background ?? "#e0e0e0", boxShadow: "14px 14px 28px #bcbcbc, -14px -14px 28px #ffffff" }}
        >
          <div
            className="aspect-video rounded-xl mb-6"
            style={{ backgroundColor: theme?.background ?? "#e0e0e0", boxShadow: "inset 8px 8px 16px #bcbcbc, inset -8px -8px 16px #ffffff" }}
          />
          <span className="text-xs font-bold uppercase tracking-wider" style={{ color: theme?.primary ?? "#f59e0b" }}>{featured?.label}</span>
          <h3 className="mt-3 text-2xl font-bold">{featured?.title}</h3>
          <p className="mt-3 opacity-60 leading-relaxed">{featured?.description}</p>
          <a
            href={buttonUrl}
            className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-full text-sm font-bold"
            style={{
              backgroundColor: theme?.background ?? "#e0e0e0",
              boxShadow: "4px 4px 8px #bcbcbc, -4px -4px 8px #ffffff",
              color: theme?.primary ?? "#f59e0b",
            }}
          >
            {buttonText} <ArrowRight className="w-4 h-4" />
          </a>
        </article>
      </div>
    </section>
  );
}
