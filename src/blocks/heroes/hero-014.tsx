import type { BlockProps } from "@/blocks/types";
import { Play } from "lucide-react";

export default function Hero014(props: BlockProps) {
  const {
    theme,
    heading = "See How It Works in 60 Seconds",
    subheading = "Watch our quick overview to discover how easy it is to get started",
    buttonText = "Watch Video",
    buttonUrl = "#video",
    secondaryButtonText = "Get Started Free",
    secondaryButtonUrl = "#signup",
    imageUrl,
  } = props;

  return (
    <section
      style={{
        backgroundColor: theme?.background ?? "#09090b",
        color: theme?.foreground ?? "#fafafa",
      }}
      className="min-h-screen flex items-center justify-center px-6 py-20"
    >
      <div className="max-w-2xl w-full text-center">
        {/* Heading */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-5 leading-tight">
          {heading}
        </h1>

        {/* Subheading */}
        <p className="text-base sm:text-lg opacity-50 max-w-lg mx-auto mb-12 leading-relaxed">
          {subheading}
        </p>

        {/* Video play button */}
        <div className="flex justify-center mb-12">
          <a
            href={buttonUrl}
            className="group relative w-28 h-28 sm:w-36 sm:h-36 lg:w-44 lg:h-44 rounded-full flex items-center justify-center transition-transform hover:scale-105"
            style={{
              backgroundColor: (theme?.primary ?? "#6366f1") + "15",
            }}
          >
            {/* Pulse ring */}
            <span
              className="absolute inset-0 rounded-full animate-ping opacity-20"
              style={{ backgroundColor: theme?.primary ?? "#6366f1" }}
            />
            {/* Inner circle */}
            <span
              className="relative w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-full flex items-center justify-center shadow-2xl"
              style={{ backgroundColor: theme?.primary ?? "#6366f1" }}
            >
              <Play className="w-8 h-8 sm:w-10 sm:h-10 text-white fill-white ml-1" />
            </span>
          </a>
        </div>

        {/* Play label */}
        <p
          className="text-sm font-medium tracking-wide uppercase mb-10"
          style={{ color: theme?.primary ?? "#6366f1" }}
        >
          {buttonText}
        </p>

        {/* Video thumbnail preview (optional) */}
        {imageUrl && (
          <div className="relative max-w-xl mx-auto rounded-2xl overflow-hidden shadow-2xl mb-10">
            <img
              src={imageUrl}
              alt="Video preview"
              className="w-full aspect-video object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>
        )}

        {/* Secondary CTA */}
        <a
          href={secondaryButtonUrl}
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-white font-semibold text-sm sm:text-base transition-opacity hover:opacity-90"
          style={{ backgroundColor: theme?.primary ?? "#6366f1" }}
        >
          {secondaryButtonText}
        </a>
      </div>
    </section>
  );
}
