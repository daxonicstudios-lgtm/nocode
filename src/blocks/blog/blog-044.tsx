import type { BlockProps } from "@/blocks/types";
import { User } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "How to Pick Fonts That Pair Well Together", description: "A systematic approach to typography pairing that works every time, no design degree required.", label: "Typography", imageUrl: "", url: "#" },
  { title: "Webhooks 101", description: "Connect services without code.", label: "Tutorial", imageUrl: "", url: "#" },
  { title: "What Users Really Want From a Builder", description: "Insights from 300 interviews across six countries that surprised us and reshaped our roadmap.", label: "Research", imageUrl: "", url: "#" },
  { title: "CSS Container Queries Are Here", description: "The responsive design feature we have been waiting years for.", label: "CSS", imageUrl: "", url: "#" },
  { title: "How to Write a Privacy Policy People Understand", description: "Plain-language templates and tips for staying compliant without confusing your visitors.", label: "Legal", imageUrl: "", url: "#" },
  { title: "Building a Portfolio Site That Gets Hired", description: "What hiring managers actually look for and how to showcase your work effectively.", label: "Career", imageUrl: "", url: "#" },
];

export default function Blog044(props: BlockProps) {
  const { theme, heading = "Magazine", items = DEFAULT_ITEMS } = props;

  const authors = ["Ada Obi", "Kwame Asante", "Fatima Al-Rashidi", "Luca Rossi", "Aisha Bello", "Chen Wei"];

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12">{heading}</h2>
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
          {items.slice(0, 6).map((post, i) => (
            <a key={i} href={post.url ?? "#"} className="group block break-inside-avoid rounded-xl p-5 border" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }}>
              {i < 2 && (
                <div className="aspect-[3/2] rounded-lg mb-4 overflow-hidden" style={{ backgroundColor: theme?.secondary ?? "#e5e7eb" }}>
                  {post.imageUrl && <img src={post.imageUrl} alt={post.title ?? ""} className="w-full h-full object-cover" />}
                </div>
              )}
              <span className="text-xs font-bold px-2 py-0.5 rounded" style={{ backgroundColor: theme?.accent ?? "#f1f5f9", color: theme?.primary ?? "#6366f1" }}>{String(post.label ?? "")}</span>
              <h3 className="mt-3 font-bold leading-snug group-hover:underline">{post.title}</h3>
              <p className="mt-2 text-sm opacity-60">{post.description}</p>
              <div className="mt-3 flex items-center gap-2">
                <div className="w-5 h-5 rounded-full flex items-center justify-center" style={{ backgroundColor: theme?.accent ?? "#f1f5f9" }}>
                  <User className="w-3 h-3 opacity-50" />
                </div>
                <span className="text-xs opacity-50">{authors[i % authors.length]}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
