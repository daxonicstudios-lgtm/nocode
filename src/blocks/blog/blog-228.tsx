import type { BlockProps } from "@/blocks/types";
import { Plus } from "lucide-react";

const POSTS = [
  { title: "Monorepo Management", description: "Turborepo, Nx, and workspace strategies for large codebases.", label: "DevEx" },
  { title: "Writing for Developers", description: "Technical blog posts that educate and engage.", label: "Content" },
  { title: "The Builder's Mindset", description: "Why shipping fast and learning faster wins every time.", label: "Mindset" },
];

export default function Blog228(props: BlockProps) {
  const { theme, heading = "Read Our Blog", items = POSTS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-16 sm:py-24">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold">{heading}</h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {items.slice(0, 3).map((post, i) => (
            <article key={i} className="group relative rounded-2xl border p-6 text-left overflow-hidden transition-all duration-300 hover:border-transparent cursor-pointer" style={{ borderColor: theme?.accent ?? "#e5e7eb" }}>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: `linear-gradient(135deg, ${theme?.primary ?? "#6366f1"}10, ${theme?.accent ?? "#e5e7eb"}30)` }} />
              <div className="relative z-10">
                <div className="w-10 h-10 rounded-full border-2 flex items-center justify-center mb-4 transition-all duration-300 group-hover:rotate-90" style={{ borderColor: theme?.primary ?? "#6366f1" }}>
                  <Plus className="w-5 h-5" style={{ color: theme?.primary ?? "#6366f1" }} />
                </div>
                <span className="text-xs font-bold uppercase opacity-50">{post.label}</span>
                <h3 className="mt-2 text-lg font-bold">{post.title}</h3>
                <p className="mt-2 text-sm opacity-70">{post.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
