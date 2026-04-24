import type { BlockProps } from "@/blocks/types";
import { FileText, Video, Headphones, Image, Clock } from "lucide-react";

const POSTS = [
  { title: "The State of Frontend 2026", description: "Annual survey results and emerging trends.", label: "article", value: "8 min read" },
  { title: "Live Coding: Build a REST API", description: "Watch us build a full API from scratch in Node.js.", label: "video", value: "22 min" },
  { title: "Startup Stories: Scaling in Africa", description: "Founders share lessons from building in emerging markets.", label: "podcast", value: "35 min" },
  { title: "Office Tour: Our New Lagos Hub", description: "A visual walkthrough of our new workspace.", label: "gallery", value: "12 photos" },
];

const ICONS: Record<string, React.ReactNode> = {
  article: <FileText className="w-4 h-4" />,
  video: <Video className="w-4 h-4" />,
  podcast: <Headphones className="w-4 h-4" />,
  gallery: <Image className="w-4 h-4" />,
};

export default function Blog241(props: BlockProps) {
  const { theme, heading = "Multi-Format Content", subheading = "Articles, videos, podcasts, and galleries — all in one feed.", items = POSTS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-16 sm:py-24">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center">{heading}</h2>
        <p className="mt-2 text-center opacity-60">{subheading}</p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {items.slice(0, 4).map((post, i) => (
            <article key={i} className="rounded-xl border p-5 flex gap-4" style={{ borderColor: theme?.accent ?? "#e5e7eb" }}>
              <div className="w-12 h-12 shrink-0 rounded-lg flex items-center justify-center" style={{ backgroundColor: theme?.primary ?? "#6366f1", color: "#fff" }}>
                {ICONS[post.label ?? "article"]}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold uppercase" style={{ color: theme?.primary ?? "#6366f1" }}>{post.label}</span>
                  <span className="text-xs opacity-40 flex items-center gap-1"><Clock className="w-3 h-3" />{post.value}</span>
                </div>
                <h3 className="font-bold">{post.title}</h3>
                <p className="mt-1 text-sm opacity-70">{post.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
