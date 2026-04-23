import type { BlockProps } from "@/blocks/types";
import { Telescope, Rocket, Globe, ArrowRight } from "lucide-react";

export default function Hero129(props: BlockProps) {
  const {
    theme,
    heading = "Explore the Universe Beyond Imagination",
    subheading = "Discover distant galaxies, track celestial events, and join a global community of stargazers pushing the boundaries of human knowledge.",
    buttonText = "Start Exploring",
    buttonUrl = "#",
    secondaryButtonText = "Upcoming Events",
    secondaryButtonUrl = "#",
  } = props;

  const starColor = theme?.accent ?? "#fbbf24";

  // Generate deterministic star positions
  const stars = [
    { top: "8%", left: "12%", size: 2, opacity: 0.8 },
    { top: "15%", left: "85%", size: 3, opacity: 0.6 },
    { top: "22%", left: "45%", size: 1.5, opacity: 0.9 },
    { top: "35%", left: "72%", size: 2.5, opacity: 0.5 },
    { top: "10%", left: "30%", size: 1, opacity: 0.7 },
    { top: "50%", left: "8%", size: 2, opacity: 0.6 },
    { top: "65%", left: "92%", size: 1.5, opacity: 0.8 },
    { top: "78%", left: "55%", size: 2, opacity: 0.4 },
    { top: "85%", left: "20%", size: 3, opacity: 0.7 },
    { top: "42%", left: "38%", size: 1, opacity: 0.5 },
    { top: "18%", left: "62%", size: 2, opacity: 0.9 },
    { top: "70%", left: "75%", size: 1.5, opacity: 0.6 },
    { top: "55%", left: "25%", size: 2.5, opacity: 0.7 },
    { top: "30%", left: "5%", size: 1, opacity: 0.8 },
    { top: "90%", left: "42%", size: 2, opacity: 0.5 },
    { top: "5%", left: "55%", size: 1.5, opacity: 0.9 },
    { top: "45%", left: "88%", size: 1, opacity: 0.6 },
    { top: "60%", left: "48%", size: 2, opacity: 0.4 },
    { top: "25%", left: "18%", size: 3, opacity: 0.7 },
    { top: "75%", left: "65%", size: 1.5, opacity: 0.8 },
  ];

  // Constellation lines (pairs of star indices)
  const constellationLines = [
    [0, 4], [4, 10], [10, 2], [2, 9],
    [1, 3], [3, 11],
    [5, 12], [12, 8],
  ];

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#030014", color: theme?.foreground ?? "#e8e0ff" }}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Deep space gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse at 50% 30%, ${theme?.primary ?? "#4c1d95"}33 0%, transparent 60%), radial-gradient(ellipse at 20% 80%, ${theme?.accent ?? "#fbbf24"}11 0%, transparent 40%)`,
        }}
      />

      {/* Stars */}
      {stars.map((star, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            top: star.top,
            left: star.left,
            width: `${star.size}px`,
            height: `${star.size}px`,
            backgroundColor: i % 3 === 0 ? starColor : (theme?.foreground ?? "#e8e0ff"),
            opacity: star.opacity,
          }}
        />
      ))}

      {/* Constellation lines via SVG */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        {constellationLines.map(([a, b], i) => (
          <line
            key={i}
            x1={stars[a].left}
            y1={stars[a].top}
            x2={stars[b].left}
            y2={stars[b].top}
            stroke={theme?.primary ?? "#4c1d95"}
            strokeWidth="0.5"
            strokeOpacity="0.3"
          />
        ))}
      </svg>

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-5 py-20 text-center">
        <div className="flex justify-center mb-8">
          <div
            className="p-4 rounded-full"
            style={{
              background: `radial-gradient(circle, ${theme?.primary ?? "#4c1d95"}44 0%, transparent 70%)`,
            }}
          >
            <Telescope className="w-10 h-10" style={{ color: starColor }} />
          </div>
        </div>

        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium tracking-widest uppercase mb-8 border border-white/10">
          <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: starColor }} />
          Astronomy and Space Exploration
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-tight max-w-4xl mx-auto">
          {heading}
        </h1>

        <p className="mt-6 text-lg md:text-xl opacity-50 max-w-2xl mx-auto leading-relaxed">
          {subheading}
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={buttonUrl}
            style={{ backgroundColor: theme?.primary ?? "#7c3aed" }}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-white font-semibold hover:opacity-90 transition-opacity"
          >
            <Rocket className="w-5 h-5" />
            {buttonText}
          </a>
          <a
            href={secondaryButtonUrl}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold border border-white/20 hover:border-white/40 transition-colors"
          >
            {secondaryButtonText}
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Info cards */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-3xl mx-auto">
          {[
            { icon: Telescope, title: "Deep Sky Catalog", desc: "10,000+ celestial objects mapped" },
            { icon: Globe, title: "Live Sky Map", desc: "Real-time star tracking worldwide" },
            { icon: Rocket, title: "Mission Updates", desc: "Follow active space missions" },
          ].map((card) => (
            <div
              key={card.title}
              className="p-5 rounded-xl border border-white/10 backdrop-blur-sm bg-white/[0.03] text-center"
            >
              <card.icon className="w-6 h-6 mx-auto mb-3" style={{ color: starColor }} />
              <div className="text-sm font-semibold">{card.title}</div>
              <div className="text-xs opacity-40 mt-1">{card.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
