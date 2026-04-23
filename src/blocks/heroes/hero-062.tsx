import type { BlockProps } from "@/blocks/types";
import { Scale, Shield, Phone, ArrowRight } from "lucide-react";

export default function Hero062(props: BlockProps) {
  const {
    theme,
    heading = "Protecting Your Rights With Unwavering Dedication",
    subheading = "Trusted Legal Counsel",
    bodyText = "Our experienced attorneys have successfully represented thousands of clients across corporate law, family law, and criminal defense. We fight for the justice you deserve.",
    buttonText = "Free Consultation",
    buttonUrl = "#",
    secondaryButtonText = "Call Now",
    secondaryButtonUrl = "tel:+1234567890",
    imageUrl,
    items = [
      { label: "Cases Won", value: "2,500+" },
      { label: "Years Practice", value: "35" },
      { label: "Client Rating", value: "4.9/5" },
    ],
  } = props;

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#0f1419", color: theme?.foreground ?? "#e8ecf0" }}
      className="min-h-[80vh] flex items-center"
    >
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-stretch">
        {/* Text Left */}
        <div className="w-full md:w-1/2 px-6 py-12 md:px-14 lg:px-20 flex flex-col justify-center">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded text-xs font-semibold uppercase tracking-widest mb-6 w-fit"
            style={{ backgroundColor: `${theme?.primary ?? "#b8973e"}15`, color: theme?.primary ?? "#b8973e" }}
          >
            <Scale className="w-3.5 h-3.5" />
            {subheading}
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
            {heading}
          </h1>

          <p className="mt-5 text-base opacity-60 leading-relaxed max-w-lg">
            {bodyText}
          </p>

          {/* Stats row */}
          <div
            className="mt-8 flex gap-8 py-6 border-t border-b"
            style={{ borderColor: `${theme?.foreground ?? "#e8ecf0"}15` }}
          >
            {items.slice(0, 3).map((item, i) => (
              <div key={i}>
                <p className="text-2xl font-bold" style={{ color: theme?.primary ?? "#b8973e" }}>
                  {item.value}
                </p>
                <p className="text-xs uppercase tracking-wider opacity-40 mt-1">{item.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href={buttonUrl}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded text-white font-semibold hover:opacity-90 transition-opacity"
              style={{ backgroundColor: theme?.primary ?? "#b8973e" }}
            >
              <Shield className="w-4 h-4" />
              {buttonText}
            </a>
            <a
              href={secondaryButtonUrl}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded font-semibold border hover:opacity-80 transition-opacity"
              style={{ borderColor: `${theme?.foreground ?? "#e8ecf0"}30`, color: theme?.foreground ?? "#e8ecf0" }}
            >
              <Phone className="w-4 h-4" />
              {secondaryButtonText}
            </a>
          </div>
        </div>

        {/* Image Right */}
        <div className="w-full md:w-1/2 relative">
          {imageUrl ? (
            <img src={imageUrl} alt="Law office" className="w-full h-[50vh] md:h-[80vh] object-cover" />
          ) : (
            <div
              className="w-full h-[50vh] md:h-[80vh] flex items-center justify-center"
              style={{ backgroundColor: theme?.primary ? `${theme.primary}12` : "#b8973e12" }}
            >
              <Scale className="w-24 h-24 opacity-20" style={{ color: theme?.primary ?? "#b8973e" }} />
            </div>
          )}
          {/* Decorative gold bar */}
          <div
            className="absolute top-0 left-0 w-1 h-full hidden md:block"
            style={{ backgroundColor: theme?.primary ?? "#b8973e" }}
          />
        </div>
      </div>
    </section>
  );
}
