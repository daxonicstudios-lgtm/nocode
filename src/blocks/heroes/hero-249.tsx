"use client";

import type { BlockProps } from "@/blocks/types";
import { Mountain, Compass, MapPin, Camera } from "lucide-react";

export default function Hero249(props: BlockProps) {
  const {
    theme,
    heading = "Witness the Northern Lights",
    subheading = "Arctic Adventures Await",
    bodyText = "Experience the breathtaking beauty of the aurora borealis with guided expeditions to the world's most spectacular viewing locations. From Iceland to Norway, Finland to Canada.",
    buttonText = "Book an Expedition",
    buttonUrl = "#",
    secondaryButtonText = "View Destinations",
    secondaryButtonUrl = "#",
    items = [
      { title: "Iceland", description: "Sep - Mar", icon: "map" },
      { title: "Norway", description: "Oct - Feb", icon: "compass" },
      { title: "Finland", description: "Sep - Mar", icon: "mountain" },
      { title: "Canada", description: "Aug - Apr", icon: "camera" },
    ],
  } = props;

  const bgColor = theme?.background ?? "#0c1222";
  const fgColor = theme?.foreground ?? "#e8f0f8";
  const primaryColor = theme?.primary ?? "#34d399";
  const accentColor = theme?.accent ?? "#818cf8";

  return (
    <section
      className="relative min-h-screen overflow-hidden flex items-center"
      style={{ backgroundColor: bgColor, color: fgColor }}
    >
      <style>{`
        @keyframes hero249aurora1 {
          0% { background-position: 0% 50%; opacity: 0.3; }
          25% { background-position: 50% 30%; opacity: 0.5; }
          50% { background-position: 100% 50%; opacity: 0.35; }
          75% { background-position: 50% 70%; opacity: 0.45; }
          100% { background-position: 0% 50%; opacity: 0.3; }
        }
        @keyframes hero249aurora2 {
          0% { background-position: 100% 50%; opacity: 0.25; }
          33% { background-position: 0% 30%; opacity: 0.4; }
          66% { background-position: 50% 60%; opacity: 0.3; }
          100% { background-position: 100% 50%; opacity: 0.25; }
        }
        @keyframes hero249aurora3 {
          0% { background-position: 50% 50%; opacity: 0.2; }
          50% { background-position: 0% 40%; opacity: 0.35; }
          100% { background-position: 50% 50%; opacity: 0.2; }
        }
        @keyframes hero249shimmer {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
      `}</style>

      {/* Aurora layers */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(135deg, ${primaryColor}00 0%, ${primaryColor}60 30%, ${accentColor}40 50%, ${primaryColor}00 70%, ${accentColor}50 90%)`,
          backgroundSize: "300% 300%",
          animation: "hero249aurora1 12s ease-in-out infinite",
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(225deg, ${accentColor}00 10%, #c084fc50 35%, ${primaryColor}40 55%, ${accentColor}00 80%)`,
          backgroundSize: "300% 300%",
          animation: "hero249aurora2 16s ease-in-out infinite",
          filter: "blur(80px)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(180deg, transparent 0%, ${primaryColor}15 40%, ${accentColor}10 60%, transparent 100%)`,
          backgroundSize: "200% 200%",
          animation: "hero249aurora3 10s ease-in-out infinite",
          filter: "blur(40px)",
        }}
      />

      {/* Stars */}
      {Array.from({ length: 30 }, (_, i) => (
        <div
          key={i}
          className="absolute w-px h-px bg-white rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 60}%`,
            width: `${Math.random() * 2 + 1}px`,
            height: `${Math.random() * 2 + 1}px`,
            animation: `hero249shimmer ${Math.random() * 3 + 2}s ease-in-out ${Math.random() * 3}s infinite`,
          }}
        />
      ))}

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Mountain className="w-5 h-5" style={{ color: primaryColor }} />
            <span className="text-sm font-medium tracking-[0.15em] uppercase" style={{ color: primaryColor }}>
              {subheading}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-6">
            {heading}
          </h1>

          <p className="text-base sm:text-lg max-w-2xl mx-auto mb-10 opacity-60 leading-relaxed">
            {bodyText}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href={buttonUrl}
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold text-base transition-all hover:scale-105 flex items-center justify-center gap-2"
              style={{
                backgroundColor: primaryColor,
                color: bgColor,
                boxShadow: `0 0 40px ${primaryColor}30`,
              }}
            >
              <Compass className="w-5 h-5" />
              {buttonText}
            </a>
            <a
              href={secondaryButtonUrl}
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold text-base border transition-all hover:scale-105 flex items-center justify-center gap-2"
              style={{ borderColor: `${fgColor}25` }}
            >
              <MapPin className="w-5 h-5" />
              {secondaryButtonText}
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {items.map((item, i) => {
              const icons = [MapPin, Compass, Mountain, Camera];
              const Icon = icons[i % icons.length];
              return (
                <div
                  key={i}
                  className="p-5 rounded-xl border backdrop-blur-sm transition-all hover:scale-105"
                  style={{
                    borderColor: `${fgColor}10`,
                    backgroundColor: `${fgColor}05`,
                  }}
                >
                  <Icon className="w-5 h-5 mx-auto mb-2" style={{ color: primaryColor }} />
                  <div className="font-bold text-lg">{item.title}</div>
                  <div className="text-xs opacity-50 mt-1">{item.description}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
