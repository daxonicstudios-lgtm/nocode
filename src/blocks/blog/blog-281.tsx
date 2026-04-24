import type { BlockProps } from "@/blocks/types";
import { ArrowRight, Clock } from "lucide-react";

const DEFAULTS = [
  { title: "The State of No-Code in 2026", description: "A comprehensive report on the no-code movement, market trends, and predictions for the future.", label: "Report", value: "15 min read" },
  { title: "Building Effective Landing Pages", description: "Seven principles every high-converting landing page follows.", label: "Guide", value: "8 min" },
  { title: "Mobile UX Best Practices", description: "Design for thumbs, not cursors.", label: "UX", value: "5 min" },
  { title: "Integrating Analytics", description: "Understand your visitors with proper tracking.", label: "Dev", value: "6 min" },
];

export default function Blog281(props: BlockProps) {
  const { theme, heading = "Featured & Latest", items = DEFAULTS } = props;
  const featured = items[0];
  const rest = items.slice(1);

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">{heading}</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <article className="rounded-2xl p-6 sm:p-8 flex flex-col justify-end min-h-[320px]" style={{ backgroundColor: theme?.primary ?? "#6366f1", color: "#fff" }}>
            <span className="text-xs font-bold uppercase tracking-wider opacity-70">{String(featured?.label ?? "")}</span>
            <h3 className="text-2xl sm:text-3xl font-bold mt-3">{featured?.title}</h3>
            <p className="opacity-80 mt-3">{featured?.description}</p>
            <div className="flex items-center gap-1 text-xs opacity-60 mt-4">
              <Clock className="w-3 h-3" />
              <span>{String(featured?.value ?? "")}</span>
            </div>
          </article>
          <div className="space-y-3">
            {rest.map((post, i) => (
              <article key={i} className="flex items-center justify-between gap-4 p-4 rounded-xl border cursor-pointer hover:shadow-sm" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }}>
                <div>
                  <span className="text-xs font-medium opacity-50">{String(post.label ?? "")}</span>
                  <h3 className="font-semibold mt-1">{post.title}</h3>
                  <p className="text-sm opacity-60 mt-0.5">{post.description}</p>
                </div>
                <ArrowRight className="w-4 h-4 opacity-30 shrink-0" />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
