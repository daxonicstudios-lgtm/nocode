import type { BlockProps } from "@/blocks/types";
import { Clock } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "How We Scaled to One Million Page Views", description: "The infrastructure changes, caching strategies, and architectural decisions that made it possible.", label: "Engineering · 12 min", imageUrl: "", url: "#" },
  { title: "Designing a Color System for Accessibility", description: "Building palettes that look great and pass WCAG standards.", label: "Design · 6 min", imageUrl: "", url: "#" },
  { title: "What Our Users Taught Us About Simplicity", description: "Feedback loops that reshaped our entire product philosophy.", label: "Product · 5 min", imageUrl: "", url: "#" },
  { title: "Pricing Strategies for SaaS in Emerging Markets", description: "How to set prices that work for your business and your customers.", label: "Business · 8 min", imageUrl: "", url: "#" },
];

export default function Blog012(props: BlockProps) {
  const { theme, heading = "Editors' Picks", items = DEFAULT_ITEMS } = props;

  const featured = items[0];
  const rest = items.slice(1, 4);

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-10">{heading}</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <a href={featured?.url ?? "#"} className="group lg:col-span-2">
            <div className="aspect-video rounded-2xl overflow-hidden mb-4" style={{ backgroundColor: theme?.secondary ?? "#e5e7eb" }}>
              {featured?.imageUrl && <img src={featured.imageUrl} alt={featured.title ?? ""} className="w-full h-full object-cover" />}
            </div>
            <span className="text-xs font-bold uppercase tracking-wider" style={{ color: theme?.primary ?? "#6366f1" }}>{String(featured?.label ?? "")}</span>
            <h3 className="mt-2 text-2xl font-bold leading-snug group-hover:underline">{featured?.title}</h3>
            <p className="mt-2 opacity-70 line-clamp-2">{featured?.description}</p>
          </a>
          <div className="space-y-5">
            {rest.map((post, i) => (
              <a key={i} href={post.url ?? "#"} className="group block border-b pb-5 last:border-0" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }}>
                <h3 className="font-bold leading-snug group-hover:underline">{post.title}</h3>
                <p className="mt-1 text-sm opacity-60 line-clamp-2">{post.description}</p>
                <div className="mt-2 flex items-center gap-1 text-xs opacity-40">
                  <Clock className="w-3 h-3" /> {String(post.label ?? "")}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
