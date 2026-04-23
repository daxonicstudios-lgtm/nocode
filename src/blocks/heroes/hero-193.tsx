import type { BlockProps } from "@/blocks/types";
import { Church, Heart, Clock, MapPin } from "lucide-react";

export default function Hero193(props: BlockProps) {
  const {
    theme,
    heading = "Welcome Home",
    subheading = "Grace Community Church",
    bodyText = "A place where faith meets family. Join us as we worship together, grow in God's Word, and serve our community with love and compassion.",
    buttonText = "Watch Latest Sermon",
    buttonUrl = "#",
    secondaryButtonText = "Plan Your Visit",
    secondaryButtonUrl = "#",
    items = [
      { title: "Sunday Morning", description: "9:00 AM", label: "Traditional Service" },
      { title: "Sunday Late", description: "11:00 AM", label: "Contemporary Service" },
      { title: "Wednesday", description: "7:00 PM", label: "Bible Study & Prayer" },
    ],
  } = props;

  return (
    <section
      className="min-h-screen flex items-center px-4 py-16 sm:px-8 lg:px-16"
      style={{
        backgroundColor: theme?.background ?? "#0f1a3c",
        color: theme?.foreground ?? "#f5f0e8",
      }}
    >
      <div className="w-full max-w-6xl mx-auto">
        <div className="text-center space-y-8">
          {/* Church icon & label */}
          <div className="flex items-center justify-center gap-3">
            <Church className="w-6 h-6" style={{ color: theme?.primary ?? "#d4a843" }} />
            <span
              className="text-sm tracking-widest uppercase font-medium"
              style={{ color: theme?.primary ?? "#d4a843" }}
            >
              {subheading}
            </span>
            <Heart className="w-5 h-5" style={{ color: theme?.primary ?? "#d4a843" }} />
          </div>

          {/* Main heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-serif font-light tracking-tight leading-tight">
            {heading}
          </h1>

          {/* Decorative divider */}
          <div className="flex items-center justify-center gap-4">
            <div
              className="h-px w-16 sm:w-24"
              style={{ backgroundColor: theme?.primary ?? "#d4a843" }}
            />
            <Church className="w-5 h-5" style={{ color: theme?.primary ?? "#d4a843" }} />
            <div
              className="h-px w-16 sm:w-24"
              style={{ backgroundColor: theme?.primary ?? "#d4a843" }}
            />
          </div>

          {/* Body text */}
          <p className="text-base sm:text-lg leading-relaxed opacity-80 max-w-2xl mx-auto">
            {bodyText}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={buttonUrl}
              className="inline-flex items-center gap-2 px-8 py-4 text-sm font-medium tracking-wider uppercase transition-opacity hover:opacity-90 rounded"
              style={{
                backgroundColor: theme?.primary ?? "#d4a843",
                color: theme?.background ?? "#0f1a3c",
              }}
            >
              {buttonText}
            </a>
            <a
              href={secondaryButtonUrl}
              className="inline-flex items-center gap-2 px-8 py-4 text-sm font-medium tracking-wider uppercase border-2 rounded transition-opacity hover:opacity-80"
              style={{
                borderColor: theme?.primary ?? "#d4a843",
                color: theme?.primary ?? "#d4a843",
              }}
            >
              <MapPin className="w-4 h-4" />
              {secondaryButtonText}
            </a>
          </div>

          {/* Service times */}
          <div className="pt-8">
            <p
              className="text-xs tracking-widest uppercase mb-6 font-medium"
              style={{ color: theme?.primary ?? "#d4a843" }}
            >
              Service Times
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
              {items.map((item, i) => (
                <div
                  key={i}
                  className="rounded-lg px-6 py-5 text-center"
                  style={{
                    backgroundColor: theme?.accent ?? "rgba(212, 168, 67, 0.1)",
                    border: `1px solid ${theme?.primary ?? "rgba(212, 168, 67, 0.2)"}`,
                  }}
                >
                  <Clock className="w-4 h-4 mx-auto mb-2 opacity-60" />
                  <p className="text-xl font-semibold">{item.description}</p>
                  <p className="text-sm opacity-70 mt-1">{item.title}</p>
                  <p className="text-xs opacity-50 mt-1">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
