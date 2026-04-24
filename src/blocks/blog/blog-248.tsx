import type { BlockProps } from "@/blocks/types";
import { Radio, FileText, Video, Camera } from "lucide-react";

const POSTS = [
  { title: "Real-Time Collaboration", description: "Build Google Docs-style multiplayer editing.", label: "article", value: "10 min" },
  { title: "Deploy Preview Demo", description: "See how deploy previews speed up code review.", label: "video", value: "18 min" },
  { title: "Indie Hackers Roundtable", description: "Solo founders share revenue milestones and strategies.", label: "podcast", value: "40 min" },
  { title: "Conference Highlights 2026", description: "Best moments from this year's tech conferences.", label: "gallery", value: "24 photos" },
];

const ICONS: Record<string, React.ReactNode> = {
  article: <FileText className="w-4 h-4" />,
  video: <Video className="w-4 h-4" />,
  podcast: <Radio className="w-4 h-4" />,
  gallery: <Camera className="w-4 h-4" />,
};

export default function Blog248(props: BlockProps) {
  const { theme, heading = "Latest from All Channels", items = POSTS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-16 sm:py-24">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-10">{heading}</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.slice(0, 4).map((post, i) => (
            <article key={i} className="p-5 rounded-2xl border flex flex-col" style={{ borderColor: theme?.accent ?? "#e5e7eb" }}>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-white" style={{ backgroundColor: theme?.primary ?? "#6366f1" }}>{ICONS[post.label ?? "article"]}</div>
                <span className="text-xs font-bold uppercase opacity-60">{post.label}</span>
              </div>
              <h3 className="font-bold flex-1">{post.title}</h3>
              <p className="mt-1 text-sm opacity-70">{post.description}</p>
              <p className="mt-3 text-xs opacity-40">{post.value}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
