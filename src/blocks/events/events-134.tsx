import type { BlockProps } from "@/blocks/types";
import { Calendar } from "lucide-react";
const DEFAULT_ITEMS = [
  { title: "Tech Summit", description: "Leading voices in technology share their insights.", label: "June 2025" },
  { title: "Community Day", description: "Connect with builders from across Africa.", label: "July 2025" },
];
export default function Events134(props: BlockProps) {
  const { theme, heading = "Dark featured events", subheading = "Mark your calendar", items = DEFAULT_ITEMS } = props;
  return (
    <section className="px-4 py-24" style={{ backgroundColor: theme?.primary ?? "#0f172a", color: "#e2e8f0" }}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <Calendar className="w-8 h-8 mx-auto mb-4 opacity-60" />
          <h2 className="text-3xl sm:text-5xl font-bold text-white">{heading}</h2>
          <p className="mt-4 opacity-60">{subheading}</p>
        </div>
        <div className="space-y-4">
          {items.slice(0, 4).map((ev, i) => (
            <div key={i} className="rounded-xl p-6" style={{ backgroundColor: "rgba(255,255,255,0.05)" }}>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-bold text-white text-lg">{ev.title}</h3>
                  <p className="mt-1 text-sm opacity-50">{ev.description}</p>
                </div>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-white/10 shrink-0">{String(ev.label ?? "")}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
