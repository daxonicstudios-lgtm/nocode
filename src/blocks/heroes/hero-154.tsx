import type { BlockProps } from "@/blocks/types";
import { Flame, PartyPopper } from "lucide-react";

export default function Hero154(props: BlockProps) {
  const {
    theme,
    heading = "Bold Flavors, Good Times",
    subheading = "Casa del Sol Cantina",
    bodyText = "From sizzling fajitas to hand-crafted margaritas, every visit is a fiesta. Authentic Mexican street food meets vibrant cantina energy in the heart of the city.",
    buttonText = "Reserve Now",
    buttonUrl = "#reserve",
    secondaryButtonText = "See Our Menu",
    secondaryButtonUrl = "#menu",
  } = props;

  return (
    <section
      className="relative min-h-screen flex items-center px-4 py-16 sm:py-20 overflow-hidden"
      style={{
        backgroundColor: theme?.background ?? "#1a0a2e",
        color: theme?.foreground ?? "#fff8e7",
      }}
    >
      {/* Background pattern — diagonal stripes */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            ${theme?.accent ?? "#f39c12"} 0px,
            ${theme?.accent ?? "#f39c12"} 2px,
            transparent 2px,
            transparent 20px
          )`,
        }}
      />

      {/* Colorful top border */}
      <div className="absolute top-0 left-0 right-0 h-2 flex">
        <div className="flex-1" style={{ backgroundColor: theme?.primary ?? "#e74c3c" }} />
        <div className="flex-1" style={{ backgroundColor: theme?.accent ?? "#f39c12" }} />
        <div className="flex-1" style={{ backgroundColor: "#27ae60" }} />
        <div className="flex-1" style={{ backgroundColor: theme?.primary ?? "#e74c3c" }} />
        <div className="flex-1" style={{ backgroundColor: theme?.accent ?? "#f39c12" }} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto w-full text-center">
        {/* Party icon */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <PartyPopper
            className="w-6 h-6 sm:w-8 sm:h-8"
            style={{ color: theme?.accent ?? "#f39c12" }}
          />
          <Flame
            className="w-7 h-7 sm:w-9 sm:h-9"
            style={{ color: theme?.primary ?? "#e74c3c" }}
          />
          <PartyPopper
            className="w-6 h-6 sm:w-8 sm:h-8 -scale-x-100"
            style={{ color: theme?.accent ?? "#f39c12" }}
          />
        </div>

        {/* Subheading / restaurant name */}
        <p
          className="text-sm sm:text-base font-bold uppercase tracking-[0.3em] mb-4"
          style={{ color: theme?.accent ?? "#f39c12" }}
        >
          {subheading}
        </p>

        {/* Bold heading */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase leading-none mb-6 tracking-tight">
          {heading}
        </h1>

        {/* Decorative zigzag */}
        <div className="flex justify-center mb-8">
          <svg viewBox="0 0 200 12" className="w-40 sm:w-56" style={{ fill: "none", stroke: theme?.accent ?? "#f39c12", strokeWidth: 2 }}>
            <polyline points="0,10 15,2 30,10 45,2 60,10 75,2 90,10 105,2 120,10 135,2 150,10 165,2 180,10 195,2 200,10" />
          </svg>
        </div>

        {/* Body */}
        <p className="text-sm sm:text-lg leading-relaxed max-w-xl mx-auto mb-10 opacity-80">
          {bodyText}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={buttonUrl}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm sm:text-base font-bold uppercase tracking-wider transition-all duration-300 hover:scale-105"
            style={{
              backgroundColor: theme?.primary ?? "#e74c3c",
              color: "#ffffff",
            }}
          >
            <Flame className="w-4 h-4" />
            {buttonText}
          </a>
          <a
            href={secondaryButtonUrl}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm sm:text-base font-bold uppercase tracking-wider border-2 transition-all duration-300 hover:scale-105"
            style={{
              borderColor: theme?.accent ?? "#f39c12",
              color: theme?.accent ?? "#f39c12",
            }}
          >
            {secondaryButtonText}
          </a>
        </div>

        {/* Bottom tagline */}
        <p className="mt-14 text-xs sm:text-sm uppercase tracking-widest opacity-40">
          Tacos &bull; Burritos &bull; Margaritas &bull; Good Vibes
        </p>
      </div>
    </section>
  );
}
