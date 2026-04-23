import type { BlockProps } from "@/blocks/types";
import { Mic, SlidersHorizontal } from "lucide-react";

export default function Hero190(props: BlockProps) {
  const {
    theme,
    heading = "Where Sound Comes Alive",
    subheading = "Professional Recording Studio",
    bodyText = "State-of-the-art analog and digital recording in the heart of Lagos. Three isolation rooms, world-class outboard gear, and engineers who understand African sound.",
    buttonText = "Book Studio Time",
    buttonUrl = "#book",
    items = [
      { title: "3 Live Rooms", description: "Acoustically treated isolation booths" },
      { title: "SSL Console", description: "Analog warmth meets digital precision" },
      { title: "Dolby Atmos", description: "Immersive spatial audio mixing" },
      { title: "24/7 Access", description: "Flexible sessions, day or night" },
    ],
  } = props;

  return (
    <section
      className="relative min-h-screen flex items-center px-4 py-20 overflow-hidden"
      style={{
        backgroundColor: theme?.background ?? "#18181b",
        color: theme?.foreground ?? "#fafafa",
      }}
    >
      {/* Amber glow accent */}
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[300px] rounded-full blur-[120px] opacity-10 pointer-events-none"
        style={{ backgroundColor: theme?.accent ?? "#f59e0b" }}
      />
      {/* Horizontal lines */}
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="absolute left-0 w-full h-px opacity-[0.04] pointer-events-none"
          style={{
            top: `${20 + i * 15}%`,
            backgroundColor: theme?.accent ?? "#f59e0b",
          }}
        />
      ))}

      <div className="relative z-10 w-full max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          {/* Left content - 3 cols */}
          <div className="lg:col-span-3">
            {/* Subheading */}
            <div className="flex items-center gap-3 mb-5">
              <SlidersHorizontal
                className="w-5 h-5"
                style={{ color: theme?.accent ?? "#f59e0b" }}
              />
              <span
                className="text-xs font-semibold tracking-[0.25em] uppercase"
                style={{ color: theme?.accent ?? "#f59e0b" }}
              >
                {subheading}
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
              {heading}
            </h1>

            {/* Decorative bar */}
            <div className="flex items-center gap-2 mb-6">
              <div
                className="w-12 h-0.5"
                style={{ backgroundColor: theme?.accent ?? "#f59e0b" }}
              />
              <Mic className="w-4 h-4" style={{ color: theme?.accent ?? "#f59e0b" }} />
              <div
                className="w-12 h-0.5"
                style={{ backgroundColor: theme?.accent ?? "#f59e0b" }}
              />
            </div>

            {/* Body */}
            <p className="text-sm sm:text-base leading-relaxed opacity-60 mb-8 max-w-lg">
              {bodyText}
            </p>

            {/* CTA */}
            <a
              href={buttonUrl}
              className="inline-flex items-center gap-2 px-8 py-4 text-sm font-bold uppercase tracking-wider transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: theme?.accent ?? "#f59e0b",
                color: theme?.background ?? "#18181b",
              }}
            >
              <Mic className="w-4 h-4" />
              {buttonText}
            </a>
          </div>

          {/* Right features - 2 cols */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item, i) => (
              <div
                key={i}
                className="p-5 rounded-lg border transition-all duration-200 hover:border-opacity-50"
                style={{
                  backgroundColor: `${theme?.accent ?? "#f59e0b"}05`,
                  borderColor: `${theme?.accent ?? "#f59e0b"}20`,
                }}
              >
                <div className="flex items-start gap-3">
                  <div
                    className="w-8 h-8 rounded flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ backgroundColor: `${theme?.accent ?? "#f59e0b"}15` }}
                  >
                    <SlidersHorizontal
                      className="w-4 h-4"
                      style={{ color: theme?.accent ?? "#f59e0b" }}
                    />
                  </div>
                  <div>
                    <p className="text-sm font-semibold mb-0.5">{item.title}</p>
                    <p className="text-xs opacity-50">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
