import type { BlockProps } from "@/blocks/types";
import { Play } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "Video: Intro to Our Platform", description: "A 3-minute walkthrough of core features.", label: "Video", value: "3:12" },
  { title: "Podcast: Future of Web Dev", description: "Our CTO discusses trends shaping the industry.", label: "Podcast", value: "28:00" },
  { title: "Tutorial: Custom Themes", description: "Step-by-step guide to creating branded themes.", label: "Tutorial", value: "5:45" },
  { title: "Webinar: Scaling Your Agency", description: "Recorded session on growing a digital agency.", label: "Webinar", value: "42:10" },
];

export default function Blog083(props: BlockProps) {
  const { theme, heading = "Media & Content", items = DEFAULT_ITEMS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">{heading}</h2>
        <div className="flex gap-5 overflow-x-auto pb-4 snap-x">
          {items.slice(0, 4).map((post, i) => (
            <article key={i} className="min-w-[240px] sm:min-w-[280px] snap-start shrink-0">
              <div className="aspect-[4/3] rounded-xl relative flex items-center justify-center" style={{ backgroundColor: theme?.secondary ?? "#e5e7eb" }}>
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-white/90 shadow-md">
                  <Play className="w-5 h-5 ml-0.5" style={{ color: theme?.primary ?? "#6366f1" }} />
                </div>
                <span className="absolute bottom-2 right-2 px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-black/70 text-white">{String(post.value)}</span>
              </div>
              <div className="mt-3">
                <span className="text-[10px] font-bold uppercase tracking-wider opacity-40">{String(post.label)}</span>
                <h3 className="mt-1 font-bold text-sm">{post.title}</h3>
                <p className="mt-1 text-xs opacity-60">{post.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
