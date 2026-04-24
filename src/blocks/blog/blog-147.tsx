import type { BlockProps } from "@/blocks/types";
import { TrendingUp, BarChart3, ArrowRight } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "Passive Income Strategies for 2026", description: "Dividend investing, index funds, and alternative assets compared for long-term growth.", label: "Investing" },
  { title: "Understanding Compound Interest", description: "The single most powerful concept in personal finance, explained with real examples.", label: "Basics" },
  { title: "Tax-Efficient Portfolio Management", description: "Maximize after-tax returns with smart asset location and harvesting strategies.", label: "Tax Planning" },
];

export default function Blog147(props: BlockProps) {
  const {
    theme,
    heading = "Finance Weekly",
    subheading = "Smart money moves and market insights",
    buttonText = "Read analysis",
    buttonUrl = "#",
    items = DEFAULT_ITEMS,
  } = props;

  return (
    <section className="px-5 py-20" style={{ backgroundColor: theme?.background ?? "#f8fafc", color: theme?.foreground ?? "#0c4a6e" }}>
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-2">
          <BarChart3 className="w-7 h-7" style={{ color: theme?.accent ?? "#0284c7" }} />
          <h2 className="text-3xl font-bold">{heading}</h2>
        </div>
        <p className="text-sm opacity-50 mb-12">{subheading}</p>
        <div className="space-y-4">
          {items.slice(0, 3).map((item, i) => (
            <a
              key={i}
              href={buttonUrl}
              className="group flex flex-col sm:flex-row gap-4 bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow"
            >
              <div
                className="w-full sm:w-24 h-24 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: `${theme?.primary ?? "#0284c7"}10` }}
              >
                <TrendingUp className="w-8 h-8" style={{ color: `${theme?.primary ?? "#0284c7"}50` }} />
              </div>
              <div className="flex-1">
                <span className="text-xs font-semibold" style={{ color: theme?.primary ?? "#0284c7" }}>
                  {String(item.label)}
                </span>
                <h3 className="mt-1 text-lg font-bold group-hover:underline">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm opacity-50">{item.description}</p>
                <span
                  className="mt-2 inline-flex items-center gap-1 text-xs font-semibold"
                  style={{ color: theme?.primary ?? "#0284c7" }}
                >
                  {buttonText} <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
