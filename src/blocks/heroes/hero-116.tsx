import type { BlockProps } from "@/blocks/types";
import { Play, CalendarDays, MapPin, Ticket } from "lucide-react";

export default function Hero116(props: BlockProps) {
  const {
    theme,
    heading = "The Global Innovation Summit 2026",
    subheading = "Join 5,000+ visionaries, founders, and creators for three days of talks, workshops, and unforgettable connections.",
    bodyText = "June 15-17, 2026",
    buttonText = "Get Tickets",
    buttonUrl = "#",
    secondaryButtonText = "Watch Trailer",
    secondaryButtonUrl = "#",
    backgroundImageUrl,
    items = [
      { title: "12", description: "Days" },
      { title: "08", description: "Hours" },
      { title: "45", description: "Minutes" },
      { title: "30", description: "Seconds" },
    ],
  } = props;

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#000000", color: theme?.foreground ?? "#ffffff" }}
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-5 py-20"
    >
      {/* Video background simulation */}
      {backgroundImageUrl ? (
        <img
          src={backgroundImageUrl}
          alt="Event background"
          className="absolute inset-0 w-full h-full object-cover"
        />
      ) : (
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(180deg, ${theme?.background ?? "#000000"} 0%, ${theme?.primary ?? "#dc2626"}15 50%, ${theme?.background ?? "#000000"} 100%)`,
          }}
        />
      )}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Animated scan line effect */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.05) 2px, rgba(255,255,255,0.05) 4px)",
          }}
        />
      </div>

      {/* Play button overlay icon */}
      <div className="absolute top-6 right-6 z-20">
        <button
          className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 text-xs font-medium hover:bg-white/10 transition-colors"
          aria-label="Play video"
        >
          <Play className="w-3 h-3" fill="currentColor" />
          Play Video
        </button>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        {/* Event meta */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-8 text-sm opacity-70">
          <span className="inline-flex items-center gap-1.5">
            <CalendarDays className="w-4 h-4" />
            {bodyText}
          </span>
          <span className="w-1 h-1 rounded-full bg-current opacity-40" />
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="w-4 h-4" />
            Lagos, Nigeria
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight leading-[1.05] uppercase">
          {heading}
        </h1>

        <p className="mt-6 text-base sm:text-lg opacity-60 leading-relaxed max-w-xl mx-auto">
          {subheading}
        </p>

        {/* Countdown timer */}
        <div className="mt-12 flex items-center justify-center gap-3 sm:gap-5">
          {items.map((item, i) => (
            <div key={i} className="flex flex-col items-center">
              <div
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl flex items-center justify-center text-2xl sm:text-3xl font-bold border"
                style={{
                  borderColor: `${theme?.primary ?? "#dc2626"}40`,
                  backgroundColor: `${theme?.primary ?? "#dc2626"}10`,
                  color: theme?.primary ?? "#dc2626",
                }}
              >
                {item.title}
              </div>
              <span className="mt-2 text-[10px] sm:text-xs uppercase tracking-wider opacity-50">
                {item.description}
              </span>
              {i < items.length - 1 && (
                <span className="hidden" aria-hidden="true" />
              )}
            </div>
          ))}
        </div>

        {/* CTA buttons */}
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={buttonUrl}
            style={{ backgroundColor: theme?.primary ?? "#dc2626" }}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg text-white font-bold text-lg hover:opacity-90 transition-opacity"
          >
            <Ticket className="w-5 h-5" />
            {buttonText}
          </a>
          <a
            href={secondaryButtonUrl}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold border border-white/20 hover:border-white/40 transition-colors"
          >
            <Play className="w-4 h-4" />
            {secondaryButtonText}
          </a>
        </div>

        {/* Social proof */}
        <div className="mt-10 flex items-center justify-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="w-8 h-8 rounded-full border-2 -ml-2 first:ml-0 flex items-center justify-center text-[10px] font-bold"
              style={{
                borderColor: theme?.background ?? "#000000",
                backgroundColor: `${theme?.primary ?? "#dc2626"}${30 + i * 15}`,
              }}
            >
              {String.fromCharCode(65 + i)}
            </div>
          ))}
          <span className="ml-3 text-sm opacity-50">2,400+ already registered</span>
        </div>
      </div>
    </section>
  );
}
