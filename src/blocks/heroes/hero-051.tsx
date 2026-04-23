import type { BlockProps } from "@/blocks/types";
import { ShoppingBag, Star, Truck, ShieldCheck } from "lucide-react";

export default function Hero051(props: BlockProps) {
  const {
    theme,
    heading = "Discover Premium Streetwear",
    subheading = "Curated collections that define your style. Free shipping on orders over $50.",
    bodyText = "$89.99",
    buttonText = "Shop Now",
    buttonUrl = "#",
    secondaryButtonText = "View Collection",
    secondaryButtonUrl = "#",
    imageUrl,
  } = props;

  return (
    <section
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
      className="min-h-[80vh] flex items-center px-5 py-16"
    >
      <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center gap-10 md:gap-16">
        {/* Text Side */}
        <div className="flex-1 text-center md:text-left">
          <div
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold mb-6"
            style={{ backgroundColor: theme?.accent, color: theme?.background }}
          >
            <Star className="w-3 h-3" />
            Best Seller
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight">
            {heading}
          </h1>
          <p className="mt-5 text-lg opacity-70 leading-relaxed max-w-lg">
            {subheading}
          </p>
          <div className="mt-6">
            <span
              className="text-3xl font-bold"
              style={{ color: theme?.primary }}
            >
              {bodyText}
            </span>
            <span className="ml-3 text-base line-through opacity-40">$129.99</span>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
            <a
              href={buttonUrl}
              style={{ backgroundColor: theme?.primary }}
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-white font-medium bg-black hover:opacity-90 transition-opacity"
            >
              <ShoppingBag className="w-4 h-4" />
              {buttonText}
            </a>
            <a
              href={secondaryButtonUrl}
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-medium border border-current opacity-70 hover:opacity-100 transition-opacity"
            >
              {secondaryButtonText}
            </a>
          </div>
          <div className="mt-8 flex items-center gap-6 justify-center md:justify-start text-sm opacity-60">
            <span className="inline-flex items-center gap-1.5">
              <Truck className="w-4 h-4" /> Free Shipping
            </span>
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4" /> 30-Day Returns
            </span>
          </div>
        </div>

        {/* Image Side */}
        <div className="flex-1 w-full max-w-md md:max-w-none">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt="Featured product"
              className="w-full aspect-square object-cover rounded-2xl"
            />
          ) : (
            <div
              className="w-full aspect-square rounded-2xl flex items-center justify-center"
              style={{ backgroundColor: theme?.accent ? `${theme.accent}22` : "#f3f4f6" }}
            >
              <ShoppingBag className="w-20 h-20 opacity-20" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
