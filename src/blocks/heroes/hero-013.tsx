import type { BlockProps } from "@/blocks/types";
import { ArrowRight, BarChart3, Shield, Target } from "lucide-react";

export default function Hero013(props: BlockProps) {
  const {
    theme,
    heading = "Strategic Solutions for Growing Businesses",
    subheading = "Management consulting that delivers measurable results",
    bodyText = "We partner with forward-thinking organizations to optimize operations, accelerate growth, and build sustainable competitive advantages in today's complex markets.",
    buttonText = "Schedule a Consultation",
    buttonUrl = "#consult",
    secondaryButtonText = "Our Services",
    secondaryButtonUrl = "#services",
    items = [
      { title: "Revenue Growth", value: "40%", icon: "chart" },
      { title: "Clients Served", value: "200+", icon: "shield" },
      { title: "Success Rate", value: "97%", icon: "target" },
    ],
  } = props;

  const iconMap: Record<string, React.ReactNode> = {
    chart: <BarChart3 className="w-5 h-5" />,
    shield: <Shield className="w-5 h-5" />,
    target: <Target className="w-5 h-5" />,
  };

  return (
    <section
      style={{
        backgroundColor: theme?.background ?? "#fafbfc",
        color: theme?.foreground ?? "#0f172a",
      }}
      className="min-h-screen flex items-center justify-center px-6 py-20"
    >
      <div className="max-w-3xl w-full text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium mb-8 border"
          style={{
            borderColor: (theme?.primary ?? "#1e3a5f") + "30",
            color: theme?.primary ?? "#1e3a5f",
            backgroundColor: (theme?.primary ?? "#1e3a5f") + "08",
          }}
        >
          <span className="w-2 h-2 rounded-full" style={{ backgroundColor: theme?.primary ?? "#1e3a5f" }} />
          Trusted by industry leaders
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-5 leading-tight">
          {heading}
        </h1>

        {/* Subheading */}
        <p className="text-base sm:text-lg opacity-60 mb-4">
          {subheading}
        </p>

        {/* Body */}
        <p className="text-base sm:text-lg opacity-50 max-w-xl mx-auto mb-10 leading-relaxed">
          {bodyText}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <a
            href={buttonUrl}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg text-white font-semibold text-sm sm:text-base transition-opacity hover:opacity-90 shadow-md"
            style={{ backgroundColor: theme?.primary ?? "#1e3a5f" }}
          >
            {buttonText}
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href={secondaryButtonUrl}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold text-sm sm:text-base border transition-opacity hover:opacity-70"
            style={{
              borderColor: theme?.primary ?? "#1e3a5f",
              color: theme?.primary ?? "#1e3a5f",
            }}
          >
            {secondaryButtonText}
          </a>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-lg mx-auto">
          {items.slice(0, 3).map((item, i) => (
            <div key={i} className="text-center">
              <div
                className="flex justify-center mb-2"
                style={{ color: theme?.accent ?? "#2563eb" }}
              >
                {iconMap[item.icon ?? "chart"] ?? <BarChart3 className="w-5 h-5" />}
              </div>
              <p className="text-2xl sm:text-3xl font-bold" style={{ color: theme?.primary ?? "#1e3a5f" }}>
                {item.value ?? "0"}
              </p>
              <p className="text-xs sm:text-sm opacity-50 mt-1">
                {item.title ?? "Metric"}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
