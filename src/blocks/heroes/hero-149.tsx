import type { BlockProps } from "@/blocks/types";
import { Scissors, ArrowRight, Heart } from "lucide-react";

export default function Hero149(props: BlockProps) {
  const {
    theme,
    heading = "Handcrafted With Love",
    subheading = "Unique handmade goods made by local artisans",
    bodyText = "Every piece in our collection is lovingly crafted by skilled artisans using sustainable materials. From hand-sewn textiles to carved woodwork, discover the beauty of things made by hand.",
    buttonText = "Shop Collection",
    buttonUrl = "#",
    secondaryButtonText = "Meet Our Makers",
    secondaryButtonUrl = "#",
  } = props;

  const bg = theme?.background ?? "#faf6f1";
  const fg = theme?.foreground ?? "#3d2c1e";
  const primary = theme?.primary ?? "#c2703e";
  const accent = theme?.accent ?? "#a3543a";

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: bg, color: fg }}
    >
      {/* Subtle paper texture via noise */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
        }}
      />

      {/* Stitch pattern line */}
      <div className="absolute top-16 left-8 right-8 z-0 opacity-20">
        <svg width="100%" height="8" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="stitch149" x="0" y="0" width="20" height="8" patternUnits="userSpaceOnUse">
              <line x1="2" y1="4" x2="8" y2="4" stroke={primary} strokeWidth="1.5" strokeLinecap="round" />
              <line x1="12" y1="4" x2="18" y2="4" stroke={primary} strokeWidth="1.5" strokeLinecap="round" />
            </pattern>
          </defs>
          <rect width="100%" height="8" fill="url(#stitch149)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 text-center">
        {/* Small heart icon */}
        <div className="flex justify-center mb-6">
          <Heart className="w-8 h-8" style={{ color: primary, fill: `${primary}33` }} />
        </div>

        <div
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium mb-8"
          style={{
            backgroundColor: `${primary}15`,
            color: primary,
            border: `1px dashed ${primary}44`,
          }}
        >
          <Scissors className="w-4 h-4" />
          <span>Handmade Since 2018</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight mb-6" style={{ fontFamily: "Georgia, serif" }}>
          {heading}
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl font-light mb-6 opacity-60 max-w-2xl mx-auto">
          {subheading}
        </p>

        <p className="text-base sm:text-lg max-w-2xl mx-auto mb-12 opacity-45 leading-relaxed">
          {bodyText}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={buttonUrl}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold transition-transform hover:scale-105"
            style={{ backgroundColor: primary, color: "#ffffff" }}
          >
            {buttonText}
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href={secondaryButtonUrl}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold border-2 transition-colors hover:opacity-80"
            style={{ borderColor: primary, color: primary }}
          >
            {secondaryButtonText}
          </a>
        </div>

        {/* Category chips */}
        <div className="mt-14 flex flex-wrap justify-center gap-3">
          {["Textiles", "Pottery", "Woodwork", "Jewelry", "Leather", "Candles"].map((cat) => (
            <span
              key={cat}
              className="px-4 py-2 rounded-full text-sm font-medium"
              style={{
                backgroundColor: `${fg}08`,
                color: `${fg}77`,
                border: `1px dashed ${fg}22`,
              }}
            >
              {cat}
            </span>
          ))}
        </div>
      </div>

      {/* Torn paper bottom edge */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg
          viewBox="0 0 1200 80"
          preserveAspectRatio="none"
          className="w-full h-16 sm:h-20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,40 Q30,10 60,35 T120,30 T180,45 T240,25 T300,40 T360,20 T420,35 T480,28 T540,42 T600,22 T660,38 T720,30 T780,45 T840,25 T900,40 T960,30 T1020,42 T1080,28 T1140,38 T1200,32 L1200,80 L0,80 Z"
            fill={bg}
          />
        </svg>
      </div>
    </section>
  );
}
