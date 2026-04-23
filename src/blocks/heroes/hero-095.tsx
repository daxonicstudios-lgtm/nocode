import type { BlockProps } from "@/blocks/types";
import { ArrowRight, TrendingUp, BarChart3, Target } from "lucide-react";

export default function Hero095(props: BlockProps) {
  const {
    theme,
    heading = "Grow Your Brand with Data-Driven Marketing",
    subheading = "We turn clicks into customers. Full-service digital marketing strategies that deliver measurable ROI from day one.",
    buttonText = "Grow Your Brand",
    buttonUrl = "#",
    secondaryButtonText = "See Case Studies",
    secondaryButtonUrl = "#",
    items = [
      { title: "SEO", value: "320%" },
      { title: "Social", value: "185%" },
      { title: "Email", value: "240%" },
      { title: "Paid Ads", value: "410%" },
    ],
  } = props;

  const barHeights = ["h-[45%]", "h-[65%]", "h-[55%]", "h-[85%]"];

  return (
    <section
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
      className="min-h-[80vh] flex items-center px-5 py-16"
    >
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center gap-10 md:gap-16">
        {/* Text Side */}
        <div className="flex-1 text-center md:text-left">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6"
            style={{
              backgroundColor: theme?.primary ? `${theme.primary}15` : "rgba(99,102,241,0.1)",
              color: theme?.primary || "#6366f1",
            }}
          >
            <TrendingUp className="w-4 h-4" />
            Marketing That Performs
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight">
            {heading}
          </h1>
          <p className="mt-5 text-base sm:text-lg opacity-70 leading-relaxed max-w-lg">
            {subheading}
          </p>

          <div className="flex items-center gap-6 mt-8 justify-center md:justify-start">
            <div className="text-center">
              <p className="text-2xl font-bold" style={{ color: theme?.primary || "#6366f1" }}>500+</p>
              <p className="text-xs opacity-60 mt-1">Campaigns Run</p>
            </div>
            <div className="w-px h-10 bg-current opacity-10" />
            <div className="text-center">
              <p className="text-2xl font-bold" style={{ color: theme?.primary || "#6366f1" }}>12x</p>
              <p className="text-xs opacity-60 mt-1">Avg. ROI</p>
            </div>
            <div className="w-px h-10 bg-current opacity-10" />
            <div className="text-center">
              <p className="text-2xl font-bold" style={{ color: theme?.primary || "#6366f1" }}>98%</p>
              <p className="text-xs opacity-60 mt-1">Client Retention</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 mt-8 justify-center md:justify-start">
            <a
              href={buttonUrl}
              style={{ backgroundColor: theme?.primary }}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg text-white font-medium bg-indigo-600 hover:opacity-90 transition-opacity"
            >
              {buttonText}
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href={secondaryButtonUrl}
              style={{ color: theme?.primary }}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-medium text-indigo-600 hover:opacity-80 transition-opacity underline underline-offset-4"
            >
              {secondaryButtonText}
            </a>
          </div>
        </div>

        {/* Chart Mockup Side */}
        <div className="flex-1 w-full">
          <div
            className="rounded-2xl p-6 sm:p-8 aspect-[4/3] flex flex-col"
            style={{ backgroundColor: theme?.primary ? `${theme.primary}08` : "#f5f3ff" }}
          >
            <div className="flex items-center gap-2 mb-4">
              <BarChart3 className="w-5 h-5" style={{ color: theme?.primary || "#6366f1" }} />
              <span className="font-semibold text-sm">Campaign Performance</span>
              <span className="ml-auto text-xs opacity-50">Growth YoY</span>
            </div>

            <div className="flex-1 flex items-end gap-4 sm:gap-6 px-2">
              {items.map((item, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-2 h-full justify-end">
                  <span
                    className="text-xs font-bold"
                    style={{ color: theme?.primary || "#6366f1" }}
                  >
                    {item.value}
                  </span>
                  <div
                    className={`w-full rounded-t-lg ${barHeights[i] || "h-[50%]"}`}
                    style={{
                      backgroundColor: i === 3
                        ? (theme?.primary || "#6366f1")
                        : (theme?.accent || "#a5b4fc"),
                      opacity: i === 3 ? 1 : 0.5 + i * 0.1,
                    }}
                  />
                  <span className="text-xs opacity-60 font-medium">{item.title}</span>
                </div>
              ))}
            </div>

            <div className="mt-4 pt-4 border-t border-current/5 flex items-center gap-2">
              <Target className="w-4 h-4 opacity-40" />
              <span className="text-xs opacity-40">All metrics verified by third-party analytics</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
