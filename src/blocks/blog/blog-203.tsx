import type { BlockProps } from "@/blocks/types";
import { Heart, Share2 } from "lucide-react";

const POSTS = [
  { title: "Zero to Launch in 30 Days", description: "A step-by-step playbook for shipping your MVP fast.", label: "Startup", imageUrl: "" },
  { title: "Color Psychology in Branding", description: "Why the colors you choose affect how customers feel about your brand.", label: "Design", imageUrl: "" },
  { title: "Serverless Architecture Demystified", description: "Understanding when serverless makes sense and when it does not.", label: "Engineering", imageUrl: "" },
];

export default function Blog203(props: BlockProps) {
  const { theme, heading = "Popular This Week", subheading = "Top-liked posts by our community.", items = POSTS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-16 sm:py-24">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold">{heading}</h2>
        <p className="mt-2 opacity-60">{subheading}</p>
        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {items.slice(0, 3).map((post, i) => (
            <article key={i} className="text-left">
              <div className="aspect-video rounded-xl mb-4" style={{ backgroundColor: theme?.accent ?? "#e5e7eb" }} />
              <span className="text-xs font-semibold uppercase tracking-wide opacity-50">{post.label}</span>
              <h3 className="mt-1 text-lg font-bold">{post.title}</h3>
              <p className="mt-1 text-sm opacity-70">{post.description}</p>
              <div className="mt-3 flex items-center gap-3">
                <button className="flex items-center gap-1 text-sm opacity-60 hover:opacity-100 transition" aria-label="Like"><Heart className="w-4 h-4" /> 42</button>
                <button className="flex items-center gap-1 text-sm opacity-60 hover:opacity-100 transition" aria-label="Share"><Share2 className="w-4 h-4" /> Share</button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
