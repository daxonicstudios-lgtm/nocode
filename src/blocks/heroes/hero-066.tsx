import type { BlockProps } from "@/blocks/types";
import { Music, Disc3, Play, Headphones, ExternalLink } from "lucide-react";

export default function Hero066(props: BlockProps) {
  const {
    theme,
    heading = "New Album Out Now",
    subheading = "Echoes of Tomorrow",
    bodyText = "12 tracks of genre-defying sound. Blending Afrobeats, electronic, and soul into something entirely new. Stream everywhere music lives.",
    buttonText = "Listen Now",
    buttonUrl = "#",
    secondaryButtonText = "Tour Dates",
    secondaryButtonUrl = "#",
    imageUrl,
    items = [
      { label: "Spotify", url: "#" },
      { label: "Apple Music", url: "#" },
      { label: "YouTube Music", url: "#" },
    ],
  } = props;

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#0a0a0a", color: theme?.foreground ?? "#ffffff" }}
      className="min-h-[80vh] flex items-center overflow-hidden"
    >
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-center">
        {/* Text Right */}
        <div className="w-full md:w-1/2 px-6 py-12 md:px-14 lg:px-20">
          <div className="flex items-center gap-2 mb-3">
            <Music className="w-4 h-4" style={{ color: theme?.primary ?? "#a855f7" }} />
            <span
              className="text-xs font-bold uppercase tracking-[0.25em]"
              style={{ color: theme?.primary ?? "#a855f7" }}
            >
              New Release
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-none tracking-tighter">
            {heading}
          </h1>

          <p
            className="mt-3 text-xl sm:text-2xl italic font-light opacity-80"
            style={{ color: theme?.accent ?? "#e879f9" }}
          >
            {subheading}
          </p>

          <p className="mt-5 text-base opacity-50 leading-relaxed max-w-md">
            {bodyText}
          </p>

          {/* Streaming links */}
          <div className="mt-8 flex flex-wrap gap-3">
            {items.slice(0, 3).map((item, i) => (
              <a
                key={i}
                href={item.url ?? "#"}
                className="flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium border hover:opacity-80 transition-opacity"
                style={{ borderColor: `${theme?.foreground ?? "#ffffff"}20` }}
              >
                <Headphones className="w-4 h-4" style={{ color: theme?.primary ?? "#a855f7" }} />
                {item.label}
                <ExternalLink className="w-3 h-3 opacity-40" />
              </a>
            ))}
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href={buttonUrl}
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-white font-bold hover:opacity-90 transition-opacity"
              style={{
                background: `linear-gradient(135deg, ${theme?.primary ?? "#a855f7"}, ${theme?.accent ?? "#e879f9"})`,
              }}
            >
              <Play className="w-4 h-4" />
              {buttonText}
            </a>
            <a
              href={secondaryButtonUrl}
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-semibold border hover:opacity-80 transition-opacity"
              style={{ borderColor: `${theme?.foreground ?? "#ffffff"}25` }}
            >
              {secondaryButtonText}
            </a>
          </div>
        </div>

        {/* Album Art / Vinyl Left */}
        <div className="w-full md:w-1/2 relative flex items-center justify-center py-12 md:py-0">
          <div className="relative">
            {/* Vinyl disc behind */}
            <div
              className="absolute top-1/2 left-1/2 -translate-y-1/2 translate-x-[10%] w-64 h-64 sm:w-80 sm:h-80 rounded-full"
              style={{ backgroundColor: theme?.primary ? `${theme.primary}30` : "#a855f730" }}
            >
              <div className="absolute inset-0 rounded-full border-4 opacity-20" style={{ borderColor: theme?.foreground ?? "#ffffff" }} />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full" style={{ backgroundColor: theme?.background ?? "#0a0a0a" }}>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full" style={{ backgroundColor: theme?.primary ?? "#a855f7" }} />
              </div>
            </div>
            {/* Album cover */}
            {imageUrl ? (
              <img src={imageUrl} alt="Album art" className="relative z-10 w-64 h-64 sm:w-80 sm:h-80 object-cover rounded-lg shadow-2xl" />
            ) : (
              <div
                className="relative z-10 w-64 h-64 sm:w-80 sm:h-80 rounded-lg shadow-2xl flex items-center justify-center"
                style={{
                  background: `linear-gradient(135deg, ${theme?.primary ?? "#a855f7"}40, ${theme?.accent ?? "#e879f9"}20)`,
                }}
              >
                <Disc3 className="w-20 h-20 opacity-30" style={{ color: theme?.primary ?? "#a855f7" }} />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
