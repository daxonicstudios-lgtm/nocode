import type { BlockProps } from "@/blocks/types";
import { CalendarRange, ArrowRight } from "lucide-react";

export default function Cta220(props: BlockProps) {
  const {
    theme,
    heading = "Find a time that works",
    subheading = "Our team is available across time zones. Book directly into our calendar.",
    buttonText = "See Availability",
    buttonUrl = "#",
    items = [
      { title: "30 min", description: "Quick intro call" },
      { title: "60 min", description: "Full product demo" },
      { title: "15 min", description: "Follow-up chat" },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-2xl mx-auto text-center">
        <CalendarRange className="w-10 h-10 mx-auto mb-4" style={{ color: theme?.primary ?? "#6366f1" }} />
        <h2 className="text-2xl sm:text-3xl font-bold">{heading}</h2>
        <p className="mt-3 opacity-60">{subheading}</p>
        <div className="mt-8 grid sm:grid-cols-3 gap-4">
          {items.map((item, i) => (
            <div key={i} className="p-4 rounded-xl border text-center" style={{ borderColor: theme?.border ?? "#e5e7eb" }}>
              <p className="text-2xl font-bold" style={{ color: theme?.primary ?? "#6366f1" }}>{item.title}</p>
              <p className="text-sm opacity-60 mt-1">{item.description}</p>
            </div>
          ))}
        </div>
        <a href={buttonUrl} className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-lg text-white font-medium text-sm" style={{ backgroundColor: theme?.primary ?? "#6366f1" }}>
          {buttonText} <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
