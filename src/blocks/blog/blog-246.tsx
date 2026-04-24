import type { BlockProps } from "@/blocks/types";
import { Play, BookOpen, Mic2 } from "lucide-react";

const POSTS = [
  { title: "Effective Code Documentation", description: "Write docs that developers actually read and maintain.", label: "article", value: "6 min read" },
  { title: "Component Testing Workshop", description: "Hands-on testing with Vitest and Testing Library.", label: "video", value: "55 min" },
  { title: "Design at Scale", description: "How large teams maintain design consistency.", label: "podcast", value: "42 min" },
];

const ROW_ICON: Record<string, React.ReactNode> = {
  article: <BookOpen className="w-5 h-5" />,
  video: <Play className="w-5 h-5" />,
  podcast: <Mic2 className="w-5 h-5" />,
};

export default function Blog246(props: BlockProps) {
  const { theme, heading = "Mixed Media Blog", subheading = "Consume content in the format you prefer.", items = POSTS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-16 sm:py-24">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold">{heading}</h2>
        <p className="mt-2 opacity-60">{subheading}</p>
        <div className="mt-12 space-y-6 text-left">
          {items.slice(0, 3).map((post, i) => (
            <article key={i} className="flex flex-col sm:flex-row gap-5 p-5 rounded-2xl" style={{ backgroundColor: theme?.accent ? `${theme.accent}12` : "#f9fafb" }}>
              <div className="w-full sm:w-44 h-28 shrink-0 rounded-xl flex items-center justify-center" style={{ backgroundColor: theme?.accent ?? "#e5e7eb" }}>
                <div className="w-12 h-12 rounded-full bg-white/80 flex items-center justify-center">{ROW_ICON[post.label ?? "article"]}</div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold uppercase" style={{ color: theme?.primary ?? "#6366f1" }}>{post.label}</span>
                  <span className="text-xs opacity-40">{post.value}</span>
                </div>
                <h3 className="text-lg font-bold">{post.title}</h3>
                <p className="mt-1 text-sm opacity-70">{post.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
