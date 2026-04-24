import type { BlockProps } from "@/blocks/types";
import { ArrowLeft, ArrowRight } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "Kubernetes for Small Teams", description: "When K8s makes sense and when simpler solutions win.", label: "Infrastructure" },
  { title: "Progressive Enhancement in 2026", description: "Building robust web experiences that work for everyone.", label: "Web" },
  { title: "Technical Writing That Ships", description: "Documentation strategies that keep pace with rapid releases.", label: "Process" },
  { title: "GraphQL Subscriptions", description: "Real-time data with GraphQL over WebSockets.", label: "API" },
];

export default function Blog132(props: BlockProps) {
  const { theme, heading = "Blog", subheading = "Page 1 of 12", items = DEFAULT_ITEMS, buttonUrl = "#" } = props;

  return (
    <section className="px-5 py-20" style={{ backgroundColor: theme?.background ?? "#fafafa", color: theme?.foreground ?? "#18181b" }}>
      <div className="max-w-5xl mx-auto">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-3xl font-bold">{heading}</h2>
          <span className="text-sm opacity-40">{subheading}</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12">
          {items.slice(0, 4).map((item, i) => (
            <a key={i} href={buttonUrl} className="group p-5 rounded-xl border hover:shadow-md transition-shadow bg-white" style={{ borderColor: `${theme?.foreground ?? "#18181b"}08` }}>
              <span className="text-xs font-medium px-2 py-0.5 rounded" style={{ backgroundColor: `${theme?.primary ?? "#6366f1"}10`, color: theme?.primary ?? "#6366f1" }}>
                {String(item.label)}
              </span>
              <h3 className="mt-3 text-lg font-bold group-hover:underline">{item.title}</h3>
              <p className="mt-1 text-sm opacity-50">{item.description}</p>
            </a>
          ))}
        </div>
        <div className="flex items-center justify-between">
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg border text-sm font-medium" style={{ borderColor: `${theme?.foreground ?? "#18181b"}15` }}>
            <ArrowLeft className="w-4 h-4" /> Previous
          </button>
          <div className="hidden sm:flex items-center gap-1">
            {[1, 2, 3, "...", 12].map((n, i) => (
              <button key={i} className="w-8 h-8 rounded-md text-sm" style={n === 1 ? { backgroundColor: theme?.primary ?? "#6366f1", color: "#fff" } : {}}>
                {n}
              </button>
            ))}
          </div>
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium" style={{ backgroundColor: theme?.primary ?? "#6366f1", color: "#fff" }}>
            Next <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
