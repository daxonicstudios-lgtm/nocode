import type { BlockProps } from "@/blocks/types";
import { Minus, Plus } from "lucide-react";

export default function Cta145(props: BlockProps) {
  const {
    theme,
    heading = "Without Us vs. With Us",
    buttonText = "Make the Switch",
    buttonUrl = "#",
    items = [
      { title: "Multiple disconnected tools", description: "One unified platform" },
      { title: "Manual data entry", description: "Automated workflows" },
      { title: "Expensive agency fees", description: "DIY at a fraction of the cost" },
    ],
  } = props;

  return (
    <section className="py-16 px-4" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="max-w-xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">{heading}</h2>
        <div className="space-y-4 mb-8">
          {items.map((item, i) => (
            <div key={i} className="flex flex-col sm:flex-row gap-2">
              <div className="flex-1 flex items-center gap-2 p-3 rounded-lg bg-red-50 text-red-700 text-sm">
                <Minus className="w-4 h-4 flex-shrink-0" />{item.title}
              </div>
              <div className="flex-1 flex items-center gap-2 p-3 rounded-lg bg-green-50 text-green-700 text-sm">
                <Plus className="w-4 h-4 flex-shrink-0" />{item.description}
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <a href={buttonUrl} className="inline-block px-8 py-3 rounded-lg text-white font-semibold hover:opacity-90 transition" style={{ backgroundColor: theme?.primary || "#2563eb" }}>
            {buttonText}
          </a>
        </div>
      </div>
    </section>
  );
}
