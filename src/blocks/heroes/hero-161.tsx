import type { BlockProps } from "@/blocks/types";
import { Gavel, ShieldAlert, Phone, Clock, ArrowRight } from "lucide-react";

export default function Hero161(props: BlockProps) {
  const {
    theme,
    heading = "Aggressive Criminal Defense When Everything Is on the Line",
    subheading = "24/7 Emergency Defense — Call Now",
    bodyText = "Facing criminal charges is terrifying. You need an experienced defense attorney who will fight relentlessly to protect your rights, your freedom, and your future. Do not speak to police without legal counsel.",
    buttonText = "Call Now",
    buttonUrl = "tel:+18005550234",
    secondaryButtonText = "Request Urgent Consultation",
    secondaryButtonUrl = "#",
    items = [
      { title: "DUI / DWI Defense" },
      { title: "Drug Charges" },
      { title: "Assault & Battery" },
      { title: "White Collar Crime" },
      { title: "Federal Offenses" },
      { title: "Domestic Violence" },
    ],
  } = props;

  const bg = theme?.background ?? "#0c0c0c";
  const fg = theme?.foreground ?? "#e8e8e8";
  const primary = theme?.primary ?? "#b91c1c";
  const accent = theme?.accent ?? "#fbbf24";

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: bg, color: fg }}
    >
      {/* Dark texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `linear-gradient(180deg, ${bg} 0%, #1a1a1a 50%, ${bg} 100%)`,
        }}
      />

      {/* Red warning stripe */}
      <div
        className="absolute top-0 left-0 right-0 h-1"
        style={{ backgroundColor: primary }}
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-10 py-24 md:py-32">
        {/* Emergency banner */}
        <div
          className="inline-flex items-center gap-3 px-5 py-3 rounded mb-8"
          style={{
            backgroundColor: `${primary}25`,
            border: `1px solid ${primary}50`,
          }}
        >
          <ShieldAlert className="w-5 h-5" style={{ color: primary }} />
          <span className="text-sm font-bold tracking-wide" style={{ color: primary }}>
            ARRESTED? DO NOT SAY ANYTHING. CALL US FIRST.
          </span>
        </div>

        <div className="flex items-center gap-3 mb-6">
          <Clock className="w-5 h-5 opacity-50" />
          <span
            className="text-sm font-semibold tracking-widest uppercase"
            style={{ color: accent }}
          >
            {subheading}
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] mb-6 max-w-4xl">
          {heading}
        </h1>

        <p className="text-base sm:text-lg opacity-50 max-w-2xl mb-10 leading-relaxed">
          {bodyText}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-start gap-4 mb-16">
          <a
            href={buttonUrl}
            className="inline-flex items-center gap-3 px-10 py-5 rounded text-lg font-black tracking-wide transition-transform hover:scale-105"
            style={{ backgroundColor: primary, color: "#ffffff" }}
          >
            <Phone className="w-6 h-6" />
            {buttonText}
          </a>
          <a
            href={secondaryButtonUrl}
            className="inline-flex items-center gap-3 px-8 py-5 rounded text-base font-semibold border transition-colors hover:opacity-80"
            style={{ borderColor: `${fg}25`, color: fg }}
          >
            {secondaryButtonText}
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>

        {/* Defense areas grid */}
        <div
          className="pt-10"
          style={{ borderTop: `1px solid ${fg}15` }}
        >
          <div className="flex items-center gap-3 mb-6">
            <Gavel className="w-5 h-5" style={{ color: accent }} />
            <span
              className="text-xs font-bold tracking-widest uppercase"
              style={{ color: accent }}
            >
              Areas of Defense
            </span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {items.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 px-5 py-4 rounded"
                style={{
                  backgroundColor: `${fg}06`,
                  border: `1px solid ${fg}10`,
                }}
              >
                <ShieldAlert
                  className="w-4 h-4 flex-shrink-0"
                  style={{ color: primary }}
                />
                <span className="text-sm font-semibold">{item.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
