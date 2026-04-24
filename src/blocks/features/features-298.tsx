"use client";

import type { BlockProps } from "@/blocks/types";
import { useState } from "react";
import { ChevronDown, Zap, Shield, Globe, Rocket } from "lucide-react";

const icons = [Zap, Shield, Globe, Rocket];

export default function Features298(props: BlockProps) {
  const {
    theme,
    heading = "Features Explained",
    subheading = "Click any feature to learn more about how it works",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Instant Performance", description: "Every page loads in under 200ms thanks to edge caching and optimized bundles.", value: "Our CDN caches at 200+ locations. Assets are compressed with Brotli and images converted to WebP automatically." },
      { title: "Bank-Level Security", description: "AES-256 encryption, SOC 2 certification, and automatic threat detection.", value: "We run continuous vulnerability scans, penetration tests quarterly, and encrypt all data both in transit and at rest." },
      { title: "Global Availability", description: "Multi-region deployment ensures your app is always close to your users.", value: "Automatic failover between regions means zero downtime even if an entire data center goes offline." },
      { title: "Easy Migrations", description: "Import your data from any platform with our guided migration wizard.", value: "Our team assists with every migration. Average time to full migration is 2 hours, not weeks." },
    ],
  } = props;

  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="text-lg opacity-60 max-w-2xl mx-auto">{subheading}</p>
        </div>
        <div className="space-y-4">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            const isOpen = openIdx === i;
            return (
              <div key={i} className="rounded-xl border overflow-hidden" style={{ borderColor: theme?.primary ? `${theme.primary}20` : "#e5e7eb" }}>
                <button onClick={() => setOpenIdx(isOpen ? null : i)} className="w-full flex items-center gap-4 p-5 text-left">
                  <Icon size={20} className="flex-shrink-0" style={{ color: theme?.primary || "#6366f1" }} />
                  <div className="flex-1">
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-sm opacity-60 mt-0.5">{item.description}</p>
                  </div>
                  <ChevronDown size={18} className="flex-shrink-0 transition-transform" style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0)", color: theme?.primary || "#6366f1" }} />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-0">
                    <div className="border-t pt-4 text-sm opacity-60 leading-relaxed" style={{ borderColor: theme?.primary ? `${theme.primary}15` : "#f3f4f6" }}>
                      {item.value}
                    </div>
                  </div>
                )}
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
