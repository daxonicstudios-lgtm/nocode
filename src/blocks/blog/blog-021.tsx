import type { BlockProps } from "@/blocks/types";

const DEFAULT_ITEMS = [
  { title: "Product Update: New Editor Features", label: "Apr 22, 2026", url: "#" },
  { title: "How to Build a Landing Page in 5 Minutes", label: "Apr 18, 2026", url: "#" },
  { title: "Customer Story: Lagos Fashion Co", label: "Apr 14, 2026", url: "#" },
  { title: "Introducing Custom Domains", label: "Apr 8, 2026", url: "#" },
  { title: "Why We Switched to Edge Functions", label: "Apr 2, 2026", url: "#" },
  { title: "March Changelog: 47 Improvements", label: "Mar 28, 2026", url: "#" },
];

export default function Blog021(props: BlockProps) {
  const { theme, heading = "Writing", items = DEFAULT_ITEMS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-10">{heading}</h2>
        <div className="space-y-0">
          {items.slice(0, 6).map((post, i) => (
            <a key={i} href={post.url ?? "#"} className="group flex items-baseline gap-4 py-4 border-b last:border-0" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }}>
              <span className="text-sm opacity-40 shrink-0 w-28">{String(post.label ?? "")}</span>
              <h3 className="font-semibold group-hover:underline">{post.title}</h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
