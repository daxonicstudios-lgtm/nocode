import type { BlockProps } from "@/blocks/types";
import { Tag } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "How to Write Copy That Sells", description: "Copywriting techniques that turn casual visitors into paying customers on any page.", label: "Marketing", imageUrl: "", url: "#" },
  { title: "Serverless Architecture for Startups", description: "When serverless makes sense, when it does not, and how to decide for your project.", label: "Engineering", imageUrl: "", url: "#" },
  { title: "The Psychology of Color in Web Design", description: "How different hues influence user behavior and which palettes perform best.", label: "Design", imageUrl: "", url: "#" },
  { title: "Growing an Email List From Scratch", description: "Proven tactics for building a subscriber base that actually opens your emails.", label: "Growth", imageUrl: "", url: "#" },
  { title: "Managing Technical Debt in a Startup", description: "Practical strategies for balancing speed with code quality when resources are limited.", label: "Engineering", imageUrl: "", url: "#" },
];

export default function Blog019(props: BlockProps) {
  const { theme, heading = "Recent Articles", items = DEFAULT_ITEMS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-10">{heading}</h2>
        <div className="space-y-6">
          {items.slice(0, 5).map((post, i) => (
            <a key={i} href={post.url ?? "#"} className="group flex flex-col sm:flex-row gap-4 items-start border-b pb-6 last:border-0" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }}>
              <div className="w-full sm:w-40 h-28 rounded-lg shrink-0 overflow-hidden" style={{ backgroundColor: theme?.secondary ?? "#e5e7eb" }}>
                {post.imageUrl && <img src={post.imageUrl} alt={post.title ?? ""} className="w-full h-full object-cover" />}
              </div>
              <div>
                <div className="flex items-center gap-1 text-xs font-medium mb-1" style={{ color: theme?.primary ?? "#6366f1" }}>
                  <Tag className="w-3 h-3" /> {String(post.label ?? "")}
                </div>
                <h3 className="font-bold text-lg leading-snug group-hover:underline">{post.title}</h3>
                <p className="mt-1 text-sm opacity-60 line-clamp-2">{post.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
