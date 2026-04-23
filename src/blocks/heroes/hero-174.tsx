import type { BlockProps } from "@/blocks/types";
import { Plane, MapPin } from "lucide-react";

export default function Hero174(props: BlockProps) {
  const {
    theme,
    heading = "Olivia & Alexander",
    subheading = "Join Us in Santorini",
    bodyText = "We invite you to celebrate our love against the backdrop of the Aegean Sea. An unforgettable weekend of joy, laughter, and eternal promises awaits.",
    buttonText = "Confirm Attendance",
    buttonUrl = "#confirm",
    items = [
      { label: "Days", value: "78" },
      { label: "Hours", value: "14" },
      { label: "Minutes", value: "22" },
      { label: "Seconds", value: "09" },
    ],
  } = props;

  return (
    <section
      className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden"
      style={{
        backgroundColor: theme?.background ?? "#0c0c0c",
        color: theme?.foreground ?? "#f0e6d3",
      }}
    >
      {/* Gold gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          background: `linear-gradient(180deg, transparent 0%, ${theme?.primary ?? "#c9a84c"}15 50%, transparent 100%)`,
        }}
      />

      {/* Top accent line */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 opacity-40"
        style={{ backgroundColor: theme?.accent ?? "#c9a84c" }}
      />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        {/* Destination icon */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <Plane
            className="w-5 h-5 sm:w-6 sm:h-6 -rotate-45"
            style={{ color: theme?.accent ?? "#c9a84c" }}
          />
          <div
            className="w-10 h-px"
            style={{ backgroundColor: theme?.accent ?? "#c9a84c" }}
          />
          <MapPin
            className="w-5 h-5 sm:w-6 sm:h-6"
            style={{ color: theme?.accent ?? "#c9a84c" }}
          />
        </div>

        {/* Subheading */}
        <p
          className="text-xs sm:text-sm tracking-[0.4em] uppercase mb-4 font-light"
          style={{ color: theme?.accent ?? "#c9a84c" }}
        >
          {subheading}
        </p>

        {/* Heading */}
        <h1
          className="text-4xl sm:text-6xl md:text-7xl font-serif italic font-light leading-tight mb-3"
          style={{ color: theme?.accent ?? "#c9a84c" }}
        >
          {heading}
        </h1>

        {/* Date line */}
        <p
          className="text-sm sm:text-base tracking-[0.25em] uppercase font-light mb-2 opacity-70"
        >
          September 20, 2026
        </p>

        {/* Venue */}
        <p className="text-xs tracking-[0.2em] uppercase opacity-40 mb-8">
          Santo Wines Winery &bull; Santorini, Greece
        </p>

        {/* Decorative divider */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div
            className="w-20 sm:w-28 h-px opacity-40"
            style={{ backgroundColor: theme?.accent ?? "#c9a84c" }}
          />
          <div
            className="w-2 h-2 rotate-45"
            style={{ backgroundColor: theme?.accent ?? "#c9a84c" }}
          />
          <div
            className="w-20 sm:w-28 h-px opacity-40"
            style={{ backgroundColor: theme?.accent ?? "#c9a84c" }}
          />
        </div>

        {/* Body text */}
        <p className="text-sm sm:text-base leading-relaxed max-w-lg mx-auto mb-10 opacity-70 font-light">
          {bodyText}
        </p>

        {/* Countdown */}
        <div className="grid grid-cols-4 gap-2 sm:gap-4 max-w-sm mx-auto mb-12">
          {items.map((item, i) => (
            <div key={i} className="flex flex-col items-center">
              <span
                className="text-3xl sm:text-5xl font-serif font-light"
                style={{ color: theme?.accent ?? "#c9a84c" }}
              >
                {item.value ?? "00"}
              </span>
              <div
                className="w-full h-px my-2 opacity-20"
                style={{ backgroundColor: theme?.accent ?? "#c9a84c" }}
              />
              <span className="text-[10px] sm:text-xs tracking-[0.2em] uppercase opacity-50">
                {item.label ?? "Time"}
              </span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <a
          href={buttonUrl}
          className="inline-block px-10 py-4 text-xs sm:text-sm tracking-[0.3em] uppercase font-medium border transition-all duration-300 hover:opacity-90"
          style={{
            borderColor: theme?.accent ?? "#c9a84c",
            color: theme?.accent ?? "#c9a84c",
            backgroundColor: `${theme?.accent ?? "#c9a84c"}11`,
          }}
        >
          {buttonText}
        </a>

        {/* Bottom flourish */}
        <div
          className="mt-16 w-px h-12 mx-auto opacity-30"
          style={{ backgroundColor: theme?.accent ?? "#c9a84c" }}
        />
      </div>
    </section>
  );
}
