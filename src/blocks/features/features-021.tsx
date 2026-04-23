import type { BlockProps } from "@/blocks/types";
import { Layers, Shield, Zap, BarChart3, Globe, Settings } from "lucide-react";

const iconMap = [Layers, Shield, Zap, BarChart3, Globe, Settings];

const defaults = [
  { title: "Scalable Architecture", description: "Built to grow with your business from day one." },
  { title: "Enterprise Security", description: "Bank-grade encryption and compliance standards." },
  { title: "Lightning Performance", description: "Optimized for speed across every device and network." },
  { title: "Advanced Analytics", description: "Real-time insights to drive smarter decisions." },
  { title: "Global Reach", description: "Deploy to 40+ regions with a single click." },
  { title: "Custom Workflows", description: "Automate repetitive tasks and focus on what matters." },
];

export default function Features021(props: BlockProps) {
  const {
    theme,
    heading = "Why Leading Teams Choose Us",
    subheading = "Everything you need to build, ship, and scale — all in one platform.",
    items = defaults,
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4 sm:px-6 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
        <p className="text-lg opacity-70 mb-12 max-w-2xl">{subheading}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {items.slice(0, 6).map((item, i) => {
            const Icon = iconMap[i % iconMap.length];
            return (
              <div key={i} className="flex gap-4">
                <div className="shrink-0 mt-1">
                  <Icon size={24} style={{ color: theme?.primary }} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">{item.title ?? defaults[i]?.title}</h3>
                  <p className="text-sm opacity-60 leading-relaxed">{item.description ?? defaults[i]?.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
