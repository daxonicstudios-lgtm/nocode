import type { BlockProps } from "@/blocks/types";
import { Palette, Code, BarChart3 } from "lucide-react";

const icons = [Palette, Code, BarChart3];

export default function Features205(props: BlockProps) {
  const {
    theme,
    heading = "Designed for Creators",
    subheading = "Powerful features wrapped in a beautiful interface",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Visual Editor", description: "Drag-and-drop simplicity with professional results every time." },
      { title: "Clean Code", description: "Export production-ready code that meets modern standards." },
      { title: "Deep Insights", description: "Understand your audience with detailed behavioral analytics." },
    ],
  } = props;

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: `radial-gradient(${theme?.primary || "#6366f1"} 1px, transparent 1px)`,
        backgroundSize: "24px 24px",
      }} />
      <div className="relative max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
        <p className="text-lg opacity-70 mb-14 max-w-xl mx-auto">{subheading}</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="rounded-2xl p-8 backdrop-blur-sm" style={{ backgroundColor: theme?.background ? `${theme.background}cc` : "rgba(255,255,255,0.8)", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>
                <Icon size={32} className="mx-auto mb-5" style={{ color: theme?.primary || "#6366f1" }} />
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-sm opacity-60 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
        {buttonText && (
          <a href={buttonUrl} className="inline-block mt-12 px-6 py-3 rounded-lg text-white font-medium" style={{ backgroundColor: theme?.primary || "#6366f1" }}>
            {buttonText}
          </a>
        )}
      </div>
    </section>
  );
}
