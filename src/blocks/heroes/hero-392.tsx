"use client";

import type { BlockProps } from "@/blocks/types";
import { Star, Quote, ThumbsUp, TrendingUp, ExternalLink } from "lucide-react";

export default function Hero392(props: BlockProps) {
  const {
    theme,
    heading = "Trusted by 50,000+ Businesses Worldwide",
    subheading = "Social Proof That Converts",
    bodyText = "Aggregate reviews from Google, Trustpilot, G2, and Capterra into beautiful widgets that boost conversions by up to 270%.",
    buttonText = "Collect Reviews Free",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Google Reviews", value: "4.9", description: "1,248 reviews", icon: "google" },
      { title: "Trustpilot", value: "4.8", description: "3,421 reviews", icon: "trustpilot" },
      { title: "G2", value: "4.7", description: "892 reviews", icon: "g2" },
      { title: "Capterra", value: "4.9", description: "567 reviews", icon: "capterra" },
    ],
  } = props;

  const testimonials = [
    { name: "Emily Chen", role: "Head of Growth, Acme", text: "Our conversion rate jumped 34% after adding social proof widgets.", rating: 5 },
    { name: "Marcus Wright", role: "CEO, Startup Labs", text: "Finally, one dashboard for all our reviews. Game-changer.", rating: 5 },
    { name: "Aisha Patel", role: "Marketing Lead, TechCo", text: "Setup took 5 minutes. ROI was visible within the first week.", rating: 5 },
  ];

  return (
    <section
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
      className="min-h-screen px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium mb-6"
            style={{ backgroundColor: `${theme?.primary ?? "#f59e0b"}15`, color: theme?.primary ?? "#f59e0b" }}
          >
            <Star className="h-4 w-4 fill-current" />
            {subheading}
          </span>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6">
            {heading}
          </h1>
          <p className="text-lg opacity-70 mb-8">{bodyText}</p>
          <a
            href={buttonUrl}
            className="inline-flex items-center gap-2 rounded-xl px-7 py-3.5 text-base font-semibold text-white transition-transform hover:scale-105"
            style={{ backgroundColor: theme?.primary ?? "#f59e0b" }}
          >
            {buttonText}
          </a>
        </div>

        {/* Platform rating cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-14">
          {items.map((platform) => (
            <div
              key={platform.title}
              className="rounded-2xl border p-5 text-center transition-shadow hover:shadow-lg"
              style={{ borderColor: theme?.border ?? "#e5e7eb", backgroundColor: theme?.muted ?? "#f9fafb" }}
            >
              <p className="text-sm font-medium opacity-70 mb-2">{platform.title}</p>
              <div className="flex items-center justify-center gap-1 mb-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${i < Math.floor(Number(platform.value)) ? "fill-current" : "opacity-20"}`}
                    style={{ color: theme?.primary ?? "#f59e0b" }}
                  />
                ))}
              </div>
              <p className="text-2xl font-bold">{platform.value}</p>
              <p className="text-xs opacity-50 mt-1">{platform.description}</p>
            </div>
          ))}
        </div>

        {/* Aggregated score banner */}
        <div
          className="rounded-2xl p-6 sm:p-8 mb-14 flex flex-col sm:flex-row items-center gap-6 justify-between"
          style={{ backgroundColor: `${theme?.primary ?? "#f59e0b"}10` }}
        >
          <div className="flex items-center gap-4">
            <div
              className="flex h-16 w-16 items-center justify-center rounded-2xl text-white text-2xl font-bold"
              style={{ backgroundColor: theme?.primary ?? "#f59e0b" }}
            >
              4.8
            </div>
            <div>
              <p className="text-lg font-semibold">Overall Rating</p>
              <p className="text-sm opacity-60">Across 6,128 verified reviews</p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="text-center">
              <TrendingUp className="h-5 w-5 mx-auto mb-1" style={{ color: theme?.primary ?? "#f59e0b" }} />
              <p className="text-xl font-bold">270%</p>
              <p className="text-xs opacity-60">Conversion Lift</p>
            </div>
            <div className="text-center">
              <ThumbsUp className="h-5 w-5 mx-auto mb-1" style={{ color: theme?.primary ?? "#f59e0b" }} />
              <p className="text-xl font-bold">98%</p>
              <p className="text-xs opacity-60">Recommend</p>
            </div>
          </div>
        </div>

        {/* Testimonials row */}
        <div className="grid gap-6 sm:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-2xl border p-6 transition-shadow hover:shadow-lg"
              style={{ borderColor: theme?.border ?? "#e5e7eb" }}
            >
              <Quote className="h-6 w-6 mb-4 opacity-20" />
              <p className="text-sm mb-4 leading-relaxed">{t.text}</p>
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-current" style={{ color: theme?.primary ?? "#f59e0b" }} />
                ))}
              </div>
              <p className="text-sm font-semibold">{t.name}</p>
              <p className="text-xs opacity-50">{t.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
