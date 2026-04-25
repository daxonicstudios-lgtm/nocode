// @ts-nocheck
import type { BlockProps } from "@/blocks/types";
import { ShoppingCart, Truck, CreditCard, Monitor, Headphones, Smartphone } from "lucide-react";

export default function Hero078(props: BlockProps) {
  const {
    theme,
    heading = "Unbeatable Deals on Premium Electronics",
    subheading = "Top brands, lowest prices, fast delivery straight to your door",
    bodyText = "Shop the latest smartphones, laptops, headphones, and more with free shipping on orders over $50.",
    buttonText = "Shop Deals",
    buttonUrl = "#",
    secondaryButtonText = "View All Categories",
    secondaryButtonUrl = "#",
    imageUrl,
    items = [
      { title: "Pro Laptop 16\"", value: "$999", label: "Save $200", icon: "monitor" },
      { title: "Wireless Buds", value: "$79", label: "Save $40", icon: "headphones" },
      { title: "Smart Phone X", value: "$699", label: "Save $150", icon: "smartphone" },
    ],
  } = props;

  const iconMap: Record<string, React.ElementType> = {
    monitor: Monitor,
    headphones: Headphones,
    smartphone: Smartphone,
  };

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#f8fafc", color: theme?.foreground ?? "#0f172a" }}
      className="min-h-[80vh] flex items-center"
    >
      <div className="w-full max-w-7xl mx-auto px-5 py-16 md:py-20">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-14">
          {/* Text Side */}
          <div className="flex-1 text-center md:text-left">
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold mb-6"
              style={{
                backgroundColor: theme?.accent ? `${theme.accent}20` : "#ef444420",
                color: theme?.accent ?? "#ef4444",
              }}
            >
              <ShoppingCart className="w-3.5 h-3.5" />
              Limited Time Offers
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
              {heading}
            </h1>
            <p className="mt-4 text-base sm:text-lg opacity-70 leading-relaxed max-w-lg mx-auto md:mx-0">
              {subheading}
            </p>
            <p className="mt-3 text-sm opacity-50 max-w-md mx-auto md:mx-0">
              {bodyText}
            </p>

            {/* Trust badges */}
            <div className="mt-6 flex flex-wrap items-center gap-5 justify-center md:justify-start text-xs opacity-50">
              <span className="inline-flex items-center gap-1.5">
                <Truck className="w-4 h-4" /> Free Shipping
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CreditCard className="w-4 h-4" /> Secure Payment
              </span>
              <span className="inline-flex items-center gap-1.5">
                30-Day Returns
              </span>
            </div>

            {/* CTAs */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href={buttonUrl}
                style={{ backgroundColor: theme?.primary ?? "#0f172a" }}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-white font-bold text-base hover:opacity-90 transition-opacity"
              >
                <ShoppingCart className="w-4 h-4" />
                {buttonText}
              </a>
              <a
                href={secondaryButtonUrl}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-base border-2 hover:opacity-80 transition-opacity"
                style={{ borderColor: theme?.foreground ?? "#0f172a" }}
              >
                {secondaryButtonText}
              </a>
            </div>
          </div>

          {/* Product Showcase Side */}
          <div className="flex-1 w-full max-w-md md:max-w-none">
            {imageUrl ? (
              <img
                src={imageUrl}
                alt="Electronics"
                className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover rounded-2xl"
              />
            ) : (
              <div className="grid grid-cols-1 gap-4">
                {items.map((item, i) => {
                  const Icon = iconMap[item.icon ?? "monitor"] ?? Monitor;
                  return (
                    <div
                      key={i}
                      className="flex items-center gap-4 p-5 rounded-xl border transition-shadow hover:shadow-md"
                      style={{
                        borderColor: theme?.primary ? `${theme.primary}15` : "#0f172a15",
                        backgroundColor: theme?.background ?? "#fff",
                      }}
                    >
                      <div
                        className="w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: theme?.primary ? `${theme.primary}10` : "#0f172a10" }}
                      >
                        <Icon className="w-7 h-7 opacity-60" style={{ color: theme?.primary ?? "#0f172a" }} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-semibold truncate">{item.title}</div>
                        <div className="text-lg font-extrabold mt-0.5" style={{ color: theme?.primary ?? "#0f172a" }}>
                          {item.value}
                        </div>
                      </div>
                      {item.label && (
                        <span
                          className="px-3 py-1 rounded-full text-xs font-bold flex-shrink-0"
                          style={{
                            backgroundColor: theme?.accent ? `${theme.accent}20` : "#ef444420",
                            color: theme?.accent ?? "#ef4444",
                          }}
                        >
                          {item.label}
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
