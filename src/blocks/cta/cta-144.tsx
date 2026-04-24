import type { BlockProps } from "@/blocks/types";
import { TrendingUp } from "lucide-react";

export default function Cta144(props: BlockProps) {
  const {
    theme,
    heading = "Your Growth, Visualized",
    buttonText = "See Full Report",
    buttonUrl = "#",
    items = [
      { title: "Conversion Rate", value: "+340%" },
      { title: "Time Saved", value: "12 hrs/wk" },
      { title: "Revenue Growth", value: "+$48K" },
    ],
  } = props;

  return (
    <section className="py-16 px-4" style={{ backgroundColor: theme?.accent || "#f0fdf4", color: theme?.foreground }}>
      <div className="max-w-2xl mx-auto text-center">
        <TrendingUp className="w-8 h-8 mx-auto mb-4" style={{ color: theme?.primary || "#16a34a" }} />
        <h2 className="text-2xl md:text-3xl font-bold mb-2">{heading}</h2>
        <p className="text-sm opacity-60 mb-8">Average results from customers after 90 days</p>
        <div className="grid grid-cols-3 gap-4 mb-8">
          {items.map((item, i) => (
            <div key={i}>
              <p className="text-2xl md:text-3xl font-bold" style={{ color: theme?.primary || "#16a34a" }}>{item.value}</p>
              <p className="text-xs opacity-60 mt-1">{item.title}</p>
            </div>
          ))}
        </div>
        <a href={buttonUrl} className="inline-block px-8 py-3 rounded-lg text-white font-semibold hover:opacity-90 transition" style={{ backgroundColor: theme?.primary || "#16a34a" }}>
          {buttonText}
        </a>
      </div>
    </section>
  );
}
