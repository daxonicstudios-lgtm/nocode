import type { BlockProps } from "@/blocks/types";
import { Stethoscope, Clock, Phone, ShieldCheck, CalendarCheck, ArrowRight } from "lucide-react";

export default function Hero069(props: BlockProps) {
  const {
    theme,
    heading = "Your Health, Our Priority",
    subheading = "Compassionate Medical Care",
    bodyText = "Experience healthcare the way it should be. Our team of board-certified physicians provides comprehensive, patient-centered care with the latest medical technology.",
    buttonText = "Book Appointment",
    buttonUrl = "#",
    secondaryButtonText = "Call Us",
    secondaryButtonUrl = "tel:+1234567890",
    imageUrl,
    items = [
      { icon: "shield", label: "Board Certified", value: "25+ Doctors" },
      { icon: "clock", label: "Available", value: "24/7 Care" },
      { icon: "calendar", label: "Wait Time", value: "Under 15 Min" },
    ],
  } = props;

  const tealColor = theme?.primary ?? "#0d9488";
  const blueAccent = theme?.accent ?? "#0ea5e9";

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#f0fdf9", color: theme?.foreground ?? "#134e4a" }}
      className="min-h-[80vh] flex items-center"
    >
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center">
        {/* Text Left */}
        <div className="w-full md:w-1/2 px-6 py-12 md:px-14 lg:px-20">
          <div className="flex items-center gap-2 mb-5">
            <Stethoscope className="w-5 h-5" style={{ color: tealColor }} />
            <span
              className="text-sm font-semibold uppercase tracking-widest"
              style={{ color: tealColor }}
            >
              {subheading}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            {heading}
          </h1>

          <p className="mt-5 text-base opacity-65 leading-relaxed max-w-md">
            {bodyText}
          </p>

          {/* Feature cards */}
          <div className="mt-8 grid grid-cols-3 gap-3">
            {items.slice(0, 3).map((item, i) => (
              <div
                key={i}
                className="p-3 rounded-lg text-center"
                style={{ backgroundColor: `${tealColor}10` }}
              >
                <div className="flex justify-center mb-2">
                  {i === 0 && <ShieldCheck className="w-5 h-5" style={{ color: tealColor }} />}
                  {i === 1 && <Clock className="w-5 h-5" style={{ color: tealColor }} />}
                  {i === 2 && <CalendarCheck className="w-5 h-5" style={{ color: tealColor }} />}
                </div>
                <p className="text-sm font-bold">{item.value}</p>
                <p className="text-xs opacity-50 mt-0.5">{item.label}</p>
              </div>
            ))}
          </div>

          {/* Appointment hint */}
          <div
            className="mt-6 p-4 rounded-lg flex items-start gap-3"
            style={{ backgroundColor: `${blueAccent}08`, border: `1px solid ${blueAccent}20` }}
          >
            <CalendarCheck className="w-5 h-5 mt-0.5 shrink-0" style={{ color: blueAccent }} />
            <div>
              <p className="text-sm font-medium">Quick Online Booking</p>
              <p className="text-xs opacity-50 mt-0.5">Select your doctor, pick a time, and confirm in under 2 minutes.</p>
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href={buttonUrl}
              className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-lg text-white font-semibold hover:opacity-90 transition-opacity"
              style={{ backgroundColor: tealColor }}
            >
              {buttonText}
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href={secondaryButtonUrl}
              className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-lg font-semibold border hover:opacity-80 transition-opacity"
              style={{ borderColor: `${tealColor}40`, color: tealColor }}
            >
              <Phone className="w-4 h-4" />
              {secondaryButtonText}
            </a>
          </div>
        </div>

        {/* Image Right */}
        <div className="w-full md:w-1/2 relative">
          {imageUrl ? (
            <img src={imageUrl} alt="Medical clinic" className="w-full h-[50vh] md:h-[80vh] object-cover rounded-l-2xl md:rounded-l-none" />
          ) : (
            <div
              className="w-full h-[50vh] md:h-[80vh] flex items-center justify-center"
              style={{
                background: `linear-gradient(160deg, ${tealColor}15, ${blueAccent}10)`,
              }}
            >
              <Stethoscope className="w-24 h-24 opacity-15" style={{ color: tealColor }} />
            </div>
          )}
          {/* Emergency badge */}
          <div
            className="absolute top-6 right-6 px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2"
            style={{ backgroundColor: tealColor, color: "#ffffff" }}
          >
            <Phone className="w-3.5 h-3.5" />
            Emergency: 24/7
          </div>
        </div>
      </div>
    </section>
  );
}
