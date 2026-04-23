import type { BlockProps } from "@/blocks/types";
import { Palette, ArrowUpRight } from "lucide-react";

export default function Hero043(props: BlockProps) {
  const {
    theme,
    heading = "We Design Bold Experiences",
    subheading = "A creative agency that turns wild ideas into digital masterpieces. Strategy, design, and technology — fused together.",
    buttonText = "View Our Work",
    buttonUrl = "#",
    secondaryButtonText = "Get in Touch",
    secondaryButtonUrl = "#",
  } = props;

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#0a0a0a", color: theme?.foreground ?? "#fafafa" }}
      className="min-h-[80vh] flex items-center justify-center px-5 py-20 relative overflow-hidden"
    >
      {/* Colorful decorative accents */}
      <div
        className="absolute top-12 left-8 w-20 h-20 rounded-full blur-2xl opacity-40"
        style={{ backgroundColor: theme?.primary ?? "#f43f5e" }}
      />
      <div
        className="absolute top-1/3 right-10 w-16 h-16 rounded-full blur-xl opacity-30"
        style={{ backgroundColor: theme?.accent ?? "#8b5cf6" }}
      />
      <div
        className="absolute bottom-16 left-1/4 w-24 h-24 rounded-full blur-2xl opacity-25"
        style={{ backgroundColor: "#fbbf24" }}
      />

      <div className="max-w-3xl mx-auto relative z-10">
        <div className="text-center mb-8">
          <Palette
            className="w-8 h-8 mx-auto mb-4"
            style={{ color: theme?.accent ?? "#8b5cf6" }}
          />
          <p
            className="text-xs font-mono uppercase tracking-[0.3em]"
            style={{ color: theme?.accent ?? "#8b5cf6" }}
          >
            Creative Studio
          </p>
        </div>

        {/* Asymmetric text within centered container */}
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight leading-[0.95]">
            <span className="block">We Design</span>
            <span
              className="block italic"
              style={{ color: theme?.primary ?? "#f43f5e" }}
            >
              Bold
            </span>
            <span className="block text-right sm:pr-8">Experiences</span>
          </h1>
        </div>

        <p className="mt-8 text-base sm:text-lg opacity-60 leading-relaxed max-w-lg mx-auto text-center">
          {subheading}
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={buttonUrl}
            style={{ backgroundColor: theme?.primary ?? "#f43f5e" }}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-white font-medium text-base hover:opacity-90 transition-opacity"
          >
            {buttonText}
            <ArrowUpRight className="w-4 h-4" />
          </a>
          <a
            href={secondaryButtonUrl}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-medium text-base border hover:opacity-80 transition-opacity"
            style={{ borderColor: "currentColor", opacity: 0.7 }}
          >
            {secondaryButtonText}
          </a>
        </div>
      </div>
    </section>
  );
}
