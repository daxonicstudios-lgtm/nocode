import type { BlockProps } from "@/blocks/types";
import { UtensilsCrossed, Clock, MapPin, ArrowRight } from "lucide-react";

export default function Hero061(props: BlockProps) {
  const {
    theme,
    heading = "A Culinary Experience Like No Other",
    subheading = "Farm-to-table dining crafted with passion",
    bodyText = "Indulge in seasonal dishes prepared by our award-winning chefs using locally sourced ingredients. Every plate tells a story of flavor, tradition, and innovation.",
    buttonText = "Reserve a Table",
    buttonUrl = "#",
    secondaryButtonText = "View Menu",
    secondaryButtonUrl = "#",
    imageUrl,
    items = [
      { label: "Years of Excellence", value: "12" },
      { label: "Michelin Stars", value: "2" },
      { label: "Signature Dishes", value: "40+" },
    ],
  } = props;

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#1c1210", color: theme?.foreground ?? "#faf5f2" }}
      className="min-h-[80vh] flex items-center"
    >
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center">
        {/* Image Left */}
        <div className="w-full md:w-1/2 relative">
          {imageUrl ? (
            <img src={imageUrl} alt="Restaurant dish" className="w-full h-[50vh] md:h-[80vh] object-cover" />
          ) : (
            <div
              className="w-full h-[50vh] md:h-[80vh] flex items-center justify-center"
              style={{ backgroundColor: theme?.primary ? `${theme.primary}22` : "#3d201522" }}
            >
              <UtensilsCrossed className="w-20 h-20 opacity-30" style={{ color: theme?.primary ?? "#c2956b" }} />
            </div>
          )}
          {/* Overlay badge */}
          <div
            className="absolute bottom-6 left-6 px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 backdrop-blur-md"
            style={{ backgroundColor: `${theme?.primary ?? "#c2956b"}cc`, color: "#fff" }}
          >
            <Clock className="w-4 h-4" />
            Open Daily 11am – 11pm
          </div>
        </div>

        {/* Text Right */}
        <div className="w-full md:w-1/2 px-6 py-12 md:px-14 lg:px-20">
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="w-4 h-4" style={{ color: theme?.accent ?? "#c2956b" }} />
            <span className="text-sm uppercase tracking-widest opacity-60">Fine Dining</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            {heading}
          </h1>

          <p
            className="mt-2 text-lg italic font-light"
            style={{ color: theme?.accent ?? "#c2956b" }}
          >
            {subheading}
          </p>

          <p className="mt-5 text-base opacity-70 leading-relaxed">
            {bodyText}
          </p>

          {/* Stats */}
          <div className="mt-8 flex gap-8">
            {items.slice(0, 3).map((item, i) => (
              <div key={i}>
                <p className="text-2xl font-bold" style={{ color: theme?.primary ?? "#c2956b" }}>
                  {item.value}
                </p>
                <p className="text-xs uppercase tracking-wider opacity-50 mt-1">{item.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href={buttonUrl}
              className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full text-white font-medium hover:opacity-90 transition-opacity"
              style={{ backgroundColor: theme?.primary ?? "#c2956b" }}
            >
              {buttonText}
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href={secondaryButtonUrl}
              className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full font-medium border hover:opacity-80 transition-opacity"
              style={{ borderColor: theme?.primary ?? "#c2956b", color: theme?.primary ?? "#c2956b" }}
            >
              {secondaryButtonText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
