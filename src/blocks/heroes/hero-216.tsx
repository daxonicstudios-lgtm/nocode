import type { BlockProps } from "@/blocks/types";
import { Code2, Palette, Database, Globe, ArrowRight, Sparkles } from "lucide-react";

export default function Hero216(props: BlockProps) {
  const {
    theme,
    heading = "Full-Stack Developer & Designer",
    subheading = "Available for Freelance",
    bodyText = "Crafting performant web applications and beautiful interfaces. 8+ years of shipping production-grade software for startups and enterprises alike.",
    buttonText = "View Portfolio",
    buttonUrl = "#",
    secondaryButtonText = "Hire Me",
    secondaryButtonUrl = "#",
    items = [
      { title: "React & Next.js", value: "95", icon: "code" },
      { title: "UI/UX Design", value: "88", icon: "palette" },
      { title: "Backend & APIs", value: "92", icon: "database" },
      { title: "DevOps & Cloud", value: "80", icon: "globe" },
      { title: "TypeScript", value: "97", icon: "code" },
      { title: "System Design", value: "85", icon: "database" },
    ],
  } = props;

  const iconMap: Record<string, React.ReactNode> = {
    code: <Code2 className="w-4 h-4" />,
    palette: <Palette className="w-4 h-4" />,
    database: <Database className="w-4 h-4" />,
    globe: <Globe className="w-4 h-4" />,
  };

  const barColors = ["#3b82f6", "#8b5cf6", "#06b6d4", "#22c55e", "#f59e0b", "#ec4899"];

  return (
    <section
      className="min-h-screen flex items-center px-4 py-16 sm:px-8 lg:px-16 relative overflow-hidden"
      style={{
        backgroundColor: theme?.background ?? "#111827",
        color: theme?.foreground ?? "#f3f4f6",
      }}
    >
      <style>{`
        @keyframes hero216BarFill {
          from { width: 0; }
          to { width: var(--bar-w); }
        }
        @keyframes hero216CountUp {
          from { opacity: 0; transform: scale(0.5); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes hero216SlideIn {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .hero216-bar-fill {
          animation: hero216BarFill 1.2s cubic-bezier(0.23, 1, 0.32, 1) both;
        }
        .hero216-row-0 { animation: hero216SlideIn 0.5s ease-out 0.1s both; }
        .hero216-row-0 .hero216-bar-fill { animation-delay: 0.3s; }
        .hero216-row-0 .hero216-pct { animation: hero216CountUp 0.4s ease-out 1.3s both; }
        .hero216-row-1 { animation: hero216SlideIn 0.5s ease-out 0.2s both; }
        .hero216-row-1 .hero216-bar-fill { animation-delay: 0.5s; }
        .hero216-row-1 .hero216-pct { animation: hero216CountUp 0.4s ease-out 1.5s both; }
        .hero216-row-2 { animation: hero216SlideIn 0.5s ease-out 0.3s both; }
        .hero216-row-2 .hero216-bar-fill { animation-delay: 0.7s; }
        .hero216-row-2 .hero216-pct { animation: hero216CountUp 0.4s ease-out 1.7s both; }
        .hero216-row-3 { animation: hero216SlideIn 0.5s ease-out 0.4s both; }
        .hero216-row-3 .hero216-bar-fill { animation-delay: 0.9s; }
        .hero216-row-3 .hero216-pct { animation: hero216CountUp 0.4s ease-out 1.9s both; }
        .hero216-row-4 { animation: hero216SlideIn 0.5s ease-out 0.5s both; }
        .hero216-row-4 .hero216-bar-fill { animation-delay: 1.1s; }
        .hero216-row-4 .hero216-pct { animation: hero216CountUp 0.4s ease-out 2.1s both; }
        .hero216-row-5 { animation: hero216SlideIn 0.5s ease-out 0.6s both; }
        .hero216-row-5 .hero216-bar-fill { animation-delay: 1.3s; }
        .hero216-row-5 .hero216-pct { animation: hero216CountUp 0.4s ease-out 2.3s both; }
      `}</style>

      <div className="w-full max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — intro */}
          <div className="space-y-6">
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase"
              style={{
                backgroundColor: `${theme?.primary ?? "#8b5cf6"}15`,
                color: theme?.primary ?? "#8b5cf6",
                border: `1px solid ${theme?.primary ?? "#8b5cf6"}30`,
              }}
            >
              <Sparkles className="w-3 h-3" />
              {subheading}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight">
              {heading}
            </h1>

            <p className="text-sm sm:text-base opacity-50 leading-relaxed max-w-md">
              {bodyText}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href={buttonUrl}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-bold rounded-lg transition-transform hover:scale-105"
                style={{
                  backgroundColor: theme?.primary ?? "#8b5cf6",
                  color: "#fff",
                }}
              >
                {buttonText}
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href={secondaryButtonUrl}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-bold rounded-lg border transition-opacity hover:opacity-80"
                style={{
                  borderColor: "rgba(255,255,255,0.15)",
                }}
              >
                {secondaryButtonText}
              </a>
            </div>
          </div>

          {/* Right — skill bars */}
          <div
            className="rounded-2xl p-6 sm:p-8 space-y-5"
            style={{
              backgroundColor: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <h3 className="text-sm font-bold uppercase tracking-widest opacity-40 mb-6">Technical Skills</h3>

            {items.slice(0, 6).map((item, i) => {
              const pct = Number(item.value) || 50;
              const color = barColors[i % barColors.length];
              return (
                <div key={i} className={`hero216-row-${i}`}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span style={{ color }}>{iconMap[item.icon as string] ?? <Code2 className="w-4 h-4" />}</span>
                      <span className="text-sm font-semibold">{item.title}</span>
                    </div>
                    <span className="hero216-pct text-sm font-black" style={{ color }}>
                      {pct}%
                    </span>
                  </div>
                  <div className="w-full h-2.5 rounded-full overflow-hidden" style={{ backgroundColor: "rgba(255,255,255,0.06)" }}>
                    <div
                      className="hero216-bar-fill h-full rounded-full"
                      style={{
                        ["--bar-w" as string]: `${pct}%`,
                        backgroundColor: color,
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
