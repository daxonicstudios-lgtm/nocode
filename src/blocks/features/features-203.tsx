import type { BlockProps } from "@/blocks/types";
import { Compass, Zap, Shield, Heart, Target, Sparkles } from "lucide-react";

const icons = [Compass, Zap, Shield, Heart, Target, Sparkles];

export default function Features203(props: BlockProps) {
  const {
    theme,
    heading = "Core Capabilities",
    subheading = "Built around what matters most to your success",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Navigation", description: "Intuitive pathways guide users effortlessly." },
      { title: "Speed", description: "Optimized for instant load times globally." },
      { title: "Protection", description: "Multi-layer security for total peace of mind." },
      { title: "Care", description: "24/7 human support when you need it." },
      { title: "Precision", description: "Targeted analytics for smarter decisions." },
      { title: "Innovation", description: "Cutting-edge features shipped weekly." },
    ],
  } = props;

  const positions = [
    "col-start-2 row-start-1",
    "col-start-3 row-start-2",
    "col-start-3 row-start-3",
    "col-start-2 row-start-4",
    "col-start-1 row-start-3",
    "col-start-1 row-start-2",
  ];

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
        <p className="text-lg opacity-70 mb-14 max-w-xl mx-auto">{subheading}</p>
        <div className="hidden lg:grid grid-cols-3 grid-rows-4 gap-4 max-w-2xl mx-auto">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className={`${positions[i] || ""} p-5 rounded-xl border text-center`} style={{ borderColor: theme?.primary ? `${theme.primary}25` : "#e5e7eb" }}>
                <Icon size={24} className="mx-auto mb-2" style={{ color: theme?.primary || "#6366f1" }} />
                <h3 className="text-sm font-semibold mb-1">{item.title}</h3>
                <p className="text-xs opacity-60">{item.description}</p>
              </div>
            );
          })}
        </div>
        <div className="grid grid-cols-2 gap-4 lg:hidden">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="p-4 rounded-xl border text-center" style={{ borderColor: theme?.primary ? `${theme.primary}25` : "#e5e7eb" }}>
                <Icon size={22} className="mx-auto mb-2" style={{ color: theme?.primary || "#6366f1" }} />
                <h3 className="text-sm font-semibold mb-1">{item.title}</h3>
                <p className="text-xs opacity-60">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
