import type { BlockProps } from "@/blocks/types";
import { Calendar, BookOpen } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "Server Components Explained Simply", description: "A clear breakdown of React Server Components and when you should use them.", label: "Apr 22, 2026", imageUrl: "", url: "#" },
  { title: "Designing Multi-Step Onboarding Flows", description: "How to guide new users through setup without overwhelming them.", label: "Apr 16, 2026", imageUrl: "", url: "#" },
  { title: "Building Resilient APIs", description: "Patterns for APIs that handle failures gracefully and recover automatically.", label: "Apr 10, 2026", imageUrl: "", url: "#" },
];

const ARCHIVES = [{ label: "April 2026", count: 8 }, { label: "March 2026", count: 12 }, { label: "February 2026", count: 6 }, { label: "January 2026", count: 9 }];

export default function Blog040(props: BlockProps) {
  const { theme, heading = "The Library", items = DEFAULT_ITEMS } = props;

  return (
    <section style={{ backgroundColor: theme?.accent ?? "#f8fafc", color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-10">{heading}</h2>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-10">
          <div className="space-y-6">
            {items.slice(0, 3).map((post, i) => (
              <a key={i} href={post.url ?? "#"} className="group flex flex-col sm:flex-row gap-5 p-5 rounded-2xl" style={{ backgroundColor: theme?.background ?? "#fff" }}>
                <div className="w-full sm:w-48 h-36 rounded-xl shrink-0 overflow-hidden" style={{ backgroundColor: theme?.secondary ?? "#e5e7eb" }}>
                  {post.imageUrl && <img src={post.imageUrl} alt={post.title ?? ""} className="w-full h-full object-cover" />}
                </div>
                <div className="flex flex-col justify-center">
                  <div className="flex items-center gap-1 text-xs opacity-50 mb-1">
                    <Calendar className="w-3 h-3" /> {String(post.label ?? "")}
                  </div>
                  <h3 className="text-lg font-bold group-hover:underline">{post.title}</h3>
                  <p className="mt-1 text-sm opacity-60 line-clamp-2">{post.description}</p>
                </div>
              </a>
            ))}
          </div>
          <aside className="space-y-6">
            <div className="rounded-xl p-5" style={{ backgroundColor: theme?.background ?? "#fff" }}>
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="w-4 h-4" style={{ color: theme?.primary ?? "#6366f1" }} />
                <h3 className="font-bold text-sm">Archives</h3>
              </div>
              <ul className="space-y-2">
                {ARCHIVES.map((a, i) => (
                  <li key={i} className="flex items-center justify-between">
                    <a href="#" className="text-sm opacity-70 hover:underline">{a.label}</a>
                    <span className="text-xs px-2 py-0.5 rounded-full" style={{ backgroundColor: theme?.accent ?? "#f1f5f9" }}>{a.count}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl p-5" style={{ backgroundColor: theme?.background ?? "#fff" }}>
              <h3 className="font-bold text-sm mb-3">Quick Links</h3>
              {["Changelog", "Tutorials", "Case Studies", "Announcements"].map((l) => (
                <a key={l} href="#" className="block text-sm py-1 opacity-70 hover:underline">{l}</a>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
