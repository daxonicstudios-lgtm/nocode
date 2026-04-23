import type { BlockProps } from "@/blocks/types";
import { Sparkles, ArrowRight } from "lucide-react";

export default function Hero049(props: BlockProps) {
  const {
    theme,
    heading = "Build Without Limits",
    subheading = "The next-generation platform that empowers creators, developers, and businesses to ship faster than ever before.",
    buttonText = "Start Building",
    buttonUrl = "#",
    items = [],
  } = props;

  const marqueeTexts = items.length > 0
    ? items.map((item) => item.label ?? item.title ?? "Innovation")
    : ["No-Code", "AI-Powered", "Lightning Fast", "Mobile-First", "Beautiful Design", "Ship Today", "Scale Tomorrow", "Zero Limits"];

  const marqueeContent = marqueeTexts.join(" \u2014 ") + " \u2014 ";

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#09090b", color: theme?.foreground ?? "#fafafa" }}
      className="min-h-[80vh] flex flex-col items-center justify-center relative overflow-hidden"
    >
      <style>{`
        @keyframes marqueeScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

      {/* Marquee banner */}
      <div
        className="w-full py-3 overflow-hidden border-b border-white/10"
        style={{ backgroundColor: theme?.primary ?? "#6366f1" }}
      >
        <div
          className="whitespace-nowrap text-sm sm:text-base font-medium text-white"
          style={{ animation: "marqueeScroll 20s linear infinite" }}
        >
          <span>{marqueeContent}{marqueeContent}</span>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex items-center justify-center px-5 py-20">
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Sparkles className="w-8 h-8" style={{ color: theme?.primary ?? "#6366f1" }} />
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-tight">
            {heading}
          </h1>

          <p className="mt-6 text-base sm:text-lg opacity-50 leading-relaxed max-w-lg mx-auto">
            {subheading}
          </p>

          <div className="mt-10">
            <a
              href={buttonUrl}
              style={{ backgroundColor: theme?.primary ?? "#6366f1" }}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-medium text-base hover:opacity-90 transition-opacity"
            >
              {buttonText}
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom marquee (reversed) */}
      <div
        className="w-full py-3 overflow-hidden border-t border-white/10"
        style={{ backgroundColor: theme?.primary ?? "#6366f1" }}
      >
        <div
          className="whitespace-nowrap text-sm sm:text-base font-medium text-white"
          style={{ animation: "marqueeScroll 20s linear infinite reverse" }}
        >
          <span>{marqueeContent}{marqueeContent}</span>
        </div>
      </div>
    </section>
  );
}
