import type { BlockProps } from "@/blocks/types";
import { ArrowRight, Package, Gift, Truck, Star, CheckCircle } from "lucide-react";

export default function Hero100(props: BlockProps) {
  const {
    theme,
    heading = "Curated Surprises, Delivered Monthly",
    subheading = "Premium products hand-picked by experts, delivered to your door every month. Skip or cancel anytime — no commitments.",
    buttonText = "Subscribe & Save",
    buttonUrl = "#",
    secondaryButtonText = "How It Works",
    secondaryButtonUrl = "#",
    imageUrl,
    items = [
      { title: "5-7 premium products per box", icon: "package" },
      { title: "Save up to 40% vs retail", icon: "gift" },
      { title: "Free shipping on every box", icon: "truck" },
      { title: "Cancel or skip anytime", icon: "check" },
    ],
  } = props;

  const iconMap: Record<string, React.ReactNode> = {
    package: <Package className="w-4 h-4" />,
    gift: <Gift className="w-4 h-4" />,
    truck: <Truck className="w-4 h-4" />,
    check: <CheckCircle className="w-4 h-4" />,
  };

  return (
    <section
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
      className="min-h-[80vh] flex items-center px-5 py-16"
    >
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row-reverse items-center gap-10 md:gap-16">
        {/* Text Side (right on desktop) */}
        <div className="flex-1 text-center md:text-left">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6"
            style={{
              backgroundColor: theme?.accent ? `${theme.accent}18` : "rgba(249,115,22,0.1)",
              color: theme?.accent || "#ea580c",
            }}
          >
            <Gift className="w-4 h-4" />
            Limited: First Box 50% Off
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight">
            {heading}
          </h1>
          <p className="mt-5 text-base sm:text-lg opacity-70 leading-relaxed max-w-lg">
            {subheading}
          </p>

          {/* Benefits list */}
          <ul className="mt-8 space-y-3 text-left max-w-md mx-auto md:mx-0">
            {items.map((item, i) => (
              <li key={i} className="flex items-center gap-3">
                <span
                  className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{
                    backgroundColor: theme?.primary ? `${theme.primary}12` : "rgba(99,102,241,0.07)",
                    color: theme?.primary || "#6366f1",
                  }}
                >
                  {iconMap[item.icon || "package"]}
                </span>
                <span className="text-sm sm:text-base opacity-80">{item.title}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-4 mt-8 justify-center md:justify-start items-center">
            <a
              href={buttonUrl}
              style={{ backgroundColor: theme?.primary }}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg text-white font-medium bg-indigo-600 hover:opacity-90 transition-opacity"
            >
              {buttonText}
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href={secondaryButtonUrl}
              style={{ color: theme?.primary }}
              className="inline-flex items-center gap-2 px-4 py-3.5 font-medium text-indigo-600 hover:opacity-80 transition-opacity"
            >
              {secondaryButtonText}
            </a>
          </div>

          <div className="flex items-center gap-1 mt-6 justify-center md:justify-start">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} className="w-4 h-4 fill-current" style={{ color: theme?.accent || "#f59e0b" }} />
            ))}
            <span className="text-sm ml-2 opacity-60">12,000+ happy subscribers</span>
          </div>
        </div>

        {/* Image Side (left on desktop) — Unboxing visual */}
        <div className="flex-1 w-full">
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-gradient-to-br from-indigo-50 to-purple-50">
            {imageUrl ? (
              <img src={imageUrl} alt={heading} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center p-8">
                <div className="text-center space-y-4">
                  {/* Box illustration */}
                  <div className="relative inline-block">
                    <div
                      className="w-32 h-24 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: theme?.primary || "#6366f1" }}
                    >
                      <Package className="w-12 h-12 text-white" />
                    </div>
                    {/* Floating items */}
                    <div
                      className="absolute -top-3 -right-3 w-10 h-10 rounded-lg flex items-center justify-center shadow-md"
                      style={{ backgroundColor: theme?.accent || "#f59e0b" }}
                    >
                      <Star className="w-5 h-5 text-white" />
                    </div>
                    <div
                      className="absolute -top-2 -left-4 w-8 h-8 rounded-full flex items-center justify-center shadow-md"
                      style={{ backgroundColor: theme?.primary ? `${theme.primary}cc` : "#818cf8" }}
                    >
                      <Gift className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <p className="text-sm font-medium opacity-40">Unboxing Experience</p>
                </div>
              </div>
            )}

            {/* Price tag */}
            <div
              className="absolute top-4 right-4 rounded-xl shadow-lg px-4 py-2 text-center"
              style={{
                backgroundColor: theme?.background || "#fff",
                color: theme?.foreground,
              }}
            >
              <p className="text-xs opacity-50 line-through">$59/mo</p>
              <p className="text-lg font-bold" style={{ color: theme?.primary || "#6366f1" }}>$29/mo</p>
              <p className="text-xs opacity-50">First box</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
