import type { BlockProps } from "@/blocks/types";
import { MessageCircle, AtSign, Link2, Mail } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "Migrating from REST to GraphQL", description: "A phased approach that kept our API stable during the transition.", label: "45 comments" },
  { title: "Employee Equity Explained", description: "Stock options, vesting schedules, and tax implications simplified.", label: "22 comments" },
  { title: "Building a Developer Community", description: "From Discord server to 10,000 active members in one year.", label: "67 comments" },
];

export default function Blog088(props: BlockProps) {
  const { theme, heading = "Trending Articles", items = DEFAULT_ITEMS } = props;
  const shareIcons = [AtSign, Link2, Mail];

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-10">{heading}</h2>
        <div className="space-y-6">
          {items.slice(0, 3).map((post, i) => (
            <article key={i} className="p-6 rounded-2xl border" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }}>
              <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                <div className="w-full sm:w-44 h-28 shrink-0 rounded-xl" style={{ backgroundColor: theme?.secondary ?? "#e5e7eb" }} />
                <div className="flex-1">
                  <h3 className="font-bold text-lg">{post.title}</h3>
                  <p className="mt-1 text-sm opacity-60">{post.description}</p>
                  <div className="flex items-center gap-4 mt-3">
                    <span className="flex items-center gap-1 text-xs opacity-50">
                      <MessageCircle className="w-3.5 h-3.5" /> {String(post.label)}
                    </span>
                    <div className="flex gap-2 ml-auto">
                      {shareIcons.map((Icon, j) => (
                        <button key={j} className="w-7 h-7 rounded-full flex items-center justify-center" style={{ backgroundColor: theme?.secondary ?? "#f1f5f9" }}>
                          <Icon className="w-3.5 h-3.5 opacity-50" />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
