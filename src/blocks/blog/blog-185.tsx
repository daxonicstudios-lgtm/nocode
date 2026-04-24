import type { BlockProps } from "@/blocks/types";
import { Play, Share2, Bookmark } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "UI Animation Principles", description: "The 12 principles of animation applied to interface design.", label: "Motion Design", value: "14:30" },
  { title: "Database Schema Design", description: "Structuring your database for performance and flexibility.", label: "Backend", value: "26:15" },
  { title: "User Testing on a Budget", description: "Practical methods for gathering user insights without a lab.", label: "UX Research", value: "19:42" },
];

export default function Blog185(props: BlockProps) {
  const { theme, heading = "Watch", items = DEFAULT_ITEMS, buttonUrl = "#" } = props;

  return (
    <section style={{ backgroundColor: theme?.background ?? "#ffffff", color: theme?.foreground ?? "#09090b" }} className="px-5 py-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12">{heading}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.slice(0, 3).map((item, i) => (
            <article key={i} className="group">
              <a href={buttonUrl} className="block">
                <div className="relative aspect-video rounded-2xl overflow-hidden mb-4" style={{ backgroundColor: theme?.secondary ?? "#f4f4f5" }}>
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <Play className="w-12 h-12 text-white fill-white drop-shadow-lg" />
                  </div>
                  <div className="absolute top-2 left-2 px-2 py-0.5 rounded-full text-[10px] font-bold bg-black/70 text-white">{item.value}</div>
                </div>
              </a>
              <span className="text-xs font-bold uppercase tracking-wider" style={{ color: theme?.primary ?? "#7c3aed" }}>{item.label}</span>
              <h3 className="mt-1 font-bold leading-snug">{item.title}</h3>
              <p className="mt-1 text-sm opacity-60">{item.description}</p>
              <div className="flex items-center gap-3 mt-3">
                <button className="text-xs opacity-40 hover:opacity-70 flex items-center gap-1"><Bookmark className="w-3 h-3" />Save</button>
                <button className="text-xs opacity-40 hover:opacity-70 flex items-center gap-1"><Share2 className="w-3 h-3" />Share</button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
