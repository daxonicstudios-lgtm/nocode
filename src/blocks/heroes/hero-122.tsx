import type { BlockProps } from "@/blocks/types";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero122(props: BlockProps) {
  const {
    theme,
    heading = "We Build Brands That Break Through",
    subheading = "A creative agency obsessed with craft, culture, and bold ideas that move people.",
    buttonText = "See Our Work",
    buttonUrl = "#",
    secondaryButtonText = "Start a Project",
    secondaryButtonUrl = "#",
  } = props;

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#0a0a0a", color: theme?.foreground ?? "#ffffff" }}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Large background text for mask effect */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span
          className="text-[20vw] md:text-[15vw] font-black uppercase tracking-tighter opacity-[0.04] leading-none"
          style={{ color: theme?.foreground ?? "#ffffff" }}
        >
          CREATE
        </span>
      </div>

      {/* Decorative lines */}
      <div
        className="absolute top-0 left-1/4 w-px h-full opacity-10"
        style={{ backgroundColor: theme?.foreground ?? "#ffffff" }}
      />
      <div
        className="absolute top-0 left-2/4 w-px h-full opacity-5"
        style={{ backgroundColor: theme?.foreground ?? "#ffffff" }}
      />
      <div
        className="absolute top-0 left-3/4 w-px h-full opacity-10"
        style={{ backgroundColor: theme?.foreground ?? "#ffffff" }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-5 py-20">
        <div className="flex items-center gap-3 mb-8">
          <Sparkles className="w-5 h-5" style={{ color: theme?.accent ?? "#f59e0b" }} />
          <span className="text-sm font-medium tracking-widest uppercase opacity-60">
            Award-Winning Creative Studio
          </span>
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.9]">
          <span className="block">{heading.split(" ").slice(0, 3).join(" ")}</span>
          <span
            className="block"
            style={{ color: theme?.primary ?? "#ef4444", WebkitTextStroke: "2px", WebkitTextFillColor: "transparent" } as React.CSSProperties}
          >
            {heading.split(" ").slice(3, 5).join(" ")}
          </span>
          <span className="block">
            {heading.split(" ").slice(5).join(" ")}
          </span>
        </h1>

        <p className="mt-8 text-lg md:text-xl opacity-50 max-w-xl leading-relaxed">
          {subheading}
        </p>

        <div className="mt-12 flex flex-col sm:flex-row gap-4">
          <a
            href={buttonUrl}
            style={{ backgroundColor: theme?.primary ?? "#ef4444" }}
            className="inline-flex items-center justify-center gap-3 px-10 py-4 text-white font-bold text-lg hover:opacity-90 transition-opacity"
          >
            {buttonText}
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href={secondaryButtonUrl}
            className="inline-flex items-center justify-center gap-3 px-10 py-4 font-bold text-lg border border-current opacity-40 hover:opacity-100 transition-opacity"
          >
            {secondaryButtonText}
          </a>
        </div>

        {/* Bottom info row */}
        <div className="absolute bottom-10 left-5 right-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 opacity-40 text-sm">
          <span className="tracking-widest uppercase">Est. 2018</span>
          <div className="flex gap-8">
            <span>Branding</span>
            <span>Digital</span>
            <span>Motion</span>
            <span>Strategy</span>
          </div>
        </div>
      </div>
    </section>
  );
}
