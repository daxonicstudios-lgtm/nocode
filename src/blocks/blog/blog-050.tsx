import type { BlockProps } from "@/blocks/types";
import { ArrowRight, Clock } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "Getting Started with Our Platform", description: "A beginner-friendly guide to creating your first project in under five minutes.", label: "Tutorial · 4 min", imageUrl: "", url: "#" },
  { title: "Advanced Customization Techniques", description: "Take your projects to the next level with these power-user tips and hidden features.", label: "Advanced · 7 min", imageUrl: "", url: "#" },
  { title: "Community Spotlight: March Edition", description: "Highlighting the most creative and inspiring projects built by our community this month.", label: "Community · 3 min", imageUrl: "", url: "#" },
];

export default function Blog050(props: BlockProps) {
  const { theme, heading = "Blog", subheading = "Thoughts, stories, and ideas from our team.", items = DEFAULT_ITEMS, buttonText = "Sign Up" } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <h2 className="text-3xl sm:text-4xl font-bold">{heading}</h2>
            <p className="mt-2 opacity-60">{subheading}</p>
          </div>
          <div className="rounded-xl p-6 flex flex-col justify-center" style={{ backgroundColor: theme?.accent ?? "#f1f5f9" }}>
            <p className="text-sm font-bold">Weekly Digest</p>
            <p className="text-xs opacity-50 mt-1">The best posts, curated for you.</p>
            <div className="mt-3 flex gap-2">
              <input type="email" placeholder="Email" className="flex-1 min-w-0 px-3 py-2 rounded-lg border text-xs" style={{ borderColor: theme?.secondary ?? "#e5e7eb", backgroundColor: theme?.background ?? "#fff" }} />
              <button className="px-3 py-2 rounded-lg text-xs font-bold text-white shrink-0" style={{ backgroundColor: theme?.primary ?? "#6366f1" }}>{buttonText}</button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {items.slice(0, 3).map((post, i) => (
            <a key={i} href={post.url ?? "#"} className="group block">
              <div className="aspect-[4/3] rounded-xl overflow-hidden mb-4" style={{ backgroundColor: theme?.secondary ?? "#e5e7eb" }}>
                {post.imageUrl && <img src={post.imageUrl} alt={post.title ?? ""} className="w-full h-full object-cover" />}
              </div>
              <h3 className="font-bold leading-snug group-hover:underline">{post.title}</h3>
              <p className="mt-2 text-sm opacity-60 line-clamp-2">{post.description}</p>
              <div className="mt-3 flex items-center justify-between">
                <div className="flex items-center gap-1 text-xs opacity-40">
                  <Clock className="w-3 h-3" /> {String(post.label ?? "")}
                </div>
                <ArrowRight className="w-4 h-4 opacity-30 group-hover:opacity-70" />
              </div>
            </a>
          ))}
        </div>
        <div className="mt-14 rounded-2xl p-8 sm:p-10 text-center" style={{ backgroundColor: theme?.primary ?? "#6366f1" }}>
          <h3 className="text-2xl font-bold text-white">Never miss an update</h3>
          <p className="mt-2 text-sm text-white/70 max-w-md mx-auto">Subscribe to our newsletter and get new articles, product news, and exclusive tips delivered weekly.</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-3 rounded-lg text-sm" style={{ backgroundColor: "rgba(255,255,255,0.2)", color: "#fff" }} />
            <button className="px-6 py-3 rounded-lg text-sm font-bold bg-white shrink-0" style={{ color: theme?.primary ?? "#6366f1" }}>Subscribe</button>
          </div>
        </div>
      </div>
    </section>
  );
}
