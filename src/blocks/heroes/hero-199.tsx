import type { BlockProps } from "@/blocks/types";
import { Music, Mic, Headphones, ArrowRight } from "lucide-react";

export default function Hero199(props: BlockProps) {
  const {
    theme,
    heading = "Lifting Hearts Through Worship",
    subheading = "Worship Ministry",
    bodyText = "Music is our offering. Through every note and every lyric, we create space to encounter God's presence and pour out our praise together.",
    buttonText = "Listen to Worship",
    buttonUrl = "#",
    secondaryButtonText = "Join the Team",
    secondaryButtonUrl = "#",
  } = props;

  return (
    <section
      className="min-h-screen flex items-center px-4 py-16 sm:px-8 lg:px-16 relative overflow-hidden"
      style={{
        backgroundColor: theme?.background ?? "#121212",
        color: theme?.foreground ?? "#f0ebe3",
      }}
    >
      {/* Warm atmospheric gradient */}
      <div
        className="absolute inset-0 opacity-25"
        style={{
          background: `radial-gradient(ellipse at 30% 70%, ${theme?.primary ?? "#d97706"} 0%, transparent 60%),
                       radial-gradient(ellipse at 80% 20%, ${theme?.accent ?? "#92400e"} 0%, transparent 50%)`,
        }}
      />

      {/* Music note decorations */}
      <div className="absolute top-16 right-8 opacity-5">
        <Music className="w-48 h-48" />
      </div>
      <div className="absolute bottom-16 left-8 opacity-5">
        <Headphones className="w-32 h-32" />
      </div>

      <div className="w-full max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — visual element */}
          <div className="order-2 lg:order-1 flex items-center justify-center">
            <div className="relative w-full max-w-sm">
              {/* Vinyl/album art placeholder */}
              <div
                className="aspect-square rounded-2xl flex items-center justify-center"
                style={{
                  backgroundColor: theme?.accent ?? "rgba(217, 119, 6, 0.1)",
                  border: `2px solid ${theme?.primary ?? "rgba(217, 119, 6, 0.2)"}`,
                }}
              >
                <div className="text-center space-y-6">
                  <Music
                    className="w-20 h-20 mx-auto opacity-40"
                    style={{ color: theme?.primary ?? "#d97706" }}
                  />
                  <div>
                    <p className="text-sm font-bold tracking-widest uppercase opacity-60">Latest Release</p>
                    <p className="text-xl font-bold mt-1">Open Heavens</p>
                    <p className="text-sm opacity-40 mt-1">12 tracks of live worship</p>
                  </div>
                  <div
                    className="w-16 h-16 rounded-full mx-auto flex items-center justify-center cursor-pointer transition-transform hover:scale-110"
                    style={{
                      backgroundColor: theme?.primary ?? "#d97706",
                    }}
                  >
                    <Headphones className="w-7 h-7 text-white" />
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div
                className="absolute -top-3 -right-3 w-12 h-12 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: theme?.primary ?? "#d97706" }}
              >
                <Music className="w-5 h-5 text-white" />
              </div>
              <div
                className="absolute -bottom-3 -left-3 w-12 h-12 rounded-lg flex items-center justify-center opacity-70"
                style={{ backgroundColor: theme?.primary ?? "#d97706" }}
              >
                <Mic className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>

          {/* Right — content */}
          <div className="order-1 lg:order-2 space-y-8">
            <div
              className="flex items-center gap-2 text-sm tracking-[0.2em] uppercase font-semibold"
              style={{ color: theme?.primary ?? "#d97706" }}
            >
              <Music className="w-4 h-4" />
              {subheading}
              <Mic className="w-4 h-4" />
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              {heading}
            </h1>

            <p className="text-base sm:text-lg leading-relaxed opacity-70 max-w-lg">
              {bodyText}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={buttonUrl}
                className="inline-flex items-center gap-2 px-8 py-4 text-sm font-bold tracking-wider uppercase rounded-lg transition-transform hover:scale-105"
                style={{
                  backgroundColor: theme?.primary ?? "#d97706",
                  color: "#ffffff",
                }}
              >
                <Headphones className="w-4 h-4" />
                {buttonText}
              </a>
              <a
                href={secondaryButtonUrl}
                className="inline-flex items-center gap-2 px-8 py-4 text-sm font-bold tracking-wider uppercase border-2 rounded-lg transition-opacity hover:opacity-80"
                style={{
                  borderColor: theme?.primary ?? "#d97706",
                  color: theme?.primary ?? "#d97706",
                }}
              >
                <Mic className="w-4 h-4" />
                {secondaryButtonText}
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
