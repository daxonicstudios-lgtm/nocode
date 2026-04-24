import type { BlockProps } from "@/blocks/types";
import { ArrowUpRight } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "From Idea to Launch in a Weekend", description: "A step-by-step walkthrough of our 48-hour sprint process.", label: "Product", value: "Apr 15" },
  { title: "The Psychology of Color in Web Design", description: "How color choices influence user behavior and trust.", label: "Design", value: "Apr 10" },
  { title: "Optimizing Performance on Low-End Devices", description: "Techniques to keep your site fast on budget smartphones.", label: "Engineering", value: "Apr 5" },
  { title: "Community-Led Growth Strategies", description: "Building a loyal user base through authentic engagement.", label: "Marketing", value: "Mar 28" },
];

export default function Blog154(props: BlockProps) {
  const { theme, heading = "Recent Writings", items = DEFAULT_ITEMS, buttonUrl = "#" } = props;

  return (
    <section style={{ backgroundColor: theme?.background ?? "#e6e6e6", color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-10">{heading}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {items.slice(0, 4).map((item, i) => (
            <a
              key={i}
              href={buttonUrl}
              className="rounded-2xl p-6 block group"
              style={{
                backgroundColor: theme?.background ?? "#e6e6e6",
                boxShadow: "7px 7px 14px #c5c5c5, -7px -7px 14px #ffffff",
              }}
            >
              <div className="flex items-start justify-between">
                <span className="text-xs font-bold uppercase" style={{ color: theme?.primary ?? "#7c3aed" }}>{item.label}</span>
                <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="mt-3 font-bold text-lg leading-snug">{item.title}</h3>
              <p className="mt-2 text-sm opacity-60">{item.description}</p>
              <span className="mt-3 block text-xs opacity-40">{item.value}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
