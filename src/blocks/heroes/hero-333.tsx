"use client";

import type { BlockProps } from "@/blocks/types";
import { Pen, Calendar, Instagram, ChevronRight, Flame } from "lucide-react";

export default function Hero333(props: BlockProps) {
  const {
    theme,
    heading = "Your Skin. Your Story.",
    subheading = "Custom Tattoo Studio",
    bodyText = "Award-winning artists specializing in blackwork, realism, and Japanese traditional. Walk-ins welcome, custom designs encouraged. Every piece is one of a kind.",
    buttonText = "Book a Consultation",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Blackwork", imageUrl: "" },
      { title: "Realism", imageUrl: "" },
      { title: "Japanese", imageUrl: "" },
      { title: "Watercolor", imageUrl: "" },
    ],
  } = props;

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#0A0A0A", color: theme?.foreground ?? "#E8E8E8" }}
      className="relative overflow-hidden"
    >
      {/* Edgy diagonal accent */}
      <div
        className="absolute top-0 right-0 w-1/3 h-full opacity-5 -skew-x-12 origin-top-right"
        style={{ backgroundColor: theme?.primary ?? "#DC2626" }}
      />
      <div
        className="absolute bottom-0 left-0 w-px h-2/3"
        style={{ backgroundColor: theme?.primary ?? "#DC2626" }}
      />

      <div className="relative max-w-6xl mx-auto px-4 py-16 md:py-28">
        <div className="grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-7">
            <div className="flex items-center gap-3 mb-6">
              <Flame className="w-5 h-5" style={{ color: theme?.primary ?? "#DC2626" }} />
              <span
                className="text-xs font-bold uppercase tracking-[0.3em]"
                style={{ color: theme?.primary ?? "#DC2626" }}
              >
                {subheading}
              </span>
            </div>

            <h1 className="text-4xl md:text-7xl font-black leading-none mb-6 tracking-tight">
              {heading}
            </h1>

            <div className="w-16 h-0.5 mb-6" style={{ backgroundColor: theme?.primary ?? "#DC2626" }} />

            <p className="text-base md:text-lg opacity-50 mb-10 max-w-lg leading-relaxed font-light">
              {bodyText}
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <a
                href={buttonUrl}
                className="inline-flex items-center gap-2 px-7 py-3.5 text-white font-bold text-sm uppercase tracking-wider hover:opacity-90 transition-opacity"
                style={{ backgroundColor: theme?.primary ?? "#DC2626" }}
              >
                <Calendar className="w-4 h-4" />
                {buttonText}
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-7 py-3.5 border font-bold text-sm uppercase tracking-wider hover:bg-white/5 transition-colors"
                style={{ borderColor: theme?.foreground ? `${theme.foreground}30` : "#E8E8E830" }}
              >
                <Instagram className="w-4 h-4" />
                View Portfolio
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-8 md:gap-12">
              <div>
                <div className="text-3xl md:text-4xl font-black" style={{ color: theme?.primary ?? "#DC2626" }}>8K+</div>
                <div className="text-xs opacity-40 uppercase tracking-wider mt-1">Tattoos Done</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-black" style={{ color: theme?.primary ?? "#DC2626" }}>12</div>
                <div className="text-xs opacity-40 uppercase tracking-wider mt-1">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-black" style={{ color: theme?.primary ?? "#DC2626" }}>5</div>
                <div className="text-xs opacity-40 uppercase tracking-wider mt-1">Artists on Staff</div>
              </div>
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="grid grid-cols-2 gap-3">
              {items.map((item, i) => (
                <div
                  key={i}
                  className="relative aspect-square overflow-hidden group cursor-pointer"
                  style={{ backgroundColor: theme?.foreground ? `${theme.foreground}08` : "#FFFFFF08" }}
                >
                  {item.imageUrl ? (
                    <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <Pen className="w-8 h-8 opacity-20" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3">
                    <span className="text-xs font-bold uppercase tracking-wider flex items-center gap-1">
                      {item.title}
                      <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-4">
              <span className="text-xs opacity-30 uppercase tracking-widest">Walk-ins Welcome Daily</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
