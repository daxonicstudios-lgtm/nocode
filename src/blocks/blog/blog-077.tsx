import type { BlockProps } from "@/blocks/types";
import { PenLine } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "Why We Went Fully Remote", description: "The economics, culture, and tools behind our distributed team.", label: "Kofi Mensah", value: "VP of People" },
  { title: "Designing for Trust", description: "Visual patterns that make users feel safe sharing their data.", label: "Lina Petrov", value: "Lead Designer" },
  { title: "Our Testing Philosophy", description: "Integration tests over unit tests, and why coverage numbers lie.", label: "David Nzelu", value: "Staff Engineer" },
];

export default function Blog077(props: BlockProps) {
  const { theme, heading = "Written by Our Team", items = DEFAULT_ITEMS } = props;

  return (
    <section style={{ backgroundColor: theme?.accent ?? "#f9fafb", color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-2 mb-10">
          <PenLine className="w-5 h-5" style={{ color: theme?.primary ?? "#6366f1" }} />
          <h2 className="text-2xl sm:text-3xl font-bold">{heading}</h2>
        </div>
        <div className="space-y-6">
          {items.slice(0, 3).map((post, i) => (
            <article key={i} className="flex flex-col sm:flex-row gap-5 p-6 rounded-2xl" style={{ backgroundColor: theme?.background ?? "#fff" }}>
              <div className="w-full sm:w-48 h-36 shrink-0 rounded-xl" style={{ backgroundColor: theme?.secondary ?? "#e5e7eb" }} />
              <div className="flex-1 flex flex-col">
                <h3 className="font-bold text-lg">{post.title}</h3>
                <p className="mt-1 text-sm opacity-60 flex-1">{post.description}</p>
                <div className="flex items-center gap-2 mt-4">
                  <div className="w-7 h-7 rounded-full" style={{ backgroundColor: theme?.secondary ?? "#d1d5db" }} />
                  <div>
                    <p className="text-xs font-bold">{String(post.label)}</p>
                    <p className="text-[10px] opacity-50">{String(post.value)}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
