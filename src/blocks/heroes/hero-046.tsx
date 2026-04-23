import type { BlockProps } from "@/blocks/types";
import { Heart, HandHeart, ArrowRight } from "lucide-react";

export default function Hero046(props: BlockProps) {
  const {
    theme,
    heading = "Make a Difference",
    subheading = "Every contribution brings hope. Join our community of changemakers supporting education, clean water, and healthcare across communities in need.",
    buttonText = "Donate Now",
    buttonUrl = "#",
    secondaryButtonText = "Our Mission",
    secondaryButtonUrl = "#",
    items = [],
  } = props;

  const livesImpacted = items.length > 0 ? items[0].value ?? "50,000+" : "50,000+";
  const countriesReached = items.length > 1 ? items[1].value ?? "32" : "32";

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#fef2f2", color: theme?.foreground ?? "#451a03" }}
      className="min-h-[80vh] flex items-center justify-center px-5 py-20 relative overflow-hidden"
    >
      {/* Warm gradient overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          background: `radial-gradient(circle at 50% 30%, ${theme?.primary ?? "#ef4444"}, transparent 70%)`,
        }}
      />

      <div className="max-w-2xl mx-auto text-center relative z-10">
        <div className="flex justify-center mb-6">
          <div className="relative">
            <HandHeart
              className="w-14 h-14"
              style={{ color: theme?.primary ?? "#ef4444" }}
            />
            <Heart
              className="w-5 h-5 absolute -top-1 -right-1 fill-current"
              style={{ color: theme?.accent ?? "#f97316" }}
            />
          </div>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight">
          {heading}
        </h1>

        <p className="mt-6 text-lg sm:text-xl opacity-70 leading-relaxed max-w-xl mx-auto">
          {subheading}
        </p>

        {/* Impact stats */}
        <div className="mt-10 flex items-center justify-center gap-8 sm:gap-12">
          <div className="text-center">
            <div
              className="text-3xl sm:text-4xl font-bold"
              style={{ color: theme?.primary ?? "#ef4444" }}
            >
              {livesImpacted}
            </div>
            <div className="text-sm opacity-60 mt-1">Lives Impacted</div>
          </div>
          <div
            className="w-px h-12 opacity-20"
            style={{ backgroundColor: theme?.foreground ?? "#451a03" }}
          />
          <div className="text-center">
            <div
              className="text-3xl sm:text-4xl font-bold"
              style={{ color: theme?.primary ?? "#ef4444" }}
            >
              {countriesReached}
            </div>
            <div className="text-sm opacity-60 mt-1">Countries Reached</div>
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={buttonUrl}
            style={{ backgroundColor: theme?.primary ?? "#ef4444" }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-semibold text-base hover:opacity-90 transition-opacity"
          >
            <Heart className="w-4 h-4 fill-current" />
            {buttonText}
          </a>
          <a
            href={secondaryButtonUrl}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-medium text-base hover:opacity-80 transition-opacity"
            style={{ color: theme?.primary ?? "#ef4444" }}
          >
            {secondaryButtonText}
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
