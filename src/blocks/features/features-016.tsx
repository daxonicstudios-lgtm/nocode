import type { BlockProps } from "@/blocks/types";
import { Wifi, Battery, Eye, Gauge } from "lucide-react";

const iconMap = [Wifi, Battery, Eye, Gauge];

const defaults = [
  { title: "Connectivity", description: "Stay connected with low-latency networking across all regions." },
  { title: "Battery Efficient", description: "Optimized to consume minimal power on mobile devices." },
  { title: "Accessibility", description: "WCAG 2.1 AA compliant out of the box for every component." },
  { title: "Performance", description: "Sub-100ms response times with intelligent caching layers." },
];

export default function Features016(props: BlockProps) {
  const {
    theme,
    heading = "Engineered for Excellence",
    subheading = "Every metric optimized to its peak",
    items = defaults,
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
        <p className="text-lg opacity-60 mb-14">{subheading}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, i) => {
            const Icon = iconMap[i % iconMap.length];
            const primary = theme?.primary || "#f59e0b";
            return (
              <div key={i} className="flex flex-col items-center">
                <div className="relative w-24 h-24 mb-5 flex items-center justify-center">
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 96 96">
                    <circle cx="48" cy="48" r="44" fill="none" stroke={theme?.accent || "#e5e7eb"} strokeWidth="3" />
                    <circle
                      cx="48" cy="48" r="44" fill="none" stroke={primary} strokeWidth="3"
                      strokeDasharray={`${180 + i * 20} 276`}
                      strokeLinecap="round" transform="rotate(-90 48 48)"
                    />
                  </svg>
                  <Icon size={28} style={{ color: primary }} />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm opacity-60 leading-relaxed max-w-[200px]">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
