import type { BlockProps } from "@/blocks/types";
import { Zap, Shield, BarChart3, Globe, Palette, Bell } from "lucide-react";

const icons = [Zap, Shield, BarChart3, Globe, Palette, Bell];
const heights = ["h-48", "h-60", "h-52", "h-56", "h-44", "h-64"];

export default function Features141(props: BlockProps) {
  const {
    theme,
    heading = "Built for Every Need",
    subheading = "A rich set of features in a beautiful layout",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Instant Publishing", description: "Go from draft to live in a single click. No build steps, no waiting." },
      { title: "Advanced Security", description: "SSL, WAF, DDoS protection, and automated vulnerability scanning included." },
      { title: "Analytics Suite", description: "Track visitors, conversions, revenue, and custom events in real time." },
      { title: "Global Network", description: "Content served from 60+ edge locations for the fastest experience worldwide." },
      { title: "Theme Designer", description: "Create brand-consistent designs with reusable color palettes and font stacks." },
      { title: "Smart Alerts", description: "Receive instant notifications when key metrics change or errors occur." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="text-lg opacity-70 max-w-2xl mx-auto">{subheading}</p>
        </div>
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className={`break-inside-avoid rounded-xl border p-6 ${heights[i % heights.length]} flex flex-col justify-between`} style={{ borderColor: theme?.accent || "#e5e7eb" }}>
                <div>
                  <Icon size={24} className="mb-3" style={{ color: theme?.primary || "#6366f1" }} />
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="opacity-60 text-sm leading-relaxed">{item.description}</p>
                </div>
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
