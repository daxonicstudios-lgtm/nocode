import type { BlockProps } from "@/blocks/types";
import { Lightbulb, Brain, Sparkles, Puzzle } from "lucide-react";

const icons = [Lightbulb, Brain, Sparkles, Puzzle];

export default function Features393(props: BlockProps) {
  const {
    theme,
    heading = "Thought Bubbles",
    subheading = "Ideas that float to the top",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Bright Ideas", description: "AI generates suggestions based on your usage patterns." },
      { title: "Smart Memory", description: "The platform remembers your preferences and adapts." },
      { title: "Creative Sparks", description: "Random inspiration prompts to break through blocks." },
      { title: "Puzzle Pieces", description: "Modular components that snap together perfectly." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background || "#f0f4ff", color: theme?.foreground || "#1e293b" }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="text-lg opacity-60">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="relative">
                <div className="rounded-3xl p-6" style={{ backgroundColor: theme?.background || "#fff", border: `2px solid ${theme?.primary || "#6366f1"}22` }}>
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: `${theme?.primary || "#6366f1"}15` }}>
                    <Icon size={22} style={{ color: theme?.primary || "#6366f1" }} />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm opacity-60 leading-relaxed">{item.description}</p>
                </div>
                <div className="ml-8 mt-0">
                  <div className="w-4 h-4 rounded-full -mt-1" style={{ backgroundColor: `${theme?.primary || "#6366f1"}22` }} />
                  <div className="w-2.5 h-2.5 rounded-full ml-2 mt-1" style={{ backgroundColor: `${theme?.primary || "#6366f1"}15` }} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
