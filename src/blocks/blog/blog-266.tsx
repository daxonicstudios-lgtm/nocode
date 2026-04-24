import type { BlockProps } from "@/blocks/types";
import { ChevronRight } from "lucide-react";

const TABS = ["For You", "Technology", "Design", "Business", "Lifestyle"];
const DEFAULTS = [
  { title: "AI-Powered Design Suggestions", description: "Let the machine recommend layouts that convert better.", label: "Technology", value: "6 min" },
  { title: "Minimalist Design Trends 2026", description: "Less is more. The design world agrees.", label: "Design", value: "4 min" },
  { title: "Freelance Pricing Guide", description: "How to charge what you are worth as a no-code builder.", label: "Business", value: "8 min" },
  { title: "Work-Life Balance for Creators", description: "Burnout is real. Protect your energy.", label: "Lifestyle", value: "5 min" },
];

export default function Blog266(props: BlockProps) {
  const { theme, heading = "Discover", items = DEFAULTS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">{heading}</h2>
        <div className="flex gap-1 mb-8 overflow-x-auto pb-2 -mx-4 px-4">
          {TABS.map((tab, i) => (
            <button key={tab} className="px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap" style={i === 0 ? { backgroundColor: theme?.foreground ?? "#111", color: theme?.background ?? "#fff" } : { border: `1px solid ${theme?.secondary ?? "#d1d5db"}` }}>
              {tab}
            </button>
          ))}
        </div>
        <div className="divide-y" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }}>
          {items.map((post, i) => (
            <article key={i} className="py-5 flex items-start justify-between gap-4 cursor-pointer group">
              <div className="flex-1">
                <span className="text-xs opacity-50">{String(post.label ?? "")}</span>
                <h3 className="font-semibold text-lg mt-0.5 group-hover:underline">{post.title}</h3>
                <p className="text-sm opacity-60 mt-1">{post.description}</p>
                <span className="text-xs opacity-30 mt-2 block">{String(post.value ?? "")} read</span>
              </div>
              <div className="w-20 h-20 rounded-lg shrink-0" style={{ backgroundColor: theme?.accent ?? "#f3f4f6" }} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
