import type { BlockProps } from "@/blocks/types";
import { Calendar, ArrowRight } from "lucide-react";
const DEFAULT_ITEMS = [
  { title: "Annual Meetup", description: "Our biggest community event of the year.", label: "Mar 10" },
  { title: "Product Launch", description: "Be the first to see our new features.", label: "Apr 22" },
  { title: "Hackathon", description: "48 hours to build something amazing.", label: "May 15" },
];
export default function Events098(props: BlockProps) {
  const { theme, heading = "Event list with date badges", items = DEFAULT_ITEMS } = props;
  return (
    <section style={{ backgroundColor: theme?.accent ?? "#f8fafc", color: theme?.foreground }} className="px-4 py-20">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-10">{heading}</h2>
        <div className="space-y-4">
          {items.slice(0, 5).map((ev, i) => (
            <div key={i} className="flex items-center gap-4 rounded-xl p-5" style={{ backgroundColor: theme?.background ?? "#fff" }}>
              <div className="w-14 h-14 rounded-xl flex flex-col items-center justify-center shrink-0" style={{ backgroundColor: theme?.primary ?? "#6366f1", color: "#fff" }}>
                <Calendar className="w-4 h-4" />
                <span className="text-xs font-bold mt-0.5">{String(ev.label ?? "")}</span>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold">{ev.title}</h3>
                <p className="text-sm opacity-60">{ev.description}</p>
              </div>
              <ArrowRight className="w-4 h-4 opacity-30 shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
