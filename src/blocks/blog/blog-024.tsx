import type { BlockProps } from "@/blocks/types";
import { Calendar } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "Designing With Constraints", label: "2026-04-22", url: "#" },
  { title: "What Our Support Tickets Reveal About UX", label: "2026-04-16", url: "#" },
  { title: "The Business of Free Plans", label: "2026-04-10", url: "#" },
  { title: "How We Run Effective Remote Standups", label: "2026-04-04", url: "#" },
  { title: "Rebuilding Search From the Ground Up", label: "2026-03-28", url: "#" },
  { title: "Launching in Five New Markets This Quarter", label: "2026-03-20", url: "#" },
];

export default function Blog024(props: BlockProps) {
  const { theme, heading = "Archive", items = DEFAULT_ITEMS } = props;

  return (
    <section style={{ backgroundColor: theme?.accent ?? "#f8fafc", color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-xl mx-auto">
        <h2 className="text-3xl font-bold mb-10">{heading}</h2>
        <ul className="space-y-0">
          {items.slice(0, 6).map((post, i) => (
            <li key={i}>
              <a href={post.url ?? "#"} className="group flex items-center gap-3 py-3.5 border-b" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }}>
                <Calendar className="w-4 h-4 opacity-30 shrink-0" />
                <span className="text-xs opacity-40 font-mono shrink-0">{String(post.label ?? "")}</span>
                <h3 className="font-medium group-hover:underline truncate">{post.title}</h3>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
