import type { BlockProps } from "@/blocks/types";
import { Puzzle, Blocks, Box, Shapes } from "lucide-react";

const icons = [Puzzle, Blocks, Box, Shapes];

export default function Features287(props: BlockProps) {
  const {
    theme,
    heading = "Piece It Together",
    subheading = "Modular features that fit your unique workflow like a puzzle",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Drag & Drop", description: "Build pages and workflows by dragging components into place." },
      { title: "Building Blocks", description: "Pre-built modules snap together to create complex functionality." },
      { title: "Containers", description: "Organize content with flexible containers that resize automatically." },
      { title: "Shape Shifter", description: "Layouts adapt to any content type — text, media, data, or forms." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background || "#fff", color: theme?.foreground || "#1f2937" }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="text-lg opacity-60 max-w-2xl mx-auto">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="rounded-xl p-6 text-center" style={{ border: `2px dotted ${theme?.primary ? `${theme.primary}40` : "#d1d5db"}` }}>
                <div className="w-14 h-14 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: theme?.primary ? `${theme.primary}08` : "#faf5ff", color: theme?.primary || "#7c3aed" }}>
                  <Icon size={24} />
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm opacity-60 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
        {buttonText && (
          <div className="text-center mt-10">
            <a href={buttonUrl} className="inline-block px-6 py-3 rounded-lg text-white font-medium" style={{ backgroundColor: theme?.primary || "#7c3aed" }}>{buttonText}</a>
          </div>
        )}
      </div>
    </section>
  );
}
