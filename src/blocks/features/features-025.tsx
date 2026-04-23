import type { BlockProps } from "@/blocks/types";
import { Palette, Sparkles, Clock, Gem, Compass, Sun } from "lucide-react";

const iconMap = [Palette, Sparkles, Clock, Gem, Compass, Sun];

const defaults = [
  { title: "Beautiful Themes", description: "Pick from dozens of hand-crafted designs." },
  { title: "Smart Suggestions", description: "AI recommends layouts based on your content." },
  { title: "Save Hours", description: "Automate repetitive edits across all pages." },
  { title: "Premium Assets", description: "Access thousands of royalty-free images." },
  { title: "Easy Navigation", description: "Drag-and-drop page ordering and linking." },
  { title: "Light & Dark Modes", description: "Toggle between themes with one click." },
];

const pastels = ["#dbeafe", "#fce7f3", "#d1fae5", "#fef3c7", "#e0e7ff", "#ffe4e6"];

export default function Features025(props: BlockProps) {
  const {
    theme,
    heading = "Designed to Delight",
    subheading = "Simple tools, stunning results.",
    items = defaults,
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-20 px-4 sm:px-6 lg:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
        <p className="text-lg opacity-70 mb-12 max-w-lg mx-auto">{subheading}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.slice(0, 6).map((item, i) => {
            const Icon = iconMap[i % iconMap.length];
            return (
              <div key={i} className="rounded-2xl p-6 shadow-sm" style={{ backgroundColor: pastels[i % pastels.length] }}>
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: theme?.primary ?? "#6366f1", color: "#fff" }}
                >
                  <Icon size={20} />
                </div>
                <h3 className="text-base font-semibold mb-1 text-gray-900">{item.title ?? defaults[i]?.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.description ?? defaults[i]?.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
