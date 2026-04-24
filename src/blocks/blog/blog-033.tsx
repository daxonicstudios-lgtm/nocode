import type { BlockProps } from "@/blocks/types";
import { BookOpen } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "Building for Offline-First Experiences", description: "Service workers and caching strategies for users with intermittent connectivity.", label: "Engineering · 9 min", imageUrl: "", url: "#" },
  { title: "The Anatomy of a High-Converting Hero Section", description: "Breaking down what makes the best hero sections work and how to build your own.", label: "Design · 6 min", imageUrl: "", url: "#" },
  { title: "Revenue Models for No-Code Platforms", description: "Freemium, usage-based, and hybrid pricing strategies compared.", label: "Strategy · 8 min", imageUrl: "", url: "#" },
];

export default function Blog033(props: BlockProps) {
  const { theme, heading = "Knowledge Hub", subheading = "Learn from our experience building products.", items = DEFAULT_ITEMS } = props;

  return (
    <section className="px-5 py-20" style={{ backgroundColor: theme?.background ?? "#18181b", color: theme?.foreground ?? "#d4d4d8" }}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">{heading}</h2>
        <p className="mt-2 opacity-50 mb-12">{subheading}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {items.slice(0, 3).map((post, i) => (
            <a key={i} href={post.url ?? "#"} className="group block rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-colors">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: "rgba(255,255,255,0.08)" }}>
                <BookOpen className="w-5 h-5" style={{ color: theme?.primary ?? "#a78bfa" }} />
              </div>
              <span className="text-xs font-medium opacity-50">{String(post.label ?? "")}</span>
              <h3 className="mt-2 text-lg font-bold text-white group-hover:underline">{post.title}</h3>
              <p className="mt-2 text-sm opacity-50 line-clamp-3">{post.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
