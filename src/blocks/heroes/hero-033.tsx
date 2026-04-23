import type { BlockProps } from "@/blocks/types";
import { ArrowRight, Bell, Sparkles } from "lucide-react";

export default function Hero033(props: BlockProps) {
  const {
    theme,
    heading = "The Future of Team Collaboration",
    subheading = "Work smarter, communicate faster, and ship products your customers love.",
    buttonText = "Start for Free",
    buttonUrl = "#",
    secondaryButtonText = "Learn More",
    secondaryButtonUrl = "#",
  } = props;

  return (
    <section
      className="relative min-h-[85vh] flex items-center justify-center px-4 py-16 sm:py-24 overflow-hidden"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-5 leading-tight">
          {heading}
        </h1>
        <p className="text-base sm:text-lg opacity-70 mb-10 max-w-lg mx-auto">
          {subheading}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={buttonUrl}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg text-white font-semibold transition-transform hover:scale-105"
            style={{ backgroundColor: theme?.primary || "#7c3aed" }}
          >
            {buttonText}
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href={secondaryButtonUrl}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-semibold border transition-colors hover:opacity-80"
            style={{
              borderColor: theme?.primary || "#7c3aed",
              color: theme?.primary || "#7c3aed",
            }}
          >
            {secondaryButtonText}
          </a>
        </div>
      </div>

      {/* Floating notification card */}
      <div
        className="absolute top-16 right-4 sm:top-20 sm:right-[10%] lg:right-[15%] animate-bounce"
        style={{ animationDuration: "3s" }}
      >
        <div
          className="flex items-start gap-3 px-4 py-3 rounded-xl shadow-2xl border max-w-[240px] sm:max-w-[280px]"
          style={{
            backgroundColor: theme?.background || "#ffffff",
            borderColor: theme?.accent || "#e5e7eb",
          }}
        >
          <div
            className="shrink-0 w-9 h-9 rounded-full flex items-center justify-center"
            style={{ backgroundColor: theme?.primary || "#7c3aed" }}
          >
            <Sparkles className="w-4 h-4 text-white" />
          </div>
          <div className="min-w-0">
            <p className="text-sm font-semibold truncate">New: Feature launched!</p>
            <p className="text-xs opacity-60 mt-0.5">AI-powered workflows are live</p>
          </div>
        </div>
      </div>

      {/* Second floating notification — bottom left */}
      <div
        className="absolute bottom-20 left-4 sm:bottom-24 sm:left-[8%] lg:left-[14%] hidden sm:block"
        style={{ animation: "bounce 4s ease-in-out infinite" }}
      >
        <div
          className="flex items-center gap-2 px-4 py-2.5 rounded-lg shadow-xl border"
          style={{
            backgroundColor: theme?.background || "#ffffff",
            borderColor: theme?.accent || "#e5e7eb",
          }}
        >
          <Bell className="w-4 h-4" style={{ color: theme?.primary || "#7c3aed" }} />
          <p className="text-xs font-medium">12 team members joined today</p>
        </div>
      </div>
    </section>
  );
}
