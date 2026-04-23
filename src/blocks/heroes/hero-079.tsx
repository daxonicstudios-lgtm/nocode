import type { BlockProps } from "@/blocks/types";
import { Smile, CalendarCheck, Shield, Star, ArrowRight } from "lucide-react";

export default function Hero079(props: BlockProps) {
  const {
    theme,
    heading = "Your Smile Is Our Priority",
    subheading = "Gentle, modern dental care for the whole family",
    bodyText = "From routine check-ups to cosmetic dentistry, our experienced team uses the latest technology to make every visit comfortable and stress-free.",
    buttonText = "Book Your Smile",
    buttonUrl = "#",
    secondaryButtonText = "Our Services",
    secondaryButtonUrl = "#",
    imageUrl,
  } = props;

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#f0fdfa", color: theme?.foreground ?? "#134e4a" }}
      className="min-h-[80vh] flex items-center"
    >
      <div className="w-full max-w-7xl mx-auto px-5 py-16 md:py-20">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          {/* Text Side */}
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 mb-6">
              <Smile className="w-6 h-6" style={{ color: theme?.primary ?? "#14b8a6" }} />
              <span
                className="text-sm font-semibold"
                style={{ color: theme?.primary ?? "#14b8a6" }}
              >
                Dental Clinic
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight">
              {heading}
            </h1>
            <p className="mt-4 text-base sm:text-lg opacity-70 leading-relaxed max-w-lg mx-auto md:mx-0">
              {subheading}
            </p>
            <p className="mt-3 text-sm opacity-50 max-w-md mx-auto md:mx-0">
              {bodyText}
            </p>

            {/* Trust icons */}
            <div className="mt-8 flex flex-wrap gap-6 justify-center md:justify-start">
              {[
                { icon: Shield, label: "Safe & Sterile" },
                { icon: Star, label: "5-Star Care" },
                { icon: CalendarCheck, label: "Easy Booking" },
              ].map(({ icon: Icon, label }, i) => (
                <div key={i} className="flex items-center gap-2 text-sm opacity-60">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: theme?.primary ? `${theme.primary}15` : "#14b8a615" }}
                  >
                    <Icon className="w-4 h-4" style={{ color: theme?.primary ?? "#14b8a6" }} />
                  </div>
                  {label}
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href={buttonUrl}
                style={{ backgroundColor: theme?.primary ?? "#14b8a6" }}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-white font-bold text-base hover:opacity-90 transition-opacity"
              >
                <Smile className="w-4 h-4" />
                {buttonText}
              </a>
              <a
                href={secondaryButtonUrl}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-semibold text-base border-2 hover:opacity-80 transition-opacity"
                style={{ borderColor: theme?.primary ?? "#14b8a6", color: theme?.primary ?? "#14b8a6" }}
              >
                {secondaryButtonText}
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Image Side */}
          <div className="flex-1 w-full max-w-md md:max-w-none">
            {imageUrl ? (
              <img
                src={imageUrl}
                alt="Smiling patient"
                className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover rounded-3xl"
              />
            ) : (
              <div
                className="w-full h-[300px] sm:h-[400px] md:h-[500px] rounded-3xl flex flex-col items-center justify-center gap-6 relative overflow-hidden"
                style={{ backgroundColor: theme?.primary ? `${theme.primary}10` : "#14b8a610" }}
              >
                {/* Decorative circles */}
                <div
                  className="absolute -top-10 -right-10 w-40 h-40 rounded-full opacity-10"
                  style={{ backgroundColor: theme?.primary ?? "#14b8a6" }}
                />
                <div
                  className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full opacity-10"
                  style={{ backgroundColor: theme?.accent ?? "#5eead4" }}
                />

                <Smile className="w-24 h-24 opacity-25" style={{ color: theme?.primary ?? "#14b8a6" }} />
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-current"
                      style={{ color: theme?.accent ?? "#fbbf24", opacity: 0.5 }}
                    />
                  ))}
                </div>
                <span className="text-xs uppercase tracking-widest opacity-30">Caring for Smiles</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
