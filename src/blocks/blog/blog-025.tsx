import type { BlockProps } from "@/blocks/types";

const DEFAULT_ITEMS = [
  { title: "Rethinking the Blog Post Format", description: "Why long-form essays are losing ground to short, punchy updates.", label: "Apr 22", url: "#" },
  { title: "How We Decide What to Build Next", description: "Our prioritization framework that balances user requests with strategic bets.", label: "Apr 15", url: "#" },
  { title: "The Hidden Cost of Too Many Features", description: "Why saying no is the hardest and most important skill in product management.", label: "Apr 9", url: "#" },
  { title: "On Burnout and Sustainable Pace", description: "What we changed about our work culture after losing two key team members.", label: "Apr 2", url: "#" },
  { title: "Shipping Weekly: How and Why", description: "The cadence that keeps us accountable and our users engaged.", label: "Mar 26", url: "#" },
];

export default function Blog025(props: BlockProps) {
  const { theme, heading = "Notebook", items = DEFAULT_ITEMS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-lg mx-auto">
        <h2 className="text-2xl font-bold border-b-2 pb-4 mb-6" style={{ borderColor: theme?.primary ?? "#6366f1" }}>{heading}</h2>
        {items.slice(0, 5).map((post, i) => (
          <a key={i} href={post.url ?? "#"} className="group block py-4 border-b last:border-0" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }}>
            <span className="text-xs font-mono opacity-40">{String(post.label ?? "")}</span>
            <h3 className="mt-1 font-semibold group-hover:underline">{post.title}</h3>
            <p className="mt-1 text-sm opacity-50 line-clamp-1">{post.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
