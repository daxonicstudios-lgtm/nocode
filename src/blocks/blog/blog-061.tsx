import type { BlockProps } from "@/blocks/types";
import { ArrowUpRight } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "Rethinking Navigation Patterns", description: "How hamburger menus became the default — and why we challenged it.", label: "UX Design" },
  { title: "State Management Simplified", description: "Zustand, Jotai, or Redux? Our verdict after testing all three.", label: "Engineering" },
  { title: "The Psychology of Color in SaaS", description: "How your palette affects conversion rates more than you think.", label: "Design" },
];

export default function Blog061(props: BlockProps) {
  const { theme, heading = "Featured Reads", items = DEFAULT_ITEMS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10">{heading}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.slice(0, 3).map((post, i) => (
            <article key={i} className="group relative rounded-2xl overflow-hidden cursor-pointer">
              <div className="aspect-[4/3]" style={{ backgroundColor: theme?.secondary ?? "#e5e7eb" }} />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 flex flex-col justify-end p-6">
                <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-white/70">{String(post.label)}</span>
                  <h3 className="mt-1 text-lg font-bold text-white">{post.title}</h3>
                  <p className="mt-1 text-sm text-white/70">{post.description}</p>
                  <ArrowUpRight className="mt-3 w-5 h-5 text-white" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
