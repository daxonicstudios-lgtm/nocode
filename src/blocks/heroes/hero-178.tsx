import type { BlockProps } from "@/blocks/types";
import { Shirt, Sparkles } from "lucide-react";

export default function Hero178(props: BlockProps) {
  const {
    theme,
    heading = "Find Your Dream Dress",
    subheading = "Bridal Boutique",
    bodyText = "Discover an exquisite collection of designer wedding gowns in a warm, intimate setting. Our expert stylists guide you to the dress that makes your heart sing.",
    buttonText = "Book Appointment",
    buttonUrl = "#appointment",
    items = [
      { label: "Alterations" },
      { label: "Accessories" },
      { label: "Veils" },
      { label: "Bridesmaid" },
      { label: "Mother of Bride" },
      { label: "Flower Girl" },
    ],
  } = props;

  return (
    <section
      className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden"
      style={{
        backgroundColor: theme?.background ?? "#fdf8f4",
        color: theme?.foreground ?? "#3d2b2b",
      }}
    >
      {/* Soft pink radial */}
      <div
        className="absolute inset-0 pointer-events-none opacity-25"
        style={{
          background: `radial-gradient(ellipse at 30% 50%, ${theme?.primary ?? "#e8b4b8"}33 0%, transparent 60%), radial-gradient(ellipse at 70% 70%, ${theme?.accent ?? "#d4a9af"}22 0%, transparent 50%)`,
        }}
      />

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        {/* Icon cluster */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <Sparkles
            className="w-5 h-5 opacity-60"
            style={{ color: theme?.accent ?? "#d4a9af" }}
          />
          <Shirt
            className="w-7 h-7 sm:w-8 sm:h-8"
            style={{ color: theme?.primary ?? "#e8b4b8" }}
          />
          <Sparkles
            className="w-5 h-5 opacity-60"
            style={{ color: theme?.accent ?? "#d4a9af" }}
          />
        </div>

        {/* Subheading */}
        <p
          className="text-xs sm:text-sm tracking-[0.35em] uppercase mb-3 font-light"
          style={{ color: theme?.primary ?? "#e8b4b8" }}
        >
          {subheading}
        </p>

        {/* Heading */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif italic font-light leading-tight mb-4">
          {heading}
        </h1>

        {/* Decorative divider */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <div
            className="w-16 sm:w-24 h-px"
            style={{ backgroundColor: theme?.primary ?? "#e8b4b8" }}
          />
          <Sparkles
            className="w-3 h-3"
            style={{ color: theme?.primary ?? "#e8b4b8" }}
          />
          <div
            className="w-16 sm:w-24 h-px"
            style={{ backgroundColor: theme?.primary ?? "#e8b4b8" }}
          />
        </div>

        {/* Body */}
        <p className="text-sm sm:text-base leading-relaxed max-w-lg mx-auto mb-8 opacity-75 font-light">
          {bodyText}
        </p>

        {/* Service tags */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {items.map((item, i) => (
            <span
              key={i}
              className="px-4 py-1.5 sm:px-5 sm:py-2 text-xs tracking-widest uppercase rounded-full border font-light"
              style={{
                borderColor: `${theme?.primary ?? "#e8b4b8"}66`,
                color: theme?.primary ?? "#e8b4b8",
                backgroundColor: `${theme?.primary ?? "#e8b4b8"}0a`,
              }}
            >
              {item.label ?? "Service"}
            </span>
          ))}
        </div>

        {/* By appointment notice */}
        <p className="text-xs tracking-widest uppercase opacity-50 mb-6">
          Private appointments only &bull; Tue &ndash; Sat
        </p>

        {/* CTA */}
        <a
          href={buttonUrl}
          className="inline-flex items-center gap-2 px-10 py-4 text-sm tracking-widest uppercase font-medium rounded-full transition-all duration-300 hover:opacity-90 hover:scale-105"
          style={{
            backgroundColor: theme?.primary ?? "#e8b4b8",
            color: theme?.background ?? "#fdf8f4",
          }}
        >
          <Sparkles className="w-4 h-4" />
          {buttonText}
        </a>

        {/* Bottom tagline */}
        <p
          className="mt-12 text-xs tracking-[0.2em] italic opacity-40 font-light"
        >
          &ldquo;Where every bride finds her perfect gown&rdquo;
        </p>
      </div>
    </section>
  );
}
