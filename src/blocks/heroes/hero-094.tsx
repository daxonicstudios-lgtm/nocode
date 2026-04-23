import type { BlockProps } from "@/blocks/types";
import { ArrowRight, CheckCircle, Sparkles, Star } from "lucide-react";

export default function Hero094(props: BlockProps) {
  const {
    theme,
    heading = "A Spotless Home, Every Time",
    subheading = "Professional cleaning services you can trust. Vetted cleaners, eco-friendly products, and satisfaction guaranteed.",
    buttonText = "Book Cleaning",
    buttonUrl = "#",
    secondaryButtonText = "View Pricing",
    secondaryButtonUrl = "#",
    imageUrl,
    items = [
      { title: "Deep kitchen & bathroom cleaning" },
      { title: "Eco-friendly, non-toxic products" },
      { title: "Background-checked professionals" },
      { title: "Same-day availability" },
    ],
  } = props;

  return (
    <section
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
      className="min-h-[80vh] flex items-center px-5 py-16"
    >
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row-reverse items-center gap-10 md:gap-16">
        {/* Text Side (right on desktop) */}
        <div className="flex-1 text-center md:text-left">
          <div className="inline-flex items-center gap-2 mb-6">
            <Sparkles className="w-5 h-5" style={{ color: theme?.accent || "#f59e0b" }} />
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star
                  key={s}
                  className="w-4 h-4 fill-current"
                  style={{ color: theme?.accent || "#f59e0b" }}
                />
              ))}
            </div>
            <span className="text-sm opacity-60 ml-1">4.9/5 from 2,800+ reviews</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight">
            {heading}
          </h1>
          <p className="mt-5 text-base sm:text-lg opacity-70 leading-relaxed max-w-lg">
            {subheading}
          </p>

          {/* Checklist */}
          <ul className="mt-8 space-y-3 text-left max-w-md mx-auto md:mx-0">
            {items.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle
                  className="w-5 h-5 flex-shrink-0 mt-0.5"
                  style={{ color: theme?.primary || "#10b981" }}
                />
                <span className="text-sm sm:text-base opacity-80">{item.title}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-4 mt-8 justify-center md:justify-start">
            <a
              href={buttonUrl}
              style={{ backgroundColor: theme?.primary }}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white font-medium bg-emerald-500 hover:opacity-90 transition-opacity"
            >
              {buttonText}
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href={secondaryButtonUrl}
              style={{ borderColor: theme?.primary, color: theme?.primary }}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-medium border-2 border-emerald-500 text-emerald-600 hover:opacity-80 transition-opacity"
            >
              {secondaryButtonText}
            </a>
          </div>
        </div>

        {/* Image Side (left on desktop) */}
        <div className="flex-1 w-full">
          <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-gradient-to-br from-emerald-50 to-cyan-50">
            {imageUrl ? (
              <img src={imageUrl} alt={heading} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center p-8">
                <div className="text-center space-y-4">
                  <div
                    style={{ backgroundColor: theme?.primary }}
                    className="w-20 h-20 rounded-2xl bg-emerald-500 mx-auto flex items-center justify-center"
                  >
                    <Sparkles className="w-10 h-10 text-white" />
                  </div>
                  <p className="text-sm font-medium opacity-40">Clean Home</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
