import type { BlockProps } from "@/blocks/types";
import { Fish, Leaf } from "lucide-react";

export default function Hero153(props: BlockProps) {
  const {
    theme,
    heading = "Omakase",
    subheading = "A journey through flavor, guided by the chef",
    bodyText = "Experience the art of traditional Japanese cuisine. Our master sushi chef selects the finest seasonal ingredients to craft an unforgettable tasting experience.",
    buttonText = "View Menu",
    buttonUrl = "#menu",
    secondaryButtonText = "Reserve a Seat",
    secondaryButtonUrl = "#reserve",
  } = props;

  return (
    <section
      className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden"
      style={{
        backgroundColor: theme?.background ?? "#0d0d0d",
        color: theme?.foreground ?? "#e8e2d8",
      }}
    >
      {/* Subtle vertical lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]">
        <div className="h-full w-full" style={{
          backgroundImage: `repeating-linear-gradient(90deg, ${theme?.foreground ?? "#e8e2d8"} 0px, ${theme?.foreground ?? "#e8e2d8"} 1px, transparent 1px, transparent 80px)`,
        }} />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        {/* Top icon */}
        <div className="flex items-center justify-center mb-12">
          <Leaf
            className="w-5 h-5 opacity-40"
            style={{ color: theme?.accent ?? "#8b9d77" }}
          />
        </div>

        {/* Japanese-inspired label */}
        <p
          className="text-[10px] sm:text-xs tracking-[0.5em] uppercase mb-8 opacity-50 font-light"
          style={{ color: theme?.accent ?? "#8b9d77" }}
        >
          Sushi &middot; Sashimi &middot; Omakase
        </p>

        {/* Main heading — large and minimal */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-extralight tracking-[0.15em] mb-6 transition-transform duration-700">
          {heading}
        </h1>

        {/* Thin line */}
        <div
          className="w-12 h-px mx-auto mb-8"
          style={{ backgroundColor: theme?.accent ?? "#8b9d77" }}
        />

        {/* Subheading */}
        <p className="text-sm sm:text-base font-light tracking-wide mb-4 italic opacity-70">
          {subheading}
        </p>

        {/* Body text */}
        <p className="text-xs sm:text-sm leading-relaxed max-w-md mx-auto mb-12 opacity-50 font-light">
          {bodyText}
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={buttonUrl}
            className="inline-block px-10 py-3 text-xs tracking-[0.3em] uppercase font-light transition-all duration-500 hover:tracking-[0.4em] border"
            style={{
              borderColor: theme?.accent ?? "#8b9d77",
              color: theme?.accent ?? "#8b9d77",
            }}
          >
            {buttonText}
          </a>
          <a
            href={secondaryButtonUrl}
            className="inline-block px-10 py-3 text-xs tracking-[0.3em] uppercase font-light transition-all duration-500 hover:opacity-70"
            style={{
              backgroundColor: theme?.accent ?? "#8b9d77",
              color: theme?.background ?? "#0d0d0d",
            }}
          >
            {secondaryButtonText}
          </a>
        </div>

        {/* Bottom fish icon */}
        <div className="mt-20 flex items-center justify-center">
          <Fish
            className="w-8 h-8 opacity-20"
            style={{ color: theme?.foreground ?? "#e8e2d8" }}
          />
        </div>
      </div>
    </section>
  );
}
