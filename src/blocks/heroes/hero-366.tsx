"use client";

import type { BlockProps } from "@/blocks/types";
import { Car, ArrowRight, Shield, Clock, Award, CheckCircle, MapPin, Star } from "lucide-react";

export default function Hero366(props: BlockProps) {
  const {
    theme,
    heading = "Your Road to Freedom Starts Here",
    subheading = "GreenLight Driving School",
    bodyText = "Learn to drive with confidence. Our certified instructors combine patient guidance with modern teaching methods so you pass your test the first time.",
    buttonText = "Book First Lesson",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Starter Package", description: "10 lessons + theory prep", value: "$399", label: "Best for beginners" },
      { title: "Fast Track", description: "20 lessons + test booking", value: "$749", label: "Most Popular" },
      { title: "Intensive Course", description: "5-day crash course + guaranteed test", value: "$999", label: "Pass in a week" },
    ],
  } = props;

  const passStats = [
    { stat: "94%", label: "First-Time Pass Rate" },
    { stat: "10,000+", label: "Drivers Licensed" },
    { stat: "25+", label: "Years Experience" },
    { stat: "4.9★", label: "Student Rating" },
  ];

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#f0fdf4", color: theme?.foreground ?? "#14532d" }}
      className="min-h-screen px-5 py-16 sm:py-24 relative overflow-hidden"
    >
      {/* Road-like stripe at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-2" style={{ backgroundColor: theme?.primary ?? "#16a34a" }} />
      <div className="absolute bottom-0 left-0 right-0 h-2 flex items-center justify-center gap-8">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="w-8 h-0.5 bg-white opacity-80" />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left */}
          <div>
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider mb-6"
              style={{ backgroundColor: `${theme?.primary ?? "#16a34a"}15`, color: theme?.primary ?? "#16a34a" }}
            >
              <Car className="w-3.5 h-3.5" />
              {subheading}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.05] mb-6 tracking-tight">
              {heading}
            </h1>

            <p className="text-base sm:text-lg opacity-60 leading-relaxed mb-8 max-w-lg">
              {bodyText}
            </p>

            {/* Pass rate highlight */}
            <div
              className="flex items-center gap-4 p-5 rounded-2xl mb-8 border"
              style={{ borderColor: `${theme?.primary ?? "#16a34a"}20`, backgroundColor: `${theme?.primary ?? "#16a34a"}06` }}
            >
              <div
                className="w-16 h-16 rounded-xl flex items-center justify-center shrink-0"
                style={{ backgroundColor: theme?.primary ?? "#16a34a" }}
              >
                <span className="text-xl font-black text-white">94%</span>
              </div>
              <div>
                <div className="font-bold">First-Time Pass Rate</div>
                <div className="text-sm opacity-50">Compared to the national average of 47%</div>
              </div>
              <Award className="w-8 h-8 shrink-0 opacity-30" style={{ color: theme?.primary ?? "#16a34a" }} />
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <a
                href={buttonUrl}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-bold transition-transform hover:scale-105 text-white"
                style={{ backgroundColor: theme?.primary ?? "#16a34a" }}
              >
                {buttonText}
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-semibold border-2 transition-colors"
                style={{ borderColor: theme?.primary ?? "#16a34a", color: theme?.primary ?? "#16a34a" }}
              >
                <MapPin className="w-4 h-4" />
                Find Nearest Center
              </a>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t" style={{ borderColor: `${theme?.primary ?? "#16a34a"}15` }}>
              {passStats.map((s, i) => (
                <div key={i}>
                  <div className="text-xl font-black" style={{ color: theme?.primary ?? "#16a34a" }}>{s.stat}</div>
                  <div className="text-xs opacity-40 mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Packages */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest opacity-40 mb-4 flex items-center gap-2">
              <Shield className="w-4 h-4" />
              Lesson Packages
            </h3>

            <div className="space-y-4">
              {items.slice(0, 3).map((pkg, i) => {
                const isPopular = i === 1;
                return (
                  <div
                    key={i}
                    className="relative p-6 rounded-2xl border-2 transition-all"
                    style={{
                      borderColor: isPopular ? theme?.primary ?? "#16a34a" : `${theme?.primary ?? "#16a34a"}15`,
                      backgroundColor: isPopular ? `${theme?.primary ?? "#16a34a"}08` : "transparent",
                    }}
                  >
                    {isPopular && (
                      <div
                        className="absolute -top-3 left-6 px-3 py-1 rounded-full text-xs font-bold text-white"
                        style={{ backgroundColor: theme?.primary ?? "#16a34a" }}
                      >
                        {pkg.label}
                      </div>
                    )}
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="text-lg font-bold">{pkg.title}</h4>
                        <p className="text-sm opacity-50">{pkg.description}</p>
                      </div>
                      <div className="text-2xl font-black shrink-0" style={{ color: theme?.primary ?? "#16a34a" }}>
                        {pkg.value}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {["Dual controls", "Pick-up/drop-off", "Progress tracking"].map((feat, j) => (
                        <span key={j} className="flex items-center gap-1 text-xs opacity-50">
                          <CheckCircle className="w-3 h-3" style={{ color: theme?.primary ?? "#16a34a" }} />
                          {feat}
                        </span>
                      ))}
                    </div>
                    <a
                      href={buttonUrl}
                      className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold transition-transform hover:scale-105"
                      style={
                        isPopular
                          ? { backgroundColor: theme?.primary ?? "#16a34a", color: "#ffffff" }
                          : { border: `1px solid ${theme?.primary ?? "#16a34a"}40`, color: theme?.primary ?? "#16a34a" }
                      }
                    >
                      Choose Plan <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                );
              })}
            </div>

            {/* Trust note */}
            <div className="flex items-center justify-center gap-4 mt-6 text-xs opacity-40">
              <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> Flexible scheduling</span>
              <span>|</span>
              <span className="flex items-center gap-1"><Star className="w-3 h-3" /> 5-star rated instructors</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
