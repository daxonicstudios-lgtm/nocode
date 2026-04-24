import type { BlockProps } from "@/blocks/types";
import { MapPin, ArrowRight } from "lucide-react";

export default function Cta164(props: BlockProps) {
  const {
    theme,
    heading = "We deliver to your doorstep",
    subheading = "Same-day delivery available in select cities.",
    buttonText = "Check Availability",
    buttonUrl = "#",
    items = [
      { title: "Lagos" },
      { title: "Abuja" },
      { title: "Port Harcourt" },
      { title: "Ibadan" },
      { title: "Kano" },
      { title: "Enugu" },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center">{heading}</h2>
        <p className="mt-3 text-center opacity-70">{subheading}</p>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3">
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-2 px-4 py-3 rounded-lg border border-gray-200 text-sm">
              <MapPin className="w-4 h-4 shrink-0" style={{ color: theme?.primary ?? "#2563eb" }} />
              <span className="font-medium">{item.title}</span>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <a href={buttonUrl} className="inline-flex items-center gap-2 px-7 py-3 rounded-lg text-white font-semibold text-sm hover:opacity-90 transition" style={{ backgroundColor: theme?.primary ?? "#2563eb" }}>
            {buttonText} <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
