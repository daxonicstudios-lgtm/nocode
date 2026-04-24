import type { BlockProps } from "@/blocks/types";
import { Sparkles, Heart, Flame, Star } from "lucide-react";

const icons = [Sparkles, Heart, Flame, Star];

export default function Features338(props: BlockProps) {
  const {
    theme,
    heading = "Creative Collage",
    subheading = "Features arranged in an organic, magazine-style layout",
    items = [
      { title: "Mood Boards", description: "Curate visual inspiration that drives cohesive creative direction." },
      { title: "Client Portals", description: "Share work-in-progress and collect feedback in a branded space." },
      { title: "Asset Library", description: "Organized media library with tags, folders, and smart search." },
      { title: "Template Studio", description: "Create reusable templates that maintain brand consistency at scale." },
    ],
  } = props;

  const primary = theme?.primary || "#e11d48";
  const accent = theme?.accent || "#f59e0b";

  return (
    <section style={{ backgroundColor: theme?.background || "#fefce8", color: theme?.foreground || "#1a1a1a" }} className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-black mb-2 text-center">{heading}</h2>
        <p className="opacity-60 text-center mb-14">{subheading}</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[140px]">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            const spans = i === 0 ? "col-span-2 row-span-2" : i === 3 ? "col-span-2" : "";
            const bg = i % 2 === 0 ? primary : accent;
            return (
              <div key={i} className={`${spans} rounded-2xl p-5 flex flex-col justify-end relative overflow-hidden`} style={{ backgroundColor: `${bg}12` }}>
                <Icon size={48} className="absolute top-3 right-3 opacity-10" style={{ color: bg }} />
                <h3 className="font-bold text-sm sm:text-base mb-1 relative z-10">{item.title}</h3>
                <p className="text-xs opacity-50 leading-relaxed relative z-10 line-clamp-2">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
