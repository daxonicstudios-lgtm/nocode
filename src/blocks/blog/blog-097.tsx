import type { BlockProps } from "@/blocks/types";
import { BookOpen } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "Understanding React Server Components", description: "The mental model shift from client-only to hybrid rendering.", label: "10 min read" },
  { title: "Event-Driven Architecture Patterns", description: "Pub/sub, event sourcing, and CQRS for scalable systems.", label: "14 min read" },
  { title: "Writing Technical Documentation", description: "Templates, tone guides, and maintenance workflows.", label: "7 min read" },
  { title: "Monitoring and Observability", description: "Logs, metrics, and traces — the three pillars explained.", label: "11 min read" },
];

export default function Blog097(props: BlockProps) {
  const { theme, heading = "You Might Also Like", subheading = "Readers of this article also enjoyed these posts.", items = DEFAULT_ITEMS } = props;

  return (
    <section style={{ backgroundColor: theme?.accent ?? "#f9fafb", color: theme?.foreground }} className="px-5 py-16">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <BookOpen className="w-6 h-6 mx-auto mb-2 opacity-40" />
          <h2 className="text-2xl font-bold">{heading}</h2>
          <p className="mt-1 text-sm opacity-50">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {items.slice(0, 4).map((post, i) => (
            <article key={i} className="flex gap-4 p-4 rounded-xl" style={{ backgroundColor: theme?.background ?? "#fff" }}>
              <div className="w-20 h-20 shrink-0 rounded-lg" style={{ backgroundColor: theme?.secondary ?? "#e5e7eb" }} />
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-sm truncate">{post.title}</h3>
                <p className="mt-1 text-xs opacity-60 line-clamp-2">{post.description}</p>
                <span className="text-[10px] opacity-40 mt-1 inline-block">{String(post.label)}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
