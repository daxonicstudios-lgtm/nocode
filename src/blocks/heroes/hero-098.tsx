import type { BlockProps } from "@/blocks/types";
import { ArrowRight, Coffee, Cake, Clock, MapPin } from "lucide-react";

export default function Hero098(props: BlockProps) {
  const {
    theme,
    heading = "Freshly Baked, Made with Love",
    subheading = "Artisan breads, handcrafted pastries, and specialty coffee — baked fresh every morning using locally sourced ingredients.",
    buttonText = "Order Online",
    buttonUrl = "#",
    secondaryButtonText = "View Menu",
    secondaryButtonUrl = "#",
    imageUrl,
    items = [
      { title: "Sourdough Loaf", value: "$6.50" },
      { title: "Croissant", value: "$3.80" },
      { title: "Cinnamon Roll", value: "$4.50" },
    ],
  } = props;

  return (
    <section
      style={{
        backgroundColor: theme?.background || "#faf7f2",
        color: theme?.foreground || "#3e2e1c",
      }}
      className="min-h-[80vh] flex items-center px-5 py-16"
    >
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row-reverse items-center gap-10 md:gap-16">
        {/* Text Side (right on desktop) */}
        <div className="flex-1 text-center md:text-left">
          <div className="inline-flex items-center gap-2 mb-6">
            <Coffee className="w-5 h-5" style={{ color: theme?.primary || "#92400e" }} />
            <span
              className="text-sm font-semibold tracking-wide"
              style={{ color: theme?.primary || "#92400e" }}
            >
              Golden Crust Bakery
            </span>
          </div>

          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight"
            style={{ fontFamily: "Georgia, serif" }}
          >
            {heading}
          </h1>
          <p className="mt-5 text-base sm:text-lg opacity-70 leading-relaxed max-w-lg">
            {subheading}
          </p>

          {/* Menu Preview */}
          <div
            className="mt-8 rounded-xl p-4 max-w-sm mx-auto md:mx-0"
            style={{ backgroundColor: theme?.primary ? `${theme.primary}0a` : "rgba(146,64,14,0.04)" }}
          >
            <div className="flex items-center gap-2 mb-3">
              <Cake className="w-4 h-4" style={{ color: theme?.primary || "#92400e" }} />
              <span className="text-sm font-semibold opacity-70">Popular Today</span>
            </div>
            {items.map((item, i) => (
              <div
                key={i}
                className="flex items-center justify-between py-2 border-b last:border-b-0"
                style={{ borderColor: "currentColor", borderBottomWidth: i < items.length - 1 ? "1px" : "0", opacity: 0.12 }}
              >
                <span className="text-sm opacity-100" style={{ opacity: 1 }}>{item.title}</span>
                <span
                  className="text-sm font-semibold"
                  style={{ color: theme?.primary || "#92400e", opacity: 1 }}
                >
                  {item.value}
                </span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 mt-8 justify-center md:justify-start">
            <a
              href={buttonUrl}
              style={{ backgroundColor: theme?.primary || "#92400e" }}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white font-medium hover:opacity-90 transition-opacity"
            >
              {buttonText}
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href={secondaryButtonUrl}
              style={{ color: theme?.primary || "#92400e" }}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-medium hover:opacity-80 transition-opacity underline underline-offset-4 decoration-1"
            >
              {secondaryButtonText}
            </a>
          </div>

          <div className="flex flex-wrap gap-4 mt-6 justify-center md:justify-start text-xs opacity-50">
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" /> Open 7 AM – 7 PM
            </span>
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5" /> 24 Baker Street
            </span>
          </div>
        </div>

        {/* Image Side (left on desktop) */}
        <div className="flex-1 w-full">
          <div className="rounded-3xl overflow-hidden aspect-[4/3] bg-gradient-to-br from-amber-50 to-orange-50">
            {imageUrl ? (
              <img src={imageUrl} alt={heading} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center p-8">
                <div className="text-center space-y-4">
                  <div className="flex justify-center gap-3">
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center"
                      style={{ backgroundColor: theme?.primary || "#92400e" }}
                    >
                      <Cake className="w-8 h-8 text-white" />
                    </div>
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center"
                      style={{ backgroundColor: theme?.accent || "#d97706" }}
                    >
                      <Coffee className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <p className="text-sm font-medium opacity-40">Fresh Pastries</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
