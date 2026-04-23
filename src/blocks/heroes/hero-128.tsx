import type { BlockProps } from "@/blocks/types";
import { Play, BookOpen, Users, Clock, Award, ChevronRight } from "lucide-react";

export default function Hero128(props: BlockProps) {
  const {
    theme,
    heading = "Master New Skills With Expert-Led Video Courses",
    subheading = "Join over 50,000 learners advancing their careers with hands-on projects, real-world examples, and certificates of completion.",
    buttonText = "Start Learning Free",
    buttonUrl = "#",
    secondaryButtonText = "Browse Courses",
    secondaryButtonUrl = "#",
    imageUrl,
  } = props;

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#0f172a", color: theme?.foreground ?? "#f1f5f9" }}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background image / video placeholder */}
      {imageUrl && (
        <div className="absolute inset-0">
          <img src={imageUrl} alt="" className="w-full h-full object-cover opacity-15" />
        </div>
      )}

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(180deg, ${theme?.background ?? "#0f172a"}ee 0%, ${theme?.background ?? "#0f172a"}cc 50%, ${theme?.background ?? "#0f172a"} 100%)`,
        }}
      />

      {/* Progress bar at top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-white/10">
        <div
          className="h-full rounded-r-full"
          style={{
            width: "65%",
            backgroundColor: theme?.primary ?? "#6366f1",
          }}
        />
      </div>
      <div className="absolute top-3 right-5 text-xs font-mono opacity-40">
        65% of learners complete their first course in 7 days
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-5 py-20 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8 bg-white/10 backdrop-blur-sm">
          <BookOpen className="w-4 h-4" style={{ color: theme?.primary ?? "#6366f1" }} />
          Online Learning Platform
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-tight max-w-4xl mx-auto">
          {heading}
        </h1>

        <p className="mt-6 text-lg md:text-xl opacity-60 max-w-2xl mx-auto leading-relaxed">
          {subheading}
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={buttonUrl}
            style={{ backgroundColor: theme?.primary ?? "#6366f1" }}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-white font-semibold hover:opacity-90 transition-opacity"
          >
            <Play className="w-5 h-5" />
            {buttonText}
          </a>
          <a
            href={secondaryButtonUrl}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold border border-white/20 hover:border-white/40 transition-colors"
          >
            {secondaryButtonText}
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>

        {/* Video preview card */}
        <div
          className="mt-14 max-w-2xl mx-auto rounded-2xl overflow-hidden border"
          style={{ borderColor: `${theme?.foreground ?? "#f1f5f9"}15` }}
        >
          <div
            className="relative aspect-video flex items-center justify-center"
            style={{ backgroundColor: `${theme?.foreground ?? "#f1f5f9"}08` }}
          >
            {imageUrl ? (
              <img src={imageUrl} alt="Course preview" className="w-full h-full object-cover opacity-40" />
            ) : null}
            <button
              className="absolute inset-0 flex items-center justify-center group"
              aria-label="Play preview"
            >
              <div
                className="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform"
                style={{ backgroundColor: theme?.primary ?? "#6366f1" }}
              >
                <Play className="w-7 h-7 text-white ml-1" />
              </div>
            </button>
            {/* Video timeline bar */}
            <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent">
              <div className="flex items-center gap-3 text-xs text-white/70">
                <span>0:00</span>
                <div className="flex-1 h-1 bg-white/20 rounded-full overflow-hidden">
                  <div className="h-full w-0 rounded-full" style={{ backgroundColor: theme?.primary ?? "#6366f1" }} />
                </div>
                <span>12:34</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {[
            { icon: BookOpen, value: "500+", label: "Courses" },
            { icon: Users, value: "50K+", label: "Students" },
            { icon: Clock, value: "10K+", label: "Hours of Content" },
            { icon: Award, value: "98%", label: "Satisfaction" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <stat.icon className="w-5 h-5 mx-auto mb-2 opacity-40" />
              <div className="text-2xl font-bold" style={{ color: theme?.primary ?? "#6366f1" }}>
                {stat.value}
              </div>
              <div className="text-xs opacity-50 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
