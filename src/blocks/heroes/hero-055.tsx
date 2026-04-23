import type { BlockProps } from "@/blocks/types";
import { Dumbbell, Flame, Zap, ArrowRight } from "lucide-react";

export default function Hero055(props: BlockProps) {
  const {
    theme,
    heading = "Transform Your Body, Elevate Your Life",
    subheading = "Join our world-class gym with expert trainers, cutting-edge equipment, and a community that pushes you further.",
    bodyText = "Starting at $29/month",
    buttonText = "Join Today",
    buttonUrl = "#",
    secondaryButtonText = "View Plans",
    secondaryButtonUrl = "#",
    imageUrl,
  } = props;

  return (
    <section
      style={{ backgroundColor: theme?.background || "#0f0f0f", color: theme?.foreground || "#ffffff" }}
      className="min-h-[80vh] flex items-center px-5 py-16"
    >
      <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center gap-10 md:gap-14">
        {/* Text Side */}
        <div className="flex-1 text-center md:text-left">
          <div className="inline-flex items-center gap-1.5 mb-6">
            <Flame className="w-5 h-5" style={{ color: theme?.accent || "#f97316" }} />
            <span className="text-sm font-bold uppercase tracking-widest" style={{ color: theme?.accent || "#f97316" }}>
              Limited Offer
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight leading-none uppercase">
            {heading}
          </h1>
          <p className="mt-6 text-lg opacity-60 leading-relaxed max-w-lg">
            {subheading}
          </p>

          {/* Pricing teaser */}
          <div
            className="mt-8 inline-block px-6 py-4 rounded-xl border"
            style={{ borderColor: theme?.primary ? `${theme.primary}44` : "#333" }}
          >
            <div className="text-sm opacity-50 uppercase tracking-wide">Membership</div>
            <div className="text-2xl font-black mt-1" style={{ color: theme?.primary || "#ef4444" }}>
              {bodyText}
            </div>
            <div className="text-xs opacity-40 mt-1">No commitment. Cancel anytime.</div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
            <a
              href={buttonUrl}
              style={{ backgroundColor: theme?.primary || "#ef4444" }}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg text-white font-bold uppercase tracking-wide hover:opacity-90 transition-opacity"
            >
              <Zap className="w-4 h-4" />
              {buttonText}
            </a>
            <a
              href={secondaryButtonUrl}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-bold uppercase tracking-wide border border-current opacity-50 hover:opacity-100 transition-opacity"
            >
              {secondaryButtonText}
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Image Side */}
        <div className="flex-1 w-full max-w-md md:max-w-none relative">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt="Fitness training"
              className="w-full aspect-[3/4] object-cover rounded-2xl"
            />
          ) : (
            <div
              className="w-full aspect-[3/4] rounded-2xl flex items-center justify-center relative overflow-hidden"
              style={{ backgroundColor: theme?.primary ? `${theme.primary}15` : "#1a1a1a" }}
            >
              <Dumbbell className="w-32 h-32 opacity-10" />
              {/* Decorative gradient overlay */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
              />
            </div>
          )}
          {/* Floating stat */}
          <div
            className="absolute bottom-6 left-6 px-5 py-3 rounded-xl backdrop-blur-sm"
            style={{ backgroundColor: theme?.primary ? `${theme.primary}cc` : "rgba(239,68,68,0.8)", color: "#fff" }}
          >
            <div className="text-2xl font-black">500+</div>
            <div className="text-xs opacity-80">Members this month</div>
          </div>
        </div>
      </div>
    </section>
  );
}
