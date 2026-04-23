import type { BlockProps } from "@/blocks/types";
import { CarFront, BadgeCheck, DollarSign, Shield, ThumbsUp } from "lucide-react";

export default function Hero168(props: BlockProps) {
  const {
    theme,
    heading = "Quality Pre-Owned Cars at Honest Prices",
    subheading = "Every vehicle inspected, certified, and backed by our 90-day guarantee. Find the car that fits your life and your budget.",
    buttonText = "Browse Certified Pre-Owned",
    buttonUrl = "#",
    secondaryButtonText = "Sell Your Car",
    secondaryButtonUrl = "#",
  } = props;

  return (
    <section
      className="relative px-4 py-16 sm:py-24 overflow-hidden"
      style={{ backgroundColor: theme?.background ?? "#fafdf7", color: theme?.foreground ?? "#1a2e1a" }}
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(${theme?.primary ?? "#22c55e"} 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Left: Content (3 cols) */}
          <div className="lg:col-span-3">
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-6"
              style={{ backgroundColor: `${theme?.primary ?? "#22c55e"}18`, color: theme?.primary ?? "#22c55e" }}
            >
              <BadgeCheck className="w-3.5 h-3.5" />
              Certified Pre-Owned Marketplace
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-5 leading-tight">
              {heading}
            </h1>
            <p className="text-base sm:text-lg opacity-60 max-w-xl leading-relaxed mb-8">
              {subheading}
            </p>

            {/* Price range hint */}
            <div
              className="rounded-2xl p-5 mb-8 max-w-md"
              style={{ backgroundColor: `${theme?.foreground ?? "#1a2e1a"}05`, border: `1px solid ${theme?.foreground ?? "#1a2e1a"}10` }}
            >
              <p className="text-xs font-medium uppercase tracking-wider opacity-40 mb-3">Popular Price Ranges</p>
              <div className="flex flex-wrap gap-2">
                {["Under $10k", "$10k - $20k", "$20k - $35k", "$35k+"].map((range) => (
                  <span
                    key={range}
                    className="px-4 py-2 rounded-full text-sm font-medium cursor-pointer transition-opacity hover:opacity-80"
                    style={{
                      backgroundColor: `${theme?.primary ?? "#22c55e"}12`,
                      color: theme?.primary ?? "#22c55e",
                      border: `1px solid ${theme?.primary ?? "#22c55e"}25`,
                    }}
                  >
                    {range}
                  </span>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={buttonUrl}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-sm font-semibold transition-opacity hover:opacity-90"
                style={{ backgroundColor: theme?.primary ?? "#22c55e", color: "#ffffff" }}
              >
                <CarFront className="w-4 h-4" />
                {buttonText}
              </a>
              <a
                href={secondaryButtonUrl}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-sm font-semibold transition-opacity hover:opacity-80"
                style={{ color: theme?.primary ?? "#22c55e" }}
              >
                <DollarSign className="w-4 h-4" />
                {secondaryButtonText}
              </a>
            </div>
          </div>

          {/* Right: Trust cards (2 cols) */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {[
              {
                icon: <BadgeCheck className="w-6 h-6" />,
                title: "150-Point Inspection",
                desc: "Every vehicle passes rigorous mechanical and safety checks",
              },
              {
                icon: <Shield className="w-6 h-6" />,
                title: "90-Day Guarantee",
                desc: "Drive with confidence — full coverage on engine and drivetrain",
              },
              {
                icon: <ThumbsUp className="w-6 h-6" />,
                title: "No Haggle Pricing",
                desc: "Transparent pricing with free vehicle history reports",
              },
            ].map((card, i) => (
              <div
                key={i}
                className="rounded-2xl p-6 flex gap-4 items-start"
                style={{
                  backgroundColor: `${theme?.foreground ?? "#1a2e1a"}04`,
                  border: `1px solid ${theme?.foreground ?? "#1a2e1a"}10`,
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: `${theme?.primary ?? "#22c55e"}15`, color: theme?.primary ?? "#22c55e" }}
                >
                  {card.icon}
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{card.title}</h3>
                  <p className="text-sm opacity-50 leading-relaxed">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
