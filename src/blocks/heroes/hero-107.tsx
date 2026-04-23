import type { BlockProps } from "@/blocks/types";
import { ArrowRight, Layers } from "lucide-react";

export default function Hero107(props: BlockProps) {
  const {
    theme,
    heading = "We Design Bold Digital Experiences",
    subheading = "Creative agency for brands that refuse to blend in",
    bodyText = "Strategy, design, and development — all under one roof. We partner with forward-thinking companies to create work that matters.",
    buttonText = "Start a Project",
    buttonUrl = "#",
    secondaryButtonText = "View Our Work",
    secondaryButtonUrl = "#",
    items = [
      { title: "Brand Strategy" },
      { title: "Web Design" },
      { title: "Development" },
      { title: "Motion Design" },
    ],
  } = props;

  const primaryColor = theme?.primary ?? "#e11d48";
  const accentColor = theme?.accent ?? "#7c3aed";

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: theme?.background ?? "#0a0a0a", color: theme?.foreground ?? "#ffffff" }}
    >
      {/* Diagonal gradient overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `linear-gradient(135deg, ${primaryColor}22 0%, transparent 40%, ${accentColor}18 70%, transparent 100%)`,
        }}
      />

      {/* Diagonal line */}
      <div
        className="absolute inset-0 z-0 overflow-hidden"
      >
        <div
          className="absolute top-0 right-0 w-[150%] h-[150%] origin-top-right"
          style={{
            background: `linear-gradient(135deg, transparent 48%, ${primaryColor}11 49%, ${primaryColor}11 51%, transparent 52%)`,
          }}
        />
      </div>

      {/* Large background text */}
      <div
        className="absolute top-1/2 right-0 -translate-y-1/2 text-[15vw] font-black tracking-tighter opacity-[0.03] leading-none select-none"
        style={{ color: theme?.foreground ?? "#ffffff" }}
      >
        AGENCY
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-8">
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: `${primaryColor}22` }}
            >
              <Layers className="w-5 h-5" style={{ color: primaryColor }} />
            </div>
            <span className="text-sm font-semibold tracking-widest uppercase opacity-60">Creative Studio</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[0.95] mb-6">
            {heading}
          </h1>

          <p className="text-lg sm:text-xl font-light mb-3 opacity-70 max-w-xl">
            {subheading}
          </p>

          <p className="text-base max-w-lg mb-10 opacity-40 leading-relaxed">
            {bodyText}
          </p>

          <div className="flex flex-col sm:flex-row items-start gap-4 mb-16">
            <a
              href={buttonUrl}
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-none text-base font-bold transition-all hover:gap-4"
              style={{
                backgroundColor: primaryColor,
                color: "#ffffff",
              }}
            >
              {buttonText}
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href={secondaryButtonUrl}
              className="px-8 py-4 text-base font-semibold transition-opacity hover:opacity-100 opacity-60 underline underline-offset-8 decoration-1"
              style={{
                textDecorationColor: primaryColor,
                color: theme?.foreground ?? "#ffffff",
              }}
            >
              {secondaryButtonText}
            </a>
          </div>

          {/* Services tags */}
          <div className="flex flex-wrap gap-3">
            {items.map((item, i) => (
              <span
                key={i}
                className="px-4 py-2 text-xs font-semibold tracking-wider uppercase"
                style={{
                  border: `1px solid ${theme?.foreground ?? "#ffffff"}15`,
                  color: `${theme?.foreground ?? "#ffffff"}88`,
                }}
              >
                {item.title}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
