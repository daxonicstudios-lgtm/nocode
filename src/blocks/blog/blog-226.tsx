import type { BlockProps } from "@/blocks/types";
import { ArrowUpRight } from "lucide-react";

const POSTS = [
  { title: "Atomic Design Methodology", description: "Build UIs from atoms to organisms to pages.", label: "Design" },
  { title: "Load Testing with k6", description: "Simulate thousands of users before your launch.", label: "Testing" },
  { title: "Product-Led Growth Playbook", description: "Let the product sell itself through exceptional UX.", label: "Growth" },
  { title: "TypeScript Generics Simplified", description: "Flexible, reusable type patterns demystified.", label: "TypeScript" },
];

export default function Blog226(props: BlockProps) {
  const { theme, heading = "Our Blog", items = POSTS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-16 sm:py-24">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-10">{heading}</h2>
        <div className="space-y-3">
          {items.slice(0, 4).map((post, i) => (
            <article key={i} className="group flex items-center justify-between p-5 rounded-xl border transition-all duration-300 hover:bg-black/5 hover:border-transparent cursor-pointer" style={{ borderColor: theme?.accent ?? "#e5e7eb" }}>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold uppercase" style={{ color: theme?.primary ?? "#6366f1" }}>{post.label}</span>
                </div>
                <h3 className="font-bold truncate">{post.title}</h3>
                <p className="text-sm opacity-60 truncate">{post.description}</p>
              </div>
              <ArrowUpRight className="w-5 h-5 shrink-0 ml-4 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
