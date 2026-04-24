import type { BlockProps } from "@/blocks/types";
import { Sparkles, Calendar } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "AI-Powered Code Reviews", description: "Using machine learning to catch bugs before they ship.", label: "Jan 2026", value: "AI" },
  { title: "Design Systems at Scale", description: "Managing tokens, components, and documentation for 50 teams.", label: "Feb 2026", value: "Design" },
  { title: "The Future of Serverless", description: "Beyond functions: full applications without infrastructure.", label: "Mar 2026", value: "Cloud" },
  { title: "Progressive Web Apps in 2026", description: "PWAs now rival native apps in capability and performance.", label: "Apr 2026", value: "Mobile" },
];

export default function Blog159(props: BlockProps) {
  const { theme, heading = "Curated Reads", items = DEFAULT_ITEMS } = props;

  return (
    <section style={{ backgroundColor: theme?.background ?? "#e3e3e3", color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-2 mb-10">
          <Sparkles className="w-6 h-6" style={{ color: theme?.primary ?? "#f59e0b" }} />
          <h2 className="text-3xl font-bold">{heading}</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {items.slice(0, 4).map((item, i) => (
            <article
              key={i}
              className="rounded-2xl p-6 flex gap-4"
              style={{ backgroundColor: theme?.background ?? "#e3e3e3", boxShadow: "6px 6px 12px #c1c1c1, -6px -6px 12px #ffffff" }}
            >
              <div
                className="w-14 h-14 rounded-xl shrink-0 flex items-center justify-center text-sm font-bold"
                style={{
                  backgroundColor: theme?.background ?? "#e3e3e3",
                  boxShadow: "inset 3px 3px 6px #c1c1c1, inset -3px -3px 6px #ffffff",
                  color: theme?.primary ?? "#f59e0b",
                }}
              >
                {item.value}
              </div>
              <div>
                <h3 className="font-bold">{item.title}</h3>
                <p className="text-sm opacity-60 mt-1">{item.description}</p>
                <span className="flex items-center gap-1 text-xs opacity-40 mt-2"><Calendar className="w-3 h-3" />{item.label}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
