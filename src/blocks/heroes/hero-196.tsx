import type { BlockProps } from "@/blocks/types";
import { Sparkles, Users, Calendar, ArrowRight, Zap } from "lucide-react";

export default function Hero196(props: BlockProps) {
  const {
    theme,
    heading = "Faith. Community. Adventure.",
    subheading = "Youth Ministry",
    bodyText = "This is your time to discover who God made you to be. Real friendships, real faith, real fun — every single week.",
    buttonText = "Join Youth Group",
    buttonUrl = "#",
    items = [
      { title: "Friday Night Live", description: "This Friday, 7 PM", label: "Games, worship & a message that hits different" },
      { title: "Summer Camp 2026", description: "July 14–18", label: "5 days of adventure, faith & lifelong memories" },
      { title: "Serve Saturday", description: "April 26, 9 AM", label: "Make a difference in our community together" },
    ],
  } = props;

  return (
    <section
      className="min-h-screen flex items-center px-4 py-16 sm:px-8 lg:px-16 relative overflow-hidden"
      style={{
        backgroundColor: theme?.background ?? "#1a1033",
        color: theme?.foreground ?? "#ffffff",
      }}
    >
      {/* Colorful gradient blobs */}
      <div
        className="absolute top-0 left-0 w-72 h-72 rounded-full blur-3xl opacity-30"
        style={{ backgroundColor: theme?.primary ?? "#f97316" }}
      />
      <div
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-20"
        style={{ backgroundColor: theme?.accent ?? "#8b5cf6" }}
      />
      <div
        className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full blur-3xl opacity-15 -translate-x-1/2 -translate-y-1/2"
        style={{ backgroundColor: "#06b6d4" }}
      />

      <div className="w-full max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold tracking-wider uppercase"
              style={{
                backgroundColor: `${theme?.primary ?? "#f97316"}22`,
                color: theme?.primary ?? "#f97316",
                border: `1px solid ${theme?.primary ?? "#f97316"}44`,
              }}
            >
              <Sparkles className="w-4 h-4" />
              {subheading}
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-none">
              {heading.split(". ").map((word, i) => (
                <span key={i} className="block">
                  {word}{!word.endsWith(".") && "."}
                  {i === 0 && (
                    <Zap
                      className="inline-block w-8 h-8 ml-2"
                      style={{ color: theme?.primary ?? "#f97316" }}
                    />
                  )}
                </span>
              ))}
            </h1>

            <p className="text-base sm:text-lg leading-relaxed opacity-70 max-w-md">
              {bodyText}
            </p>

            <a
              href={buttonUrl}
              className="inline-flex items-center gap-2 px-8 py-4 text-base font-bold tracking-wider uppercase rounded-xl transition-transform hover:scale-105"
              style={{
                background: `linear-gradient(135deg, ${theme?.primary ?? "#f97316"}, ${theme?.accent ?? "#8b5cf6"})`,
                color: "#ffffff",
              }}
            >
              <Users className="w-5 h-5" />
              {buttonText}
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          {/* Right — upcoming events */}
          <div className="space-y-4">
            <p
              className="text-xs tracking-widest uppercase font-bold mb-6 flex items-center gap-2"
              style={{ color: theme?.primary ?? "#f97316" }}
            >
              <Calendar className="w-4 h-4" />
              Upcoming Events
            </p>
            {items.map((item, i) => (
              <div
                key={i}
                className="rounded-xl p-5 sm:p-6 space-y-2 transition-transform hover:-translate-y-1"
                style={{
                  backgroundColor: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold">{item.title}</h3>
                  <span
                    className="text-xs font-bold px-3 py-1 rounded-full"
                    style={{
                      backgroundColor: `${theme?.primary ?? "#f97316"}22`,
                      color: theme?.primary ?? "#f97316",
                    }}
                  >
                    {item.description}
                  </span>
                </div>
                <p className="text-sm opacity-60">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
