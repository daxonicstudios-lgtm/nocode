import type { BlockProps } from "@/blocks/types";
import { ShoppingBag, ArrowRight, Star } from "lucide-react";

export default function Hero086(props: BlockProps) {
  const {
    theme,
    heading = "Curated Style for the Modern Woman",
    subheading = "Discover handpicked collections that celebrate individuality. Each piece tells a story of craftsmanship, elegance, and self-expression.",
    buttonText = "Shop Collection",
    buttonUrl = "#",
    secondaryButtonText = "Lookbook",
    secondaryButtonUrl = "#",
    imageUrl,
  } = props;

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#faf9f7", color: theme?.foreground ?? "#1c1917" }}
      className="min-h-[80vh] flex items-center px-5 py-16"
    >
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row-reverse items-center gap-10 md:gap-16">
        {/* Text side (right on desktop) */}
        <div className="flex-1 w-full">
          <p className="text-xs uppercase tracking-[0.3em] mb-6 opacity-50 font-medium">Spring/Summer 2026</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-light leading-tight tracking-tight"
            style={{ fontStyle: "italic" }}
          >
            {heading}
          </h1>
          <p className="mt-6 text-base sm:text-lg opacity-60 leading-relaxed max-w-md">
            {subheading}
          </p>

          <div className="mt-6 flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-current" style={{ color: theme?.accent ?? "#d4a574" }} />
            ))}
            <span className="ml-2 text-sm opacity-50">4.9 from 2,400+ reviews</span>
          </div>

          <div className="mt-8 flex flex-wrap gap-4 items-center">
            <a
              href={buttonUrl}
              style={{ backgroundColor: theme?.primary ?? "#1c1917" }}
              className="inline-flex items-center gap-2 px-8 py-3.5 text-white font-medium tracking-wide text-sm uppercase hover:opacity-90 transition-opacity"
            >
              <ShoppingBag className="w-4 h-4" />
              {buttonText}
            </a>
            <a
              href={secondaryButtonUrl}
              className="inline-flex items-center gap-2 text-sm uppercase tracking-wide font-medium opacity-70 hover:opacity-100 transition-opacity underline underline-offset-4"
            >
              {secondaryButtonText}
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="mt-10 flex gap-8 text-xs uppercase tracking-wider opacity-40">
            <span>Free shipping</span>
            <span>Easy returns</span>
            <span>Sustainable fabrics</span>
          </div>
        </div>

        {/* Image side (left on desktop) */}
        <div className="flex-1 w-full">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt="Fashion collection"
              className="w-full h-[400px] sm:h-[500px] md:h-[550px] object-cover"
            />
          ) : (
            <div
              className="w-full h-[400px] sm:h-[500px] md:h-[550px] flex items-center justify-center relative"
              style={{ backgroundColor: theme?.accent ?? "#f5ebe0" }}
            >
              <div className="absolute top-8 left-8 w-16 h-16 border opacity-20" style={{ borderColor: theme?.primary ?? "#1c1917" }} />
              <div className="absolute bottom-8 right-8 w-16 h-16 border opacity-20" style={{ borderColor: theme?.primary ?? "#1c1917" }} />
              <div className="text-center">
                <ShoppingBag className="w-16 h-16 mx-auto mb-4 opacity-30" />
                <p className="text-sm uppercase tracking-[0.3em] opacity-40 font-medium">Fashion Photography</p>
                <p className="text-xs opacity-30 mt-2">Spring Collection 2026</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
