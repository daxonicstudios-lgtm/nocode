import type { BlockProps } from "@/blocks/types";
import { Flower2, Sparkles, Clock, ArrowRight, Star } from "lucide-react";

export default function Hero088(props: BlockProps) {
  const {
    theme,
    heading = "Reveal Your Natural Radiance",
    subheading = "Indulge in personalized beauty treatments crafted by expert stylists. From hair to skincare, we bring out the best version of you.",
    buttonText = "Book Treatment",
    buttonUrl = "#",
    secondaryButtonText = "Our Services",
    secondaryButtonUrl = "#",
    imageUrl,
    items = [
      { title: "Hair Styling", description: "From $45" },
      { title: "Facial Treatment", description: "From $60" },
      { title: "Nail Art", description: "From $25" },
    ],
  } = props;

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#fdf2f8", color: theme?.foreground ?? "#1c1917" }}
      className="min-h-[80vh] flex items-center px-5 py-16 relative overflow-hidden"
    >
      {/* Floral accent dots */}
      <div className="absolute top-20 right-10 opacity-10">
        <Flower2 className="w-32 h-32" style={{ color: theme?.primary ?? "#ec4899" }} />
      </div>
      <div className="absolute bottom-20 left-10 opacity-10">
        <Flower2 className="w-24 h-24" style={{ color: theme?.accent ?? "#f9a8d4" }} />
      </div>

      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row-reverse items-center gap-10 md:gap-16 relative z-10">
        {/* Text side (right on desktop) */}
        <div className="flex-1 w-full">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full text-sm font-medium"
            style={{ backgroundColor: theme?.accent ?? "#fce7f3", color: theme?.primary ?? "#db2777" }}
          >
            <Sparkles className="w-4 h-4" />
            <span>Award-winning salon</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
            {heading}
          </h1>
          <p className="mt-5 text-base sm:text-lg opacity-60 leading-relaxed max-w-lg">
            {subheading}
          </p>

          {/* Service preview */}
          <div className="mt-8 flex flex-wrap gap-3">
            {items.map((item, i) => (
              <div
                key={i}
                className="px-5 py-3 rounded-2xl border text-center"
                style={{ borderColor: theme?.primary ?? "#f9a8d4", backgroundColor: "white" }}
              >
                <p className="font-medium text-sm">{item.title}</p>
                <p className="text-xs mt-0.5" style={{ color: theme?.primary ?? "#db2777" }}>{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={buttonUrl}
              style={{ backgroundColor: theme?.primary ?? "#db2777" }}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white font-semibold hover:opacity-90 transition-opacity"
            >
              <Sparkles className="w-4 h-4" />
              {buttonText}
            </a>
            <a
              href={secondaryButtonUrl}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border font-medium hover:opacity-80 transition-opacity"
              style={{ borderColor: theme?.primary ?? "#db2777", color: theme?.primary ?? "#db2777" }}
            >
              {secondaryButtonText}
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="mt-6 flex items-center gap-4 text-sm opacity-50">
            <span className="inline-flex items-center gap-1.5">
              <Clock className="w-4 h-4" /> Open 9 AM - 8 PM
            </span>
            <span className="inline-flex items-center gap-1">
              <Star className="w-3.5 h-3.5 fill-current" style={{ color: theme?.accent ?? "#f9a8d4" }} /> 4.9 rating
            </span>
          </div>
        </div>

        {/* Image side (left on desktop) */}
        <div className="flex-1 w-full">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt="Beauty salon"
              className="w-full h-[400px] sm:h-[500px] md:h-[550px] object-cover rounded-[2rem]"
            />
          ) : (
            <div
              className="w-full h-[400px] sm:h-[500px] md:h-[550px] rounded-[2rem] flex items-center justify-center relative overflow-hidden"
              style={{ background: `linear-gradient(160deg, ${theme?.accent ?? "#fce7f3"}, ${theme?.primary ?? "#db2777"}15)` }}
            >
              {/* Decorative circles */}
              <div className="absolute top-10 left-10 w-20 h-20 rounded-full border-2 opacity-20" style={{ borderColor: theme?.primary ?? "#db2777" }} />
              <div className="absolute bottom-16 right-16 w-14 h-14 rounded-full border-2 opacity-15" style={{ borderColor: theme?.primary ?? "#db2777" }} />
              <div className="text-center">
                <Flower2 className="w-20 h-20 mx-auto mb-4" style={{ color: theme?.primary ?? "#db2777" }} />
                <p className="text-lg font-semibold opacity-70">Salon Experience</p>
                <p className="text-sm opacity-50 mt-1">Where beauty meets care</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
