import type { BlockProps } from "@/blocks/types";
import { Calendar, ArrowRight } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "How We Reduced Our Bundle Size by 50%", description: "Tree shaking, code splitting, and lazy loading techniques that halved our JavaScript payload.", label: "Apr 22, 2026", imageUrl: "", url: "#" },
  { title: "The Complete Guide to Social Proof on Websites", description: "Testimonials, reviews, and trust signals that increase conversions for any business.", label: "Apr 16, 2026", imageUrl: "", url: "#" },
  { title: "Why We Chose Supabase Over Firebase", description: "An honest comparison of two backend platforms from the team that evaluated both.", label: "Apr 10, 2026", imageUrl: "", url: "#" },
  { title: "Building Multi-Language Websites", description: "Technical strategies for serving content in multiple languages without duplicating your codebase.", label: "Apr 4, 2026", imageUrl: "", url: "#" },
];

export default function Blog048(props: BlockProps) {
  const { theme, heading = "From the Blog", subheading = "Practical knowledge from people who build.", items = DEFAULT_ITEMS, buttonText = "Get Updates" } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold">{heading}</h2>
          <p className="mt-2 opacity-60">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-14">
          {items.slice(0, 4).map((post, i) => (
            <a key={i} href={post.url ?? "#"} className="group block rounded-xl border p-5" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }}>
              <div className="flex items-center gap-1 text-xs opacity-50 mb-2">
                <Calendar className="w-3 h-3" /> {String(post.label ?? "")}
              </div>
              <h3 className="font-bold leading-snug group-hover:underline">{post.title}</h3>
              <p className="mt-2 text-sm opacity-60 line-clamp-2">{post.description}</p>
              <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium" style={{ color: theme?.primary ?? "#6366f1" }}>
                Read <ArrowRight className="w-3 h-3" />
              </span>
            </a>
          ))}
        </div>
        <div className="border-t pt-10" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }}>
          <div className="max-w-xl mx-auto text-center">
            <h3 className="text-xl font-bold">Want more like this?</h3>
            <p className="mt-2 text-sm opacity-60">Join 5,000+ readers who get our best articles every week.</p>
            <div className="mt-4 flex flex-col sm:flex-row gap-3 justify-center">
              <input type="email" placeholder="Enter your email" className="px-4 py-3 rounded-lg border text-sm sm:w-64" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }} />
              <button className="px-6 py-3 rounded-lg text-sm font-semibold text-white" style={{ backgroundColor: theme?.primary ?? "#6366f1" }}>{buttonText}</button>
            </div>
            <p className="mt-2 text-xs opacity-40">No spam. Unsubscribe at any time.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
