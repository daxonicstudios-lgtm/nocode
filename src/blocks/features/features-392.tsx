import type { BlockProps } from "@/blocks/types";
import { Pencil, PenTool, Brush, Eraser } from "lucide-react";

const icons = [Pencil, PenTool, Brush, Eraser];

export default function Features392(props: BlockProps) {
  const {
    theme,
    heading = "Handcrafted Features",
    subheading = "Made with attention to every last detail",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Sketch Mode", description: "Wireframe ideas quickly before committing to full designs." },
      { title: "Vector Tools", description: "Professional drawing tools built right into the editor." },
      { title: "Brush Effects", description: "Apply artistic filters and textures to any element." },
      { title: "Clean Slate", description: "Reset any component to its default state instantly." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background || "#fffdf7", color: theme?.foreground || "#2d2d2d" }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-1">{heading}</h2>
          <div className="relative inline-block">
            <p className="text-lg opacity-60 relative z-10">{subheading}</p>
            <div className="absolute bottom-0 left-0 right-0 h-2 -skew-x-3 opacity-30 z-0" style={{ backgroundColor: theme?.primary || "#f59e0b" }} />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Icon size={22} style={{ color: theme?.primary || "#f59e0b" }} />
                  <div className="relative">
                    <h3 className="font-bold text-lg">{item.title}</h3>
                    <svg className="absolute -bottom-1 left-0 w-full h-2" viewBox="0 0 200 8" preserveAspectRatio="none">
                      <path d="M0,6 C30,2 60,4 100,5 C140,6 170,3 200,4" fill="none" stroke={theme?.primary || "#f59e0b"} strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>
                <p className="text-sm opacity-60 leading-relaxed mt-3">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
