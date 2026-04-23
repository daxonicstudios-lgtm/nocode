import type { BlockProps } from "@/blocks/types";
import { Heart, Calendar, MapPin, Music, ArrowRight } from "lucide-react";

export default function Hero064(props: BlockProps) {
  const {
    theme,
    heading = "Amara & Daniel",
    subheading = "We're Getting Married!",
    bodyText = "Join us as we celebrate the beginning of our forever. A day filled with love, laughter, and memories to last a lifetime.",
    buttonText = "Plan Your Day",
    buttonUrl = "#",
    secondaryButtonText = "RSVP Now",
    secondaryButtonUrl = "#",
    imageUrl,
    items = [
      { label: "Days Together", value: "1,247" },
      { label: "Wedding Guests", value: "180" },
      { label: "Celebrations", value: "June 2026" },
    ],
  } = props;

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#fdf8f4", color: theme?.foreground ?? "#3d2b1f" }}
      className="min-h-[80vh] flex items-center"
    >
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-center">
        {/* Text Right */}
        <div className="w-full md:w-1/2 px-6 py-12 md:px-14 lg:px-20">
          <div className="flex items-center gap-2 mb-4">
            <Heart className="w-5 h-5" style={{ color: theme?.accent ?? "#c77d8a" }} />
            <span
              className="text-sm uppercase tracking-[0.2em] font-medium"
              style={{ color: theme?.accent ?? "#c77d8a" }}
            >
              {subheading}
            </span>
          </div>

          <h1
            className="text-4xl sm:text-5xl lg:text-6xl leading-tight"
            style={{ fontFamily: "Georgia, serif" }}
          >
            {heading}
          </h1>

          <p className="mt-5 text-base opacity-70 leading-relaxed max-w-md">
            {bodyText}
          </p>

          {/* Countdown-style stats */}
          <div className="mt-8 flex gap-6">
            {items.slice(0, 3).map((item, i) => (
              <div
                key={i}
                className="text-center px-4 py-4 rounded-lg"
                style={{ backgroundColor: `${theme?.accent ?? "#c77d8a"}10` }}
              >
                <p className="text-2xl font-bold" style={{ color: theme?.accent ?? "#c77d8a" }}>
                  {item.value}
                </p>
                <p className="text-xs uppercase tracking-wider opacity-50 mt-1">{item.label}</p>
              </div>
            ))}
          </div>

          {/* Details row */}
          <div
            className="mt-6 flex flex-wrap gap-4 text-sm opacity-60"
          >
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" style={{ color: theme?.accent ?? "#c77d8a" }} /> June 15, 2026
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4" style={{ color: theme?.accent ?? "#c77d8a" }} /> Lavender Gardens, Cape Town
            </span>
            <span className="flex items-center gap-1.5">
              <Music className="w-4 h-4" style={{ color: theme?.accent ?? "#c77d8a" }} /> Live Band
            </span>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href={buttonUrl}
              className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full text-white font-medium hover:opacity-90 transition-opacity"
              style={{ backgroundColor: theme?.accent ?? "#c77d8a" }}
            >
              {buttonText}
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href={secondaryButtonUrl}
              className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full font-medium border hover:opacity-80 transition-opacity"
              style={{ borderColor: theme?.accent ?? "#c77d8a", color: theme?.accent ?? "#c77d8a" }}
            >
              {secondaryButtonText}
            </a>
          </div>
        </div>

        {/* Image Left */}
        <div className="w-full md:w-1/2 relative">
          {imageUrl ? (
            <img src={imageUrl} alt="Wedding couple" className="w-full h-[50vh] md:h-[80vh] object-cover" />
          ) : (
            <div
              className="w-full h-[50vh] md:h-[80vh] flex items-center justify-center"
              style={{ backgroundColor: `${theme?.accent ?? "#c77d8a"}12` }}
            >
              <Heart className="w-24 h-24 opacity-20" style={{ color: theme?.accent ?? "#c77d8a" }} />
            </div>
          )}
          {/* Decorative floral corner */}
          <div
            className="absolute top-4 left-4 w-16 h-16 border-t-2 border-l-2 rounded-tl-xl opacity-40"
            style={{ borderColor: theme?.accent ?? "#c77d8a" }}
          />
          <div
            className="absolute bottom-4 right-4 w-16 h-16 border-b-2 border-r-2 rounded-br-xl opacity-40"
            style={{ borderColor: theme?.accent ?? "#c77d8a" }}
          />
        </div>
      </div>
    </section>
  );
}
