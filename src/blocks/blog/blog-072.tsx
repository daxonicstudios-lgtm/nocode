import type { BlockProps } from "@/blocks/types";

const DEFAULT_ITEMS = [
  { title: "Startup Funding Hits New Record in Q1", description: "Venture capital deals across Africa surpassed $3B for the first time.", label: "Finance" },
  { title: "How to Build a Brand Voice Guide", description: "Consistent messaging across channels starts with clear documentation.", label: "Marketing" },
  { title: "Edge Computing Comes to Mobile", description: "Low-latency processing at the network edge unlocks new possibilities.", label: "Tech" },
  { title: "The Future of Digital Payments", description: "Mobile money, crypto, and CBDC compete for the next billion users.", label: "Fintech" },
  { title: "Design Systems Save Engineering Time", description: "Teams with mature design systems ship 34% faster on average.", label: "Engineering" },
];

export default function Blog072(props: BlockProps) {
  const { theme, heading = "News Digest", subheading = "All the stories that matter, in one place.", items = DEFAULT_ITEMS } = props;

  return (
    <section style={{ backgroundColor: theme?.accent ?? "#faf9f6", color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-serif font-bold text-center">{heading}</h2>
        <p className="text-sm opacity-60 text-center mt-1">{subheading}</p>
        <div className="h-px my-8" style={{ backgroundColor: theme?.secondary ?? "#d4d0c8" }} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
          {items.slice(0, 5).map((post, i) => (
            <article key={i} className={i === 0 ? "md:col-span-2 lg:col-span-1" : ""}>
              <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: theme?.primary ?? "#b91c1c" }}>{String(post.label)}</span>
              <h3 className="mt-1 font-serif font-bold text-lg leading-snug">{post.title}</h3>
              <p className="mt-1 text-sm opacity-60">{post.description}</p>
              {i < items.length - 1 && <div className="h-px mt-6 lg:hidden" style={{ backgroundColor: theme?.secondary ?? "#d4d0c8" }} />}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
