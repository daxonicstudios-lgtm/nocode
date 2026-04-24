import type { BlockProps } from "@/blocks/types";
import { BarChart3, Users, Settings } from "lucide-react";

const icons = [BarChart3, Users, Settings];
const defaultColors = ["#6366f1", "#ec4899", "#f59e0b"];

export default function Features165(props: BlockProps) {
  const {
    theme,
    heading = "All-in-One Platform",
    subheading = "Three pillars of growth",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Analytics", description: "Deep insights into user behavior, funnels, and retention." },
      { title: "Team Management", description: "Roles, permissions, and collaboration tools built in." },
      { title: "Configuration", description: "Customize every detail without touching code." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-2 text-center">{heading}</h2>
        <p className="opacity-60 mb-14 text-center text-lg">{subheading}</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            const cardColor = theme?.primary || defaultColors[i % defaultColors.length];
            return (
              <div key={i} className="rounded-xl p-8 text-white" style={{ backgroundColor: cardColor }}>
                <Icon size={28} className="mb-5 opacity-80" />
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="opacity-80 text-sm leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
        {buttonText && (
          <div className="text-center mt-12">
            <a href={buttonUrl} className="inline-block px-8 py-3 rounded-lg font-bold border-2" style={{ borderColor: theme?.primary || "#6366f1", color: theme?.primary || "#6366f1" }}>{buttonText}</a>
          </div>
        )}
      </div>
    </section>
  );
}
