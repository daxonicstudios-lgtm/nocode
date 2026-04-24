import type { BlockProps } from "@/blocks/types";
import { Dumbbell, ArrowRight } from "lucide-react";

export default function Cta093(props: BlockProps) {
  const {
    theme,
    heading = "Your first class is free",
    subheading = "No commitment, no pressure. Walk in, work out, and see if we're the right fit for you.",
    buttonText = "Claim Free Class",
    buttonUrl = "#",
    items = [
      { title: "50+", description: "Weekly classes" },
      { title: "24/7", description: "Gym access" },
      { title: "1:1", description: "Personal training" },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-3xl mx-auto text-center">
        <Dumbbell className="w-10 h-10 mx-auto mb-4" style={{ color: theme?.primary ?? "#dc2626" }} />
        <h2 className="text-3xl sm:text-4xl font-extrabold">{heading}</h2>
        <p className="mt-3 opacity-60 max-w-lg mx-auto">{subheading}</p>
        <div className="mt-8 grid grid-cols-3 gap-4 max-w-md mx-auto">
          {items.map((item, i) => (
            <div key={i} className="py-3 rounded-xl" style={{ backgroundColor: theme?.muted ?? "#fef2f2" }}>
              <div className="text-xl font-bold" style={{ color: theme?.primary ?? "#dc2626" }}>{item.title}</div>
              <div className="text-xs opacity-60">{item.description}</div>
            </div>
          ))}
        </div>
        <a href={buttonUrl} className="inline-flex items-center gap-2 mt-8 px-8 py-3.5 rounded-lg text-white font-bold text-sm" style={{ backgroundColor: theme?.primary ?? "#dc2626" }}>
          {buttonText}
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
