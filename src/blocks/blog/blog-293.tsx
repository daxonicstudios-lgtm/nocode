import type { BlockProps } from "@/blocks/types";
import { MoveRight } from "lucide-react";

const DEFAULTS = [
  { title: "WE SHIP FAST", description: "New features every single week. No excuses.", label: "CULTURE", value: "01" },
  { title: "BUILD DIFFERENT", description: "Stop copying. Start creating something original.", label: "OPINION", value: "02" },
  { title: "CODE IS DEAD", description: "Long live no-code. The future is visual.", label: "MANIFESTO", value: "03" },
  { title: "DESIGN MATTERS", description: "Every pixel. Every interaction. Every detail.", label: "DESIGN", value: "04" },
];

export default function Blog293(props: BlockProps) {
  const { theme, heading = "THE BLOG", items = DEFAULTS } = props;

  return (
    <section style={{ backgroundColor: theme?.background ?? "#000", color: theme?.foreground ?? "#fff" }} className="px-4 py-16">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-5xl sm:text-7xl font-black tracking-tighter mb-12">{heading}</h2>
        <div className="space-y-0 divide-y" style={{ borderColor: theme?.secondary ?? "#333" }}>
          {items.map((post, i) => (
            <article key={i} className="py-8 sm:py-10 flex items-start justify-between gap-4 cursor-pointer group">
              <div className="flex-1">
                <span className="text-xs font-bold tracking-[0.2em] opacity-40">{String(post.label ?? "")}</span>
                <h3 className="text-2xl sm:text-4xl font-black tracking-tight mt-2 group-hover:opacity-60 transition-opacity">{post.title}</h3>
                <p className="text-sm sm:text-base opacity-50 mt-2 max-w-lg">{post.description}</p>
              </div>
              <div className="flex items-center gap-2 shrink-0 mt-4">
                <span className="text-3xl font-black opacity-10">{String(post.value ?? "")}</span>
                <MoveRight className="w-6 h-6 opacity-30 group-hover:opacity-60 transition-opacity" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
