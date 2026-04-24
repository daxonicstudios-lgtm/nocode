import type { BlockProps } from "@/blocks/types";
import { Headphones, Play, Clock } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "The No-Code Movement", description: "We explore how no-code tools are reshaping who can build software and why it matters.", label: "Episode 42", value: "38 min" },
  { title: "Designing for Mobile Africa", description: "Building products for the fastest growing mobile market in the world.", label: "Episode 41", value: "45 min" },
  { title: "From Side Project to Startup", description: "Three founders share how weekend projects became full-time companies.", label: "Episode 40", value: "52 min" },
];

export default function Blog191(props: BlockProps) {
  const { theme, heading = "The Builder Podcast", subheading = "Weekly conversations with makers and creators", items = DEFAULT_ITEMS, buttonUrl = "#" } = props;

  return (
    <section style={{ backgroundColor: theme?.background ?? "#1a1a2e", color: theme?.foreground ?? "#eaeaea" }} className="px-5 py-20">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-2">
          <Headphones className="w-6 h-6" style={{ color: theme?.primary ?? "#e94560" }} />
          <h2 className="text-3xl font-bold">{heading}</h2>
        </div>
        <p className="text-sm opacity-50 mb-12">{subheading}</p>
        <div className="space-y-4">
          {items.slice(0, 3).map((item, i) => (
            <a key={i} href={buttonUrl} className="flex items-center gap-5 p-5 rounded-2xl group hover:bg-white/5 transition-colors">
              <div className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: theme?.primary ?? "#e94560" }}>
                <Play className="w-6 h-6 text-white fill-white" />
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-xs font-semibold opacity-50">{item.label}</span>
                <h3 className="font-bold mt-0.5 truncate">{item.title}</h3>
                <p className="text-sm opacity-50 mt-0.5 truncate">{item.description}</p>
              </div>
              <span className="flex items-center gap-1 text-xs opacity-40 shrink-0"><Clock className="w-3 h-3" />{item.value}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
