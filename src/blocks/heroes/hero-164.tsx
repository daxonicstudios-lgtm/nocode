import type { BlockProps } from "@/blocks/types";
import { Lightbulb, Lock, ArrowRight, Cpu, Fingerprint, Sparkles } from "lucide-react";

export default function Hero164(props: BlockProps) {
  const {
    theme,
    heading = "Protect Your Ideas Before Someone Else Claims Them",
    subheading = "Intellectual Property Law for Innovators, Creators & Entrepreneurs",
    bodyText = "From patent filings and trademark registration to trade secret protection and IP litigation, our attorneys safeguard the innovations that power your business. Your ideas deserve world-class legal defense.",
    buttonText = "Free IP Assessment",
    buttonUrl = "#",
    secondaryButtonText = "Explore Our Services",
    secondaryButtonUrl = "#",
    items = [
      { title: "Patents", icon: "cpu", description: "Utility, design, and provisional patents" },
      { title: "Trademarks", icon: "fingerprint", description: "Registration, monitoring, and enforcement" },
      { title: "Copyrights", icon: "lock", description: "Protection for creative and digital works" },
      { title: "Trade Secrets", icon: "lock", description: "NDA drafting and misappropriation claims" },
    ],
  } = props;

  const bg = theme?.background ?? "#0f0b1e";
  const fg = theme?.foreground ?? "#ede9fe";
  const primary = theme?.primary ?? "#7c3aed";
  const accent = theme?.accent ?? "#60a5fa";

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: bg, color: fg }}
    >
      {/* Gradient background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `linear-gradient(135deg, ${bg} 0%, #1a1040 40%, #0f1a3a 70%, ${bg} 100%)`,
        }}
      />

      {/* Floating glow orbs */}
      <div
        className="absolute top-20 left-1/4 w-64 h-64 rounded-full blur-3xl opacity-10 pointer-events-none"
        style={{ backgroundColor: primary }}
      />
      <div
        className="absolute bottom-20 right-1/4 w-48 h-48 rounded-full blur-3xl opacity-10 pointer-events-none"
        style={{ backgroundColor: accent }}
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-10 py-24 md:py-32">
        <div className="text-center max-w-3xl mx-auto mb-16">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-8"
            style={{
              backgroundColor: `${primary}20`,
              color: primary,
              border: `1px solid ${primary}35`,
            }}
          >
            <Sparkles className="w-4 h-4" />
            <span>Intellectual Property Law</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08] mb-5">
            {heading}
          </h1>

          <p
            className="text-lg sm:text-xl font-medium mb-4"
            style={{
              background: `linear-gradient(90deg, ${primary}, ${accent})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {subheading}
          </p>

          <p className="text-base opacity-45 max-w-xl mx-auto mb-10 leading-relaxed">
            {bodyText}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <a
              href={buttonUrl}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl text-base font-bold transition-transform hover:scale-105"
              style={{
                background: `linear-gradient(135deg, ${primary}, ${accent})`,
                color: "#ffffff",
              }}
            >
              <Lightbulb className="w-5 h-5" />
              {buttonText}
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href={secondaryButtonUrl}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-medium border transition-colors hover:opacity-80"
              style={{ borderColor: `${fg}20`, color: fg }}
            >
              {secondaryButtonText}
            </a>
          </div>
        </div>

        {/* IP service cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((item, i) => {
            const IconComponent =
              item.icon === "cpu" ? Cpu
                : item.icon === "fingerprint" ? Fingerprint
                  : Lock;

            return (
              <div
                key={i}
                className="p-6 rounded-2xl text-center group transition-all hover:-translate-y-1"
                style={{
                  backgroundColor: `${fg}06`,
                  border: `1px solid ${fg}10`,
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl mx-auto mb-4 flex items-center justify-center"
                  style={{
                    background: `linear-gradient(135deg, ${primary}20, ${accent}15)`,
                  }}
                >
                  <IconComponent className="w-6 h-6" style={{ color: primary }} />
                </div>
                <h3 className="text-base font-bold mb-2">{item.title}</h3>
                <p className="text-sm opacity-40 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom trust line */}
        <div className="mt-14 text-center">
          <div className="inline-flex items-center gap-3 opacity-40 text-sm">
            <Lock className="w-4 h-4" />
            <span>Your innovations are protected by attorney-client privilege</span>
          </div>
        </div>
      </div>
    </section>
  );
}
