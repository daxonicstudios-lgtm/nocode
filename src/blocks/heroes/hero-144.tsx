import type { BlockProps } from "@/blocks/types";
import { Cpu, ArrowRight, Wifi } from "lucide-react";

export default function Hero144(props: BlockProps) {
  const {
    theme,
    heading = "Smart Devices, Smarter Connections",
    subheading = "IoT hardware engineered for the real world",
    bodyText = "Our sensor platform connects millions of devices seamlessly. From agriculture to manufacturing, monitor, automate, and optimize every process in real time.",
    buttonText = "Shop Hardware",
    buttonUrl = "#",
    secondaryButtonText = "View Documentation",
    secondaryButtonUrl = "#",
  } = props;

  const bg = theme?.background ?? "#0a0f1a";
  const fg = theme?.foreground ?? "#e2e8f0";
  const primary = theme?.primary ?? "#22d3ee";
  const accent = theme?.accent ?? "#06b6d4";

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: bg, color: fg }}
    >
      {/* Circuit board pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit144" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
              {/* Horizontal lines */}
              <line x1="0" y1="30" x2="50" y2="30" stroke={primary} strokeWidth="1" />
              <line x1="70" y1="30" x2="120" y2="30" stroke={primary} strokeWidth="1" />
              <line x1="0" y1="90" x2="40" y2="90" stroke={primary} strokeWidth="1" />
              <line x1="80" y1="90" x2="120" y2="90" stroke={primary} strokeWidth="1" />
              {/* Vertical lines */}
              <line x1="50" y1="30" x2="50" y2="70" stroke={primary} strokeWidth="1" />
              <line x1="70" y1="0" x2="70" y2="30" stroke={primary} strokeWidth="1" />
              <line x1="40" y1="90" x2="40" y2="120" stroke={primary} strokeWidth="1" />
              <line x1="80" y1="60" x2="80" y2="90" stroke={primary} strokeWidth="1" />
              {/* Nodes */}
              <circle cx="50" cy="30" r="3" fill={primary} />
              <circle cx="70" cy="30" r="3" fill={primary} />
              <circle cx="40" cy="90" r="3" fill={primary} />
              <circle cx="80" cy="90" r="3" fill={primary} />
              <circle cx="50" cy="70" r="2" fill={accent} />
              <circle cx="80" cy="60" r="2" fill={accent} />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit144)" />
        </svg>
      </div>

      {/* Glow spots */}
      <div
        className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full blur-3xl opacity-10 z-0"
        style={{ background: primary }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full blur-3xl opacity-10 z-0"
        style={{ background: accent }}
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 text-center lg:text-left">
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded text-xs font-bold uppercase tracking-widest mb-8"
              style={{
                border: `1px solid ${primary}44`,
                color: primary,
              }}
            >
              <Wifi className="w-3 h-3" />
              <span>IoT Platform v4.0</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight mb-6">
              {heading}
            </h1>

            <p className="text-lg sm:text-xl font-light mb-4 opacity-70">
              {subheading}
            </p>

            <p className="text-base sm:text-lg max-w-xl mb-10 opacity-50 leading-relaxed">
              {bodyText}
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 lg:justify-start justify-center">
              <a
                href={buttonUrl}
                className="inline-flex items-center gap-2 px-8 py-4 rounded text-base font-bold transition-transform hover:scale-105"
                style={{ backgroundColor: primary, color: bg }}
              >
                {buttonText}
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href={secondaryButtonUrl}
                className="inline-flex items-center gap-2 px-8 py-4 rounded text-base font-medium border transition-colors hover:opacity-80"
                style={{ borderColor: `${fg}33`, color: fg }}
              >
                {secondaryButtonText}
              </a>
            </div>
          </div>

          {/* Decorative chip/processor */}
          <div className="flex-shrink-0 hidden lg:block">
            <div className="relative w-56 h-56">
              {/* Outer ring */}
              <div
                className="absolute inset-0 rounded-xl border-2 opacity-30"
                style={{ borderColor: primary }}
              />
              {/* Inner ring */}
              <div
                className="absolute inset-4 rounded-lg border opacity-20"
                style={{ borderColor: accent }}
              />
              {/* Pins */}
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={`top-${i}`}
                  className="absolute w-0.5 h-4 -top-4"
                  style={{ left: `${25 + i * 18}%`, backgroundColor: `${primary}66` }}
                />
              ))}
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={`bottom-${i}`}
                  className="absolute w-0.5 h-4 -bottom-4"
                  style={{ left: `${25 + i * 18}%`, backgroundColor: `${primary}66` }}
                />
              ))}
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={`left-${i}`}
                  className="absolute h-0.5 w-4 -left-4"
                  style={{ top: `${25 + i * 18}%`, backgroundColor: `${primary}66` }}
                />
              ))}
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={`right-${i}`}
                  className="absolute h-0.5 w-4 -right-4"
                  style={{ top: `${25 + i * 18}%`, backgroundColor: `${primary}66` }}
                />
              ))}
              {/* Center icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Cpu className="w-16 h-16 opacity-40" style={{ color: primary }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
