import type { BlockProps } from "@/blocks/types";
import { ChevronRight } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "Founding the Company", description: "Two friends, a shared frustration, and a napkin sketch that became a product.", label: "2024" },
  { title: "First Paying Customer", description: "A small bakery in Nairobi became our first believer.", label: "Early 2025" },
  { title: "Team Grows to Ten", description: "Engineers, designers, and a community manager join the mission.", label: "Mid 2025" },
  { title: "Series A Preparation", description: "Building the metrics, team, and story for institutional investors.", label: "2026" },
];

export default function Blog060(props: BlockProps) {
  const { theme, heading = "Our Story So Far", items = DEFAULT_ITEMS, buttonText = "View all updates" } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-12">{heading}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px" style={{ backgroundColor: theme?.secondary ?? "#e5e7eb" }}>
          {items.slice(0, 4).map((post, i) => (
            <article key={i} className="p-8" style={{ backgroundColor: theme?.background ?? "#fff" }}>
              <span className="text-2xl font-black opacity-20">{String(post.label)}</span>
              <h3 className="mt-3 text-lg font-bold">{post.title}</h3>
              <p className="mt-2 text-sm opacity-60">{post.description}</p>
            </article>
          ))}
        </div>
        <div className="mt-8 text-center">
          <a href="#" className="inline-flex items-center gap-1 text-sm font-semibold" style={{ color: theme?.primary ?? "#6366f1" }}>
            {buttonText} <ChevronRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
