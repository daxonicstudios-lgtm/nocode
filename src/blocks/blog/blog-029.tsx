import type { BlockProps } from "@/blocks/types";
import { User, Calendar } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "The Art of Progressive Disclosure in UI", description: "Show less to communicate more. How we simplified our most complex features.", label: "UX Design", imageUrl: "", url: "#" },
  { title: "Building a Culture of Continuous Deployment", description: "How our team ships code multiple times a day without breaking things.", label: "DevOps", imageUrl: "", url: "#" },
  { title: "Understanding African Digital Payment Methods", description: "From mobile money to bank transfers, a guide to payment diversity.", label: "Fintech", imageUrl: "", url: "#" },
];

export default function Blog029(props: BlockProps) {
  const { theme, heading = "Expert Perspectives", items = DEFAULT_ITEMS } = props;

  const authors = ["Amara Diallo", "Lin Wei", "Oluwaseun Adeyemi"];

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12">{heading}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {items.slice(0, 3).map((post, i) => (
            <a key={i} href={post.url ?? "#"} className="group block">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-4" style={{ backgroundColor: theme?.secondary ?? "#e5e7eb" }}>
                {post.imageUrl && <img src={post.imageUrl} alt={post.title ?? ""} className="w-full h-full object-cover" />}
              </div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full border" style={{ borderColor: theme?.primary ?? "#6366f1", color: theme?.primary ?? "#6366f1" }}>{String(post.label ?? "")}</span>
                <div className="flex items-center gap-1 text-xs opacity-40">
                  <Calendar className="w-3 h-3" /> Apr 2026
                </div>
              </div>
              <h3 className="font-bold text-lg leading-snug group-hover:underline">{post.title}</h3>
              <p className="mt-2 text-sm opacity-60 line-clamp-2">{post.description}</p>
              <div className="mt-4 flex items-center gap-2">
                <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: theme?.accent ?? "#f1f5f9" }}>
                  <User className="w-4 h-4 opacity-50" />
                </div>
                <div>
                  <p className="text-sm font-medium">{authors[i % authors.length]}</p>
                  <p className="text-xs opacity-40">Contributing Writer</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
