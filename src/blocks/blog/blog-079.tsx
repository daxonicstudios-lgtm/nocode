import type { BlockProps } from "@/blocks/types";
import { Quote } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "Content Strategy for Startups", description: "Create once, distribute everywhere — a framework for small teams.", label: "Rachel Kim", value: "Content Lead" },
  { title: "From Engineer to Manager", description: "The skills that made me a great IC almost held me back as a leader.", label: "Ben Okoro", value: "Engineering Manager" },
  { title: "Data-Informed vs Data-Driven", description: "Why instinct still matters in a world of dashboards and metrics.", label: "Priya Sharma", value: "Data Analyst" },
];

export default function Blog079(props: BlockProps) {
  const { theme, heading = "Author Spotlights", items = DEFAULT_ITEMS } = props;

  return (
    <section style={{ backgroundColor: theme?.accent ?? "#fafafa", color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">{heading}</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {items.slice(0, 3).map((post, i) => (
            <article key={i} className="text-center" style={{ backgroundColor: theme?.background ?? "#fff" }}>
              <div className="rounded-2xl p-6">
                <div className="w-16 h-16 rounded-full mx-auto mb-3" style={{ backgroundColor: theme?.secondary ?? "#e5e7eb" }} />
                <p className="font-bold text-sm">{String(post.label)}</p>
                <p className="text-[10px] opacity-50">{String(post.value)}</p>
                <Quote className="w-5 h-5 mx-auto mt-4 opacity-20" />
                <h3 className="mt-2 font-bold text-base">{post.title}</h3>
                <p className="mt-2 text-sm opacity-60">{post.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
