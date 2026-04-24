import type { BlockProps } from "@/blocks/types";
import { User, Tag } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "Real-Time Collaboration Is Here", description: "Multiple editors, live cursors, and conflict resolution built into the platform.", label: "Product", imageUrl: "", url: "#" },
  { title: "Designing for Touch-First Interfaces", description: "How we rethought every interaction for users who never use a mouse.", label: "UX", imageUrl: "", url: "#" },
  { title: "How Small Businesses Win Online", description: "Case studies from three businesses that grew revenue with a simple website.", label: "Case Study", imageUrl: "", url: "#" },
  { title: "API Versioning Strategies That Work", description: "How to evolve your API without breaking existing integrations.", label: "Backend", imageUrl: "", url: "#" },
];

export default function Blog028(props: BlockProps) {
  const { theme, heading = "From the Blog", items = DEFAULT_ITEMS } = props;

  const authors = ["Sarah Chen", "David Okonkwo", "Maria Santos", "James Kimani"];

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12">{heading}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.slice(0, 4).map((post, i) => (
            <a key={i} href={post.url ?? "#"} className="group flex gap-5 p-5 rounded-xl border" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }}>
              <div className="w-32 h-32 rounded-lg shrink-0 overflow-hidden" style={{ backgroundColor: theme?.secondary ?? "#e5e7eb" }}>
                {post.imageUrl && <img src={post.imageUrl} alt={post.title ?? ""} className="w-full h-full object-cover" />}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1 text-xs font-medium" style={{ color: theme?.primary ?? "#6366f1" }}>
                  <Tag className="w-3 h-3" /> {String(post.label ?? "")}
                </div>
                <h3 className="mt-2 font-bold leading-snug group-hover:underline line-clamp-2">{post.title}</h3>
                <p className="mt-1 text-sm opacity-60 line-clamp-1">{post.description}</p>
                <div className="mt-3 flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center" style={{ backgroundColor: theme?.accent ?? "#f1f5f9" }}>
                    <User className="w-3 h-3 opacity-50" />
                  </div>
                  <span className="text-xs opacity-50">{authors[i % authors.length]}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
