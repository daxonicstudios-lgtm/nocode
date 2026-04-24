import type { BlockProps } from "@/blocks/types";
import { Clock, BookOpen } from "lucide-react";

const POSTS = [
  { title: "Testing React Components", description: "Unit tests, integration tests, and when to use each.", label: "Intermediate", value: "9 min" },
  { title: "SQL Joins Explained Visually", description: "Diagrams that make inner, outer, and cross joins click.", label: "Beginner", value: "5 min" },
  { title: "CI/CD Pipeline Design", description: "Automate builds, tests, and deploys with confidence.", label: "Advanced", value: "14 min" },
];

export default function Blog215(props: BlockProps) {
  const { theme, heading = "Read & Learn", subheading = "Each article shows estimated time and skill level.", items = POSTS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-16 sm:py-24">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold">{heading}</h2>
        <p className="mt-2 opacity-60">{subheading}</p>
        <div className="mt-10 space-y-6">
          {items.slice(0, 3).map((post, i) => (
            <article key={i} className="flex flex-col sm:flex-row gap-5 pb-6 border-b" style={{ borderColor: theme?.accent ?? "#e5e7eb" }}>
              <div className="w-full sm:w-40 h-28 shrink-0 rounded-xl" style={{ backgroundColor: theme?.accent ?? "#f3f4f6" }} />
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="text-xs font-bold px-2 py-0.5 rounded-full text-white" style={{ backgroundColor: theme?.primary ?? "#6366f1" }}>{post.label}</span>
                  <span className="text-xs opacity-50 flex items-center gap-1"><Clock className="w-3 h-3" />{post.value}</span>
                  <span className="text-xs opacity-50 flex items-center gap-1"><BookOpen className="w-3 h-3" />Article</span>
                </div>
                <h3 className="text-xl font-bold">{post.title}</h3>
                <p className="mt-1 text-sm opacity-70">{post.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
