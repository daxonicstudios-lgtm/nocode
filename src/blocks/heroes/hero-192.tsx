import type { BlockProps } from "@/blocks/types";
import { Ticket, MapPin } from "lucide-react";

export default function Hero192(props: BlockProps) {
  const {
    theme,
    heading = "Live Music, Unforgettable Nights",
    subheading = "The Warehouse — Lagos",
    bodyText = "A 2,500-capacity venue built for live performance. World-class sound, intimate vibes, and the best lineup in West Africa every weekend.",
    buttonText = "See All Events",
    buttonUrl = "#events",
    secondaryButtonText = "Rent Venue",
    secondaryButtonUrl = "#rent",
    items = [
      { title: "Burna Boy Live", description: "Sat, Jun 21 — Doors 7PM", label: "Sold Out" },
      { title: "Jazz Night with Asa", description: "Fri, Jun 27 — Doors 8PM", label: "Tickets Available" },
      { title: "Amapiano Fridays", description: "Fri, Jul 04 — Doors 9PM", label: "Early Bird" },
    ],
  } = props;

  return (
    <section
      className="relative min-h-screen flex items-center px-4 py-20 overflow-hidden"
      style={{
        backgroundColor: theme?.background ?? "#0f172a",
        color: theme?.foreground ?? "#f8fafc",
      }}
    >
      {/* Bold diagonal accent */}
      <div
        className="absolute top-0 right-0 w-2/3 h-full pointer-events-none opacity-[0.07]"
        style={{
          background: `linear-gradient(135deg, transparent 40%, ${theme?.primary ?? "#6366f1"})`,
        }}
      />
      {/* Spot light effect */}
      <div
        className="absolute top-0 left-1/3 w-40 h-[120%] rotate-12 blur-[80px] opacity-10 pointer-events-none"
        style={{ backgroundColor: theme?.accent ?? "#eab308" }}
      />

      <div className="relative z-10 w-full max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Venue info */}
          <div>
            {/* Location badge */}
            <div className="flex items-center gap-2 mb-5">
              <MapPin className="w-4 h-4" style={{ color: theme?.accent ?? "#eab308" }} />
              <span
                className="text-xs font-bold tracking-[0.2em] uppercase"
                style={{ color: theme?.accent ?? "#eab308" }}
              >
                {subheading}
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6">
              {heading}
            </h1>

            {/* Accent line */}
            <div
              className="w-20 h-1 rounded mb-6"
              style={{ backgroundColor: theme?.primary ?? "#6366f1" }}
            />

            {/* Body */}
            <p className="text-sm sm:text-base leading-relaxed opacity-60 mb-8 max-w-md">
              {bodyText}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={buttonUrl}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg text-sm font-bold tracking-wide transition-all duration-300 hover:scale-105"
                style={{
                  backgroundColor: theme?.primary ?? "#6366f1",
                  color: "#fff",
                }}
              >
                <Ticket className="w-4 h-4" />
                {buttonText}
              </a>
              <a
                href={secondaryButtonUrl}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg text-sm font-bold tracking-wide border transition-all duration-300 hover:opacity-80"
                style={{
                  borderColor: theme?.accent ?? "#eab308",
                  color: theme?.accent ?? "#eab308",
                }}
              >
                <MapPin className="w-4 h-4" />
                {secondaryButtonText}
              </a>
            </div>
          </div>

          {/* Right: Upcoming events */}
          <div>
            <p
              className="text-xs font-bold tracking-[0.2em] uppercase mb-5"
              style={{ color: theme?.accent ?? "#eab308" }}
            >
              Upcoming Events
            </p>
            <div className="space-y-4">
              {items.map((item, i) => {
                const isSoldOut = item.label?.toLowerCase().includes("sold out");
                return (
                  <div
                    key={i}
                    className="rounded-xl p-5 transition-all duration-200 hover:scale-[1.01]"
                    style={{
                      backgroundColor: `${theme?.primary ?? "#6366f1"}10`,
                      border: `1px solid ${theme?.primary ?? "#6366f1"}20`,
                    }}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="text-base sm:text-lg font-bold mb-1">
                          {item.title}
                        </h3>
                        <p className="text-xs sm:text-sm opacity-50">
                          {item.description}
                        </p>
                      </div>
                      <span
                        className="flex-shrink-0 px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase whitespace-nowrap"
                        style={{
                          backgroundColor: isSoldOut
                            ? `${theme?.accent ?? "#eab308"}20`
                            : `${theme?.primary ?? "#6366f1"}20`,
                          color: isSoldOut
                            ? (theme?.accent ?? "#eab308")
                            : (theme?.primary ?? "#6366f1"),
                        }}
                      >
                        {item.label}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Venue capacity note */}
            <div className="mt-6 flex items-center gap-4 opacity-40">
              <div className="flex items-center gap-1.5 text-xs">
                <MapPin className="w-3.5 h-3.5" />
                <span>Victoria Island, Lagos</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs">
                <Ticket className="w-3.5 h-3.5" />
                <span>2,500 Capacity</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
