import type { BlockProps } from "@/blocks/types";
import { Blocks, Puzzle, Component } from "lucide-react";

const icons = [Blocks, Puzzle, Component];

export default function Features179(props: BlockProps) {
  const {
    theme,
    heading = "Modular Architecture",
    subheading = "Compose your perfect stack",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Block Library", description: "Thousands of pre-built sections ready to drop in." },
      { title: "Plugin System", description: "Extend functionality with community-built plugins." },
      { title: "Custom Widgets", description: "Build reusable components for your specific needs." },
    ],
  } = props;

  const primary = theme?.primary || "#6366f1";

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: theme?.background || "#0f172a", color: theme?.foreground || "#f8fafc" }}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-2 text-center">{heading}</h2>
        <p className="opacity-50 mb-14 text-center text-lg">{subheading}</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="relative">
                <div className="absolute inset-0 rounded-2xl" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }} />
                <div className="absolute inset-1 rounded-xl" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }} />
                <div className="relative rounded-lg p-8 m-2" style={{ background: "rgba(255,255,255,0.05)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.1)" }}>
                  <Icon size={24} className="mb-5" style={{ color: primary }} />
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="opacity-50 text-sm leading-relaxed">{item.description}</p>
                </div>
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
