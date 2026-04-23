import type { BlockProps } from "@/blocks/types";
import { Leaf, ArrowRight } from "lucide-react";

export default function Hero041(props: BlockProps) {
  const {
    theme,
    heading = "Your Wellness Journey",
    subheading = "Nurture your mind, body, and spirit with personalized wellness programs designed to help you thrive every single day.",
    buttonText = "Start Your Journey",
    buttonUrl = "#",
    secondaryButtonText = "Learn More",
    secondaryButtonUrl = "#",
  } = props;

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#f0fdf4", color: theme?.foreground ?? "#14532d" }}
      className="min-h-[80vh] flex items-center justify-center px-5 py-20 relative overflow-hidden"
    >
      {/* Soft decorative circles */}
      <div
        className="absolute top-[-60px] right-[-60px] w-48 h-48 rounded-full opacity-20"
        style={{ backgroundColor: theme?.accent ?? "#86efac" }}
      />
      <div
        className="absolute bottom-[-40px] left-[-40px] w-36 h-36 rounded-full opacity-15"
        style={{ backgroundColor: theme?.primary ?? "#22c55e" }}
      />

      <div className="max-w-2xl mx-auto text-center relative z-10">
        <div className="flex justify-center mb-6">
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center"
            style={{ backgroundColor: theme?.primary ?? "#22c55e", color: "#fff" }}
          >
            <Leaf className="w-8 h-8" />
          </div>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-tight">
          {heading}
        </h1>

        <p className="mt-6 text-lg sm:text-xl opacity-70 leading-relaxed max-w-xl mx-auto">
          {subheading}
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={buttonUrl}
            style={{ backgroundColor: theme?.primary ?? "#22c55e" }}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-white font-medium text-base hover:opacity-90 transition-opacity"
          >
            {buttonText}
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href={secondaryButtonUrl}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-medium text-base border-2 hover:opacity-80 transition-opacity"
            style={{ borderColor: theme?.primary ?? "#22c55e", color: theme?.primary ?? "#22c55e" }}
          >
            {secondaryButtonText}
          </a>
        </div>

        {/* Trust indicators */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm opacity-60">
          <span>5,000+ Members</span>
          <span className="hidden sm:inline">|</span>
          <span>98% Satisfaction</span>
          <span className="hidden sm:inline">|</span>
          <span>Holistic Approach</span>
        </div>
      </div>
    </section>
  );
}
