import type { BlockProps } from "@/blocks/types";
import { ArrowRight, User } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "Launching Products in Uncertain Markets", description: "How we validated demand before writing a single line of code.", label: "Product", imageUrl: "", url: "#" },
  { title: "Accessibility Audits: Our Process", description: "The step-by-step methodology we follow to ensure every feature meets WCAG guidelines.", label: "Engineering", imageUrl: "", url: "#" },
  { title: "Year in Review: What We Shipped", description: "A visual recap of every feature, improvement, and milestone from the past twelve months.", label: "Company", imageUrl: "", url: "#" },
  { title: "How We Use Our Own Product", description: "Dogfooding insights from building our marketing site on our own platform.", label: "Product", imageUrl: "", url: "#" },
  { title: "The Stack Behind Our Real-Time Features", description: "WebSockets, presence indicators, and conflict resolution at scale.", label: "Backend", imageUrl: "", url: "#" },
  { title: "Hiring Remotely in Africa", description: "What we learned building a distributed team across six countries.", label: "Culture", imageUrl: "", url: "#" },
];

export default function Blog035(props: BlockProps) {
  const { theme, heading = "The Blog", items = DEFAULT_ITEMS } = props;

  return (
    <section className="px-5 py-20" style={{ backgroundColor: theme?.background ?? "#111827", color: theme?.foreground ?? "#9ca3af" }}>
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">{heading}</h2>
          <a href="#" className="hidden sm:flex items-center gap-1 text-sm font-semibold" style={{ color: theme?.primary ?? "#818cf8" }}>
            View all <ArrowRight className="w-4 h-4" />
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {items.slice(0, 6).map((post, i) => (
            <a key={i} href={post.url ?? "#"} className="group block rounded-xl p-5" style={{ backgroundColor: "rgba(255,255,255,0.04)" }}>
              <span className="inline-block text-xs font-semibold px-2 py-0.5 rounded-full mb-3" style={{ backgroundColor: "rgba(255,255,255,0.08)", color: theme?.primary ?? "#818cf8" }}>{String(post.label ?? "")}</span>
              <h3 className="font-bold text-white group-hover:underline">{post.title}</h3>
              <p className="mt-2 text-sm opacity-50 line-clamp-2">{post.description}</p>
              <div className="mt-4 flex items-center gap-2">
                <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: "rgba(255,255,255,0.08)" }}>
                  <User className="w-3 h-3 opacity-50" />
                </div>
                <span className="text-xs opacity-40">Team</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
