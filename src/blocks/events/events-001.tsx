import type { BlockProps } from "@/blocks/types";
import { Calendar, MapPin } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "Product Deep Dive", description: "A live 45-minute walkthrough of what's new.", label: "May 12 · 3pm WAT · Online" },
  { title: "Lagos Meetup", description: "Drinks, demos, and conversation with other builders.", label: "May 20 · 6pm · Lekki" },
  { title: "Design Systems Workshop", description: "Hands-on workshop. Bring your laptop.", label: "June 3 · 10am · Nairobi" },
];

export default function Events001(props: BlockProps) {
  const { theme, heading = "Upcoming events", items = DEFAULT_ITEMS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-10">{heading}</h2>
        <div className="space-y-4">
          {items.slice(0, 3).map((e, i) => (
            <div key={i} className="p-5 rounded-xl border flex flex-col sm:flex-row sm:items-center gap-4 justify-between" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }}>
              <div className="flex-1">
                <h3 className="font-semibold">{e.title}</h3>
                <p className="mt-1 text-sm opacity-70">{e.description}</p>
                <div className="mt-2 flex items-center gap-2 text-xs opacity-60">
                  <Calendar className="w-3.5 h-3.5" /> {String(e.label)}
                </div>
              </div>
              <button className="px-5 py-2 rounded-full text-white text-sm font-medium" style={{ backgroundColor: theme?.primary ?? "#000" }}>Register</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
