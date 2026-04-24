import type { BlockProps } from "@/blocks/types";
import { Calendar, MapPin, Clock } from "lucide-react";
const DEFAULT_ITEMS = [
  { title: "Design Conference 2024", description: "Join 500+ designers for talks, workshops, and networking.", label: "Dec 15, 2024" },
  { title: "Startup Pitch Night", description: "Watch 10 startups pitch to top investors.", label: "Jan 20, 2025" },
  { title: "Web Dev Workshop", description: "Hands-on workshop on building with Next.js and AI.", label: "Feb 5, 2025" },
];
export default function Events037(props: BlockProps) {
  const { theme, heading = "Event cards with dates", subheading = "Don't miss these upcoming events", items = DEFAULT_ITEMS } = props;
  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-20">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold">{heading}</h2>
          <p className="mt-3 opacity-60">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.slice(0, 3).map((ev, i) => (
            <div key={i} className="rounded-2xl border p-6" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }}>
              <span className="text-xs font-bold px-3 py-1 rounded-full" style={{ backgroundColor: theme?.accent ?? "#ede9fe", color: theme?.primary }}>{String(ev.label ?? "")}</span>
              <h3 className="mt-4 font-bold text-lg">{ev.title}</h3>
              <p className="mt-2 text-sm opacity-60">{ev.description}</p>
              <div className="mt-4 flex items-center gap-4 text-xs opacity-40">
                <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> 6:00 PM</span>
                <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> Lagos, NG</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
