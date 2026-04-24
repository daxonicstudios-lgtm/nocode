import type { BlockProps } from "@/blocks/types";
import { BarChart3, ArrowRight } from "lucide-react";

export default function Cta240(props: BlockProps) {
  const {
    theme,
    heading = "Real results from real customers",
    subheading = "Average improvements after switching to our platform.",
    buttonText = "See Case Studies",
    buttonUrl = "#",
    items = [
      { title: "+340%", description: "Conversion rate" },
      { title: "-65%", description: "Cost per lead" },
      { title: "+220%", description: "Revenue growth" },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background ?? "#020617", color: theme?.foreground ?? "#f8fafc" }} className="px-5 py-20">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <BarChart3 className="w-8 h-8 mx-auto mb-3" style={{ color: theme?.primary ?? "#06b6d4" }} />
          <h2 className="text-2xl sm:text-3xl font-bold">{heading}</h2>
          <p className="mt-2 opacity-50 text-sm">{subheading}</p>
        </div>
        <div className="grid sm:grid-cols-3 gap-4">
          {items.map((item, i) => (
            <div key={i} className="rounded-xl p-5 text-center" style={{ backgroundColor: "#0f172a" }}>
              <p className="text-3xl font-bold" style={{ color: theme?.primary ?? "#06b6d4" }}>{item.title}</p>
              <p className="text-sm opacity-50 mt-1">{item.description}</p>
              <div className="mt-3 h-2 rounded-full overflow-hidden" style={{ backgroundColor: "#1e293b" }}>
                <div className="h-full rounded-full" style={{ backgroundColor: theme?.primary ?? "#06b6d4", width: `${60 + i * 15}%` }} />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <a href={buttonUrl} className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-white font-medium text-sm" style={{ backgroundColor: theme?.primary ?? "#06b6d4" }}>
            {buttonText} <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
