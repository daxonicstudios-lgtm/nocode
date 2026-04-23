"use client";

import type { BlockProps } from "@/blocks/types";
import { ArrowUpRight, Aperture, MoveRight } from "lucide-react";

export default function Hero320(props: BlockProps) {
  const {
    theme,
    heading = "We Don't Follow Trends. We Set Them.",
    subheading = "Creative Agency",
    bodyText = "Award-winning studio crafting bold brands, immersive digital experiences, and campaigns that move culture forward.",
    buttonText = "View Our Work",
    buttonUrl = "#",
    imageUrl,
    items = [],
  } = props;

  const primaryColor = theme?.primary || "#f97316";
  const bgColor = theme?.background || "#111111";
  const fgColor = theme?.foreground || "#fafafa";

  const projects = items.length > 0 ? items : [
    { title: "Nike Rebrand", description: "Brand Identity", value: "2024" },
    { title: "Spotify Wrapped", description: "Campaign", value: "2024" },
    { title: "Airbnb Luxe", description: "Digital Experience", value: "2023" },
    { title: "Tesla UI", description: "Product Design", value: "2023" },
    { title: "Adobe MAX", description: "Event Design", value: "2023" },
    { title: "Stripe Atlas", description: "Web Platform", value: "2024" },
  ];

  return (
    <section
      style={{ backgroundColor: bgColor, color: fgColor }}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Diagonal accent line */}
      <div
        className="absolute top-0 right-0 w-px h-[200%] origin-top-right -rotate-[30deg] opacity-10"
        style={{ backgroundColor: primaryColor }}
      />

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Left - manifesto */}
          <div className="lg:col-span-5 space-y-8 flex flex-col justify-center">
            <div className="flex items-center gap-3">
              <Aperture className="w-5 h-5" style={{ color: primaryColor }} />
              <span
                className="text-xs font-bold uppercase tracking-[0.25em]"
                style={{ color: primaryColor }}
              >
                {subheading}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05]">
              {heading}
            </h1>

            <div className="w-16 h-1" style={{ backgroundColor: primaryColor }} />

            <p className="text-base md:text-lg opacity-50 leading-relaxed max-w-md">
              {bodyText}
            </p>

            <a
              href={buttonUrl}
              className="group inline-flex items-center gap-3 text-sm font-bold uppercase tracking-[0.15em] transition-opacity hover:opacity-70"
              style={{ color: primaryColor }}
            >
              {buttonText}
              <MoveRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </a>

            {/* Awards */}
            <div className="flex gap-6 pt-4">
              {["Awwwards x12", "FWA x8", "CSS x15"].map((award, i) => (
                <div key={i} className="text-center">
                  <div className="text-xs font-bold opacity-30 uppercase tracking-wider">{award}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - portfolio mosaic */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-3 gap-2 md:gap-3">
              {projects.map((project, i) => {
                const heights = ["h-32", "h-44", "h-36", "h-40", "h-28", "h-48"];
                const colors = [
                  `${primaryColor}15`,
                  `${fgColor}06`,
                  `${primaryColor}10`,
                  `${fgColor}08`,
                  `${primaryColor}08`,
                  `${fgColor}04`,
                ];

                return (
                  <div
                    key={i}
                    className={`group relative ${heights[i % heights.length]} rounded-xl overflow-hidden cursor-pointer transition-transform hover:scale-[1.02]`}
                    style={{ backgroundColor: colors[i % colors.length] }}
                  >
                    {/* Project info overlay */}
                    <div className="absolute inset-0 flex flex-col justify-end p-3 md:p-4 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity bg-gradient-to-t from-black/60 to-transparent">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-sm font-bold text-white">{project.title}</h3>
                          <p className="text-xs text-white/60 mt-0.5">{project.description}</p>
                        </div>
                        <ArrowUpRight className="w-4 h-4 text-white/60 flex-shrink-0" />
                      </div>
                    </div>

                    {/* Year badge */}
                    <div
                      className="absolute top-2 right-2 px-2 py-0.5 rounded text-[10px] font-mono opacity-40"
                      style={{ backgroundColor: `${bgColor}80`, color: fgColor }}
                    >
                      {project.value}
                    </div>

                    {/* Abstract shape inside each tile */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      {i % 3 === 0 && (
                        <div
                          className="w-16 h-16 rounded-full opacity-20"
                          style={{ backgroundColor: primaryColor }}
                        />
                      )}
                      {i % 3 === 1 && (
                        <div
                          className="w-12 h-12 rotate-45 opacity-10"
                          style={{ backgroundColor: fgColor }}
                        />
                      )}
                      {i % 3 === 2 && (
                        <div
                          className="w-20 h-1 opacity-15"
                          style={{ backgroundColor: primaryColor }}
                        />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom CTA strip */}
            <div
              className="mt-4 rounded-xl p-5 border flex flex-col sm:flex-row items-center justify-between gap-4"
              style={{
                backgroundColor: `${fgColor}03`,
                borderColor: `${fgColor}08`,
              }}
            >
              <div>
                <div className="text-sm font-bold">Ready to start your project?</div>
                <div className="text-xs opacity-40 mt-0.5">Let&apos;s create something extraordinary together.</div>
              </div>
              <a
                href={buttonUrl}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-bold text-white transition-opacity hover:opacity-90 flex-shrink-0"
                style={{ backgroundColor: primaryColor }}
              >
                Get in Touch
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
