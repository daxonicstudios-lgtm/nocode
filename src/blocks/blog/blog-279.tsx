import type { BlockProps } from "@/blocks/types";
import { Heart, MessageCircle, Bookmark, User } from "lucide-react";

const DEFAULTS = [
  { title: "Studio tour: where the magic happens", description: "A peek inside our workspace. Plants, whiteboards, and lots of coffee.", label: "Design Studio", value: "234 likes" },
  { title: "Before and after: client site redesign", description: "Transformed a dated website into a modern, conversion-focused experience.", label: "Portfolio", value: "189 likes" },
  { title: "Sketch to screen in 60 minutes", description: "Time-lapse of building a complete page from a rough wireframe sketch.", label: "Process", value: "312 likes" },
];

export default function Blog279(props: BlockProps) {
  const { theme, heading = "Visual Stories", items = DEFAULTS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-16">
      <div className="max-w-lg mx-auto">
        <h2 className="text-2xl font-bold mb-6">{heading}</h2>
        <div className="space-y-6">
          {items.map((post, i) => (
            <article key={i} className="rounded-2xl overflow-hidden border" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }}>
              <div className="flex items-center gap-2 px-4 py-3">
                <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: theme?.accent ?? "#e5e7eb" }}>
                  <User className="w-4 h-4 opacity-40" />
                </div>
                <span className="text-sm font-semibold">{String(post.label ?? "")}</span>
              </div>
              <div className="aspect-square" style={{ backgroundColor: theme?.accent ?? "#f3f4f6" }} />
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-4">
                    <Heart className="w-5 h-5 cursor-pointer opacity-60" />
                    <MessageCircle className="w-5 h-5 cursor-pointer opacity-60" />
                  </div>
                  <Bookmark className="w-5 h-5 cursor-pointer opacity-60" />
                </div>
                <p className="text-xs font-semibold mb-1">{String(post.value ?? "")}</p>
                <h3 className="text-sm"><span className="font-bold">{String(post.label ?? "")}</span> {post.title}</h3>
                <p className="text-xs opacity-60 mt-1">{post.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
