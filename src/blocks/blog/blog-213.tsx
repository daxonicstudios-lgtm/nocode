import type { BlockProps } from "@/blocks/types";
import { Clock, GraduationCap } from "lucide-react";

const POSTS = [
  { title: "Intro to Machine Learning", description: "Core concepts explained without the math overload.", label: "Beginner", value: "5 min" },
  { title: "Kubernetes for Developers", description: "A developer-centric guide to container orchestration.", label: "Advanced", value: "15 min" },
  { title: "Writing Clean Functions", description: "Small, focused, and well-named — the hallmarks of clean code.", label: "Beginner", value: "4 min" },
];

export default function Blog213(props: BlockProps) {
  const { theme, heading = "Tutorials & Guides", subheading = "Learn at your own pace with tagged difficulty levels.", items = POSTS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-16 sm:py-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold">{heading}</h2>
          <p className="mt-2 opacity-60">{subheading}</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {items.slice(0, 3).map((post, i) => (
            <article key={i} className="rounded-2xl overflow-hidden" style={{ backgroundColor: theme?.accent ? `${theme.accent}15` : "#f9fafb" }}>
              <div className="aspect-[2/1]" style={{ backgroundColor: theme?.accent ?? "#e5e7eb" }} />
              <div className="p-5">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-bold px-2 py-0.5 rounded border" style={{ borderColor: theme?.primary ?? "#6366f1", color: theme?.primary ?? "#6366f1" }}><GraduationCap className="w-3 h-3 inline mr-1" />{post.label}</span>
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
