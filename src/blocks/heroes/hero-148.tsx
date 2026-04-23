import type { BlockProps } from "@/blocks/types";
import { FlaskConical, ArrowRight, Microscope } from "lucide-react";

export default function Hero148(props: BlockProps) {
  const {
    theme,
    heading = "Advancing Science for a Healthier World",
    subheading = "Biotech research at the molecular frontier",
    bodyText = "Our laboratory combines cutting-edge gene therapy, precision diagnostics, and sustainable biomanufacturing to solve humanity's greatest health challenges.",
    buttonText = "Explore Research",
    buttonUrl = "#",
    secondaryButtonText = "Partner With Us",
    secondaryButtonUrl = "#",
  } = props;

  const bg = theme?.background ?? "#070d15";
  const fg = theme?.foreground ?? "#e0f2fe";
  const primary = theme?.primary ?? "#10b981";
  const accent = theme?.accent ?? "#34d399";

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: bg, color: fg }}
    >
      {/* Hexagonal grid pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.08]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hex148" x="0" y="0" width="56" height="100" patternUnits="userSpaceOnUse">
              <polygon
                points="28,2 52,17 52,47 28,62 4,47 4,17"
                fill="none"
                stroke={primary}
                strokeWidth="1"
              />
              <polygon
                points="28,52 52,67 52,97 28,112 4,97 4,67"
                fill="none"
                stroke={primary}
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hex148)" />
        </svg>
      </div>

      {/* Highlighted hexagons */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 w-32 h-32 opacity-10"
          style={{
            background: `radial-gradient(circle, ${primary}, transparent 70%)`,
            filter: "blur(40px)",
          }}
        />
        <div
          className="absolute bottom-1/3 right-1/3 w-48 h-48 opacity-10"
          style={{
            background: `radial-gradient(circle, ${accent}, transparent 70%)`,
            filter: "blur(50px)",
          }}
        />
        <div
          className="absolute top-1/2 right-1/5 w-24 h-24 opacity-15"
          style={{
            background: `radial-gradient(circle, ${primary}, transparent 70%)`,
            filter: "blur(30px)",
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 text-center lg:text-left">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-widest mb-8"
              style={{
                border: `1px solid ${primary}44`,
                color: primary,
              }}
            >
              <FlaskConical className="w-3.5 h-3.5" />
              <span>Breakthrough Research 2026</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight mb-6">
              {heading}
            </h1>

            <p className="text-lg sm:text-xl font-light mb-4 opacity-70">
              {subheading}
            </p>

            <p className="text-base sm:text-lg max-w-xl mb-10 opacity-45 leading-relaxed">
              {bodyText}
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 lg:justify-start justify-center">
              <a
                href={buttonUrl}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg text-base font-bold transition-transform hover:scale-105"
                style={{ backgroundColor: primary, color: bg }}
              >
                {buttonText}
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href={secondaryButtonUrl}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg text-base font-medium border transition-colors hover:opacity-80"
                style={{ borderColor: `${primary}44`, color: fg }}
              >
                <Microscope className="w-5 h-5" />
                {secondaryButtonText}
              </a>
            </div>
          </div>

          {/* Decorative DNA / hex cluster */}
          <div className="flex-shrink-0 hidden lg:block">
            <div className="relative w-64 h-64">
              {/* Concentric hexagons */}
              <svg viewBox="0 0 200 200" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <polygon
                  points="100,10 180,55 180,145 100,190 20,145 20,55"
                  fill="none"
                  stroke={primary}
                  strokeWidth="1"
                  opacity="0.3"
                />
                <polygon
                  points="100,35 155,62.5 155,137.5 100,165 45,137.5 45,62.5"
                  fill="none"
                  stroke={accent}
                  strokeWidth="1"
                  opacity="0.2"
                />
                <polygon
                  points="100,60 130,77.5 130,122.5 100,140 70,122.5 70,77.5"
                  fill={`${primary}11`}
                  stroke={primary}
                  strokeWidth="1"
                  opacity="0.4"
                />
                {/* Center dot */}
                <circle cx="100" cy="100" r="4" fill={primary} opacity="0.6" />
                {/* Vertex dots */}
                {[
                  [100, 10], [180, 55], [180, 145], [100, 190], [20, 145], [20, 55],
                ].map(([cx, cy], i) => (
                  <circle key={i} cx={cx} cy={cy} r="2.5" fill={primary} opacity="0.3" />
                ))}
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom glow line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px z-10"
        style={{ background: `linear-gradient(90deg, transparent, ${primary}44, transparent)` }}
      />
    </section>
  );
}
