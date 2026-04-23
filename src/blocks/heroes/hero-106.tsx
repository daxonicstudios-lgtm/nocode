import type { BlockProps } from "@/blocks/types";
import { Search, MapPin, Calendar, Users, Compass } from "lucide-react";

export default function Hero106(props: BlockProps) {
  const {
    theme,
    heading = "Explore the World Your Way",
    subheading = "Curated adventures for every kind of traveler",
    bodyText = "From hidden gems to iconic landmarks, plan your next journey with personalized recommendations and unbeatable local experiences.",
    buttonText = "Search Destinations",
    buttonUrl = "#",
    items = [
      { icon: "compass", title: "500+", description: "Destinations" },
      { icon: "users", title: "1M+", description: "Happy Travelers" },
      { icon: "star", title: "4.9", description: "Average Rating" },
    ],
  } = props;

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ backgroundColor: theme?.background ?? "#0c1222", color: theme?.foreground ?? "#ffffff" }}
    >
      {/* Parallax-ready layered background */}
      <div className="absolute inset-0 z-0">
        {/* Base gradient */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(180deg, ${theme?.primary ?? "#1e3a5f"}33 0%, ${theme?.background ?? "#0c1222"} 60%)`,
          }}
        />
        {/* Stars/dots pattern */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(${theme?.foreground ?? "#ffffff"} 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
        {/* Horizon glow */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[40%]"
          style={{
            background: `radial-gradient(ellipse at 50% 100%, ${theme?.accent ?? "#f59e0b"}1a 0%, transparent 70%)`,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center w-full">
        <div className="inline-flex items-center gap-2 mb-8 opacity-60">
          <Compass className="w-5 h-5" style={{ color: theme?.accent ?? "#f59e0b" }} />
          <span className="text-sm font-medium tracking-widest uppercase">Discover. Explore. Wander.</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-none mb-6">
          {heading}
        </h1>

        <p className="text-lg sm:text-xl font-light mb-3 opacity-70">
          {subheading}
        </p>

        <p className="text-base max-w-xl mx-auto mb-12 opacity-40 leading-relaxed">
          {bodyText}
        </p>

        {/* Search bar */}
        <div
          className="max-w-3xl mx-auto rounded-2xl p-2 backdrop-blur-md mb-12"
          style={{
            backgroundColor: `${theme?.foreground ?? "#ffffff"}0a`,
            border: `1px solid ${theme?.foreground ?? "#ffffff"}15`,
          }}
        >
          <div className="flex flex-col md:flex-row items-stretch gap-2">
            <div className="flex-1 flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5">
              <MapPin className="w-5 h-5 shrink-0 opacity-40" />
              <span className="text-sm opacity-40 text-left">Where do you want to go?</span>
            </div>

            <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 md:w-44">
              <Calendar className="w-5 h-5 shrink-0 opacity-40" />
              <span className="text-sm opacity-40">When?</span>
            </div>

            <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 md:w-36">
              <Users className="w-5 h-5 shrink-0 opacity-40" />
              <span className="text-sm opacity-40">Guests</span>
            </div>

            <a
              href={buttonUrl}
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-transform hover:scale-105"
              style={{
                backgroundColor: theme?.primary ?? "#3b82f6",
                color: "#ffffff",
              }}
            >
              <Search className="w-4 h-4" />
              <span className="md:hidden">{buttonText}</span>
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap items-center justify-center gap-10 sm:gap-16">
          {items.map((item, i) => (
            <div key={i} className="text-center">
              <div
                className="text-2xl sm:text-3xl font-bold mb-1"
                style={{ color: theme?.accent ?? "#f59e0b" }}
              >
                {item.title}
              </div>
              <div className="text-xs sm:text-sm opacity-40">{item.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
