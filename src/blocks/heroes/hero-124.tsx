import type { BlockProps } from "@/blocks/types";
import { ArrowRight, Quote, Star } from "lucide-react";

export default function Hero124(props: BlockProps) {
  const {
    theme,
    heading = "Strategic Advisory for Ambitious Companies",
    subheading = "We partner with leadership teams to unlock growth, optimize operations, and drive lasting transformation.",
    buttonText = "Schedule a Consultation",
    buttonUrl = "#",
    secondaryButtonText = "Our Services",
    secondaryButtonUrl = "#",
    items = [
      {
        title: "Sarah Mitchell",
        label: "CEO, TechScale Inc.",
        description: "Their strategic insights helped us triple our revenue in 18 months. Absolutely transformative partnership.",
        value: "5",
      },
      {
        title: "James Okoro",
        label: "COO, Greenfield Partners",
        description: "The team brought clarity to our expansion strategy when we needed it most. Outstanding results.",
        value: "5",
      },
      {
        title: "Elena Rodriguez",
        label: "Founder, Nexus Health",
        description: "Working with them was the best decision we made this year. They understand the challenges of scaling.",
        value: "5",
      },
    ],
  } = props;

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#0f0f12", color: theme?.foreground ?? "#f0f0f5" }}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(135deg, ${theme?.background ?? "#0f0f12"} 0%, ${theme?.primary ?? "#1e3a5f"}33 50%, ${theme?.background ?? "#0f0f12"} 100%)`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-5 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: text */}
          <div>
            <span
              className="inline-block text-xs font-bold tracking-[0.25em] uppercase mb-6 px-4 py-1.5 rounded-full"
              style={{ backgroundColor: theme?.primary ?? "#1e3a5f", color: "#ffffff" }}
            >
              Trusted by 200+ Companies
            </span>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight">
              {heading}
            </h1>

            <p className="mt-6 text-lg opacity-60 leading-relaxed max-w-lg">
              {subheading}
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href={buttonUrl}
                style={{ backgroundColor: theme?.primary ?? "#1e3a5f" }}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg text-white font-semibold hover:opacity-90 transition-opacity"
              >
                {buttonText}
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href={secondaryButtonUrl}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold border border-current opacity-50 hover:opacity-100 transition-opacity"
              >
                {secondaryButtonText}
              </a>
            </div>
          </div>

          {/* Right: floating testimonial cards */}
          <div className="relative flex flex-col gap-5">
            {items.slice(0, 3).map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-xl backdrop-blur-sm border border-white/10"
                style={{
                  backgroundColor: `${theme?.foreground ?? "#f0f0f5"}08`,
                  marginLeft: index === 1 ? "2rem" : "0",
                  marginRight: index === 0 ? "1rem" : index === 2 ? "2rem" : "0",
                }}
              >
                <Quote className="w-5 h-5 mb-3 opacity-30" />
                <p className="text-sm opacity-70 leading-relaxed">
                  {item.description}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <div>
                    <div className="text-sm font-semibold">{item.title}</div>
                    <div className="text-xs opacity-50">{item.label}</div>
                  </div>
                  <div className="flex gap-0.5">
                    {Array.from({ length: Number(item.value) || 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-3 h-3 fill-current"
                        style={{ color: theme?.accent ?? "#f59e0b" }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
