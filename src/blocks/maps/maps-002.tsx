import type { BlockProps } from "@/blocks/types";
import { MapPin } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "Lagos HQ", description: "14 Admiralty Way, Lekki Phase 1" },
  { title: "Nairobi", description: "ABC Place, Waiyaki Way" },
  { title: "Cape Town", description: "Sir Lowry Road, Woodstock" },
];

export default function Maps002(props: BlockProps) {
  const { theme, heading = "Three offices", items = DEFAULT_ITEMS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-1">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-6">{heading}</h2>
          <ul className="space-y-4">
            {items.slice(0, 3).map((o, i) => (
              <li key={i} className="flex gap-3">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: theme?.primary }} />
                <div>
                  <p className="font-semibold">{o.title}</p>
                  <p className="text-sm opacity-70">{o.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-2 aspect-[4/3] rounded-2xl" style={{ backgroundColor: theme?.secondary ?? "#e5e7eb" }} />
      </div>
    </section>
  );
}
