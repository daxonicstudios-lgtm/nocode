import type { BlockProps } from "@/blocks/types";
import { MapPin, Clock } from "lucide-react";

export default function Contact003(props: BlockProps) {
  const { theme, heading = "Visit the studio", bodyText = "We're open Monday to Friday, 9am to 6pm. Walk-ins welcome — but please say hi on the intercom first.", buttonText = "Get directions", buttonUrl = "#" } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="aspect-square rounded-3xl flex items-center justify-center" style={{ backgroundColor: theme?.secondary ?? "#e5e7eb" }}>
          <MapPin className="w-16 h-16 opacity-40" />
        </div>
        <div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">{heading}</h2>
          <p className="mt-4 text-base opacity-75 leading-relaxed">{bodyText}</p>
          <div className="mt-6 flex items-center gap-2 text-sm opacity-70">
            <Clock className="w-4 h-4" /> Mon–Fri · 9:00 – 18:00
          </div>
          <a href={buttonUrl} className="mt-8 inline-block px-6 py-3 rounded-full text-white text-sm font-medium" style={{ backgroundColor: theme?.primary ?? "#000" }}>{buttonText}</a>
        </div>
      </div>
    </section>
  );
}
