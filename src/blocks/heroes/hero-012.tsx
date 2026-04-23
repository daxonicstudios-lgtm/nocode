import type { BlockProps } from "@/blocks/types";
import { Heart, Calendar, Sparkles } from "lucide-react";

export default function Hero012(props: BlockProps) {
  const {
    theme,
    heading = "Unlock Your Full Potential",
    subheading = "Life coaching that empowers you to create the future you deserve",
    bodyText = "Through personalized one-on-one sessions, I help ambitious individuals break through limiting beliefs, build unshakable confidence, and design a life they truly love.",
    buttonText = "Book a Session",
    buttonUrl = "#book",
    secondaryButtonText = "Free Discovery Call",
    secondaryButtonUrl = "#discovery",
  } = props;

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#fffbf5", color: theme?.foreground ?? "#1a1a1a" }}
      className="min-h-screen flex items-center justify-center px-6 py-20"
    >
      <div className="max-w-2xl w-full text-center">
        {/* Decorative icon */}
        <div className="mb-6 flex justify-center">
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center"
            style={{ backgroundColor: (theme?.primary ?? "#e88c4a") + "15" }}
          >
            <Sparkles
              className="w-8 h-8"
              style={{ color: theme?.primary ?? "#e88c4a" }}
            />
          </div>
        </div>

        {/* Label */}
        <p
          className="text-xs sm:text-sm font-semibold tracking-widest uppercase mb-5"
          style={{ color: theme?.primary ?? "#e88c4a" }}
        >
          Transform Your Life Today
        </p>

        {/* Heading */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
          {heading}
        </h1>

        {/* Subheading */}
        <p
          className="text-lg sm:text-xl font-medium mb-5"
          style={{ color: theme?.accent ?? "#c76e2e" }}
        >
          {subheading}
        </p>

        {/* Body */}
        <p className="text-base sm:text-lg opacity-60 max-w-xl mx-auto mb-10 leading-relaxed">
          {bodyText}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href={buttonUrl}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-white font-semibold text-sm sm:text-base transition-transform hover:scale-105 shadow-lg"
            style={{ backgroundColor: theme?.primary ?? "#e88c4a" }}
          >
            <Calendar className="w-5 h-5" />
            {buttonText}
          </a>
          <a
            href={secondaryButtonUrl}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm sm:text-base transition-opacity hover:opacity-70"
            style={{ color: theme?.primary ?? "#e88c4a" }}
          >
            <Heart className="w-5 h-5" />
            {secondaryButtonText}
          </a>
        </div>

        {/* Trust line */}
        <div className="flex items-center justify-center gap-6 text-xs sm:text-sm opacity-50">
          <span>500+ clients coached</span>
          <span className="w-1 h-1 rounded-full bg-current" />
          <span>4.9 star rating</span>
          <span className="w-1 h-1 rounded-full bg-current" />
          <span>12 years experience</span>
        </div>
      </div>
    </section>
  );
}
