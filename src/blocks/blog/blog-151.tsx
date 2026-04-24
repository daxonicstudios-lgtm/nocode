import type { BlockProps } from "@/blocks/types";
import { Calendar, ArrowRight } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "Designing for Accessibility in 2026", description: "How inclusive design principles reshape the way we build products.", label: "Design", value: "May 2, 2026" },
  { title: "The Rise of Edge Computing", description: "Why moving computation closer to users changes everything.", label: "Engineering", value: "Apr 28, 2026" },
  { title: "Building a Culture of Feedback", description: "Lessons from creating psychological safety on our team.", label: "Culture", value: "Apr 20, 2026" },
];

export default function Blog151(props: BlockProps) {
  const { theme, heading = "Latest Articles", subheading = "Insights from our team", items = DEFAULT_ITEMS, buttonText = "Read More", buttonUrl = "#" } = props;

  return (
    <section style={{ backgroundColor: theme?.background ?? "#e0e0e0", color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-2">{heading}</h2>
        <p className="text-sm opacity-60 mb-12">{subheading}</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.slice(0, 3).map((item, i) => (
            <article
              key={i}
              className="rounded-2xl p-6"
              style={{
                backgroundColor: theme?.background ?? "#e0e0e0",
                boxShadow: "8px 8px 16px #bebebe, -8px -8px 16px #ffffff",
              }}
            >
              <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: theme?.primary ?? "#6366f1" }}>{item.label}</span>
              <h3 className="mt-3 text-lg font-bold leading-snug">{item.title}</h3>
              <p className="mt-2 text-sm opacity-70 leading-relaxed">{item.description}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="flex items-center gap-1 text-xs opacity-50"><Calendar className="w-3 h-3" />{item.value}</span>
                <a href={buttonUrl} className="flex items-center gap-1 text-xs font-semibold" style={{ color: theme?.primary ?? "#6366f1" }}>
                  {buttonText} <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
