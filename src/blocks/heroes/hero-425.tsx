"use client";

import type { BlockProps } from "@/blocks/types";
import { Rocket, Flag, Award, Globe, TrendingUp, ArrowRight } from "lucide-react";

export default function Hero425(props: BlockProps) {
  const {
    theme,
    heading = "A decade of building the future",
    subheading = "From a two-person startup to a global platform trusted by thousands — here is how we got here.",
    bodyText,
    buttonText = "Join Our Journey",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "2018", description: "Founded in a Lagos co-working space with a mission to simplify software for African businesses.", label: "The Beginning" },
      { title: "2019", description: "Launched public beta and onboarded our first 500 customers across 12 countries.", label: "Public Launch" },
      { title: "2021", description: "Raised $8M Series A to expand into East Africa and build our AI engine.", label: "Series A" },
      { title: "2023", description: "Reached 25,000 active teams. Opened offices in Nairobi, Accra, and Cape Town.", label: "Scale" },
      { title: "2025", description: "50,000+ businesses in 80 countries. Launched enterprise tier and API marketplace.", label: "Global" },
    ],
  } = props;

  const icons = [Rocket, Flag, Award, Globe, TrendingUp];

  return (
    <section
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
      className="min-h-screen flex items-center px-4 py-16 sm:py-20"
    >
      <div className="max-w-5xl mx-auto w-full">
        <div className="text-center mb-14">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            {heading}
          </h1>
          <p className="text-base sm:text-lg opacity-70 max-w-2xl mx-auto">
            {subheading}
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line (mobile) / Horizontal line (desktop) */}
          <div
            className="hidden md:block absolute top-6 left-0 right-0 h-0.5 opacity-15"
            style={{ backgroundColor: theme?.primary ?? "#3b82f6" }}
          />
          <div
            className="md:hidden absolute top-0 bottom-0 left-6 w-0.5 opacity-15"
            style={{ backgroundColor: theme?.primary ?? "#3b82f6" }}
          />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4">
            {items.map((item, i) => {
              const Icon = icons[i] ?? Rocket;
              return (
                <div key={i} className="relative flex md:flex-col items-start md:items-center md:text-center gap-4 md:gap-0">
                  {/* Dot */}
                  <div
                    className="w-12 h-12 md:w-12 md:h-12 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg z-10"
                    style={{ backgroundColor: theme?.primary ?? "#3b82f6", color: "#fff" }}
                  >
                    <Icon className="w-5 h-5" />
                  </div>

                  <div className="md:mt-6">
                    <span
                      className="text-2xl font-extrabold block"
                      style={{ color: theme?.primary ?? "#3b82f6" }}
                    >
                      {item.title}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-widest opacity-50 block mt-1 mb-2">
                      {item.label}
                    </span>
                    <p className="text-sm leading-relaxed opacity-70">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="text-center mt-14">
          <a
            href={buttonUrl}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: theme?.primary ?? "#3b82f6" }}
          >
            {buttonText}
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
