import type { BlockProps } from "@/blocks/types";
import { Sparkles, Heart, Flame } from "lucide-react";

const iconMap = [Sparkles, Heart, Flame];
const emojiColors = ["#fbbf24", "#f472b6", "#f97316"];

const defaultItems = [
  { title: "Magic Editor", description: "Drag, drop, and delight. Our editor feels like play, not work." },
  { title: "Built with Love", description: "Every detail is crafted with care so your site feels truly personal." },
  { title: "Blazing Fast", description: "Optimized to the core. Your pages load before visitors can blink." },
];

export default function Features035(props: BlockProps) {
  const {
    theme,
    heading = "Why Creators Love Us",
    subheading = "The fun way to build stunning websites",
    items = defaultItems,
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4 sm:py-24">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-3">{heading}</h2>
        <p className="text-lg opacity-60 mb-14 max-w-xl mx-auto">{subheading}</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {items.map((item, i) => {
            const Icon = iconMap[i % iconMap.length];
            const color = emojiColors[i % emojiColors.length];
            return (
              <div key={i} className="rounded-2xl p-8 text-center hover:-translate-y-1 transition-transform" style={{ backgroundColor: `${color}10` }}>
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
                  style={{ backgroundColor: `${color}25` }}
                >
                  <Icon className="w-8 h-8" style={{ color }} />
                </div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="opacity-55 text-sm leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
