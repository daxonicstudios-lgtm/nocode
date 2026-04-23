import type { BlockProps } from "@/blocks/types";
import { ArrowUpRight, Minus } from "lucide-react";

export default function Hero009(props: BlockProps) {
  const {
    theme,
    heading = "We build digital experiences",
    subheading = "A creative studio specializing in brand identity, web design, and digital strategy for ambitious companies.",
    buttonText = "View Our Work",
    buttonUrl = "#",
    secondaryButtonText = "Get in Touch",
    secondaryButtonUrl = "#",
  } = props;

  return (
    <section
      style={{ backgroundColor: theme?.background || "#fafaf9", color: theme?.foreground }}
      className="min-h-[90vh] flex items-center justify-center px-5 py-24"
    >
      <div className="max-w-3xl mx-auto text-center">
        <div className="flex items-center justify-center gap-3 mb-10">
          <Minus className="w-6 h-6 opacity-30" />
          <span
            className="text-sm font-semibold uppercase tracking-[0.2em]"
            style={{ color: theme?.primary || "#92400e" }}
          >
            Creative Studio
          </span>
          <Minus className="w-6 h-6 opacity-30" />
        </div>
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.05]">
          {heading}
        </h1>
        <p className="mt-8 text-lg sm:text-xl opacity-50 leading-relaxed max-w-xl mx-auto">
          {subheading}
        </p>
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-5">
          <a
            href={buttonUrl}
            style={{ backgroundColor: theme?.primary }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-none text-white font-semibold text-base bg-stone-900 hover:opacity-90 transition-opacity w-full sm:w-auto justify-center"
          >
            {buttonText}
            <ArrowUpRight className="w-4 h-4" />
          </a>
          <a
            href={secondaryButtonUrl}
            className="inline-flex items-center gap-2 px-8 py-4 font-semibold text-base underline underline-offset-4 decoration-2 opacity-60 hover:opacity-100 transition-opacity w-full sm:w-auto justify-center"
            style={{ textDecorationColor: theme?.accent || undefined }}
          >
            {secondaryButtonText}
          </a>
        </div>
      </div>
    </section>
  );
}
