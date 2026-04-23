import type { BlockProps } from "@/blocks/types";
import { ArrowRight, Star } from "lucide-react";

export default function Hero016(props: BlockProps) {
  const {
    theme,
    heading = "The Platform Thousands Trust to Grow Online",
    subheading = "Join a thriving community of creators, entrepreneurs, and small businesses building their digital presence.",
    buttonText = "Start Building Free",
    buttonUrl = "#signup",
    secondaryButtonText = "See Examples",
    secondaryButtonUrl = "#examples",
  } = props;

  const avatarColors = ["#6366f1", "#ec4899", "#f59e0b", "#10b981", "#8b5cf6"];

  return (
    <section
      style={{
        backgroundColor: theme?.background ?? "#ffffff",
        color: theme?.foreground ?? "#111827",
      }}
      className="min-h-screen flex items-center justify-center px-6 py-20"
    >
      <div className="max-w-2xl w-full text-center">
        {/* Star rating */}
        <div className="flex items-center justify-center gap-1 mb-6">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className="w-4 h-4 sm:w-5 sm:h-5 fill-current"
              style={{ color: theme?.accent ?? "#f59e0b" }}
            />
          ))}
          <span className="text-sm sm:text-base font-medium ml-2 opacity-60">
            4.9/5 from 2,400+ reviews
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-5 leading-tight">
          {heading}
        </h1>

        {/* Subheading */}
        <p className="text-base sm:text-lg opacity-55 max-w-lg mx-auto mb-10 leading-relaxed">
          {subheading}
        </p>

        {/* Social proof avatars */}
        <div className="flex items-center justify-center mb-10">
          <div className="flex -space-x-3">
            {avatarColors.map((color, i) => (
              <div
                key={i}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 flex items-center justify-center text-white text-xs sm:text-sm font-bold"
                style={{
                  backgroundColor: color,
                  borderColor: theme?.background ?? "#ffffff",
                }}
              >
                {String.fromCharCode(65 + i)}
              </div>
            ))}
          </div>
          <div className="ml-4 text-left">
            <p className="text-sm sm:text-base font-semibold">
              Join 5,000+ users
            </p>
            <p className="text-xs sm:text-sm opacity-50">
              who launched this month
            </p>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={buttonUrl}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-semibold text-sm sm:text-base transition-transform hover:scale-105 shadow-lg"
            style={{ backgroundColor: theme?.primary ?? "#6366f1" }}
          >
            {buttonText}
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href={secondaryButtonUrl}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-sm sm:text-base transition-opacity hover:opacity-70"
            style={{ color: theme?.primary ?? "#6366f1" }}
          >
            {secondaryButtonText}
          </a>
        </div>

        {/* Logos line */}
        <p className="mt-14 text-xs sm:text-sm uppercase tracking-widest opacity-30 font-medium">
          Trusted by teams at Shopify, Notion, Vercel, and more
        </p>
      </div>
    </section>
  );
}
