import type { BlockProps } from "@/blocks/types";
import { Tag } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "Why Simplicity Wins in Product Design", description: "The counterintuitive reason that fewer features often lead to more satisfied users.", label: "Product", imageUrl: "", url: "#" },
  { title: "Effective Error Logging for Small Teams", description: "How to set up monitoring that catches real issues without drowning in noise.", label: "DevOps", imageUrl: "", url: "#" },
  { title: "Creating a Brand Voice Guide", description: "Steps to define how your brand sounds across every touchpoint.", label: "Branding", imageUrl: "", url: "#" },
  { title: "GraphQL vs REST in 2026", description: "An updated comparison for teams choosing between API architectures.", label: "Backend", imageUrl: "", url: "#" },
];

const CATEGORIES = ["Product", "Engineering", "Design", "Marketing", "DevOps", "Culture"];
const POPULAR = ["No-Code Movement", "Mobile-First Design", "AI-Powered Tools"];

export default function Blog039(props: BlockProps) {
  const { theme, heading = "Blog & News", items = DEFAULT_ITEMS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-10">{heading}</h2>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_240px] gap-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {items.slice(0, 4).map((post, i) => (
              <a key={i} href={post.url ?? "#"} className="group block rounded-xl border p-5" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }}>
                <div className="flex items-center gap-1 text-xs font-medium mb-3" style={{ color: theme?.primary ?? "#6366f1" }}>
                  <Tag className="w-3 h-3" /> {String(post.label ?? "")}
                </div>
                <h3 className="font-bold leading-snug group-hover:underline">{post.title}</h3>
                <p className="mt-2 text-sm opacity-60 line-clamp-2">{post.description}</p>
              </a>
            ))}
          </div>
          <aside className="space-y-6">
            <div>
              <h3 className="font-bold text-sm mb-3">Categories</h3>
              <div className="flex flex-col gap-1.5">
                {CATEGORIES.map((c) => (
                  <a key={c} href="#" className="text-sm opacity-70 hover:opacity-100 hover:underline">{c}</a>
                ))}
              </div>
            </div>
            <div className="border-t pt-6" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }}>
              <h3 className="font-bold text-sm mb-3">Trending</h3>
              <ul className="space-y-2">
                {POPULAR.map((p, i) => (
                  <li key={i}>
                    <a href="#" className="text-sm opacity-70 hover:underline">{p}</a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
