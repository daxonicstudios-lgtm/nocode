import type { BlockProps } from "@/blocks/types";
import { MapPin, ArrowRight } from "lucide-react";

export default function Cta161(props: BlockProps) {
  const {
    theme,
    heading = "Find us near you",
    subheading = "Over 200 locations across the country ready to serve you.",
    buttonText = "Find a Location",
    buttonUrl = "#",
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-3">
            <MapPin className="w-5 h-5" style={{ color: theme?.primary ?? "#ef4444" }} />
            <span className="text-sm font-semibold uppercase tracking-wide opacity-70">Locations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold">{heading}</h2>
          <p className="mt-3 opacity-70">{subheading}</p>
          <a href={buttonUrl} className="mt-6 inline-flex items-center gap-2 px-7 py-3 rounded-lg text-white font-semibold text-sm hover:opacity-90 transition" style={{ backgroundColor: theme?.primary ?? "#ef4444" }}>
            {buttonText} <ArrowRight className="w-4 h-4" />
          </a>
        </div>
        <div className="w-full md:w-64 h-48 rounded-xl bg-gray-200 flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-20" style={{ background: `radial-gradient(circle at 60% 40%, ${theme?.primary ?? "#ef4444"}, transparent 70%)` }} />
          <MapPin className="w-12 h-12 opacity-40" style={{ color: theme?.primary ?? "#ef4444" }} />
        </div>
      </div>
    </section>
  );
}
