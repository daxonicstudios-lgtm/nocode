import type { BlockProps } from "@/blocks/types";
import { Music2, GraduationCap } from "lucide-react";

export default function Hero189(props: BlockProps) {
  const {
    theme,
    heading = "Master Your Musical Journey",
    subheading = "Enroll for 2026 Sessions",
    bodyText = "From beginner to concert-ready, our experienced instructors guide students of all ages through personalized music education. Over 2,000 graduates since 2010.",
    buttonText = "Enroll Now",
    buttonUrl = "#enroll",
    secondaryButtonText = "Free Trial Lesson",
    secondaryButtonUrl = "#trial",
    items = [
      { title: "Piano & Keys", icon: "piano" },
      { title: "Guitar & Bass", icon: "guitar" },
      { title: "Vocal Training", icon: "voice" },
      { title: "Drums & Percussion", icon: "drums" },
      { title: "Violin & Strings", icon: "violin" },
      { title: "Music Production", icon: "production" },
    ],
  } = props;

  return (
    <section
      className="relative min-h-screen flex items-center px-4 py-20 overflow-hidden"
      style={{
        backgroundColor: theme?.background ?? "#fffbf5",
        color: theme?.foreground ?? "#1c1917",
      }}
    >
      {/* Warm decorative circle */}
      <div
        className="absolute -top-20 -right-20 w-96 h-96 rounded-full opacity-10 pointer-events-none"
        style={{ backgroundColor: theme?.primary ?? "#d97706" }}
      />
      <div
        className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-5 pointer-events-none"
        style={{ backgroundColor: theme?.accent ?? "#f59e0b" }}
      />

      <div className="relative z-10 w-full max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div>
            {/* Badge */}
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap className="w-5 h-5" style={{ color: theme?.primary ?? "#d97706" }} />
              <span
                className="text-xs font-semibold tracking-wider uppercase"
                style={{ color: theme?.primary ?? "#d97706" }}
              >
                {subheading}
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-5">
              {heading}
            </h1>

            {/* Accent bar */}
            <div
              className="w-16 h-1 rounded-full mb-6"
              style={{ backgroundColor: theme?.accent ?? "#f59e0b" }}
            />

            {/* Body */}
            <p className="text-sm sm:text-base leading-relaxed opacity-70 mb-8 max-w-md">
              {bodyText}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={buttonUrl}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg text-sm font-semibold tracking-wide transition-all duration-300 hover:scale-105"
                style={{
                  backgroundColor: theme?.primary ?? "#d97706",
                  color: "#fff",
                }}
              >
                {buttonText}
              </a>
              <a
                href={secondaryButtonUrl}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg text-sm font-semibold tracking-wide border-2 transition-all duration-300 hover:opacity-80"
                style={{
                  borderColor: theme?.primary ?? "#d97706",
                  color: theme?.primary ?? "#d97706",
                }}
              >
                <Music2 className="w-4 h-4" />
                {secondaryButtonText}
              </a>
            </div>
          </div>

          {/* Right: Instruments grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {items.map((item, i) => (
              <div
                key={i}
                className="rounded-xl p-5 text-center transition-all duration-200 hover:scale-[1.03]"
                style={{
                  backgroundColor: `${theme?.primary ?? "#d97706"}08`,
                  border: `1px solid ${theme?.primary ?? "#d97706"}18`,
                }}
              >
                <Music2
                  className="w-6 h-6 mx-auto mb-2"
                  style={{ color: theme?.accent ?? "#f59e0b" }}
                />
                <p className="text-xs sm:text-sm font-medium">{item.title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats bar */}
        <div
          className="mt-14 grid grid-cols-3 gap-4 rounded-xl p-6"
          style={{
            backgroundColor: `${theme?.primary ?? "#d97706"}08`,
            border: `1px solid ${theme?.primary ?? "#d97706"}12`,
          }}
        >
          {[
            { value: "2,000+", label: "Graduates" },
            { value: "35+", label: "Instructors" },
            { value: "15", label: "Years Teaching" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <p
                className="text-xl sm:text-2xl font-bold"
                style={{ color: theme?.primary ?? "#d97706" }}
              >
                {stat.value}
              </p>
              <p className="text-xs opacity-60 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
