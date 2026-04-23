import type { BlockProps } from "@/blocks/types";
import { CheckCircle, Phone, ArrowRight, Users } from "lucide-react";

export default function Hero077(props: BlockProps) {
  const {
    theme,
    heading = "Strategic Consulting for Growing Businesses",
    subheading = "We help companies scale with clarity and confidence",
    bodyText = "Our senior consultants bring decades of experience across finance, operations, and technology to deliver measurable results for your business.",
    buttonText = "Schedule Call",
    buttonUrl = "#",
    secondaryButtonText = "Case Studies",
    secondaryButtonUrl = "#",
    imageUrl,
    items = [
      { title: "Business strategy and market analysis" },
      { title: "Operational efficiency optimization" },
      { title: "Digital transformation roadmaps" },
      { title: "Leadership and team development" },
    ],
  } = props;

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#ffffff", color: theme?.foreground ?? "#1f2937" }}
      className="min-h-[80vh] flex items-center"
    >
      <div className="w-full max-w-7xl mx-auto px-5 py-16 md:py-20">
        <div className="flex flex-col md:flex-row-reverse items-center gap-10 md:gap-16">
          {/* Text Side (right on desktop) */}
          <div className="flex-1 text-center md:text-left">
            <span
              className="text-xs font-bold uppercase tracking-[0.15em] mb-4 inline-block"
              style={{ color: theme?.primary ?? "#2563eb" }}
            >
              Management Consulting
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight">
              {heading}
            </h1>
            <p className="mt-4 text-base sm:text-lg opacity-70 leading-relaxed max-w-lg mx-auto md:mx-0">
              {subheading}
            </p>
            <p className="mt-3 text-sm opacity-50 max-w-md mx-auto md:mx-0">
              {bodyText}
            </p>

            {/* Feature list */}
            <ul className="mt-8 space-y-3 text-left max-w-md mx-auto md:mx-0">
              {items.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle
                    className="w-5 h-5 mt-0.5 flex-shrink-0"
                    style={{ color: theme?.primary ?? "#2563eb" }}
                  />
                  <span className="text-sm">{item.title}</span>
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href={buttonUrl}
                style={{ backgroundColor: theme?.primary ?? "#2563eb" }}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg text-white font-semibold text-base hover:opacity-90 transition-opacity"
              >
                <Phone className="w-4 h-4" />
                {buttonText}
              </a>
              <a
                href={secondaryButtonUrl}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg font-semibold text-base hover:opacity-80 transition-opacity"
                style={{ color: theme?.primary ?? "#2563eb" }}
              >
                {secondaryButtonText}
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Image / Team Photo Side (left on desktop) */}
          <div className="flex-1 w-full max-w-md md:max-w-none">
            {imageUrl ? (
              <img
                src={imageUrl}
                alt="Consulting team"
                className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover rounded-xl"
              />
            ) : (
              <div
                className="w-full h-[300px] sm:h-[400px] md:h-[500px] rounded-xl flex flex-col items-center justify-center gap-6 relative"
                style={{ backgroundColor: theme?.primary ? `${theme.primary}08` : "#2563eb08" }}
              >
                <Users className="w-24 h-24 opacity-15" style={{ color: theme?.primary ?? "#2563eb" }} />
                <div className="flex gap-3">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-14 h-14 rounded-full flex items-center justify-center text-white text-sm font-bold"
                      style={{ backgroundColor: theme?.primary ?? "#2563eb", opacity: 1 - i * 0.2 }}
                    >
                      {["JD", "KW", "RS"][i - 1]}
                    </div>
                  ))}
                </div>
                <span className="text-xs uppercase tracking-widest opacity-30">Our Senior Team</span>

                {/* Decorative corner accent */}
                <div
                  className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 rounded-tl-xl"
                  style={{ borderColor: theme?.primary ? `${theme.primary}30` : "#2563eb30" }}
                />
                <div
                  className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 rounded-br-xl"
                  style={{ borderColor: theme?.primary ? `${theme.primary}30` : "#2563eb30" }}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
