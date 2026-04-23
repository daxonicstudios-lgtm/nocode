import type { BlockProps } from "@/blocks/types";
import { MapPin, Calendar, Star, Plane } from "lucide-react";

export default function Hero075(props: BlockProps) {
  const {
    theme,
    heading = "Discover Your Next Adventure",
    subheading = "Handcrafted travel experiences to the world's most breathtaking destinations",
    bodyText = "From tropical beaches to mountain retreats, we plan every detail so you can focus on making memories.",
    buttonText = "Book Now",
    buttonUrl = "#",
    secondaryButtonText = "Explore Destinations",
    secondaryButtonUrl = "#",
    imageUrl,
    items = [
      { title: "Bali, Indonesia", value: "$1,299", description: "7 nights" },
    ],
  } = props;

  const destination = items[0];

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#f0f7ff", color: theme?.foreground ?? "#1e293b" }}
      className="min-h-[80vh] flex items-center"
    >
      <div className="w-full max-w-7xl mx-auto px-5 py-16 md:py-20">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          {/* Text Side */}
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 mb-6">
              <Plane className="w-5 h-5" style={{ color: theme?.primary ?? "#0ea5e9" }} />
              <span className="text-sm font-semibold tracking-wide" style={{ color: theme?.primary ?? "#0ea5e9" }}>
                Travel Agency
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              {heading}
            </h1>
            <p className="mt-5 text-base sm:text-lg opacity-70 leading-relaxed max-w-lg mx-auto md:mx-0">
              {subheading}
            </p>
            <p className="mt-3 text-sm opacity-50 max-w-md mx-auto md:mx-0">
              {bodyText}
            </p>

            {/* Trust badges */}
            <div className="mt-6 flex items-center gap-4 justify-center md:justify-start text-sm opacity-60">
              <span className="inline-flex items-center gap-1">
                <Star className="w-4 h-4 fill-current" style={{ color: theme?.accent ?? "#f59e0b" }} />
                4.9 Rating
              </span>
              <span className="inline-flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                120+ Destinations
              </span>
              <span className="inline-flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                Since 2010
              </span>
            </div>

            {/* CTAs */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href={buttonUrl}
                style={{ backgroundColor: theme?.primary ?? "#0ea5e9" }}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-white font-bold text-base hover:opacity-90 transition-opacity"
              >
                {buttonText}
              </a>
              <a
                href={secondaryButtonUrl}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-base border-2 hover:opacity-80 transition-opacity"
                style={{ borderColor: theme?.primary ?? "#0ea5e9", color: theme?.primary ?? "#0ea5e9" }}
              >
                {secondaryButtonText}
              </a>
            </div>
          </div>

          {/* Image Side with price badge */}
          <div className="flex-1 w-full max-w-md md:max-w-none relative">
            {imageUrl ? (
              <img
                src={imageUrl}
                alt="Travel destination"
                className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover rounded-2xl"
              />
            ) : (
              <div
                className="w-full h-[300px] sm:h-[400px] md:h-[500px] rounded-2xl flex flex-col items-center justify-center gap-4"
                style={{ backgroundColor: theme?.primary ? `${theme.primary}15` : "#0ea5e915" }}
              >
                <Plane className="w-20 h-20 opacity-20" style={{ color: theme?.primary ?? "#0ea5e9" }} />
                <MapPin className="w-10 h-10 opacity-15" style={{ color: theme?.primary ?? "#0ea5e9" }} />
              </div>
            )}

            {/* Price Badge */}
            {destination && (
              <div
                className="absolute top-4 right-4 rounded-xl px-5 py-3 shadow-lg text-center"
                style={{ backgroundColor: theme?.primary ?? "#0ea5e9", color: "#fff" }}
              >
                <div className="text-xs font-medium opacity-80">{destination.description}</div>
                <div className="text-xl font-extrabold">{destination.value}</div>
                <div className="text-xs font-medium mt-0.5">{destination.title}</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
