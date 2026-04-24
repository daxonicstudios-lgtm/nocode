import type { BlockProps } from "@/blocks/types";
import { Folder, ArrowRight } from "lucide-react";

const TABS = ["Design", "Development", "Marketing", "Product"];
const DEFAULTS = [
  { title: "Typography Fundamentals", description: "Choosing and pairing fonts that communicate your brand.", label: "Design", value: "6 min" },
  { title: "Server Components Explained", description: "The future of React rendering and what it means for you.", label: "Development", value: "9 min" },
  { title: "Content Marketing Playbook", description: "Attract visitors with content that answers real questions.", label: "Marketing", value: "7 min" },
  { title: "Feature Prioritization Framework", description: "A practical system for deciding what to build next.", label: "Product", value: "5 min" },
];

export default function Blog264(props: BlockProps) {
  const { theme, heading = "Resource Library", items = DEFAULTS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-16">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">{heading}</h2>
        <div className="flex flex-col sm:flex-row gap-6">
          <nav className="sm:w-48 shrink-0 flex sm:flex-col gap-2 overflow-x-auto">
            {TABS.map((tab, i) => (
              <button key={tab} className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium whitespace-nowrap text-left" style={i === 0 ? { backgroundColor: theme?.primary ?? "#6366f1", color: "#fff" } : { backgroundColor: theme?.accent ?? "#f3f4f6" }}>
                <Folder className="w-4 h-4" />
                {tab}
              </button>
            ))}
          </nav>
          <div className="flex-1 space-y-3">
            {items.map((post, i) => (
              <article key={i} className="flex items-center justify-between p-4 rounded-xl border cursor-pointer hover:shadow-sm" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }}>
                <div>
                  <h3 className="font-semibold">{post.title}</h3>
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
