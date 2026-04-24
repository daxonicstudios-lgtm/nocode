import type { BlockProps } from "@/blocks/types";
import { Zap, Shield, Layers } from "lucide-react";

const icons = [Zap, Shield, Layers];

export default function Features311(props: BlockProps) {
  const {
    theme,
    heading = "Hover to Discover",
    subheading = "Interactive cards that reveal more on hover",
    items = [
      { title: "Speed Optimized", description: "Every millisecond counts. We obsess over performance so you don't have to." },
      { title: "Enterprise Security", description: "Bank-grade encryption and compliance certifications included." },
      { title: "Scalable Stack", description: "From 10 users to 10 million — the architecture handles it all." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-2">{heading}</h2>
        <p className="opacity-70 mb-10 max-w-xl mx-auto">{subheading}</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            const primary = theme?.primary || "#6366f1";
            return (
              <div
                key={i}
                className="group rounded-xl p-6 border transition-all duration-300 hover:scale-105 cursor-pointer"
                style={{ borderColor: `${primary}20` }}
              >
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 transition-colors duration-300 group-hover:text-white"
                  style={{ backgroundColor: `${primary}15`, color: primary }}
                >
                  <span className="group-hover:hidden"><Icon size={24} /></span>
                  <span className="hidden group-hover:block"><Icon size={24} /></span>
                </div>
                <div className="w-full h-1 rounded mb-4 transition-all duration-300 group-hover:h-1.5" style={{ backgroundColor: `${primary}20` }}>
                  <div className="h-full rounded transition-all duration-500 w-0 group-hover:w-full" style={{ backgroundColor: primary }} />
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
