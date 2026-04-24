import type { BlockProps } from "@/blocks/types";
import { Eye } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "Building a Culture of Shipping", description: "Small batches, fast feedback, and the courage to release imperfect work.", label: "Team" },
  { title: "Dark Mode Done Right", description: "Lessons from implementing system-aware theme switching.", label: "Frontend" },
  { title: "Pricing Page Experiments", description: "We A/B tested 14 pricing layouts. Here is what won.", label: "Growth" },
  { title: "Internationalization from Day One", description: "Supporting RTL, multi-currency, and locale-aware formatting.", label: "Engineering" },
];

export default function Blog062(props: BlockProps) {
  const { theme, heading = "From Our Blog", items = DEFAULT_ITEMS } = props;

  return (
    <section style={{ backgroundColor: theme?.accent ?? "#f8fafc", color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">{heading}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {items.slice(0, 4).map((post, i) => (
            <article key={i} className="group relative rounded-xl overflow-hidden" style={{ backgroundColor: theme?.background ?? "#fff" }}>
              <div className="aspect-[16/9]" style={{ backgroundColor: theme?.secondary ?? "#e5e7eb" }} />
              <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/50 transition-colors duration-300">
                <Eye className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-5">
                <span className="text-[10px] font-bold uppercase tracking-wider opacity-40">{String(post.label)}</span>
                <h3 className="mt-1 font-bold text-base">{post.title}</h3>
                <p className="mt-1 text-sm opacity-60 line-clamp-2">{post.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
