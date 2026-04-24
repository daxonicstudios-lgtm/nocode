import type { BlockProps } from "@/blocks/types";
export default function DashBilling026(props: BlockProps) {
  const { theme, heading = "Billing / invoices", subheading = "Billing / invoices" } = props;
  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-10">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6"><h2 className="text-xl font-bold">{heading}</h2><p className="text-sm opacity-60 mt-1">{subheading}</p></div>
        <div className="rounded-2xl border p-6" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[1,2,3,4].map(i => (
              <div key={i} className="rounded-xl p-4" style={{ backgroundColor: theme?.accent ?? "#f8fafc" }}>
                <div className="text-xs opacity-40 mb-1">Metric {i}</div>
                <div className="text-2xl font-bold" style={{ color: theme?.primary }}>{(i * 247).toLocaleString()}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
