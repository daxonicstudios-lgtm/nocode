import type { BlockProps } from "@/blocks/types";
import { Newspaper, Circle } from "lucide-react";

const DEFAULTS = [
  { title: "Year in Review: Our Biggest Milestones", description: "From 100 to 100,000 users. A look back at an incredible year.", label: "Recap", value: "Dec 31" },
  { title: "Introducing Team Collaboration", description: "Work together on projects in real time with your team.", label: "Feature", value: "Dec 15" },
  { title: "How We Handle Security", description: "Your data is safe. Here is exactly how we protect it.", label: "Security", value: "Dec 1" },
  { title: "Partnering with African Universities", description: "Bringing no-code education to the next generation.", label: "Education", value: "Nov 20" },
];

export default function Blog260(props: BlockProps) {
  const { theme, heading = "The Chronicle", items = DEFAULTS } = props;
  const featured = items[0];
  const rest = items.slice(1);

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-16">
      <div className="max-w-3xl mx-auto">
        <div className="sticky top-0 z-10 pb-6" style={{ backgroundColor: theme?.background ?? "#fff" }}>
          <div className="flex items-center gap-2 mb-4">
            <Newspaper className="w-5 h-5" style={{ color: theme?.primary ?? "#3b82f6" }} />
            <h2 className="text-2xl font-bold">{heading}</h2>
          </div>
          <div className="rounded-xl p-5 border-l-4" style={{ backgroundColor: theme?.accent ?? "#eff6ff", borderLeftColor: theme?.primary ?? "#3b82f6" }}>
            <span className="text-xs font-bold uppercase" style={{ color: theme?.primary ?? "#3b82f6" }}>{String(featured?.label ?? "")}</span>
            <h3 className="text-xl font-bold mt-2">{featured?.title}</h3>
            <p className="opacity-70 mt-2 text-sm">{featured?.description}</p>
            <span className="text-xs opacity-40 mt-2 block">{String(featured?.value ?? "")}</span>
          </div>
        </div>
        <div className="relative pl-6 border-l-2 ml-3 space-y-6" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }}>
          {rest.map((post, i) => (
            <article key={i} className="relative cursor-pointer hover:opacity-80">
              <Circle className="w-3 h-3 absolute -left-[25px] top-1" style={{ color: theme?.primary ?? "#3b82f6", fill: theme?.primary ?? "#3b82f6" }} />
              <span className="text-xs opacity-40">{String(post.value ?? "")}</span>
              <h3 className="font-semibold">{post.title}</h3>
              <p className="text-sm opacity-60 mt-0.5">{post.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
