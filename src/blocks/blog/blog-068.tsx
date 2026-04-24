import type { BlockProps } from "@/blocks/types";
import { Timer, TrendingUp } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "Building Resilient APIs", description: "Rate limiting, circuit breakers, and retry strategies for production.", label: "11 min" },
  { title: "The Art of Code Review", description: "Give feedback that helps people grow, not just fixes bugs.", label: "5 min" },
  { title: "Landing Page Conversion Tips", description: "Above the fold, social proof, and the one CTA rule.", label: "4 min" },
  { title: "Monitoring with OpenTelemetry", description: "Distributed tracing setup for modern microservices.", label: "14 min" },
];

export default function Blog068(props: BlockProps) {
  const { theme, heading = "Estimated Reading Times", items = DEFAULT_ITEMS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-10">
          <TrendingUp className="w-6 h-6" style={{ color: theme?.primary ?? "#6366f1" }} />
          <h2 className="text-2xl sm:text-3xl font-bold">{heading}</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {items.slice(0, 4).map((post, i) => (
            <article key={i} className="flex items-start gap-4 p-5 rounded-xl" style={{ backgroundColor: theme?.accent ?? "#f8fafc" }}>
              <div className="w-14 h-14 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: theme?.primary ?? "#6366f1" }}>
                <Timer className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-sm">{post.title}</h3>
                  <span className="text-[10px] font-mono font-bold shrink-0 ml-2" style={{ color: theme?.primary ?? "#6366f1" }}>{String(post.label)}</span>
                </div>
                <p className="mt-1 text-xs opacity-60">{post.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
