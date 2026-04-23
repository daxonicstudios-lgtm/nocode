import type { BlockProps } from "@/blocks/types";
import { Globe, FileText, ArrowRight, MapPin, Languages } from "lucide-react";

export default function Hero162(props: BlockProps) {
  const {
    theme,
    heading = "Your American Dream Starts With the Right Legal Partner",
    subheading = "Experienced Immigration Attorneys — Se Habla Español",
    bodyText = "Navigating the U.S. immigration system is overwhelming. From green cards and work visas to asylum and citizenship, our multilingual team has helped thousands of families build their future in America.",
    buttonText = "Start Your Journey",
    buttonUrl = "#",
    secondaryButtonText = "Check Visa Eligibility",
    secondaryButtonUrl = "#",
    items = [
      { title: "Green Cards", description: "Family & employment-based permanent residency" },
      { title: "Work Visas", description: "H-1B, L-1, O-1 and more" },
      { title: "Citizenship", description: "Naturalization guidance and support" },
      { title: "Asylum & Refugees", description: "Protection for those fleeing persecution" },
    ],
  } = props;

  const bg = theme?.background ?? "#fefdfb";
  const fg = theme?.foreground ?? "#1c2a3a";
  const primary = theme?.primary ?? "#1d4ed8";
  const accent = theme?.accent ?? "#3b82f6";

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: bg, color: fg }}
    >
      {/* Subtle globe pattern in background */}
      <div
        className="absolute top-10 right-0 w-96 h-96 rounded-full opacity-[0.04] pointer-events-none"
        style={{
          border: `3px solid ${primary}`,
        }}
      />
      <div
        className="absolute top-20 right-10 w-72 h-72 rounded-full opacity-[0.03] pointer-events-none"
        style={{
          border: `2px solid ${primary}`,
        }}
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-10 py-24 md:py-32">
        {/* Multilingual badge */}
        <div className="flex flex-wrap items-center gap-3 mb-8">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold"
            style={{
              backgroundColor: `${primary}10`,
              color: primary,
              border: `1px solid ${primary}25`,
            }}
          >
            <Globe className="w-4 h-4" />
            <span>Immigration Law</span>
          </div>
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
            style={{
              backgroundColor: `${fg}06`,
              color: `${fg}99`,
              border: `1px solid ${fg}10`,
            }}
          >
            <Languages className="w-4 h-4" />
            <span>English · Español · Français · 中文</span>
          </div>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-4 max-w-3xl">
          {heading}
        </h1>

        <p
          className="text-lg sm:text-xl font-medium mb-4"
          style={{ color: primary }}
        >
          {subheading}
        </p>

        <p className="text-base opacity-55 max-w-2xl mb-10 leading-relaxed">
          {bodyText}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-start gap-4 mb-16">
          <a
            href={buttonUrl}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl text-base font-bold transition-transform hover:scale-105"
            style={{ backgroundColor: primary, color: "#ffffff" }}
          >
            <MapPin className="w-5 h-5" />
            {buttonText}
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href={secondaryButtonUrl}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-medium border transition-colors hover:opacity-80"
            style={{ borderColor: `${primary}30`, color: primary }}
          >
            <FileText className="w-5 h-5" />
            {secondaryButtonText}
          </a>
        </div>

        {/* Services */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {items.map((item, i) => (
            <div
              key={i}
              className="p-6 rounded-xl flex items-start gap-4"
              style={{
                backgroundColor: `${fg}03`,
                border: `1px solid ${fg}08`,
              }}
            >
              <div
                className="w-10 h-10 rounded-lg flex-shrink-0 flex items-center justify-center"
                style={{ backgroundColor: `${primary}10` }}
              >
                <Globe className="w-5 h-5" style={{ color: accent }} />
              </div>
              <div>
                <h3 className="text-base font-semibold mb-1">{item.title}</h3>
                <p className="text-sm opacity-50">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
