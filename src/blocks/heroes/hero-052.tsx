import type { BlockProps } from "@/blocks/types";
import { MapPin, BedDouble, Bath, Maximize, ArrowRight } from "lucide-react";

export default function Hero052(props: BlockProps) {
  const {
    theme,
    heading = "Find Your Dream Home in Nairobi",
    subheading = "Luxury apartments and townhouses in prime locations. Schedule a private viewing today.",
    bodyText = "Westlands, Nairobi",
    buttonText = "Book a Tour",
    buttonUrl = "#",
    secondaryButtonText = "Browse Listings",
    secondaryButtonUrl = "#",
    imageUrl,
    items = [
      { label: "Bedrooms", value: "3" },
      { label: "Bathrooms", value: "2" },
      { label: "Area", value: "1,450 sqft" },
    ],
  } = props;

  const statIcons = [BedDouble, Bath, Maximize];

  return (
    <section
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
      className="min-h-[80vh] flex items-center px-5 py-16"
    >
      <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center gap-10 md:gap-14">
        {/* Text Side */}
        <div className="flex-1 text-center md:text-left">
          <div
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold mb-6"
            style={{ backgroundColor: theme?.primary, color: "#fff" }}
          >
            <MapPin className="w-3 h-3" />
            {bodyText}
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight">
            {heading}
          </h1>
          <p className="mt-5 text-lg opacity-70 leading-relaxed max-w-lg">
            {subheading}
          </p>

          <div className="mt-8 flex items-center gap-6 justify-center md:justify-start">
            {items.slice(0, 3).map((item, i) => {
              const Icon = statIcons[i] || BedDouble;
              return (
                <div key={i} className="flex flex-col items-center md:items-start">
                  <div className="flex items-center gap-1.5 text-sm opacity-60">
                    <Icon className="w-4 h-4" />
                    {item.label}
                  </div>
                  <span className="text-xl font-bold mt-1">{item.value}</span>
                </div>
              );
            })}
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
            <a
              href={buttonUrl}
              style={{ backgroundColor: theme?.primary }}
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg text-white font-medium bg-black hover:opacity-90 transition-opacity"
            >
              {buttonText}
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href={secondaryButtonUrl}
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg font-medium border border-current opacity-70 hover:opacity-100 transition-opacity"
            >
              {secondaryButtonText}
            </a>
          </div>
        </div>

        {/* Image Side */}
        <div className="flex-1 w-full max-w-md md:max-w-none relative">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt="Property listing"
              className="w-full aspect-[4/3] object-cover rounded-2xl"
            />
          ) : (
            <div
              className="w-full aspect-[4/3] rounded-2xl flex items-center justify-center"
              style={{ backgroundColor: theme?.accent ? `${theme.accent}22` : "#f3f4f6" }}
            >
              <MapPin className="w-20 h-20 opacity-20" />
            </div>
          )}
          <div
            className="absolute bottom-4 left-4 right-4 p-3 rounded-xl backdrop-blur-sm text-sm font-semibold text-center"
            style={{
              backgroundColor: theme?.primary ? `${theme.primary}dd` : "rgba(0,0,0,0.75)",
              color: "#fff",
            }}
          >
            Starting from KSh 12,500,000
          </div>
        </div>
      </div>
    </section>
  );
}
