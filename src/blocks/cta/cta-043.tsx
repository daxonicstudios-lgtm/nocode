import type { BlockProps } from "@/blocks/types";
import { Layers, Palette, Gauge, Lock } from "lucide-react";

export default function Cta043(props: BlockProps) {
  const {
    theme,
    heading = "Built for modern teams",
    buttonText = "Explore Features",
    buttonUrl = "#",
    items = [
      { title: "Modular blocks", description: "Mix and match 500+ components", icon: "layers" },
      { title: "Brand theming", description: "Apply your colors and fonts globally", icon: "palette" },
      { title: "Lightning fast", description: "Optimized for Core Web Vitals", icon: "gauge" },
      { title: "Enterprise security", description: "SOC 2 compliant with SSO", icon: "lock" },
    ],
  } = props;

  const iconMap: Record<string, React.ReactNode> = {
    layers: <Layers className="w-5 h-5" />,
    palette: <Palette className="w-5 h-5" />,
    gauge: <Gauge className="w-5 h-5" />,
    lock: <Lock className="w-5 h-5" />,
  };

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center">{heading}</h2>
        <div className="mt-10 grid sm:grid-cols-2 gap-6">
          {items.slice(0, 4).map((item, i) => (
            <div key={i} className="flex gap-3 p-4 rounded-lg" style={{ backgroundColor: theme?.accent ?? "#f8fafc" }}>
              <div className="shrink-0 mt-0.5" style={{ color: theme?.primary ?? "#6366f1" }}>
                {iconMap[item.icon ?? ""] ?? <Layers className="w-5 h-5" />}
              </div>
              <div>
                <p className="font-semibold text-sm">{item.title}</p>
                <p className="text-xs opacity-50 mt-0.5">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a href={buttonUrl} className="inline-block px-8 py-3.5 rounded-lg text-white font-semibold text-sm" style={{ backgroundColor: theme?.primary ?? "#6366f1" }}>
            {buttonText}
          </a>
        </div>
      </div>
    </section>
  );
}
