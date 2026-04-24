import type { BlockProps } from "@/blocks/types";
import { User, Quote } from "lucide-react";

const POSTS = [
  { title: "Rethinking Notifications", description: "Less noise, more signal — a framework for respectful alerts.", label: "UX" },
  { title: "Managing Up Effectively", description: "Communicate wins, blockers, and plans with clarity.", label: "Career" },
];

export default function Blog238(props: BlockProps) {
  const { theme, heading = "Author Feature", subheading = "Software is a team sport. Ship fast, learn faster.", items = POSTS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-16 sm:py-24">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <aside className="w-full md:w-72 shrink-0 p-6 rounded-2xl" style={{ backgroundColor: theme?.accent ? `${theme.accent}15` : "#f9fafb" }}>
            <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: theme?.primary ?? "#6366f1" }}><User className="w-8 h-8 text-white" /></div>
            <h3 className="mt-4 font-bold text-lg">Nadia Petrova</h3>
            <p className="text-xs opacity-50 mt-1">VP of Engineering</p>
            <div className="mt-4 flex items-start gap-2">
              <Quote className="w-4 h-4 shrink-0 mt-0.5 opacity-30" />
              <p className="text-sm italic opacity-70">{subheading}</p>
            </div>
          </aside>
          <div className="flex-1">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">{heading}</h2>
            <div className="space-y-4">
              {items.slice(0, 2).map((post, i) => (
                <article key={i} className="p-5 border rounded-xl" style={{ borderColor: theme?.accent ?? "#e5e7eb" }}>
                  <span className="text-xs font-bold uppercase" style={{ color: theme?.primary ?? "#6366f1" }}>{post.label}</span>
                  <h3 className="mt-2 text-lg font-bold">{post.title}</h3>
                  <p className="mt-1 text-sm opacity-70">{post.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
