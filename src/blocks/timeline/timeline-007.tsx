import type { BlockProps } from "@/blocks/types";
const DEFAULT_ITEMS = [
  { title: "2020", description: "Company founded with a vision to democratize web design." },
  { title: "2021", description: "Launched beta with 100 early adopters." },
  { title: "2022", description: "Raised seed round and expanded to 10,000 users." },
  { title: "2023", description: "Released AI-powered builder and crossed 50,000 sites." },
  { title: "2024", description: "Expanded globally to 80+ countries." },
];
export default function Timeline007(props: BlockProps) {
  const { theme, heading = "Vertical timeline with dots", subheading = "Key milestones", items = DEFAULT_ITEMS } = props;
  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-20">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold">{heading}</h2>
          <p className="mt-3 opacity-60">{subheading}</p>
        </div>
        <div className="space-y-0">
          {items.slice(0, 6).map((item, i) => (
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
