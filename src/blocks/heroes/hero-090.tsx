import type { BlockProps } from "@/blocks/types";
import { Church, Calendar, Clock, MapPin, ArrowRight, Heart } from "lucide-react";

export default function Hero090(props: BlockProps) {
  const {
    theme,
    heading = "A Place of Faith, Hope, and Community",
    subheading = "Join our welcoming congregation for worship, fellowship, and spiritual growth. Everyone is welcome here — come as you are.",
    buttonText = "Join Us Sunday",
    buttonUrl = "#",
    secondaryButtonText = "Watch Online",
    secondaryButtonUrl = "#",
    imageUrl,
    items = [
      { title: "Community Outreach Day", description: "April 27, 2026 at 10:00 AM", label: "This Weekend" },
      { title: "Youth Conference 2026", description: "May 15-17, 2026", label: "Coming Soon" },
    ],
  } = props;

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#fffbeb", color: theme?.foreground ?? "#1c1917" }}
      className="min-h-[80vh] flex items-center px-5 py-16"
    >
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row-reverse items-center gap-10 md:gap-16">
        {/* Text side (right on desktop) */}
        <div className="flex-1 w-full">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full text-sm font-medium"
            style={{ backgroundColor: theme?.accent ?? "#fef3c7", color: theme?.primary ?? "#92400e" }}
          >
            <Heart className="w-4 h-4" />
            <span>Welcome Home</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            {heading}
          </h1>
          <p className="mt-5 text-base sm:text-lg opacity-60 leading-relaxed max-w-lg">
            {subheading}
          </p>

          {/* Service times */}
          <div className="mt-6 space-y-2 text-sm">
            <div className="flex items-center gap-2 opacity-60">
              <Clock className="w-4 h-4 flex-shrink-0" style={{ color: theme?.primary ?? "#92400e" }} />
              <span>Sunday Services: 8:00 AM, 10:30 AM, and 5:00 PM</span>
            </div>
            <div className="flex items-center gap-2 opacity-60">
              <MapPin className="w-4 h-4 flex-shrink-0" style={{ color: theme?.primary ?? "#92400e" }} />
              <span>12 Grace Avenue, Victoria Island, Lagos</span>
            </div>
          </div>

          {/* Upcoming events */}
          <div className="mt-8">
            <p className="text-xs uppercase tracking-wider opacity-40 font-medium mb-3">Upcoming Events</p>
            <div className="space-y-3">
              {items.map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-white/70 border border-amber-200/50">
                  <Calendar className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: theme?.primary ?? "#92400e" }} />
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <p className="font-medium text-sm">{item.title}</p>
                      {item.label && (
                        <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded-full"
                          style={{ backgroundColor: theme?.primary ?? "#92400e", color: "white" }}
                        >
                          {item.label}
                        </span>
                      )}
                    </div>
                    <p className="text-xs opacity-50 mt-0.5">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={buttonUrl}
              style={{ backgroundColor: theme?.primary ?? "#92400e" }}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white font-semibold hover:opacity-90 transition-opacity"
            >
              {buttonText}
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href={secondaryButtonUrl}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border font-medium hover:opacity-80 transition-opacity"
              style={{ borderColor: theme?.primary ?? "#92400e", color: theme?.primary ?? "#92400e" }}
            >
              {secondaryButtonText}
            </a>
          </div>
        </div>

        {/* Image side (left on desktop) */}
        <div className="flex-1 w-full">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt="Church building"
              className="w-full h-[400px] sm:h-[500px] md:h-[550px] object-cover rounded-3xl"
            />
          ) : (
            <div
              className="w-full h-[400px] sm:h-[500px] md:h-[550px] rounded-3xl flex items-center justify-center relative overflow-hidden"
              style={{ background: `linear-gradient(180deg, ${theme?.accent ?? "#fef3c7"}, ${theme?.primary ?? "#92400e"}15)` }}
            >
              {/* Stained glass inspired arches */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-64 rounded-t-full border-2 opacity-10"
                style={{ borderColor: theme?.primary ?? "#92400e" }}
              />
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-32 h-56 rounded-t-full border-2 opacity-10"
                style={{ borderColor: theme?.primary ?? "#92400e" }}
              />
              <div className="text-center relative z-10">
                <Church className="w-20 h-20 mx-auto mb-4" style={{ color: theme?.primary ?? "#92400e" }} />
                <p className="text-lg font-bold opacity-70">Grace Community Church</p>
                <p className="text-sm opacity-50 mt-1">A place for everyone</p>
                <div className="mt-4 flex items-center justify-center gap-2 text-xs opacity-40">
                  <span>Est. 1995</span>
                  <span>|</span>
                  <span>2,000+ members</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
