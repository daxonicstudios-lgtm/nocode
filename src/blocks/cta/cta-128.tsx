import type { BlockProps } from "@/blocks/types";
import { MapPin } from "lucide-react";

export default function Cta128(props: BlockProps) {
  const {
    theme,
    heading = "Rooted in Tradition, Built for Tomorrow",
    subheading = "Trusted since 2019 by creators worldwide.",
    buttonText = "Discover More",
    buttonUrl = "#",
    secondaryButtonText = "Our Story",
    secondaryButtonUrl = "#",
  } = props;

  return (
    <section className="py-20 px-4" style={{ backgroundColor: theme?.accent || "#f5f0e8", color: theme?.foreground || "#3c2415" }}>
      <div className="max-w-2xl mx-auto text-center">
        <MapPin className="w-6 h-6 mx-auto mb-3" style={{ color: theme?.primary || "#a0522d" }} />
        <h2 className="text-2xl md:text-4xl font-serif font-bold mb-2">{heading}</h2>
        <p className="font-serif opacity-60 mb-8">{subheading}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href={buttonUrl} className="px-8 py-3 text-white rounded-sm font-semibold hover:opacity-90 transition" style={{ backgroundColor: theme?.primary || "#a0522d" }}>
            {buttonText}
          </a>
          <a href={secondaryButtonUrl} className="px-8 py-3 border-2 rounded-sm font-semibold hover:opacity-80 transition" style={{ borderColor: theme?.primary || "#a0522d", color: theme?.primary || "#a0522d" }}>
            {secondaryButtonText}
          </a>
        </div>
      </div>
    </section>
  );
}
