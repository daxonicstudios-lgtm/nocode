import type { BlockProps } from "@/blocks/types";
import { Grid3x3, Ruler, AlignCenter } from "lucide-react";

const icons = [Grid3x3, Ruler, AlignCenter];

export default function Features337(props: BlockProps) {
  const {
    theme,
    heading = "Precision Design Tools",
    subheading = "Pixel-perfect features with designer-friendly details",
    items = [
      { title: "Smart Grid", description: "Flexible layout grids that snap elements into perfect alignment automatically." },
      { title: "Spacing System", description: "Consistent 8px-based spacing tokens that keep every element in harmony." },
      { title: "Auto Alignment", description: "Intelligent alignment guides appear as you move elements on the canvas." },
    ],
  } = props;

  const primary = theme?.primary || "#6366f1";

  return (
    <section style={{ backgroundColor: theme?.background || "#fff", color: theme?.foreground || "#111" }} className="relative py-20 px-4 overflow-hidden">
      {/* Grid background pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(${primary} 1px, transparent 1px), linear-gradient(90deg, ${primary} 1px, transparent 1px)`,
        backgroundSize: "40px 40px",
      }} />
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl sm:text-5xl font-black mb-2">{heading}</h2>
        <p className="opacity-60 mb-14">{subheading}</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="rounded-xl p-6 border" style={{ borderColor: `${primary}20`, backgroundColor: theme?.background || "#fff" }}>
                <div className="flex items-center justify-center gap-2 mb-4">
                  <div className="w-8 h-[2px]" style={{ backgroundColor: `${primary}30` }} />
                  <Icon size={28} style={{ color: primary }} />
                  <div className="w-8 h-[2px]" style={{ backgroundColor: `${primary}30` }} />
                </div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-sm opacity-50 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
