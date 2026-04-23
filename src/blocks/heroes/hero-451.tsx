"use client";

import type { BlockProps } from "@/blocks/types";
import { Trees, Mountain, MapPin, Compass, Sun, Tent } from "lucide-react";

export default function Hero451(props: BlockProps) {
  const {
    theme,
    heading = "Explore the Great Outdoors",
    subheading = "Guided Camping & Trail Adventures",
    bodyText = "Disconnect from the noise and reconnect with nature. Our expert-led camping trips take you through breathtaking trails, hidden waterfalls, and pristine wilderness across national parks.",
    buttonText = "Book Your Adventure",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Guided Hikes", description: "20+ scenic trails", icon: "compass" },
      { title: "Campsite Setups", description: "All gear included", icon: "tent" },
      { title: "Wildlife Spotting", description: "Expert naturalists", icon: "trees" },
      { title: "Summit Treks", description: "Peak experiences", icon: "mountain" },
    ],
  } = props;

  const iconMap: Record<string, React.ReactNode> = {
    compass: <Compass className="w-6 h-6" />,
    tent: <Tent className="w-6 h-6" />,
    trees: <Trees className="w-6 h-6" />,
    mountain: <Mountain className="w-6 h-6" />,
  };

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#1a2e1a", color: theme?.foreground ?? "#e8f0e4" }}
      className="relative min-h-screen overflow-hidden"
    >
      {/* Topographic pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full border border-current" />
        <div className="absolute top-16 left-16 w-52 h-52 rounded-full border border-current" />
        <div className="absolute top-22 left-22 w-40 h-40 rounded-full border border-current" />
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full border border-current" />
        <div className="absolute bottom-28 right-18 w-64 h-64 rounded-full border border-current" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <MapPin className="w-5 h-5" style={{ color: theme?.primary ?? "#6abf4b" }} />
              <span className="text-sm font-medium tracking-widest uppercase opacity-80">
                Adventure Awaits
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              {heading}
            </h1>

            <p
              className="text-lg sm:text-xl font-light mb-4 opacity-90"
              style={{ color: theme?.primary ?? "#6abf4b" }}
            >
              {subheading}
            </p>

            <p className="text-base sm:text-lg opacity-75 mb-8 max-w-lg leading-relaxed">
              {bodyText}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href={buttonUrl}
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold text-lg transition-transform hover:scale-105"
                style={{ backgroundColor: theme?.primary ?? "#6abf4b", color: theme?.background ?? "#1a2e1a" }}
              >
                <Sun className="w-5 h-5 mr-2" />
                {buttonText}
              </a>
              <a
                href="#trails"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold text-lg border-2 transition-colors hover:opacity-80"
                style={{ borderColor: theme?.primary ?? "#6abf4b", color: theme?.primary ?? "#6abf4b" }}
              >
                View Trail Map
              </a>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {items.slice(0, 4).map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-3 rounded-lg"
                  style={{ backgroundColor: `${theme?.primary ?? "#6abf4b"}15` }}
                >
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: `${theme?.primary ?? "#6abf4b"}25`, color: theme?.primary ?? "#6abf4b" }}
                  >
                    {iconMap[item.icon ?? "compass"] ?? <Compass className="w-6 h-6" />}
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{item.title}</p>
                    <p className="text-xs opacity-70">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            {imageUrl ? (
              <img
                src={imageUrl}
                alt={heading}
                className="w-full h-[500px] object-cover rounded-2xl"
              />
            ) : (
              <div
                className="w-full h-[400px] sm:h-[500px] rounded-2xl flex items-end justify-center relative overflow-hidden"
                style={{ backgroundColor: `${theme?.primary ?? "#6abf4b"}15` }}
              >
                {/* Mountain silhouette */}
                <div className="absolute bottom-0 left-0 right-0">
                  <svg viewBox="0 0 400 200" className="w-full" style={{ color: theme?.primary ?? "#6abf4b" }}>
                    <polygon points="0,200 80,60 160,140 200,40 280,120 340,70 400,200" fill="currentColor" opacity="0.2" />
                    <polygon points="0,200 60,100 120,160 180,80 260,150 320,90 400,200" fill="currentColor" opacity="0.15" />
                  </svg>
                </div>
                <Trees className="w-24 h-24 absolute top-1/3 opacity-20" style={{ color: theme?.primary ?? "#6abf4b" }} />
              </div>
            )}
            {/* Stats badge */}
            <div
              className="absolute -bottom-4 left-4 sm:left-8 px-6 py-3 rounded-xl shadow-lg"
              style={{ backgroundColor: theme?.primary ?? "#6abf4b", color: theme?.background ?? "#1a2e1a" }}
            >
              <p className="text-2xl font-bold">500+</p>
              <p className="text-xs font-medium">Trails Explored</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
