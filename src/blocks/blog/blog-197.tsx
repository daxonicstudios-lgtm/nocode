import type { BlockProps } from "@/blocks/types";
import { Mic2, Play, Calendar, ArrowRight } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "Breaking Into Tech Without a Degree", description: "Self-taught developers share their unconventional paths into the industry.", label: "Apr 22, 2026", value: "Episode 88" },
  { title: "The Future of Work in Africa", description: "Remote work, digital nomads, and the changing face of employment.", label: "Apr 15, 2026", value: "Episode 87" },
  { title: "Bootstrapping vs Fundraising", description: "Two founders debate the merits of self-funding versus venture capital.", label: "Apr 8, 2026", value: "Episode 86" },
];

export default function Blog197(props: BlockProps) {
  const { theme, heading = "Unfiltered", subheading = "Real talk. No scripts.", items = DEFAULT_ITEMS, buttonText = "All episodes", buttonUrl = "#" } = props;

  return (
    <section style={{ backgroundColor: theme?.background ?? "#1e1b4b", color: theme?.foreground ?? "#e0e7ff" }} className="px-5 py-20">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center text-center mb-14">
          <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4" style={{ backgroundColor: theme?.primary ?? "#818cf8" }}>
            <Mic2 className="w-7 h-7 text-white" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold">{heading}</h2>
          <p className="text-sm opacity-50 mt-2">{subheading}</p>
        </div>
        {items.slice(0, 3).map((item, i) => (
          <a key={i} href={buttonUrl} className="flex items-center gap-5 py-5 border-b border-white/10 group">
            <div className="w-11 h-11 rounded-lg flex items-center justify-center shrink-0 bg-white/10 group-hover:bg-white/20 transition-colors">
              <Play className="w-5 h-5 fill-current" />
            </div>
            <div className="flex-1 min-w-0">
              <span className="text-[10px] font-bold uppercase tracking-wider opacity-40">{item.value}</span>
              <h3 className="font-bold mt-0.5">{item.title}</h3>
              <p className="text-sm opacity-40 mt-0.5 truncate">{item.description}</p>
            </div>
            <span className="text-xs opacity-30 shrink-0 hidden sm:flex items-center gap-1"><Calendar className="w-3 h-3" />{item.label}</span>
          </a>
        ))}
        <div className="text-center mt-10">
          <a href={buttonUrl} className="inline-flex items-center gap-2 text-sm font-semibold" style={{ color: theme?.primary ?? "#818cf8" }}>
            {buttonText} <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
