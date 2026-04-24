import type { BlockProps } from "@/blocks/types";
import { MousePointerClick, Palette, Settings, Sparkles } from "lucide-react";

const icons = [MousePointerClick, Palette, Settings, Sparkles];

export default function Features353(props: BlockProps) {
  const {
    theme,
    heading = "Interactive by Design",
    subheading = "Features that respond to your every action",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Click & Build", description: "Drag-and-drop editor with instant visual feedback." },
      { title: "Theme Engine", description: "Change colors, fonts, and styles in real time." },
      { title: "Granular Controls", description: "Fine-tune every pixel without writing code." },
      { title: "Smart Suggestions", description: "AI recommends layouts based on your content." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background || "#e4e4e4", color: theme?.foreground || "#333" }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="text-lg opacity-60">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            const isActive = i === 0;
            return (
              <div
                key={i}
                className="rounded-2xl p-5 text-center transition-all"
                style={{
                  background: theme?.background || "#e4e4e4",
                  boxShadow: isActive
                    ? "inset 6px 6px 12px #bebebe, inset -6px -6px 12px #ffffff"
                    : "6px 6px 12px #bebebe, -6px -6px 12px #ffffff",
                }}
              >
                <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3" style={{ background: isActive ? (theme?.primary || "#8b5cf6") : (theme?.background || "#e4e4e4"), boxShadow: isActive ? "none" : "inset 3px 3px 6px #bebebe, inset -3px -3px 6px #ffffff", color: isActive ? "#fff" : (theme?.primary || "#8b5cf6") }}>
                  <Icon size={20} />
                </div>
                <h3 className="font-semibold mb-1">{item.title}</h3>
                <p className="text-xs opacity-60 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
