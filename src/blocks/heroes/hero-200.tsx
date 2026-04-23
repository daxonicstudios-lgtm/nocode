import type { BlockProps } from "@/blocks/types";
import { Monitor, Wifi, Play, Users, Clock, ArrowRight } from "lucide-react";

export default function Hero200(props: BlockProps) {
  const {
    theme,
    heading = "Church Without Walls",
    subheading = "Online Ministry",
    bodyText = "No matter where you are, you belong here. Experience worship, teaching, and community from anywhere in the world. God's love has no boundaries — and neither does our church.",
    buttonText = "Watch Live",
    buttonUrl = "#",
    secondaryButtonText = "Join Community",
    secondaryButtonUrl = "#",
    items = [
      { title: "Sunday Service", description: "10:00 AM EST", label: "Live every Sunday" },
      { title: "Midweek Prayer", description: "Wed 7:00 PM EST", label: "Interactive prayer room" },
      { title: "Friday Night Bible Study", description: "Fri 8:00 PM EST", label: "Deep dive into the Word" },
    ],
  } = props;

  return (
    <section
      className="min-h-screen flex items-center px-4 py-16 sm:px-8 lg:px-16 relative overflow-hidden"
      style={{
        backgroundColor: theme?.background ?? "#0a0e1a",
        color: theme?.foreground ?? "#e2e8f0",
      }}
    >
      {/* Grid background pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(${theme?.primary ?? "#3b82f6"} 1px, transparent 1px),
                            linear-gradient(90deg, ${theme?.primary ?? "#3b82f6"} 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow accent */}
      <div
        className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-10"
        style={{ backgroundColor: theme?.primary ?? "#3b82f6" }}
      />

      <div className="w-full max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="space-y-8">
            {/* Live badge */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full text-sm font-semibold"
              style={{
                backgroundColor: "rgba(239, 68, 68, 0.15)",
                border: "1px solid rgba(239, 68, 68, 0.3)",
              }}
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500" />
              </span>
              <span className="text-red-400">Live Now</span>
            </div>

            {/* Label */}
            <div className="flex items-center gap-2 text-sm tracking-widest uppercase"
              style={{ color: theme?.primary ?? "#3b82f6" }}
            >
              <Monitor className="w-4 h-4" />
              {subheading}
              <Wifi className="w-4 h-4" />
            </div>

            {/* Heading */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-none tracking-tight">
              {heading}
            </h1>

            {/* Body */}
            <p className="text-base sm:text-lg leading-relaxed opacity-60 max-w-lg">
              {bodyText}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={buttonUrl}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold tracking-wider uppercase rounded-lg transition-transform hover:scale-105"
                style={{
                  backgroundColor: theme?.primary ?? "#3b82f6",
                  color: "#ffffff",
                }}
              >
                <Play className="w-5 h-5 fill-current" />
                {buttonText}
              </a>
              <a
                href={secondaryButtonUrl}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold tracking-wider uppercase border-2 rounded-lg transition-opacity hover:opacity-80"
                style={{
                  borderColor: theme?.primary ?? "#3b82f6",
                  color: theme?.primary ?? "#3b82f6",
                }}
              >
                <Users className="w-5 h-5" />
                {secondaryButtonText}
              </a>
            </div>
          </div>

          {/* Right — stream schedule */}
          <div className="space-y-6">
            <div
              className="rounded-2xl p-6 sm:p-8"
              style={{
                backgroundColor: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                <Clock className="w-5 h-5" style={{ color: theme?.primary ?? "#3b82f6" }} />
                Stream Schedule
              </h3>

              <div className="space-y-4">
                {items.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 p-4 rounded-xl transition-colors"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.03)",
                    }}
                  >
                    <div
                      className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{
                        backgroundColor: `${theme?.primary ?? "#3b82f6"}20`,
                        color: theme?.primary ?? "#3b82f6",
                      }}
                    >
                      <Monitor className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-sm">{item.title}</p>
                      <p className="text-xs opacity-40 mt-0.5">{item.label}</p>
                    </div>
                    <span
                      className="text-xs font-bold tracking-wider whitespace-nowrap"
                      style={{ color: theme?.primary ?? "#3b82f6" }}
                    >
                      {item.description}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t flex items-center justify-between"
                style={{ borderColor: "rgba(255,255,255,0.08)" }}
              >
                <div className="flex items-center gap-2 text-sm opacity-40">
                  <Wifi className="w-4 h-4" />
                  <span>Available worldwide</span>
                </div>
                <a
                  href={buttonUrl}
                  className="text-sm font-semibold flex items-center gap-1 transition-opacity hover:opacity-80"
                  style={{ color: theme?.primary ?? "#3b82f6" }}
                >
                  Set Reminder
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
