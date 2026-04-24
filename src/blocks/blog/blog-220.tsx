import type { BlockProps } from "@/blocks/types";
import { Clock, Award } from "lucide-react";

const POSTS = [
  { title: "Progressive Web Apps Guide", description: "Offline-first, installable, and fast — the PWA checklist.", label: "Intermediate", value: "10 min" },
  { title: "Understanding DNS", description: "A records, CNAMEs, and TTLs explained for web developers.", label: "Beginner", value: "4 min" },
  { title: "Distributed Tracing with OpenTelemetry", description: "Track requests across services and find bottlenecks fast.", label: "Advanced", value: "16 min" },
];

export default function Blog220(props: BlockProps) {
  const { theme, heading = "Level Up Your Skills", subheading = "Track your learning path from beginner to expert.", items = POSTS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-16 sm:py-24">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-2"><Award className="w-7 h-7" style={{ color: theme?.primary ?? "#6366f1" }} /><h2 className="text-3xl font-bold">{heading}</h2></div>
        <p className="opacity-60 mb-10">{subheading}</p>
        <div className="grid gap-6 md:grid-cols-3">
          {items.slice(0, 3).map((post, i) => (
            <article key={i} className="border rounded-xl overflow-hidden" style={{ borderColor: theme?.accent ?? "#e5e7eb" }}>
              <div className="h-2" style={{ backgroundColor: post.label === "Advanced" ? "#ef4444" : post.label === "Intermediate" ? "#f59e0b" : "#22c55e" }} />
              <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold uppercase">{post.label}</span>
                  <span className="text-xs opacity-50 flex items-center gap-1"><Clock className="w-3 h-3" />{post.value}</span>
                </div>
                <h3 className="text-lg font-bold">{post.title}</h3>
                <p className="mt-2 text-sm opacity-70">{post.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
