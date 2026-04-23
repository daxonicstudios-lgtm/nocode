import type { BlockProps } from "@/blocks/types";
import { Camera, Heart } from "lucide-react";

export default function Hero180(props: BlockProps) {
  const {
    theme,
    heading = "Telling Your Love Story",
    subheading = "Wedding & Elopement Photography",
    bodyText = "Every love story deserves to be told beautifully. I document the laughter, the tears, the quiet glances and the wild celebrations that make your day uniquely yours.",
    buttonText = "View Weddings",
    buttonUrl = "#",
    secondaryButtonText = "Get in Touch",
    secondaryButtonUrl = "#",
    items = [
      { label: "Weddings Shot", value: "350+" },
      { label: "Years Experience", value: "12" },
      { label: "Awards Won", value: "28" },
      { label: "Countries", value: "15" },
    ],
  } = props;

  return (
    <section
      className="min-h-screen flex items-center px-4 py-16 sm:px-8 lg:px-16"
      style={{
        backgroundColor: theme?.background ?? "#faf7f4",
        color: theme?.foreground ?? "#3d2e1e",
      }}
    >
      <div className="w-full max-w-6xl mx-auto">
        <div className="text-center space-y-10">
          {/* Icon */}
          <div className="flex items-center justify-center gap-2 opacity-60">
            <Camera className="w-5 h-5" />
            <Heart
              className="w-4 h-4"
              style={{ color: theme?.primary ?? "#c4856a" }}
              fill={theme?.primary ?? "#c4856a"}
            />
            <Camera className="w-5 h-5" />
          </div>

          {/* Heading */}
          <div className="space-y-4">
            <p
              className="text-sm sm:text-base font-medium tracking-widest uppercase"
              style={{ color: theme?.primary ?? "#c4856a" }}
            >
              {subheading}
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-light leading-tight">
              {heading}
            </h1>
          </div>

          {/* Body */}
          <p className="text-base sm:text-lg leading-relaxed max-w-2xl mx-auto opacity-70">
            {bodyText}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={buttonUrl}
              className="px-8 py-4 text-sm font-medium tracking-widest uppercase transition-opacity hover:opacity-80 rounded-full"
              style={{
                backgroundColor: theme?.primary ?? "#c4856a",
                color: "#ffffff",
              }}
            >
              {buttonText}
            </a>
            <a
              href={secondaryButtonUrl}
              className="px-8 py-4 text-sm font-medium tracking-widest uppercase border-2 rounded-full transition-opacity hover:opacity-80"
              style={{
                borderColor: theme?.primary ?? "#c4856a",
                color: theme?.primary ?? "#c4856a",
              }}
            >
              {secondaryButtonText}
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 pt-8 border-t max-w-3xl mx-auto"
            style={{ borderColor: theme?.accent ?? "#e8ddd3" }}
          >
            {items.map((stat, i) => (
              <div key={i} className="text-center space-y-1">
                <p
                  className="text-3xl sm:text-4xl font-serif"
                  style={{ color: theme?.primary ?? "#c4856a" }}
                >
                  {stat.value}
                </p>
                <p className="text-xs tracking-widest uppercase opacity-60">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
