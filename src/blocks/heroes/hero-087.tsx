import type { BlockProps } from "@/blocks/types";
import { HardHat, ArrowRight, CheckCircle, Phone } from "lucide-react";

export default function Hero087(props: BlockProps) {
  const {
    theme,
    heading = "Building What Matters, Built to Last",
    subheading = "From residential homes to commercial complexes, we deliver quality construction on time and within budget. Over 15 years of trusted expertise.",
    buttonText = "Get Estimate",
    buttonUrl = "#",
    secondaryButtonText = "View Projects",
    secondaryButtonUrl = "#",
    imageUrl,
    items = [
      { title: "Licensed and insured contractors" },
      { title: "Transparent pricing, no hidden fees" },
      { title: "On-time project delivery guarantee" },
      { title: "Free initial site consultation" },
    ],
  } = props;

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#ffffff", color: theme?.foreground ?? "#1c1917" }}
      className="min-h-[80vh] flex items-center px-5 py-16"
    >
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center gap-10 md:gap-16">
        {/* Text side */}
        <div className="flex-1 w-full">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-lg text-sm font-semibold"
            style={{ backgroundColor: theme?.accent ?? "#fef3c7", color: theme?.primary ?? "#b45309" }}
          >
            <HardHat className="w-4 h-4" />
            <span>Trusted Since 2009</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            {heading}
          </h1>
          <p className="mt-5 text-base sm:text-lg opacity-60 leading-relaxed max-w-lg">
            {subheading}
          </p>

          {/* Checklist */}
          <ul className="mt-6 space-y-3">
            {items.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm">
                <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: theme?.primary ?? "#b45309" }} />
                <span className="opacity-70">{item.title}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={buttonUrl}
              style={{ backgroundColor: theme?.primary ?? "#b45309" }}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg text-white font-semibold hover:opacity-90 transition-opacity"
            >
              {buttonText}
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href={secondaryButtonUrl}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg border font-medium hover:opacity-80 transition-opacity"
              style={{ borderColor: theme?.primary ?? "#b45309", color: theme?.primary ?? "#b45309" }}
            >
              {secondaryButtonText}
            </a>
          </div>

          <div className="mt-6 inline-flex items-center gap-2 text-sm opacity-50">
            <Phone className="w-4 h-4" />
            <span>Call for a free quote: +234 800 123 4567</span>
          </div>
        </div>

        {/* Image side */}
        <div className="flex-1 w-full">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt="Construction site"
              className="w-full h-[350px] sm:h-[450px] md:h-[500px] object-cover rounded-2xl"
            />
          ) : (
            <div
              className="w-full h-[350px] sm:h-[450px] md:h-[500px] rounded-2xl flex items-center justify-center relative overflow-hidden"
              style={{ backgroundColor: theme?.accent ?? "#fef3c7" }}
            >
              <div className="absolute bottom-0 left-0 right-0">
                {/* Simple building silhouette */}
                <div className="flex items-end justify-center gap-2 pb-0">
                  <div className="w-20 h-40 rounded-t-sm" style={{ backgroundColor: theme?.primary ?? "#b45309", opacity: 0.2 }} />
                  <div className="w-28 h-56 rounded-t-sm" style={{ backgroundColor: theme?.primary ?? "#b45309", opacity: 0.15 }} />
                  <div className="w-16 h-32 rounded-t-sm" style={{ backgroundColor: theme?.primary ?? "#b45309", opacity: 0.25 }} />
                  <div className="w-24 h-48 rounded-t-sm" style={{ backgroundColor: theme?.primary ?? "#b45309", opacity: 0.18 }} />
                </div>
              </div>
              <div className="relative z-10 text-center">
                <HardHat className="w-20 h-20 mx-auto mb-4" style={{ color: theme?.primary ?? "#b45309" }} />
                <p className="text-lg font-bold opacity-70">Construction Site</p>
                <p className="text-sm opacity-50 mt-1">Quality you can trust</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
