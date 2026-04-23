import type { BlockProps } from "@/blocks/types";
import { Sprout, Wheat } from "lucide-react";

export default function Hero155(props: BlockProps) {
  const {
    theme,
    heading = "From the Earth to Your Plate",
    subheading = "Farm-to-Table Dining",
    bodyText = "We partner with local farms to bring you the freshest seasonal ingredients. Every dish tells the story of the land it comes from, prepared with care and intention.",
    buttonText = "Book Your Experience",
    buttonUrl = "#book",
    items = [
      { label: "Years", value: "12" },
      { label: "Signature Dishes", value: "85+" },
      { label: "Partner Farms", value: "24" },
    ],
  } = props;

  return (
    <section
      className="min-h-screen flex items-center px-4 py-16 sm:py-20"
      style={{
        backgroundColor: theme?.background ?? "#f4f1eb",
        color: theme?.foreground ?? "#2c3e2d",
      }}
    >
      <div className="max-w-5xl mx-auto w-full">
        {/* Top bar */}
        <div className="flex items-center gap-3 mb-10">
          <Sprout
            className="w-5 h-5"
            style={{ color: theme?.primary ?? "#5a7247" }}
          />
          <span
            className="text-xs font-semibold uppercase tracking-[0.25em]"
            style={{ color: theme?.primary ?? "#5a7247" }}
          >
            {subheading}
          </span>
          <div
            className="flex-1 h-px"
            style={{ backgroundColor: `${theme?.primary ?? "#5a7247"}30` }}
          />
          <Wheat
            className="w-5 h-5 opacity-40"
            style={{ color: theme?.primary ?? "#5a7247" }}
          />
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-light leading-tight mb-8 max-w-3xl">
          {heading}
        </h1>

        {/* Body */}
        <p className="text-base sm:text-lg leading-relaxed max-w-2xl mb-12 opacity-70">
          {bodyText}
        </p>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-4 sm:gap-8 mb-12 max-w-lg">
          {items.map((item, index) => (
            <div key={index} className="text-center sm:text-left">
              <div
                className="text-3xl sm:text-4xl font-bold mb-1"
                style={{ color: theme?.primary ?? "#5a7247" }}
              >
                {item.value}
              </div>
              <div className="text-xs sm:text-sm uppercase tracking-wider opacity-60">
                {item.label}
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div
          className="w-full h-px mb-12"
          style={{ backgroundColor: `${theme?.primary ?? "#5a7247"}20` }}
        />

        {/* CTA row */}
        <div className="flex flex-col sm:flex-row items-start gap-6">
          <a
            href={buttonUrl}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-none text-sm font-semibold uppercase tracking-widest transition-all duration-300 hover:opacity-90"
            style={{
              backgroundColor: theme?.primary ?? "#5a7247",
              color: "#ffffff",
            }}
          >
            <Sprout className="w-4 h-4" />
            {buttonText}
          </a>
          <div className="flex items-center gap-2 opacity-50 pt-3">
            <div
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: theme?.accent ?? "#a3b88c" }}
            />
            <span className="text-xs tracking-wide">Seasonal menu changes weekly</span>
          </div>
        </div>
      </div>
    </section>
  );
}
