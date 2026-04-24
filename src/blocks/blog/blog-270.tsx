import type { BlockProps } from "@/blocks/types";
import { SlidersHorizontal, ChevronDown } from "lucide-react";

const DEFAULTS = [
  { title: "Micro-Interactions That Delight", description: "Small animations that make a big impact on user experience.", label: "UX", value: "Apr 5" },
  { title: "Database Design for Beginners", description: "Structure your data right from the start.", label: "Backend", value: "Apr 2" },
  { title: "Social Proof That Converts", description: "Testimonials, reviews, and trust badges that work.", label: "Marketing", value: "Mar 28" },
  { title: "Headless CMS Explained", description: "Separate your content from your presentation layer.", label: "Architecture", value: "Mar 22" },
];

export default function Blog270(props: BlockProps) {
  const { theme, heading = "All Articles", items = DEFAULTS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="text-3xl font-bold">{heading}</h2>
            <p className="text-sm opacity-50 mt-1">{items.length} articles</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm cursor-pointer border" style={{ borderColor: theme?.secondary ?? "#d1d5db" }}>
              <SlidersHorizontal className="w-4 h-4 opacity-50" />
              <span>Category</span>
              <ChevronDown className="w-3 h-3 opacity-40" />
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm cursor-pointer border" style={{ borderColor: theme?.secondary ?? "#d1d5db" }}>
              <span>Newest</span>
              <ChevronDown className="w-3 h-3 opacity-40" />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {items.map((post, i) => (
            <article key={i} className="rounded-xl overflow-hidden border cursor-pointer hover:shadow-md transition-shadow" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }}>
              <div className="aspect-[2/1]" style={{ backgroundColor: theme?.accent ?? "#f3f4f6" }} />
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium" style={{ color: theme?.primary ?? "#6366f1" }}>{String(post.label ?? "")}</span>
                  <span className="text-xs opacity-40">{String(post.value ?? "")}</span>
                </div>
                <h3 className="font-semibold">{post.title}</h3>
                <p className="text-sm opacity-60 mt-1">{post.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
