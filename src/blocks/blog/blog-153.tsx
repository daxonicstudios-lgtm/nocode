import type { BlockProps } from "@/blocks/types";
import { Heart, MessageCircle } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "Remote Work is Here to Stay", description: "The data behind the shift and what it means for product teams.", label: "124", value: "18" },
  { title: "Component-Driven Development", description: "Building UIs from small, reusable pieces for maximum flexibility.", label: "89", value: "7" },
  { title: "Onboarding Users in Under 60 Seconds", description: "Reduce friction and boost activation with these proven patterns.", label: "201", value: "32" },
];

export default function Blog153(props: BlockProps) {
  const { theme, heading = "Trending Posts", subheading = "Most loved by our readers", items = DEFAULT_ITEMS } = props;

  return (
    <section style={{ backgroundColor: theme?.background ?? "#e2e2e2", color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold">{heading}</h2>
          <p className="mt-2 text-sm opacity-60">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.slice(0, 3).map((item, i) => (
            <article
              key={i}
              className="rounded-2xl p-6 text-center"
              style={{
                backgroundColor: theme?.background ?? "#e2e2e2",
                boxShadow: "10px 10px 20px #c0c0c0, -10px -10px 20px #ffffff",
              }}
            >
              <div
                className="w-20 h-20 rounded-full mx-auto mb-4"
                style={{
                  backgroundColor: theme?.background ?? "#e2e2e2",
                  boxShadow: "inset 5px 5px 10px #c0c0c0, inset -5px -5px 10px #ffffff",
                }}
              />
              <h3 className="text-lg font-bold">{item.title}</h3>
              <p className="mt-2 text-sm opacity-60 leading-relaxed">{item.description}</p>
              <div className="mt-4 flex items-center justify-center gap-4 text-xs opacity-50">
                <span className="flex items-center gap-1"><Heart className="w-3 h-3" />{item.label}</span>
                <span className="flex items-center gap-1"><MessageCircle className="w-3 h-3" />{item.value}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
