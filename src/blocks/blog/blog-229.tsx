import type { BlockProps } from "@/blocks/types";
import { Layers } from "lucide-react";

const POSTS = [
  { title: "Schema Design for NoSQL", description: "Model data for reads, not relations.", label: "Database" },
  { title: "Animated Micro-Interactions", description: "Subtle motion that delights users and guides attention.", label: "UI" },
  { title: "Retention Over Acquisition", description: "Why keeping users is more valuable than finding new ones.", label: "Growth" },
  { title: "Zero Downtime Deployments", description: "Blue-green, canary, and rolling deploy strategies.", label: "DevOps" },
];

export default function Blog229(props: BlockProps) {
  const { theme, heading = "Blog Grid", items = POSTS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-16 sm:py-24">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-10">{heading}</h2>
        <div className="grid gap-5 sm:grid-cols-2">
          {items.slice(0, 4).map((post, i) => (
            <article key={i} className="group rounded-2xl border p-5 transition-all duration-300 hover:shadow-lg cursor-pointer" style={{ borderColor: theme?.accent ?? "#e5e7eb" }}>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:rotate-12" style={{ backgroundColor: theme?.primary ?? "#6366f1" }}>
                  <Layers className="w-5 h-5 text-white" />
                </div>
                <span className="text-xs font-bold uppercase opacity-60">{post.label}</span>
              </div>
              <h3 className="text-lg font-bold transition-colors duration-300" style={{ color: undefined }}>{post.title}</h3>
              <p className="mt-2 text-sm opacity-70">{post.description}</p>
              <div className="mt-4 h-0.5 w-0 group-hover:w-1/2 transition-all duration-500 rounded" style={{ backgroundColor: theme?.primary ?? "#6366f1" }} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
