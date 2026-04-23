"use client";

import type { BlockProps } from "@/blocks/types";
import { ArrowRight, Check } from "lucide-react";

export default function Hero272(props: BlockProps) {
  const {
    theme,
    heading = "Build Products That Matter",
    subheading = "From concept to launch in record time",
    bodyText = "We help ambitious teams turn bold ideas into exceptional digital products. Strategy, design, and engineering under one roof.",
    buttonText = "Get Started",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "End-to-end product development" },
      { title: "Dedicated cross-functional teams" },
      { title: "Proven agile methodology" },
      { title: "Launch support and iteration" },
    ],
  } = props;

  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="grid min-h-screen lg:grid-cols-2">
        {/* Left: Dark Panel */}
        <div
          className="flex items-center px-6 py-20 sm:px-12 lg:px-16"
          style={{
            backgroundColor: theme?.background ?? "#0f172a",
            color: theme?.foreground ?? "#f8fafc",
          }}
        >
          <div className="mx-auto max-w-lg">
            <p
              className="mb-6 text-sm font-bold uppercase tracking-widest"
              style={{ color: theme?.primary ?? "#818cf8" }}
            >
              {subheading}
            </p>
            <h1 className="mb-6 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
              {heading}
            </h1>
            <p className="mb-8 text-base leading-relaxed opacity-70 sm:text-lg">{bodyText}</p>
            <ul className="mb-10 space-y-3">
              {items.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm sm:text-base">
                  <span
                    className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                    style={{ backgroundColor: theme?.primary ?? "#818cf8" }}
                  >
                    <Check className="h-3 w-3 text-white" />
                  </span>
                  <span className="opacity-80">{item.title}</span>
                </li>
              ))}
            </ul>
            <a
              href={buttonUrl}
              className="inline-flex items-center gap-2 rounded-lg px-7 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-105"
              style={{ backgroundColor: theme?.primary ?? "#818cf8" }}
            >
              {buttonText}
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Right: Light Panel */}
        <div
          className="relative flex items-center px-6 py-20 sm:px-12 lg:px-16"
          style={{
            backgroundColor: theme?.card ?? "#f8fafc",
            color: theme?.cardForeground ?? "#0f172a",
          }}
        >
          {/* Decorative Circles */}
          <div
            className="absolute right-0 top-0 h-72 w-72 -translate-y-1/3 translate-x-1/3 rounded-full opacity-10"
            style={{ backgroundColor: theme?.primary ?? "#818cf8" }}
          />
          <div
            className="absolute bottom-0 left-0 h-48 w-48 -translate-x-1/4 translate-y-1/4 rounded-full opacity-10"
            style={{ backgroundColor: theme?.accent ?? "#f472b6" }}
          />

          <div className="relative z-10 mx-auto max-w-md">
            {imageUrl ? (
              <img
                src={imageUrl}
                alt={heading}
                className="w-full rounded-2xl object-cover shadow-2xl"
              />
            ) : (
              <div className="space-y-6">
                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { value: "200+", label: "Projects Delivered" },
                    { value: "98%", label: "Client Satisfaction" },
                    { value: "4.5x", label: "Average ROI" },
                    { value: "14", label: "Countries Served" },
                  ].map((stat, i) => (
                    <div
                      key={i}
                      className="rounded-xl border p-6 text-center shadow-sm"
                      style={{ borderColor: theme?.border ?? "#e2e8f0" }}
                    >
                      <p
                        className="mb-1 text-3xl font-extrabold"
                        style={{ color: theme?.primary ?? "#818cf8" }}
                      >
                        {stat.value}
                      </p>
                      <p className="text-xs font-medium opacity-60">{stat.label}</p>
                    </div>
                  ))}
                </div>

                {/* Testimonial */}
                <div
                  className="rounded-xl border p-6 shadow-sm"
                  style={{ borderColor: theme?.border ?? "#e2e8f0" }}
                >
                  <p className="mb-4 text-sm italic leading-relaxed opacity-70">
                    &ldquo;They transformed our entire workflow. What took us months now takes weeks.
                    Absolutely game-changing.&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <div
                      className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold text-white"
                      style={{ backgroundColor: theme?.primary ?? "#818cf8" }}
                    >
                      JK
                    </div>
                    <div>
                      <p className="text-sm font-semibold">Jamie Kim</p>
                      <p className="text-xs opacity-50">CTO, NextWave Labs</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
