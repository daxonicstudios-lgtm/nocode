import type { BlockProps } from "@/blocks/types";
import { ArrowLeft, ArrowRight } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "Fullstack Type Safety", description: "From database schema to UI props, every layer type-checked.", label: "TypeScript" },
  { title: "Design System Versioning", description: "Semantic versioning strategies for component libraries.", label: "Design Ops" },
  { title: "Serverless Cold Starts", description: "Measuring and mitigating startup latency in cloud functions.", label: "Cloud" },
  { title: "Content Modeling Best Practices", description: "Structuring headless CMS content for maximum flexibility.", label: "CMS" },
  { title: "Bundle Size Optimization", description: "Tree shaking, code splitting, and lazy loading in practice.", label: "Performance" },
  { title: "Composable Commerce", description: "MACH architecture for modern e-commerce platforms.", label: "E-commerce" },
];

export default function Blog135(props: BlockProps) {
  const { theme, heading = "Posts", subheading = "Showing 1-6 of 72 articles", items = DEFAULT_ITEMS, buttonUrl = "#" } = props;

  return (
    <section className="px-5 py-20" style={{ backgroundColor: theme?.background ?? "#18181b", color: theme?.foreground ?? "#fafafa" }}>
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-3xl font-bold">{heading}</h2>
          <span className="text-xs opacity-30">{subheading}</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {items.slice(0, 6).map((item, i) => (
            <a key={i} href={buttonUrl} className="group p-5 rounded-xl border hover:bg-white/5 transition-colors" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
              <span className="text-xs font-medium" style={{ color: theme?.accent ?? "#22d3ee" }}>{String(item.label)}</span>
              <h3 className="mt-2 font-bold group-hover:underline">{item.title}</h3>
              <p className="mt-1 text-sm opacity-40 line-clamp-2">{item.description}</p>
            </a>
          ))}
        </div>
        <div className="flex items-center justify-between">
          <button className="flex items-center gap-2 text-sm opacity-40">
            <ArrowLeft className="w-4 h-4" /> Previous
          </button>
          <div className="flex gap-1.5">
            {[1, 2, 3, 4, 5].map((n) => (
              <div key={n} className="w-2 h-2 rounded-full" style={{ backgroundColor: n === 1 ? (theme?.primary ?? "#6366f1") : "rgba(255,255,255,0.15)" }} />
            ))}
          </div>
          <button className="flex items-center gap-2 text-sm font-medium" style={{ color: theme?.primary ?? "#818cf8" }}>
            Next <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
