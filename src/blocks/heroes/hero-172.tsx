import type { BlockProps } from "@/blocks/types";
import { Heart, Calendar } from "lucide-react";

export default function Hero172(props: BlockProps) {
  const {
    theme,
    heading = "Together Forever",
    subheading = "The Wedding of Emily & Michael",
    bodyText = "We joyfully invite you to celebrate our union as we begin a beautiful new chapter together. Your presence would make our day truly complete.",
    buttonText = "RSVP Now",
    buttonUrl = "#rsvp",
    items = [
      { label: "Days", value: "42" },
      { label: "Hours", value: "08" },
      { label: "Minutes", value: "15" },
      { label: "Seconds", value: "33" },
    ],
  } = props;

  return (
    <section
      className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden"
      style={{
        backgroundColor: theme?.background ?? "#fff5f5",
        color: theme?.foreground ?? "#4a2c2a",
      }}
    >
      {/* Soft radial glow */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          background: `radial-gradient(ellipse at 50% 30%, ${theme?.accent ?? "#f4c2c2"}44 0%, transparent 70%)`,
        }}
      />

      {/* Decorative corner flourishes */}
      <div
        className="absolute top-6 left-6 w-16 h-16 border-t-2 border-l-2 rounded-tl-sm opacity-30"
        style={{ borderColor: theme?.primary ?? "#c47d7d" }}
      />
      <div
        className="absolute bottom-6 right-6 w-16 h-16 border-b-2 border-r-2 rounded-br-sm opacity-30"
        style={{ borderColor: theme?.primary ?? "#c47d7d" }}
      />

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        {/* Icon */}
        <div className="flex items-center justify-center mb-6">
          <Heart
            className="w-8 h-8 sm:w-10 sm:h-10"
            style={{ color: theme?.primary ?? "#c47d7d" }}
            fill={theme?.primary ?? "#c47d7d"}
          />
        </div>

        {/* Subheading */}
        <p
          className="text-xs sm:text-sm tracking-[0.3em] uppercase mb-3 font-light"
          style={{ color: theme?.primary ?? "#c47d7d" }}
        >
          {subheading}
        </p>

        {/* Heading — elegant script feel */}
        <h1
          className="text-4xl sm:text-5xl md:text-7xl font-serif italic font-light leading-tight mb-4 tracking-wide"
        >
          {heading}
        </h1>

        {/* Decorative divider */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <div
            className="w-16 sm:w-24 h-px"
            style={{ backgroundColor: theme?.primary ?? "#c47d7d" }}
          />
          <Heart
            className="w-3 h-3"
            style={{ color: theme?.primary ?? "#c47d7d" }}
            fill={theme?.primary ?? "#c47d7d"}
          />
          <div
            className="w-16 sm:w-24 h-px"
            style={{ backgroundColor: theme?.primary ?? "#c47d7d" }}
          />
        </div>

        {/* Date with calendar icon */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <Calendar
            className="w-4 h-4"
            style={{ color: theme?.accent ?? "#d4a373" }}
          />
          <span
            className="text-sm sm:text-base tracking-widest uppercase font-light"
            style={{ color: theme?.accent ?? "#d4a373" }}
          >
            June 15, 2026
          </span>
        </div>

        {/* Body text */}
        <p className="text-sm sm:text-base leading-relaxed max-w-lg mx-auto mb-10 opacity-80 font-light">
          {bodyText}
        </p>

        {/* Countdown boxes */}
        <div className="grid grid-cols-4 gap-3 sm:gap-5 max-w-md mx-auto mb-10">
          {items.map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center rounded-lg px-2 py-4 sm:px-4 sm:py-5 border"
              style={{
                borderColor: theme?.primary ?? "#c47d7d",
                backgroundColor: `${theme?.primary ?? "#c47d7d"}0d`,
              }}
            >
              <span
                className="text-2xl sm:text-4xl font-serif font-light"
                style={{ color: theme?.primary ?? "#c47d7d" }}
              >
                {item.value ?? "00"}
              </span>
              <span className="text-[10px] sm:text-xs tracking-widest uppercase mt-1 opacity-60">
                {item.label ?? "Time"}
              </span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <a
          href={buttonUrl}
          className="inline-block px-10 py-3.5 text-sm tracking-widest uppercase font-medium rounded-full transition-all duration-300 hover:opacity-90 hover:scale-105"
          style={{
            backgroundColor: theme?.primary ?? "#c47d7d",
            color: theme?.background ?? "#fff5f5",
          }}
        >
          {buttonText}
        </a>
      </div>
    </section>
  );
}
