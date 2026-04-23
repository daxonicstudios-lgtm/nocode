"use client";

import type { BlockProps } from "@/blocks/types";
import { Music, Play, Disc3, Headphones, ExternalLink } from "lucide-react";

export default function Hero290(props: BlockProps) {
  const {
    theme,
    heading = "Midnight Sessions",
    subheading = "New Album Out Now",
    bodyText = "12 tracks of raw emotion and electric energy. Stream everywhere or grab the limited vinyl edition before it sells out.",
    buttonText = "Listen Now",
    buttonUrl = "#",
    secondaryButtonText = "Tour Dates",
    secondaryButtonUrl = "#",
    imageUrl,
    items = [
      { title: "Spotify", url: "#" },
      { title: "Apple Music", url: "#" },
      { title: "YouTube Music", url: "#" },
      { title: "Tidal", url: "#" },
    ],
  } = props;

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#0a0a0f", color: theme?.foreground ?? "#e8e8ec" }}
      className="min-h-screen flex items-center relative overflow-hidden"
    >
      {/* Moody glow effects */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-[120px] opacity-[0.08]"
        style={{ backgroundColor: theme?.primary ?? "#8b5cf6" }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full blur-[100px] opacity-[0.05]"
        style={{ backgroundColor: theme?.accent ?? "#ec4899" }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-14 items-center">
          {/* Album art */}
          <div className="relative group order-2 md:order-1">
            <div className="relative aspect-square max-w-md mx-auto">
              {imageUrl ? (
                <img
                  src={imageUrl}
                  alt=""
                  className="w-full h-full object-cover rounded-2xl shadow-2xl"
                />
              ) : (
                <div
                  className="w-full h-full rounded-2xl flex flex-col items-center justify-center gap-4 shadow-2xl"
                  style={{
                    background: `linear-gradient(135deg, ${theme?.primary ?? "#8b5cf6"}20, ${theme?.accent ?? "#ec4899"}15, ${theme?.background ?? "#0a0a0f"})`,
                    border: `1px solid ${theme?.primary ? `${theme.primary}20` : "rgba(139,92,246,0.12)"}`,
                  }}
                >
                  <Disc3 className="w-24 h-24 opacity-20" style={{ color: theme?.primary ?? "#8b5cf6" }} />
                  <p className="text-sm opacity-20 uppercase tracking-widest">Album Art</p>
                </div>
              )}
              {/* Play overlay */}
              <div className="absolute inset-0 flex items-center justify-center rounded-2xl bg-black/0 group-hover:bg-black/30 transition-colors cursor-pointer">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ backgroundColor: theme?.primary ?? "#8b5cf6" }}
                >
                  <Play className="w-7 h-7 text-white ml-1" />
                </div>
              </div>
            </div>
          </div>

          {/* Info */}
          <div className="order-1 md:order-2">
            <div className="flex items-center gap-2 mb-6">
              <Music className="w-4 h-4" style={{ color: theme?.primary ?? "#8b5cf6" }} />
              <span
                className="text-xs tracking-[0.2em] uppercase font-semibold"
                style={{ color: theme?.primary ?? "#8b5cf6" }}
              >
                {subheading}
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black leading-none tracking-tight mb-6">
              {heading}
            </h1>

            <p className="text-base sm:text-lg opacity-45 max-w-md mb-10 leading-relaxed">
              {bodyText}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href={buttonUrl}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-bold text-white transition-transform hover:scale-105"
                style={{ backgroundColor: theme?.primary ?? "#8b5cf6" }}
              >
                <Headphones className="w-4 h-4" />
                {buttonText}
              </a>
              <a
                href={secondaryButtonUrl}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full text-sm font-semibold border transition-colors hover:bg-white/5"
                style={{ borderColor: "rgba(255,255,255,0.15)" }}
              >
                {secondaryButtonText}
              </a>
            </div>

            {/* Streaming links */}
            <div>
              <p className="text-xs uppercase tracking-widest opacity-30 mb-4">Stream On</p>
              <div className="flex flex-wrap gap-3">
                {items.map((item, i) => (
                  <a
                    key={i}
                    href={item.url ?? "#"}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm transition-colors hover:bg-white/5"
                    style={{ borderColor: theme?.primary ? `${theme.primary}25` : "rgba(139,92,246,0.15)" }}
                  >
                    <span>{item.title}</span>
                    <ExternalLink className="w-3 h-3 opacity-40" />
                  </a>
                ))}
              </div>
            </div>

            {/* Track preview */}
            <div className="mt-10 space-y-2">
              {["Echoes in the Dark", "Neon Dreams", "Last Call"].map((track, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 px-4 py-3 rounded-lg transition-colors hover:bg-white/5 cursor-pointer"
                >
                  <span className="text-xs opacity-30 w-5 text-right tabular-nums">{i + 1}</span>
                  <Play className="w-3.5 h-3.5 opacity-30" />
                  <span className="text-sm">{track}</span>
                  <span className="text-xs opacity-30 ml-auto tabular-nums">
                    {["3:42", "4:18", "3:55"][i]}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
