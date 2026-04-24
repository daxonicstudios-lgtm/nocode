import type { BlockProps } from "@/blocks/types";
import { Radio, Play, Clock, ChevronRight, Rss } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "The State of No-Code 2026", description: "Our annual roundup of the most important developments in the no-code ecosystem.", label: "Year in Review", value: "58 min" },
  { title: "Community Voices: Lagos Edition", description: "Developers and entrepreneurs from Lagos share their building stories.", label: "Community", value: "42 min" },
  { title: "Technical Debt Confessions", description: "Engineers come clean about the shortcuts that came back to haunt them.", label: "Confessions", value: "35 min" },
  { title: "Design Tokens Explained", description: "A beginner-friendly introduction to the backbone of design systems.", label: "Explainer", value: "22 min" },
  { title: "From Freelancer to Agency", description: "The journey of scaling from solo work to a full creative agency.", label: "Career", value: "47 min" },
];

export default function Blog200(props: BlockProps) {
  const { theme, heading = "The Stack", subheading = "Your weekly dose of tech and design", items = DEFAULT_ITEMS, buttonText = "Subscribe", buttonUrl = "#" } = props;

  return (
    <section style={{ backgroundColor: theme?.background ?? "#171717", color: theme?.foreground ?? "#f5f5f5" }} className="px-5 py-20">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Radio className="w-5 h-5" style={{ color: theme?.primary ?? "#f59e0b" }} />
              <h2 className="text-3xl font-bold">{heading}</h2>
            </div>
            <p className="text-sm opacity-40">{subheading}</p>
          </div>
          <a href={buttonUrl} className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold" style={{ backgroundColor: theme?.primary ?? "#f59e0b", color: "#000" }}>
            <Rss className="w-4 h-4" /> {buttonText}
          </a>
        </div>
        <div className="space-y-2">
          {items.slice(0, 5).map((item, i) => (
            <a key={i} href={buttonUrl} className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors group">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: theme?.primary ?? "#f59e0b" }}>
                <Play className="w-4 h-4 text-black fill-black" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider opacity-40">{item.label}</span>
                </div>
                <h3 className="font-semibold text-sm truncate">{item.title}</h3>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <span className="flex items-center gap-1 text-xs opacity-30 hidden sm:flex"><Clock className="w-3 h-3" />{item.value}</span>
                <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-40 transition-opacity" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
