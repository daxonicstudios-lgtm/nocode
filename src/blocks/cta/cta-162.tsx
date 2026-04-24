import type { BlockProps } from "@/blocks/types";
import { MapPin, Navigation } from "lucide-react";

export default function Cta162(props: BlockProps) {
  const {
    theme,
    heading = "Serving businesses in your area",
    subheading = "Local expertise, global standards. We are just around the corner.",
    buttonText = "Get Directions",
    buttonUrl = "#",
  } = props;

  const cities = ["Lagos", "Nairobi", "Accra", "Cape Town"];

  return (
    <section className="px-5 py-24" style={{ backgroundColor: theme?.primary ?? "#1e293b", color: "#fff" }}>
      <div className="max-w-3xl mx-auto text-center">
        <Navigation className="w-8 h-8 mx-auto mb-4 opacity-80" />
        <h2 className="text-3xl sm:text-4xl font-bold">{heading}</h2>
        <p className="mt-3 text-lg opacity-70">{subheading}</p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {cities.map((city) => (
            <span key={city} className="inline-flex items-center gap-1 px-4 py-2 rounded-full bg-white/10 text-sm">
              <MapPin className="w-3 h-3" /> {city}
            </span>
          ))}
        </div>
        <a href={buttonUrl} className="mt-8 inline-block px-8 py-3 rounded-lg bg-white font-semibold text-sm hover:opacity-90 transition" style={{ color: theme?.primary ?? "#1e293b" }}>
          {buttonText}
        </a>
      </div>
    </section>
  );
}
