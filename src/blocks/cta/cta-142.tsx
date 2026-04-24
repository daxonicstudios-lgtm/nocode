import type { BlockProps } from "@/blocks/types";
import { ArrowRight } from "lucide-react";

export default function Cta142(props: BlockProps) {
  const {
    theme,
    heading = "See the Difference",
    subheading = "Before our platform vs. after",
    buttonText = "Get Started",
    buttonUrl = "#",
    items = [
      { title: "Hours of manual work", description: "Done in minutes" },
      { title: "Scattered tools", description: "All-in-one platform" },
      { title: "Guesswork", description: "Data-driven decisions" },
    ],
  } = props;

  return (
    <section className="py-16 px-4" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">{heading}</h2>
        <p className="opacity-60 mb-8">{subheading}</p>
        <div className="space-y-4 mb-8">
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-4 justify-center text-sm">
              <span className="line-through opacity-40 text-right flex-1">{item.title}</span>
              <ArrowRight className="w-4 h-4 flex-shrink-0" style={{ color: theme?.primary || "#2563eb" }} />
              <span className="font-semibold text-left flex-1" style={{ color: theme?.primary || "#2563eb" }}>{item.description}</span>
            </div>
          ))}
        </div>
        <a href={buttonUrl} className="inline-block px-8 py-3 rounded-lg text-white font-semibold hover:opacity-90 transition" style={{ backgroundColor: theme?.primary || "#2563eb" }}>
          {buttonText}
        </a>
      </div>
    </section>
  );
}
