import type { BlockProps } from "@/blocks/types";
import { ArrowRight } from "lucide-react";

export default function Hero006(props: BlockProps) {
  const {
    theme,
    heading = "Your vision, beautifully realized",
    subheading = "Transform your ideas into a stunning website in minutes. Designed for creators who refuse to compromise.",
    buttonText = "Create Your Site",
    buttonUrl = "#",
    secondaryButtonText = "Learn More",
    secondaryButtonUrl = "#",
  } = props;

  const gradientBg =
    theme?.primary && theme?.accent
      ? `linear-gradient(135deg, ${theme.primary}, ${theme.accent})`
      : "linear-gradient(135deg, #6366f1, #a855f7, #ec4899)";

  return (
    <section
      style={{ background: gradientBg }}
      className="min-h-[90vh] flex items-center justify-center px-5 py-24 text-white"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
          {heading}
        </h1>
        <p className="mt-8 text-lg sm:text-xl leading-relaxed max-w-xl mx-auto text-white/75">
          {subheading}
        </p>
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={buttonUrl}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-gray-900 font-semibold text-base hover:bg-white/90 transition-colors w-full sm:w-auto justify-center"
          >
            {buttonText}
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href={secondaryButtonUrl}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-white/30 text-white font-semibold text-base hover:bg-white/10 transition-colors w-full sm:w-auto justify-center"
          >
            {secondaryButtonText}
          </a>
        </div>
      </div>
    </section>
  );
}
