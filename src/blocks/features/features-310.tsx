import type { BlockProps } from "@/blocks/types";
import { Boxes, Puzzle, Wrench, Flame, Gem } from "lucide-react";

const icons = [Boxes, Puzzle, Wrench, Flame, Gem];

export default function Features310(props: BlockProps) {
  const {
    theme,
    heading = "Feature Carousel",
    subheading = "Browse our top capabilities at a glance",
    items = [
      { title: "Modular Components", description: "Mix and match blocks to build exactly what you need." },
      { title: "Plugin System", description: "Extend functionality with a thriving marketplace of add-ons." },
      { title: "Dev Tools", description: "Inspect, debug, and optimize with built-in developer utilities." },
      { title: "Hot Reload", description: "See every change instantly without losing application state." },
      { title: "Premium Templates", description: "Start with professionally designed layouts and customize freely." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-2">{heading}</h2>
        <p className="opacity-70 text-center mb-10 max-w-xl mx-auto">{subheading}</p>
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-4">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div
                key={i}
                className="snap-center shrink-0 w-64 sm:w-72 rounded-2xl p-6 text-center"
                style={{ backgroundColor: theme?.primary ? `${theme.primary}08` : "#f9fafb", border: `2px solid ${theme?.primary ? `${theme.primary}20` : "#e5e7eb"}` }}
              >
                <div className="w-14 h-14 rounded-full mx-auto flex items-center justify-center mb-4" style={{ backgroundColor: theme?.primary || "#6366f1", color: "#fff" }}>
                  <Icon size={24} />
                </div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-sm opacity-60 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
        <div className="flex justify-center gap-2 mt-4">
          {items.map((_, i) => (
            <div key={i} className="w-2 h-2 rounded-full" style={{ backgroundColor: i === 0 ? (theme?.primary || "#6366f1") : (theme?.primary ? `${theme.primary}30` : "#d1d5db") }} />
          ))}
        </div>
      </div>
    </section>
  );
}
