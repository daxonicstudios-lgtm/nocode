import type { BlockProps } from "@/blocks/types";
import { ArrowLeft, Share2 } from "lucide-react";

export default function Blog092(props: BlockProps) {
  const {
    theme,
    heading = "How We Reduced Our API Response Time by 80%",
    subheading = "A deep dive into caching, query optimization, and infrastructure changes that transformed our backend performance.",
    bodyText = "When our average API response time hit 1.2 seconds, we knew something had to change. Our users were dropping off, and our mobile experience suffered the most. This post covers the three-month journey from diagnosis to resolution. We started by profiling our slowest endpoints, identifying N+1 queries, and adding database indexes. Then we introduced Redis caching for frequently accessed data and implemented connection pooling with PgBouncer. Finally, we moved our compute closer to users with edge functions. The result: a 95th percentile response time of 180ms.",
    items = [{ title: "David Nzelu", label: "Staff Engineer", value: "Mar 22, 2026" }],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.accent ?? "#fafafa", color: theme?.foreground }} className="px-5 py-20">
      <article className="max-w-3xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <a href="#" className="flex items-center gap-1 text-sm font-medium opacity-60 hover:opacity-100"><ArrowLeft className="w-4 h-4" /> Back to blog</a>
          <button className="w-9 h-9 rounded-full flex items-center justify-center border" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }}>
            <Share2 className="w-4 h-4" />
          </button>
        </div>
        <span className="text-xs font-bold uppercase tracking-wider" style={{ color: theme?.primary ?? "#6366f1" }}>Engineering</span>
        <h1 className="mt-2 text-3xl sm:text-4xl font-bold leading-tight">{heading}</h1>
        <p className="mt-4 text-lg opacity-60">{subheading}</p>
        <div className="flex items-center gap-3 mt-6">
          <div className="w-10 h-10 rounded-full" style={{ backgroundColor: theme?.secondary ?? "#d1d5db" }} />
          <div>
            <p className="text-sm font-bold">{items[0]?.title}</p>
            <p className="text-xs opacity-50">{String(items[0]?.label)} · {String(items[0]?.value)}</p>
          </div>
        </div>
        <div className="h-px my-8" style={{ backgroundColor: theme?.secondary ?? "#e5e7eb" }} />
        <div className="text-base leading-relaxed opacity-80 whitespace-pre-line">{bodyText}</div>
      </article>
    </section>
  );
}
