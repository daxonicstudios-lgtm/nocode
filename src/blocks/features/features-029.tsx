import type { BlockProps } from "@/blocks/types";
import { Smile, MessageCircle, HandHeart } from "lucide-react";

const iconMap = [Smile, MessageCircle, HandHeart];

const colors = ["#fbbf24", "#34d399", "#f472b6"];

const defaults = [
  { title: "Friendly Onboarding", description: "A guided tour that makes getting started feel effortless." },
  { title: "Built-in Chat", description: "Talk to our team directly inside the app whenever you need help." },
  { title: "Community Driven", description: "Join thousands of creators sharing tips, templates, and feedback." },
];

export default function Features029(props: BlockProps) {
  const {
    theme,
    heading = "Made for Humans",
    subheading = "Technology should feel approachable, not intimidating.",
    items = defaults,
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-20 px-4 sm:px-6 lg:px-20">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
        <p className="text-lg opacity-70 mb-14 max-w-md mx-auto">{subheading}</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          {items.slice(0, 3).map((item, i) => {
            const Icon = iconMap[i % iconMap.length];
            const bg = colors[i % colors.length];
            return (
              <div key={i} className="flex flex-col items-center">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-5"
                  style={{ backgroundColor: bg, color: "#fff" }}
                >
                  <Icon size={26} />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title ?? defaults[i]?.title}</h3>
                <p className="text-sm opacity-60 leading-relaxed max-w-xs">{item.description ?? defaults[i]?.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
