"use client";

import type { BlockProps } from "@/blocks/types";
import { Waves, Anchor, Navigation } from "lucide-react";

export default function Hero243(props: BlockProps) {
  const {
    theme,
    heading = "Ride the Perfect Wave",
    subheading = "Premium Surf Experiences",
    bodyText = "Discover world-class surf breaks, expert coaching, and unforgettable ocean adventures. From beginner sessions to big wave expeditions across the globe.",
    buttonText = "Book Your Session",
    buttonUrl = "#",
    secondaryButtonText = "View Surf Spots",
    secondaryButtonUrl = "#",
    items = [
      { title: "Bali", description: "Indonesia" },
      { title: "Pipeline", description: "Hawaii" },
      { title: "Nazare", description: "Portugal" },
      { title: "J-Bay", description: "South Africa" },
    ],
  } = props;

  const bgColor = theme?.background ?? "#0c4a6e";
  const fgColor = theme?.foreground ?? "#f0f9ff";
  const primaryColor = theme?.primary ?? "#38bdf8";
  const accentColor = theme?.accent ?? "#06b6d4";

  return (
    <section
      className="relative min-h-screen overflow-hidden flex items-center"
      style={{ backgroundColor: bgColor, color: fgColor }}
    >
      <style>{`
        @keyframes hero243wave1 {
          0% { clip-path: polygon(0% 75%, 5% 72%, 10% 70%, 15% 69%, 20% 70%, 25% 73%, 30% 76%, 35% 78%, 40% 77%, 45% 74%, 50% 71%, 55% 69%, 60% 70%, 65% 73%, 70% 76%, 75% 78%, 80% 77%, 85% 74%, 90% 72%, 95% 73%, 100% 75%, 100% 100%, 0% 100%); }
          50% { clip-path: polygon(0% 73%, 5% 76%, 10% 78%, 15% 77%, 20% 74%, 25% 71%, 30% 69%, 35% 70%, 40% 73%, 45% 76%, 50% 78%, 55% 77%, 60% 74%, 65% 71%, 70% 69%, 75% 70%, 80% 73%, 85% 76%, 90% 78%, 95% 77%, 100% 73%, 100% 100%, 0% 100%); }
          100% { clip-path: polygon(0% 75%, 5% 72%, 10% 70%, 15% 69%, 20% 70%, 25% 73%, 30% 76%, 35% 78%, 40% 77%, 45% 74%, 50% 71%, 55% 69%, 60% 70%, 65% 73%, 70% 76%, 75% 78%, 80% 77%, 85% 74%, 90% 72%, 95% 73%, 100% 75%, 100% 100%, 0% 100%); }
        }
        @keyframes hero243wave2 {
          0% { clip-path: polygon(0% 80%, 5% 78%, 10% 76%, 15% 77%, 20% 80%, 25% 82%, 30% 83%, 35% 81%, 40% 79%, 45% 77%, 50% 78%, 55% 80%, 60% 82%, 65% 83%, 70% 81%, 75% 79%, 80% 77%, 85% 78%, 90% 80%, 95% 82%, 100% 80%, 100% 100%, 0% 100%); }
          50% { clip-path: polygon(0% 82%, 5% 83%, 10% 81%, 15% 79%, 20% 77%, 25% 78%, 30% 80%, 35% 82%, 40% 83%, 45% 81%, 50% 79%, 55% 77%, 60% 78%, 65% 80%, 70% 82%, 75% 83%, 80% 81%, 85% 79%, 90% 77%, 95% 78%, 100% 82%, 100% 100%, 0% 100%); }
          100% { clip-path: polygon(0% 80%, 5% 78%, 10% 76%, 15% 77%, 20% 80%, 25% 82%, 30% 83%, 35% 81%, 40% 79%, 45% 77%, 50% 78%, 55% 80%, 60% 82%, 65% 83%, 70% 81%, 75% 79%, 80% 77%, 85% 78%, 90% 80%, 95% 82%, 100% 80%, 100% 100%, 0% 100%); }
        }
        @keyframes hero243wave3 {
          0% { clip-path: polygon(0% 85%, 8% 83%, 16% 85%, 24% 87%, 32% 86%, 40% 84%, 48% 85%, 56% 87%, 64% 86%, 72% 84%, 80% 85%, 88% 87%, 96% 86%, 100% 85%, 100% 100%, 0% 100%); }
          50% { clip-path: polygon(0% 87%, 8% 86%, 16% 84%, 24% 85%, 32% 87%, 40% 86%, 48% 84%, 56% 85%, 64% 87%, 72% 86%, 80% 84%, 88% 85%, 96% 87%, 100% 87%, 100% 100%, 0% 100%); }
          100% { clip-path: polygon(0% 85%, 8% 83%, 16% 85%, 24% 87%, 32% 86%, 40% 84%, 48% 85%, 56% 87%, 64% 86%, 72% 84%, 80% 85%, 88% 87%, 96% 86%, 100% 85%, 100% 100%, 0% 100%); }
        }
      `}</style>

      {/* Animated waves */}
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: `${primaryColor}25`,
          animation: "hero243wave1 6s ease-in-out infinite",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: `${accentColor}20`,
          animation: "hero243wave2 8s ease-in-out infinite",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: `${primaryColor}15`,
          animation: "hero243wave3 5s ease-in-out infinite",
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Waves className="w-5 h-5" style={{ color: primaryColor }} />
              <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: primaryColor }}>
                {subheading}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6">
              {heading}
            </h1>

            <p className="text-base sm:text-lg opacity-70 leading-relaxed mb-8 max-w-lg">
              {bodyText}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={buttonUrl}
                className="px-8 py-4 rounded-xl font-semibold text-base transition-all hover:scale-105 text-center"
                style={{ backgroundColor: primaryColor, color: bgColor }}
              >
                {buttonText}
              </a>
              <a
                href={secondaryButtonUrl}
                className="px-8 py-4 rounded-xl font-semibold text-base border-2 transition-all hover:scale-105 text-center flex items-center justify-center gap-2"
                style={{ borderColor: `${fgColor}30` }}
              >
                <Navigation className="w-4 h-4" />
                {secondaryButtonText}
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {items.map((item, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl backdrop-blur-sm border transition-all hover:scale-105"
                style={{
                  backgroundColor: `${fgColor}08`,
                  borderColor: `${fgColor}15`,
                }}
              >
                <Anchor className="w-6 h-6 mb-3" style={{ color: primaryColor }} />
                <div className="text-xl font-bold mb-1">{item.title}</div>
                <div className="text-sm opacity-50">{item.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
