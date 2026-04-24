import type { BlockProps } from "@/blocks/types";
import { Tag, ArrowLeft } from "lucide-react";

export default function Blog095(props: BlockProps) {
  const {
    theme,
    heading = "Zero-Downtime Database Migrations",
    subheading = "How to evolve your schema without disrupting production traffic.",
    bodyText = "Database migrations are one of the riskiest operations in production. A locked table, a missing index, or an incompatible column change can bring your application to its knees. In this post, we cover our battle-tested approach to safe migrations: expand-and-contract patterns, online schema changes with tools like gh-ost, backfill strategies for large tables, and rollback plans for when things go wrong. We also share the checklist our team runs through before every migration.",
    buttonText = "Back to all posts",
    items = [{ label: "PostgreSQL" }, { label: "DevOps" }, { label: "Production" }],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.accent ?? "#fafafa", color: theme?.foreground }} className="px-5 py-20">
      <article className="max-w-3xl mx-auto">
        <a href="#" className="inline-flex items-center gap-1 text-sm font-medium opacity-50 hover:opacity-100 mb-6">
          <ArrowLeft className="w-4 h-4" /> {buttonText}
        </a>
        <div className="aspect-[21/9] rounded-2xl mb-6" style={{ backgroundColor: theme?.secondary ?? "#e5e7eb" }} />
        <div className="flex flex-wrap gap-2 mb-4">
          {items.slice(0, 3).map((tag, i) => (
            <span key={i} className="flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-semibold" style={{ backgroundColor: theme?.secondary ?? "#eef2ff", color: theme?.primary ?? "#6366f1" }}>
              <Tag className="w-3 h-3" /> {String(tag.label)}
            </span>
          ))}
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold leading-tight">{heading}</h1>
        <p className="mt-3 text-base opacity-60">{subheading}</p>
        <div className="h-px my-8" style={{ backgroundColor: theme?.secondary ?? "#e5e7eb" }} />
        <div className="text-base leading-relaxed opacity-80 whitespace-pre-line">{bodyText}</div>
      </article>
    </section>
  );
}
