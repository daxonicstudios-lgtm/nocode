import type { BlockProps } from "@/blocks/types";
import { Star, CalendarDays, MapPin } from "lucide-react";

export default function Hero105(props: BlockProps) {
  const {
    theme,
    heading = "Your Perfect Escape Awaits",
    subheading = "Luxury stays in the world's most breathtaking destinations",
    bodyText = "Discover handpicked boutique hotels and resorts that redefine hospitality. From coastal retreats to mountain hideaways, every stay is unforgettable.",
    buttonText = "Book Your Stay",
    buttonUrl = "#",
    secondaryButtonText = "View All Properties",
    secondaryButtonUrl = "#",
    backgroundImageUrl,
  } = props;

  return (
    <section
      className="relative min-h-screen flex items-end pb-16 sm:pb-24 sm:items-center overflow-hidden"
      style={{ backgroundColor: theme?.background ?? "#1a1a1a", color: theme?.foreground ?? "#ffffff" }}
    >
      {/* Background image or fallback */}
      <div className="absolute inset-0 z-0">
        {backgroundImageUrl ? (
          <img
            src={backgroundImageUrl}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          <div
            className="absolute inset-0"
            style={{
              background: `
                linear-gradient(180deg, ${theme?.primary ?? "#1e3a5f"}44 0%, ${theme?.background ?? "#1a1a1a"} 100%),
                radial-gradient(ellipse at 70% 30%, ${theme?.accent ?? "#d4a853"}22 0%, transparent 60%)
              `,
            }}
          />
        )}
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 w-full">
        {/* Rating badge */}
        <div className="flex items-center gap-1 mb-6">
          {[1, 2, 3, 4, 5].map((s) => (
            <Star
              key={s}
              className="w-4 h-4 fill-current"
              style={{ color: theme?.accent ?? "#d4a853" }}
            />
          ))}
          <span className="ml-2 text-sm opacity-70">Award-Winning Hospitality</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight mb-4 max-w-3xl">
          {heading}
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl font-light mb-3 opacity-80 max-w-2xl">
          {subheading}
        </p>

        <p className="text-base max-w-xl mb-10 opacity-50 leading-relaxed">
          {bodyText}
        </p>

        {/* Search bar style CTA */}
        <div
          className="inline-flex flex-col sm:flex-row items-stretch sm:items-center gap-3 p-3 rounded-2xl backdrop-blur-md w-full sm:w-auto"
          style={{
            backgroundColor: `${theme?.foreground ?? "#ffffff"}0d`,
            border: `1px solid ${theme?.foreground ?? "#ffffff"}1a`,
          }}
        >
          <div className="flex items-center gap-2 px-4 py-3 sm:py-0">
            <MapPin className="w-4 h-4 opacity-50" />
            <span className="text-sm opacity-60">Any destination</span>
          </div>

          <div className="hidden sm:block w-px h-8 bg-white/10" />

          <div className="flex items-center gap-2 px-4 py-3 sm:py-0">
            <CalendarDays className="w-4 h-4 opacity-50" />
            <span className="text-sm opacity-60">Select dates</span>
          </div>

          <a
            href={buttonUrl}
            className="px-8 py-3 rounded-xl text-sm font-semibold text-center transition-transform hover:scale-105"
            style={{
              backgroundColor: theme?.primary ?? "#d4a853",
              color: theme?.background ?? "#1a1a1a",
            }}
          >
            {buttonText}
          </a>
        </div>

        <div className="mt-6">
          <a
            href={secondaryButtonUrl}
            className="text-sm font-medium opacity-60 hover:opacity-100 transition-opacity underline underline-offset-4"
            style={{ color: theme?.foreground ?? "#ffffff" }}
          >
            {secondaryButtonText}
          </a>
        </div>
      </div>
    </section>
  );
}
