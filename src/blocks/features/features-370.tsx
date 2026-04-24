import type { BlockProps } from "@/blocks/types";
import { Quote } from "lucide-react";

export default function Features370(props: BlockProps) {
  const {
    theme,
    heading = "STATEMENTS",
    subheading = "Features that make bold claims and deliver",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "PERFORMANCE", description: "We are 10x faster than the nearest competitor. Period." },
      { title: "RELIABILITY", description: "Zero unplanned downtime in the last three years straight." },
      { title: "SCALABILITY", description: "From ten users to ten million without changing a line of code." },
      { title: "SIMPLICITY", description: "If your team cannot learn it in a day, we have failed." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background || "#fafafa", color: theme?.foreground || "#000" }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-10 border-b-4 pb-4" style={{ borderColor: theme?.foreground || "#000" }}>
          <h2 className="text-4xl sm:text-5xl font-black uppercase">{heading}</h2>
          <p className="text-sm uppercase tracking-wider mt-1">{subheading}</p>
        </div>
        <div className="space-y-8">
          {items.map((item, i) => (
            <div key={i} className="relative pl-12">
              <Quote size={28} strokeWidth={3} className="absolute left-0 top-0" style={{ color: theme?.primary || "#000" }} />
              <h3 className="text-2xl sm:text-3xl font-black uppercase mb-2">{item.title}</h3>
              <p className="text-base leading-relaxed border-l-4 pl-4" style={{ borderColor: theme?.primary || "#000" }}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
