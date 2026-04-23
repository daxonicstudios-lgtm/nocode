"use client";

import type { BlockProps } from "@/blocks/types";
import { Navigation, Camera, Map, Building2, TreePine, Radio, ArrowUpRight } from "lucide-react";

export default function Hero495(props: BlockProps) {
  const {
    theme,
    heading = "See the World From Above",
    subheading = "SkyLens Drone Services",
    bodyText = "Professional aerial photography, surveying, and inspection services powered by FAA-certified pilots and enterprise-grade drone fleets.",
    buttonText = "Get a Free Quote",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Real Estate", description: "Aerial tours & property mapping", icon: "building" },
      { title: "Agriculture", description: "Crop health monitoring & analysis", icon: "tree" },
      { title: "Film & Media", description: "Cinematic aerial videography", icon: "camera" },
      { title: "Surveying", description: "Topographic & land surveys", icon: "map" },
    ],
  } = props;

  const iconMap: Record<string, React.ReactNode> = {
    building: <Building2 className="w-5 h-5" />,
    tree: <TreePine className="w-5 h-5" />,
    camera: <Camera className="w-5 h-5" />,
    map: <Map className="w-5 h-5" />,
  };

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#0d1117", color: theme?.foreground ?? "#e6edf3" }}
      className="min-h-screen relative overflow-hidden"
    >
      {/* Aerial grid pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(${theme?.primary ?? "#38bdf8"}40 1px, transparent 1px),
            linear-gradient(90deg, ${theme?.primary ?? "#38bdf8"}40 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Altitude indicator */}
      <div className="absolute left-4 sm:left-8 top-1/4 bottom-1/4 w-px bg-white/10 hidden lg:block">
        {["500ft", "1000ft", "1500ft", "2000ft"].map((alt, i) => (
          <div
            key={alt}
            className="absolute left-3 text-[10px] opacity-30 whitespace-nowrap"
            style={{ top: `${i * 33}%` }}
          >
            {alt}
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left — Main content (3 cols) */}
          <div className="lg:col-span-3">
            <div className="flex items-center gap-3 mb-6">
              <Navigation
                className="w-5 h-5"
                style={{ color: theme?.primary ?? "#38bdf8" }}
              />
              <span
                className="text-xs font-semibold uppercase tracking-widest"
                style={{ color: theme?.primary ?? "#38bdf8" }}
              >
                {subheading}
              </span>
              <div className="flex-1 h-px bg-white/10" />
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              {heading}
            </h1>

            <p className="text-base sm:text-lg opacity-50 leading-relaxed mb-10 max-w-xl">
              {bodyText}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-14">
              <a
                href={buttonUrl}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg text-white font-semibold text-sm shadow-lg transition-transform hover:scale-105"
                style={{ backgroundColor: theme?.primary ?? "#38bdf8" }}
              >
                {buttonText}
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg border border-white/20 text-sm font-medium hover:bg-white/5 transition-colors"
              >
                <Radio className="w-4 h-4" />
                View Live Demo
              </a>
            </div>

            {/* Service type cards */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {items.map((item, i) => (
                <div
                  key={i}
                  className="group border border-white/10 rounded-xl p-4 sm:p-5 hover:border-white/25 transition-all cursor-pointer"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{
                        backgroundColor: `${theme?.primary ?? "#38bdf8"}15`,
                        color: theme?.primary ?? "#38bdf8",
                      }}
                    >
                      {iconMap[item.icon ?? "camera"]}
                    </div>
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-50 transition-opacity" />
                  </div>
                  <h3 className="text-sm font-semibold mb-1">{item.title}</h3>
                  <p className="text-xs opacity-40">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Portfolio showcase (2 cols) */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <p className="text-xs uppercase tracking-widest opacity-30 mb-2">Recent Projects</p>

            {[
              { label: "Downtown Skyline Survey", location: "Austin, TX", type: "Surveying" },
              { label: "Vineyard Aerial Tour", location: "Napa Valley, CA", type: "Film & Media" },
              { label: "Solar Farm Inspection", location: "Phoenix, AZ", type: "Infrastructure" },
            ].map((project, i) => (
              <div
                key={i}
                className="border border-white/10 rounded-xl overflow-hidden hover:border-white/20 transition-colors"
              >
                <div
                  className="h-32 sm:h-36 flex items-end p-4"
                  style={{
                    backgroundColor: `${theme?.primary ?? "#38bdf8"}${10 + i * 5}`,
                  }}
                >
                  {imageUrl && i === 0 ? (
                    <img src={imageUrl} alt={project.label} className="w-full h-full object-cover absolute inset-0" />
                  ) : (
                    <Camera className="w-8 h-8 opacity-20" />
                  )}
                </div>
                <div className="p-4">
                  <p className="text-sm font-semibold">{project.label}</p>
                  <div className="flex items-center justify-between mt-1">
                    <span className="text-xs opacity-40">{project.location}</span>
                    <span
                      className="text-[10px] px-2 py-0.5 rounded-full"
                      style={{
                        backgroundColor: `${theme?.primary ?? "#38bdf8"}20`,
                        color: theme?.primary ?? "#38bdf8",
                      }}
                    >
                      {project.type}
                    </span>
                  </div>
                </div>
              </div>
            ))}

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 mt-2">
              {[
                { num: "2,400+", label: "Flights" },
                { num: "98%", label: "Satisfaction" },
                { num: "50", label: "States" },
              ].map((stat) => (
                <div key={stat.label} className="text-center bg-white/5 rounded-lg p-3">
                  <p className="text-base sm:text-lg font-bold" style={{ color: theme?.primary ?? "#38bdf8" }}>
                    {stat.num}
                  </p>
                  <p className="text-[10px] opacity-40">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
