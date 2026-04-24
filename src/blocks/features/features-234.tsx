import type { BlockProps } from "@/blocks/types";
import { Paintbrush, Code, BarChart3, Lock } from "lucide-react";

const icons = [Paintbrush, Code, BarChart3, Lock];

export default function Features234(props: BlockProps) {
  const {
    theme,
    heading = "Color Your Experience",
    subheading = "Cards that transform on hover to highlight what matters",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Design Studio", description: "Create stunning visuals with an intuitive drag-and-drop editor." },
      { title: "Code Editor", description: "Built-in IDE with syntax highlighting and auto-complete." },
      { title: "Analytics Suite", description: "Track every metric that drives your business forward." },
      { title: "Security Center", description: "Monitor threats and manage access controls in one place." },
    ],
  } = props;

  const primary = theme?.primary || "#6366f1";

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-20 px-4 sm:px-6 lg:px-8">
      <style>{`
        .feat234-card {
          transition: background-color 0.4s ease, color 0.4s ease;
        }
        .feat234-card:hover {
          background-color: ${primary} !important;
          color: #ffffff !important;
        }
        .feat234-card:hover .feat234-sub { opacity: 0.8 !important; }
      `}</style>
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
        <p className="text-lg opacity-70 mb-14 max-w-xl mx-auto">{subheading}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="feat234-card rounded-2xl border p-8 text-center cursor-pointer" style={{ borderColor: `${primary}20`, backgroundColor: "transparent" }}>
                <Icon size={28} className="mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="feat234-sub text-sm opacity-60 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
        {buttonText && (
          <a href={buttonUrl} className="inline-block mt-12 px-6 py-3 rounded-lg text-white font-medium" style={{ backgroundColor: primary }}>
            {buttonText}
          </a>
        )}
      </div>
    </section>
  );
}
