"use client";

import type { BlockProps } from "@/blocks/types";
import { Shield, ArrowRight, CheckCircle, Car, Home, Heart, Umbrella } from "lucide-react";

export default function Hero324(props: BlockProps) {
  const {
    theme,
    heading = "Protect What Matters Most",
    subheading = "Trusted Insurance for Every Stage of Life",
    bodyText = "From your home to your health, we offer personalized coverage plans that fit your life and budget. Get a free quote in under 2 minutes and join 150,000+ policyholders who trust us.",
    buttonText = "Get a Free Quote",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Auto Insurance", description: "Comprehensive coverage with roadside assist", icon: "car" },
      { title: "Home Insurance", description: "Protect your property & belongings", icon: "home" },
      { title: "Life Insurance", description: "Secure your family's future today", icon: "heart" },
      { title: "Umbrella Policy", description: "Extra liability protection you need", icon: "umbrella" },
    ],
  } = props;

  const iconMap: Record<string, typeof Shield> = {
    car: Car,
    home: Home,
    heart: Heart,
    umbrella: Umbrella,
  };

  const benefits = [
    "No hidden fees or surprise charges",
    "Claims processed in 24 hours",
    "Dedicated personal advisor",
    "Bundle discounts up to 25%",
  ];

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#0c1829", color: theme?.foreground ?? "#e8edf4" }}
      className="min-h-screen px-5 py-16 lg:py-24"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div>
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold mb-6"
              style={{
                backgroundColor: `${theme?.primary ?? "#3b82f6"}15`,
                color: theme?.primary ?? "#3b82f6",
              }}
            >
              <Shield className="w-3.5 h-3.5" />
              Trusted by 150,000+ policyholders
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
              {heading}
            </h1>

            <p
              className="text-lg font-medium mb-2"
              style={{ color: theme?.primary ?? "#3b82f6" }}
            >
              {subheading}
            </p>

            <p className="text-sm opacity-50 leading-relaxed mb-8 max-w-lg">
              {bodyText}
            </p>

            {/* Benefits list */}
            <ul className="space-y-2.5 mb-8">
              {benefits.map((b, i) => (
                <li key={i} className="flex items-center gap-2.5 text-sm">
                  <CheckCircle className="w-4 h-4 shrink-0" style={{ color: theme?.primary ?? "#3b82f6" }} />
                  <span className="opacity-70">{b}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={buttonUrl}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-bold transition-transform hover:scale-105"
                style={{ backgroundColor: theme?.primary ?? "#3b82f6", color: "#ffffff" }}
              >
                {buttonText}
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-semibold border transition-colors hover:opacity-80"
                style={{ borderColor: `${theme?.foreground ?? "#e8edf4"}15` }}
              >
                Compare Plans
              </a>
            </div>
          </div>

          {/* Right — quote calculator teaser + coverage cards */}
          <div className="space-y-4">
            {/* Quote calculator card */}
            <div
              className="rounded-2xl p-6 border"
              style={{
                borderColor: `${theme?.primary ?? "#3b82f6"}20`,
                backgroundColor: `${theme?.primary ?? "#3b82f6"}08`,
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: `${theme?.primary ?? "#3b82f6"}20` }}
                >
                  <Shield className="w-5 h-5" style={{ color: theme?.primary ?? "#3b82f6" }} />
                </div>
                <div>
                  <h3 className="text-sm font-bold">Quick Quote Calculator</h3>
                  <p className="text-xs opacity-40">Estimate your premium in seconds</p>
                </div>
              </div>

              <div className="space-y-3 mb-4">
                <div
                  className="rounded-lg px-4 py-3 text-sm opacity-40"
                  style={{ backgroundColor: `${theme?.foreground ?? "#e8edf4"}06` }}
                >
                  Select coverage type...
                </div>
                <div
                  className="rounded-lg px-4 py-3 text-sm opacity-40"
                  style={{ backgroundColor: `${theme?.foreground ?? "#e8edf4"}06` }}
                >
                  Enter your zip code...
                </div>
              </div>

              <a
                href={buttonUrl}
                className="block w-full text-center px-6 py-3 rounded-lg text-sm font-bold transition-colors hover:opacity-90"
                style={{ backgroundColor: theme?.primary ?? "#3b82f6", color: "#ffffff" }}
              >
                Calculate My Rate
              </a>
            </div>

            {/* Coverage type cards */}
            <div className="grid grid-cols-2 gap-3">
              {items.slice(0, 4).map((item, i) => {
                const Icon = iconMap[item.icon ?? "car"] ?? Shield;
                return (
                  <div
                    key={i}
                    className="rounded-xl p-4 border cursor-pointer transition-colors hover:border-opacity-30"
                    style={{
                      borderColor: `${theme?.foreground ?? "#e8edf4"}08`,
                      backgroundColor: `${theme?.foreground ?? "#e8edf4"}04`,
                    }}
                  >
                    <Icon className="w-5 h-5 mb-2.5" style={{ color: theme?.primary ?? "#3b82f6" }} />
                    <h3 className="text-xs font-bold mb-0.5">{item.title}</h3>
                    <p className="text-[10px] opacity-40 leading-relaxed">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
