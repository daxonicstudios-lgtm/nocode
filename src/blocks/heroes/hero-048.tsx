import type { BlockProps } from "@/blocks/types";
import { UtensilsCrossed, Star, ArrowRight } from "lucide-react";

export default function Hero048(props: BlockProps) {
  const {
    theme,
    heading = "Taste the Extraordinary",
    subheading = "From farm-fresh ingredients to world-class cuisine, every dish tells a story. Reserve your table and savor the experience.",
    buttonText = "Reserve a Table",
    buttonUrl = "#",
    secondaryButtonText = "View Menu",
    secondaryButtonUrl = "#",
  } = props;

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#1c1917", color: theme?.foreground ?? "#fafaf9" }}
      className="min-h-[80vh] flex items-center justify-center px-5 py-20 relative overflow-hidden"
    >
      {/* Warm ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-3xl opacity-10"
        style={{ backgroundColor: theme?.accent ?? "#f59e0b" }}
      />

      <div className="max-w-2xl mx-auto text-center relative z-10">
        {/* Decorative top */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="w-12 h-px opacity-30" style={{ backgroundColor: theme?.accent ?? "#f59e0b" }} />
          <UtensilsCrossed className="w-8 h-8" style={{ color: theme?.accent ?? "#f59e0b" }} />
          <div className="w-12 h-px opacity-30" style={{ backgroundColor: theme?.accent ?? "#f59e0b" }} />
        </div>

        <p
          className="text-xs font-medium uppercase tracking-[0.25em] mb-4"
          style={{ color: theme?.accent ?? "#f59e0b" }}
        >
          Fine Dining Experience
        </p>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold tracking-tight leading-tight italic">
          {heading}
        </h1>

        <p className="mt-6 text-base sm:text-lg opacity-60 leading-relaxed max-w-lg mx-auto">
          {subheading}
        </p>

        {/* Rating */}
        <div className="mt-8 flex items-center justify-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className="w-4 h-4 fill-current"
              style={{ color: theme?.accent ?? "#f59e0b" }}
            />
          ))}
          <span className="ml-2 text-sm opacity-50">4.9 on Google Reviews</span>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={buttonUrl}
            style={{ backgroundColor: theme?.accent ?? "#f59e0b", color: "#1c1917" }}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-base hover:opacity-90 transition-opacity"
          >
            {buttonText}
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href={secondaryButtonUrl}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-medium text-base border border-white/20 hover:border-white/40 transition-colors"
          >
            {secondaryButtonText}
          </a>
        </div>

        {/* Hours hint */}
        <p className="mt-10 text-sm opacity-40">
          Open Tuesday - Sunday, 5:00 PM - 11:00 PM
        </p>
      </div>
    </section>
  );
}
