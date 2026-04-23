import type { BlockProps } from "@/blocks/types";
import { Pizza, Clock } from "lucide-react";

export default function Hero152(props: BlockProps) {
  const {
    theme,
    heading = "Authentic Italian Flavors, Made with Love",
    subheading = "Trattoria da Marco",
    bodyText = "From hand-stretched pizza to homemade pasta, every dish at our family-run trattoria is prepared using recipes passed down through three generations of Italian cooking.",
    buttonText = "Order Online",
    buttonUrl = "#order",
    secondaryButtonText = "Book a Table",
    secondaryButtonUrl = "#book",
    imageUrl,
  } = props;

  return (
    <section
      className="min-h-screen flex items-center px-4 py-16 sm:py-20"
      style={{
        backgroundColor: theme?.background ?? "#fdf6ee",
        color: theme?.foreground ?? "#3d2b1f",
      }}
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Text side */}
        <div className="order-2 lg:order-1">
          {/* Badge */}
          <div className="flex items-center gap-2 mb-6">
            <Pizza
              className="w-5 h-5"
              style={{ color: theme?.primary ?? "#c0392b" }}
            />
            <span
              className="text-xs font-semibold uppercase tracking-widest"
              style={{ color: theme?.primary ?? "#c0392b" }}
            >
              {subheading}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
            {heading}
          </h1>

          <p className="text-base sm:text-lg leading-relaxed mb-8 opacity-75 max-w-lg">
            {bodyText}
          </p>

          {/* Opening hours chip */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm mb-8"
            style={{
              backgroundColor: `${theme?.primary ?? "#c0392b"}15`,
              color: theme?.primary ?? "#c0392b",
            }}
          >
            <Clock className="w-4 h-4" />
            <span className="font-medium">Open Daily: 11 AM &ndash; 11 PM</span>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={buttonUrl}
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg text-sm font-semibold transition-all duration-300 hover:opacity-90"
              style={{
                backgroundColor: theme?.primary ?? "#c0392b",
                color: "#ffffff",
              }}
            >
              {buttonText}
            </a>
            <a
              href={secondaryButtonUrl}
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg text-sm font-semibold border-2 transition-all duration-300 hover:opacity-80"
              style={{
                borderColor: theme?.primary ?? "#c0392b",
                color: theme?.primary ?? "#c0392b",
              }}
            >
              {secondaryButtonText}
            </a>
          </div>
        </div>

        {/* Image side */}
        <div className="order-1 lg:order-2 relative">
          <div
            className="aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] rounded-2xl overflow-hidden"
            style={{
              backgroundColor: theme?.accent ?? "#e8d5b7",
            }}
          >
            {imageUrl ? (
              <img
                src={imageUrl}
                alt="Italian cuisine"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center gap-4 opacity-60">
                <Pizza className="w-16 h-16" style={{ color: theme?.primary ?? "#c0392b" }} />
                <span className="text-sm font-medium tracking-wide">Fresh from the oven</span>
              </div>
            )}
          </div>
          {/* Decorative badge */}
          <div
            className="absolute -bottom-4 -left-4 sm:bottom-6 sm:-left-6 w-24 h-24 sm:w-28 sm:h-28 rounded-full flex flex-col items-center justify-center text-center shadow-lg"
            style={{
              backgroundColor: theme?.primary ?? "#c0392b",
              color: "#ffffff",
            }}
          >
            <span className="text-2xl sm:text-3xl font-bold leading-none">30+</span>
            <span className="text-[10px] sm:text-xs uppercase tracking-wider mt-1">Years of<br />Tradition</span>
          </div>
        </div>
      </div>
    </section>
  );
}
