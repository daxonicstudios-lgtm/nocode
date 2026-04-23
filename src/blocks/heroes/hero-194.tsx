import type { BlockProps } from "@/blocks/types";
import { Cross, Play, ChevronRight } from "lucide-react";

export default function Hero194(props: BlockProps) {
  const {
    theme,
    heading = "Experience God's Love",
    subheading = "Elevation Church",
    bodyText = "Bold faith for a bold generation. Step into a dynamic worship experience where lives are transformed and communities are empowered through the power of the Gospel.",
    buttonText = "Watch Online",
    buttonUrl = "#",
    secondaryButtonText = "Join Us Sunday",
    secondaryButtonUrl = "#",
  } = props;

  return (
    <section
      className="min-h-screen relative flex items-center px-4 py-16 sm:px-8 lg:px-16 overflow-hidden"
      style={{
        backgroundColor: theme?.background ?? "#0d0d0d",
        color: theme?.foreground ?? "#ffffff",
      }}
    >
      {/* Background accent gradient */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background: `radial-gradient(ellipse at 70% 50%, ${theme?.primary ?? "#7c3aed"} 0%, transparent 70%)`,
        }}
      />

      {/* Diagonal line accents */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full opacity-5"
        style={{
          background: `repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 40px,
            ${theme?.primary ?? "#7c3aed"} 40px,
            ${theme?.primary ?? "#7c3aed"} 41px
          )`,
        }}
      />

      <div className="w-full max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <Cross className="w-5 h-5" style={{ color: theme?.primary ?? "#7c3aed" }} />
              <span
                className="text-sm tracking-[0.3em] uppercase font-bold"
                style={{ color: theme?.primary ?? "#7c3aed" }}
              >
                {subheading}
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black leading-none tracking-tight uppercase">
              {heading}
            </h1>

            <p className="text-base sm:text-lg leading-relaxed opacity-70 max-w-lg">
              {bodyText}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={buttonUrl}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-bold tracking-wider uppercase rounded-full transition-transform hover:scale-105"
                style={{
                  backgroundColor: theme?.primary ?? "#7c3aed",
                  color: "#ffffff",
                }}
              >
                <Play className="w-5 h-5 fill-current" />
                {buttonText}
              </a>
              <a
                href={secondaryButtonUrl}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold tracking-wider uppercase rounded-full border-2 transition-opacity hover:opacity-80"
                style={{
                  borderColor: theme?.foreground ?? "#ffffff",
                  color: theme?.foreground ?? "#ffffff",
                }}
              >
                {secondaryButtonText}
                <ChevronRight className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right — large cross visual */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative">
              <Cross
                className="w-64 h-64 opacity-10"
                style={{ color: theme?.primary ?? "#7c3aed" }}
              />
              <div
                className="absolute inset-0 flex items-center justify-center"
              >
                <div
                  className="w-24 h-24 rounded-full flex items-center justify-center cursor-pointer transition-transform hover:scale-110"
                  style={{
                    backgroundColor: theme?.primary ?? "#7c3aed",
                  }}
                >
                  <Play className="w-10 h-10 fill-white text-white ml-1" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom stats bar */}
        <div
          className="mt-16 pt-8 border-t flex flex-wrap gap-8 sm:gap-16"
          style={{ borderColor: "rgba(255,255,255,0.1)" }}
        >
          {[
            { value: "10K+", label: "Weekly Worshippers" },
            { value: "5", label: "Campus Locations" },
            { value: "200+", label: "Life Groups" },
          ].map((stat, i) => (
            <div key={i}>
              <p
                className="text-3xl sm:text-4xl font-black"
                style={{ color: theme?.primary ?? "#7c3aed" }}
              >
                {stat.value}
              </p>
              <p className="text-sm opacity-50 uppercase tracking-wider mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
