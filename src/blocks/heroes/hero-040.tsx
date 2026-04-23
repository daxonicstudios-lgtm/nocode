import type { BlockProps } from "@/blocks/types";
import { MapPin, ArrowRight, Globe } from "lucide-react";

export default function Hero040(props: BlockProps) {
  const {
    theme,
    heading = "Connecting People Worldwide",
    subheading = "Serving 50+ countries with reliable, fast, and secure infrastructure you can trust.",
    buttonText = "See Our Reach",
    buttonUrl = "#",
    secondaryButtonText = "Contact Sales",
    secondaryButtonUrl = "#",
    items = [
      { title: "50+", description: "Countries" },
      { title: "10M+", description: "Users" },
      { title: "99.9%", description: "Uptime" },
    ],
  } = props;

  const primaryColor = theme?.primary || "#3b82f6";

  return (
    <section
      className="min-h-[85vh] flex items-center justify-center px-4 py-16 sm:py-24 relative overflow-hidden"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      {/* Subtle dot grid background */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, ${theme?.foreground || "#000"} 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />

      <div className="max-w-2xl mx-auto text-center relative z-10 w-full">
        {/* Location badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
          style={{
            backgroundColor: primaryColor + "15",
            color: primaryColor,
          }}
        >
          <MapPin className="w-4 h-4" />
          <span className="text-xs sm:text-sm font-semibold">Global Coverage</span>
          <Globe className="w-3.5 h-3.5 opacity-60" />
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-5 leading-tight">
          {heading}
        </h1>
        <p className="text-base sm:text-lg opacity-70 mb-8 max-w-lg mx-auto">
          {subheading}
        </p>

        {/* Stat counters */}
        <div className="flex items-center justify-center gap-6 sm:gap-10 mb-10">
          {items.slice(0, 3).map((item, i) => (
            <div key={i} className="text-center">
              <p
                className="text-2xl sm:text-3xl lg:text-4xl font-bold"
                style={{ color: primaryColor }}
              >
                {item.title}
              </p>
              <p className="text-xs sm:text-sm opacity-60 mt-1">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={buttonUrl}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg text-white font-semibold transition-transform hover:scale-105 shadow-lg"
            style={{ backgroundColor: primaryColor }}
          >
            {buttonText}
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href={secondaryButtonUrl}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-semibold border transition-colors hover:opacity-80"
            style={{
              borderColor: primaryColor,
              color: primaryColor,
            }}
          >
            {secondaryButtonText}
          </a>
        </div>
      </div>
    </section>
  );
}
