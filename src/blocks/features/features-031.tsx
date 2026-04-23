import type { BlockProps } from "@/blocks/types";
import { Zap, Shield, Target, BarChart3 } from "lucide-react";

const iconMap = [Zap, Shield, Target, BarChart3];

const defaultItems = [
  { title: "Lightning Fast", description: "Optimized performance that loads in milliseconds, keeping your visitors engaged." },
  { title: "Enterprise Security", description: "Bank-grade encryption and security protocols to protect your data at all times." },
  { title: "Precision Targeting", description: "Reach the right audience with AI-powered segmentation and smart delivery." },
];

export default function Features031(props: BlockProps) {
  const {
    theme,
    heading = "Built for Modern Teams",
    subheading = "Everything you need to scale your business with confidence",
    items = defaultItems,
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4 sm:py-24">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
        <p className="text-lg opacity-70 mb-12 max-w-2xl mx-auto">{subheading}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {items.map((item, i) => {
            const Icon = iconMap[i % iconMap.length];
            return (
              <div key={i} className="flex flex-col items-center text-center">
                <div
                  className="w-16 h-16 flex items-center justify-center rotate-45 rounded-md mb-6"
                  style={{ backgroundColor: theme?.primary ?? "#6366f1" }}
                >
                  <Icon className="-rotate-45 w-7 h-7 text-white" />
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
