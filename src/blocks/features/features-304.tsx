import type { BlockProps } from "@/blocks/types";
import { Sparkles, ArrowRight } from "lucide-react";

export default function Features304(props: BlockProps) {
  const {
    theme,
    heading = "AI-Powered Insights",
    subheading = "Feature Spotlight",
    bodyText = "Our machine learning engine analyzes millions of data points to surface the insights that matter most. No configuration needed — it learns from your data and delivers actionable recommendations in real time.",
    buttonText = "Explore This Feature",
    buttonUrl = "#",
    imageUrl,
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-10 items-center">
          <div className="flex-1">
            <span className="text-xs font-semibold uppercase tracking-widest mb-3 inline-block" style={{ color: theme?.primary || "#6366f1" }}>
              {subheading}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">{heading}</h2>
            <p className="opacity-60 leading-relaxed mb-6 text-lg">{bodyText}</p>
            <a
              href={buttonUrl}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-white font-medium"
              style={{ backgroundColor: theme?.primary || "#6366f1" }}
            >
              {buttonText} <ArrowRight size={16} />
            </a>
          </div>
          <div className="flex-1 w-full">
            {imageUrl ? (
              <img src={imageUrl} alt={heading} className="w-full rounded-2xl" />
            ) : (
              <div className="w-full h-64 lg:h-80 rounded-2xl flex items-center justify-center" style={{ backgroundColor: theme?.primary ? `${theme.primary}12` : "#eef2ff" }}>
                <Sparkles size={64} style={{ color: theme?.primary || "#6366f1" }} className="opacity-40" />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
