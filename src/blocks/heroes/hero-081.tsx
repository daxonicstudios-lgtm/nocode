import type { BlockProps } from "@/blocks/types";
import { Heart, ArrowRight, Users, Globe } from "lucide-react";

export default function Hero081(props: BlockProps) {
  const {
    theme,
    heading = "Together, We Build Stronger Communities",
    subheading = "Every contribution creates lasting change. Join thousands of supporters making a real difference in the lives of families across the continent.",
    bodyText = "Since 2018, we have provided clean water, education, and healthcare to over 200,000 people.",
    buttonText = "Donate Now",
    buttonUrl = "#",
    secondaryButtonText = "Learn Our Story",
    secondaryButtonUrl = "#",
    imageUrl,
    items = [
      { label: "$25", description: "Feeds a family for a week" },
      { label: "$50", description: "School supplies for 10 children" },
      { label: "$100", description: "Clean water for a village" },
    ],
  } = props;

  return (
    <section
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
      className="min-h-[80vh] flex items-center px-5 py-16"
    >
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center gap-10 md:gap-16">
        {/* Text side */}
        <div className="flex-1 w-full">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-orange-100 text-orange-700 text-sm font-medium">
            <Heart className="w-4 h-4" />
            <span>Making an impact since 2018</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            {heading}
          </h1>
          <p className="mt-5 text-base sm:text-lg opacity-70 leading-relaxed max-w-lg">
            {subheading}
          </p>
          <p className="mt-4 text-sm opacity-60">{bodyText}</p>

          {/* Donation amount hints */}
          <div className="mt-8 flex flex-wrap gap-3">
            {items.map((item, i) => (
              <div
                key={i}
                className="px-5 py-3 rounded-xl border border-current/10 text-center"
                style={{ borderColor: theme?.primary ?? "#f97316" }}
              >
                <span className="block text-xl font-bold" style={{ color: theme?.primary ?? "#f97316" }}>
                  {item.label}
                </span>
                <span className="block text-xs opacity-60 mt-1">{item.description}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={buttonUrl}
              style={{ backgroundColor: theme?.primary ?? "#f97316" }}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white font-semibold hover:opacity-90 transition-opacity"
            >
              <Heart className="w-4 h-4" />
              {buttonText}
            </a>
            <a
              href={secondaryButtonUrl}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-current/20 font-medium hover:opacity-80 transition-opacity"
            >
              {secondaryButtonText}
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="mt-8 flex items-center gap-6 text-sm opacity-60">
            <span className="inline-flex items-center gap-1.5"><Users className="w-4 h-4" /> 12,000+ donors</span>
            <span className="inline-flex items-center gap-1.5"><Globe className="w-4 h-4" /> 30 countries</span>
          </div>
        </div>

        {/* Image side */}
        <div className="flex-1 w-full">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt="Community impact"
              className="w-full h-[350px] sm:h-[450px] md:h-[500px] object-cover rounded-3xl"
            />
          ) : (
            <div
              className="w-full h-[350px] sm:h-[450px] md:h-[500px] rounded-3xl flex items-center justify-center"
              style={{ backgroundColor: theme?.accent ?? "#fff7ed" }}
            >
              <div className="text-center">
                <Heart className="w-20 h-20 mx-auto mb-4" style={{ color: theme?.primary ?? "#f97316" }} />
                <p className="text-lg font-medium opacity-70">Community Impact</p>
                <p className="text-sm opacity-50 mt-1">Your support changes lives</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
