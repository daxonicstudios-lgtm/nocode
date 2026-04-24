import type { BlockProps } from "@/blocks/types";
const DEFAULT_ITEMS = [
  { title: "Q1 2024", description: "Platform launch and initial user onboarding." },
  { title: "Q2 2024", description: "AI builder release with 500+ components." },
  { title: "Q3 2024", description: "Mobile editor and team collaboration features." },
  { title: "Q4 2024", description: "Enterprise plans and custom domain support." },
];
export default function Timeline103(props: BlockProps) {
  const { theme, heading = "Dark timeline / roadmap", items = DEFAULT_ITEMS } = props;
  return (
    <section className="px-4 py-24" style={{ backgroundColor: theme?.primary ?? "#0f172a", color: "#e2e8f0" }}>
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-5xl font-bold text-white text-center mb-14">{heading}</h2>
        <div className="space-y-6">
          {items.slice(0, 6).map((item, i) => (
            <div key={i} className="flex gap-4 items-start">
              <span className="text-sm font-bold shrink-0 w-20 pt-1 text-right opacity-50">{item.title}</span>
              <div className="w-3 h-3 rounded-full shrink-0 mt-1.5" style={{ backgroundColor: theme?.accent ?? "#6366f1" }} />
              <p className="opacity-70">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
