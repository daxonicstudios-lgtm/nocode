import type { BlockProps } from "@/blocks/types";
import { ArrowUpRight } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "Strategy & research", description: "Customer interviews, competitive analysis, market positioning." },
  { title: "Product design", description: "UX audits, design systems, prototyping, and usability testing." },
  { title: "Engineering", description: "Full-stack development, platform migration, performance tuning." },
  { title: "Content production", description: "Copywriting, photography, video — everything your brand needs." },
];

export default function Services002(props: BlockProps) {
  const { theme, heading = "Services tailored to your stage", items = DEFAULT_ITEMS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight mb-12">{heading}</h2>
        <ul className="divide-y" style={{ borderColor: theme?.secondary }}>
          {items.slice(0, 4).map((it, i) => (
            <li key={i} className="py-6 flex items-center justify-between gap-6 border-t last:border-b" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }}>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold">{it.title}</h3>
                <p className="mt-1 text-sm opacity-70 max-w-xl">{it.description}</p>
              </div>
              <ArrowUpRight className="w-6 h-6 opacity-40 flex-shrink-0" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
