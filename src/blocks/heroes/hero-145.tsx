import type { BlockProps } from "@/blocks/types";
import { Palette, ArrowRight, Brush } from "lucide-react";

export default function Hero145(props: BlockProps) {
  const {
    theme,
    heading = "Unleash Your Creative Vision",
    subheading = "Where art meets expression — enroll today",
    bodyText = "Our art school nurtures talent through hands-on workshops, mentorship from professional artists, and a vibrant studio community. From beginners to advanced creators, everyone belongs here.",
    buttonText = "Apply Now",
    buttonUrl = "#",
    secondaryButtonText = "Browse Courses",
    secondaryButtonUrl = "#",
  } = props;

  const bg = theme?.background ?? "#fffbf5";
  const fg = theme?.foreground ?? "#1a1a2e";
  const primary = theme?.primary ?? "#e11d48";
  const accent = theme?.accent ?? "#7c3aed";

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: bg, color: fg }}
    >
      {/* Paint splatter shapes */}
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
        {/* Top-right splatter */}
        <svg
          className="absolute -top-10 -right-10 w-72 h-72 sm:w-96 sm:h-96 opacity-15"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M45,-52C55.8,-42.2,60.4,-25.2,62.8,-8.1C65.3,9,65.7,26.2,57.3,38.2C48.9,50.2,31.7,57,14.1,60.4C-3.5,63.8,-21.5,63.8,-37.3,56.7C-53.1,49.5,-66.7,35.2,-70.3,18.5C-73.9,1.8,-67.5,-17.3,-56.1,-29.8C-44.7,-42.3,-28.3,-48.2,-12.3,-52.8C3.7,-57.4,34.2,-61.8,45,-52Z"
            transform="translate(100 100)"
            fill={primary}
          />
        </svg>

        {/* Bottom-left splatter */}
        <svg
          className="absolute -bottom-16 -left-16 w-80 h-80 sm:w-[28rem] sm:h-[28rem] opacity-10"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M38.5,-47.7C50.5,-37.6,61.3,-25.8,65.5,-11.4C69.7,3,67.3,20,58.4,32.2C49.5,44.4,34.1,51.8,18.1,56.8C2.1,61.8,-14.5,64.4,-28.9,59.1C-43.3,53.8,-55.5,40.6,-62,24.8C-68.5,9,-69.3,-9.4,-62.3,-23.6C-55.3,-37.8,-40.5,-47.8,-26.1,-57.2C-11.7,-66.6,2.3,-75.4,15.8,-72.4C29.3,-69.4,26.5,-57.8,38.5,-47.7Z"
            transform="translate(100 100)"
            fill={accent}
          />
        </svg>

        {/* Middle splatter */}
        <svg
          className="absolute top-1/3 left-1/2 w-48 h-48 opacity-8 hidden md:block"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M44.5,-51.4C56.3,-40,63.5,-24.1,65,-7.9C66.5,8.3,62.3,24.8,52.4,36.8C42.5,48.8,26.9,56.3,10.1,59.5C-6.7,62.7,-24.7,61.6,-38.9,53.1C-53.1,44.6,-63.5,28.7,-66.3,11.4C-69.1,-5.9,-64.3,-24.6,-53,-37.3C-41.7,-50,-23.9,-56.7,-5.6,-56.5C12.7,-56.3,32.7,-62.8,44.5,-51.4Z"
            transform="translate(100 100)"
            fill={primary}
          />
        </svg>

        {/* Small accent dots */}
        <div
          className="absolute top-20 left-1/4 w-6 h-6 rounded-full opacity-30"
          style={{ backgroundColor: accent }}
        />
        <div
          className="absolute top-1/2 right-20 w-4 h-4 rounded-full opacity-25"
          style={{ backgroundColor: primary }}
        />
        <div
          className="absolute bottom-32 left-1/3 w-8 h-8 rounded-full opacity-20"
          style={{ backgroundColor: accent }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center">
        <div
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold mb-8"
          style={{
            backgroundColor: `${primary}15`,
            color: primary,
            border: `1px solid ${primary}25`,
          }}
        >
          <Palette className="w-4 h-4" />
          <span>Enrollment Open for 2026</span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-tight mb-6">
          {heading}
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl font-light mb-4 opacity-70 max-w-2xl mx-auto">
          {subheading}
        </p>

        <p className="text-base sm:text-lg max-w-2xl mx-auto mb-12 opacity-50 leading-relaxed">
          {bodyText}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={buttonUrl}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-bold transition-transform hover:scale-105"
            style={{ backgroundColor: primary, color: "#ffffff" }}
          >
            {buttonText}
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href={secondaryButtonUrl}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold border-2 transition-colors hover:opacity-80"
            style={{ borderColor: accent, color: accent }}
          >
            <Brush className="w-5 h-5" />
            {secondaryButtonText}
          </a>
        </div>

        {/* Discipline tags */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-3">
          {["Painting", "Sculpture", "Photography", "Digital Art", "Ceramics", "Printmaking"].map((tag) => (
            <span
              key={tag}
              className="px-4 py-2 rounded-full text-sm font-medium"
              style={{
                backgroundColor: `${fg}08`,
                color: `${fg}88`,
                border: `1px solid ${fg}15`,
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
