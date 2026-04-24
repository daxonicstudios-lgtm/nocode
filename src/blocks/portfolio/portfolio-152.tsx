import type { BlockProps } from "@/blocks/types";
import { ArrowRight } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "Fintech App Redesign", description: "Increased user engagement by 45% through a complete UX overhaul.", label: "Case Study", value: "+45% engagement" },
  { title: "E-Learning Platform", description: "Built a scalable platform serving 50,000+ students.", label: "Case Study", value: "50K+ students" },
];

export default function Portfolio152(props: BlockProps) {
  const { theme, heading = "Portfolio", subheading = "Browse our latest projects and case studies.", items = DEFAULT_ITEMS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-20">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold">{heading}</h2>
          <p className="mt-3 opacity-60">{subheading}</p>
        </div>
        <div className="space-y-8">
          {items.slice(0, 3).map((project, i) => (
            <div key={i} className="flex flex-col md:flex-row gap-8 items-center rounded-2xl border p-6" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }}>
              <div className="w-full md:w-1/2 aspect-video rounded-xl" style={{ backgroundColor: theme?.accent ?? "#e5e7eb" }} />
              <div className="flex-1">
                <span className="text-xs font-bold uppercase tracking-wider" style={{ color: theme?.primary }}>{String(project.label ?? "")}</span>
                <h3 className="mt-2 text-xl font-bold">{project.title}</h3>
                <p className="mt-2 opacity-70">{project.description}</p>
                <div className="mt-3 text-2xl font-black" style={{ color: theme?.primary }}>{project.value}</div>
                <a href="#" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold" style={{ color: theme?.primary }}>
                  Read Case Study <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
