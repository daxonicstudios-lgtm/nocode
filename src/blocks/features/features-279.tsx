import type { BlockProps } from "@/blocks/types";
import { Anchor, Navigation, Compass, Ship } from "lucide-react";

const icons = [Anchor, Navigation, Compass, Ship];

export default function Features279(props: BlockProps) {
  const {
    theme,
    heading = "Steady as She Goes",
    subheading = "Reliable features that keep your operations running smoothly",
    bodyText,
    buttonText = "Set Sail",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Stable Foundation", description: "Battle-tested infrastructure with zero unplanned downtime in 18 months." },
      { title: "Smart Routing", description: "Intelligent request routing ensures optimal performance at every scale." },
      { title: "True North Metrics", description: "Focus on the KPIs that matter with our guided analytics framework." },
      { title: "Smooth Migrations", description: "Move from your current platform in hours, not weeks." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background || "#0c1222", color: theme?.foreground || "#e2e8f0" }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3" style={{ color: "#fff" }}>{heading}</h2>
          <p className="text-lg opacity-50 max-w-2xl mx-auto">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="rounded-xl p-6" style={{ backgroundColor: "#162032" }}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center" style={{ backgroundColor: theme?.primary ? `${theme.primary}20` : "#1e3a5f", color: theme?.primary || "#60a5fa" }}>
                    <Icon size={18} />
                  </div>
                  <h3 className="font-semibold" style={{ color: theme?.accent || "#93c5fd" }}>{item.title}</h3>
                </div>
                <p className="text-sm opacity-50 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
        {buttonText && (
          <div className="text-center mt-10">
            <a href={buttonUrl} className="inline-block px-6 py-3 rounded-lg font-medium" style={{ backgroundColor: theme?.primary || "#3b82f6", color: "#fff" }}>{buttonText}</a>
          </div>
        )}
      </div>
    </section>
  );
}
