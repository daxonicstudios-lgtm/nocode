"use client";

import type { BlockProps } from "@/blocks/types";
import { Plane, MapPin, Stamp, ArrowRight, Heart } from "lucide-react";

export default function Hero412(props: BlockProps) {
  const {
    theme,
    heading = "Wish You Were Here",
    subheading = "Discover Your Next Adventure",
    bodyText = "Life is short and the world is wide. Let us help you explore breathtaking destinations, create unforgettable memories, and find the journey that speaks to your soul.",
    buttonText = "Start Your Journey",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Santorini, Greece", description: "Sunsets over the Aegean", icon: "pin" },
      { title: "Kyoto, Japan", description: "Ancient temples & cherry blossoms", icon: "pin" },
      { title: "Cape Town, SA", description: "Where mountains meet the ocean", icon: "pin" },
    ],
  } = props;

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#f5efe6", color: theme?.foreground ?? "#3d2e1e" }}
      className="min-h-screen px-4 py-12 sm:px-6 lg:px-8 flex items-center justify-center"
    >
      <div className="mx-auto max-w-4xl w-full">
        {/* Postcard outer frame */}
        <div
          className="rounded-2xl shadow-2xl overflow-hidden"
          style={{ backgroundColor: theme?.background ?? "#fffef9" }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left: Image side */}
            <div className="relative">
              {imageUrl ? (
                <img src={imageUrl} alt="" className="w-full h-72 lg:h-full object-cover" />
              ) : (
                <div
                  className="w-full h-72 lg:h-full min-h-[360px] flex items-center justify-center relative overflow-hidden"
                  style={{ background: `linear-gradient(135deg, ${theme?.primary ?? "#2563eb"}20, ${theme?.accent ?? "#f59e0b"}30)` }}
                >
                  <Plane className="h-24 w-24 opacity-10" />
                  <div className="absolute bottom-4 left-4 text-xs opacity-40 uppercase tracking-wider">Greetings from paradise</div>
                </div>
              )}
              {/* Stamp overlay */}
              <div className="absolute top-4 right-4">
                <div
                  className="w-16 h-20 rounded border-2 border-dashed flex flex-col items-center justify-center gap-1"
                  style={{ borderColor: theme?.primary ?? "#2563eb", backgroundColor: `${theme?.background ?? "#fffef9"}e0` }}
                >
                  <Stamp className="h-5 w-5" style={{ color: theme?.primary ?? "#2563eb" }} />
                  <span className="text-[8px] font-bold uppercase" style={{ color: theme?.primary ?? "#2563eb" }}>AIR MAIL</span>
                </div>
              </div>
              {/* Postmark */}
              <div className="absolute top-4 left-4">
                <div
                  className="w-20 h-20 rounded-full border-2 flex items-center justify-center opacity-30 rotate-[-15deg]"
                  style={{ borderColor: theme?.primary ?? "#2563eb" }}
                >
                  <div className="text-center">
                    <div className="text-[7px] font-bold uppercase">Sent with</div>
                    <Heart className="h-3 w-3 mx-auto" />
                    <div className="text-[7px] font-bold">2026</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Message side */}
            <div className="p-8 sm:p-10 lg:p-12 flex flex-col justify-between">
              {/* Postcard lines at top */}
              <div>
                <div className="flex items-center gap-2 mb-1 text-xs uppercase tracking-widest opacity-40">
                  <Plane className="h-3.5 w-3.5" />
                  {subheading}
                </div>

                <h1 className="text-3xl sm:text-4xl font-bold mb-4" style={{ fontFamily: "'Georgia', serif" }}>
                  {heading}
                </h1>

                <div className="border-b mb-4" style={{ borderColor: theme?.border ?? "#d4c4a8" }} />

                <p className="text-base leading-relaxed opacity-70 mb-6" style={{ fontFamily: "'Georgia', serif" }}>
                  {bodyText}
                </p>

                {/* Destinations */}
                <div className="space-y-3 mb-8">
                  {items.map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <MapPin className="h-4 w-4 flex-shrink-0" style={{ color: theme?.primary ?? "#2563eb" }} />
                      <div>
                        <span className="font-semibold text-sm">{item.title}</span>
                        <span className="text-xs opacity-50 ml-2">{item.description}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <a
                  href={buttonUrl}
                  className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold text-white text-sm transition-transform hover:scale-105"
                  style={{ backgroundColor: theme?.primary ?? "#2563eb" }}
                >
                  {buttonText}
                  <ArrowRight className="h-4 w-4" />
                </a>

                {/* Address lines */}
                <div className="mt-8 pt-4 border-t space-y-1" style={{ borderColor: theme?.border ?? "#d4c4a8" }}>
                  <div className="h-px w-3/4 opacity-20" style={{ backgroundColor: theme?.foreground ?? "#3d2e1e" }} />
                  <div className="h-px w-2/3 opacity-20" style={{ backgroundColor: theme?.foreground ?? "#3d2e1e" }} />
                  <div className="h-px w-1/2 opacity-20" style={{ backgroundColor: theme?.foreground ?? "#3d2e1e" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
