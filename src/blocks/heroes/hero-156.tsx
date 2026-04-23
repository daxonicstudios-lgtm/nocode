import type { BlockProps } from "@/blocks/types";
import { Fish, Anchor } from "lucide-react";

export default function Hero156(props: BlockProps) {
  const {
    theme,
    heading = "The Freshest Catch in Town",
    subheading = "Fresh Catch",
    bodyText = "Sourced daily from local fishermen, our seafood is as fresh as it gets. From grilled lobster to pan-seared scallops, taste the ocean in every bite.",
    buttonText = "Make a Reservation",
    buttonUrl = "#reservation",
    secondaryButtonText = "Today's Catch",
    secondaryButtonUrl = "#menu",
  } = props;

  return (
    <section
      className="relative min-h-screen flex items-center px-4 py-16 sm:py-20 overflow-hidden"
      style={{
        backgroundColor: theme?.background ?? "#0c2d48",
        color: theme?.foreground ?? "#e8f4f8",
      }}
    >
      {/* Subtle wave pattern top */}
      <div className="absolute top-0 left-0 right-0 opacity-10 pointer-events-none">
        <svg viewBox="0 0 1440 120" className="w-full" preserveAspectRatio="none">
          <path
            d="M0,40 C360,100 720,0 1080,60 C1260,90 1380,30 1440,50 L1440,0 L0,0 Z"
            style={{ fill: theme?.primary ?? "#1a6fa0" }}
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto w-full text-center">
        {/* Anchor icon */}
        <div className="flex items-center justify-center mb-6">
          <Anchor
            className="w-8 h-8 sm:w-10 sm:h-10 opacity-60"
            style={{ color: theme?.accent ?? "#5bbcd6" }}
          />
        </div>

        {/* Tagline */}
        <p
          className="text-xs sm:text-sm font-bold uppercase tracking-[0.4em] mb-4"
          style={{ color: theme?.accent ?? "#5bbcd6" }}
        >
          {subheading}
        </p>

        {/* Heading */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
          {heading}
        </h1>

        {/* Wavy divider */}
        <div className="flex justify-center mb-8">
          <svg viewBox="0 0 120 12" className="w-28 sm:w-36" style={{ fill: "none", stroke: theme?.accent ?? "#5bbcd6", strokeWidth: 2 }}>
            <path d="M0,6 Q15,0 30,6 T60,6 T90,6 T120,6" />
          </svg>
        </div>

        {/* Body text */}
        <p className="text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-10 opacity-75">
          {bodyText}
        </p>

        {/* Feature pills */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {["Daily Fresh", "Sustainably Sourced", "Waterfront Dining"].map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-medium tracking-wide"
              style={{
                backgroundColor: `${theme?.accent ?? "#5bbcd6"}20`,
                color: theme?.accent ?? "#5bbcd6",
              }}
            >
              <Fish className="w-3 h-3" />
              {tag}
            </span>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={buttonUrl}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg text-sm font-bold uppercase tracking-wider transition-all duration-300 hover:opacity-90"
            style={{
              backgroundColor: theme?.accent ?? "#5bbcd6",
              color: theme?.background ?? "#0c2d48",
            }}
          >
            <Anchor className="w-4 h-4" />
            {buttonText}
          </a>
          <a
            href={secondaryButtonUrl}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg text-sm font-bold uppercase tracking-wider border-2 transition-all duration-300 hover:opacity-75"
            style={{
              borderColor: theme?.accent ?? "#5bbcd6",
              color: theme?.accent ?? "#5bbcd6",
            }}
          >
            {secondaryButtonText}
          </a>
        </div>
      </div>

      {/* Bottom wave SVG */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg viewBox="0 0 1440 180" className="w-full" preserveAspectRatio="none">
          <path
            d="M0,120 C240,180 480,80 720,120 C960,160 1200,60 1440,100 L1440,180 L0,180 Z"
            style={{ fill: theme?.primary ?? "#1a6fa0", opacity: 0.2 }}
          />
          <path
            d="M0,140 C360,180 720,100 1080,150 C1260,170 1380,120 1440,140 L1440,180 L0,180 Z"
            style={{ fill: theme?.primary ?? "#1a6fa0", opacity: 0.35 }}
          />
        </svg>
      </div>
    </section>
  );
}
