import type { BlockProps } from "@/blocks/types";
import { Camera, Eye } from "lucide-react";

export default function Hero184(props: BlockProps) {
  const {
    theme,
    heading = "Raw. Unscripted. Real.",
    subheading = "Street & Documentary Photography",
    bodyText = "I walk the streets with my lens, capturing the unfiltered pulse of urban life. Every frame tells a story the world needs to see.",
    buttonText = "Latest Project",
    buttonUrl = "#",
    secondaryButtonText = "About Me",
    secondaryButtonUrl = "#",
    items = [
      { title: "The Unseen City", description: "2024 — Documentary series on urban isolation" },
      { title: "Faces of Transit", description: "2023 — Commuters across 12 metro systems" },
      { title: "After Midnight", description: "2022 — Night street photography anthology" },
    ],
  } = props;

  return (
    <section
      className="min-h-screen flex items-center px-4 py-16 sm:px-8 lg:px-16"
      style={{
        backgroundColor: theme?.background ?? "#111111",
        color: theme?.foreground ?? "#e0e0e0",
      }}
    >
      <div className="w-full max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Main column */}
          <div className="lg:col-span-8 space-y-10">
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <div
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: theme?.primary ?? "#ff3b30" }}
              />
              <span className="text-xs tracking-[0.3em] uppercase opacity-50 font-mono">
                {subheading}
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-none tracking-tighter uppercase">
              {heading}
            </h1>

            {/* Body */}
            <p className="text-base sm:text-lg leading-relaxed opacity-50 max-w-lg font-mono">
              {bodyText}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={buttonUrl}
                className="inline-flex items-center gap-2 px-8 py-4 text-xs font-bold tracking-[0.2em] uppercase transition-opacity hover:opacity-80 font-mono"
                style={{
                  backgroundColor: theme?.primary ?? "#ff3b30",
                  color: "#ffffff",
                }}
              >
                <Eye className="w-4 h-4" />
                {buttonText}
              </a>
              <a
                href={secondaryButtonUrl}
                className="inline-flex items-center gap-2 px-8 py-4 text-xs font-bold tracking-[0.2em] uppercase border transition-opacity hover:opacity-80 font-mono"
                style={{
                  borderColor: theme?.foreground ?? "#e0e0e0",
                  color: theme?.foreground ?? "#e0e0e0",
                }}
              >
                <Camera className="w-4 h-4" />
                {secondaryButtonText}
              </a>
            </div>
          </div>

          {/* Sidebar — recent projects */}
          <div className="lg:col-span-4 space-y-6 lg:border-l lg:pl-8" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
            <p className="text-xs tracking-[0.3em] uppercase opacity-30 font-mono">Recent Work</p>
            <div className="space-y-6">
              {items.map((project, i) => (
                <div key={i} className="space-y-2 pb-6 border-b border-white/5 last:border-0">
                  <div className="flex items-start gap-3">
                    <div
                      className="w-1 h-full min-h-[2rem] flex-shrink-0"
                      style={{ backgroundColor: i === 0 ? (theme?.primary ?? "#ff3b30") : "rgba(255,255,255,0.1)" }}
                    />
                    <div>
                      <p className="font-bold text-sm tracking-wide uppercase font-mono">
                        {project.title}
                      </p>
                      <p className="text-xs opacity-40 mt-1 font-mono">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
