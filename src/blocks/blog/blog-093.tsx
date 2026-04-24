import type { BlockProps } from "@/blocks/types";
import { BookOpen, Clock } from "lucide-react";

export default function Blog093(props: BlockProps) {
  const {
    theme,
    heading = "The Complete Guide to Design Tokens",
    subheading = "From Figma variables to production CSS custom properties — a practical implementation guide.",
    bodyText = "Design tokens are the single source of truth for your visual language. They capture decisions about color, typography, spacing, and motion in a format that bridges design and engineering. In this guide, we cover token naming conventions, how to structure your token hierarchy, and tools for syncing tokens across platforms. We also share our pipeline for automatically generating Tailwind config, CSS variables, and native mobile styles from a single token definition.",
    items = [{ title: "Lina Petrov", label: "Lead Designer", value: "15 min" }],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <article className="max-w-2xl mx-auto">
        <div className="flex items-center gap-4 text-sm mb-6">
          <span className="flex items-center gap-1 px-3 py-1 rounded-full" style={{ backgroundColor: theme?.secondary ?? "#eef2ff", color: theme?.primary ?? "#6366f1" }}>
            <BookOpen className="w-3.5 h-3.5" /> Guide
          </span>
          <span className="flex items-center gap-1 opacity-50 text-xs"><Clock className="w-3.5 h-3.5" />{String(items[0]?.value)} read</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold leading-tight">{heading}</h1>
        <p className="mt-3 text-base opacity-60">{subheading}</p>
        <div className="flex items-center gap-3 mt-6 p-4 rounded-xl" style={{ backgroundColor: theme?.accent ?? "#f8fafc" }}>
          <div className="w-10 h-10 rounded-full shrink-0" style={{ backgroundColor: theme?.secondary ?? "#d1d5db" }} />
          <div>
            <p className="text-sm font-bold">{items[0]?.title}</p>
            <p className="text-xs opacity-50">{String(items[0]?.label)}</p>
          </div>
        </div>
        <div className="aspect-[2/1] rounded-xl my-8" style={{ backgroundColor: theme?.secondary ?? "#e5e7eb" }} />
        <div className="text-base leading-relaxed opacity-80 whitespace-pre-line">{bodyText}</div>
      </article>
    </section>
  );
}
