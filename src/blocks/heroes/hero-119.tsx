import type { BlockProps } from "@/blocks/types";
import { ArrowRight, ShoppingBag, Heart } from "lucide-react";

export default function Hero119(props: BlockProps) {
  const {
    theme,
    heading = "Effortless Elegance",
    subheading = "Timeless silhouettes meet modern craftsmanship. Discover the new collection designed for those who live boldly.",
    bodyText = "SS26 COLLECTION",
    buttonText = "Shop Collection",
    buttonUrl = "#",
    secondaryButtonText = "Lookbook",
    secondaryButtonUrl = "#",
    imageUrl,
  } = props;

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#1a1a1a", color: theme?.foreground ?? "#f5f5f0" }}
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-5 py-20"
    >
      {/* Circular image reveal */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative w-[70vw] h-[70vw] max-w-[600px] max-h-[600px] md:w-[45vw] md:h-[45vw] rounded-full overflow-hidden opacity-30">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt="Fashion collection"
              className="w-full h-full object-cover"
            />
          ) : (
            <div
              className="w-full h-full"
              style={{
                background: `radial-gradient(circle, ${theme?.primary ?? "#c084fc"}30, ${theme?.background ?? "#1a1a1a"})`,
              }}
            />
          )}
        </div>
        {/* Circle ring decorations */}
        <div
          className="absolute w-[75vw] h-[75vw] max-w-[650px] max-h-[650px] md:w-[50vw] md:h-[50vw] rounded-full border opacity-10"
          style={{ borderColor: theme?.primary ?? "#c084fc" }}
        />
        <div
          className="absolute w-[85vw] h-[85vw] max-w-[740px] max-h-[740px] md:w-[58vw] md:h-[58vw] rounded-full border opacity-[0.04]"
          style={{ borderColor: theme?.foreground ?? "#f5f5f0" }}
        />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        {/* Season label */}
        <div
          className="text-xs font-semibold tracking-[0.4em] uppercase mb-8 opacity-60"
        >
          {bodyText}
        </div>

        <h1 className="text-5xl sm:text-7xl md:text-9xl font-light tracking-tight leading-[0.95]">
          {heading.split(" ").map((word, i) => (
            <span key={i} className="block">
              {i === 1 ? (
                <em className="font-serif italic" style={{ color: theme?.primary ?? "#c084fc" }}>
                  {word}
                </em>
              ) : (
                word
              )}
            </span>
          ))}
        </h1>

        <p className="mt-8 text-base sm:text-lg opacity-50 leading-relaxed max-w-md mx-auto">
          {subheading}
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={buttonUrl}
            style={{ backgroundColor: theme?.primary ?? "#c084fc", color: "#000000" }}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-opacity"
          >
            <ShoppingBag className="w-4 h-4" />
            {buttonText}
          </a>
          <a
            href={secondaryButtonUrl}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold border border-current/20 hover:border-current/50 transition-colors"
          >
            {secondaryButtonText}
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Minimal footer-style details */}
        <div className="mt-16 flex items-center justify-center gap-8 text-xs uppercase tracking-widest opacity-30">
          <span>Free Shipping</span>
          <Heart className="w-3 h-3" />
          <span>Sustainable</span>
          <Heart className="w-3 h-3" />
          <span>Handcrafted</span>
        </div>
      </div>
    </section>
  );
}
