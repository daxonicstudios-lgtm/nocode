import type { BlockProps } from "@/blocks/types";
import { Palette, Layers, PenTool, Aperture } from "lucide-react";

const icons = [Palette, Layers, PenTool, Aperture];

export default function Features277(props: BlockProps) {
  const {
    theme,
    heading = "Design Without Limits",
    subheading = "Creative tools that adapt to your unique vision",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Color Systems", description: "Generate harmonious palettes that stay consistent across every component." },
      { title: "Layer Management", description: "Organize complex designs with unlimited layers and smart grouping." },
      { title: "Vector Editing", description: "Precision vector tools for pixel-perfect icons and illustrations." },
      { title: "Asset Library", description: "Centralized library of brand assets accessible to your entire team." },
    ],
  } = props;

  const gradients = [
    `linear-gradient(135deg, ${theme?.primary || "#ec4899"}, ${theme?.accent || "#8b5cf6"})`,
    `linear-gradient(135deg, ${theme?.accent || "#8b5cf6"}, ${theme?.primary || "#3b82f6"})`,
    `linear-gradient(135deg, ${theme?.primary || "#3b82f6"}, ${theme?.accent || "#06b6d4"})`,
    `linear-gradient(135deg, ${theme?.accent || "#06b6d4"}, ${theme?.primary || "#10b981"})`,
  ];

  return (
    <section style={{ backgroundColor: theme?.background || "#0f172a", color: theme?.foreground || "#f1f5f9" }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="text-lg opacity-50 max-w-2xl mx-auto">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="rounded-xl p-6" style={{ backgroundColor: "#1e293b" }}>
                <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 text-white" style={{ background: gradients[i % gradients.length] }}>
                  <Icon size={20} />
                </div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-sm opacity-50 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
        {buttonText && (
          <div className="text-center mt-10">
            <a href={buttonUrl} className="inline-block px-6 py-3 rounded-lg text-white font-medium" style={{ background: gradients[0] }}>{buttonText}</a>
          </div>
        )}
      </div>
    </section>
  );
}
