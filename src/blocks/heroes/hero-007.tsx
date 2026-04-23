import type { BlockProps } from "@/blocks/types";
import { Sparkles } from "lucide-react";

export default function Hero007(props: BlockProps) {
  const {
    theme,
    heading = "The future of web design",
    subheading = "A minimalist, powerful platform that lets you create pixel-perfect websites without writing a single line of code.",
    buttonText = "Get Early Access",
    buttonUrl = "#",
  } = props;

  const accentColor = theme?.accent || "#8b5cf6";

  return (
    <section
      style={{
        backgroundColor: theme?.background || "#0a0a0a",
        color: theme?.foreground || "#fafafa",
      }}
      className="min-h-[90vh] flex items-center justify-center px-5 py-24"
    >
      <div className="max-w-2xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 text-sm opacity-60 mb-10">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Now in public beta</span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight">
          {heading}
        </h1>
        <p className="mt-6 text-lg sm:text-xl opacity-50 leading-relaxed max-w-xl mx-auto">
          {subheading}
        </p>
        <div className="mt-12">
          <a
            href={buttonUrl}
            style={{
              backgroundColor: accentColor,
              boxShadow: `0 0 40px ${accentColor}50, 0 0 80px ${accentColor}25`,
            }}
            className="inline-flex items-center gap-2 px-10 py-4 rounded-full text-white font-semibold text-base hover:opacity-90 transition-opacity"
          >
            {buttonText}
          </a>
        </div>
        <p className="mt-6 text-sm opacity-30">No credit card required</p>
      </div>
    </section>
  );
}
