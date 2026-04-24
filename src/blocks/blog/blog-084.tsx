import type { BlockProps } from "@/blocks/types";

const DEFAULT_ITEMS = [
  { title: "Mastering CSS Container Queries", description: "Responsive components that adapt to their parent, not the viewport.", label: "Advanced" },
  { title: "Zero-Downtime Deployments", description: "Blue-green, canary, and rolling deployment strategies.", label: "DevOps" },
  { title: "Negotiation Tips for Freelancers", description: "How to price your work and handle scope creep gracefully.", label: "Freelance" },
  { title: "Authentication Patterns for SPAs", description: "Tokens, cookies, and sessions — choosing the right approach.", label: "Security" },
  { title: "Creating Engaging Product Demos", description: "Storytelling techniques that sell your solution.", label: "Sales" },
];

export default function Blog084(props: BlockProps) {
  const { theme, heading = "Quick Reads", items = DEFAULT_ITEMS } = props;

  return (
    <section style={{ backgroundColor: theme?.accent ?? "#fafafa", color: theme?.foreground }} className="py-20">
      <div className="max-w-7xl mx-auto px-5">
        <h2 className="text-3xl font-bold mb-8">{heading}</h2>
      </div>
      <div className="flex gap-4 overflow-x-auto px-5 pb-4 snap-x">
        {items.slice(0, 5).map((post, i) => (
          <article key={i} className="min-w-[200px] sm:min-w-[240px] snap-start shrink-0 rounded-xl p-5 border" style={{ borderColor: theme?.secondary ?? "#e5e7eb", backgroundColor: theme?.background ?? "#fff" }}>
            <span className="inline-block px-2 py-0.5 text-[10px] font-bold uppercase rounded-full" style={{ backgroundColor: theme?.primary ?? "#6366f1", color: "#fff" }}>{String(post.label)}</span>
            <h3 className="mt-3 font-bold text-sm">{post.title}</h3>
            <p className="mt-1 text-xs opacity-60 line-clamp-3">{post.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
