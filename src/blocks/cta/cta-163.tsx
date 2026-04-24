import type { BlockProps } from "@/blocks/types";
import { MapPin, Phone, Clock } from "lucide-react";

export default function Cta163(props: BlockProps) {
  const {
    theme,
    heading = "Visit our flagship store",
    subheading = "Experience our products in person at a location near you.",
    buttonText = "Book a Visit",
    buttonUrl = "#",
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-4xl mx-auto rounded-2xl border border-gray-200 overflow-hidden">
        <div className="h-40 bg-gray-100 flex items-center justify-center relative">
          <div className="absolute inset-0 opacity-10" style={{ background: `linear-gradient(135deg, ${theme?.primary ?? "#2563eb"}, transparent)` }} />
          <MapPin className="w-16 h-16 opacity-30" style={{ color: theme?.primary ?? "#2563eb" }} />
        </div>
        <div className="p-6 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-bold">{heading}</h2>
          <p className="mt-2 opacity-70">{subheading}</p>
          <div className="mt-4 flex flex-wrap gap-4 text-sm opacity-60">
            <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> Mon–Sat, 9am–6pm</span>
            <span className="flex items-center gap-1"><Phone className="w-4 h-4" /> +1 (555) 123-4567</span>
          </div>
          <a href={buttonUrl} className="mt-6 inline-block px-6 py-3 rounded-lg text-white font-semibold text-sm hover:opacity-90 transition" style={{ backgroundColor: theme?.primary ?? "#2563eb" }}>
            {buttonText}
          </a>
        </div>
      </div>
    </section>
  );
}
