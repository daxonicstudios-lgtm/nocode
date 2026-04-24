import type { BlockProps } from "@/blocks/types";
import { User, ArrowRight } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "Thinking Beyond Templates", description: "Why starting from a blank canvas often produces better results than choosing a template.", label: "Philosophy", imageUrl: "", url: "#" },
  { title: "How We Handle Multi-Language Support", description: "The engineering and content challenges of serving users in twelve languages.", label: "i18n", imageUrl: "", url: "#" },
  { title: "Building a Community Around Your Product", description: "Strategies that turned our users into our most effective marketing channel.", label: "Community", imageUrl: "", url: "#" },
  { title: "Data Privacy in the Age of AI", description: "What website builders need to know about protecting visitor data.", label: "Privacy", imageUrl: "", url: "#" },
];

export default function Blog030(props: BlockProps) {
  const { theme, heading = "Read More", items = DEFAULT_ITEMS } = props;

  const authors = ["Zara Ahmed", "Tom Nzelu", "Priya Sharma", "Chris Obi"];

  return (
    <section style={{ backgroundColor: theme?.accent ?? "#f8fafc", color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold">{heading}</h2>
          <a href="#" className="hidden sm:flex items-center gap-1 text-sm font-semibold" style={{ color: theme?.primary ?? "#6366f1" }}>
            All posts <ArrowRight className="w-4 h-4" />
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {items.slice(0, 4).map((post, i) => (
            <a key={i} href={post.url ?? "#"} className="group rounded-2xl p-5 flex flex-col" style={{ backgroundColor: theme?.background ?? "#fff" }}>
              <span className="self-start text-xs font-bold px-2.5 py-1 rounded-full text-white mb-4" style={{ backgroundColor: theme?.primary ?? "#6366f1" }}>{String(post.label ?? "")}</span>
              <h3 className="text-lg font-bold leading-snug group-hover:underline">{post.title}</h3>
              <p className="mt-2 text-sm opacity-60 line-clamp-2 flex-1">{post.description}</p>
              <div className="mt-4 flex items-center gap-2 pt-4 border-t" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }}>
                <div className="w-7 h-7 rounded-full flex items-center justify-center" style={{ backgroundColor: theme?.accent ?? "#f1f5f9" }}>
                  <User className="w-3.5 h-3.5 opacity-50" />
                </div>
                <span className="text-sm font-medium">{authors[i % authors.length]}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
