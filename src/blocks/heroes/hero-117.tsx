import type { BlockProps } from "@/blocks/types";
import { ArrowRight, Brain, Cpu, Layers } from "lucide-react";

export default function Hero117(props: BlockProps) {
  const {
    theme,
    heading = "Intelligence at Scale",
    subheading = "Build, train, and deploy machine learning models in minutes — not months. Infrastructure that grows with your ambitions.",
    buttonText = "Get API Key",
    buttonUrl = "#",
    secondaryButtonText = "Read Docs",
    secondaryButtonUrl = "#",
    items = [
      { icon: "brain", title: "200B+", description: "Parameters" },
      { icon: "cpu", title: "< 50ms", description: "Latency p99" },
      { icon: "layers", title: "99.95%", description: "Uptime SLA" },
    ],
  } = props;

  const iconMap: Record<string, React.ReactNode> = {
    brain: <Brain className="w-5 h-5" />,
    cpu: <Cpu className="w-5 h-5" />,
    layers: <Layers className="w-5 h-5" />,
  };

  // Generate deterministic dot positions
  const dots = Array.from({ length: 80 }, (_, i) => ({
    x: ((i * 37 + 13) % 100),
    y: ((i * 53 + 7) % 100),
    size: (i % 3) + 1,
    opacity: 0.1 + (i % 5) * 0.05,
  }));

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#030712", color: theme?.foreground ?? "#f9fafb" }}
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-5 py-20"
    >
      {/* Particle dots pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          {dots.map((dot, i) => (
            <circle
              key={i}
              cx={`${dot.x}%`}
              cy={`${dot.y}%`}
              r={dot.size}
              fill={i % 4 === 0 ? (theme?.primary ?? "#10b981") : (theme?.foreground ?? "#f9fafb")}
              opacity={dot.opacity}
            />
          ))}
          {/* Connection lines between nearby dots */}
          {dots.slice(0, 20).map((dot, i) => {
            const next = dots[(i + 3) % dots.length];
            return (
              <line
                key={`line-${i}`}
                x1={`${dot.x}%`}
                y1={`${dot.y}%`}
                x2={`${next.x}%`}
                y2={`${next.y}%`}
                stroke={theme?.primary ?? "#10b981"}
                strokeWidth="0.5"
                opacity="0.06"
              />
            );
          })}
        </svg>
      </div>

      {/* Central glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[150px] opacity-15"
        style={{ backgroundColor: theme?.primary ?? "#10b981" }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-semibold mb-8 border"
          style={{
            borderColor: `${theme?.primary ?? "#10b981"}40`,
            color: theme?.primary ?? "#10b981",
          }}
        >
          <span
            className="w-2 h-2 rounded-full animate-pulse"
            style={{ backgroundColor: theme?.primary ?? "#10b981" }}
          />
          v4.0 — Now Generally Available
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold tracking-tight leading-[1.05]">
          {heading.split(" ").map((word, i) => (
            <span key={i}>
              {i === 0 ? (
                <span style={{ color: theme?.primary ?? "#10b981" }}>{word}</span>
              ) : (
                word
              )}{" "}
            </span>
          ))}
        </h1>

        <p className="mt-6 text-base sm:text-lg opacity-50 leading-relaxed max-w-2xl mx-auto">
          {subheading}
        </p>

        {/* Code-style CTA */}
        <div className="mt-10 flex flex-col items-center gap-4">
          <div
            className="inline-flex items-center gap-3 px-5 py-3 rounded-lg font-mono text-sm border"
            style={{
              borderColor: `${theme?.primary ?? "#10b981"}20`,
              backgroundColor: `${theme?.primary ?? "#10b981"}08`,
            }}
          >
            <span className="opacity-40">$</span>
            <span>pip install neuralcore</span>
            <span
              className="px-2 py-0.5 rounded text-xs font-sans"
              style={{ backgroundColor: `${theme?.primary ?? "#10b981"}20`, color: theme?.primary ?? "#10b981" }}
            >
              copy
            </span>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={buttonUrl}
              style={{ backgroundColor: theme?.primary ?? "#10b981" }}
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg text-white font-semibold hover:opacity-90 transition-opacity"
            >
              {buttonText}
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href={secondaryButtonUrl}
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg font-semibold border border-white/10 hover:border-white/25 transition-colors"
            >
              {secondaryButtonText}
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-2 p-6 rounded-xl border"
              style={{
                borderColor: `${theme?.primary ?? "#10b981"}10`,
                backgroundColor: `${theme?.primary ?? "#10b981"}05`,
              }}
            >
              <div style={{ color: theme?.primary ?? "#10b981" }}>
                {iconMap[item.icon ?? ""] ?? <Cpu className="w-5 h-5" />}
              </div>
              <div className="text-2xl md:text-3xl font-bold">{item.title}</div>
              <div className="text-sm opacity-40">{item.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
