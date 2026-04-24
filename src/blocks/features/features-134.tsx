"use client";
import { useState } from "react";
import type { BlockProps } from "@/blocks/types";
import { Zap, Shield, BarChart3, Globe, Palette, Bell } from "lucide-react";

const icons = [Zap, Shield, BarChart3, Globe, Palette, Bell];

export default function Features134(props: BlockProps) {
  const {
    theme,
    heading = "Explore by Category",
    subheading = "Browse features grouped by what matters to you",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Fast Deploys", description: "Ship changes in seconds.", label: "speed" },
      { title: "Edge Caching", description: "Serve pages from the nearest node.", label: "speed" },
      { title: "Firewall", description: "Block malicious traffic automatically.", label: "security" },
      { title: "Encryption", description: "AES-256 at rest and in transit.", label: "security" },
      { title: "Heatmaps", description: "See where users click.", label: "insights" },
      { title: "Funnels", description: "Track conversion step by step.", label: "insights" },
    ],
  } = props;

  const categories = Array.from(new Set(items.map((item) => item.label).filter((v): v is string => Boolean(v))));
  const [active, setActive] = useState(categories[0] || "");

  const filtered = items.filter((item) => item.label === active);

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="text-lg opacity-70 max-w-2xl mx-auto">{subheading}</p>
        </div>
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((cat) => (
            <button key={cat} onClick={() => setActive(cat as string)} className="px-4 py-2 rounded-full text-sm font-medium transition-colors capitalize" style={active === cat ? { backgroundColor: theme?.primary || "#6366f1", color: "#fff" } : { backgroundColor: theme?.accent || "#f3f4f6" }}>
              {cat}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {filtered.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="flex items-start gap-4 rounded-xl border p-5" style={{ borderColor: theme?.accent || "#e5e7eb" }}>
                <Icon size={22} className="flex-shrink-0 mt-0.5" style={{ color: theme?.primary || "#6366f1" }} />
                <div>
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="opacity-60 text-sm">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
        {buttonText && (
          <div className="text-center mt-8">
            <a href={buttonUrl} className="inline-block px-6 py-3 rounded-lg text-white font-medium" style={{ backgroundColor: theme?.primary || "#6366f1" }}>{buttonText}</a>
          </div>
        )}
      </div>
    </section>
  );
}
