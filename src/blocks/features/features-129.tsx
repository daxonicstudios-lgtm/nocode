import type { BlockProps } from "@/blocks/types";
import { Zap, Shield, BarChart3, Globe, Palette, Bell } from "lucide-react";

const icons = [Zap, Shield, BarChart3, Globe, Palette, Bell];

export default function Features129(props: BlockProps) {
  const {
    theme,
    heading = "Try Everything Free",
    subheading = "Start a 14-day trial on any feature — no credit card required",
    bodyText,
    buttonText = "Start Free Trial",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Performance Boost", description: "Optimize images, scripts, and caching automatically." },
      { title: "Threat Protection", description: "Block bots, spam, and malicious traffic in real time." },
      { title: "Revenue Dashboard", description: "Track sales, subscriptions, and refunds at a glance." },
      { title: "Multi-Language", description: "Translate your site into 40+ languages." },
      { title: "Brand Studio", description: "Design tokens, color palettes, and typography presets." },
      { title: "Smart Alerts", description: "Get notified when metrics hit thresholds you set." },
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
            return (
              <div key={i} className="rounded-xl border p-6 flex flex-col" style={{ borderColor: theme?.accent || "#e5e7eb" }}>
                <Icon size={24} className="mb-3" style={{ color: theme?.primary || "#6366f1" }} />
                <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                <p className="opacity-60 text-sm leading-relaxed mb-4 flex-1">{item.description}</p>
                <a href={buttonUrl} className="text-sm font-medium py-2 px-4 rounded-lg text-center border" style={{ borderColor: theme?.primary || "#6366f1", color: theme?.primary || "#6366f1" }}>
                  {buttonText}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
