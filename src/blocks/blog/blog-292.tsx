import type { BlockProps } from "@/blocks/types";

const DEFAULTS = [
  { title: "On simplicity", description: "Less noise, more signal.", value: "2026.04.20" },
  { title: "Building in silence", description: "The work speaks for itself.", value: "2026.04.15" },
  { title: "Tools do not matter", description: "What you build with them does.", value: "2026.04.10" },
  { title: "Start before you are ready", description: "Perfect is the enemy of published.", value: "2026.04.05" },
];

export default function Blog292(props: BlockProps) {
  const { theme, heading = "Notes", items = DEFAULTS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-24">
      <div className="max-w-md mx-auto">
        <h2 className="text-sm font-mono uppercase tracking-[0.3em] opacity-30 mb-16">{heading}</h2>
        <div className="space-y-12">
          {items.map((post, i) => (
            <article key={i} className="cursor-pointer group">
              <time className="text-xs font-mono opacity-20">{String(post.value ?? "")}</time>
              <h3 className="text-lg font-light mt-1 group-hover:opacity-60 transition-opacity">{post.title}</h3>
              <p className="text-sm opacity-40 mt-1">{post.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
