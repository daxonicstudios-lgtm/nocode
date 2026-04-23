import type { BlockProps } from "@/blocks/types";
import { Flower2, TreePine } from "lucide-react";

export default function Hero175(props: BlockProps) {
  const {
    theme,
    heading = "We're Getting Married!",
    subheading = "Rachel & David",
    bodyText = "Surrounded by rolling hills and wildflowers, we invite you to join us for a heartfelt celebration of love at our favorite countryside barn.",
    buttonText = "See Details",
    buttonUrl = "#details",
  } = props;

  return (
    <section
      className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden"
      style={{
        backgroundColor: theme?.background ?? "#faf6f0",
        color: theme?.foreground ?? "#3e2f1c",
      }}
    >
      {/* Warm gradient */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          background: `radial-gradient(ellipse at 50% 80%, ${theme?.accent ?? "#c4a97d"}33 0%, transparent 60%)`,
        }}
      />

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        {/* Nature icons row */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <TreePine
            className="w-5 h-5 opacity-50"
            style={{ color: theme?.accent ?? "#6b7c4e" }}
          />
          <Flower2
            className="w-6 h-6 sm:w-7 sm:h-7"
            style={{ color: theme?.primary ?? "#8b6c4a" }}
          />
          <TreePine
            className="w-5 h-5 opacity-50"
            style={{ color: theme?.accent ?? "#6b7c4e" }}
          />
        </div>

        {/* Couple names */}
        <p
          className="text-sm sm:text-base tracking-[0.25em] uppercase mb-3 font-light"
          style={{ color: theme?.primary ?? "#8b6c4a" }}
        >
          {subheading}
        </p>

        {/* Main heading */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif font-light leading-tight mb-4">
          {heading}
        </h1>

        {/* Botanical divider */}
        <div className="flex items-center justify-center gap-2 my-6">
          <div
            className="w-14 sm:w-20 h-px"
            style={{ backgroundColor: theme?.primary ?? "#8b6c4a" }}
          />
          <Flower2
            className="w-4 h-4"
            style={{ color: theme?.primary ?? "#8b6c4a" }}
          />
          <div
            className="w-14 sm:w-20 h-px"
            style={{ backgroundColor: theme?.primary ?? "#8b6c4a" }}
          />
        </div>

        {/* Date and venue */}
        <div
          className="inline-block border rounded-none px-6 py-4 sm:px-10 sm:py-5 mb-8"
          style={{
            borderColor: `${theme?.primary ?? "#8b6c4a"}44`,
            backgroundColor: `${theme?.background ?? "#faf6f0"}cc`,
          }}
        >
          <p className="text-xs sm:text-sm tracking-[0.2em] uppercase font-light opacity-60 mb-1">
            Save the Date
          </p>
          <p
            className="text-lg sm:text-2xl font-serif font-light mb-1"
            style={{ color: theme?.primary ?? "#8b6c4a" }}
          >
            October 3, 2026
          </p>
          <p className="text-xs sm:text-sm tracking-widest uppercase opacity-50">
            Willow Creek Barn &bull; Stellenbosch
          </p>
        </div>

        {/* Body text */}
        <p className="text-sm sm:text-base leading-relaxed max-w-md mx-auto mb-10 opacity-75 font-light">
          {bodyText}
        </p>

        {/* Schedule teaser */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-10 text-xs sm:text-sm tracking-widest uppercase opacity-60">
          <span>Ceremony 3:00 PM</span>
          <span className="hidden sm:inline">&bull;</span>
          <span>Reception 5:30 PM</span>
          <span className="hidden sm:inline">&bull;</span>
          <span>Dancing 8:00 PM</span>
        </div>

        {/* CTA */}
        <a
          href={buttonUrl}
          className="inline-flex items-center gap-2 px-8 py-3.5 text-sm tracking-widest uppercase font-medium rounded transition-all duration-300 hover:opacity-90"
          style={{
            backgroundColor: theme?.primary ?? "#8b6c4a",
            color: theme?.background ?? "#faf6f0",
          }}
        >
          <Flower2 className="w-4 h-4" />
          {buttonText}
        </a>

        {/* Bottom nature accent */}
        <div className="flex items-center justify-center gap-2 mt-14 opacity-30">
          <TreePine className="w-4 h-4" style={{ color: theme?.accent ?? "#6b7c4e" }} />
          <TreePine className="w-5 h-5" style={{ color: theme?.accent ?? "#6b7c4e" }} />
          <TreePine className="w-4 h-4" style={{ color: theme?.accent ?? "#6b7c4e" }} />
        </div>
      </div>
    </section>
  );
}
