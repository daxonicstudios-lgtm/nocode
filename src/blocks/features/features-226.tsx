import type { BlockProps } from "@/blocks/types";
import { Box, Lightbulb, Wrench, Star, Flame, Heart } from "lucide-react";

const icons = [Box, Lightbulb, Wrench, Star, Flame, Heart];

export default function Features226(props: BlockProps) {
  const {
    theme,
    heading = "Feature Mosaic",
    subheading = "A diverse set of tools arranged for maximum impact",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Component Library", description: "500+ pre-built UI elements ready to use." },
      { title: "Idea Board", description: "Capture and organize brainstorming sessions." },
      { title: "Dev Tools", description: "Built-in debugger and performance profiler." },
      { title: "Rating System", description: "Collect and display user reviews." },
      { title: "Hot Reload", description: "See changes instantly during development." },
      { title: "Community", description: "Access shared templates and plugins." },
    ],
  } = props;

  const sizes = ["sm:col-span-2 sm:row-span-2", "", "", "", "", "sm:col-span-2"];

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="text-base opacity-70 max-w-lg mx-auto">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            const size = sizes[i] || "";
            const isLarge = i === 0;
            return (
              <div key={i} className={`${size} rounded-xl border p-6 flex flex-col justify-center`} style={{ borderColor: theme?.primary ? `${theme.primary}20` : "#e5e7eb" }}>
                <Icon size={isLarge ? 32 : 22} className="mb-3" style={{ color: theme?.primary || "#6366f1" }} />
                <h3 className={`font-semibold mb-1 ${isLarge ? "text-xl" : "text-base"}`}>{item.title}</h3>
                <p className={`opacity-60 leading-relaxed ${isLarge ? "text-base" : "text-sm"}`}>{item.description}</p>
              </div>
            );
          })}
        </div>
        {buttonText && (
          <div className="text-center mt-10">
            <a href={buttonUrl} className="inline-block px-6 py-3 rounded-lg text-white font-medium" style={{ backgroundColor: theme?.primary || "#6366f1" }}>
              {buttonText}
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
