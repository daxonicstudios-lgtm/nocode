import type { BlockProps } from "@/blocks/types";
import { Home, Star, MapPin, Bath, BedDouble, ArrowRight } from "lucide-react";

export default function Hero068(props: BlockProps) {
  const {
    theme,
    heading = "Luxury Living Redefined",
    subheading = "Exclusive Properties",
    bodyText = "Discover exceptional estates curated for the discerning buyer. From waterfront villas to penthouse suites, experience the pinnacle of residential excellence.",
    buttonText = "Schedule Viewing",
    buttonUrl = "#",
    secondaryButtonText = "Browse Properties",
    secondaryButtonUrl = "#",
    imageUrl,
    items = [
      { label: "Properties Sold", value: "$2.8B+" },
      { label: "Luxury Listings", value: "450+" },
      { label: "Global Markets", value: "12" },
    ],
  } = props;

  const goldColor = theme?.accent ?? "#c9a84c";

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#0d0d0d", color: theme?.foreground ?? "#f2f0eb" }}
      className="min-h-[80vh] flex items-center"
    >
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-center">
        {/* Text Right */}
        <div className="w-full md:w-1/2 px-6 py-12 md:px-14 lg:px-20">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-[0.2em] mb-6"
            style={{ border: `1px solid ${goldColor}40`, color: goldColor }}
          >
            <Star className="w-3 h-3" />
            {subheading}
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
            {heading}
          </h1>

          <p className="mt-5 text-base opacity-55 leading-relaxed max-w-lg">
            {bodyText}
          </p>

          {/* Featured property specs */}
          <div
            className="mt-8 flex gap-6 py-4 px-5 rounded-lg"
            style={{ backgroundColor: `${goldColor}0a`, border: `1px solid ${goldColor}18` }}
          >
            <span className="flex items-center gap-2 text-sm">
              <BedDouble className="w-4 h-4" style={{ color: goldColor }} /> 6 Beds
            </span>
            <span className="flex items-center gap-2 text-sm">
              <Bath className="w-4 h-4" style={{ color: goldColor }} /> 4 Baths
            </span>
            <span className="flex items-center gap-2 text-sm">
              <MapPin className="w-4 h-4" style={{ color: goldColor }} /> Cape Town
            </span>
          </div>

          {/* Stats */}
          <div className="mt-8 flex gap-8">
            {items.slice(0, 3).map((item, i) => (
              <div key={i}>
                <p className="text-xl font-bold" style={{ color: goldColor }}>
                  {item.value}
                </p>
                <p className="text-xs uppercase tracking-wider opacity-40 mt-1">{item.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <a
              href={buttonUrl}
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded font-semibold hover:opacity-90 transition-opacity text-black"
              style={{ backgroundColor: goldColor }}
            >
              {buttonText}
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href={secondaryButtonUrl}
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded font-semibold border hover:opacity-80 transition-opacity"
              style={{ borderColor: `${goldColor}40`, color: goldColor }}
            >
              {secondaryButtonText}
            </a>
          </div>
        </div>

        {/* Image Left */}
        <div className="w-full md:w-1/2 relative">
          {imageUrl ? (
            <img src={imageUrl} alt="Luxury property" className="w-full h-[50vh] md:h-[80vh] object-cover" />
          ) : (
            <div
              className="w-full h-[50vh] md:h-[80vh] flex items-center justify-center"
              style={{ backgroundColor: `${goldColor}0a` }}
            >
              <Home className="w-24 h-24 opacity-15" style={{ color: goldColor }} />
            </div>
          )}
          {/* Gold frame accent */}
          <div
            className="absolute inset-4 border pointer-events-none rounded opacity-20 hidden md:block"
            style={{ borderColor: goldColor }}
          />
          {/* Price badge */}
          <div
            className="absolute bottom-8 left-8 px-5 py-3 rounded backdrop-blur-sm"
            style={{ backgroundColor: `${theme?.background ?? "#0d0d0d"}cc` }}
          >
            <p className="text-xs uppercase tracking-widest opacity-50">Starting From</p>
            <p className="text-xl font-bold" style={{ color: goldColor }}>$4.5M</p>
          </div>
        </div>
      </div>
    </section>
  );
}
