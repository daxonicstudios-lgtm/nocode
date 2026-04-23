import type { BlockProps } from "@/blocks/types";
import { ArrowUpRight } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "Senior Product Designer", label: "Design · Remote (Africa)" },
  { title: "Staff Engineer, Editor", label: "Engineering · Remote" },
  { title: "Head of Customer Success", label: "Operations · Lagos / Nairobi" },
  { title: "Content Marketing Lead", label: "Marketing · Remote" },
];

export default function Careers001(props: BlockProps) {
  const { theme, heading = "Open roles", subheading = "We're hiring across engineering, design, and ops.", items = DEFAULT_ITEMS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-4xl mx-auto">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">{heading}</h2>
          <p className="mt-2 text-base opacity-70">{subheading}</p>
        </div>
        <ul className="divide-y" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }}>
          {items.slice(0, 4).map((j, i) => (
            <li key={i} className="border-t last:border-b py-5 flex items-center justify-between gap-4" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }}>
              <div>
                <h3 className="font-semibold">{j.title}</h3>
                <p className="text-sm opacity-60 mt-0.5">{String(j.label)}</p>
              </div>
              <ArrowUpRight className="w-5 h-5 opacity-50" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
