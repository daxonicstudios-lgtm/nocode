import type { BlockProps } from "@/blocks/types";
import { Paintbrush, Scissors, Smile } from "lucide-react";

const icons = [Paintbrush, Scissors, Smile];

export default function Features332(props: BlockProps) {
  const {
    theme,
    heading = "Crafted with Care",
    subheading = "Features designed with a human touch",
    items = [
      { title: "Custom Illustrations", description: "Unique hand-drawn artwork tailored to your brand personality." },
      { title: "Precision Editing", description: "Every pixel refined, every detail polished to perfection." },
      { title: "Delightful Details", description: "Micro-interactions and easter eggs that make users smile." },
    ],
  } = props;

  const primary = theme?.primary || "#e11d48";

  return (
    <section style={{ backgroundColor: theme?.background || "#fffbf5", color: theme?.foreground || "#1a1a1a" }} className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-black mb-2" style={{ fontStyle: "italic" }}>{heading}</h2>
        <p className="opacity-60 mb-14 text-lg">{subheading}</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="relative p-6">
                <div
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    border: `3px dashed ${primary}40`,
                    borderRadius: "1rem",
                    transform: `rotate(${i % 2 === 0 ? -1 : 1}deg)`,
                  }}
                />
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: `${primary}15`, color: primary }}>
                    <Icon size={26} />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm opacity-50 leading-relaxed">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
