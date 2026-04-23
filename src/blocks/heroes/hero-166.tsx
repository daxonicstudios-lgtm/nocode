import type { BlockProps } from "@/blocks/types";
import { Crown, Car } from "lucide-react";

export default function Hero166(props: BlockProps) {
  const {
    theme,
    heading = "Exceptional Vehicles for Exceptional People",
    subheading = "Curated luxury automobiles from the world's most prestigious marques",
    buttonText = "Explore the Collection",
    buttonUrl = "#",
    items = [
      { title: "180+", description: "Vehicles in Stock" },
      { title: "25+", description: "Premium Brands" },
      { title: "18", description: "Years of Service" },
    ],
  } = props;

  return (
    <section
      className="relative min-h-screen flex items-center px-4 py-20 sm:py-28 overflow-hidden"
      style={{ backgroundColor: theme?.background ?? "#0a0a0a", color: theme?.foreground ?? "#f0ece4" }}
    >
      {/* Gold accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px]"
        style={{ background: `linear-gradient(90deg, transparent, ${theme?.accent ?? "#c9a54e"}, transparent)` }}
      />

      {/* Large decorative text behind */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[18vw] font-black opacity-[0.03] select-none whitespace-nowrap pointer-events-none"
      >
        LUXURY
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Content */}
          <div>
            <div className="inline-flex items-center gap-2 mb-8">
              <Crown className="w-5 h-5" style={{ color: theme?.accent ?? "#c9a54e" }} />
              <span
                className="text-xs font-semibold uppercase tracking-[0.3em]"
                style={{ color: theme?.accent ?? "#c9a54e" }}
              >
                Luxury Auto Gallery
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-light leading-tight mb-6 tracking-tight">
              {heading}
            </h1>

            <div
              className="w-16 h-[1px] mb-6"
              style={{ backgroundColor: theme?.accent ?? "#c9a54e" }}
            />

            <p className="text-base sm:text-lg opacity-60 max-w-lg mb-10 leading-relaxed">
              {subheading}
            </p>

            <a
              href={buttonUrl}
              className="inline-flex items-center gap-3 px-8 py-4 text-sm font-medium uppercase tracking-widest transition-all hover:opacity-90 border"
              style={{
                borderColor: theme?.accent ?? "#c9a54e",
                color: theme?.accent ?? "#c9a54e",
              }}
            >
              <Car className="w-4 h-4" />
              {buttonText}
            </a>
          </div>

          {/* Right: Stats */}
          <div className="flex flex-col gap-0">
            {items.map((item, i) => (
              <div
                key={i}
                className="flex items-baseline gap-6 py-8 border-b"
                style={{ borderColor: `${theme?.foreground ?? "#f0ece4"}12` }}
              >
                <span
                  className="text-5xl sm:text-7xl font-extralight tracking-tight"
                  style={{ color: theme?.accent ?? "#c9a54e" }}
                >
                  {item.title}
                </span>
                <span className="text-sm uppercase tracking-widest opacity-50">
                  {item.description}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom gold line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[1px]"
        style={{ background: `linear-gradient(90deg, transparent, ${theme?.accent ?? "#c9a54e"}40, transparent)` }}
      />
    </section>
  );
}
