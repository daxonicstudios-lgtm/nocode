import type { BlockProps } from "@/blocks/types";
import { ArrowRight, BookOpen, Clock, Feather } from "lucide-react";

export default function Hero115(props: BlockProps) {
  const {
    theme,
    heading = "Stories That Shape Tomorrow",
    subheading = "Independent journalism at its finest. In-depth reporting, bold perspectives, and narratives that matter.",
    bodyText = "EDITORIAL",
    buttonText = "Start Reading",
    buttonUrl = "#",
    secondaryButtonText = "Subscribe",
    secondaryButtonUrl = "#",
    items = [
      { title: "The Rise of Slow Cities", description: "Urban planning", label: "8 min read" },
      { title: "Africa's Tech Renaissance", description: "Innovation", label: "12 min read" },
      { title: "Design Without Borders", description: "Culture", label: "6 min read" },
    ],
  } = props;

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#faf8f5", color: theme?.foreground ?? "#1a1a1a" }}
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-5 py-20"
    >
      {/* Large background watermark text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span
          className="text-[18vw] md:text-[14vw] font-black uppercase tracking-tighter opacity-[0.04] whitespace-nowrap leading-none"
          style={{ color: theme?.foreground ?? "#1a1a1a" }}
        >
          {bodyText}
        </span>
      </div>

      {/* Decorative line elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 opacity-10" style={{ backgroundColor: theme?.foreground ?? "#1a1a1a" }} />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-24 opacity-10" style={{ backgroundColor: theme?.foreground ?? "#1a1a1a" }} />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Masthead style */}
        <div className="flex items-center justify-center gap-4 mb-10 text-xs uppercase tracking-[0.3em] opacity-40">
          <span>Est. 2020</span>
          <span className="w-1 h-1 rounded-full bg-current" />
          <span>Independent Press</span>
          <span className="w-1 h-1 rounded-full bg-current" />
          <span>Global</span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-8xl font-serif font-bold tracking-tight leading-[1.05]">
          {heading}
        </h1>

        <div
          className="mx-auto mt-6 w-16 h-0.5"
          style={{ backgroundColor: theme?.primary ?? "#b45309" }}
        />

        <p className="mt-6 text-base sm:text-lg opacity-60 leading-relaxed max-w-xl mx-auto font-serif italic">
          {subheading}
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={buttonUrl}
            style={{ backgroundColor: theme?.foreground ?? "#1a1a1a", color: theme?.background ?? "#faf8f5" }}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-none font-semibold hover:opacity-90 transition-opacity"
          >
            <BookOpen className="w-4 h-4" />
            {buttonText}
          </a>
          <a
            href={secondaryButtonUrl}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 font-semibold border-2 border-current opacity-60 hover:opacity-100 transition-opacity"
          >
            <Feather className="w-4 h-4" />
            {secondaryButtonText}
          </a>
        </div>

        {/* Featured articles */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-0 divide-y sm:divide-y-0 sm:divide-x divide-current/10">
          {items.map((item, i) => (
            <div key={i} className="py-6 sm:py-0 sm:px-6 text-left sm:text-center cursor-pointer group">
              <div
                className="text-xs font-semibold uppercase tracking-widest mb-2"
                style={{ color: theme?.primary ?? "#b45309" }}
              >
                {item.description}
              </div>
              <div className="text-base sm:text-lg font-bold group-hover:opacity-70 transition-opacity">
                {item.title}
              </div>
              <div className="mt-2 inline-flex items-center gap-1.5 text-xs opacity-40">
                <Clock className="w-3 h-3" />
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
