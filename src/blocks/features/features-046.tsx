import type { BlockProps } from "@/blocks/types";
import { Star, Bell, Puzzle, Wand2, Target, Gift, Megaphone, Palette } from "lucide-react";

const icons = [Star, Bell, Puzzle, Wand2, Target, Gift, Megaphone, Palette];
const defaultTags = ["Popular", "New", "Beta", "Hot"];

export default function Features046(props: BlockProps) {
  const {
    theme,
    heading = "Everything You Need",
    subheading = "Features that make a difference",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Smart Suggestions", description: "AI recommends the best next action.", label: "Popular" },
      { title: "Push Alerts", description: "Never miss critical updates again.", label: "New" },
      { title: "Plugin System", description: "Extend functionality with community plugins.", label: "Beta" },
      { title: "Magic Resize", description: "Content adapts to any screen automatically.", label: "Hot" },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4 sm:px-8 lg:py-24">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold">{heading}</h2>
        <p className="mt-3 text-base opacity-70 max-w-xl mx-auto">{subheading}</p>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {items.map((item, i) => {
          const Icon = icons[i % icons.length];
          const tag = item.label || defaultTags[i % defaultTags.length];
          const accent = theme?.primary ?? "#6366f1";
          return (
            <div key={i} className="relative rounded-xl border p-5 hover:shadow-lg transition-shadow" style={{ borderColor: `${accent}30` }}>
              <span className="absolute top-3 right-3 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full text-white" style={{ backgroundColor: accent }}>{tag}</span>
              <Icon className="w-7 h-7 mb-3" style={{ color: accent }} />
              <h3 className="text-base font-semibold mb-1">{item.title}</h3>
              <p className="text-sm opacity-60 leading-relaxed">{item.description}</p>
            </div>
          );
        })}
      </div>
      {buttonText && (
        <div className="text-center mt-10">
          <a href={buttonUrl} className="inline-block px-6 py-3 rounded-lg text-white font-medium" style={{ backgroundColor: theme?.primary ?? "#6366f1" }}>{buttonText}</a>
        </div>
      )}
    </section>
  );
}
