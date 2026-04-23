import type { BlockProps } from "@/blocks/types";
import { Play, CheckCircle2, Users, Clock, Award } from "lucide-react";

export default function Hero060(props: BlockProps) {
  const {
    theme,
    heading = "Unlock Your Full Potential With Expert Coaching",
    subheading = "Join a proven system used by 5,000+ professionals to achieve breakthrough results in career, leadership, and personal growth.",
    buttonText = "Watch Free Masterclass",
    buttonUrl = "#",
    secondaryButtonText = "Book a Session",
    secondaryButtonUrl = "#",
    imageUrl,
    items = [
      { title: "Proven framework used by Fortune 500 leaders" },
      { title: "Weekly live group coaching sessions" },
      { title: "Lifetime access to course materials" },
      { title: "Private community of high achievers" },
    ],
  } = props;

  return (
    <section
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
      className="min-h-[80vh] flex items-center px-5 py-16"
    >
      <div className="max-w-6xl mx-auto w-full flex flex-col-reverse md:flex-row items-center gap-10 md:gap-14">
        {/* Video Player Side (left on desktop) */}
        <div className="flex-1 w-full max-w-md md:max-w-none">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            {imageUrl ? (
              <img
                src={imageUrl}
                alt="Coaching masterclass preview"
                className="w-full aspect-video object-cover"
              />
            ) : (
              <div
                className="w-full aspect-video flex items-center justify-center"
                style={{ backgroundColor: theme?.primary ? `${theme.primary}15` : "#1e1e2e" }}
              >
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(135deg, ${theme?.primary || "#6366f1"}22 0%, ${theme?.accent || "#a855f7"}22 100%)`,
                  }}
                />
              </div>
            )}
            {/* Play button overlay */}
            <button
              className="absolute inset-0 flex items-center justify-center group"
              aria-label="Play masterclass video"
            >
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform"
                style={{ backgroundColor: theme?.primary || "#6366f1" }}
              >
                <Play className="w-8 h-8 text-white fill-white ml-1" />
              </div>
            </button>
            {/* Duration badge */}
            <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded-lg bg-black/70 text-white text-xs font-medium flex items-center gap-1.5">
              <Clock className="w-3 h-3" />
              45 min free class
            </div>
          </div>

          {/* Social proof under video */}
          <div className="mt-4 flex items-center gap-4 justify-center md:justify-start">
            <div className="flex -space-x-2">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full border-2 flex items-center justify-center text-[10px] font-bold text-white"
                  style={{
                    borderColor: theme?.background || "#fff",
                    backgroundColor: ["#6366f1", "#ec4899", "#f59e0b", "#10b981"][i],
                  }}
                >
                  {["A", "M", "J", "K"][i]}
                </div>
              ))}
            </div>
            <span className="text-sm opacity-50">5,200+ enrolled this month</span>
          </div>
        </div>

        {/* Text Side (right on desktop) */}
        <div className="flex-1 text-center md:text-left">
          <div className="inline-flex items-center gap-2 mb-6">
            <Award className="w-4 h-4" style={{ color: theme?.accent || "#eab308" }} />
            <span className="text-sm font-semibold" style={{ color: theme?.accent || "#eab308" }}>
              #1 Rated Online Coach 2025
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-5xl font-bold tracking-tight leading-tight">
            {heading}
          </h1>
          <p className="mt-5 text-lg opacity-60 leading-relaxed max-w-lg">
            {subheading}
          </p>

          {/* Checklist */}
          <ul className="mt-8 space-y-3 text-left max-w-md mx-auto md:mx-0">
            {items.slice(0, 4).map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 mt-0.5 shrink-0" style={{ color: theme?.primary || "#6366f1" }} />
                <span className="opacity-70">{item.title}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
            <a
              href={buttonUrl}
              style={{ backgroundColor: theme?.primary }}
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-white font-medium bg-indigo-600 hover:opacity-90 transition-opacity"
            >
              <Play className="w-4 h-4" />
              {buttonText}
            </a>
            <a
              href={secondaryButtonUrl}
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-medium border border-current opacity-70 hover:opacity-100 transition-opacity"
            >
              {secondaryButtonText}
            </a>
          </div>

          <div className="mt-6 flex items-center gap-4 justify-center md:justify-start text-sm opacity-40">
            <span className="flex items-center gap-1"><Users className="w-4 h-4" /> 5K+ students</span>
            <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 45 min</span>
          </div>
        </div>
      </div>
    </section>
  );
}
