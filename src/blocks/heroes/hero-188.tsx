import type { BlockProps } from "@/blocks/types";
import { Disc3, Headphones } from "lucide-react";

export default function Hero188(props: BlockProps) {
  const {
    theme,
    heading = "Crafting Beats That Move",
    subheading = "DJ & Producer",
    bodyText = "From underground warehouse raves to festival main stages. Blending deep house, techno, and Afro-electronic into sets that keep the floor alive until sunrise.",
    buttonText = "Book for Event",
    buttonUrl = "#book",
    secondaryButtonText = "Latest Release",
    secondaryButtonUrl = "#release",
    items = [
      { title: "Neon Pulse", description: "Single — Out Now", label: "2026" },
      { title: "After Midnight EP", description: "5 Tracks", label: "2025" },
      { title: "Frequency Vol. 3", description: "Mix Album", label: "2025" },
    ],
  } = props;

  return (
    <section
      className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden"
      style={{
        backgroundColor: theme?.background ?? "#0a0a0f",
        color: theme?.foreground ?? "#f0f0ff",
      }}
    >
      {/* Neon glow circles */}
      <div
        className="absolute top-10 left-1/4 w-72 h-72 rounded-full blur-[100px] opacity-15 pointer-events-none"
        style={{ backgroundColor: theme?.primary ?? "#8b5cf6" }}
      />
      <div
        className="absolute bottom-10 right-1/4 w-60 h-60 rounded-full blur-[100px] opacity-15 pointer-events-none"
        style={{ backgroundColor: theme?.accent ?? "#06b6d4" }}
      />
      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(${theme?.primary ?? "#8b5cf6"}40 1px, transparent 1px), linear-gradient(90deg, ${theme?.primary ?? "#8b5cf6"}40 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 w-full max-w-3xl mx-auto text-center">
        {/* Spinning disc icon */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <Disc3
            className="w-8 h-8 animate-spin"
            style={{ color: theme?.primary ?? "#8b5cf6", animationDuration: "3s" }}
          />
          <span
            className="text-xs font-bold tracking-[0.3em] uppercase"
            style={{ color: theme?.accent ?? "#06b6d4" }}
          >
            {subheading}
          </span>
          <Headphones
            className="w-7 h-7"
            style={{ color: theme?.primary ?? "#8b5cf6" }}
          />
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black leading-none tracking-tight mb-6">
          <span>{heading.split(" ").slice(0, -1).join(" ")} </span>
          <span style={{ color: theme?.accent ?? "#06b6d4" }}>
            {heading.split(" ").slice(-1)}
          </span>
        </h1>

        {/* Body */}
        <p className="text-sm sm:text-base leading-relaxed max-w-lg mx-auto mb-10 opacity-60">
          {bodyText}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <a
            href={buttonUrl}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg text-sm font-bold uppercase tracking-wider transition-all duration-300 hover:scale-105"
            style={{
              background: `linear-gradient(135deg, ${theme?.primary ?? "#8b5cf6"}, ${theme?.accent ?? "#06b6d4"})`,
              color: "#fff",
            }}
          >
            {buttonText}
          </a>
          <a
            href={secondaryButtonUrl}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg text-sm font-bold uppercase tracking-wider border transition-all duration-300 hover:opacity-80"
            style={{
              borderColor: theme?.primary ?? "#8b5cf6",
              color: theme?.primary ?? "#8b5cf6",
            }}
          >
            <Disc3 className="w-4 h-4" />
            {secondaryButtonText}
          </a>
        </div>

        {/* Latest releases */}
        <div>
          <p
            className="text-xs font-bold tracking-[0.2em] uppercase mb-4 opacity-50"
          >
            Latest Releases
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {items.map((item, i) => (
              <div
                key={i}
                className="rounded-lg p-4 text-left transition-all duration-200 hover:scale-[1.02]"
                style={{
                  backgroundColor: `${theme?.primary ?? "#8b5cf6"}10`,
                  border: `1px solid ${theme?.primary ?? "#8b5cf6"}20`,
                }}
              >
                <span
                  className="text-[10px] font-bold tracking-wider uppercase"
                  style={{ color: theme?.accent ?? "#06b6d4" }}
                >
                  {item.label}
                </span>
                <p className="text-sm font-semibold mt-1">{item.title}</p>
                <p className="text-xs opacity-50 mt-0.5">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
