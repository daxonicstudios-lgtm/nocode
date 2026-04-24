import type { BlockProps } from "@/blocks/types";
import { Zap, Shield, BarChart3, Globe, Palette, Bell } from "lucide-react";

const icons = [Zap, Shield, BarChart3, Globe, Palette, Bell];

export default function Features143(props: BlockProps) {
  const {
    theme,
    heading = "Feature Highlights",
    subheading = "A staggered grid showcasing our best tools",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Zero-Config Deploys", description: "Push to git and your changes go live automatically." },
      { title: "Threat Intelligence", description: "AI-powered detection blocks attacks before they start." },
      { title: "Revenue Tracking", description: "Attribute every dollar to the right marketing channel." },
      { title: "Edge Functions", description: "Run server-side logic at the edge for instant responses." },
      { title: "Component Library", description: "500+ pre-built blocks for any page type." },
      { title: "Uptime Monitoring", description: "Know the moment your site goes down, anywhere." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="text-lg opacity-70 max-w-2xl mx-auto">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            const offset = i % 2 === 1 ? "sm:mt-8" : "";
            return (
              <div key={i} className={`rounded-xl border p-6 ${offset}`} style={{ borderColor: theme?.accent || "#e5e7eb" }}>
                <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 text-white" style={{ backgroundColor: theme?.primary || "#6366f1" }}>
                  <Icon size={18} />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="opacity-60 text-sm leading-relaxed">{item.description}</p>
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
