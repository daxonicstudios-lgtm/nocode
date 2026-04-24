import type { BlockProps } from "@/blocks/types";
import { FileText, Video, Headphones, Image } from "lucide-react";

const POSTS = [
  { title: "API Design Principles", description: "Consistent, predictable, and developer-friendly APIs.", label: "article" },
  { title: "Figma to Code Workshop", description: "Hands-on session converting designs to production components.", label: "video" },
  { title: "Tech Leadership Talks", description: "CTOs share their journey and hard-won wisdom.", label: "podcast" },
  { title: "Product Launch Gallery", description: "Behind the scenes of our latest release.", label: "gallery" },
];

const TYPE_META: Record<string, { icon: React.ReactNode; color: string }> = {
  article: { icon: <FileText className="w-5 h-5" />, color: "#3b82f6" },
  video: { icon: <Video className="w-5 h-5" />, color: "#ef4444" },
  podcast: { icon: <Headphones className="w-5 h-5" />, color: "#8b5cf6" },
  gallery: { icon: <Image className="w-5 h-5" />, color: "#f59e0b" },
};

export default function Blog242(props: BlockProps) {
  const { theme, heading = "Content Hub", items = POSTS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-16 sm:py-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10">{heading}</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.slice(0, 4).map((post, i) => {
            const meta = TYPE_META[post.label ?? "article"];
            return (
              <article key={i} className="rounded-2xl overflow-hidden border" style={{ borderColor: theme?.accent ?? "#e5e7eb" }}>
                <div className="aspect-[4/3] flex items-center justify-center" style={{ backgroundColor: `${meta.color}15` }}>
                  <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: meta.color, color: "#fff" }}>{meta.icon}</div>
                </div>
                <div className="p-4">
                  <span className="text-xs font-bold uppercase" style={{ color: meta.color }}>{post.label}</span>
                  <h3 className="mt-1 font-bold">{post.title}</h3>
                  <p className="mt-1 text-sm opacity-70">{post.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
