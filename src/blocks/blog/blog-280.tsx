import type { BlockProps } from "@/blocks/types";
import { Heart, CornerDownRight, User } from "lucide-react";

const DEFAULTS = [
  { title: "What is your favorite block category?", description: "I personally love the hero sections. So many options to choose from.", label: "Mike Banda", value: "6h ago" },
  { title: "Heroes are great but check out the testimonials", description: "The social proof blocks have been converting really well for my clients.", label: "Nia Williams", value: "5h ago" },
  { title: "Pricing tables for me", description: "Clear pricing is the single biggest factor in conversion. These blocks nail it.", label: "Tunde Ojo", value: "4h ago" },
];

export default function Blog280(props: BlockProps) {
  const { theme, heading = "Discussion", items = DEFAULTS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-16">
      <div className="max-w-xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">{heading}</h2>
        <div className="space-y-0">
          {items.map((post, i) => (
            <article key={i} className={`flex gap-3 ${i > 0 ? "pl-8 mt-3" : ""}`}>
              {i > 0 && <CornerDownRight className="w-4 h-4 opacity-20 shrink-0 mt-3" />}
              <div className="flex-1 border rounded-xl p-4" style={{ borderColor: theme?.secondary ?? "#e5e7eb", backgroundColor: i === 0 ? theme?.accent ?? "#f9fafb" : "transparent" }}>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: theme?.secondary ?? "#e5e7eb" }}>
                    <User className="w-4 h-4 opacity-40" />
                  </div>
                  <span className="text-sm font-bold">{String(post.label ?? "")}</span>
                  <span className="text-xs opacity-30">{String(post.value ?? "")}</span>
                </div>
                <h3 className="font-semibold text-sm">{post.title}</h3>
                <p className="text-sm opacity-60 mt-1">{post.description}</p>
                <div className="flex items-center gap-4 mt-3">
                  <button className="flex items-center gap-1 text-xs opacity-40"><Heart className="w-3.5 h-3.5" />{8 + i * 5}</button>
                  <button className="text-xs opacity-40">Reply</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
