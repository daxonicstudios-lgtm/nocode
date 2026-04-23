import type { BlockProps } from "@/blocks/types";
import { Shield, Phone, ArrowRight, Star, CheckCircle } from "lucide-react";

export default function Hero159(props: BlockProps) {
  const {
    theme,
    heading = "Injured? You Deserve Maximum Compensation.",
    subheading = "No Win, No Fee — We Fight For What You're Owed",
    bodyText = "When negligence causes harm, you need aggressive legal representation. Our personal injury attorneys have recovered over $500 million for injured clients. Call now for a free, confidential case evaluation.",
    buttonText = "Free Case Review",
    buttonUrl = "#",
    secondaryButtonText = "Call (800) 555-0199",
    secondaryButtonUrl = "tel:+18005550199",
    items = [
      { title: "35+", description: "Years Experience" },
      { title: "$500M+", description: "Recovered" },
      { title: "15,000+", description: "Cases Won" },
      { title: "99%", description: "Success Rate" },
    ],
  } = props;

  const bg = theme?.background ?? "#111111";
  const fg = theme?.foreground ?? "#ffffff";
  const primary = theme?.primary ?? "#dc2626";
  const accent = theme?.accent ?? "#ef4444";

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: bg, color: fg }}
    >
      {/* Bold red top bar */}
      <div
        className="absolute top-0 left-0 right-0 h-1.5"
        style={{ backgroundColor: primary }}
      />

      {/* Background diagonal accent */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none"
        style={{
          background: `linear-gradient(135deg, transparent 30%, ${primary} 100%)`,
        }}
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-10 py-24 md:py-32">
        {/* Urgent banner */}
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold mb-8"
          style={{ backgroundColor: primary, color: "#ffffff" }}
        >
          <Shield className="w-4 h-4" />
          <span>Free Consultation — Available 24/7</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] mb-4">
          {heading}
        </h1>

        <p
          className="text-xl sm:text-2xl md:text-3xl font-bold mb-6"
          style={{ color: accent }}
        >
          {subheading}
        </p>

        <p className="text-base sm:text-lg opacity-60 max-w-2xl mb-10 leading-relaxed">
          {bodyText}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-start gap-4 mb-16">
          <a
            href={buttonUrl}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-lg text-lg font-bold transition-transform hover:scale-105"
            style={{ backgroundColor: primary, color: "#ffffff" }}
          >
            <CheckCircle className="w-5 h-5" />
            {buttonText}
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href={secondaryButtonUrl}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-lg text-lg font-bold border-2 transition-colors hover:opacity-90"
            style={{ borderColor: primary, color: fg }}
          >
            <Phone className="w-5 h-5" style={{ color: primary }} />
            {secondaryButtonText}
          </a>
        </div>

        {/* Trust indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <div
              key={i}
              className="text-center p-6 rounded-lg"
              style={{
                backgroundColor: `${fg}06`,
                border: `1px solid ${fg}10`,
              }}
            >
              <p
                className="text-3xl sm:text-4xl font-black mb-1"
                style={{ color: primary }}
              >
                {item.title}
              </p>
              <p className="text-sm font-medium opacity-50">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* 5-star review hint */}
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-3 opacity-50">
          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className="w-5 h-5 fill-current"
                style={{ color: "#facc15" }}
              />
            ))}
          </div>
          <span className="text-sm">
            Rated 4.9/5 from 2,300+ client reviews
          </span>
        </div>
      </div>
    </section>
  );
}
