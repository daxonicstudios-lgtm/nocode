"use client";

import type { BlockProps } from "@/blocks/types";
import { Play, Sparkles } from "lucide-react";

export default function Hero273(props: BlockProps) {
  const {
    theme,
    heading = "Creativity Meets Technology",
    subheading = "Design Studio",
    bodyText = "We craft digital experiences that captivate audiences and drive results. Our multidisciplinary team blends artistry with cutting-edge technology.",
    buttonText = "View Our Work",
    buttonUrl = "#",
    imageUrl,
    items = [],
  } = props;

  return (
    <section
      className="relative min-h-screen overflow-hidden"
      style={{ backgroundColor: theme?.background ?? "#fafafa", color: theme?.foreground ?? "#171717" }}
    >
      {/* Diagonal Divider via clip-path */}
      <div className="grid min-h-screen lg:grid-cols-2">
        {/* Image Side */}
        <div className="relative min-h-[50vh] lg:min-h-screen">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt={heading}
              className="absolute inset-0 h-full w-full object-cover"
            />
          ) : (
            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(135deg, ${theme?.primary ?? "#7c3aed"} 0%, ${theme?.accent ?? "#ec4899"} 100%)`,
              }}
            />
          )}
          {/* Diagonal overlay on image side */}
          <div
            className="absolute inset-0 hidden lg:block"
            style={{
              backgroundColor: theme?.background ?? "#fafafa",
              clipPath: "polygon(85% 0, 100% 0, 100% 100%, 70% 100%)",
            }}
          />
          {/* Gradient overlay for mobile */}
          <div
            className="absolute inset-0 lg:hidden"
            style={{
              background: `linear-gradient(to bottom, transparent 60%, ${theme?.background ?? "#fafafa"} 100%)`,
            }}
          />

          {/* Floating badge on image */}
          {!imageUrl && (
            <div className="absolute left-6 top-6 z-10 flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm sm:left-10 sm:top-10">
              <Sparkles className="h-4 w-4" />
              Award-Winning Agency
            </div>
          )}
        </div>

        {/* Content Side */}
        <div className="relative z-10 flex items-center px-6 py-16 sm:px-10 lg:-ml-20 lg:px-16 lg:py-20">
          <div className="max-w-lg">
            <p
              className="mb-4 text-xs font-bold uppercase tracking-[0.2em]"
              style={{ color: theme?.primary ?? "#7c3aed" }}
            >
              {subheading}
            </p>
            <h1 className="mb-6 text-4xl font-extrabold leading-[1.1] sm:text-5xl lg:text-6xl">
              {heading}
            </h1>
            <div
              className="mb-6 h-1 w-16 rounded-full"
              style={{ backgroundColor: theme?.primary ?? "#7c3aed" }}
            />
            <p className="mb-10 text-base leading-relaxed opacity-60 sm:text-lg">{bodyText}</p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href={buttonUrl}
                className="inline-flex items-center rounded-lg px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-105"
                style={{ backgroundColor: theme?.primary ?? "#7c3aed" }}
              >
                {buttonText}
              </a>
              <button
                className="inline-flex items-center gap-2 text-sm font-semibold opacity-70 transition-opacity hover:opacity-100"
              >
                <span
                  className="flex h-10 w-10 items-center justify-center rounded-full"
                  style={{
                    backgroundColor: `${theme?.primary ?? "#7c3aed"}15`,
                    color: theme?.primary ?? "#7c3aed",
                  }}
                >
                  <Play className="h-4 w-4 fill-current" />
                </span>
                Watch Showreel
              </button>
            </div>

            {/* Bottom Stats */}
            <div className="mt-14 flex gap-10">
              {[
                { value: "150+", label: "Projects" },
                { value: "12", label: "Awards" },
                { value: "8yr", label: "Experience" },
              ].map((stat, i) => (
                <div key={i}>
                  <p
                    className="text-2xl font-extrabold sm:text-3xl"
                    style={{ color: theme?.primary ?? "#7c3aed" }}
                  >
                    {stat.value}
                  </p>
                  <p className="text-xs font-medium uppercase tracking-wide opacity-50">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
