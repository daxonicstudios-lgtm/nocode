import type { BlockProps } from "@/blocks/types";
import { MapPin, Globe } from "lucide-react";

export default function Cta165(props: BlockProps) {
  const {
    theme,
    heading = "Expanding to new markets",
    subheading = "We are growing across Africa. Request service in your city.",
    buttonText = "Request Your City",
    buttonUrl = "#",
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-2xl mx-auto text-center">
        <div className="relative w-24 h-24 mx-auto mb-6">
          <Globe className="w-24 h-24 opacity-10" />
          <div className="absolute top-4 left-6 w-3 h-3 rounded-full animate-pulse" style={{ backgroundColor: theme?.primary ?? "#2563eb" }} />
          <div className="absolute top-10 right-5 w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: theme?.primary ?? "#2563eb", animationDelay: "0.5s" }} />
          <div className="absolute bottom-6 left-10 w-2.5 h-2.5 rounded-full animate-pulse" style={{ backgroundColor: theme?.primary ?? "#2563eb", animationDelay: "1s" }} />
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold">{heading}</h2>
        <p className="mt-3 opacity-70">{subheading}</p>
        <a href={buttonUrl} className="mt-8 inline-flex items-center gap-2 px-7 py-3 rounded-full text-white font-semibold text-sm hover:opacity-90 transition" style={{ backgroundColor: theme?.primary ?? "#2563eb" }}>
          <MapPin className="w-4 h-4" /> {buttonText}
        </a>
      </div>
    </section>
  );
}
