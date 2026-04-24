import type { BlockProps } from "@/blocks/types";
import { Clock, Shield } from "lucide-react";

const POSTS = [
  { title: "Web Security Fundamentals", description: "XSS, CSRF, and SQL injection prevention for every developer.", label: "Intermediate", value: "8 min" },
  { title: "Deploying to the Edge", description: "Move your compute closer to users with edge functions.", label: "Advanced", value: "12 min" },
  { title: "Writing Accessible Forms", description: "Labels, ARIA, and focus management done properly.", label: "Beginner", value: "6 min" },
];

export default function Blog219(props: BlockProps) {
  const { theme, heading = "Knowledge Base", items = POSTS } = props;
  const bg = (l: string) => l === "Advanced" ? "#fef2f2" : l === "Intermediate" ? "#fffbeb" : "#f0fdf4";
  const fg = (l: string) => l === "Advanced" ? "#dc2626" : l === "Intermediate" ? "#d97706" : "#16a34a";

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-16 sm:py-24">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-10">{heading}</h2>
        <div className="space-y-5">
          {items.slice(0, 3).map((post, i) => (
            <article key={i} className="flex flex-col sm:flex-row gap-4 p-5 rounded-2xl" style={{ backgroundColor: bg(post.label ?? "") }}>
              <div className="w-12 h-12 shrink-0 rounded-xl flex items-center justify-center" style={{ backgroundColor: fg(post.label ?? "") }}>
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold" style={{ color: fg(post.label ?? "") }}>{post.label}</span>
                  <span className="text-xs opacity-40 flex items-center gap-1"><Clock className="w-3 h-3" />{post.value}</span>
                </div>
                <h3 className="text-lg font-bold">{post.title}</h3>
                <p className="mt-1 text-sm opacity-70">{post.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
