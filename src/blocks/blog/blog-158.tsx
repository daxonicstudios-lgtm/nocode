import type { BlockProps } from "@/blocks/types";
import { Eye, Share2 } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "Responsive Images Done Right", description: "srcset, sizes, and modern formats for every screen.", label: "2.4k views", value: "Frontend" },
  { title: "Zero-Downtime Deployments", description: "Blue-green and canary strategies for production safety.", label: "1.8k views", value: "Infrastructure" },
];

export default function Blog158(props: BlockProps) {
  const { theme, heading = "Popular Reads", items = DEFAULT_ITEMS } = props;

  return (
    <section style={{ backgroundColor: theme?.background ?? "#dee2e6", color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">{heading}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {items.slice(0, 2).map((item, i) => (
            <article
              key={i}
              className="rounded-3xl p-8"
              style={{ backgroundColor: theme?.background ?? "#dee2e6", boxShadow: "10px 10px 20px #bec2c6, -10px -10px 20px #feffff" }}
            >
              <div
                className="aspect-video rounded-xl mb-5"
                style={{ backgroundColor: theme?.background ?? "#dee2e6", boxShadow: "inset 6px 6px 12px #bec2c6, inset -6px -6px 12px #feffff" }}
              />
              <span className="text-xs font-bold uppercase" style={{ color: theme?.primary ?? "#7c3aed" }}>{item.value}</span>
              <h3 className="mt-2 text-xl font-bold">{item.title}</h3>
              <p className="mt-2 text-sm opacity-60">{item.description}</p>
              <div className="mt-4 flex items-center gap-4 text-xs opacity-50">
                <span className="flex items-center gap-1"><Eye className="w-3 h-3" />{item.label}</span>
                <button className="flex items-center gap-1 hover:opacity-80"><Share2 className="w-3 h-3" />Share</button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
