import type { BlockProps } from "@/blocks/types";
import { Calendar } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "Rewriting Our Rendering Engine", description: "A technical deep-dive into the migration from canvas to DOM.", label: "March 12, 2026" },
  { title: "Hiring Our First Designer", description: "What we looked for and why culture fit trumped portfolio.", label: "February 28, 2026" },
  { title: "Open-Sourcing Our Icon Pack", description: "1,200 icons, MIT licensed, optimized for the web.", label: "February 15, 2026" },
  { title: "Building Trust with Transparency", description: "Why we publish our revenue numbers every month.", label: "January 30, 2026" },
];

export default function Blog058(props: BlockProps) {
  const { theme, heading = "Timeline", items = DEFAULT_ITEMS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-14">{heading}</h2>
        {items.slice(0, 4).map((post, i) => (
          <div key={i} className={`flex flex-col sm:flex-row gap-4 sm:gap-8 mb-10 last:mb-0 ${i % 2 === 1 ? "sm:flex-row-reverse sm:text-right" : ""}`}>
            <div className="sm:w-40 shrink-0 flex items-start gap-2 text-xs font-medium opacity-50">
              <Calendar className="w-3.5 h-3.5 mt-0.5 shrink-0" />
              {String(post.label)}
            </div>
            <div className="flex-1 p-5 rounded-xl border" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }}>
              <h3 className="font-bold text-base">{post.title}</h3>
              <p className="mt-2 text-sm opacity-60">{post.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
