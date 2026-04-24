import type { BlockProps } from "@/blocks/types";
import { TrendingUp } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "WebAssembly Beyond the Browser", description: "Running Wasm on servers, IoT devices, and embedded systems.", label: "Wasm" },
  { title: "Monorepo Strategies That Scale", description: "Turborepo, Nx, and Bazel compared for large codebases.", label: "DevOps" },
  { title: "Animation Performance Secrets", description: "GPU-accelerated transitions without janky frame drops.", label: "CSS" },
  { title: "Building a Design System CLI", description: "Automate component scaffolding and docs generation.", label: "Tooling" },
];

export default function Blog107(props: BlockProps) {
  const { theme, heading = "What's Trending", items = DEFAULT_ITEMS } = props;

  return (
    <section
      className="px-5 py-20"
      style={{
        background: theme?.background ?? "linear-gradient(135deg, #020617, #0f172a, #1e293b)",
        color: theme?.foreground ?? "#f1f5f9",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-10">
          <TrendingUp className="w-6 h-6" style={{ color: theme?.accent ?? "#22d3ee" }} />
          <h2 className="text-3xl font-black">{heading}</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.slice(0, 4).map((item, i) => (
            <article
              key={i}
              className="rounded-2xl p-5 backdrop-blur-xl border border-white/5 hover:border-white/20 transition-all group"
              style={{ background: "rgba(255,255,255,0.04)" }}
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center text-sm font-black mb-4"
                style={{ background: `${theme?.primary ?? "#6366f1"}25`, color: theme?.primary ?? "#818cf8" }}
              >
                #{i + 1}
              </div>
              <span className="text-xs font-medium opacity-40">{String(item.label)}</span>
              <h3 className="mt-1 text-base font-bold leading-snug group-hover:underline">{item.title}</h3>
              <p className="mt-2 text-xs opacity-50 line-clamp-2">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
