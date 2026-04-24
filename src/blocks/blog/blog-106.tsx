import type { BlockProps } from "@/blocks/types";
import { Calendar, User } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "Migrating to TypeScript 6.0", description: "A step-by-step guide to upgrading your codebase with zero downtime.", label: "TypeScript", value: "Mar 15" },
  { title: "Designing for Dark Mode", description: "Beyond inverting colors — creating truly adaptive interfaces.", label: "UI/UX", value: "Mar 12" },
  { title: "Real-time Collaboration Patterns", description: "CRDTs, OT, and pragmatic approaches to multiplayer editing.", label: "Systems", value: "Mar 9" },
];

export default function Blog106(props: BlockProps) {
  const { theme, heading = "Recent Posts", items = DEFAULT_ITEMS } = props;

  return (
    <section
      className="px-5 py-20"
      style={{
        background: theme?.background ?? "linear-gradient(to bottom right, #0f172a, #1e1b4b)",
        color: theme?.foreground ?? "#e2e8f0",
      }}
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-12">{heading}</h2>
        <div className="space-y-5">
          {items.slice(0, 3).map((item, i) => (
            <article
              key={i}
              className="rounded-2xl backdrop-blur-xl border border-white/10 p-6 flex flex-col sm:flex-row gap-4 hover:bg-white/5 transition-colors"
              style={{ background: "rgba(255,255,255,0.03)" }}
            >
              <div
                className="w-full sm:w-20 h-20 rounded-xl flex-shrink-0 flex items-center justify-center text-2xl font-black"
                style={{ background: `${theme?.primary ?? "#6366f1"}30`, color: theme?.primary ?? "#818cf8" }}
              >
                {String(i + 1).padStart(2, "0")}
              </div>
              <div>
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className="mt-1 text-sm opacity-60">{item.description}</p>
                <div className="flex gap-4 mt-2 text-xs opacity-40">
                  <span className="flex items-center gap-1"><User className="w-3 h-3" />Staff Writer</span>
                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{String(item.value)}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
