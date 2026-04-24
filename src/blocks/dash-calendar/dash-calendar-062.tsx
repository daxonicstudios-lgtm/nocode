import type { BlockProps } from "@/blocks/types";
export default function DashCalendar062(props: BlockProps) {
  const { theme, heading = "Dark calendar view", subheading = "Calendar view" } = props;
  return (
    <section className="px-4 py-10" style={{ backgroundColor: theme?.primary ?? "#0f172a", color: "#e2e8f0" }}>
      <div className="max-w-6xl mx-auto">
        <div className="mb-6"><h2 className="text-xl font-bold text-white">{heading}</h2><p className="text-sm opacity-50 mt-1">{subheading}</p></div>
        <div className="rounded-2xl p-6" style={{ backgroundColor: "rgba(255,255,255,0.03)" }}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1,2,3].map(i => (
              <div key={i} className="rounded-xl p-4" style={{ backgroundColor: "rgba(255,255,255,0.05)" }}>
                <div className="text-xs opacity-30 mb-1">Stat {i}</div>
                <div className="text-xl font-bold text-white">{(i * 1842).toLocaleString()}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
