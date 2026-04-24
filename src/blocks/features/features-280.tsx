import type { BlockProps } from "@/blocks/types";
import { Star, Heart, Gem, Trophy } from "lucide-react";

const icons = [Star, Heart, Gem, Trophy];

export default function Features280(props: BlockProps) {
  const {
    theme,
    heading = "Spotlight Features",
    subheading = "The tools your competitors wish they had",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Priority Queue", description: "Smart task prioritization ensures the most important work gets done first." },
      { title: "Health Checks", description: "Continuous monitoring detects issues before they affect your users." },
      { title: "Premium Support", description: "Dedicated account manager and priority ticket resolution for all plans." },
      { title: "Achievement System", description: "Gamified milestones keep your team motivated and aligned on goals." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background || "#0a0a0a", color: theme?.foreground || "#fafafa" }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="text-lg opacity-50 max-w-2xl mx-auto">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            const isHighlighted = i === 0;
            return (
              <div key={i} className="rounded-xl p-6 relative overflow-hidden transition-all" style={{ backgroundColor: isHighlighted ? (theme?.primary || "#6366f1") : "#171717", border: isHighlighted ? "none" : "1px solid #262626" }}>
                {isHighlighted && <div className="absolute inset-0 opacity-30" style={{ background: "radial-gradient(circle at 50% 0%, rgba(255,255,255,0.4), transparent 70%)" }} />}
                <div className="relative">
                  <Icon size={24} className="mb-4" style={{ color: isHighlighted ? "#fff" : (theme?.primary || "#6366f1") }} />
                  <h3 className="font-semibold mb-2" style={{ color: isHighlighted ? "#fff" : (theme?.foreground || "#fafafa") }}>{item.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ opacity: isHighlighted ? 0.8 : 0.5 }}>{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
        {buttonText && (
          <div className="text-center mt-10">
            <a href={buttonUrl} className="inline-block px-6 py-3 rounded-lg text-white font-medium" style={{ backgroundColor: theme?.primary || "#6366f1" }}>{buttonText}</a>
          </div>
        )}
      </div>
    </section>
  );
}
