import type { BlockProps } from "@/blocks/types";
import { Calendar } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "How We Automated Our QA Pipeline", description: "From manual testing to full CI/CD with visual regression tests in three months.", label: "Apr 22, 2026", imageUrl: "", url: "#" },
  { title: "The Ethics of AI-Generated Content", description: "Where we draw the line between AI assistance and AI replacement in creative work.", label: "Apr 16, 2026", imageUrl: "", url: "#" },
  { title: "Migrating 50,000 Sites Without Downtime", description: "The engineering feat behind our infrastructure upgrade and what we learned.", label: "Apr 10, 2026", imageUrl: "", url: "#" },
];

export default function Blog034(props: BlockProps) {
  const { theme, heading = "Recent Writing", items = DEFAULT_ITEMS } = props;

  return (
    <section className="px-5 py-20" style={{ backgroundColor: theme?.background ?? "#0c0a09", color: theme?.foreground ?? "#a8a29e" }}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-10">{heading}</h2>
        <div className="space-y-0">
          {items.slice(0, 3).map((post, i) => (
            <a key={i} href={post.url ?? "#"} className="group grid grid-cols-1 sm:grid-cols-[180px_1fr] gap-5 py-8 border-b border-white/10">
              <div className="h-32 sm:h-full rounded-xl overflow-hidden" style={{ backgroundColor: "rgba(255,255,255,0.06)" }}>
                {post.imageUrl && <img src={post.imageUrl} alt={post.title ?? ""} className="w-full h-full object-cover" />}
              </div>
              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-1 text-xs opacity-40 mb-2">
                  <Calendar className="w-3 h-3" /> {String(post.label ?? "")}
                </div>
                <h3 className="text-xl font-bold text-white group-hover:underline">{post.title}</h3>
                <p className="mt-2 text-sm opacity-50">{post.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
