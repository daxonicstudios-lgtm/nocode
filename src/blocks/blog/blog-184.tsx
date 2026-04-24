import type { BlockProps } from "@/blocks/types";
import { Play, ThumbsUp } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "No-Code Revolution: Full Documentary", description: "The story of how no-code tools democratized software creation worldwide.", label: "Documentary", value: "1:12:00" },
  { title: "Live Coding: E-Commerce Site", description: "Watch us build a complete online store in a single session.", label: "Live Stream", value: "2:05:30" },
  { title: "Interview: Future of Web Platforms", description: "In conversation with industry leaders about what comes next.", label: "Interview", value: "48:20" },
];

export default function Blog184(props: BlockProps) {
  const { theme, heading = "Long Form", subheading = "In-depth video content worth your time", items = DEFAULT_ITEMS, buttonUrl = "#" } = props;

  return (
    <section style={{ backgroundColor: theme?.background ?? "#18181b", color: theme?.foreground ?? "#e4e4e7" }} className="px-5 py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-1">{heading}</h2>
        <p className="text-sm opacity-50 mb-12">{subheading}</p>
        <div className="space-y-6">
          {items.slice(0, 3).map((item, i) => (
            <a key={i} href={buttonUrl} className="group flex flex-col sm:flex-row gap-5 p-4 rounded-2xl hover:bg-white/5 transition-colors">
              <div className="relative sm:w-56 aspect-video rounded-xl overflow-hidden shrink-0" style={{ backgroundColor: theme?.secondary ?? "#27272a" }}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-white/10 group-hover:bg-white/20 transition-colors">
                    <Play className="w-5 h-5 text-white fill-white" />
                  </div>
                </div>
                <span className="absolute bottom-2 right-2 px-2 py-0.5 rounded text-xs font-mono bg-black/80 text-white">{item.value}</span>
              </div>
              <div className="flex-1">
                <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: theme?.primary ?? "#a78bfa" }}>{item.label}</span>
                <h3 className="mt-1 text-lg font-bold">{item.title}</h3>
                <p className="mt-1 text-sm opacity-50">{item.description}</p>
                <div className="mt-3 flex items-center gap-1 text-xs opacity-40">
                  <ThumbsUp className="w-3 h-3" /> Highly rated
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
