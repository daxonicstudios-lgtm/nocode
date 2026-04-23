import type { BlockProps } from "@/blocks/types";
import { Car, Gauge, Fuel, ArrowRight } from "lucide-react";

export default function Hero063(props: BlockProps) {
  const {
    theme,
    heading = "Drive Your Dream Car Today",
    subheading = "Premium Vehicles, Unbeatable Deals",
    bodyText = "Explore our curated collection of luxury and performance vehicles. Certified pre-owned and brand new models with flexible financing options tailored to you.",
    buttonText = "Browse Inventory",
    buttonUrl = "#",
    secondaryButtonText = "Book Test Drive",
    secondaryButtonUrl = "#",
    imageUrl,
    items = [
      { icon: "car", label: "Vehicles in Stock", value: "350+" },
      { icon: "gauge", label: "Makes & Models", value: "45" },
      { icon: "fuel", label: "EV Options", value: "60+" },
    ],
  } = props;

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#09090b", color: theme?.foreground ?? "#fafafa" }}
      className="min-h-[80vh] flex items-center overflow-hidden"
    >
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center">
        {/* Text Left */}
        <div className="w-full md:w-1/2 px-6 py-12 md:px-14 lg:px-20 relative z-10">
          <p
            className="text-sm font-bold uppercase tracking-[0.2em] mb-4"
            style={{ color: theme?.primary ?? "#ef4444" }}
          >
            {subheading}
          </p>

          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight">
            {heading}
          </h1>

          <p className="mt-5 text-base opacity-60 leading-relaxed max-w-md">
            {bodyText}
          </p>

          {/* Feature pills */}
          <div className="mt-8 flex flex-wrap gap-3">
            {items.slice(0, 3).map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 px-4 py-3 rounded-lg"
                style={{ backgroundColor: `${theme?.foreground ?? "#fafafa"}08` }}
              >
                {i === 0 && <Car className="w-5 h-5" style={{ color: theme?.primary ?? "#ef4444" }} />}
                {i === 1 && <Gauge className="w-5 h-5" style={{ color: theme?.primary ?? "#ef4444" }} />}
                {i === 2 && <Fuel className="w-5 h-5" style={{ color: theme?.primary ?? "#ef4444" }} />}
                <div>
                  <p className="text-lg font-bold leading-none">{item.value}</p>
                  <p className="text-xs opacity-50 mt-0.5">{item.label}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <a
              href={buttonUrl}
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg text-white font-bold hover:opacity-90 transition-opacity"
              style={{ backgroundColor: theme?.primary ?? "#ef4444" }}
            >
              {buttonText}
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href={secondaryButtonUrl}
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg font-semibold border hover:opacity-80 transition-opacity"
              style={{ borderColor: `${theme?.foreground ?? "#fafafa"}20` }}
            >
              {secondaryButtonText}
            </a>
          </div>
        </div>

        {/* Image Right */}
        <div className="w-full md:w-1/2 relative">
          {imageUrl ? (
            <img src={imageUrl} alt="Premium vehicle" className="w-full h-[50vh] md:h-[80vh] object-cover" />
          ) : (
            <div
              className="w-full h-[50vh] md:h-[80vh] flex items-center justify-center relative"
              style={{ backgroundColor: `${theme?.primary ?? "#ef4444"}0a` }}
            >
              <Car className="w-28 h-28 opacity-15" style={{ color: theme?.primary ?? "#ef4444" }} />
              {/* Speed lines */}
              <div
                className="absolute top-1/2 left-0 w-2/3 h-px opacity-10"
                style={{ backgroundColor: theme?.primary ?? "#ef4444" }}
              />
              <div
                className="absolute top-[45%] left-[10%] w-1/2 h-px opacity-5"
                style={{ backgroundColor: theme?.primary ?? "#ef4444" }}
              />
              <div
                className="absolute top-[55%] left-[5%] w-3/5 h-px opacity-8"
                style={{ backgroundColor: theme?.primary ?? "#ef4444" }}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
