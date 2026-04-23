import type { BlockProps } from "@/blocks/types";
import { ArrowRight, Check, Users, BarChart3, Globe, Shield } from "lucide-react";

export default function Hero118(props: BlockProps) {
  const {
    theme,
    heading = "Enterprise Infrastructure That Scales With You",
    subheading = "Unified platform for observability, security, and compliance. Trusted by engineering teams at the world's most demanding companies.",
    buttonText = "Request Demo",
    buttonUrl = "#",
    secondaryButtonText = "View Pricing",
    secondaryButtonUrl = "#",
    items = [
      { title: "10M+", description: "Events / sec", icon: "chart" },
      { title: "4,200+", description: "Enterprise Clients", icon: "users" },
      { title: "45", description: "Global Regions", icon: "globe" },
      { title: "SOC 2", description: "Type II Certified", icon: "shield" },
    ],
  } = props;

  const statIcons: Record<string, React.ReactNode> = {
    chart: <BarChart3 className="w-4 h-4" />,
    users: <Users className="w-4 h-4" />,
    globe: <Globe className="w-4 h-4" />,
    shield: <Shield className="w-4 h-4" />,
  };

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#0f172a", color: theme?.foreground ?? "#f1f5f9" }}
      className="relative min-h-screen flex flex-col overflow-hidden"
    >
      {/* Gradient mesh background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-0 w-[50%] h-[60%] rounded-full blur-[140px] opacity-20"
          style={{ backgroundColor: theme?.primary ?? "#3b82f6" }}
        />
        <div
          className="absolute top-1/3 right-0 w-[40%] h-[50%] rounded-full blur-[120px] opacity-15"
          style={{ backgroundColor: theme?.accent ?? "#8b5cf6" }}
        />
        <div
          className="absolute bottom-0 left-1/3 w-[45%] h-[40%] rounded-full blur-[130px] opacity-10"
          style={{ backgroundColor: theme?.primary ?? "#3b82f6" }}
        />
      </div>

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Main content area */}
      <div className="flex-1 flex items-center justify-center px-5 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
            {["G2 Leader 2026", "Gartner Cool Vendor", "ISO 27001"].map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-medium border border-white/10"
              >
                <Check className="w-3 h-3" style={{ color: theme?.primary ?? "#3b82f6" }} />
                {badge}
              </span>
            ))}
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-[1.1]">
            {heading}
          </h1>

          <p className="mt-6 text-base sm:text-lg opacity-50 leading-relaxed max-w-2xl mx-auto">
            {subheading}
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={buttonUrl}
              style={{ backgroundColor: theme?.primary ?? "#3b82f6" }}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg text-white font-semibold hover:opacity-90 transition-opacity"
            >
              {buttonText}
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href={secondaryButtonUrl}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold border border-white/15 hover:border-white/30 transition-colors"
            >
              {secondaryButtonText}
            </a>
          </div>

          {/* Logo strip */}
          <div className="mt-12 text-xs uppercase tracking-widest opacity-30 mb-4">
            Trusted by industry leaders
          </div>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-20 text-sm font-semibold tracking-wider">
            {["ACME", "GLOBEX", "INITECH", "UMBRELLA", "SOYLENT"].map((name) => (
              <span key={name}>{name}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Stats bar at bottom */}
      <div
        className="relative z-10 border-t"
        style={{
          borderColor: `${theme?.primary ?? "#3b82f6"}20`,
          backgroundColor: `${theme?.primary ?? "#3b82f6"}08`,
        }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4">
          {items.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-3 px-6 py-5 md:py-6 border-r last:border-r-0 border-white/5"
            >
              <div style={{ color: theme?.primary ?? "#3b82f6" }}>
                {statIcons[item.icon ?? ""] ?? <BarChart3 className="w-4 h-4" />}
              </div>
              <div>
                <div className="text-lg md:text-xl font-bold">{item.title}</div>
                <div className="text-xs opacity-40">{item.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
