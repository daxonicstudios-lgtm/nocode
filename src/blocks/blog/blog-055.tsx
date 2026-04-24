import type { BlockProps } from "@/blocks/types";
import { Hash } from "lucide-react";

const PILLS = ["#design", "#engineering", "#startup", "#product", "#growth"];
const DEFAULT_ITEMS = [
  { title: "Component-Driven Development", description: "Build UIs faster with isolated, reusable components.", label: "#engineering" },
  { title: "Brand Identity on a Shoestring", description: "Create a cohesive brand without hiring an agency.", label: "#design" },
  { title: "Lean Startup Metrics", description: "The only four numbers early-stage founders should track.", label: "#startup" },
  { title: "Running Effective Sprint Retros", description: "Templates and tips for productive retrospectives.", label: "#product" },
];

export default function Blog055(props: BlockProps) {
  const { theme, heading = "Tagged Posts", items = DEFAULT_ITEMS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">{heading}</h2>
        <div className="flex gap-2 flex-wrap mb-10">
          {PILLS.map((p, i) => (
            <span key={i} className="flex items-center gap-1 px-3 py-1.5 rounded-md text-xs font-mono font-medium cursor-pointer hover:opacity-80 transition-opacity" style={{ backgroundColor: theme?.secondary ?? "#f1f5f9" }}>
              <Hash className="w-3 h-3" />{p.slice(1)}
            </span>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.slice(0, 4).map((post, i) => (
            <article key={i} className="group rounded-xl overflow-hidden" style={{ backgroundColor: theme?.accent ?? "#fafafa" }}>
              <div className="aspect-[2/1]" style={{ backgroundColor: theme?.secondary ?? "#e5e7eb" }} />
              <div className="p-6">
                <span className="text-xs font-mono opacity-50">{String(post.label)}</span>
                <h3 className="mt-2 font-bold text-lg group-hover:underline">{post.title}</h3>
                <p className="mt-2 text-sm opacity-60">{post.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
