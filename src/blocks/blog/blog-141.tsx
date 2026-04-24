import type { BlockProps } from "@/blocks/types";
import { Cpu, ArrowRight } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "Quantum Computing for Developers", description: "A practical introduction to quantum algorithms and what they mean for software engineering.", label: "Emerging Tech · 10 min" },
  { title: "AI Model Deployment at Scale", description: "From training notebooks to production inference pipelines with low latency.", label: "MLOps · 8 min" },
  { title: "The Future of Browser APIs", description: "File System Access, Web Bluetooth, and powerful APIs shipping in 2026.", label: "Web Platform · 6 min" },
];

export default function Blog141(props: BlockProps) {
  const {
    theme,
    heading = "Tech Insider",
    subheading = "Deep technical insights for engineers",
    buttonText = "Read more",
    buttonUrl = "#",
    items = DEFAULT_ITEMS,
  } = props;

  return (
    <section className="px-5 py-20" style={{ backgroundColor: theme?.background ?? "#020617", color: theme?.foreground ?? "#e2e8f0" }}>
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-2">
          <Cpu className="w-6 h-6" style={{ color: theme?.accent ?? "#22d3ee" }} />
          <h2 className="text-3xl font-bold">{heading}</h2>
        </div>
        <p className="text-sm opacity-40 mb-12">{subheading}</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.slice(0, 3).map((item, i) => (
            <a
              key={i}
              href={buttonUrl}
              className="group block rounded-xl border p-5 hover:bg-white/5 transition-colors"
              style={{ borderColor: "rgba(255,255,255,0.08)" }}
            >
              <div
                className="h-36 rounded-lg mb-4"
                style={{
                  background: `linear-gradient(${120 + i * 30}deg, ${theme?.primary ?? "#6366f1"}30, ${theme?.accent ?? "#22d3ee"}20)`,
                }}
              />
              <p className="text-xs opacity-40">{String(item.label)}</p>
              <h3 className="mt-1 text-lg font-bold group-hover:underline">
                {item.title}
              </h3>
              <p className="mt-2 text-sm opacity-50 line-clamp-2">
                {item.description}
              </p>
              <span
                className="mt-3 inline-flex items-center gap-1 text-xs font-semibold"
                style={{ color: theme?.accent ?? "#22d3ee" }}
              >
                {buttonText} <ArrowRight className="w-3 h-3" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
