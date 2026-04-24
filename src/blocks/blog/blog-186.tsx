import type { BlockProps } from "@/blocks/types";
import { Play, ListVideo } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "Episode 1: Project Setup", description: "Scaffolding, dependencies, and initial configuration.", value: "08:12" },
  { title: "Episode 2: Authentication", description: "Email sign-up, login, and protected routes.", value: "14:30" },
  { title: "Episode 3: Database Models", description: "Designing tables, relations, and row-level security.", value: "11:45" },
  { title: "Episode 4: API Layer", description: "Server actions, error handling, and validation.", value: "16:20" },
  { title: "Episode 5: UI Components", description: "Building a reusable component library from scratch.", value: "13:55" },
];

export default function Blog186(props: BlockProps) {
  const { theme, heading = "Build Along Series", subheading = "Full-stack app from scratch", items = DEFAULT_ITEMS, buttonUrl = "#" } = props;

  return (
    <section style={{ backgroundColor: theme?.background ?? "#0f172a", color: theme?.foreground ?? "#e2e8f0" }} className="px-5 py-20">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-3 mb-2">
          <ListVideo className="w-5 h-5" style={{ color: theme?.primary ?? "#38bdf8" }} />
          <h2 className="text-2xl sm:text-3xl font-bold">{heading}</h2>
        </div>
        <p className="text-sm opacity-50 mb-10">{subheading}</p>
        <div className="space-y-2">
          {items.slice(0, 5).map((item, i) => (
            <a key={i} href={buttonUrl} className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors group">
              <div className="relative w-24 h-16 rounded-lg overflow-hidden shrink-0" style={{ backgroundColor: theme?.secondary ?? "#1e293b" }}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Play className="w-5 h-5 text-white/60 group-hover:text-white fill-current transition-colors" />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-sm truncate">{item.title}</h3>
                <p className="text-xs opacity-40 truncate">{item.description}</p>
              </div>
              <span className="text-xs font-mono opacity-40 shrink-0">{item.value}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
