import type { BlockProps } from "@/blocks/types";
import { Headphones, Play, Clock, Share2 } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "Zero to Launch: A Startup Story", description: "Following one team from idea validation to their first 1,000 users.", label: "62 min", value: "Featured" },
];

export default function Blog198(props: BlockProps) {
  const { theme, heading = "Latest Episode", subheading = "The Maker Show", items = DEFAULT_ITEMS, buttonText = "Play Episode", buttonUrl = "#" } = props;

  const episode = items[0];

  return (
    <section style={{ backgroundColor: theme?.background ?? "#0f0f0f", color: theme?.foreground ?? "#f5f5f5" }} className="px-5 py-20">
      <div className="max-w-3xl mx-auto text-center">
        <Headphones className="w-10 h-10 mx-auto mb-4" style={{ color: theme?.primary ?? "#f43f5e" }} />
        <p className="text-xs uppercase tracking-[0.3em] opacity-40 mb-2">{subheading}</p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-10">{heading}</h2>
        <div className="rounded-2xl p-8" style={{ backgroundColor: theme?.secondary ?? "#1a1a1a" }}>
          <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full" style={{ backgroundColor: theme?.primary ?? "#f43f5e", color: "#fff" }}>{episode?.value}</span>
          <h3 className="mt-4 text-2xl font-bold">{episode?.title}</h3>
          <p className="mt-3 opacity-50 leading-relaxed">{episode?.description}</p>
          <div className="mt-6 flex items-center justify-center gap-3 text-xs opacity-40">
            <Clock className="w-3 h-3" />
            <span>{episode?.label}</span>
          </div>
          <div className="mt-6 h-1.5 rounded-full overflow-hidden" style={{ backgroundColor: "rgba(255,255,255,0.1)" }}>
            <div className="h-full rounded-full w-1/3" style={{ backgroundColor: theme?.primary ?? "#f43f5e" }} />
          </div>
          <div className="mt-6 flex items-center justify-center gap-4">
            <a href={buttonUrl} className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-white" style={{ backgroundColor: theme?.primary ?? "#f43f5e" }}>
              <Play className="w-4 h-4 fill-white" /> {buttonText}
            </a>
            <button className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/20 transition-colors">
              <Share2 className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
