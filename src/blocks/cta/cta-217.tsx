import type { BlockProps } from "@/blocks/types";
import { CalendarCheck, Clock } from "lucide-react";

export default function Cta217(props: BlockProps) {
  const {
    theme,
    heading = "Reserve your spot",
    subheading = "Limited slots available for our next cohort. Classes start April 28.",
    buttonText = "Book a Slot",
    buttonUrl = "#",
    items = [
      { title: "Mon, Apr 28", description: "10:00 AM" },
      { title: "Wed, Apr 30", description: "2:00 PM" },
      { title: "Fri, May 2", description: "11:00 AM" },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold">{heading}</h2>
          <p className="mt-2 opacity-60 text-sm">{subheading}</p>
        </div>
        <div className="space-y-3">
          {items.map((item, i) => (
            <div key={i} className="flex items-center justify-between p-4 rounded-lg border" style={{ borderColor: theme?.border ?? "#e5e7eb" }}>
              <div className="flex items-center gap-3">
                <CalendarCheck className="w-5 h-5" style={{ color: theme?.primary ?? "#10b981" }} />
                <span className="font-medium text-sm">{item.title}</span>
              </div>
              <div className="flex items-center gap-1 text-sm opacity-60">
                <Clock className="w-3.5 h-3.5" /> {item.description}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 text-center">
          <a href={buttonUrl} className="inline-block px-6 py-3 rounded-lg text-white font-medium text-sm" style={{ backgroundColor: theme?.primary ?? "#10b981" }}>
            {buttonText}
          </a>
        </div>
      </div>
    </section>
  );
}
