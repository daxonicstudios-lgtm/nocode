import type { BlockProps } from "@/blocks/types";
import { Shield, Lock, Eye, AlertTriangle, ArrowRight } from "lucide-react";

export default function Hero126(props: BlockProps) {
  const {
    theme,
    heading = "Defend Your Digital Infrastructure",
    subheading = "Enterprise-grade cybersecurity that detects, prevents, and responds to threats in real time. Zero trust. Zero compromise.",
    buttonText = "Get Protected",
    buttonUrl = "#",
    secondaryButtonText = "See Demo",
    secondaryButtonUrl = "#",
  } = props;

  const glowColor = theme?.primary ?? "#00ff88";

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#050510", color: theme?.foreground ?? "#e0e0f0" }}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Grid pattern background */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `linear-gradient(${glowColor} 1px, transparent 1px), linear-gradient(90deg, ${glowColor} 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Animated border glow - top */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: `linear-gradient(90deg, transparent, ${glowColor}, transparent)`,
        }}
      />
      {/* Animated border glow - bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background: `linear-gradient(90deg, transparent, ${glowColor}, transparent)`,
        }}
      />
      {/* Glow - left */}
      <div
        className="absolute top-0 bottom-0 left-0 w-px"
        style={{
          background: `linear-gradient(180deg, transparent, ${glowColor}, transparent)`,
        }}
      />
      {/* Glow - right */}
      <div
        className="absolute top-0 bottom-0 right-0 w-px"
        style={{
          background: `linear-gradient(180deg, transparent, ${glowColor}, transparent)`,
        }}
      />

      {/* Corner glow accents */}
      <div
        className="absolute top-0 left-0 w-32 h-32"
        style={{
          background: `radial-gradient(circle at top left, ${glowColor}22, transparent 70%)`,
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-32 h-32"
        style={{
          background: `radial-gradient(circle at bottom right, ${glowColor}22, transparent 70%)`,
        }}
      />

      {/* Center radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]"
        style={{
          background: `radial-gradient(circle, ${glowColor}08 0%, transparent 70%)`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-5 py-20 text-center">
        {/* Shield icon with glow */}
        <div className="flex justify-center mb-8">
          <div
            className="p-4 rounded-2xl border"
            style={{
              borderColor: `${glowColor}44`,
              boxShadow: `0 0 30px ${glowColor}22, inset 0 0 30px ${glowColor}08`,
            }}
          >
            <Shield className="w-10 h-10" style={{ color: glowColor }} />
          </div>
        </div>

        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono tracking-wider uppercase mb-8 border"
          style={{ borderColor: `${glowColor}33`, color: glowColor }}
        >
          <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: glowColor }} />
          Systems Active — All Threats Neutralized
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-tight">
          {heading}
        </h1>

        <p className="mt-6 text-lg md:text-xl opacity-50 max-w-2xl mx-auto leading-relaxed">
          {subheading}
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={buttonUrl}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold text-black hover:opacity-90 transition-opacity"
            style={{ backgroundColor: glowColor }}
          >
            <Lock className="w-4 h-4" />
            {buttonText}
          </a>
          <a
            href={secondaryButtonUrl}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold border hover:opacity-80 transition-opacity"
            style={{ borderColor: `${glowColor}44`, color: glowColor }}
          >
            {secondaryButtonText}
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {[
            { icon: Shield, value: "99.99%", label: "Uptime" },
            { icon: AlertTriangle, value: "2.4M", label: "Threats Blocked" },
            { icon: Eye, value: "<50ms", label: "Response Time" },
            { icon: Lock, value: "256-bit", label: "Encryption" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="p-4 rounded-lg border text-center"
              style={{ borderColor: `${glowColor}15` }}
            >
              <stat.icon className="w-4 h-4 mx-auto mb-2" style={{ color: glowColor }} />
              <div className="text-xl font-bold font-mono" style={{ color: glowColor }}>
                {stat.value}
              </div>
              <div className="text-xs opacity-40 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
