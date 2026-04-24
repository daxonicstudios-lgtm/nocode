import type { BlockProps } from "@/blocks/types";
import { Grid3x3, Scan, Maximize } from "lucide-react";

const icons = [Grid3x3, Scan, Maximize];

export default function Features173(props: BlockProps) {
  const {
    theme,
    heading = "Precision Tools",
    subheading = "Pixel-perfect control over every element",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Grid System", description: "Snap to grid for perfectly aligned layouts every time." },
      { title: "Smart Guides", description: "Dynamic alignment guides appear as you drag elements." },
      { title: "Responsive Resize", description: "Elements scale proportionally across all breakpoints." },
    ],
  } = props;

  const primary = theme?.primary || "#6366f1";

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden" style={{ backgroundColor: theme?.background || "#111827", color: theme?.foreground || "#f9fafb" }}>
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: `linear-gradient(${primary} 1px, transparent 1px), linear-gradient(90deg, ${primary} 1px, transparent 1px)`, backgroundSize: "40px 40px" }} />
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl font-bold mb-2 text-center">{heading}</h2>
        <p className="opacity-50 mb-14 text-center text-lg">{subheading}</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="rounded-2xl p-8" style={{ background: "rgba(255,255,255,0.05)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.08)" }}>
                <Icon size={24} className="mb-5" style={{ color: primary }} />
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="opacity-50 text-sm leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
        {buttonText && (
          <div className="text-center mt-12">
            <a href={buttonUrl} className="inline-block px-8 py-3 rounded-lg text-white font-bold" style={{ backgroundColor: primary }}>{buttonText}</a>
          </div>
        )}
      </div>
    </section>
  );
}
