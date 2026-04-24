import type { BlockProps } from "@/blocks/types";
import { Calendar } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "Product Update: New Editor Features", description: "We just shipped drag-and-drop, undo/redo, and 50 new blocks.", label: "Apr 15, 2026" },
  { title: "How to Build a Landing Page in 5 Minutes", description: "Step-by-step guide to creating high-converting pages.", label: "Apr 10, 2026" },
  { title: "Customer Story: Lagos Fashion Co", description: "How a fashion brand built their entire site on mobile.", label: "Apr 5, 2026" },
];

export default function Blog105(props: BlockProps) {
  const { theme, heading = "Latest from our blog", subheading = "Thoughts, stories, and ideas from our team.", items = DEFAULT_ITEMS } = props;

  return (
    <section style={{ backgroundColor: theme?.accent ?? "#f8fafc", color: theme?.foreground }} className="px-4 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold">{heading}</h2>
          <p className="mt-3 opacity-60">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.slice(0, 3).map((post, i) => (
            <article key={i} className="rounded-2xl p-6 shadow-sm" style={{ backgroundColor: theme?.background ?? "#fff" }}>
              <div className="aspect-[3/2] rounded-xl mb-4" style={{ backgroundColor: theme?.secondary ?? "#e5e7eb" }} />
              <div className="flex items-center gap-1 text-xs opacity-50 mb-2">
                <Calendar className="w-3 h-3" /> {String(post.label ?? "")}
              </div>
              <h3 className="font-bold text-lg">{post.title}</h3>
              <p className="mt-2 text-sm opacity-70">{post.description}</p>
              <a href="#" className="mt-4 inline-block text-sm font-semibold" style={{ color: theme?.primary ?? "#6366f1" }}>Read more</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
