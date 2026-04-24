import type { BlockProps } from "@/blocks/types";
import { Heart, Send, User } from "lucide-react";

const AUTHORS = ["Sarah", "David", "Amara", "Kwame", "Fatima"];
const DEFAULTS = [
  { title: "Why we chose Supabase over Firebase", description: "Open source, Postgres-based, and perfect for our use case. Here is the full comparison.", label: "Sarah", value: "2h" },
  { title: "Behind our new pricing model", description: "We spent three months talking to users. Here is what we learned and how it shaped our pricing.", label: "David", value: "5h" },
  { title: "Building in public: week 12 update", description: "Revenue hit a new milestone this week. Sharing all the numbers transparently.", label: "Amara", value: "8h" },
];

export default function Blog275(props: BlockProps) {
  const { theme, heading = "From the Team", items = DEFAULTS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-16">
      <div className="max-w-xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">{heading}</h2>
        <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
          {AUTHORS.map((name, i) => (
            <div key={name} className="flex flex-col items-center gap-1 shrink-0">
              <div className="w-14 h-14 rounded-full p-0.5" style={{ background: i < 3 ? `linear-gradient(135deg, ${theme?.primary ?? "#ec4899"}, ${theme?.accent ?? "#8b5cf6"})` : "transparent", border: i >= 3 ? `2px solid ${theme?.secondary ?? "#e5e7eb"}` : "none" }}>
                <div className="w-full h-full rounded-full flex items-center justify-center" style={{ backgroundColor: theme?.background ?? "#fff" }}>
                  <User className="w-5 h-5 opacity-40" />
                </div>
              </div>
              <span className="text-xs opacity-60">{name}</span>
            </div>
          ))}
        </div>
        <div className="space-y-4">
          {items.map((post, i) => (
            <article key={i} className="border rounded-2xl p-4" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }}>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: theme?.accent ?? "#e5e7eb" }}>
                  <User className="w-4 h-4 opacity-40" />
                </div>
                <span className="text-sm font-bold">{String(post.label ?? "")}</span>
                <span className="text-xs opacity-30">{String(post.value ?? "")}</span>
              </div>
              <h3 className="font-semibold">{post.title}</h3>
              <p className="text-sm opacity-70 mt-1">{post.description}</p>
              <div className="flex items-center gap-5 mt-3 pt-3 border-t" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }}>
                <button className="flex items-center gap-1 text-xs opacity-50"><Heart className="w-4 h-4" /> {20 + i * 12}</button>
                <button className="flex items-center gap-1 text-xs opacity-50"><Send className="w-4 h-4" /> Share</button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
