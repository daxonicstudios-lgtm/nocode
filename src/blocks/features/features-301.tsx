import type { BlockProps } from "@/blocks/types";
import { Rocket, Shield, Zap, Star, Globe, Layers } from "lucide-react";

const icons = [Rocket, Shield, Zap, Star, Globe, Layers];

export default function Features301(props: BlockProps) {
  const {
    theme,
    heading = "Our Core Features",
    subheading = "Scroll through what makes us different",
    items = [
      { title: "Instant Deploy", description: "Ship to production in seconds with one-click deployments." },
      { title: "Built-in Security", description: "Enterprise-grade protection included at no extra cost." },
      { title: "Blazing Fast", description: "Optimized for speed with edge caching worldwide." },
      { title: "Global Reach", description: "Serve users from 200+ locations around the globe." },
      { title: "Smart Layers", description: "Composable architecture that scales with your needs." },
      { title: "Five-Star Support", description: "Real humans ready to help you 24/7." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-2 text-center">{heading}</h2>
        <p className="opacity-70 text-center mb-8 max-w-xl mx-auto">{subheading}</p>
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 -mx-4 px-4 scrollbar-hide">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div
                key={i}
                className="snap-start shrink-0 w-72 rounded-xl p-6 border border-current/10"
                style={{ backgroundColor: theme?.accent ? `${theme.accent}15` : "#f3f4f6" }}
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: theme?.primary || "#6366f1", color: "#fff" }}>
                  <Icon size={20} />
                </div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-sm opacity-60 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
