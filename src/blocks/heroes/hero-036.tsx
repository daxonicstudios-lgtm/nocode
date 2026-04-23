import type { BlockProps } from "@/blocks/types";
import { ArrowRight, TrendingUp } from "lucide-react";

export default function Hero036(props: BlockProps) {
  const {
    theme,
    heading = "Together We Build the Future",
    subheading = "Join thousands of backers supporting the next generation of creative tools.",
    buttonText = "Back This Project",
    buttonUrl = "#",
    bodyText = "80% funded",
  } = props;

  const primaryColor = theme?.primary || "#10b981";
  const progressPercent = parseInt(bodyText || "80", 10) || 80;

  return (
    <section
      className="min-h-[80vh] flex items-center justify-center px-4 py-16 sm:py-24"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="max-w-2xl mx-auto text-center w-full">
        <div
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs sm:text-sm font-semibold mb-6"
          style={{
            backgroundColor: primaryColor + "18",
            color: primaryColor,
          }}
        >
          <TrendingUp className="w-3.5 h-3.5" />
          Trending Now
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4 leading-tight">
          {heading}
        </h1>
        <p className="text-base sm:text-lg opacity-70 mb-10 max-w-lg mx-auto">
          {subheading}
        </p>

        {/* Progress section */}
        <div className="max-w-md mx-auto mb-10">
          <div className="flex items-center justify-between mb-2 text-sm font-medium">
            <span style={{ color: primaryColor }}>{bodyText}</span>
            <span className="opacity-50">Goal: $100,000</span>
          </div>
          <div className="w-full h-3 sm:h-4 rounded-full overflow-hidden bg-gray-200">
            <div
              className="h-full rounded-full transition-all duration-700"
              style={{
                width: `${Math.min(progressPercent, 100)}%`,
                backgroundColor: primaryColor,
              }}
            />
          </div>
          <div className="flex items-center justify-between mt-3 text-xs sm:text-sm opacity-60">
            <span>2,340 backers</span>
            <span>18 days left</span>
          </div>
        </div>

        <a
          href={buttonUrl}
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-white font-semibold transition-transform hover:scale-105 shadow-lg"
          style={{ backgroundColor: primaryColor }}
        >
          {buttonText}
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
