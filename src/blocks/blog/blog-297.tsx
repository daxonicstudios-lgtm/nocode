import type { BlockProps } from "@/blocks/types";
import { ArrowRight } from "lucide-react";

const DEFAULTS = [
  { title: "Clarity over cleverness", description: "The best interfaces do not make you think. They just work.", value: "April 2026" },
  { title: "Ship daily", description: "Consistency beats intensity. Small improvements compound.", value: "March 2026" },
  { title: "Constraints breed creativity", description: "Mobile-first is not a limitation. It is a superpower.", value: "February 2026" },
  { title: "Listen more, build less", description: "Your users know what they need. Pay attention.", value: "January 2026" },
];

export default function Blog297(props: BlockProps) {
  const { theme, heading = "Thoughts", items = DEFAULTS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-20">
      <div className="max-w-lg mx-auto">
        <h2 className="text-4xl font-bold mb-12">{heading}</h2>
        <div className="space-y-10">
          {items.map((post, i) => (
            <article key={i} className="cursor-pointer group">
              <span className="text-xs opacity-30 font-mono">{String(post.value ?? "")}</span>
              <h3 className="text-xl font-semibold mt-1">{post.title}</h3>
              <p className="opacity-50 mt-1">{post.description}</p>
              <span className="inline-flex items-center gap-1 text-sm font-medium mt-2 opacity-0 group-hover:opacity-60 transition-opacity" style={{ color: theme?.primary ?? "#6366f1" }}>
                Read <ArrowRight className="w-3 h-3" />
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
