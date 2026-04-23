import type { BlockProps } from "@/blocks/types";
import { Palette, Layers, Pen, ArrowRight } from "lucide-react";

export default function Hero130(props: BlockProps) {
  const {
    theme,
    heading = "Where Creativity Meets Precision",
    subheading = "A multidisciplinary creative studio crafting bold identities, immersive experiences, and designs that tell your story.",
    buttonText = "View Portfolio",
    buttonUrl = "#",
    secondaryButtonText = "Work With Us",
    secondaryButtonUrl = "#",
  } = props;

  const circle1 = theme?.primary ?? "#e11d48";
  const circle2 = theme?.accent ?? "#2563eb";
  const circle3 = theme?.primary ? `${theme.primary}88` : "#8b5cf6";

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#fafafa", color: theme?.foreground ?? "#111111" }}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Overlapping circles decoration */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Circle 1 - top right */}
        <div
          className="absolute -top-20 -right-20 w-[400px] h-[400px] md:w-[500px] md:h-[500px] rounded-full opacity-15"
          style={{ backgroundColor: circle1 }}
        />
        {/* Circle 2 - center right, overlapping circle 1 */}
        <div
          className="absolute top-1/4 right-10 w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full opacity-15"
          style={{ backgroundColor: circle2 }}
        />
        {/* Circle 3 - bottom center */}
        <div
          className="absolute -bottom-32 left-1/3 w-[350px] h-[350px] md:w-[450px] md:h-[450px] rounded-full opacity-10"
          style={{ backgroundColor: circle3 }}
        />
        {/* Circle 4 - small accent, top left */}
        <div
          className="absolute top-20 left-10 w-24 h-24 md:w-32 md:h-32 rounded-full opacity-20"
          style={{ backgroundColor: circle2 }}
        />
        {/* Circle 5 - small accent, center left */}
        <div
          className="absolute top-1/2 -left-10 w-40 h-40 md:w-48 md:h-48 rounded-full opacity-10"
          style={{ backgroundColor: circle1 }}
        />
        {/* Outlined circles */}
        <div
          className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full border-2 opacity-10"
          style={{ borderColor: circle1 }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full border-2 opacity-10"
          style={{ borderColor: circle2 }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-5 py-20">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full" style={{ backgroundColor: circle1 }} />
              <div className="w-8 h-8 rounded-full" style={{ backgroundColor: circle2 }} />
              <div className="w-8 h-8 rounded-full" style={{ backgroundColor: circle3 }} />
            </div>
            <span className="text-sm font-medium opacity-60 tracking-wider uppercase">
              Creative Studio
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-tight">
            {heading}
          </h1>

          <p className="mt-6 text-lg md:text-xl opacity-60 leading-relaxed max-w-lg">
            {subheading}
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href={buttonUrl}
              style={{ backgroundColor: circle1 }}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-white font-semibold hover:opacity-90 transition-opacity"
            >
              {buttonText}
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href={secondaryButtonUrl}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold border-2 hover:opacity-80 transition-opacity"
              style={{ borderColor: `${theme?.foreground ?? "#111111"}33` }}
            >
              {secondaryButtonText}
            </a>
          </div>

          {/* Services */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { icon: Palette, title: "Brand Identity", desc: "Logos, color systems, and visual guidelines" },
              { icon: Layers, title: "Digital Design", desc: "Websites, apps, and interactive experiences" },
              { icon: Pen, title: "Illustration", desc: "Custom artwork and creative direction" },
            ].map((service, index) => (
              <div
                key={service.title}
                className="p-5 rounded-2xl border transition-colors hover:border-current/20"
                style={{ borderColor: `${theme?.foreground ?? "#111111"}12` }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center mb-4"
                  style={{
                    backgroundColor: index === 0 ? `${circle1}18` : index === 1 ? `${circle2}18` : `${circle3}18`,
                  }}
                >
                  <service.icon
                    className="w-5 h-5"
                    style={{
                      color: index === 0 ? circle1 : index === 1 ? circle2 : circle3,
                    }}
                  />
                </div>
                <div className="font-semibold">{service.title}</div>
                <div className="text-sm opacity-50 mt-1">{service.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
