import type { BlockProps } from "@/blocks/types";
import { Heart, MessageCircle, MoreHorizontal, User } from "lucide-react";

const DEFAULTS = [
  { title: "Midnight coding session results", description: "Built an entire landing page between 10pm and 2am. Shipping it tomorrow.", label: "Alex Mensah", value: "30m ago" },
  { title: "Design inspiration from nature", description: "Took a walk in the park today and noticed patterns everywhere. Nature is the best designer.", label: "Lena Osei", value: "2h ago" },
  { title: "Client feedback that made my day", description: "They said the website was exactly what they imagined. Moments like these make it all worth it.", label: "Omar Hassan", value: "4h ago" },
];

export default function Blog276(props: BlockProps) {
  const { theme, heading = "Night Feed", items = DEFAULTS } = props;

  return (
    <section style={{ backgroundColor: theme?.background ?? "#0f172a", color: theme?.foreground ?? "#e2e8f0" }} className="px-4 py-16">
      <div className="max-w-xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">{heading}</h2>
        <div className="space-y-4">
          {items.map((post, i) => (
            <article key={i} className="rounded-2xl p-4" style={{ backgroundColor: theme?.accent ?? "#1e293b" }}>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: theme?.secondary ?? "#334155" }}>
                    <User className="w-5 h-5 opacity-50" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{String(post.label ?? "")}</p>
                    <p className="text-xs opacity-40">{String(post.value ?? "")}</p>
                  </div>
                </div>
                <MoreHorizontal className="w-5 h-5 opacity-30" />
              </div>
              <h3 className="font-semibold">{post.title}</h3>
              <p className="text-sm opacity-60 mt-1 leading-relaxed">{post.description}</p>
              <div className="flex items-center gap-5 mt-4">
                <button className="flex items-center gap-1.5 text-xs opacity-50"><Heart className="w-4 h-4" /> {30 + i * 15}</button>
                <button className="flex items-center gap-1.5 text-xs opacity-50"><MessageCircle className="w-4 h-4" /> {8 + i * 4}</button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
