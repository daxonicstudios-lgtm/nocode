import type { BlockProps } from "@/blocks/types";
import { Play, ChevronRight } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "Product Demo: Website Builder", description: "See the full power of our AI-assisted website builder in action.", label: "Product", value: "5:30" },
  { title: "Customer Story: Nairobi Tech Hub", description: "How a Kenyan startup built their web presence in one afternoon.", label: "Case Study", value: "8:15" },
  { title: "What is New in Version 3.0", description: "A tour of all the new features and improvements.", label: "Update", value: "12:00" },
];

export default function Blog187(props: BlockProps) {
  const { theme, heading = "Video Posts", items = DEFAULT_ITEMS, buttonText = "Watch Now", buttonUrl = "#" } = props;

  return (
    <section style={{ backgroundColor: theme?.background ?? "#fafafa", color: theme?.foreground ?? "#171717" }} className="px-5 py-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-14">{heading}</h2>
        <div className="space-y-8">
          {items.slice(0, 3).map((item, i) => (
            <article key={i} className="flex flex-col md:flex-row gap-6 group">
              <a href={buttonUrl} className="relative md:w-80 aspect-video rounded-2xl overflow-hidden shrink-0 block" style={{ backgroundColor: theme?.secondary ?? "#e5e5e5" }}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: theme?.primary ?? "#6366f1" }}>
                    <Play className="w-6 h-6 text-white fill-white" />
                  </div>
                </div>
                <span className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-black/70 text-white text-xs font-mono">{item.value}</span>
              </a>
              <div className="flex-1 flex flex-col justify-center">
                <span className="text-xs font-bold uppercase tracking-wider" style={{ color: theme?.primary ?? "#6366f1" }}>{item.label}</span>
                <h3 className="mt-2 text-xl font-bold">{item.title}</h3>
                <p className="mt-2 text-sm opacity-60">{item.description}</p>
                <a href={buttonUrl} className="inline-flex items-center gap-1 mt-4 text-sm font-semibold" style={{ color: theme?.primary ?? "#6366f1" }}>
                  {buttonText} <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
