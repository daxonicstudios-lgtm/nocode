import type { BlockProps } from "@/blocks/types";
import { Guitar, Ticket } from "lucide-react";

export default function Hero187(props: BlockProps) {
  const {
    theme,
    heading = "Iron Velocity",
    subheading = "World Tour 2026",
    bodyText = "Raw energy. Thundering riffs. Five albums deep and louder than ever. Catch us live in a city near you.",
    buttonText = "Get Tickets",
    buttonUrl = "#tickets",
    secondaryButtonText = "Stream Music",
    secondaryButtonUrl = "#stream",
    items = [
      { title: "Jun 14", description: "Lagos, Nigeria — Eko Convention Centre" },
      { title: "Jul 02", description: "Nairobi, Kenya — Uhuru Gardens" },
      { title: "Jul 19", description: "Johannesburg, SA — FNB Stadium" },
    ],
  } = props;

  return (
    <section
      className="relative min-h-screen flex items-end sm:items-center px-4 py-16 sm:py-20 overflow-hidden"
      style={{
        backgroundColor: theme?.background ?? "#0c0a09",
        color: theme?.foreground ?? "#fafaf9",
      }}
    >
      {/* Red/orange diagonal accent */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full pointer-events-none opacity-10"
        style={{
          background: `linear-gradient(160deg, ${theme?.accent ?? "#ef4444"} 0%, transparent 60%)`,
        }}
      />
      {/* Gritty horizontal line */}
      <div
        className="absolute top-1/2 left-0 w-full h-px opacity-10"
        style={{ backgroundColor: theme?.accent ?? "#ef4444" }}
      />

      <div className="relative z-10 w-full max-w-4xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
          {/* Left: Band info */}
          <div className="lg:max-w-xl">
            {/* Tour badge */}
            <div className="flex items-center gap-2 mb-4">
              <Guitar className="w-5 h-5" style={{ color: theme?.accent ?? "#ef4444" }} />
              <span
                className="text-xs font-bold tracking-[0.3em] uppercase"
                style={{ color: theme?.accent ?? "#ef4444" }}
              >
                {subheading}
              </span>
            </div>

            {/* Band name */}
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-black uppercase leading-none tracking-tighter mb-4">
              {heading}
            </h1>

            {/* Accent bar */}
            <div
              className="w-20 h-1 mb-6"
              style={{ backgroundColor: theme?.accent ?? "#ef4444" }}
            />

            {/* Body */}
            <p className="text-sm sm:text-base leading-relaxed opacity-70 mb-8 max-w-md">
              {bodyText}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={buttonUrl}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-bold uppercase tracking-wider transition-all duration-300 hover:scale-105"
                style={{
                  backgroundColor: theme?.accent ?? "#ef4444",
                  color: "#fff",
                }}
              >
                <Ticket className="w-4 h-4" />
                {buttonText}
              </a>
              <a
                href={secondaryButtonUrl}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-bold uppercase tracking-wider border transition-all duration-300 hover:opacity-80"
                style={{
                  borderColor: theme?.foreground ?? "#fafaf9",
                  color: theme?.foreground ?? "#fafaf9",
                }}
              >
                {secondaryButtonText}
              </a>
            </div>
          </div>

          {/* Right: Upcoming tour dates */}
          <div className="lg:w-72 flex-shrink-0">
            <p
              className="text-xs font-bold tracking-[0.2em] uppercase mb-4"
              style={{ color: theme?.accent ?? "#ef4444" }}
            >
              Upcoming Dates
            </p>
            <div className="space-y-3">
              {items.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 border-l-2 pl-4 py-2"
                  style={{ borderColor: `${theme?.accent ?? "#ef4444"}60` }}
                >
                  <span
                    className="text-sm font-bold whitespace-nowrap"
                    style={{ color: theme?.accent ?? "#ef4444" }}
                  >
                    {item.title}
                  </span>
                  <span className="text-sm opacity-70">{item.description}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
