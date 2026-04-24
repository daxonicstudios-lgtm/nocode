import type { BlockProps } from "@/blocks/types";
import { Tag, ChevronRight } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "Mastering Tailwind CSS Utilities", description: "Advanced tips for productive utility-first styling.", label: "Tutorial", value: "10 min read" },
  { title: "State Management Patterns Compared", description: "Zustand vs Redux vs Jotai for real-world apps.", label: "Deep Dive", value: "12 min read" },
  { title: "Shipping Faster with Feature Flags", description: "Decouple deployment from release to reduce risk.", label: "DevOps", value: "6 min read" },
];

export default function Blog156(props: BlockProps) {
  const { theme, heading = "Developer Blog", subheading = "Technical insights and tutorials", items = DEFAULT_ITEMS, buttonUrl = "#" } = props;

  return (
    <section style={{ backgroundColor: theme?.background ?? "#e8e8e8", color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold">{heading}</h2>
        <p className="text-sm opacity-60 mt-1 mb-10">{subheading}</p>
        <div className="space-y-5">
          {items.slice(0, 3).map((item, i) => (
            <a
              key={i}
              href={buttonUrl}
              className="rounded-xl p-5 flex items-center gap-4 group"
              style={{
                backgroundColor: theme?.background ?? "#e8e8e8",
                boxShadow: "5px 5px 10px #cbcbcb, -5px -5px 10px #ffffff",
              }}
            >
              <div
                className="w-10 h-10 rounded-lg shrink-0 flex items-center justify-center"
                style={{
                  backgroundColor: theme?.background ?? "#e8e8e8",
                  boxShadow: "inset 2px 2px 5px #cbcbcb, inset -2px -2px 5px #ffffff",
                }}
              >
                <Tag className="w-4 h-4" style={{ color: theme?.primary ?? "#6366f1" }} />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold truncate">{item.title}</h3>
                <p className="text-sm opacity-60 truncate">{item.description}</p>
              </div>
              <div className="text-right shrink-0 hidden sm:block">
                <span className="text-xs opacity-40">{item.value}</span>
              </div>
              <ChevronRight className="w-4 h-4 opacity-30 group-hover:opacity-70 transition-opacity shrink-0" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
