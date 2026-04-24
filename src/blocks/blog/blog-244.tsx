import type { BlockProps } from "@/blocks/types";
import { Play, FileText, Mic, Grid3X3 } from "lucide-react";

const FEATURED = { title: "Building Products for Africa", description: "A deep dive into mobile-first design, payment integration, and infrastructure challenges unique to the continent.", label: "video", value: "38 min" };
const POSTS = [
  { title: "Edge Functions Explained", description: "Run code at the edge for faster responses.", label: "article" },
  { title: "Weekly Dev Roundup", description: "This week in tech, tools, and trends.", label: "podcast" },
  { title: "Design Showcase: Q1 2026", description: "Our best design work from the first quarter.", label: "gallery" },
];

const ICONS: Record<string, React.ReactNode> = {
  article: <FileText className="w-4 h-4" />,
  video: <Play className="w-6 h-6" />,
  podcast: <Mic className="w-4 h-4" />,
  gallery: <Grid3X3 className="w-4 h-4" />,
};

export default function Blog244(props: BlockProps) {
  const { theme, heading = "Explore Our Content", items = POSTS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-16 sm:py-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">{heading}</h2>
        <div className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-2xl overflow-hidden relative" style={{ backgroundColor: theme?.accent ?? "#e5e7eb" }}>
            <div className="aspect-video flex items-center justify-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center bg-white/90 backdrop-blur">{ICONS[FEATURED.label]}</div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
              <span className="text-xs font-bold uppercase opacity-80">{FEATURED.label} — {FEATURED.value}</span>
              <h3 className="mt-1 text-xl font-bold">{FEATURED.title}</h3>
              <p className="mt-1 text-sm opacity-80">{FEATURED.description}</p>
            </div>
          </article>
          <div className="space-y-4">
            {items.slice(0, 3).map((post, i) => (
              <article key={i} className="flex gap-4 p-4 rounded-xl border" style={{ borderColor: theme?.accent ?? "#e5e7eb" }}>
                <div className="w-10 h-10 shrink-0 rounded-lg flex items-center justify-center text-white" style={{ backgroundColor: theme?.primary ?? "#6366f1" }}>{ICONS[post.label ?? "article"]}</div>
                <div className="flex-1 min-w-0">
                  <span className="text-xs font-bold uppercase" style={{ color: theme?.primary ?? "#6366f1" }}>{post.label}</span>
                  <h3 className="mt-1 font-bold">{post.title}</h3>
                  <p className="mt-1 text-sm opacity-70">{post.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
