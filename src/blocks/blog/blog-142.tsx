import type { BlockProps } from "@/blocks/types";
import { MapPin, Compass, ArrowRight } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "Hidden Gems of the Amalfi Coast", description: "Skip the tourist traps and discover the authentic villages that locals love.", label: "Italy · 7 min" },
  { title: "Solo Travel in Southeast Asia", description: "A 30-day itinerary covering Thailand, Vietnam, and Cambodia on a budget.", label: "Asia · 12 min" },
  { title: "Off-Season Iceland", description: "Why visiting in shoulder season gives you the best experience with fewer crowds.", label: "Iceland · 5 min" },
];

export default function Blog142(props: BlockProps) {
  const {
    theme,
    heading = "Wanderlust Journal",
    subheading = "Stories from the road less traveled",
    buttonText = "Read story",
    buttonUrl = "#",
    items = DEFAULT_ITEMS,
  } = props;

  return (
    <section className="px-5 py-20" style={{ backgroundColor: theme?.background ?? "#fef7ed", color: theme?.foreground ?? "#422006" }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <Compass className="w-8 h-8 mx-auto mb-3" style={{ color: theme?.accent ?? "#ea580c" }} />
          <h2 className="text-4xl sm:text-5xl font-serif font-bold">{heading}</h2>
          <p className="mt-2 text-sm opacity-50">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.slice(0, 3).map((item, i) => (
            <a
              key={i}
              href={buttonUrl}
              className="group block rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-lg transition-shadow"
            >
              <div
                className="h-48"
                style={{
                  background: `linear-gradient(${135 + i * 25}deg, ${theme?.primary ?? "#ea580c"}30, ${theme?.accent ?? "#f59e0b"}20)`,
                }}
              />
              <div className="p-5">
                <div className="flex items-center gap-1 text-xs opacity-40 mb-2">
                  <MapPin className="w-3 h-3" />
                  {String(item.label)}
                </div>
                <h3 className="text-lg font-bold group-hover:underline">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm opacity-50 line-clamp-2">
                  {item.description}
                </p>
                <span
                  className="mt-3 inline-flex items-center gap-1 text-xs font-semibold"
                  style={{ color: theme?.primary ?? "#ea580c" }}
                >
                  {buttonText} <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
