import type { BlockProps } from "@/blocks/types";
import { ChevronsLeft, ChevronsRight, ChevronLeft, ChevronRight } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "API Rate Limiting Patterns", description: "Protect your services while keeping legitimate users happy.", label: "Backend" },
  { title: "Figma to Code Workflows", description: "Bridging the design-development gap with automation.", label: "Workflow" },
  { title: "Lighthouse Score Optimization", description: "Getting to 100 on all four Lighthouse audits.", label: "Performance" },
  { title: "Service Mesh Explained", description: "Istio, Linkerd, and when you actually need a service mesh.", label: "Infrastructure" },
  { title: "Component Composition Patterns", description: "Compound components, render props, and hooks compared.", label: "React" },
  { title: "Database Connection Pooling", description: "PgBouncer, Supavisor, and built-in pool management.", label: "Database" },
];

export default function Blog136(props: BlockProps) {
  const { theme, heading = "Articles", items = DEFAULT_ITEMS, buttonUrl = "#" } = props;

  return (
    <section className="px-5 py-20" style={{ backgroundColor: theme?.background ?? "#f1f5f9", color: theme?.foreground ?? "#0f172a" }}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10">{heading}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {items.slice(0, 6).map((item, i) => (
            <a key={i} href={buttonUrl} className="group bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-32 rounded-xl mb-3" style={{ backgroundColor: theme?.secondary ?? "#e2e8f0" }} />
              <span className="text-xs font-semibold" style={{ color: theme?.primary ?? "#6366f1" }}>{String(item.label)}</span>
              <h3 className="mt-1 font-bold group-hover:underline">{item.title}</h3>
              <p className="mt-1 text-sm opacity-50 line-clamp-2">{item.description}</p>
            </a>
          ))}
        </div>
        <div className="flex items-center justify-center gap-1">
          <button className="w-8 h-8 rounded-lg flex items-center justify-center opacity-30"><ChevronsLeft className="w-4 h-4" /></button>
          <button className="w-8 h-8 rounded-lg flex items-center justify-center opacity-30"><ChevronLeft className="w-4 h-4" /></button>
          {[1, 2, 3, 4, 5].map((n) => (
            <button key={n} className="w-8 h-8 rounded-lg text-sm font-medium" style={n === 1 ? { backgroundColor: theme?.primary ?? "#6366f1", color: "#fff" } : {}}>
              {n}
            </button>
          ))}
          <button className="w-8 h-8 rounded-lg flex items-center justify-center"><ChevronRight className="w-4 h-4" /></button>
          <button className="w-8 h-8 rounded-lg flex items-center justify-center"><ChevronsRight className="w-4 h-4" /></button>
        </div>
      </div>
    </section>
  );
}
