import type { BlockProps } from "@/blocks/types";

const DEFAULT_ITEMS = [
  { title: "Building Scalable Systems", description: "Learn how to architect systems that grow with your business.", label: "Engineering · 8 min" },
  { title: "Design Trends for 2026", description: "The latest design trends shaping the web this year.", label: "Design · 5 min" },
  { title: "Startup Lessons Learned", description: "What we wish we knew before launching our product.", label: "Business · 6 min" },
];

export default function Blog120(props: BlockProps) {
  const { theme, heading = "Latest from our blog", subheading = "Thoughts, stories, and ideas from our team.", items = DEFAULT_ITEMS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold">{heading}</h2>
          <p className="mt-3 opacity-60">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.slice(0, 3).map((post, i) => (
            <article key={i} className="group">
              <div className="aspect-[4/3] rounded-xl mb-4 overflow-hidden" style={{ backgroundColor: theme?.accent ?? "#e5e7eb" }} />
              <p className="text-xs font-medium uppercase tracking-wider opacity-50">{String(post.label ?? "")}</p>
              <h3 className="mt-2 text-lg font-semibold group-hover:underline">{post.title}</h3>
              <p className="mt-2 text-sm opacity-70">{post.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
