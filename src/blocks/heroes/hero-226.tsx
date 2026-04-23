import type { BlockProps } from "@/blocks/types";
import { MapPin, Compass, Mountain } from "lucide-react";

export default function Hero226(props: BlockProps) {
  const {
    theme,
    heading = "Discover the World's Hidden Gems",
    subheading = "Adventure Awaits",
    bodyText = "Curated travel experiences that take you off the beaten path. From misty mountains to pristine coastlines, your next adventure starts here.",
    buttonText = "Plan Your Trip",
    buttonUrl = "#",
    secondaryButtonText = "Browse Destinations",
    secondaryButtonUrl = "#",
    imageUrl,
    items = [
      { title: "50+", description: "Destinations" },
      { title: "12K", description: "Happy Travelers" },
      { title: "4.9", description: "Average Rating" },
    ],
  } = props;

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#1b2d1b", color: theme?.foreground ?? "#f0ebe3" }}
      className="min-h-screen relative overflow-hidden flex items-end"
    >
      <style>{`
        @keyframes parallaxBg {
          from { opacity: 0; transform: scale(1.2) translateY(30px); }
          to { opacity: 1; transform: scale(1.05) translateY(0); }
        }
        @keyframes parallaxMid {
          from { opacity: 0; transform: translateY(60px); }
          to { opacity: 0.15; transform: translateY(0); }
        }
        @keyframes parallaxFg {
          from { opacity: 0; transform: translateY(80px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes floatBadge {
          from { opacity: 0; transform: translateY(30px) scale(0.9); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .hero226-bg { animation: parallaxBg 1.6s ease-out forwards; opacity: 0; }
        .hero226-mid { animation: parallaxMid 1.4s ease-out 0.3s forwards; opacity: 0; }
        .hero226-fg-1 { animation: parallaxFg 1.0s ease-out 0.6s forwards; opacity: 0; }
        .hero226-fg-2 { animation: parallaxFg 1.0s ease-out 0.8s forwards; opacity: 0; }
        .hero226-fg-3 { animation: parallaxFg 1.0s ease-out 1.0s forwards; opacity: 0; }
        .hero226-badge { animation: floatBadge 0.7s ease-out 1.2s forwards; opacity: 0; }
      `}</style>

      {/* Background layer - slowest */}
      <div className="hero226-bg absolute inset-0">
        {imageUrl ? (
          <img src={imageUrl} alt="" className="w-full h-full object-cover" />
        ) : (
          <div
            className="w-full h-full"
            style={{
              background: `linear-gradient(160deg, ${theme?.primary ?? "#2d5016"} 0%, ${theme?.background ?? "#1b2d1b"} 40%, ${theme?.accent ?? "#1a3a4a"} 100%)`,
            }}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
      </div>

      {/* Mid layer - decorative mountains silhouette */}
      <div className="hero226-mid absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg viewBox="0 0 1440 400" fill="none" className="w-full" preserveAspectRatio="none">
          <path d="M0 400L200 200L400 320L600 150L800 280L1000 100L1200 250L1440 180V400H0Z" fill="currentColor" opacity="0.15" />
        </svg>
      </div>

      {/* Foreground content */}
      <div className="relative z-10 w-full px-6 py-16 md:px-12 lg:px-20 pb-20">
        <div className="max-w-5xl mx-auto">
          <div className="hero226-fg-1 flex items-center gap-2 mb-4">
            <Compass className="w-4 h-4" style={{ color: theme?.accent ?? "#e8c170" }} />
            <span className="text-sm tracking-widest uppercase font-medium" style={{ color: theme?.accent ?? "#e8c170" }}>
              {subheading}
            </span>
          </div>

          <h1 className="hero226-fg-1 text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-5 max-w-3xl">
            {heading}
          </h1>

          <p className="hero226-fg-2 text-base md:text-lg opacity-65 max-w-lg mb-10 leading-relaxed">
            {bodyText}
          </p>

          <div className="hero226-fg-3 flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href={buttonUrl}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-semibold transition-transform hover:scale-105"
              style={{ backgroundColor: theme?.accent ?? "#e8c170", color: "#1a1a1a" }}
            >
              <MapPin className="w-4 h-4" />
              {buttonText}
            </a>
            <a
              href={secondaryButtonUrl}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-medium border border-white/20 hover:border-white/40 transition-colors"
            >
              <Mountain className="w-4 h-4" />
              {secondaryButtonText}
            </a>
          </div>

          {/* Stats badges */}
          <div className="flex flex-wrap gap-4">
            {items.map((item, i) => (
              <div
                key={i}
                className="hero226-badge flex items-center gap-3 px-5 py-3 rounded-full backdrop-blur-sm"
                style={{
                  backgroundColor: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  animationDelay: `${1.2 + i * 0.15}s`,
                }}
              >
                <span className="text-lg font-bold" style={{ color: theme?.accent ?? "#e8c170" }}>{item.title}</span>
                <span className="text-xs uppercase tracking-wider opacity-60">{item.description}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
