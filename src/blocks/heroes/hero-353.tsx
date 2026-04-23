"use client";

import type { BlockProps } from "@/blocks/types";
import { Frame, Calendar, MapPin, ArrowRight, Clock, Eye } from "lucide-react";

export default function Hero353(props: BlockProps) {
  const {
    theme,
    heading = "Where Art Meets Emotion",
    subheading = "Lumière Gallery",
    bodyText = "Experience contemporary art in an intimate setting. Our curated exhibitions feature emerging and established artists pushing boundaries across painting, sculpture, photography, and mixed media.",
    buttonText = "View Current Exhibition",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Chromatic Landscapes", description: "Oil on canvas series by Elena Vasquez", label: "Now Showing" },
      { title: "Digital Horizons", description: "New media installation by Park Jin-ho", label: "Opens May 15" },
      { title: "Sculpted Light", description: "Bronze & glass works by Amara Osei", label: "Opens June 2" },
    ],
  } = props;

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#fafaf9", color: theme?.foreground ?? "#1c1917" }}
      className="min-h-screen px-5 py-20 sm:py-28 flex items-center relative overflow-hidden"
    >
      {/* Subtle decorative line */}
      <div
        className="absolute top-0 left-1/2 w-px h-32 -translate-x-1/2"
        style={{ backgroundColor: `${theme?.primary ?? "#78716c"}30` }}
      />

      <div className="max-w-5xl mx-auto w-full relative z-10">
        {/* Header — centered, elegant */}
        <div className="text-center mb-16">
          <p
            className="text-xs font-medium uppercase tracking-[0.3em] mb-6"
            style={{ color: theme?.primary ?? "#78716c" }}
          >
            {subheading}
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extralight leading-[1.1] mb-8 tracking-tight">
            {heading}
          </h1>

          <div
            className="w-16 h-px mx-auto mb-8"
            style={{ backgroundColor: theme?.primary ?? "#78716c" }}
          />

          <p className="text-base sm:text-lg opacity-50 leading-relaxed max-w-2xl mx-auto mb-10 font-light">
            {bodyText}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={buttonUrl}
              className="inline-flex items-center justify-center gap-3 px-8 py-3.5 text-sm font-medium text-white tracking-wide transition-transform hover:scale-105"
              style={{ backgroundColor: theme?.primary ?? "#78716c" }}
            >
              <Eye className="w-4 h-4" />
              {buttonText}
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center gap-3 px-8 py-3.5 text-sm font-medium border tracking-wide"
              style={{ borderColor: `${theme?.primary ?? "#78716c"}40`, color: theme?.primary ?? "#78716c" }}
            >
              <Calendar className="w-4 h-4" />
              Book a Private Viewing
            </a>
          </div>
        </div>

        {/* Exhibition preview — current show */}
        {imageUrl && (
          <div className="mb-16">
            <div className="aspect-[21/9] rounded-sm overflow-hidden shadow-lg">
              <img src={imageUrl} alt="Current exhibition" className="w-full h-full object-cover" />
            </div>
          </div>
        )}

        {/* Upcoming exhibitions */}
        <div>
          <h3
            className="text-xs font-medium uppercase tracking-[0.25em] mb-8 text-center"
            style={{ color: theme?.primary ?? "#78716c" }}
          >
            Exhibition Calendar
          </h3>

          <div className="space-y-0 divide-y" style={{ borderColor: `${theme?.primary ?? "#78716c"}15` }}>
            {items.slice(0, 3).map((exhibit, i) => (
              <div
                key={i}
                className="flex flex-col sm:flex-row sm:items-center justify-between py-6 gap-3 group cursor-pointer"
                style={{ borderColor: `${theme?.primary ?? "#78716c"}12` }}
              >
                <div className="flex items-center gap-4">
                  <Frame className="w-5 h-5 opacity-30 group-hover:opacity-70 transition-opacity" style={{ color: theme?.primary ?? "#78716c" }} />
                  <div>
                    <div className="font-medium text-base">{exhibit.title}</div>
                    <div className="text-sm opacity-40 font-light">{exhibit.description}</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 sm:ml-auto">
                  <span
                    className="text-xs font-medium px-3 py-1.5 rounded-full"
                    style={{
                      backgroundColor: i === 0 ? `${theme?.primary ?? "#78716c"}15` : "transparent",
                      color: theme?.primary ?? "#78716c",
                      border: i === 0 ? "none" : `1px solid ${theme?.primary ?? "#78716c"}20`,
                    }}
                  >
                    {exhibit.label}
                  </span>
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-50 transition-opacity" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Visit info bar */}
        <div
          className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-8 pt-10 border-t text-sm opacity-50"
          style={{ borderColor: `${theme?.primary ?? "#78716c"}10` }}
        >
          <span className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5" />
            245 Gallery Row, Arts District
          </span>
          <span className="flex items-center gap-2">
            <Clock className="w-3.5 h-3.5" />
            Tue–Sun, 10 AM – 6 PM
          </span>
          <span className="font-medium" style={{ color: theme?.primary ?? "#78716c" }}>
            Free Admission
          </span>
        </div>
      </div>
    </section>
  );
}
