"use client";

import type { BlockProps } from "@/blocks/types";
import { Palette, ArrowUpRight, Sofa } from "lucide-react";

export default function Hero265(props: BlockProps) {
  const {
    theme,
    heading = "Spaces That Inspire Living",
    subheading = "Interior Design Studio",
    bodyText = "We craft bespoke interiors that blend timeless elegance with modern comfort. Every room tells a story — let us write yours.",
    buttonText = "View Portfolio",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Residential", imageUrl: "" },
      { title: "Commercial", imageUrl: "" },
      { title: "Hospitality", imageUrl: "" },
    ],
  } = props;

  return (
    <section
      style={{
        backgroundColor: theme?.background ?? "#f5f1ec",
        color: theme?.foreground ?? "#2c2420",
      }}
      className="relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-5">
              <div
                className="w-8 h-px"
                style={{ backgroundColor: theme?.primary ?? "#a0845e" }}
              />
              <span
                className="text-xs font-semibold uppercase tracking-[0.2em]"
                style={{ color: theme?.primary ?? "#a0845e" }}
              >
                {subheading}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-light leading-tight tracking-tight">
              {heading}
            </h1>
          </div>

          <div className="sm:max-w-xs">
            <p className="text-sm opacity-60 leading-relaxed mb-6">{bodyText}</p>
            <a
              href={buttonUrl}
              className="inline-flex items-center gap-2 text-sm font-semibold group"
              style={{ color: theme?.primary ?? "#a0845e" }}
            >
              {buttonText}
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {items.map((item, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-xl cursor-pointer"
              style={{
                aspectRatio: i === 0 ? "3/4" : i === 1 ? "1/1" : "3/4",
              }}
            >
              {item.imageUrl ? (
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              ) : (
                <div
                  className="w-full h-full flex items-center justify-center transition-all duration-500"
                  style={{
                    backgroundColor: `${theme?.primary ?? "#a0845e"}${12 + i * 5}`,
                  }}
                >
                  <Sofa
                    className="w-16 h-16 opacity-15"
                    style={{ color: theme?.primary ?? "#a0845e" }}
                  />
                </div>
              )}

              {/* Overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6"
                style={{
                  background: `linear-gradient(to top, ${theme?.background ?? "#f5f1ec"}ee, transparent)`,
                }}
              >
                <div className="flex items-center justify-between w-full">
                  <span className="font-semibold text-lg">{item.title}</span>
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{
                      backgroundColor: theme?.primary ?? "#a0845e",
                      color: "#fff",
                    }}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom accent line */}
        <div className="flex items-center gap-4 mt-14">
          <Palette className="w-4 h-4 opacity-30" />
          <div
            className="flex-1 h-px"
            style={{ backgroundColor: `${theme?.primary ?? "#a0845e"}22` }}
          />
          <span className="text-xs opacity-30 tracking-wider uppercase">Est. 2018</span>
        </div>
      </div>
    </section>
  );
}
