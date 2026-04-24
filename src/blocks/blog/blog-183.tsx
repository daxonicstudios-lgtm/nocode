import type { BlockProps } from "@/blocks/types";
import { Play, Calendar, User } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "Getting Started with TypeScript", description: "Everything a JavaScript developer needs to know to make the switch.", label: "Sarah Kim", value: "16:22", url: "Mar 2026" },
  { title: "Supabase Authentication Guide", description: "Set up email, OAuth, and magic link auth in under 10 minutes.", label: "James Obi", value: "09:45", url: "Apr 2026" },
  { title: "Deploying to the Edge", description: "Why edge functions matter and how to use them effectively.", label: "Nia Okafor", value: "21:10", url: "Apr 2026" },
  { title: "Tailwind CSS Tips and Tricks", description: "Power-user techniques for writing utility-first CSS faster.", label: "Leo Santos", value: "12:38", url: "Apr 2026" },
];

export default function Blog183(props: BlockProps) {
  const { theme, heading = "Video Library", items = DEFAULT_ITEMS, buttonUrl = "#" } = props;

  return (
    <section style={{ backgroundColor: theme?.background ?? "#f9fafb", color: theme?.foreground ?? "#111827" }} className="px-5 py-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12">{heading}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {items.slice(0, 4).map((item, i) => (
            <a key={i} href={buttonUrl} className="group flex gap-4 p-3 rounded-xl hover:bg-gray-100 transition-colors">
              <div className="relative w-40 h-24 rounded-lg overflow-hidden shrink-0" style={{ backgroundColor: theme?.secondary ?? "#e5e7eb" }}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-black/50 group-hover:bg-black/70 transition-colors">
                    <Play className="w-4 h-4 text-white fill-white" />
                  </div>
                </div>
                <span className="absolute bottom-1 right-1 px-1.5 py-0.5 rounded text-[10px] font-mono bg-black/70 text-white">{item.value}</span>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-sm leading-snug">{item.title}</h3>
                <p className="text-xs opacity-50 mt-1 line-clamp-2">{item.description}</p>
                <div className="flex items-center gap-3 mt-2 text-[10px] opacity-40">
                  <span className="flex items-center gap-1"><User className="w-3 h-3" />{item.label}</span>
                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{String(item.url)}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
