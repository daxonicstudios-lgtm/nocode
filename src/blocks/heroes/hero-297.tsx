"use client";

import type { BlockProps } from "@/blocks/types";
import { HardHat, Phone, Building2, Ruler, ShieldCheck, ArrowRight } from "lucide-react";

export default function Hero297(props: BlockProps) {
  const {
    theme,
    heading = "Building the Future, One Project at a Time",
    subheading = "Commercial & Residential Construction",
    bodyText = "From ground-breaking to ribbon-cutting, we deliver projects on time, on budget, and built to last. Over 25 years of trusted construction across the region.",
    buttonText = "Request a Quote",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "350+", description: "Projects Completed" },
      { title: "$2.1B", description: "Total Value Built" },
      { title: "25+", description: "Years Experience" },
      { title: "98%", description: "On-Time Delivery" },
    ],
  } = props;

  const services = [
    { icon: Building2, label: "Commercial Buildings" },
    { icon: Ruler, label: "Custom Homes" },
    { icon: ShieldCheck, label: "Infrastructure" },
  ];

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#1a1a1a", color: theme?.foreground ?? "#f0ede8" }}
      className="min-h-screen relative overflow-hidden"
    >
      {/* Background image overlay */}
      {imageUrl && (
        <div className="absolute inset-0">
          <img src={imageUrl} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/70" />
        </div>
      )}

      {/* Yellow accent stripe */}
      <div
        className="absolute top-0 left-0 w-full h-1.5"
        style={{ backgroundColor: theme?.primary ?? "#f59e0b" }}
      />

      <div className="relative z-10 px-5 py-20 lg:py-28">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <HardHat className="w-6 h-6" style={{ color: theme?.primary ?? "#f59e0b" }} />
                <span
                  className="text-xs font-black uppercase tracking-[0.2em]"
                  style={{ color: theme?.primary ?? "#f59e0b" }}
                >
                  {subheading}
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] mb-6 tracking-tight uppercase">
                {heading}
              </h1>

              <p className="text-sm sm:text-base opacity-60 leading-relaxed mb-10 max-w-lg">
                {bodyText}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <a
                  href={buttonUrl}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-black uppercase tracking-wider transition-transform hover:scale-105"
                  style={{
                    backgroundColor: theme?.primary ?? "#f59e0b",
                    color: "#000000",
                  }}
                >
                  {buttonText}
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="tel:+15551234567"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold uppercase tracking-wider border-2 transition-colors hover:opacity-80"
                  style={{ borderColor: theme?.foreground ?? "#f0ede8" }}
                >
                  <Phone className="w-4 h-4" />
                  (555) 123-4567
                </a>
              </div>

              {/* Services */}
              <div className="flex flex-wrap gap-4">
                {services.map((s, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 px-4 py-2 border text-xs font-bold uppercase tracking-wider"
                    style={{ borderColor: `${theme?.foreground ?? "#f0ede8"}20` }}
                  >
                    <s.icon className="w-4 h-4" style={{ color: theme?.primary ?? "#f59e0b" }} />
                    {s.label}
                  </div>
                ))}
              </div>
            </div>

            {/* Right — stats */}
            <div className="grid grid-cols-2 gap-4">
              {items.slice(0, 4).map((item, i) => (
                <div
                  key={i}
                  className="p-6 sm:p-8 border-2 text-center"
                  style={{ borderColor: `${theme?.primary ?? "#f59e0b"}30` }}
                >
                  <div
                    className="text-3xl sm:text-4xl font-black mb-2"
                    style={{ color: theme?.primary ?? "#f59e0b" }}
                  >
                    {item.title}
                  </div>
                  <div className="text-[10px] uppercase tracking-[0.2em] opacity-50 font-bold">
                    {item.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
