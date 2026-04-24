import type { BlockProps } from "@/blocks/types";
import { User, ArrowRight } from "lucide-react";

const AUTHORS = [
  { title: "Amira Okafor", description: "Writes about frontend architecture and performance.", label: "8 posts" },
  { title: "David Kim", description: "Covers DevOps, CI/CD, and cloud infrastructure.", label: "11 posts" },
];
const POSTS = [
  { title: "Lazy Loading Strategies", description: "Defer loading assets until they are needed.", label: "Performance" },
  { title: "Infrastructure as Code", description: "Manage servers with Terraform and Pulumi.", label: "DevOps" },
  { title: "Browser Rendering Pipeline", description: "Understand how pixels get to the screen.", label: "Web" },
];

export default function Blog234(props: BlockProps) {
  const { theme, heading = "From Our Authors", items = POSTS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-16 sm:py-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10">{heading}</h2>
        <div className="grid gap-8 lg:grid-cols-[1fr_300px]">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {items.slice(0, 3).map((post, i) => (
              <article key={i} className="border rounded-xl p-4" style={{ borderColor: theme?.accent ?? "#e5e7eb" }}>
                <span className="text-xs font-bold uppercase" style={{ color: theme?.primary ?? "#6366f1" }}>{post.label}</span>
                <h3 className="mt-2 font-bold">{post.title}</h3>
                <p className="mt-1 text-sm opacity-70">{post.description}</p>
              </article>
            ))}
          </div>
          <aside className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wide opacity-50">Authors</h3>
            {AUTHORS.map((a, i) => (
              <div key={i} className="flex items-center gap-3 p-3 rounded-xl" style={{ backgroundColor: theme?.accent ? `${theme.accent}15` : "#f9fafb" }}>
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: theme?.primary ?? "#6366f1" }}><User className="w-5 h-5 text-white" /></div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-sm">{a.title}</p>
                  <p className="text-xs opacity-50">{a.label}</p>
                </div>
                <ArrowRight className="w-4 h-4 opacity-30" />
              </div>
            ))}
          </aside>
        </div>
      </div>
    </section>
  );
}
