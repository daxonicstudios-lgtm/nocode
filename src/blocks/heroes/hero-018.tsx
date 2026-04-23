import type { BlockProps } from "@/blocks/types";
import { ArrowUpRight } from "lucide-react";

export default function Hero018(props: BlockProps) {
  const {
    theme,
    heading = "Make Bold Moves",
    subheading = "For those who refuse to blend in.",
    buttonText = "Get Started",
    buttonUrl = "#start",
  } = props;

  return (
    <section
      style={{
        backgroundColor: theme?.background ?? "#0a0a0a",
        color: theme?.foreground ?? "#fafafa",
      }}
      className="min-h-screen flex flex-col items-center justify-center px-4 py-16 overflow-hidden"
    >
      {/* Oversized heading — fills width */}
      <h1
        className="text-[3.5rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] xl:text-[12rem] font-black uppercase leading-[0.85] tracking-tighter text-center w-full"
        style={{ color: theme?.foreground ?? "#fafafa" }}
      >
        {heading}
      </h1>

      {/* Thin accent line */}
      <div
        className="w-16 sm:w-24 h-1 rounded-full my-8 sm:my-10"
        style={{ backgroundColor: theme?.primary ?? "#ef4444" }}
      />

      {/* Subheading — much smaller contrast */}
      <p className="text-sm sm:text-lg font-light tracking-wide opacity-40 text-center max-w-md mb-10">
        {subheading}
      </p>

      {/* Minimal CTA */}
      <a
        href={buttonUrl}
        className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-widest transition-colors"
        style={{
          border: `2px solid ${theme?.primary ?? "#ef4444"}`,
          color: theme?.primary ?? "#ef4444",
        }}
      >
        {buttonText}
        <ArrowUpRight className="w-4 h-4" />
      </a>
    </section>
  );
}
