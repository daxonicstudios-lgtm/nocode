import type { BlockProps } from "@/blocks/types";
import { ArrowRight, MapPin, Calendar, Clock } from "lucide-react";

export default function Hero091(props: BlockProps) {
  const {
    theme,
    heading = "Africa Tech Summit 2026",
    subheading = "Join 5,000+ innovators, founders, and investors shaping the future of technology across the continent.",
    bodyText = "June 14–16, 2026",
    buttonText = "Register Now",
    buttonUrl = "#",
    secondaryButtonText = "View Speakers",
    secondaryButtonUrl = "#",
    imageUrl,
    items = [
      { title: "Kigali Convention Centre", icon: "location" },
      { title: "3-Day Event", icon: "clock" },
      { title: "100+ Speakers", icon: "calendar" },
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
          <div
            style={{ backgroundColor: theme?.primary ? `${theme.primary}18` : undefined, color: theme?.primary }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-blue-50 text-blue-600 mb-6"
          >
            <Calendar className="w-4 h-4" />
            {bodyText}
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight">
            {heading}
          </h1>
          <p className="mt-5 text-base sm:text-lg opacity-70 leading-relaxed max-w-lg">
            {subheading}
          </p>

          <div className="flex flex-wrap gap-4 mt-6 justify-center md:justify-start">
            {items.map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-sm opacity-60">
                {item.icon === "location" && <MapPin className="w-4 h-4" />}
                {item.icon === "clock" && <Clock className="w-4 h-4" />}
                {item.icon === "calendar" && <Calendar className="w-4 h-4" />}
                <span>{item.title}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 mt-8 justify-center md:justify-start">
            <a
              href={buttonUrl}
              style={{ backgroundColor: theme?.primary }}
              className="inline-flex items-center gap-2 px-7 py-3 rounded-lg text-white font-medium bg-blue-600 hover:opacity-90 transition-opacity"
            >
              {buttonText}
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href={secondaryButtonUrl}
              style={{ borderColor: theme?.primary, color: theme?.primary }}
              className="inline-flex items-center gap-2 px-7 py-3 rounded-lg font-medium border-2 border-blue-600 text-blue-600 hover:opacity-80 transition-opacity"
            >
              {secondaryButtonText}
            </a>
          </div>
        </div>

        {/* Image Side */}
        <div className="flex-1 w-full">
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-gradient-to-br from-blue-100 to-purple-100">
            {imageUrl ? (
              <img src={imageUrl} alt={heading} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center space-y-3 p-8">
                  <div
                    style={{ backgroundColor: theme?.primary }}
                    className="w-16 h-16 rounded-xl bg-blue-600 mx-auto flex items-center justify-center"
                  >
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-sm font-medium opacity-50">Event Venue</p>
                </div>
              </div>
            )}
            {/* Date Badge */}
            <div
              style={{ backgroundColor: theme?.accent || theme?.primary }}
              className="absolute top-4 right-4 bg-orange-500 text-white px-4 py-2 rounded-lg text-sm font-bold shadow-lg"
            >
              JUN 14–16
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
