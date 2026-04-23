import type { BlockProps } from "@/blocks/types";
import { ArrowRight, Zap, Globe, Lock, BarChart3 } from "lucide-react";

export default function Hero008(props: BlockProps) {
  const {
    theme,
    heading = "Launch your product in record time",
    subheading = "The all-in-one platform for modern SaaS teams. Build, deploy, and scale — without the infrastructure headaches.",
    buttonText = "Start Building",
    buttonUrl = "#",
    secondaryButtonText = "View Pricing",
    secondaryButtonUrl = "#",
    items = [
      { icon: "zap", label: "Lightning Fast" },
      { icon: "globe", label: "Global CDN" },
      { icon: "lock", label: "SOC2 Compliant" },
      { icon: "chart", label: "Built-in Analytics" },
    ],
  } = props;

  const iconMap: Record<string, React.ReactNode> = {
    zap: <Zap className="w-3.5 h-3.5" />,
    globe: <Globe className="w-3.5 h-3.5" />,
    lock: <Lock className="w-3.5 h-3.5" />,
    chart: <BarChart3 className="w-3.5 h-3.5" />,
  };

  return (
    <section
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
      className="min-h-[85vh] flex items-center justify-center px-5 py-20"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
          {heading}
        </h1>
        <p className="mt-6 text-lg sm:text-xl opacity-60 leading-relaxed max-w-2xl mx-auto">
          {subheading}
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5">
          {items.map((item, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium border border-current/10"
              style={{
                backgroundColor: theme?.primary ? `${theme.primary}10` : "#f5f3ff",
                color: theme?.primary || "#6d28d9",
              }}
            >
              {iconMap[item.icon || ""] || <Zap className="w-3.5 h-3.5" />}
              {item.label}
            </span>
          ))}
        </div>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={buttonUrl}
            style={{ backgroundColor: theme?.primary }}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-white font-semibold text-base bg-violet-700 hover:opacity-90 transition-opacity w-full sm:w-auto justify-center"
          >
            {buttonText}
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href={secondaryButtonUrl}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-base opacity-60 hover:opacity-100 transition-opacity w-full sm:w-auto justify-center"
          >
            {secondaryButtonText}
          </a>
        </div>
      </div>
    </section>
  );
}
