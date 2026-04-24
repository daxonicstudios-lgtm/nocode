import type { BlockProps } from "@/blocks/types";
import { ArrowRight } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "Micro Frontends at Scale", description: "Module federation and single-spa for enterprise applications.", label: "Architecture" },
  { title: "E2E Testing with Playwright", description: "Cross-browser testing automation that actually works.", label: "Testing" },
  { title: "Database Sharding Strategies", description: "Horizontal partitioning for high-traffic applications.", label: "Database" },
  { title: "Tailwind CSS Custom Plugins", description: "Extending the utility framework with your own utilities.", label: "CSS" },
  { title: "WebRTC Fundamentals", description: "Peer-to-peer communication for video, audio, and data.", label: "Real-time" },
  { title: "React 20 New Features", description: "A rundown of the newest additions to the React ecosystem.", label: "React" },
  { title: "Edge Caching Strategies", description: "Cache invalidation patterns for CDN-first architectures.", label: "Performance" },
  { title: "Functional Error Handling", description: "Result types and Either monads in TypeScript.", label: "TypeScript" },
  { title: "Platform Engineering", description: "Internal developer platforms that increase velocity.", label: "DevOps" },
];

export default function Blog139(props: BlockProps) {
  const { theme, heading = "All Articles", items = DEFAULT_ITEMS, buttonUrl = "#" } = props;

  return (
    <section className="px-5 py-20" style={{ backgroundColor: theme?.background ?? "#fafaf9", color: theme?.foreground ?? "#1c1917" }}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10">{heading}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {items.slice(0, 9).map((item, i) => (
            <a key={i} href={buttonUrl} className="group p-4 rounded-lg border hover:shadow transition-shadow bg-white" style={{ borderColor: `${theme?.foreground ?? "#1c1917"}06` }}>
              <span className="text-xs font-medium opacity-40">{String(item.label)}</span>
              <h3 className="mt-1 text-sm font-bold group-hover:underline line-clamp-1">{item.title}</h3>
              <p className="mt-0.5 text-xs opacity-40 line-clamp-2">{item.description}</p>
            </a>
          ))}
        </div>
        <div className="flex items-center justify-center gap-2">
          {[1, 2, 3].map((n) => (
            <button key={n} className="w-10 h-10 rounded-xl text-sm font-bold" style={n === 1 ? { backgroundColor: theme?.foreground ?? "#1c1917", color: theme?.background ?? "#fafaf9" } : { border: `1px solid ${theme?.foreground ?? "#1c1917"}12` }}>
              {n}
            </button>
          ))}
          <span className="opacity-30 mx-1">...</span>
          <button className="w-10 h-10 rounded-xl text-sm font-bold border" style={{ borderColor: `${theme?.foreground ?? "#1c1917"}12` }}>8</button>
          <button className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: theme?.primary ?? "#6366f1", color: "#fff" }}>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
