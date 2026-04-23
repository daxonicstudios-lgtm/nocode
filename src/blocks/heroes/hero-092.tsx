import type { BlockProps } from "@/blocks/types";
import { ArrowRight, Shield, Zap, Globe } from "lucide-react";

export default function Hero092(props: BlockProps) {
  const {
    theme,
    heading = "The Future of Decentralized Finance",
    subheading = "Trade, stake, and earn across multiple blockchains with zero friction. Secure, fast, and built for the next generation of finance.",
    buttonText = "Get Started",
    buttonUrl = "#",
    secondaryButtonText = "Read Whitepaper",
    secondaryButtonUrl = "#",
    items = [
      { title: "Bank-Grade Security", icon: "shield" },
      { title: "Lightning Fast", icon: "zap" },
      { title: "Multi-Chain", icon: "globe" },
    ],
  } = props;

  const iconMap: Record<string, React.ReactNode> = {
    shield: <Shield className="w-5 h-5" />,
    zap: <Zap className="w-5 h-5" />,
    globe: <Globe className="w-5 h-5" />,
  };

  return (
    <section
      style={{
        backgroundColor: theme?.background || "#0a0e1a",
        color: theme?.foreground || "#e2e8f0",
      }}
      className="min-h-[80vh] flex items-center px-5 py-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row-reverse items-center gap-10 md:gap-16">
        {/* Text Side (right on desktop) */}
        <div className="flex-1 text-center md:text-left">
          <div
            style={{ color: theme?.accent || "#a78bfa" }}
            className="text-sm font-semibold tracking-widest uppercase mb-4"
          >
            Web3 Platform
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight">
            {heading}
          </h1>
          <p className="mt-5 text-base sm:text-lg opacity-60 leading-relaxed max-w-lg">
            {subheading}
          </p>

          <div className="flex flex-wrap gap-6 mt-8 justify-center md:justify-start">
            {items.map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-sm">
                <span style={{ color: theme?.accent || "#a78bfa" }}>
                  {iconMap[item.icon || "shield"]}
                </span>
                <span className="opacity-80">{item.title}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 mt-8 justify-center md:justify-start">
            <a
              href={buttonUrl}
              style={{ backgroundColor: theme?.primary || "#7c3aed" }}
              className="inline-flex items-center gap-2 px-7 py-3 rounded-lg text-white font-medium hover:opacity-90 transition-opacity"
            >
              {buttonText}
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href={secondaryButtonUrl}
              className="inline-flex items-center gap-2 px-7 py-3 rounded-lg font-medium border border-white/20 hover:border-white/40 transition-colors"
            >
              {secondaryButtonText}
            </a>
          </div>
        </div>

        {/* Blockchain Visual (left on desktop) */}
        <div className="flex-1 w-full flex items-center justify-center">
          <div className="relative w-full max-w-md aspect-square">
            {/* Connecting lines */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
              <line x1="200" y1="80" x2="100" y2="200" stroke={theme?.primary || "#7c3aed"} strokeWidth="1.5" opacity="0.4" />
              <line x1="200" y1="80" x2="300" y2="200" stroke={theme?.primary || "#7c3aed"} strokeWidth="1.5" opacity="0.4" />
              <line x1="100" y1="200" x2="200" y2="320" stroke={theme?.accent || "#a78bfa"} strokeWidth="1.5" opacity="0.3" />
              <line x1="300" y1="200" x2="200" y2="320" stroke={theme?.accent || "#a78bfa"} strokeWidth="1.5" opacity="0.3" />
              <line x1="100" y1="200" x2="300" y2="200" stroke={theme?.primary || "#7c3aed"} strokeWidth="1.5" opacity="0.25" />
              <line x1="200" y1="80" x2="200" y2="320" stroke={theme?.accent || "#a78bfa"} strokeWidth="1" opacity="0.2" />
            </svg>

            {/* Nodes */}
            {[
              { cx: 200, cy: 80, size: "w-14 h-14" },
              { cx: 100, cy: 200, size: "w-12 h-12" },
              { cx: 300, cy: 200, size: "w-12 h-12" },
              { cx: 200, cy: 320, size: "w-14 h-14" },
              { cx: 150, cy: 140, size: "w-8 h-8" },
              { cx: 250, cy: 140, size: "w-8 h-8" },
              { cx: 150, cy: 260, size: "w-8 h-8" },
              { cx: 250, cy: 260, size: "w-8 h-8" },
            ].map((node, i) => (
              <div
                key={i}
                style={{
                  left: `${(node.cx / 400) * 100}%`,
                  top: `${(node.cy / 400) * 100}%`,
                  backgroundColor: i < 4 ? (theme?.primary || "#7c3aed") : (theme?.accent || "#a78bfa"),
                  boxShadow: `0 0 20px ${theme?.primary || "#7c3aed"}40`,
                }}
                className={`absolute ${node.size} rounded-full transform -translate-x-1/2 -translate-y-1/2 opacity-${i < 4 ? "90" : "50"}`}
              />
            ))}

            {/* Center glow */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full blur-3xl opacity-20"
              style={{ backgroundColor: theme?.primary || "#7c3aed" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
