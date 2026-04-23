import type { BlockProps } from "@/blocks/types";
import { Heart, Shield, Clock, Users, CalendarCheck } from "lucide-react";

export default function Hero053(props: BlockProps) {
  const {
    theme,
    heading = "Your Health, Our Priority",
    subheading = "Access world-class healthcare from the comfort of your home. Board-certified doctors available 24/7.",
    buttonText = "Book Appointment",
    buttonUrl = "#",
    secondaryButtonText = "Call Now",
    secondaryButtonUrl = "tel:+1234567890",
    imageUrl,
    items = [
      { icon: "shield", title: "Certified Doctors", description: "500+" },
      { icon: "clock", title: "Available", description: "24/7" },
      { icon: "users", title: "Patients Served", description: "1M+" },
    ],
  } = props;

  return (
    <section
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
      className="min-h-[80vh] flex items-center px-5 py-16"
    >
      <div className="max-w-6xl mx-auto w-full flex flex-col-reverse md:flex-row items-center gap-10 md:gap-14">
        {/* Image / Illustration Side (left on desktop) */}
        <div className="flex-1 w-full max-w-md md:max-w-none relative">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt="Healthcare professional"
              className="w-full aspect-[3/4] object-cover rounded-3xl"
            />
          ) : (
            <div
              className="w-full aspect-[3/4] rounded-3xl flex flex-col items-center justify-center gap-4"
              style={{ backgroundColor: theme?.primary ? `${theme.primary}11` : "#ecfdf5" }}
            >
              <Heart className="w-24 h-24 opacity-15" style={{ color: theme?.primary }} />
              <span className="text-sm opacity-30 font-medium">Doctor Illustration</span>
            </div>
          )}
          {/* Floating badge */}
          <div
            className="absolute top-6 right-6 p-3 rounded-xl shadow-lg flex items-center gap-2"
            style={{ backgroundColor: theme?.background || "#fff", color: theme?.foreground }}
          >
            <CalendarCheck className="w-5 h-5" style={{ color: theme?.primary }} />
            <div className="text-xs">
              <div className="font-bold">Next Available</div>
              <div className="opacity-60">Today, 2:30 PM</div>
            </div>
          </div>
        </div>

        {/* Text Side (right on desktop) */}
        <div className="flex-1 text-center md:text-left">
          <span
            className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-6"
            style={{ backgroundColor: theme?.primary ? `${theme.primary}22` : "#dcfce7", color: theme?.primary }}
          >
            Trusted Healthcare
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight">
            {heading}
          </h1>
          <p className="mt-5 text-lg opacity-70 leading-relaxed max-w-lg">
            {subheading}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
            <a
              href={buttonUrl}
              style={{ backgroundColor: theme?.primary }}
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-white font-medium bg-green-600 hover:opacity-90 transition-opacity"
            >
              <CalendarCheck className="w-4 h-4" />
              {buttonText}
            </a>
            <a
              href={secondaryButtonUrl}
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-medium border border-current opacity-70 hover:opacity-100 transition-opacity"
            >
              {secondaryButtonText}
            </a>
          </div>

          {/* Trust badges */}
          <div className="mt-10 grid grid-cols-3 gap-4">
            {items.slice(0, 3).map((item, i) => {
              const icons = [Shield, Clock, Users];
              const Icon = icons[i] || Shield;
              return (
                <div
                  key={i}
                  className="flex flex-col items-center md:items-start gap-1 p-3 rounded-xl"
                  style={{ backgroundColor: theme?.accent ? `${theme.accent}11` : "#f9fafb" }}
                >
                  <Icon className="w-5 h-5 mb-1" style={{ color: theme?.primary }} />
                  <span className="text-xl font-bold">{item.description}</span>
                  <span className="text-xs opacity-60">{item.title}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
