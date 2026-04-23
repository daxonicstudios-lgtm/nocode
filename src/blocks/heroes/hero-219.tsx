import type { BlockProps } from "@/blocks/types";
import { BarChart3, TrendingUp, Zap, ArrowRight } from "lucide-react";

export default function Hero219(props: BlockProps) {
  const {
    theme,
    heading = "Data-Driven Insights That Matter",
    subheading = "Analytics & Intelligence Platform",
    bodyText = "Transform raw data into actionable intelligence. Our platform processes millions of data points to deliver insights that drive growth and optimize operations.",
    buttonText = "Explore Platform",
    buttonUrl = "#",
    secondaryButtonText = "View Demo",
    secondaryButtonUrl = "#",
    items = [
      { title: "Q1 Revenue", value: "85" },
      { title: "Q2 Revenue", value: "72" },
      { title: "Q3 Revenue", value: "93" },
      { title: "Q4 Revenue", value: "88" },
      { title: "Q1 Growth", value: "67" },
      { title: "Q2 Growth", value: "78" },
      { title: "Q3 Growth", value: "95" },
      { title: "Q4 Growth", value: "100" },
    ],
  } = props;

  return (
    <section
      className="min-h-screen flex items-center px-4 py-16 sm:px-8 lg:px-16 relative overflow-hidden"
      style={{
        backgroundColor: theme?.background ?? "#030712",
        color: theme?.foreground ?? "#e5e7eb",
      }}
    >
      <style>{`
        @keyframes hero219BarGrow {
          from { height: 0; opacity: 0.5; }
          to { height: var(--hero219-h); opacity: 1; }
        }
        @keyframes hero219FadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes hero219CountReveal {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
        .hero219-bar-0 { animation: hero219BarGrow 0.8s cubic-bezier(0.23, 1, 0.32, 1) 0.2s both; }
        .hero219-bar-1 { animation: hero219BarGrow 0.8s cubic-bezier(0.23, 1, 0.32, 1) 0.35s both; }
        .hero219-bar-2 { animation: hero219BarGrow 0.8s cubic-bezier(0.23, 1, 0.32, 1) 0.5s both; }
        .hero219-bar-3 { animation: hero219BarGrow 0.8s cubic-bezier(0.23, 1, 0.32, 1) 0.65s both; }
        .hero219-bar-4 { animation: hero219BarGrow 0.8s cubic-bezier(0.23, 1, 0.32, 1) 0.8s both; }
        .hero219-bar-5 { animation: hero219BarGrow 0.8s cubic-bezier(0.23, 1, 0.32, 1) 0.95s both; }
        .hero219-bar-6 { animation: hero219BarGrow 0.8s cubic-bezier(0.23, 1, 0.32, 1) 1.1s both; }
        .hero219-bar-7 { animation: hero219BarGrow 0.8s cubic-bezier(0.23, 1, 0.32, 1) 1.25s both; }
        .hero219-content { animation: hero219FadeUp 0.7s ease-out 0.1s both; }
        .hero219-label { animation: hero219CountReveal 0.4s ease-out 1.4s both; }
        .hero219-grid-line {
          border-top: 1px dashed rgba(255,255,255,0.06);
        }
      `}</style>

      {/* Grid lines background */}
      <div className="absolute inset-0 flex flex-col justify-between py-20 px-8 opacity-30 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="hero219-grid-line w-full" />
        ))}
      </div>

      <div className="w-full max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — content */}
          <div className="hero219-content space-y-6">
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-mono font-bold tracking-wider uppercase"
              style={{
                backgroundColor: `${theme?.primary ?? "#06b6d4"}15`,
                color: theme?.primary ?? "#06b6d4",
                border: `1px solid ${theme?.primary ?? "#06b6d4"}30`,
              }}
            >
              <Zap className="w-3 h-3" />
              {subheading}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight">
              {heading}
            </h1>

            <p className="text-sm sm:text-base opacity-40 leading-relaxed max-w-lg">
              {bodyText}
            </p>

            {/* Summary stats */}
            <div className="flex gap-8 pt-4">
              <div>
                <div className="text-2xl sm:text-3xl font-black" style={{ color: theme?.primary ?? "#06b6d4" }}>
                  2.4M+
                </div>
                <p className="text-xs opacity-40 mt-1">Data Points Daily</p>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black" style={{ color: theme?.accent ?? "#22c55e" }}>
                  99.7%
                </div>
                <p className="text-xs opacity-40 mt-1">Accuracy Rate</p>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black" style={{ color: "#f59e0b" }}>
                  &lt;50ms
                </div>
                <p className="text-xs opacity-40 mt-1">Query Response</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <a
                href={buttonUrl}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-bold rounded-lg transition-transform hover:scale-105"
                style={{
                  backgroundColor: theme?.primary ?? "#06b6d4",
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
                  borderColor: "rgba(255,255,255,0.12)",
                }}
              >
                {secondaryButtonText}
              </a>
            </div>
          </div>

          {/* Right — Animated bar chart */}
          <div
            className="rounded-2xl p-6 sm:p-8"
            style={{
              backgroundColor: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <BarChart3 className="w-4 h-4" style={{ color: theme?.primary ?? "#06b6d4" }} />
                <span className="text-sm font-bold opacity-60">Quarterly Performance</span>
              </div>
              <TrendingUp className="w-4 h-4" style={{ color: "#22c55e" }} />
            </div>

            {/* Y-axis labels + bars */}
            <div className="flex items-end gap-2 sm:gap-3 h-64 sm:h-72 relative">
              {/* Y-axis */}
              <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-[10px] font-mono opacity-20 -ml-1">
                <span>100</span>
                <span>75</span>
                <span>50</span>
                <span>25</span>
                <span>0</span>
              </div>

              {/* Bars */}
              <div className="flex items-end gap-2 sm:gap-3 flex-1 h-full pl-6">
                {items.slice(0, 8).map((item, i) => {
                  const val = Number(item.value) || 50;
                  const isEven = i % 2 === 0;
                  return (
                    <div key={i} className="flex-1 flex flex-col items-center h-full justify-end">
                      {/* Value label */}
                      <span
                        className="hero219-label text-[10px] font-mono font-bold mb-1"
                        style={{ color: isEven ? (theme?.primary ?? "#06b6d4") : (theme?.accent ?? "#22c55e") }}
                      >
                        {val}
                      </span>
                      {/* Bar */}
                      <div
                        className={`hero219-bar-${i} w-full rounded-t-md min-w-[20px]`}
                        style={{
                          ["--hero219-h" as string]: `${val}%`,
                          backgroundColor: isEven ? (theme?.primary ?? "#06b6d4") : (theme?.accent ?? "#22c55e"),
                          opacity: 0.8,
                        }}
                      />
                      {/* X label */}
                      <span className="text-[9px] font-mono opacity-30 mt-2 truncate w-full text-center">
                        {item.title?.replace("Revenue", "Rev").replace("Growth", "Grw")}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Legend */}
            <div className="flex gap-6 mt-6 pt-4 border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
              <div className="flex items-center gap-2 text-xs opacity-40">
                <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: theme?.primary ?? "#06b6d4" }} />
                Revenue
              </div>
              <div className="flex items-center gap-2 text-xs opacity-40">
                <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: theme?.accent ?? "#22c55e" }} />
                Growth
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
