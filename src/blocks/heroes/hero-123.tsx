import type { BlockProps } from "@/blocks/types";
import { UtensilsCrossed, Clock, MapPin, Star } from "lucide-react";

export default function Hero123(props: BlockProps) {
  const {
    theme,
    heading = "A Culinary Journey Through Authentic Flavors",
    subheading = "Farm-to-table dining crafted with passion. Seasonal menus that celebrate local ingredients and timeless recipes.",
    buttonText = "Reserve a Table",
    buttonUrl = "#",
    secondaryButtonText = "View Menu",
    secondaryButtonUrl = "#",
    imageUrl,
  } = props;

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#1a1410", color: theme?.foreground ?? "#faf5ef" }}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background image with blur */}
      {imageUrl ? (
        <div className="absolute inset-0">
          <img
            src={imageUrl}
            alt=""
            className="w-full h-full object-cover blur-sm scale-105"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
      ) : (
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse at 30% 50%, ${theme?.primary ?? "#8b5e3c"}33 0%, transparent 60%), radial-gradient(ellipse at 70% 30%, ${theme?.accent ?? "#d4a574"}22 0%, transparent 50%)`,
          }}
        />
      )}

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-5 py-20 text-center">
        {/* Stars */}
        <div className="flex items-center justify-center gap-1 mb-6">
          {[1, 2, 3, 4, 5].map((i) => (
            <Star
              key={i}
              className="w-4 h-4 fill-current"
              style={{ color: theme?.accent ?? "#d4a574" }}
            />
          ))}
        </div>

        <div
          className="inline-flex items-center gap-2 text-sm font-medium tracking-[0.3em] uppercase mb-8 opacity-70"
        >
          <span className="w-8 h-px" style={{ backgroundColor: theme?.accent ?? "#d4a574" }} />
          Fine Dining Experience
          <span className="w-8 h-px" style={{ backgroundColor: theme?.accent ?? "#d4a574" }} />
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif font-bold tracking-tight leading-tight">
          {heading}
        </h1>

        <p className="mt-6 text-lg md:text-xl opacity-60 max-w-2xl mx-auto leading-relaxed">
          {subheading}
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={buttonUrl}
            style={{ backgroundColor: theme?.primary ?? "#8b5e3c" }}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded text-white font-semibold hover:opacity-90 transition-opacity"
          >
            <UtensilsCrossed className="w-5 h-5" />
            {buttonText}
          </a>
          <a
            href={secondaryButtonUrl}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded font-semibold border border-current opacity-60 hover:opacity-100 transition-opacity"
          >
            {secondaryButtonText}
          </a>
        </div>

        {/* Info cards */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
          <div className="flex flex-col items-center gap-2 p-4 rounded-lg backdrop-blur-sm bg-white/5">
            <Clock className="w-5 h-5" style={{ color: theme?.accent ?? "#d4a574" }} />
            <span className="text-sm font-medium">Open Daily</span>
            <span className="text-xs opacity-50">11:00 AM — 11:00 PM</span>
          </div>
          <div className="flex flex-col items-center gap-2 p-4 rounded-lg backdrop-blur-sm bg-white/5">
            <MapPin className="w-5 h-5" style={{ color: theme?.accent ?? "#d4a574" }} />
            <span className="text-sm font-medium">Downtown</span>
            <span className="text-xs opacity-50">42 Heritage Lane</span>
          </div>
          <div className="flex flex-col items-center gap-2 p-4 rounded-lg backdrop-blur-sm bg-white/5">
            <UtensilsCrossed className="w-5 h-5" style={{ color: theme?.accent ?? "#d4a574" }} />
            <span className="text-sm font-medium">Seasonal Menu</span>
            <span className="text-xs opacity-50">Updated Weekly</span>
          </div>
        </div>
      </div>
    </section>
  );
}
