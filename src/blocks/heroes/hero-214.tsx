import type { BlockProps } from "@/blocks/types";
import { BarChart3, Users, TrendingUp, Activity, ArrowUpRight, ArrowRight } from "lucide-react";

export default function Hero214(props: BlockProps) {
  const {
    theme,
    heading = "Analytics That Drive Decisions",
    subheading = "SaaS Dashboard Platform",
    bodyText = "Real-time metrics, predictive insights, and automated reporting. Everything your team needs to scale with confidence.",
    buttonText = "Start Free Trial",
    buttonUrl = "#",
    secondaryButtonText = "See Pricing",
    secondaryButtonUrl = "#",
    items = [
      { title: "Monthly Revenue", value: "$284K", description: "+12.5% vs last month", icon: "trending", label: "MRR" },
      { title: "Active Users", value: "34,291", description: "+8.2% growth", icon: "users", label: "DAU" },
      { title: "Conversion Rate", value: "4.7%", description: "+0.3% improvement", icon: "chart", label: "CVR" },
      { title: "Uptime", value: "99.98%", description: "Last 90 days", icon: "activity", label: "SLA" },
    ],
  } = props;

  const iconMap: Record<string, React.ReactNode> = {
    trending: <TrendingUp className="w-4 h-4" />,
    users: <Users className="w-4 h-4" />,
    chart: <BarChart3 className="w-4 h-4" />,
    activity: <Activity className="w-4 h-4" />,
  };

  return (
    <section
      className="min-h-screen flex items-center justify-center px-4 py-16 sm:px-8 relative overflow-hidden"
      style={{
        backgroundColor: theme?.background ?? "#09090b",
        color: theme?.foreground ?? "#fafafa",
      }}
    >
      <style>{`
        @keyframes hero214CardIn {
          from { opacity: 0; transform: scale(0.9) translateY(20px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes hero214Shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        @keyframes hero214BarGrow {
          from { height: 0; }
          to { height: var(--bar-h); }
        }
        .hero214-card-0 { animation: hero214CardIn 0.5s ease-out 0.1s both; }
        .hero214-card-1 { animation: hero214CardIn 0.5s ease-out 0.25s both; }
        .hero214-card-2 { animation: hero214CardIn 0.5s ease-out 0.4s both; }
        .hero214-card-3 { animation: hero214CardIn 0.5s ease-out 0.55s both; }
        .hero214-bar {
          animation: hero214BarGrow 1s ease-out 0.8s both;
        }
        .hero214-shimmer {
          background: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.05) 50%, transparent 100%);
          background-size: 200% 100%;
          animation: hero214Shimmer 3s ease-in-out infinite;
        }
      `}</style>

      {/* Dot grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(${theme?.foreground ?? "#fff"} 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />

      <div className="w-full max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-mono font-bold tracking-wider uppercase mb-6"
            style={{
              backgroundColor: `${theme?.primary ?? "#8b5cf6"}15`,
              color: theme?.primary ?? "#8b5cf6",
              border: `1px solid ${theme?.primary ?? "#8b5cf6"}30`,
            }}
          >
            <Activity className="w-3 h-3" />
            {subheading}
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight mb-5">
            {heading}
          </h1>

          <p className="text-sm sm:text-base opacity-40 max-w-xl mx-auto">
            {bodyText}
          </p>
        </div>

        {/* KPI Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {items.map((item, i) => (
            <div
              key={i}
              className={`hero214-card-${i} hero214-shimmer rounded-xl p-5 relative overflow-hidden`}
              style={{
                backgroundColor: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div className="flex items-center justify-between mb-4">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{
                    backgroundColor: `${theme?.primary ?? "#8b5cf6"}20`,
                    color: theme?.primary ?? "#8b5cf6",
                  }}
                >
                  {iconMap[item.icon as string] ?? <BarChart3 className="w-4 h-4" />}
                </div>
                <span className="text-[10px] font-mono opacity-30 uppercase">{item.label}</span>
              </div>

              <div className="text-2xl sm:text-3xl font-black mb-1">
                {item.value}
              </div>

              <div className="flex items-center gap-1.5 text-xs">
                <ArrowUpRight className="w-3 h-3" style={{ color: "#22c55e" }} />
                <span style={{ color: "#22c55e" }}>{item.description}</span>
              </div>

              <p className="text-xs opacity-30 mt-2 font-medium">{item.title}</p>

              {/* Mini bar chart decoration */}
              <div className="flex items-end gap-1 absolute bottom-3 right-4 h-8">
                {[40, 65, 45, 80, 55, 70, 90].map((h, bi) => (
                  <div
                    key={bi}
                    className="hero214-bar w-1.5 rounded-full"
                    style={{
                      ["--bar-h" as string]: `${h}%`,
                      backgroundColor: `${theme?.primary ?? "#8b5cf6"}${bi === 6 ? "80" : "30"}`,
                    }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={buttonUrl}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold rounded-lg transition-transform hover:scale-105"
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
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold rounded-lg border transition-opacity hover:opacity-80"
            style={{
              borderColor: "rgba(255,255,255,0.15)",
              color: theme?.foreground ?? "#fafafa",
            }}
          >
            {secondaryButtonText}
          </a>
        </div>
      </div>
    </section>
  );
}
