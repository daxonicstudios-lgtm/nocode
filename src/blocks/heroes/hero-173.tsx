import type { BlockProps } from "@/blocks/types";
import { Sparkles, Mail } from "lucide-react";

export default function Hero173(props: BlockProps) {
  const {
    theme,
    heading = "Sarah & James",
    subheading = "We're getting married!",
    bodyText = "After seven wonderful years together, we are thrilled to invite you to celebrate our wedding day with us. We cannot wait to share this moment.",
    buttonText = "View Our Story",
    buttonUrl = "#story",
    secondaryButtonText = "RSVP",
    secondaryButtonUrl = "#rsvp",
  } = props;

  return (
    <section
      className="relative min-h-screen flex items-center justify-center px-4 py-20"
      style={{
        backgroundColor: theme?.background ?? "#ffffff",
        color: theme?.foreground ?? "#1a1a1a",
      }}
    >
      <div className="relative z-10 max-w-2xl mx-auto text-center">
        {/* Sparkle accent */}
        <Sparkles
          className="w-5 h-5 sm:w-6 sm:h-6 mx-auto mb-6"
          style={{ color: theme?.accent ?? "#b0b0b0" }}
        />

        {/* Subheading */}
        <p
          className="text-xs sm:text-sm tracking-[0.3em] uppercase mb-4 font-light"
          style={{ color: theme?.accent ?? "#999999" }}
        >
          {subheading}
        </p>

        {/* Large couple names */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-serif font-extralight leading-none mb-2 tracking-tight">
          {heading}
        </h1>

        {/* Minimal line */}
        <div
          className="w-12 h-px mx-auto my-8"
          style={{ backgroundColor: theme?.foreground ?? "#1a1a1a" }}
        />

        {/* Date display */}
        <div className="flex items-center justify-center gap-4 sm:gap-6 mb-8">
          <span className="text-sm sm:text-base tracking-widest uppercase font-light opacity-70">
            Saturday
          </span>
          <div className="flex flex-col items-center">
            <span
              className="text-3xl sm:text-4xl font-serif font-light"
              style={{ color: theme?.primary ?? "#333333" }}
            >
              15
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-sm sm:text-base tracking-widest uppercase font-light opacity-70">
              June 2026
            </span>
          </div>
        </div>

        {/* Venue */}
        <p className="text-xs sm:text-sm tracking-[0.2em] uppercase opacity-50 mb-8">
          The Grand Pavilion &bull; Cape Town
        </p>

        {/* Body text */}
        <p className="text-sm sm:text-base leading-relaxed max-w-md mx-auto mb-10 font-light opacity-75">
          {bodyText}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={buttonUrl}
            className="inline-flex items-center gap-2 px-8 py-3 text-sm tracking-widest uppercase font-medium transition-all duration-300 hover:opacity-90 border"
            style={{
              borderColor: theme?.foreground ?? "#1a1a1a",
              color: theme?.foreground ?? "#1a1a1a",
            }}
          >
            <Sparkles className="w-3.5 h-3.5" />
            {buttonText}
          </a>
          <a
            href={secondaryButtonUrl}
            className="inline-flex items-center gap-2 px-8 py-3 text-sm tracking-widest uppercase font-medium transition-all duration-300 hover:opacity-90"
            style={{
              backgroundColor: theme?.primary ?? "#1a1a1a",
              color: theme?.background ?? "#ffffff",
            }}
          >
            <Mail className="w-3.5 h-3.5" />
            {secondaryButtonText}
          </a>
        </div>

        {/* Hashtag */}
        <p
          className="mt-14 text-xs tracking-[0.2em] uppercase opacity-40"
          style={{ color: theme?.accent ?? "#999" }}
        >
          #SarahAndJames2026
        </p>
      </div>
    </section>
  );
}
