import type { BlockProps } from "@/blocks/types";
import { Play, Music } from "lucide-react";

export default function Hero191(props: BlockProps) {
  const {
    theme,
    heading = "Discover Your Next Favorite Song",
    subheading = "Curated Playlists for Every Mood",
    bodyText = "AI-powered music discovery that learns your taste. Millions of tracks, handpicked playlists, and personalized recommendations updated daily.",
    buttonText = "Start Listening",
    buttonUrl = "#listen",
    items = [
      { label: "Afrobeats" },
      { label: "Hip-Hop" },
      { label: "Amapiano" },
      { label: "R&B / Soul" },
      { label: "Gospel" },
      { label: "Jazz" },
      { label: "Pop" },
      { label: "Highlife" },
      { label: "Dancehall" },
      { label: "Alternative" },
    ],
  } = props;

  return (
    <section
      className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden"
      style={{
        backgroundColor: theme?.background ?? "#fafafa",
        color: theme?.foreground ?? "#18181b",
      }}
    >
      {/* Colorful background blobs */}
      <div
        className="absolute top-0 right-0 w-80 h-80 rounded-full blur-[100px] opacity-20 pointer-events-none"
        style={{ backgroundColor: theme?.primary ?? "#8b5cf6" }}
      />
      <div
        className="absolute bottom-0 left-0 w-72 h-72 rounded-full blur-[100px] opacity-15 pointer-events-none"
        style={{ backgroundColor: theme?.accent ?? "#f43f5e" }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-[120px] opacity-10 pointer-events-none"
        style={{ backgroundColor: "#06b6d4" }}
      />

      <div className="relative z-10 w-full max-w-2xl mx-auto text-center">
        {/* Icon + subheading */}
        <div className="flex items-center justify-center gap-2 mb-5">
          <Music className="w-4 h-4" style={{ color: theme?.primary ?? "#8b5cf6" }} />
          <span
            className="text-xs font-semibold tracking-wider uppercase"
            style={{ color: theme?.primary ?? "#8b5cf6" }}
          >
            {subheading}
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-5">
          {heading}
        </h1>

        {/* Body */}
        <p className="text-sm sm:text-base leading-relaxed opacity-60 max-w-lg mx-auto mb-8">
          {bodyText}
        </p>

        {/* Play button CTA */}
        <a
          href={buttonUrl}
          className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-sm font-bold tracking-wide transition-all duration-300 hover:scale-105 mb-12"
          style={{
            background: `linear-gradient(135deg, ${theme?.primary ?? "#8b5cf6"}, ${theme?.accent ?? "#f43f5e"})`,
            color: "#fff",
          }}
        >
          <span
            className="w-8 h-8 rounded-full flex items-center justify-center"
            style={{ backgroundColor: "rgba(255,255,255,0.2)" }}
          >
            <Play className="w-4 h-4 ml-0.5" fill="currentColor" />
          </span>
          {buttonText}
        </a>

        {/* Genre tags */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {items.map((item, i) => {
            const colors = [
              theme?.primary ?? "#8b5cf6",
              theme?.accent ?? "#f43f5e",
              "#06b6d4",
              "#f59e0b",
              "#10b981",
            ];
            const color = colors[i % colors.length];
            return (
              <span
                key={i}
                className="px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 hover:scale-105 cursor-pointer"
                style={{
                  backgroundColor: `${color}12`,
                  color: color,
                  border: `1px solid ${color}25`,
                }}
              >
                {item.label}
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
}
