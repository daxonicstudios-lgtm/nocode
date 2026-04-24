import type { BlockProps } from "@/blocks/types";
import { Zap, Shield, BarChart3 } from "lucide-react";

const iconMap = [Zap, Shield, BarChart3];

const defaults = [
  { title: "Lightning Fast", description: "Optimized performance that loads in under a second on any device.", icon: "zap" },
  { title: "Enterprise Security", description: "Bank-grade encryption protects your data around the clock.", icon: "shield" },
  { title: "Real-Time Analytics", description: "Track every metric that matters with live dashboards and reports.", icon: "chart" },
];

export default function Features011(props: BlockProps) {
  const {
    theme,
    heading = "Why Teams Choose Us",
    subheading = "Built for speed, security, and scale",
    items = defaults,
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
        <p className="text-lg opacity-70 mb-12 max-w-2xl mx-auto">{subheading}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, i) => {
            const Icon = iconMap[i % iconMap.length];
            return (
              <div
                key={i}
                className="rounded-2xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                style={{ backgroundColor: theme?.background, border: `1px solid ${theme?.accent || "#e5e7eb"}` }}
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 mx-auto"
                  style={{ backgroundColor: theme?.primary || "#3b82f6", color: "#fff" }}
                >
                  <Icon size={26} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="opacity-60 text-sm leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
