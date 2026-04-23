import type { BlockProps } from "@/blocks/types";
import { ShoppingBag, Sparkles, ArrowRight, Truck } from "lucide-react";

export default function Hero067(props: BlockProps) {
  const {
    theme,
    heading = "The New Collection Has Arrived",
    subheading = "Spring / Summer 2026",
    bodyText = "Effortless elegance meets modern design. Discover handcrafted pieces made from sustainable fabrics, designed to make you feel extraordinary every day.",
    buttonText = "Shop New Collection",
    buttonUrl = "#",
    secondaryButtonText = "Lookbook",
    secondaryButtonUrl = "#",
    imageUrl,
  } = props;

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#faf9f7", color: theme?.foreground ?? "#1a1a1a" }}
      className="min-h-[80vh] flex items-center"
    >
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-stretch">
        {/* Text Left */}
        <div className="w-full md:w-1/2 px-6 py-12 md:px-14 lg:px-20 flex flex-col justify-center">
          <p
            className="text-xs font-semibold uppercase tracking-[0.3em] mb-4"
            style={{ color: theme?.accent ?? "#9e7c5a" }}
          >
            {subheading}
          </p>

          <h1
            className="text-3xl sm:text-4xl lg:text-6xl font-light leading-[1.1] tracking-tight"
          >
            {heading}
          </h1>

          <p className="mt-5 text-base opacity-60 leading-relaxed max-w-md">
            {bodyText}
          </p>

          {/* Selling points */}
          <div className="mt-6 flex flex-wrap gap-4 text-sm">
            <span className="flex items-center gap-1.5 opacity-60">
              <Sparkles className="w-4 h-4" style={{ color: theme?.accent ?? "#9e7c5a" }} />
              Sustainable Fabrics
            </span>
            <span className="flex items-center gap-1.5 opacity-60">
              <Truck className="w-4 h-4" style={{ color: theme?.accent ?? "#9e7c5a" }} />
              Free Shipping Over $100
            </span>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <a
              href={buttonUrl}
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 font-medium hover:opacity-90 transition-opacity text-white"
              style={{ backgroundColor: theme?.foreground ?? "#1a1a1a" }}
            >
              <ShoppingBag className="w-4 h-4" />
              {buttonText}
            </a>
            <a
              href={secondaryButtonUrl}
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 font-medium border hover:opacity-80 transition-opacity"
              style={{ borderColor: `${theme?.foreground ?? "#1a1a1a"}30` }}
            >
              {secondaryButtonText}
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Trust badges */}
          <div
            className="mt-8 pt-6 flex gap-6 text-xs uppercase tracking-wider opacity-40 border-t"
            style={{ borderColor: `${theme?.foreground ?? "#1a1a1a"}15` }}
          >
            <span>Vogue Featured</span>
            <span>100% Ethical</span>
            <span>30-Day Returns</span>
          </div>
        </div>

        {/* Image Right */}
        <div className="w-full md:w-1/2 relative">
          {imageUrl ? (
            <img src={imageUrl} alt="Fashion model" className="w-full h-[60vh] md:h-[80vh] object-cover" />
          ) : (
            <div
              className="w-full h-[60vh] md:h-[80vh] flex items-center justify-center"
              style={{
                background: `linear-gradient(160deg, ${theme?.accent ?? "#9e7c5a"}18, ${theme?.primary ?? "#d4a574"}08)`,
              }}
            >
              <ShoppingBag className="w-20 h-20 opacity-15" style={{ color: theme?.accent ?? "#9e7c5a" }} />
            </div>
          )}
          {/* Price tag overlay */}
          <div
            className="absolute top-6 right-6 px-4 py-2 text-sm font-medium rounded-full"
            style={{ backgroundColor: theme?.foreground ?? "#1a1a1a", color: theme?.background ?? "#faf9f7" }}
          >
            New In
          </div>
        </div>
      </div>
    </section>
  );
}
