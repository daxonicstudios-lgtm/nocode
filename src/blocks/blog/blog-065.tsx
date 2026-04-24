import type { BlockProps } from "@/blocks/types";
import { Bookmark } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "Creating a Component Library", description: "From Figma tokens to production-ready React components.", label: "Tutorial" },
  { title: "Server Components Explained", description: "What they are, when to use them, and common pitfalls.", label: "Deep Dive" },
  { title: "Customer Interview Techniques", description: "Ask better questions and uncover real user pain points.", label: "Research" },
];

export default function Blog065(props: BlockProps) {
  const { theme, heading = "Saved Articles", items = DEFAULT_ITEMS } = props;

  return (
    <section style={{ backgroundColor: theme?.accent ?? "#fafafa", color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-10">{heading}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.slice(0, 3).map((post, i) => (
            <article key={i} className="group relative rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg" style={{ backgroundColor: theme?.background ?? "#fff" }}>
              <div className="aspect-[4/3] relative" style={{ backgroundColor: theme?.secondary ?? "#e5e7eb" }}>
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center bg-white/80 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Bookmark className="w-4 h-4" style={{ color: theme?.primary ?? "#6366f1" }} />
                </div>
              </div>
              <div className="p-5">
                <span className="px-2 py-0.5 text-[10px] font-bold uppercase rounded" style={{ backgroundColor: theme?.secondary ?? "#eef2ff", color: theme?.primary ?? "#6366f1" }}>{String(post.label)}</span>
                <h3 className="mt-3 font-bold text-base">{post.title}</h3>
                <p className="mt-1 text-sm opacity-60">{post.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
