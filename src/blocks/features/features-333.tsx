import type { BlockProps } from "@/blocks/types";
import { Palette, Droplets, Sun } from "lucide-react";

const icons = [Palette, Droplets, Sun];
const swatches = [
  ["#FF6B6B", "#4ECDC4", "#45B7D1"],
  ["#96CEB4", "#FFEAA7", "#DDA0DD"],
  ["#FF9FF3", "#54A0FF", "#5F27CD"],
];

export default function Features333(props: BlockProps) {
  const {
    theme,
    heading = "Color-Driven Design",
    subheading = "Every feature comes with curated palettes",
    items = [
      { title: "Brand Color System", description: "Consistent color language across all touchpoints and platforms." },
      { title: "Accessibility Contrast", description: "Every palette meets WCAG AA standards for readability." },
      { title: "Dynamic Theming", description: "Switch between light, dark, and custom themes instantly." },
    ],
  } = props;

  const primary = theme?.primary || "#6366f1";

  return (
    <section style={{ backgroundColor: theme?.background || "#fafafa", color: theme?.foreground || "#1a1a1a" }} className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-black mb-2">{heading}</h2>
        <p className="opacity-60 mb-14">{subheading}</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            const colors = swatches[i % swatches.length];
            return (
              <div key={i} className="text-center">
                <div className="flex justify-center gap-2 mb-4">
                  {colors.map((c, j) => (
                    <div key={j} className="w-8 h-8 rounded-full shadow-sm" style={{ backgroundColor: c }} />
                  ))}
                </div>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3" style={{ color: primary }}>
                  <Icon size={28} />
                </div>
                <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                <p className="text-sm opacity-50 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
