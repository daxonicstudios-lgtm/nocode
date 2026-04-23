import type { BlockProps } from "@/blocks/types";
import { Camera, Heart } from "lucide-react";

export default function Hero177(props: BlockProps) {
  const {
    theme,
    heading = "Capturing Your Perfect Day",
    subheading = "Wedding Photography & Film",
    bodyText = "We specialize in natural, emotive wedding photography that tells your unique love story. Every glance, every tear of joy, every stolen moment — preserved forever.",
    buttonText = "View Portfolio",
    buttonUrl = "#portfolio",
    secondaryButtonText = "Book Now",
    secondaryButtonUrl = "#book",
    items = [
      { title: "Weddings Shot", value: "500+" },
      { title: "Happy Couples", value: "500+" },
      { title: "Awards Won", value: "24" },
      { title: "Years Experience", value: "12" },
    ],
  } = props;

  return (
    <section
      className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden"
      style={{
        backgroundColor: theme?.background ?? "#111111",
        color: theme?.foreground ?? "#ede8e0",
      }}
    >
      {/* Subtle grid pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(${theme?.foreground ?? "#ede8e0"} 1px, transparent 1px), linear-gradient(90deg, ${theme?.foreground ?? "#ede8e0"} 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Camera icon */}
        <div
          className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full border mb-8"
          style={{ borderColor: theme?.accent ?? "#c9a84c" }}
        >
          <Camera
            className="w-6 h-6 sm:w-7 sm:h-7"
            style={{ color: theme?.accent ?? "#c9a84c" }}
          />
        </div>

        {/* Subheading */}
        <p
          className="text-xs sm:text-sm tracking-[0.35em] uppercase mb-4 font-light"
          style={{ color: theme?.accent ?? "#c9a84c" }}
        >
          {subheading}
        </p>

        {/* Heading */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif font-light leading-tight mb-6 tracking-wide">
          {heading}
        </h1>

        {/* Heart divider */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <div
            className="w-16 sm:w-24 h-px opacity-40"
            style={{ backgroundColor: theme?.accent ?? "#c9a84c" }}
          />
          <Heart
            className="w-4 h-4"
            style={{ color: theme?.accent ?? "#c9a84c" }}
            fill={theme?.accent ?? "#c9a84c"}
          />
          <div
            className="w-16 sm:w-24 h-px opacity-40"
            style={{ backgroundColor: theme?.accent ?? "#c9a84c" }}
          />
        </div>

        {/* Body */}
        <p className="text-sm sm:text-base leading-relaxed max-w-xl mx-auto mb-10 opacity-70 font-light">
          {bodyText}
        </p>

        {/* Portfolio grid mockup — image placeholders */}
        <div className="grid grid-cols-3 gap-2 sm:gap-3 max-w-lg mx-auto mb-10">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="aspect-square rounded-sm"
              style={{
                backgroundColor: `${theme?.primary ?? "#4a3f35"}${i % 2 === 0 ? "33" : "22"}`,
                border: `1px solid ${theme?.accent ?? "#c9a84c"}15`,
              }}
            />
          ))}
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-lg mx-auto mb-10">
          {items.map((item, i) => (
            <div key={i} className="text-center">
              <span
                className="text-xl sm:text-2xl font-serif font-light"
                style={{ color: theme?.accent ?? "#c9a84c" }}
              >
                {item.value ?? "0"}
              </span>
              <p className="text-[10px] sm:text-xs tracking-widest uppercase mt-1 opacity-50">
                {item.title ?? "Stat"}
              </p>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={buttonUrl}
            className="inline-flex items-center gap-2 px-8 py-3.5 text-sm tracking-widest uppercase font-medium border transition-all duration-300 hover:opacity-90"
            style={{
              borderColor: theme?.accent ?? "#c9a84c",
              color: theme?.accent ?? "#c9a84c",
            }}
          >
            <Camera className="w-4 h-4" />
            {buttonText}
          </a>
          <a
            href={secondaryButtonUrl}
            className="inline-block px-8 py-3.5 text-sm tracking-widest uppercase font-medium transition-all duration-300 hover:opacity-90"
            style={{
              backgroundColor: theme?.accent ?? "#c9a84c",
              color: theme?.background ?? "#111111",
            }}
          >
            {secondaryButtonText}
          </a>
        </div>
      </div>
    </section>
  );
}
