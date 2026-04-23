import type { BlockProps } from "@/blocks/types";
import { Building2, Search, MapPin } from "lucide-react";

export default function Hero047(props: BlockProps) {
  const {
    theme,
    heading = "Find Your Dream Home",
    subheading = "Browse thousands of verified listings in top neighborhoods. Whether you are buying, renting, or investing, we make it simple.",
    buttonText = "Search Properties",
    buttonUrl = "#",
    items = [],
  } = props;

  const propertyCount = items.length > 0 ? items[0].value ?? "12,000+" : "12,000+";
  const citiesCount = items.length > 1 ? items[1].value ?? "85" : "85";
  const agentsCount = items.length > 2 ? items[2].value ?? "300+" : "300+";

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#f8fafc", color: theme?.foreground ?? "#0f172a" }}
      className="min-h-[80vh] flex items-center justify-center px-5 py-20"
    >
      <div className="max-w-2xl mx-auto text-center">
        <div className="flex justify-center mb-6">
          <div
            className="w-14 h-14 rounded-xl flex items-center justify-center"
            style={{ backgroundColor: theme?.primary ?? "#0ea5e9", color: "#fff" }}
          >
            <Building2 className="w-7 h-7" />
          </div>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight">
          {heading}
        </h1>

        <p className="mt-6 text-lg sm:text-xl opacity-70 leading-relaxed max-w-xl mx-auto">
          {subheading}
        </p>

        {/* Search-style CTA */}
        <div className="mt-10 max-w-md mx-auto">
          <a
            href={buttonUrl}
            className="flex items-center gap-3 w-full px-5 py-4 rounded-2xl border-2 hover:shadow-lg transition-shadow"
            style={{ borderColor: theme?.primary ?? "#0ea5e9" }}
          >
            <Search className="w-5 h-5 opacity-40 flex-shrink-0" />
            <span className="text-left opacity-50 flex-1">{buttonText}</span>
            <span
              className="flex-shrink-0 px-4 py-2 rounded-xl text-white text-sm font-medium"
              style={{ backgroundColor: theme?.primary ?? "#0ea5e9" }}
            >
              Search
            </span>
          </a>
        </div>

        {/* Popular locations hint */}
        <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-sm opacity-50">
          <MapPin className="w-3.5 h-3.5" />
          <span>Popular: Lagos, Nairobi, Accra, Cape Town</span>
        </div>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-3 gap-4 max-w-sm mx-auto">
          <div className="text-center">
            <div
              className="text-2xl sm:text-3xl font-bold"
              style={{ color: theme?.primary ?? "#0ea5e9" }}
            >
              {propertyCount}
            </div>
            <div className="text-xs opacity-60 mt-1">Properties</div>
          </div>
          <div className="text-center">
            <div
              className="text-2xl sm:text-3xl font-bold"
              style={{ color: theme?.primary ?? "#0ea5e9" }}
            >
              {citiesCount}
            </div>
            <div className="text-xs opacity-60 mt-1">Cities</div>
          </div>
          <div className="text-center">
            <div
              className="text-2xl sm:text-3xl font-bold"
              style={{ color: theme?.primary ?? "#0ea5e9" }}
            >
              {agentsCount}
            </div>
            <div className="text-xs opacity-60 mt-1">Agents</div>
          </div>
        </div>
      </div>
    </section>
  );
}
