import type { BlockProps } from "@/blocks/types";
import { Building2, TrendingUp, Users, Globe, ArrowRight } from "lucide-react";

export default function Hero211(props: BlockProps) {
  const {
    theme,
    heading = "Powering Enterprise Growth",
    subheading = "Trusted by Fortune 500 companies worldwide",
    bodyText = "Our enterprise platform delivers measurable results at scale. See the numbers that define our impact across industries and continents.",
    buttonText = "Request Demo",
    buttonUrl = "#",
    secondaryButtonText = "View Case Studies",
    secondaryButtonUrl = "#",
    items = [
      { title: "Revenue Generated", value: "4,200,000,000", label: "$4.2B+", icon: "trending" },
      { title: "Enterprise Clients", value: "2,850", label: "2,850+", icon: "building" },
      { title: "Team Members", value: "18,400", label: "18,400+", icon: "users" },
      { title: "Countries Served", value: "142", label: "142", icon: "globe" },
    ],
  } = props;

  const iconMap: Record<string, React.ReactNode> = {
    trending: <TrendingUp className="w-6 h-6" />,
    building: <Building2 className="w-6 h-6" />,
    users: <Users className="w-6 h-6" />,
    globe: <Globe className="w-6 h-6" />,
  };

  return (
    <section
      className="min-h-screen flex items-center justify-center px-4 py-20 sm:px-8 relative overflow-hidden"
      style={{
        backgroundColor: theme?.background ?? "#0f172a",
        color: theme?.foreground ?? "#f1f5f9",
      }}
    >
      <style>{`
        @keyframes hero211CountUp {
          0% { opacity: 0; transform: translateY(30px) scale(0.8); }
          60% { opacity: 1; transform: translateY(-5px) scale(1.02); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes hero211Pulse {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
        .hero211-stat-0 { animation: hero211CountUp 0.8s ease-out 0.2s both; }
        .hero211-stat-1 { animation: hero211CountUp 0.8s ease-out 0.4s both; }
        .hero211-stat-2 { animation: hero211CountUp 0.8s ease-out 0.6s both; }
        .hero211-stat-3 { animation: hero211CountUp 0.8s ease-out 0.8s both; }
        .hero211-pulse { animation: hero211Pulse 2s ease-in-out infinite; }
      `}</style>

      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-3xl opacity-5"
        style={{ backgroundColor: theme?.primary ?? "#3b82f6" }}
      />

      <div className="w-full max-w-6xl mx-auto relative z-10 text-center">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase mb-8"
          style={{
            backgroundColor: `${theme?.primary ?? "#3b82f6"}15`,
            color: theme?.primary ?? "#3b82f6",
            border: `1px solid ${theme?.primary ?? "#3b82f6"}30`,
          }}
        >
          <Building2 className="w-3.5 h-3.5" />
          Enterprise Solutions
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-tight tracking-tight mb-6">
          {heading}
        </h1>

        <p className="text-base sm:text-lg opacity-60 max-w-2xl mx-auto mb-6">
          {subheading}
        </p>

        <p className="text-sm sm:text-base opacity-40 max-w-xl mx-auto mb-12">
          {bodyText}
        </p>

        {/* Animated stat counters */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-14">
          {items.map((item, i) => (
            <div
              key={i}
              className={`hero211-stat-${i} p-6 sm:p-8 rounded-2xl text-center`}
              style={{
                backgroundColor: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
                style={{
                  backgroundColor: `${theme?.primary ?? "#3b82f6"}20`,
                  color: theme?.primary ?? "#3b82f6",
                }}
              >
                {iconMap[item.icon as string] ?? <TrendingUp className="w-6 h-6" />}
              </div>
              <div
                className="text-3xl sm:text-4xl lg:text-5xl font-black mb-2 hero211-pulse"
                style={{ color: theme?.primary ?? "#3b82f6" }}
              >
                {item.label}
              </div>
              <p className="text-xs sm:text-sm opacity-50 font-medium">{item.title}</p>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={buttonUrl}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold tracking-wider uppercase rounded-xl transition-transform hover:scale-105"
            style={{
              backgroundColor: theme?.primary ?? "#3b82f6",
              color: "#ffffff",
            }}
          >
            {buttonText}
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href={secondaryButtonUrl}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold tracking-wider uppercase rounded-xl border-2 transition-opacity hover:opacity-80"
            style={{
              borderColor: theme?.primary ?? "#3b82f6",
              color: theme?.primary ?? "#3b82f6",
            }}
          >
            {secondaryButtonText}
          </a>
        </div>
      </div>
    </section>
  );
}
