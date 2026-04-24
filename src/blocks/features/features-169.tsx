import type { BlockProps } from "@/blocks/types";
import { Layers, PenTool, Box } from "lucide-react";

const icons = [Layers, PenTool, Box];

export default function Features169(props: BlockProps) {
  const {
    theme,
    heading = "Design System",
    subheading = "Components built for consistency",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Layer Management", description: "Organize complex layouts with intuitive layer controls." },
      { title: "Vector Editing", description: "Create and edit shapes with precision path tools." },
      { title: "3D Transforms", description: "Add depth and perspective to any element on canvas." },
    ],
  } = props;

  const primary = theme?.primary || "#6366f1";

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-2 text-center">{heading}</h2>
        <p className="opacity-60 mb-14 text-center text-lg">{subheading}</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="relative p-8">
                <div className="absolute top-4 left-4 w-16 h-16 rounded-full opacity-10" style={{ backgroundColor: primary }} />
                <div className="absolute top-8 left-8 w-10 h-10 rotate-45 opacity-10" style={{ backgroundColor: primary }} />
                <div className="relative z-10">
                  <Icon size={28} className="mb-5" style={{ color: primary }} />
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="opacity-60 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
        {buttonText && (
          <div className="text-center mt-10">
            <a href={buttonUrl} className="inline-block px-8 py-3 rounded-lg text-white font-bold" style={{ backgroundColor: primary }}>{buttonText}</a>
          </div>
        )}
      </div>
    </section>
  );
}
