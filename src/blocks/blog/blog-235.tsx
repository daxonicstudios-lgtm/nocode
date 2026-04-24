import type { BlockProps } from "@/blocks/types";
import { User, BookOpen } from "lucide-react";

const POSTS = [
  { title: "Scaling a Design Team", description: "Hiring, onboarding, and maintaining culture at speed.", label: "Leadership", value: "Elena Torres" },
  { title: "Design Reviews That Work", description: "Structured feedback sessions that improve outcomes.", label: "Process", value: "Elena Torres" },
];

export default function Blog235(props: BlockProps) {
  const { theme, heading = "Featured Author", items = POSTS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-16 sm:py-24">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center gap-6 mb-10 p-6 rounded-2xl" style={{ backgroundColor: theme?.accent ? `${theme.accent}15` : "#f9fafb" }}>
          <div className="w-20 h-20 shrink-0 rounded-full flex items-center justify-center" style={{ backgroundColor: theme?.primary ?? "#6366f1" }}><User className="w-10 h-10 text-white" /></div>
          <div className="text-center sm:text-left">
            <h2 className="text-2xl font-bold">{heading}</h2>
            <p className="text-lg font-semibold mt-1">{items[0]?.value ?? "Author"}</p>
            <p className="text-sm opacity-60 mt-1 flex items-center gap-1 justify-center sm:justify-start"><BookOpen className="w-4 h-4" />{items.length} articles published</p>
          </div>
        </div>
        <div className="space-y-4">
          {items.slice(0, 2).map((post, i) => (
            <article key={i} className="p-5 border rounded-xl" style={{ borderColor: theme?.accent ?? "#e5e7eb" }}>
              <span className="text-xs font-bold uppercase" style={{ color: theme?.primary ?? "#6366f1" }}>{post.label}</span>
              <h3 className="mt-2 text-xl font-bold">{post.title}</h3>
              <p className="mt-1 text-sm opacity-70">{post.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
