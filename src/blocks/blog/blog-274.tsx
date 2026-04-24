import type { BlockProps } from "@/blocks/types";
import { Heart, Eye, MessageCircle, User } from "lucide-react";

const DEFAULTS = [
  { title: "New Feature: Drag and Drop Editor", description: "Build pages visually by dragging components exactly where you want them.", label: "Product Team", value: "1d ago" },
  { title: "Community Highlight: EduTech Kenya", description: "How a Nairobi startup used our platform to build an online learning portal.", label: "Community", value: "2d ago" },
  { title: "Tips for Better Mobile Navigation", description: "Hamburger menus, bottom tabs, or slide-out drawers. Which works best?", label: "UX Research", value: "3d ago" },
  { title: "Platform Status: All Systems Go", description: "Our infrastructure is running smoothly with 99.99 percent uptime this quarter.", label: "Engineering", value: "4d ago" },
];

export default function Blog274(props: BlockProps) {
  const { theme, heading = "Activity", items = DEFAULTS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">{heading}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {items.map((post, i) => (
            <article key={i} className="rounded-2xl p-5 cursor-pointer hover:shadow-md transition-shadow" style={{ backgroundColor: theme?.accent ?? "#f9fafb" }}>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: theme?.secondary ?? "#e5e7eb" }}>
                  <User className="w-4 h-4 opacity-40" />
                </div>
                <span className="text-sm font-semibold">{String(post.label ?? "")}</span>
                <span className="text-xs opacity-30 ml-auto">{String(post.value ?? "")}</span>
              </div>
              <h3 className="font-semibold">{post.title}</h3>
              <p className="text-sm opacity-60 mt-1">{post.description}</p>
              <div className="flex items-center gap-4 mt-4">
                <span className="flex items-center gap-1 text-xs opacity-40"><Heart className="w-3.5 h-3.5" />{15 + i * 8}</span>
                <span className="flex items-center gap-1 text-xs opacity-40"><Eye className="w-3.5 h-3.5" />{120 + i * 45}</span>
                <span className="flex items-center gap-1 text-xs opacity-40"><MessageCircle className="w-3.5 h-3.5" />{3 + i}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
