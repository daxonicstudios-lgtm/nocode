import type { BlockProps } from "@/blocks/types";
import { Newspaper, Film, Podcast, GalleryHorizontalEnd, Clock } from "lucide-react";

const POSTS = [
  { title: "Web Components in 2026", description: "The state of custom elements and shadow DOM.", label: "article", value: "5 min" },
  { title: "Design System Walkthrough", description: "A video tour of our component library.", label: "video", value: "30 min" },
  { title: "Remote Work Debate", description: "Is hybrid the answer? Our panel weighs in.", label: "podcast", value: "45 min" },
];

const ICONS: Record<string, React.ReactNode> = {
  article: <Newspaper className="w-5 h-5" />,
  video: <Film className="w-5 h-5" />,
  podcast: <Podcast className="w-5 h-5" />,
  gallery: <GalleryHorizontalEnd className="w-5 h-5" />,
};

export default function Blog249(props: BlockProps) {
  const { theme, heading = "Media Feed", subheading = "Stay informed across all our channels.", items = POSTS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-16 sm:py-24">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center">{heading}</h2>
        <p className="mt-2 text-center opacity-60">{subheading}</p>
        <div className="mt-12 space-y-5">
          {items.slice(0, 3).map((post, i) => (
            <article key={i} className="flex gap-5 p-5 rounded-2xl border" style={{ borderColor: theme?.accent ?? "#e5e7eb" }}>
              <div className="w-16 h-16 shrink-0 rounded-2xl flex items-center justify-center" style={{ backgroundColor: theme?.primary ?? "#6366f1", color: "#fff" }}>
                {ICONS[post.label ?? "article"]}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold uppercase" style={{ color: theme?.primary ?? "#6366f1" }}>{post.label}</span>
                  <span className="text-xs opacity-40 flex items-center gap-1"><Clock className="w-3 h-3" />{post.value}</span>
                </div>
                <h3 className="text-lg font-bold">{post.title}</h3>
                <p className="mt-1 text-sm opacity-70">{post.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
