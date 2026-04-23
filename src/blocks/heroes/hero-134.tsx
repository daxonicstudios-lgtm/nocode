import type { BlockProps } from "@/blocks/types";
import { Terminal, ChevronRight } from "lucide-react";

export default function Hero134(props: BlockProps) {
  const {
    theme,
    heading = "Build at the Speed of Thought",
    subheading = "Developer tools that actually work",
    bodyText = "Ship faster with intelligent code completion, real-time collaboration, and automated deployments. Your entire workflow, reimagined for modern development teams.",
    buttonText = "Start Building",
    buttonUrl = "#",
    secondaryButtonText = "Read the Docs",
    secondaryButtonUrl = "#",
  } = props;

  const primary = theme?.primary ?? "#00ff41";
  const accent = theme?.accent ?? "#00b8d4";
  const bg = theme?.background ?? "#0a0a0a";
  const fg = theme?.foreground ?? "#e0e0e0";

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: bg, color: fg }}
    >
      <style>{`
        @keyframes hero134-rain {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100vh); }
        }
        .hero134-rain-col {
          position: absolute;
          top: -100%;
          font-family: monospace;
          font-size: 14px;
          line-height: 1.2;
          writing-mode: vertical-rl;
          text-orientation: upright;
          white-space: nowrap;
          opacity: 0.06;
          animation: hero134-rain linear infinite;
          user-select: none;
          pointer-events: none;
        }
      `}</style>

      {/* Matrix rain columns */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="hero134-rain-col"
            style={{
              left: `${i * 5 + 1}%`,
              color: primary,
              animationDuration: `${8 + (i % 5) * 3}s`,
              animationDelay: `${(i % 7) * -2}s`,
            }}
          >
            {Array.from({ length: 30 }).map((_, j) => {
              const chars = "01アイウエオカキクケコ{}[]<>/=;";
              return chars[(i * 7 + j * 3) % chars.length];
            }).join("")}
          </div>
        ))}
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(${primary} 1px, transparent 1px), linear-gradient(90deg, ${primary} 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <div className="text-center">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md mb-8 font-mono text-xs"
            style={{
              backgroundColor: `${primary}15`,
              border: `1px solid ${primary}33`,
              color: primary,
            }}
          >
            <Terminal className="w-4 h-4" />
            <span>$ npm install @devkit/core</span>
            <span className="animate-pulse">▌</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-6">
            {heading}
          </h1>

          <p
            className="text-lg sm:text-xl font-mono mb-4"
            style={{ color: `${accent}cc` }}
          >
            {subheading}
          </p>

          <p className="text-sm sm:text-base max-w-2xl mx-auto mb-10 opacity-40 leading-relaxed font-mono">
            {bodyText}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={buttonUrl}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-md font-mono text-sm font-bold transition-all hover:scale-105"
              style={{
                backgroundColor: primary,
                color: bg,
                boxShadow: `0 0 30px ${primary}33`,
              }}
            >
              <ChevronRight className="w-4 h-4" />
              {buttonText}
            </a>

            <a
              href={secondaryButtonUrl}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-md font-mono text-sm font-bold border transition-colors hover:opacity-80"
              style={{
                borderColor: `${fg}22`,
                color: fg,
              }}
            >
              {secondaryButtonText}
            </a>
          </div>
        </div>

        {/* Fake terminal snippet */}
        <div
          className="mt-16 max-w-lg mx-auto rounded-lg overflow-hidden font-mono text-xs sm:text-sm"
          style={{
            backgroundColor: `${fg}08`,
            border: `1px solid ${fg}11`,
          }}
        >
          <div
            className="flex items-center gap-2 px-4 py-2"
            style={{ backgroundColor: `${fg}06` }}
          >
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#ff5f56" }} />
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#ffbd2e" }} />
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#27c93f" }} />
            <span className="ml-2 opacity-30">terminal</span>
          </div>
          <div className="px-4 py-3 leading-relaxed">
            <p style={{ color: `${primary}88` }}>
              <span style={{ color: primary }}>$</span> devkit deploy --production
            </p>
            <p className="opacity-40">Compiling... 2,847 modules</p>
            <p className="opacity-40">Optimizing bundle... done</p>
            <p style={{ color: primary }}>Deployed to production in 4.2s</p>
          </div>
        </div>
      </div>
    </section>
  );
}
