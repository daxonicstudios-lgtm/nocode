import type { BlockProps } from "@/blocks/types";
import { Calendar } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "Rebuilding Our Dashboard From Scratch", description: "Why we threw away six months of work and started over, and why it was the right call.", label: "Apr 22, 2026", imageUrl: "", url: "#" },
  { title: "Email Templates That Get Replies", description: "Short, actionable, and human.", label: "Apr 18, 2026", imageUrl: "", url: "#" },
  { title: "How We Use Feature Flags at Scale", description: "Our system for rolling out features incrementally to millions of users without breaking anything. Includes our custom flag management dashboard.", label: "Apr 14, 2026", imageUrl: "", url: "#" },
  { title: "SVG Icons vs Icon Fonts: The Verdict", description: "Performance, accessibility, and DX compared.", label: "Apr 10, 2026", imageUrl: "", url: "#" },
  { title: "Running Effective Design Critiques", description: "How to give and receive feedback that actually improves the work without bruising egos.", label: "Apr 6, 2026", imageUrl: "", url: "#" },
  { title: "What Is Headless CMS?", description: "A beginner-friendly explanation of decoupled content management and when it makes sense for your project.", label: "Apr 2, 2026", imageUrl: "", url: "#" },
];

export default function Blog045(props: BlockProps) {
  const { theme, heading = "All Articles", subheading = "Everything we have written, newest first.", items = DEFAULT_ITEMS } = props;

  return (
    <section style={{ backgroundColor: theme?.accent ?? "#f8fafc", color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold">{heading}</h2>
          <p className="mt-2 opacity-60">{subheading}</p>
        </div>
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {items.slice(0, 6).map((post, i) => (
            <a key={i} href={post.url ?? "#"} className="group block break-inside-avoid rounded-2xl overflow-hidden shadow-sm" style={{ backgroundColor: theme?.background ?? "#fff" }}>
              {i % 2 === 0 && (
                <div className={i === 0 ? "aspect-video" : "aspect-[4/3]"} style={{ backgroundColor: theme?.secondary ?? "#e5e7eb" }}>
                  {post.imageUrl && <img src={post.imageUrl} alt={post.title ?? ""} className="w-full h-full object-cover" />}
                </div>
              )}
              <div className="p-5">
                <div className="flex items-center gap-1 text-xs opacity-40 mb-2">
                  <Calendar className="w-3 h-3" /> {String(post.label ?? "")}
                </div>
                <h3 className="font-bold leading-snug group-hover:underline">{post.title}</h3>
                <p className="mt-2 text-sm opacity-60">{post.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
