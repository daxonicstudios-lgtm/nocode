import type { BlockProps } from "@/blocks/types";
import { ArrowRight } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "Inclusive Design Principles", description: "Building products that work for everyone, not just the majority.", label: "Maya Thompson", value: "Accessibility Lead" },
  { title: "Serverless at Scale", description: "When Lambda functions stop being cheap and what to do about it.", label: "Ibrahim Sow", value: "DevOps Engineer" },
  { title: "Community-Led Growth", description: "How our forum became our best acquisition channel.", label: "Grace Okonkwo", value: "Community Manager" },
];

export default function Blog080(props: BlockProps) {
  const { theme, heading = "Expert Contributors", items = DEFAULT_ITEMS, buttonText = "View all authors" } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-10">{heading}</h2>
        {items.slice(0, 3).map((post, i) => (
          <article key={i} className="flex flex-col sm:flex-row items-start gap-5 py-8 border-b last:border-0" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }}>
            <div className="flex items-center gap-3 sm:w-48 shrink-0">
              <div className="w-12 h-12 rounded-full shrink-0" style={{ backgroundColor: theme?.secondary ?? "#e5e7eb" }} />
              <div>
                <p className="text-sm font-bold">{String(post.label)}</p>
                <p className="text-[10px] opacity-50">{String(post.value)}</p>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-lg">{post.title}</h3>
              <p className="mt-1 text-sm opacity-60">{post.description}</p>
            </div>
            <ArrowRight className="w-5 h-5 shrink-0 opacity-30 hidden sm:block mt-2" />
          </article>
        ))}
        <div className="mt-8 text-center">
          <a href="#" className="text-sm font-semibold" style={{ color: theme?.primary ?? "#6366f1" }}>{buttonText}</a>
        </div>
      </div>
    </section>
  );
}
