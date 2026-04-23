import type { BlockProps } from "@/blocks/types";
import { ArrowRight, Gamepad2, Trophy, Users, Zap } from "lucide-react";

export default function Hero120(props: BlockProps) {
  const {
    theme,
    heading = "Dominate the Arena",
    subheading = "Join the fastest-growing esports platform. Compete in tournaments, climb the leaderboards, and earn real rewards.",
    buttonText = "Play Now",
    buttonUrl = "#",
    secondaryButtonText = "View Tournaments",
    secondaryButtonUrl = "#",
    items = [
      { title: "500K+", description: "Active Players", icon: "users" },
      { title: "$2M", description: "Prize Pool", icon: "trophy" },
      { title: "24/7", description: "Live Matches", icon: "zap" },
    ],
  } = props;

  const iconMap: Record<string, React.ReactNode> = {
    users: <Users className="w-5 h-5" />,
    trophy: <Trophy className="w-5 h-5" />,
    zap: <Zap className="w-5 h-5" />,
  };

  const neonPrimary = theme?.primary ?? "#00ff87";
  const neonAccent = theme?.accent ?? "#ff0080";

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#0a0a0a", color: theme?.foreground ?? "#ffffff" }}
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-5 py-20"
    >
      {/* Neon glow effects */}
      <div
        className="absolute top-0 left-1/4 w-1 h-full opacity-20 blur-[2px]"
        style={{ backgroundColor: neonPrimary }}
      />
      <div
        className="absolute top-0 right-1/3 w-px h-full opacity-10 blur-[1px]"
        style={{ backgroundColor: neonAccent }}
      />

      {/* Corner accent lines */}
      <div className="absolute top-0 left-0 w-40 h-px" style={{ backgroundColor: neonPrimary, opacity: 0.6 }} />
      <div className="absolute top-0 left-0 w-px h-40" style={{ backgroundColor: neonPrimary, opacity: 0.6 }} />
      <div className="absolute bottom-0 right-0 w-40 h-px" style={{ backgroundColor: neonAccent, opacity: 0.6 }} />
      <div className="absolute bottom-0 right-0 w-px h-40" style={{ backgroundColor: neonAccent, opacity: 0.6 }} />

      {/* Large neon glows */}
      <div
        className="absolute top-1/4 left-0 w-64 h-64 rounded-full blur-[120px] opacity-20"
        style={{ backgroundColor: neonPrimary }}
      />
      <div
        className="absolute bottom-1/4 right-0 w-64 h-64 rounded-full blur-[120px] opacity-15"
        style={{ backgroundColor: neonAccent }}
      />

      {/* Diagonal scan lines */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, ${neonPrimary} 10px, ${neonPrimary} 11px)`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Gaming badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-sm text-xs font-bold tracking-widest uppercase mb-10 border"
          style={{
            borderColor: neonPrimary,
            color: neonPrimary,
            boxShadow: `0 0 15px ${neonPrimary}30, inset 0 0 15px ${neonPrimary}10`,
          }}
        >
          <Gamepad2 className="w-4 h-4" />
          Season 8 is Live
        </div>

        <h1 className="text-5xl sm:text-7xl md:text-9xl font-black uppercase tracking-tighter leading-[0.9]">
          {heading.split(" ").map((word, i) => (
            <span key={i} className="block">
              {i === heading.split(" ").length - 1 ? (
                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    backgroundImage: `linear-gradient(90deg, ${neonPrimary}, ${neonAccent})`,
                    filter: `drop-shadow(0 0 20px ${neonPrimary}50)`,
                  }}
                >
                  {word}
                </span>
              ) : (
                word
              )}
            </span>
          ))}
        </h1>

        <p className="mt-6 text-base sm:text-lg opacity-50 leading-relaxed max-w-xl mx-auto">
          {subheading}
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={buttonUrl}
            className="inline-flex items-center justify-center gap-2 px-10 py-4 font-black uppercase tracking-wider text-black hover:opacity-90 transition-opacity"
            style={{
              backgroundColor: neonPrimary,
              boxShadow: `0 0 25px ${neonPrimary}50, 0 0 50px ${neonPrimary}20`,
            }}
          >
            <Zap className="w-5 h-5" />
            {buttonText}
          </a>
          <a
            href={secondaryButtonUrl}
            className="inline-flex items-center justify-center gap-2 px-10 py-4 font-bold uppercase tracking-wider border hover:bg-white/5 transition-colors"
            style={{
              borderColor: `${neonAccent}60`,
              color: neonAccent,
            }}
          >
            {secondaryButtonText}
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Stats strip */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-0 sm:divide-x divide-white/10">
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-3 px-8 py-4">
              <div style={{ color: i % 2 === 0 ? neonPrimary : neonAccent }}>
                {iconMap[item.icon ?? ""] ?? <Zap className="w-5 h-5" />}
              </div>
              <div className="text-left">
                <div className="text-xl md:text-2xl font-bold">{item.title}</div>
                <div className="text-xs opacity-40 uppercase tracking-wider">{item.description}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Platform tags */}
        <div className="mt-10 flex items-center justify-center gap-3 text-[10px] uppercase tracking-widest opacity-30">
          {["PC", "Console", "Mobile", "VR"].map((platform) => (
            <span
              key={platform}
              className="px-3 py-1 border border-white/10 rounded-sm"
            >
              {platform}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
