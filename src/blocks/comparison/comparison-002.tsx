import type { BlockProps } from "@/blocks/types";

const DEFAULT_ITEMS = [
  { title: "DIY", description: "Starting from scratch on a generic builder.", items: ["20+ hours of work", "Template-ish look", "No expert input", "Ongoing maintenance on you"] },
  { title: "Our platform", description: "AI + beautiful components + your taste.", items: ["15 minutes to publish", "Custom to your brand", "Built-in best practices", "We handle the plumbing"] },
];

export default function Comparison002(props: BlockProps) {
  const { theme, heading = "Two paths to a website", items = DEFAULT_ITEMS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-center mb-10">{heading}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.slice(0, 2).map((col, i) => (
            <div key={i} className="p-8 rounded-2xl" style={{ backgroundColor: i === 1 ? theme?.primary ?? "#0f172a" : theme?.secondary ?? "#f3f4f6", color: i === 1 ? "#fff" : undefined }}>
              <h3 className="text-xl font-semibold">{col.title}</h3>
              <p className="mt-1 text-sm opacity-80">{col.description}</p>
              <ul className="mt-6 space-y-2 text-sm">
                {(col.items as string[]).map((f: string, j: number) => (
                  <li key={j} className="opacity-90">• {f}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
