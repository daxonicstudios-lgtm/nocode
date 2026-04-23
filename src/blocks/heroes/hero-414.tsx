"use client";

import type { BlockProps } from "@/blocks/types";
import { Camera, Heart, ArrowRight, Aperture } from "lucide-react";

export default function Hero414(props: BlockProps) {
  const {
    theme,
    heading = "Capture Moments That Matter",
    subheading = "Every Photo Tells a Story",
    bodyText = "We help brands and creators tell their stories through stunning visual content. From product photography to lifestyle campaigns, we bring your vision to life.",
    buttonText = "Book a Session",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Brand Shoots", description: "500+ campaigns delivered" },
      { title: "Happy Clients", description: "98% satisfaction rate" },
      { title: "Countries", description: "Serving 25+ markets" },
    ],
  } = props;

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#f7f5f0", color: theme?.foreground ?? "#2d2d2d" }}
      className="min-h-screen px-4 py-16 sm:px-6 lg:px-8 flex items-center justify-center"
    >
      <div className="mx-auto max-w-5xl w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Polaroid photo */}
          <div className="flex justify-center">
            <div
              className="bg-white p-4 pb-16 sm:p-5 sm:pb-20 rounded shadow-xl rotate-[-3deg] hover:rotate-0 transition-transform duration-500 relative max-w-sm w-full"
              style={{ backgroundColor: "#ffffff" }}
            >
              {/* Photo area */}
              {imageUrl ? (
                <img src={imageUrl} alt="" className="w-full aspect-square object-cover" />
              ) : (
                <div
                  className="w-full aspect-square flex items-center justify-center"
                  style={{ backgroundColor: theme?.muted ?? "#e8e4dc" }}
                >
                  <Camera className="h-20 w-20 opacity-15" style={{ color: theme?.foreground ?? "#2d2d2d" }} />
                </div>
              )}

              {/* Handwritten caption */}
              <div className="absolute bottom-4 sm:bottom-6 left-0 right-0 px-6 text-center">
                <p
                  className="text-lg sm:text-xl italic"
                  style={{ fontFamily: "'Georgia', serif", color: "#444" }}
                >
                  &ldquo;{subheading}&rdquo;
                </p>
              </div>

              {/* Tape effect on top */}
              <div
                className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-6 opacity-40 rotate-[2deg]"
                style={{ backgroundColor: theme?.accent ?? "#fbbf24" }}
              />

              {/* Small heart */}
              <Heart
                className="absolute -bottom-3 -right-3 h-8 w-8 fill-current"
                style={{ color: theme?.primary ?? "#e11d48" }}
              />
            </div>
          </div>

          {/* Right: Content */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Aperture className="h-5 w-5" style={{ color: theme?.primary ?? "#e11d48" }} />
              <span className="text-xs font-bold uppercase tracking-[0.2em] opacity-50">Visual Studio</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-5">
              {heading}
            </h1>

            <p className="text-base sm:text-lg opacity-60 leading-relaxed mb-8">{bodyText}</p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {items.map((item, i) => (
                <div
                  key={i}
                  className="rounded-xl p-4 text-center"
                  style={{ backgroundColor: theme?.muted ?? "#eae6de" }}
                >
                  <div className="text-sm font-bold mb-1">{item.title}</div>
                  <div className="text-xs opacity-50">{item.description}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={buttonUrl}
                className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 font-semibold text-white text-sm transition-transform hover:scale-105"
                style={{ backgroundColor: theme?.primary ?? "#e11d48" }}
              >
                <Camera className="h-4 w-4" />
                {buttonText}
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 rounded-full border px-8 py-3.5 font-semibold text-sm hover:opacity-70 transition-opacity"
                style={{ borderColor: theme?.border ?? "#d4d0c8" }}
              >
                View Portfolio
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
