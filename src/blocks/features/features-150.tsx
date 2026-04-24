"use client";
import { useState } from "react";
import type { BlockProps } from "@/blocks/types";
import { Zap, Shield, BarChart3, Globe, Palette } from "lucide-react";

const icons = [Zap, Shield, BarChart3, Globe, Palette];

export default function Features150(props: BlockProps) {
  const {
    theme,
    heading = "Feature Explorer",
    subheading = "Navigate features with the sidebar",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Performance", description: "Every page is optimized for instant loading. Our global CDN, automatic image compression, and code splitting ensure your visitors get the fastest possible experience regardless of location or device." },
      { title: "Security", description: "Enterprise-grade protection is included with every plan. Free SSL certificates, automated backups, DDoS mitigation, and continuous vulnerability scanning keep your site and data safe around the clock." },
      { title: "Analytics", description: "Real-time dashboards surface visitor counts, page performance, conversion rates, and revenue attribution. Set up automated email digests or export raw data for custom analysis." },
      { title: "Integrations", description: "Connect with 200+ tools you already use. Stripe for payments, Mailchimp for email, Google Analytics for tracking, Slack for notifications, and Zapier for everything else." },
      { title: "Design System", description: "Maintain brand consistency with centralized design tokens. Define color palettes, typography scales, spacing systems, and component variants that apply across every page." },
    ],
  } = props;

  const [active, setActive] = useState(0);
  const Icon = icons[active % icons.length];

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="text-lg opacity-70 max-w-2xl mx-auto">{subheading}</p>
        </div>
        <div className="flex flex-col md:flex-row gap-6">
          <nav className="md:w-56 flex-shrink-0">
            <ul className="flex md:flex-col gap-1 overflow-x-auto md:overflow-visible">
              {items.map((item, i) => {
                const NavIcon = icons[i % icons.length];
                return (
                  <li key={i}>
                    <button onClick={() => setActive(i)} className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-left whitespace-nowrap transition-colors" style={active === i ? { backgroundColor: theme?.primary || "#6366f1", color: "#fff" } : {}}>
                      <NavIcon size={16} />
                      {item.title}
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div className="flex-1 rounded-xl border p-8" style={{ borderColor: theme?.accent || "#e5e7eb" }}>
            <div className="flex items-center gap-3 mb-4">
              <Icon size={28} style={{ color: theme?.primary || "#6366f1" }} />
              <h3 className="text-2xl font-bold">{items[active]?.title}</h3>
            </div>
            <p className="opacity-70 text-sm leading-relaxed">{items[active]?.description}</p>
            {buttonText && (
              <a href={buttonUrl} className="inline-block mt-6 px-5 py-2.5 rounded-lg text-sm text-white font-medium" style={{ backgroundColor: theme?.primary || "#6366f1" }}>{buttonText}</a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
