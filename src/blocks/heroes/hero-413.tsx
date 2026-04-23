"use client";

import type { BlockProps } from "@/blocks/types";
import { Ticket, Calendar, MapPin, Clock, ArrowRight, Star, Music } from "lucide-react";

export default function Hero413(props: BlockProps) {
  const {
    theme,
    heading = "The Future of Tech Conference 2026",
    subheading = "ADMIT ONE",
    bodyText = "Join 5,000+ innovators, builders, and dreamers for three days of keynotes, workshops, and networking that will reshape how you think about technology.",
    buttonText = "Get Your Ticket",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Keynote Speakers", description: "20+ industry leaders", icon: "star" },
      { title: "Workshops", description: "50+ hands-on sessions", icon: "star" },
      { title: "Networking", description: "After-party included", icon: "star" },
    ],
  } = props;

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#1a1a2e", color: theme?.foreground ?? "#ffffff" }}
      className="min-h-screen px-4 py-12 sm:px-6 lg:px-8 flex items-center justify-center"
    >
      <div className="mx-auto max-w-4xl w-full">
        {/* Ticket container */}
        <div className="flex flex-col lg:flex-row">
          {/* Main ticket */}
          <div
            className="flex-1 rounded-l-2xl rounded-r-2xl lg:rounded-r-none p-8 sm:p-10 relative overflow-hidden"
            style={{ backgroundColor: theme?.muted ?? "#fafafa", color: theme?.foreground ?? "#1a1a2e" }}
          >
            {/* Perforated edge (right side on desktop) */}
            <div className="hidden lg:block absolute top-0 right-0 h-full w-4">
              {Array.from({ length: 20 }).map((_, i) => (
                <div
                  key={i}
                  className="w-4 h-4 rounded-full absolute right-[-8px]"
                  style={{ top: `${i * 5}%`, backgroundColor: theme?.background ?? "#1a1a2e" }}
                />
              ))}
            </div>

            {/* Perforated edge (bottom on mobile) */}
            <div className="lg:hidden absolute bottom-0 left-0 w-full h-4 flex justify-between">
              {Array.from({ length: 16 }).map((_, i) => (
                <div
                  key={i}
                  className="w-4 h-4 rounded-full absolute bottom-[-8px]"
                  style={{ left: `${i * 6.5}%`, backgroundColor: theme?.background ?? "#1a1a2e" }}
                />
              ))}
            </div>

            {/* Event type */}
            <div className="flex items-center gap-2 mb-6">
              <Music className="h-4 w-4" style={{ color: theme?.primary ?? "#6366f1" }} />
              <span className="text-xs font-bold uppercase tracking-[0.2em] opacity-60">Tech & Innovation Event</span>
            </div>

            {/* Event title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4 leading-tight">
              {heading}
            </h1>

            <p className="text-sm opacity-60 leading-relaxed mb-8 max-w-lg">{bodyText}</p>

            {/* Event details */}
            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" style={{ color: theme?.primary ?? "#6366f1" }} />
                <span className="text-sm font-medium">Sept 15–17, 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" style={{ color: theme?.primary ?? "#6366f1" }} />
                <span className="text-sm font-medium">Lagos, Nigeria</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" style={{ color: theme?.primary ?? "#6366f1" }} />
                <span className="text-sm font-medium">9:00 AM WAT</span>
              </div>
            </div>

            {/* Features */}
            <div className="flex flex-wrap gap-4 mb-8">
              {items.map((item, i) => (
                <div
                  key={i}
                  className="rounded-xl px-4 py-3 border"
                  style={{ borderColor: theme?.border ?? "#e5e7eb" }}
                >
                  <div className="flex items-center gap-1.5 mb-1">
                    <Star className="h-3 w-3" style={{ color: theme?.primary ?? "#6366f1" }} />
                    <span className="text-xs font-bold">{item.title}</span>
                  </div>
                  <span className="text-xs opacity-50">{item.description}</span>
                </div>
              ))}
            </div>

            <a
              href={buttonUrl}
              className="inline-flex items-center gap-2 rounded-xl px-8 py-4 font-bold text-white text-sm transition-transform hover:scale-105"
              style={{ backgroundColor: theme?.primary ?? "#6366f1" }}
            >
              <Ticket className="h-4 w-4" />
              {buttonText}
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          {/* Ticket stub */}
          <div
            className="w-full lg:w-48 rounded-b-2xl lg:rounded-b-none lg:rounded-r-2xl p-6 flex flex-row lg:flex-col items-center justify-between lg:justify-center gap-4 text-center"
            style={{ backgroundColor: theme?.primary ?? "#6366f1", color: "#ffffff" }}
          >
            <div className="lg:rotate-0">
              <Ticket className="h-8 w-8 mx-auto mb-2 opacity-60" />
              <div className="text-2xl font-black tracking-wider">{subheading}</div>
              <div className="text-xs opacity-60 mt-1 uppercase tracking-wider">General Admission</div>
            </div>

            <div className="text-left lg:text-center mt-0 lg:mt-6">
              <div className="text-xs opacity-60 uppercase tracking-wider mb-1">Ticket No.</div>
              <div className="text-lg font-mono font-bold">FTC-2026-0847</div>
            </div>

            <div className="hidden lg:block mt-6">
              <div className="w-20 h-20 mx-auto border-2 border-dashed border-white/30 rounded-lg flex items-center justify-center">
                <div className="grid grid-cols-4 gap-0.5">
                  {Array.from({ length: 16 }).map((_, i) => (
                    <div key={i} className={`w-2 h-2 ${i % 3 === 0 ? "bg-white" : "bg-white/30"}`} />
                  ))}
                </div>
              </div>
              <div className="text-[9px] opacity-40 mt-2">SCAN TO ENTER</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
