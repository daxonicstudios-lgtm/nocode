import type { BlockProps } from "@/blocks/types";

const DEFAULT_ITEMS = [
  { title: "Describe your business", description: "Tell our AI what you do in a sentence or two." },
  { title: "Pick the pieces you like", description: "We'll show you layouts. Pick what feels right." },
  { title: "Publish in one tap", description: "We handle the domain, hosting, SSL, and CDN." },
];

export default function Steps001(props: BlockProps) {
  const { theme, heading = "How it works", items = DEFAULT_ITEMS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-center mb-14">{heading}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.slice(0, 3).map((s, i) => (
            <div key={i} className="text-center">
              <div className="w-12 h-12 mx-auto rounded-full flex items-center justify-center font-semibold text-white mb-4" style={{ backgroundColor: theme?.primary ?? "#000" }}>
                {i + 1}
              </div>
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm opacity-70 leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
