"use client";

import type { BlockProps } from "@/blocks/types";
import { Printer, Palette, Upload, ArrowRight, CheckCircle } from "lucide-react";

export default function Hero339(props: BlockProps) {
  const {
    theme,
    heading = "Print Bold. Stand Out.",
    subheading = "Custom Printing & Signage Solutions",
    bodyText = "From business cards to building wraps, we bring your vision to life with precision color and quality materials. Fast turnarounds, competitive prices, and a team that cares about every detail.",
    buttonText = "Get a Custom Quote",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Business Cards", description: "From 500 pcs" },
      { title: "Banners & Signs", description: "Indoor & outdoor" },
      { title: "Vehicle Wraps", description: "Full & partial" },
      { title: "Packaging", description: "Custom boxes & labels" },
      { title: "Large Format", description: "Up to 10ft wide" },
      { title: "Apparel", description: "Screen & DTG print" },
    ],
  } = props;

  // CMYK-inspired colors
  const cmyk = {
    c: "#00AEEF",
    m: "#EC008C",
    y: "#FFF200",
    k: "#231F20",
  };

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#FAFAFA", color: theme?.foreground ?? "#1A1A1A" }}
      className="relative overflow-hidden"
    >
      {/* CMYK color bar at top */}
      <div className="flex h-1.5">
        <div className="flex-1" style={{ backgroundColor: cmyk.c }} />
        <div className="flex-1" style={{ backgroundColor: cmyk.m }} />
        <div className="flex-1" style={{ backgroundColor: cmyk.y }} />
        <div className="flex-1" style={{ backgroundColor: cmyk.k }} />
      </div>

      {/* Registration marks decorative element */}
      <div className="absolute top-16 right-8 opacity-10 hidden md:block">
        <div className="w-16 h-16 rounded-full border-2 border-current flex items-center justify-center">
          <div className="w-0.5 h-16 bg-current absolute" />
          <div className="h-0.5 w-16 bg-current absolute" />
          <div className="w-8 h-8 rounded-full border border-current" />
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 py-14 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Printer className="w-5 h-5" style={{ color: theme?.primary ?? cmyk.m }} />
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: theme?.primary ?? cmyk.m }}>
                {subheading}
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black leading-none mb-2 tracking-tight">
              Print{" "}
              <span style={{ color: cmyk.c }}>B</span>
              <span style={{ color: cmyk.m }}>o</span>
              <span style={{ color: cmyk.y }}>l</span>
              <span style={{ color: cmyk.k }}>d</span>
              .
            </h1>
            <h1 className="text-4xl md:text-6xl font-black leading-none mb-6 tracking-tight">
              Stand Out.
            </h1>

            <p className="text-base opacity-60 mb-8 max-w-md leading-relaxed">
              {bodyText}
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              <a
                href={buttonUrl}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg text-white font-bold text-sm hover:opacity-90 transition-opacity"
                style={{ backgroundColor: theme?.primary ?? cmyk.m }}
              >
                <Palette className="w-4 h-4" />
                {buttonText}
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-bold text-sm border-2 hover:bg-black/5 transition-colors"
                style={{ borderColor: theme?.foreground ?? "#1A1A1A" }}
              >
                <Upload className="w-4 h-4" />
                Upload Your Design
              </a>
            </div>

            <div className="flex flex-wrap gap-4 text-xs opacity-50">
              <span className="flex items-center gap-1"><CheckCircle className="w-3.5 h-3.5" style={{ color: theme?.primary ?? cmyk.c }} /> 24-Hour Rush Available</span>
              <span className="flex items-center gap-1"><CheckCircle className="w-3.5 h-3.5" style={{ color: theme?.primary ?? cmyk.c }} /> Free Design Review</span>
              <span className="flex items-center gap-1"><CheckCircle className="w-3.5 h-3.5" style={{ color: theme?.primary ?? cmyk.c }} /> Bulk Discounts</span>
            </div>
          </div>

          {/* Product samples grid */}
          <div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {items.map((item, i) => {
                const cardColors = [cmyk.c, cmyk.m, cmyk.y, cmyk.k, cmyk.c, cmyk.m];
                const cardColor = theme?.primary ?? cardColors[i % cardColors.length];
                return (
                  <a
                    key={i}
                    href="#"
                    className="group relative p-5 rounded-xl border hover:shadow-lg transition-all"
                    style={{ borderColor: `${cardColor}20` }}
                  >
                    <div
                      className="absolute top-0 left-0 w-full h-1 rounded-t-xl"
                      style={{ backgroundColor: cardColor }}
                    />
                    <Printer
                      className="w-8 h-8 mb-3 opacity-60 group-hover:opacity-100 transition-opacity"
                      style={{ color: cardColor }}
                    />
                    <h3 className="font-bold text-sm mb-1">{item.title}</h3>
                    <p className="text-xs opacity-40">{item.description}</p>
                    <ArrowRight
                      className="w-3.5 h-3.5 absolute bottom-4 right-4 opacity-0 group-hover:opacity-60 transition-opacity"
                      style={{ color: cardColor }}
                    />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
