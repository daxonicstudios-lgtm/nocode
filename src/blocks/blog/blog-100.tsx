import type { BlockProps } from "@/blocks/types";

const DEFAULT_ITEMS = [
  { title: "Why We Chose Next.js for Our Platform", description: "The technical decisions behind our stack.", label: "Engineering · 10 min" },
  { title: "Designing for Africa's Mobile Users", description: "Unique challenges and solutions for mobile-first markets.", label: "Design · 7 min" },
  { title: "Scaling to 10,000 Users", description: "Infrastructure lessons from our first year.", label: "Infrastructure · 9 min" },
];

export default function Blog100(props: BlockProps) {
  const { theme, heading = "Industry insights", subheading = "Thoughts, stories, and ideas from our team.", items = DEFAULT_ITEMS } = props;

  return (
    <section className="px-4 py-20" style={{ backgroundColor: theme?.primary ?? "#0f172a", color: "#e2e8f0" }}>
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">{heading}</h2>
          <p className="mt-3 opacity-60">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.slice(0, 3).map((post, i) => (
            <article key={i} className="rounded-2xl p-6" style={{ backgroundColor: "rgba(255,255,255,0.05)" }}>
              <div className="aspect-[4/3] rounded-xl mb-4" style={{ backgroundColor: "rgba(255,255,255,0.1)" }} />
              <p className="text-xs font-medium uppercase tracking-wider opacity-50">{String(post.label ?? "")}</p>
              <h3 className="mt-2 text-lg font-semibold text-white">{post.title}</h3>
              <p className="mt-2 text-sm opacity-60">{post.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
