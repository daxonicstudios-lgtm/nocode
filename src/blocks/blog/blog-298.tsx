import type { BlockProps } from "@/blocks/types";
import { ChevronRight } from "lucide-react";

const COLORS = ["#6366f1", "#ec4899", "#f59e0b", "#10b981"];
const DEFAULTS = [
  { title: "MAKE IT LOUD", description: "Websites that whisper get ignored. Build something people remember." },
  { title: "BREAK THE RULES", description: "Conventions are starting points, not prisons. Know them, then transcend them." },
  { title: "LAUNCH TODAY", description: "A shipped product beats a perfect mockup. Every single time." },
  { title: "THINK BIGGER", description: "Your no-code site can be as ambitious as any coded application." },
];

export default function Blog298(props: BlockProps) {
  const { theme, heading = "MANIFESTO", items = DEFAULTS } = props;

  return (
    <section style={{ backgroundColor: theme?.background ?? "#000", color: theme?.foreground ?? "#fff" }} className="py-16">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-6xl sm:text-8xl font-black tracking-tighter mb-8 opacity-20">{heading}</h2>
      </div>
      <div className="space-y-2">
        {items.map((post, i) => (
          <article key={i} className="px-4 py-8 sm:py-12 cursor-pointer group" style={{ backgroundColor: theme?.primary ?? COLORS[i % COLORS.length] }}>
            <div className="max-w-5xl mx-auto flex items-center justify-between gap-4">
              <div>
                <h3 className="text-2xl sm:text-4xl font-black text-white tracking-tight">{post.title}</h3>
                <p className="text-sm sm:text-base text-white opacity-70 mt-2">{post.description}</p>
              </div>
              <ChevronRight className="w-8 h-8 text-white opacity-40 shrink-0 group-hover:translate-x-1 transition-transform" />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
