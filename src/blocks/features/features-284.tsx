import type { BlockProps } from "@/blocks/types";
import { Droplets, Wind, Flower2, Mountain } from "lucide-react";

const icons = [Droplets, Wind, Flower2, Mountain];

export default function Features284(props: BlockProps) {
  const {
    theme,
    heading = "Natural by Design",
    subheading = "Organic, flowing interfaces that feel as natural as breathing",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Fluid Layouts", description: "Content flows naturally across screens with organic transitions." },
      { title: "Gentle Animations", description: "Subtle micro-animations guide attention without overwhelming." },
      { title: "Growth Tracking", description: "Watch your projects bloom with beautiful progress visualizations." },
      { title: "Solid Foundation", description: "Rock-solid reliability built on proven open-source technology." },
    ],
  } = props;

  const accentColors = [theme?.primary || "#6366f1", theme?.accent || "#ec4899", "#22c55e", "#0ea5e9"];

  return (
    <section style={{ backgroundColor: theme?.background || "#faf9f7", color: theme?.foreground || "#1c1917" }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="text-lg opacity-60 max-w-2xl mx-auto">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            const accent = accentColors[i % accentColors.length];
            return (
              <div key={i} className="rounded-2xl p-6 relative overflow-hidden" style={{ backgroundColor: theme?.background || "#fff" }}>
                <div className="absolute top-0 left-0 w-full h-1 opacity-40" style={{ background: `linear-gradient(90deg, ${accent}, transparent)` }} />
                <Icon size={28} className="mb-4" style={{ color: accent }} />
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm opacity-60 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
        {buttonText && (
          <div className="text-center mt-10">
            <a href={buttonUrl} className="inline-block px-6 py-3 rounded-full text-white font-medium" style={{ backgroundColor: theme?.primary || "#6366f1" }}>{buttonText}</a>
          </div>
        )}
      </div>
    </section>
  );
}
