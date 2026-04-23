import type { BlockProps } from "@/blocks/types";
import { ArrowRight, Building2, Ruler, Layers } from "lucide-react";

const borderDrawStyles = `
.border-draw-238 {
  position: relative;
  background: transparent;
}
.border-draw-238::before,
.border-draw-238::after {
  content: "";
  position: absolute;
  transition: all 0.5s cubic-bezier(0.65, 0, 0.35, 1);
}
.border-draw-238::before {
  top: 0;
  left: 0;
  width: 0;
  height: 0;
  border-top: 2px solid var(--draw-color);
  border-left: 2px solid var(--draw-color);
}
.border-draw-238::after {
  bottom: 0;
  right: 0;
  width: 0;
  height: 0;
  border-bottom: 2px solid var(--draw-color);
  border-right: 2px solid var(--draw-color);
}
.border-draw-238:hover::before,
.border-draw-238:hover::after {
  width: 100%;
  height: 100%;
}
.arch-line-238 {
  stroke-dasharray: 200;
  stroke-dashoffset: 200;
  transition: stroke-dashoffset 1s ease;
}
.border-draw-238:hover .arch-line-238 {
  stroke-dashoffset: 0;
}
`;

const iconMap = [Building2, Ruler, Layers];

export default function Hero238(props: BlockProps) {
  const {
    theme,
    heading = "Where Vision Meets Structure",
    subheading = "Okada Architecture Studio",
    bodyText = "We design spaces that inspire. From concept to completion, every line drawn serves a purpose, and every material chosen tells a story of place and time.",
    buttonText = "View Projects",
    buttonUrl = "#",
    secondaryButtonText = "Our Process",
    secondaryButtonUrl = "#",
    items = [
      { title: "Residential", description: "Homes that blend seamlessly with their natural surroundings", value: "42" },
      { title: "Commercial", description: "Workspaces designed for productivity and wellbeing", value: "28" },
      { title: "Cultural", description: "Museums, galleries, and public spaces that move people", value: "15" },
    ],
  } = props;

  const drawColor = theme?.primary ?? "#b8977e";
  const fg = theme?.foreground ?? "#e8e4de";

  return (
    <section
      style={{
        backgroundColor: theme?.background ?? "#1c1917",
        color: fg,
        "--draw-color": drawColor,
      } as React.CSSProperties}
      className="min-h-screen flex items-center px-4 py-20"
    >
      <style>{borderDrawStyles}</style>
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Left column */}
          <div className="lg:col-span-3">
            <p
              className="text-xs tracking-[0.3em] uppercase font-medium mb-8 flex items-center gap-4"
              style={{ color: drawColor }}
            >
              <span className="w-10 h-px" style={{ backgroundColor: drawColor }} />
              {subheading}
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light leading-tight mb-8 tracking-tight">
              {heading.split(" ").map((word, i) => (
                <span key={i}>
                  {word === "Vision" || word === "Structure" ? (
                    <span className="font-semibold" style={{ color: drawColor }}>{word}</span>
                  ) : (
                    word
                  )}{" "}
                </span>
              ))}
            </h1>

            <p className="text-sm sm:text-base opacity-50 mb-12 max-w-lg leading-relaxed font-light">
              {bodyText}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={buttonUrl}
                className="border-draw-238 inline-flex items-center justify-center gap-3 px-8 py-4 text-sm font-medium tracking-wider uppercase transition-colors duration-500"
                style={{
                  border: `1px solid ${fg}15`,
                  color: fg,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = drawColor;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = fg;
                }}
              >
                {buttonText}
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href={secondaryButtonUrl}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 text-sm font-medium tracking-wider uppercase opacity-40 hover:opacity-100 transition-opacity duration-500"
              >
                {secondaryButtonText}
              </a>
            </div>
          </div>

          {/* Right column — cards with border-draw */}
          <div className="lg:col-span-2 space-y-4 lg:pt-16">
            {items.slice(0, 3).map((item, i) => {
              const Icon = iconMap[i % iconMap.length];
              return (
                <div
                  key={i}
                  className="border-draw-238 p-6 cursor-default group"
                  style={{
                    border: `1px solid ${fg}10`,
                    backgroundColor: `${fg}03`,
                    transition: "background-color 0.5s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = `${fg}08`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = `${fg}03`;
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div className="shrink-0">
                      <Icon
                        className="w-5 h-5 transition-colors duration-500"
                        style={{ color: `${fg}40` }}
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-baseline justify-between mb-2">
                        <h3 className="text-base font-medium">{item.title}</h3>
                        <span
                          className="text-2xl font-light"
                          style={{ color: drawColor }}
                        >
                          {item.value}
                        </span>
                      </div>
                      <p className="text-xs opacity-40 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}

            <div className="pt-4">
              <p className="text-xs opacity-30 tracking-wider uppercase">
                85+ projects completed across 12 countries
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
