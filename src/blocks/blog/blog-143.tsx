import type { BlockProps } from "@/blocks/types";
import { ChefHat, Clock, Users } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "One-Pan Mediterranean Chicken", description: "A simple weeknight dinner packed with olives, tomatoes, and fresh herbs.", label: "Dinner", value: "35 min" },
  { title: "Sourdough for Beginners", description: "Your first loaf from starter to slice, with troubleshooting tips.", label: "Baking", value: "4 hours" },
  { title: "Plant-Based Meal Prep", description: "Five days of balanced plant-based meals prepared in two hours.", label: "Meal Prep", value: "2 hours" },
];

export default function Blog143(props: BlockProps) {
  const { theme, heading = "From the Kitchen", subheading = "Recipes, techniques, and food stories", items = DEFAULT_ITEMS, buttonUrl = "#" } = props;

  return (
    <section className="px-5 py-20" style={{ backgroundColor: theme?.background ?? "#faf5ef", color: theme?.foreground ?? "#3b1f0b" }}>
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-2">
          <ChefHat className="w-7 h-7" style={{ color: theme?.accent ?? "#c2410c" }} />
          <h2 className="text-3xl sm:text-4xl font-bold">{heading}</h2>
        </div>
        <p className="text-sm opacity-50 mb-12">{subheading}</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.slice(0, 3).map((item, i) => (
            <a key={i} href={buttonUrl} className="group block rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="h-44" style={{ backgroundColor: `${theme?.secondary ?? "#e8ddd0"}` }} />
              <div className="p-5">
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full" style={{ backgroundColor: `${theme?.primary ?? "#c2410c"}15`, color: theme?.primary ?? "#c2410c" }}>
                  {String(item.label)}
                </span>
                <h3 className="mt-2 text-lg font-bold group-hover:underline">{item.title}</h3>
                <p className="mt-1 text-sm opacity-50 line-clamp-2">{item.description}</p>
                <div className="flex items-center gap-4 mt-3 text-xs opacity-40">
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{String(item.value)}</span>
                  <span className="flex items-center gap-1"><Users className="w-3 h-3" />Serves 4</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
