import type { BlockProps } from "@/blocks/types";
import { ArrowRight, Phone, Clock, Stethoscope, Heart } from "lucide-react";

export default function Hero097(props: BlockProps) {
  const {
    theme,
    heading = "Compassionate Care for Your Beloved Pets",
    subheading = "From routine check-ups to emergency surgery, our experienced veterinary team treats every animal like family.",
    buttonText = "Book Visit",
    buttonUrl = "#",
    secondaryButtonText = "Our Services",
    secondaryButtonUrl = "#",
    imageUrl,
    items = [
      { title: "Dogs & Cats", icon: "heart" },
      { title: "Exotic Pets", icon: "heart" },
      { title: "Surgery & Dental", icon: "stethoscope" },
      { title: "Vaccinations", icon: "stethoscope" },
    ],
  } = props;

  return (
    <section
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
      className="min-h-[80vh] flex items-center px-5 py-16"
    >
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center gap-10 md:gap-16">
        {/* Text Side */}
        <div className="flex-1 text-center md:text-left">
          <div className="inline-flex items-center gap-2 mb-6">
            <Heart
              className="w-5 h-5 fill-current"
              style={{ color: theme?.primary || "#0ea5e9" }}
            />
            <span
              className="text-sm font-semibold tracking-wide"
              style={{ color: theme?.primary || "#0ea5e9" }}
            >
              Paws & Care Veterinary
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight">
            {heading}
          </h1>
          <p className="mt-5 text-base sm:text-lg opacity-70 leading-relaxed max-w-lg">
            {subheading}
          </p>

          <div className="grid grid-cols-2 gap-3 mt-8 max-w-sm mx-auto md:mx-0">
            {items.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2 text-sm px-3 py-2.5 rounded-lg"
                style={{ backgroundColor: theme?.primary ? `${theme.primary}0a` : "rgba(14,165,233,0.04)" }}
              >
                {item.icon === "stethoscope" ? (
                  <Stethoscope className="w-4 h-4 flex-shrink-0" style={{ color: theme?.primary || "#0ea5e9" }} />
                ) : (
                  <Heart className="w-4 h-4 flex-shrink-0" style={{ color: theme?.primary || "#0ea5e9" }} />
                )}
                <span className="opacity-75">{item.title}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 mt-8 justify-center md:justify-start">
            <a
              href={buttonUrl}
              style={{ backgroundColor: theme?.primary }}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg text-white font-medium bg-sky-500 hover:opacity-90 transition-opacity"
            >
              {buttonText}
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href={secondaryButtonUrl}
              style={{ borderColor: theme?.primary, color: theme?.primary }}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-medium border border-sky-500 text-sky-600 hover:opacity-80 transition-opacity"
            >
              {secondaryButtonText}
            </a>
          </div>
        </div>

        {/* Image Side */}
        <div className="flex-1 w-full">
          <div className="relative">
            <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-gradient-to-br from-sky-50 to-blue-50">
              {imageUrl ? (
                <img src={imageUrl} alt={heading} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center p-8">
                  <div className="text-center space-y-4">
                    <div
                      style={{ backgroundColor: theme?.primary }}
                      className="w-20 h-20 rounded-full bg-sky-500 mx-auto flex items-center justify-center"
                    >
                      <Stethoscope className="w-10 h-10 text-white" />
                    </div>
                    <p className="text-sm font-medium opacity-40">Pet with Veterinarian</p>
                  </div>
                </div>
              )}
            </div>

            {/* Emergency Badge */}
            <div
              className="absolute top-4 left-4 rounded-xl shadow-lg px-4 py-3 flex items-center gap-3"
              style={{
                backgroundColor: theme?.accent || "#ef4444",
                color: "#fff",
              }}
            >
              <Phone className="w-5 h-5" />
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide">Emergency</p>
                <p className="text-sm font-bold">24/7 Hotline</p>
              </div>
            </div>

            {/* Hours Badge */}
            <div
              className="absolute bottom-4 right-4 rounded-xl shadow-lg px-4 py-3 flex items-center gap-3"
              style={{
                backgroundColor: theme?.background || "#fff",
                color: theme?.foreground,
              }}
            >
              <Clock className="w-5 h-5" style={{ color: theme?.primary || "#0ea5e9" }} />
              <div>
                <p className="text-xs opacity-60">Open Today</p>
                <p className="text-sm font-semibold">8:00 AM – 8:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
