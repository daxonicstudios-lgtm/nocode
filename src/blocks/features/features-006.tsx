import type { BlockProps } from "@/blocks/types";
import { TrendingUp, Megaphone, Target } from "lucide-react";

const icons = [TrendingUp, Megaphone, Target];
const accents = ["#6366f1", "#f59e0b", "#10b981"];

export default function Features006(props: BlockProps) {
  const {
    theme,
    heading = "Grow Faster",
    subheading = "Tools designed to accelerate every stage of your business",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Revenue Tracking", description: "See exactly where your money comes from with real-time dashboards and projections." },
      { title: "Marketing Suite", description: "Email campaigns, social scheduling, and ad management from a single screen." },
      { title: "Audience Targeting", description: "Reach the right people with smart segmentation based on behavior and demographics." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="text-lg opacity-70 max-w-lg mx-auto">{subheading}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            const accent = theme?.primary || accents[i % accents.length];
            return (
              <div key={i} className="rounded-xl p-6 bg-white/5 border border-black/5" style={{ borderTopWidth: 4, borderTopColor: accent }}>
                <Icon size={22} className="mb-4" style={{ color: accent }} />
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-sm opacity-60 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
