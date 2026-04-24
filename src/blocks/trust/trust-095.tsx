import type { BlockProps } from "@/blocks/types";
import { Star } from "lucide-react";
const DEFAULT_ITEMS = [
  { title: "4.9/5 on G2", description: "Based on 2,000+ reviews" },
  { title: "Product of the Year", description: "Golden Kitty Award 2024" },
  { title: "Top 100 Startup", description: "Forbes Africa 2024" },
];
export default function Trust095(props: BlockProps) {
  const { theme, heading = "Trust cards with awards", subheading = "Recognized by industry leaders", items = DEFAULT_ITEMS } = props;
  return (
    <section style={{ backgroundColor: theme?.accent ?? "#f8fafc", color: theme?.foreground }} className="px-4 py-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold">{heading}</h2>
          <p className="mt-2 text-sm opacity-60">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {items.slice(0, 3).map((item, i) => (
            <div key={i} className="rounded-xl p-6 text-center" style={{ backgroundColor: theme?.background ?? "#fff" }}>
              <Star className="w-6 h-6 mx-auto mb-3 text-yellow-500 fill-yellow-500" />
              <div className="font-bold">{item.title}</div>
              <div className="text-xs opacity-50 mt-1">{item.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
