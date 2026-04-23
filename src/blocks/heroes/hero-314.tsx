"use client";

import type { BlockProps } from "@/blocks/types";
import { ArrowDownRight } from "lucide-react";

export default function Hero314(props: BlockProps) {
  const {
    theme,
    heading = "We Design Experiences That Matter",
    subheading = "Creative Studio — Est. 2019",
    bodyText = "Helping forward-thinking brands connect with their audience through meaningful design and strategic storytelling.",
    buttonText = "Explore Our Work",
    buttonUrl = "#",
    imageUrl,
    items = [],
  } = props;

  const words = heading.split(" ");
  const primaryColor = theme?.primary || "#ff5722";

  return (
    <section
      style={{ backgroundColor: theme?.background || "#fafaf9", color: theme?.foreground || "#1c1917" }}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-4">
          {/* Left - staggered large type */}
          <div className="lg:col-span-8">
            {/* Subheading */}
            <p className="text-xs sm:text-sm tracking-[0.25em] uppercase opacity-50 mb-12 font-medium">
              {subheading}
            </p>

            {/* Staggered words */}
            <div className="space-y-1 md:space-y-2">
              {words.map((word, i) => {
                const offsets = [0, 8, 4, 16, 12, 2, 20, 10, 6, 14];
                const marginLeft = offsets[i % offsets.length];
                const isAccent = i === 2 || i === words.length - 1;

                return (
                  <div
                    key={i}
                    style={{ marginLeft: `${marginLeft}%` }}
                  >
                    <span
                      className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-[1] tracking-tighter block"
                      style={isAccent ? { color: primaryColor } : undefined}
                    >
                      {word}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right - info column */}
          <div className="lg:col-span-4 flex flex-col justify-between lg:pt-16">
            <div className="space-y-8">
              <div
                className="w-12 h-px"
                style={{ backgroundColor: primaryColor }}
              />

              <p className="text-base md:text-lg leading-relaxed opacity-60">
                {bodyText}
              </p>

              <a
                href={buttonUrl}
                className="group inline-flex items-center gap-3 text-sm font-semibold tracking-wide transition-opacity hover:opacity-70"
                style={{ color: primaryColor }}
              >
                {buttonText}
                <ArrowDownRight className="w-5 h-5 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
              </a>
            </div>

            {/* Bottom tags */}
            <div className="mt-16 space-y-4">
              {(items.length > 0 ? items : [
                { title: "01", description: "Brand Identity" },
                { title: "02", description: "Digital Design" },
                { title: "03", description: "Motion & Film" },
                { title: "04", description: "Web Development" },
              ]).map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 py-3 border-b"
                  style={{ borderColor: `${theme?.foreground || "#1c1917"}10` }}
                >
                  <span
                    className="text-xs font-mono opacity-30"
                    style={{ color: primaryColor }}
                  >
                    {item.title}
                  </span>
                  <span className="text-sm opacity-60">{item.description}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
