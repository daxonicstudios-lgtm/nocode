import type { BlockProps } from "@/blocks/types";
import { ArrowUpRight } from "lucide-react";

export default function Hero035(props: BlockProps) {
  const {
    theme,
    heading = "No Rules. Just Build.",
    subheading = "Raw power for people who refuse to settle. Ship faster. Break conventions.",
    buttonText = "Enter Now",
    buttonUrl = "#",
  } = props;

  const primaryColor = theme?.primary || "#000000";
  const bgColor = theme?.background || "#ffffff";
  const fgColor = theme?.foreground || "#000000";

  return (
    <section
      className="min-h-[85vh] flex items-center justify-center px-4 py-16 sm:py-24 relative"
      style={{ backgroundColor: bgColor, color: fgColor }}
    >
      {/* Brutalist decorative border */}
      <div
        className="absolute inset-4 sm:inset-8 border-4 sm:border-[6px] pointer-events-none"
        style={{ borderColor: fgColor }}
      />

      <div className="max-w-3xl mx-auto text-center relative z-10 px-4">
        {/* Big label */}
        <span
          className="inline-block px-4 py-1 text-xs sm:text-sm font-black uppercase tracking-[0.3em] mb-8 border-2"
          style={{ borderColor: primaryColor, color: primaryColor }}
        >
          No-Code Platform
        </span>

        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tight mb-6 leading-[0.9]">
          {heading}
        </h1>

        {/* Thick rule */}
        <div
          className="w-24 sm:w-32 h-1.5 sm:h-2 mx-auto mb-6"
          style={{ backgroundColor: primaryColor }}
        />

        <p className="text-sm sm:text-base lg:text-lg font-mono uppercase tracking-wider mb-10 max-w-lg mx-auto opacity-80">
          {subheading}
        </p>

        <a
          href={buttonUrl}
          className="inline-flex items-center gap-2 px-8 sm:px-10 py-4 sm:py-5 font-black uppercase tracking-wider text-sm sm:text-base border-4 transition-all hover:-translate-y-1"
          style={{
            borderColor: fgColor,
            backgroundColor: fgColor,
            color: bgColor,
          }}
        >
          {buttonText}
          <ArrowUpRight className="w-5 h-5" />
        </a>

        {/* Decorative corner marks */}
        <div
          className="absolute -top-2 -left-2 w-6 h-6 border-t-4 border-l-4 hidden sm:block"
          style={{ borderColor: primaryColor }}
        />
        <div
          className="absolute -top-2 -right-2 w-6 h-6 border-t-4 border-r-4 hidden sm:block"
          style={{ borderColor: primaryColor }}
        />
        <div
          className="absolute -bottom-2 -left-2 w-6 h-6 border-b-4 border-l-4 hidden sm:block"
          style={{ borderColor: primaryColor }}
        />
        <div
          className="absolute -bottom-2 -right-2 w-6 h-6 border-b-4 border-r-4 hidden sm:block"
          style={{ borderColor: primaryColor }}
        />
      </div>
    </section>
  );
}
