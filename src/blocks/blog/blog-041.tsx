import type { BlockProps } from "@/blocks/types";
import { Clock } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "How AI Is Changing the Creative Process", description: "From generating copy to suggesting layouts, AI tools are becoming integral to how we design websites.", label: "AI · 8 min", imageUrl: "", url: "#" },
  { title: "The Minimal Viable Website", description: "What you actually need on day one.", label: "Strategy · 3 min", imageUrl: "", url: "#" },
  { title: "Optimizing Images for the Web Without Losing Quality", description: "Compression techniques and modern formats that keep your site fast and your photos sharp.", label: "Performance · 6 min", imageUrl: "", url: "#" },
  { title: "Why Every Page Needs a Clear Call to Action", description: "Pages without purpose do not convert.", label: "Marketing · 4 min", imageUrl: "", url: "#" },
  { title: "Building Websites That Work on 2G Networks", description: "Progressive enhancement strategies for the slowest connections on earth. We tested on real devices in rural areas to understand what users actually experience.", label: "Engineering · 10 min", imageUrl: "", url: "#" },
  { title: "Color Theory for Non-Designers", description: "Pick palettes that work without a degree in art.", label: "Design · 5 min", imageUrl: "", url: "#" },
];

export default function Blog041(props: BlockProps) {
  const { theme, heading = "Latest Reads", items = DEFAULT_ITEMS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12">{heading}</h2>
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {items.slice(0, 6).map((post, i) => (
            <a key={i} href={post.url ?? "#"} className="group block break-inside-avoid rounded-xl border p-5" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }}>
              {i % 2 === 0 && (
                <div className="aspect-[4/3] rounded-lg mb-4 overflow-hidden" style={{ backgroundColor: theme?.secondary ?? "#e5e7eb" }}>
                  {post.imageUrl && <img src={post.imageUrl} alt={post.title ?? ""} className="w-full h-full object-cover" />}
                </div>
              )}
              <h3 className="font-bold leading-snug group-hover:underline">{post.title}</h3>
              <p className="mt-2 text-sm opacity-60">{post.description}</p>
              <div className="mt-3 flex items-center gap-1 text-xs opacity-40">
                <Clock className="w-3 h-3" /> {String(post.label ?? "")}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
