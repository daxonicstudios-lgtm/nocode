import type { BlockProps } from "@/blocks/types";

const DEFAULT_ITEMS = [
  { title: "Field Notes From User Research in Lagos", description: "Patterns we noticed talking to 50 first-time website builders in Nigeria.", label: "Apr 22", url: "#" },
  { title: "Why We Do Not Use Feature Flags", description: "A contrarian take on progressive rollouts and when they cause more harm than good.", label: "Apr 15", url: "#" },
  { title: "The Simplicity Tax", description: "Making things simple for users often makes things harder for engineers. Here is how we balance it.", label: "Apr 8", url: "#" },
  { title: "On Building in Public", description: "What sharing our journey openly has done for trust, hiring, and product feedback.", label: "Apr 1", url: "#" },
  { title: "Performance Wins That Took 5 Minutes", description: "Quick optimizations that had outsized impact on our Core Web Vitals scores.", label: "Mar 24", url: "#" },
];

export default function Blog023(props: BlockProps) {
  const { theme, heading = "Posts", items = DEFAULT_ITEMS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold tracking-tight mb-8">{heading}</h2>
        {items.slice(0, 5).map((post, i) => (
          <a key={i} href={post.url ?? "#"} className="group block py-5 border-b last:border-0" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }}>
            <div className="flex items-baseline justify-between gap-6">
              <h3 className="text-lg font-semibold group-hover:underline leading-snug">{post.title}</h3>
              <span className="text-xs opacity-40 shrink-0 tabular-nums">{String(post.label ?? "")}</span>
            </div>
            <p className="mt-1 text-sm opacity-50 line-clamp-1">{post.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
