import type { BlockProps } from "@/blocks/types";
import { MessageCircle, Share2, Heart } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "Why We Switched to TypeScript", description: "The migration story, the pain, and the payoff.", label: "24 comments", value: "142 shares" },
  { title: "Remote Team Rituals That Work", description: "Virtual coffee, async standups, and monthly game nights.", label: "18 comments", value: "89 shares" },
  { title: "Pricing Experiments That Failed", description: "Three pricing models we tried and why they did not stick.", label: "31 comments", value: "205 shares" },
];

export default function Blog086(props: BlockProps) {
  const { theme, heading = "Most Discussed", items = DEFAULT_ITEMS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-10">{heading}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.slice(0, 3).map((post, i) => (
            <article key={i} className="rounded-xl overflow-hidden border" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }}>
              <div className="aspect-[16/10]" style={{ backgroundColor: theme?.secondary ?? "#e5e7eb" }} />
              <div className="p-5">
                <h3 className="font-bold text-base">{post.title}</h3>
                <p className="mt-2 text-sm opacity-60">{post.description}</p>
                <div className="flex items-center gap-4 mt-4 pt-4 border-t text-xs opacity-50" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }}>
                  <span className="flex items-center gap-1"><MessageCircle className="w-3.5 h-3.5" />{String(post.label).replace(" comments", "")}</span>
                  <span className="flex items-center gap-1"><Share2 className="w-3.5 h-3.5" />{String(post.value).replace(" shares", "")}</span>
                  <Heart className="w-3.5 h-3.5 ml-auto cursor-pointer hover:text-red-500 transition-colors" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
