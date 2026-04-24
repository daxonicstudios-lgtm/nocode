import type { BlockProps } from "@/blocks/types";
import { Heart, ArrowUpRight } from "lucide-react";

const POSTS = [
  { title: "Onboarding That Sticks", description: "Turn new signups into power users with these proven flows.", label: "Growth" },
  { title: "Typography Hierarchy Essentials", description: "Visual rhythm starts with choosing the right type scale.", label: "Design" },
  { title: "Monitoring Distributed Systems", description: "Observability tools and strategies for complex architectures.", label: "DevOps" },
  { title: "Psychology of Pricing Pages", description: "Anchoring, decoy effects, and layout tips that drive upgrades.", label: "Conversion" },
];

export default function Blog209(props: BlockProps) {
  const { theme, heading = "Must-Read Articles", items = POSTS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-16 sm:py-24">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-10">{heading}</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {items.slice(0, 4).map((post, i) => (
            <article key={i} className="group relative p-5 rounded-xl border flex flex-col" style={{ borderColor: theme?.accent ?? "#e5e7eb" }}>
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold px-2 py-0.5 rounded" style={{ backgroundColor: theme?.primary ?? "#6366f1", color: "#fff" }}>{post.label}</span>
                <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition" />
              </div>
              <h3 className="mt-3 text-lg font-bold">{post.title}</h3>
              <p className="mt-1 text-sm opacity-70 flex-1">{post.description}</p>
              <button className="mt-4 self-start flex items-center gap-1 text-sm opacity-50 hover:opacity-100 transition" aria-label="Like">
                <Heart className="w-4 h-4" /> Like
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
