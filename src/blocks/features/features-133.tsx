"use client";
import { useState } from "react";
import type { BlockProps } from "@/blocks/types";
import { Zap, Shield, BarChart3, Globe, Palette, Bell } from "lucide-react";

const icons = [Zap, Shield, BarChart3, Globe, Palette, Bell];

export default function Features133(props: BlockProps) {
  const {
    theme,
    heading = "What We Offer",
    subheading = "Click any card to reveal more details",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Lightning Speed", description: "Pages load in under one second worldwide.", value: "Our global CDN ensures content is served from the nearest edge location. Combined with automatic image optimization and code splitting, your visitors get the fastest experience possible." },
      { title: "Bank-Grade Security", description: "Your data is encrypted and protected 24/7.", value: "We use AES-256 encryption, automated vulnerability scanning, and SOC 2 compliance to keep your data safe." },
      { title: "Deep Analytics", description: "Understand your audience with rich data.", value: "Track pageviews, conversions, revenue attribution, and user journeys with our built-in analytics suite." },
      { title: "Global CDN", description: "Serve content from 60+ edge locations.", value: "Automatic content distribution ensures low latency for visitors everywhere in the world." },
    ],
  } = props;

  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="text-lg opacity-70 max-w-2xl mx-auto">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            const isOpen = expanded === i;
            return (
              <div key={i} className="rounded-xl border p-6 cursor-pointer transition-all" onClick={() => setExpanded(isOpen ? null : i)} style={{ borderColor: isOpen ? theme?.primary || "#6366f1" : theme?.accent || "#e5e7eb" }}>
                <div className="flex items-center gap-3 mb-2">
                  <Icon size={22} style={{ color: theme?.primary || "#6366f1" }} />
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                </div>
                <p className="opacity-60 text-sm">{item.description}</p>
                {isOpen && item.value && (
                  <p className="mt-3 text-sm leading-relaxed opacity-80 border-t pt-3" style={{ borderColor: theme?.accent || "#e5e7eb" }}>{item.value}</p>
                )}
                <span className="inline-block mt-2 text-xs font-medium" style={{ color: theme?.primary || "#6366f1" }}>
                  {isOpen ? "Show less" : "Learn more"}
                </span>
              </div>
            );
          })}
        </div>
        {buttonText && (
          <div className="text-center mt-10">
            <a href={buttonUrl} className="inline-block px-6 py-3 rounded-lg text-white font-medium" style={{ backgroundColor: theme?.primary || "#6366f1" }}>{buttonText}</a>
          </div>
        )}
      </div>
    </section>
  );
}
