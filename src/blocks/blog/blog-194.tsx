import type { BlockProps } from "@/blocks/types";
import { Podcast, Play, Clock, User } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "Scaling a Marketplace", description: "The chicken-and-egg problem and how to solve it with creative growth tactics.", label: "Amina Bello", value: "55 min" },
  { title: "Funding in Emerging Markets", description: "Navigating the VC landscape in Africa, Southeast Asia, and Latin America.", label: "David Okonkwo", value: "42 min" },
];

export default function Blog194(props: BlockProps) {
  const { theme, heading = "Founders Radio", subheading = "Honest conversations with startup founders", items = DEFAULT_ITEMS, buttonUrl = "#" } = props;

  return (
    <section style={{ backgroundColor: theme?.background ?? "#fffbeb", color: theme?.foreground ?? "#1c1917" }} className="px-5 py-20">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-1">
          <Podcast className="w-6 h-6" style={{ color: theme?.primary ?? "#d97706" }} />
          <h2 className="text-3xl font-bold">{heading}</h2>
        </div>
        <p className="text-sm opacity-50 mb-12">{subheading}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.slice(0, 2).map((item, i) => (
            <article key={i} className="rounded-2xl p-6 border-2" style={{ borderColor: theme?.primary ?? "#d97706" }}>
              <div className="flex items-center gap-2 text-xs opacity-50 mb-3">
                <User className="w-3 h-3" />
                <span>Guest: {item.label}</span>
                <span>·</span>
                <Clock className="w-3 h-3" />
                <span>{item.value}</span>
              </div>
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="text-sm opacity-60 mt-2 leading-relaxed">{item.description}</p>
              <a href={buttonUrl} className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-full text-sm font-bold text-white" style={{ backgroundColor: theme?.primary ?? "#d97706" }}>
                <Play className="w-4 h-4 fill-white" /> Listen Now
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
