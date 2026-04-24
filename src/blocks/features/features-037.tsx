import type { BlockProps } from "@/blocks/types";
import { Box, Palette, Wand2 } from "lucide-react";

const iconMap = [Box, Palette, Wand2];

const defaultItems = [
  { title: "Component Library", description: "Hundreds of pre-built blocks ready to assemble into any layout you can imagine." },
  { title: "Theme Studio", description: "Create stunning color palettes and typography systems with a single click." },
  { title: "Smart Suggestions", description: "AI recommends the perfect layout combinations based on your content and goals." },
];

export default function Features037(props: BlockProps) {
  const {
    theme,
    heading = "Design Without Limits",
    subheading = "Layered tools that build on each other",
    items = defaultItems,
  } = props;

  const accent = theme?.primary ?? "#6366f1";

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4 sm:py-24">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="text-lg opacity-60 max-w-xl mx-auto">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {items.map((item, i) => {
            const Icon = iconMap[i % iconMap.length];
            return (
              <div
                key={i}
                className="rounded-2xl p-7 shadow-lg relative"
                style={{
                  backgroundColor: theme?.background ?? "#ffffff",
                  marginTop: i === 1 ? "-0.5rem" : i === 2 ? "-1rem" : "0",
                  zIndex: items.length - i,
                  border: `1px solid ${accent}15`,
                }}
              >
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: `${accent}12` }}>
                  <Icon className="w-5 h-5" style={{ color: accent }} />
                </div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="opacity-55 text-sm leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
