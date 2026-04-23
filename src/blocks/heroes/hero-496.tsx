"use client";

import type { BlockProps } from "@/blocks/types";
import { Play, Layers, Palette, Users, Star, ArrowRight, Box } from "lucide-react";

export default function Hero496(props: BlockProps) {
  const {
    theme,
    heading = "Where Imagination Becomes Animation",
    subheading = "PolyFrame Studios",
    bodyText = "Award-winning 3D animation and motion design for film, games, and brands. We transform concepts into unforgettable visual experiences.",
    buttonText = "Watch Our Reel",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Character Animation", description: "Bringing digital characters to life", icon: "users" },
      { title: "Motion Graphics", description: "Dynamic visuals for any medium", icon: "layers" },
      { title: "Visual Effects", description: "Seamless CGI integration", icon: "palette" },
      { title: "Game Cinematics", description: "In-engine and pre-rendered", icon: "box" },
    ],
  } = props;

  const iconMap: Record<string, React.ReactNode> = {
    users: <Users className="w-5 h-5" />,
    layers: <Layers className="w-5 h-5" />,
    palette: <Palette className="w-5 h-5" />,
    box: <Box className="w-5 h-5" />,
  };

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#12051f", color: theme?.foreground ?? "#f0e6ff" }}
      className="min-h-screen relative overflow-hidden"
    >
      {/* Gradient mesh background */}
      <div
        className="absolute top-0 right-0 w-3/4 h-full opacity-15"
        style={{
          background: `
            radial-gradient(circle at 70% 30%, ${theme?.primary ?? "#a855f7"}60, transparent 50%),
            radial-gradient(circle at 30% 70%, ${theme?.accent ?? "#ec4899"}40, transparent 50%)
          `,
        }}
      />

      {/* Wireframe cube decoration */}
      <div className="absolute top-20 right-10 sm:right-20 w-32 h-32 border border-white/5 rotate-45 hidden sm:block" />
      <div className="absolute bottom-40 right-32 w-16 h-16 border border-white/5 rotate-12 hidden lg:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — Text */}
          <div>
            <p
              className="text-xs font-bold uppercase tracking-[0.3em] mb-4"
              style={{ color: theme?.primary ?? "#a855f7" }}
            >
              {subheading}
            </p>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              {heading}
            </h1>

            <p className="text-base sm:text-lg opacity-50 leading-relaxed mb-8 max-w-lg">
              {bodyText}
            </p>

            {/* Play reel button */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-12">
              <a
                href={buttonUrl}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-sm text-white transition-transform hover:scale-105 shadow-2xl"
                style={{
                  background: `linear-gradient(135deg, ${theme?.primary ?? "#a855f7"}, ${theme?.accent ?? "#ec4899"})`,
                }}
              >
                <Play className="w-4 h-4 fill-current" />
                {buttonText}
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-sm opacity-60 hover:opacity-100 transition-opacity"
              >
                View All Projects
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Client logos / trust bar */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="flex -space-x-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-3.5 h-3.5 fill-current"
                      style={{ color: theme?.primary ?? "#a855f7" }}
                    />
                  ))}
                </div>
                <span className="text-xs opacity-50">Trusted by 200+ studios worldwide</span>
              </div>
            </div>
          </div>

          {/* Right — Service cards + reel preview */}
          <div className="space-y-4">
            {/* Reel preview */}
            <div
              className="rounded-2xl overflow-hidden border border-white/10 aspect-video flex items-center justify-center cursor-pointer group"
              style={{
                background: `linear-gradient(135deg, ${theme?.primary ?? "#a855f7"}20, ${theme?.accent ?? "#ec4899"}20)`,
              }}
            >
              {imageUrl ? (
                <img src={imageUrl} alt="Showreel" className="w-full h-full object-cover" />
              ) : (
                <div className="text-center">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 border-2 transition-transform group-hover:scale-110"
                    style={{ borderColor: theme?.primary ?? "#a855f7" }}
                  >
                    <Play
                      className="w-6 h-6 fill-current ml-1"
                      style={{ color: theme?.primary ?? "#a855f7" }}
                    />
                  </div>
                  <p className="text-xs opacity-40">2024 Showreel — 2:34</p>
                </div>
              )}
            </div>

            {/* Services grid */}
            <div className="grid grid-cols-2 gap-3">
              {items.map((item, i) => (
                <div
                  key={i}
                  className="rounded-xl p-4 border border-white/10 hover:border-white/20 transition-colors bg-white/[0.02]"
                >
                  <div className="mb-2" style={{ color: theme?.primary ?? "#a855f7" }}>
                    {iconMap[item.icon ?? "layers"]}
                  </div>
                  <p className="text-sm font-semibold mb-1">{item.title}</p>
                  <p className="text-xs opacity-40">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
