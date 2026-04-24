import type { BlockProps } from "@/blocks/types";

const DEFAULT_ITEMS = [
  { title: "2024", description: "Founded with a mission to democratize web design." },
  { title: "2025", description: "Launched our AI-powered website builder to the public." },
  { title: "2026", description: "Reached 10,000 users across 50+ countries." },
];

export default function About059(props: BlockProps) {
  const { theme, heading = "What Drives Us", subheading = "A team dedicated to your success.", items = DEFAULT_ITEMS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-20">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold">{heading}</h2>
          <p className="mt-3 opacity-60">{subheading}</p>
        </div>
        <div className="space-y-0">
          {items.slice(0, 5).map((item, i) => (
            <div key={i} className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: theme?.primary ?? "#6366f1" }} />
                {i < items.length - 1 && <div className="w-0.5 flex-1" style={{ backgroundColor: theme?.secondary ?? "#e5e7eb" }} />}
              </div>
              <div className="pb-8">
                <span className="text-sm font-bold" style={{ color: theme?.primary }}>{item.title}</span>
                <p className="mt-1 opacity-70">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
