import type { BlockProps } from "@/blocks/types";
import { PawPrint, Heart, Star, Calendar } from "lucide-react";

export default function Hero072(props: BlockProps) {
  const {
    theme,
    heading = "Your Pet Deserves the Best Care",
    subheading = "Trusted by thousands of happy pet parents",
    bodyText = "From grooming to daycare, our certified pet specialists provide loving care for your furry family members.",
    buttonText = "Book a Visit",
    buttonUrl = "#",
    secondaryButtonText = "Our Services",
    secondaryButtonUrl = "#",
    imageUrl,
  } = props;

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#fef9f3", color: theme?.foreground ?? "#3d2c1e" }}
      className="min-h-[80vh] flex items-center"
    >
      <div className="w-full max-w-7xl mx-auto px-5 py-16 md:py-20">
        <div className="flex flex-col md:flex-row-reverse items-center gap-10 md:gap-16">
          {/* Text Side (right on desktop) */}
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 mb-6">
              <PawPrint className="w-5 h-5" style={{ color: theme?.primary ?? "#f59e0b" }} />
              <PawPrint className="w-4 h-4 opacity-60" style={{ color: theme?.primary ?? "#f59e0b" }} />
              <PawPrint className="w-3 h-3 opacity-30" style={{ color: theme?.primary ?? "#f59e0b" }} />
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

            {/* Quick feature pills */}
            <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-3">
              {[
                { icon: Heart, label: "Loving Care" },
                { icon: Star, label: "5-Star Rated" },
                { icon: Calendar, label: "Flexible Hours" },
              ].map(({ icon: Icon, label }, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
                  style={{
                    backgroundColor: theme?.accent ? `${theme.accent}20` : "#f59e0b20",
                    color: theme?.foreground ?? "#3d2c1e",
                  }}
                >
                  <Icon className="w-4 h-4" style={{ color: theme?.primary ?? "#f59e0b" }} />
                  {label}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href={buttonUrl}
                style={{ backgroundColor: theme?.primary ?? "#f59e0b" }}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-white font-bold text-base hover:opacity-90 transition-opacity"
              >
                <PawPrint className="w-4 h-4" />
                {buttonText}
              </a>
              <a
                href={secondaryButtonUrl}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-bold text-base border-2 hover:opacity-80 transition-opacity"
                style={{ borderColor: theme?.primary ?? "#f59e0b", color: theme?.primary ?? "#f59e0b" }}
              >
                {secondaryButtonText}
              </a>
            </div>
          </div>

          {/* Image / Illustration Side (left on desktop) */}
          <div className="flex-1 w-full max-w-md md:max-w-none">
            {imageUrl ? (
              <img
                src={imageUrl}
                alt="Happy pets"
                className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover rounded-3xl"
              />
            ) : (
              <div
                className="w-full h-[300px] sm:h-[400px] md:h-[500px] rounded-3xl flex flex-col items-center justify-center gap-6 relative overflow-hidden"
                style={{ backgroundColor: theme?.primary ? `${theme.primary}15` : "#f59e0b15" }}
              >
                <div
                  className="absolute top-6 left-6 w-16 h-16 rounded-full opacity-20"
                  style={{ backgroundColor: theme?.primary ?? "#f59e0b" }}
                />
                <div
                  className="absolute bottom-10 right-8 w-24 h-24 rounded-full opacity-10"
                  style={{ backgroundColor: theme?.accent ?? "#fb923c" }}
                />
                <PawPrint className="w-24 h-24 opacity-30" style={{ color: theme?.primary ?? "#f59e0b" }} />
                <div className="flex gap-4">
                  <Heart className="w-8 h-8 opacity-40" style={{ color: theme?.accent ?? "#fb923c" }} />
                  <Star className="w-8 h-8 opacity-40" style={{ color: theme?.primary ?? "#f59e0b" }} />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
