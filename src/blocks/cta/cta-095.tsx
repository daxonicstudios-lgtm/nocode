import type { BlockProps } from "@/blocks/types";
import { PhoneCall, CalendarCheck } from "lucide-react";

export default function Cta095(props: BlockProps) {
  const {
    theme,
    heading = "Book a free consultation",
    subheading = "Speak with one of our experts to discuss your goals and create a tailored plan.",
    buttonText = "Book a Call",
    buttonUrl = "#",
    secondaryButtonText = "Call Us Now",
    secondaryButtonUrl = "tel:+1234567890",
  } = props;

  return (
    <section style={{ backgroundColor: theme?.primary ?? "#0f766e", color: "#ffffff" }} className="px-5 py-24">
      <div className="max-w-2xl mx-auto text-center">
        <CalendarCheck className="w-10 h-10 mx-auto mb-4 opacity-80" />
        <h2 className="text-3xl sm:text-4xl font-bold">{heading}</h2>
        <p className="mt-3 opacity-80 max-w-md mx-auto">{subheading}</p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a href={buttonUrl} className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-white font-bold text-sm" style={{ color: theme?.primary ?? "#0f766e" }}>
            <CalendarCheck className="w-4 h-4" />
            {buttonText}
          </a>
          <a href={secondaryButtonUrl} className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg border border-white/40 font-medium text-sm">
            <PhoneCall className="w-4 h-4" />
            {secondaryButtonText}
          </a>
        </div>
      </div>
    </section>
  );
}
