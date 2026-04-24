import type { BlockProps } from "@/blocks/types";
import { ChevronRight } from "lucide-react";

const POSTS = [
  { title: "Internationalization in React", description: "Multi-language support with i18n libraries.", label: "Frontend" },
  { title: "Customer Interview Techniques", description: "Ask the right questions to uncover real needs.", label: "Research" },
  { title: "Container Security Best Practices", description: "Scan images, limit privileges, and harden runtime.", label: "Security" },
];

export default function Blog225(props: BlockProps) {
  const { theme, heading = "What We Are Writing", items = POSTS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-16 sm:py-24">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">{heading}</h2>
        <div className="grid gap-6 lg:grid-cols-3">
          {items.slice(0, 3).map((post, i) => (
            <article key={i} className="group rounded-2xl p-6 transition-all duration-300 hover:scale-105 cursor-pointer" style={{ backgroundColor: theme?.accent ? `${theme.accent}15` : "#f9fafb" }}>
              <div className="w-12 h-12 rounded-xl mb-4 transition-all duration-300 group-hover:rounded-full" style={{ backgroundColor: theme?.primary ?? "#6366f1" }} />
              <span className="text-xs font-bold uppercase opacity-50">{post.label}</span>
              <h3 className="mt-2 text-lg font-bold">{post.title}</h3>
              <p className="mt-2 text-sm opacity-70">{post.description}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium transition-all duration-300 group-hover:gap-2" style={{ color: theme?.primary ?? "#6366f1" }}>Continue <ChevronRight className="w-4 h-4" /></span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
