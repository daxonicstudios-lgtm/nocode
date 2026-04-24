import type { BlockProps } from "@/blocks/types";
import { Truck, Package, MapPin, Clock } from "lucide-react";

const icons = [Truck, Package, MapPin, Clock];

export default function Features367(props: BlockProps) {
  const {
    theme,
    heading = "HARSH REALITY",
    subheading = "No soft edges. No apologies.",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "SHIP FAST", description: "Deploy daily with confidence and speed." },
      { title: "PACK LIGHT", description: "Minimal dependencies, maximum performance." },
      { title: "GO GLOBAL", description: "Multi-region deployment in one command." },
      { title: "SAVE TIME", description: "Automation eliminates repetitive manual work." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background || "#fff", color: theme?.foreground || "#000" }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="mb-10">
          <h2 className="text-4xl sm:text-5xl font-black uppercase">{heading}</h2>
          <p className="text-sm uppercase tracking-wider mt-1">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="p-6 border-4" style={{ borderColor: theme?.foreground || "#000", boxShadow: `8px 8px 0px ${theme?.foreground || "#000"}` }}>
                <Icon size={28} strokeWidth={3} className="mb-3" style={{ color: theme?.primary || "#000" }} />
                <h3 className="text-xl font-black uppercase mb-2">{item.title}</h3>
                <p className="text-sm">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
