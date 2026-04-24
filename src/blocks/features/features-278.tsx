import type { BlockProps } from "@/blocks/types";
import { Coffee, Flame, Sun, BookOpen } from "lucide-react";

const icons = [Coffee, Flame, Sun, BookOpen];

export default function Features278(props: BlockProps) {
  const {
    theme,
    heading = "Built for Comfort",
    subheading = "Warm, intuitive features that make work feel effortless",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Morning Dashboard", description: "Start your day with a personalized summary of what needs your attention." },
      { title: "Focus Mode", description: "Block distractions and concentrate on deep work with a single toggle." },
      { title: "Day Planner", description: "Visual time blocks help you plan your day and protect your energy." },
      { title: "Learning Hub", description: "Bite-sized tutorials and tips delivered right inside the app." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background || "#1c1917", color: theme?.foreground || "#fafaf9" }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="text-lg opacity-50 max-w-2xl mx-auto">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="rounded-xl border p-6" style={{ borderColor: "#44403c", backgroundColor: "#292524" }}>
                <Icon size={24} className="mb-4" style={{ color: theme?.primary || "#f97316" }} />
                <h3 className="font-semibold mb-2" style={{ color: theme?.accent || "#fbbf24" }}>{item.title}</h3>
                <p className="text-sm opacity-50 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
        {buttonText && (
          <div className="text-center mt-10">
            <a href={buttonUrl} className="inline-block px-6 py-3 rounded-lg font-medium" style={{ backgroundColor: theme?.primary || "#f97316", color: "#1c1917" }}>{buttonText}</a>
          </div>
        )}
      </div>
    </section>
  );
}
