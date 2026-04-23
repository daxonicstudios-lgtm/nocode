import type { BlockProps } from "@/blocks/types";
import { ArrowRight, Shield, Heart, Users, CheckCircle } from "lucide-react";

export default function Hero093(props: BlockProps) {
  const {
    theme,
    heading = "Protect What Matters Most",
    subheading = "Comprehensive insurance plans designed to safeguard your family, your home, and your future — with claims settled in under 48 hours.",
    buttonText = "Get a Quote",
    buttonUrl = "#",
    secondaryButtonText = "Compare Plans",
    secondaryButtonUrl = "#",
    imageUrl,
    items = [
      { title: "Trusted by 250K+ Families", icon: "users" },
      { title: "A+ Financial Rating", icon: "shield" },
      { title: "24/7 Claims Support", icon: "heart" },
    ],
  } = props;

  const iconMap: Record<string, React.ReactNode> = {
    users: <Users className="w-5 h-5" />,
    shield: <Shield className="w-5 h-5" />,
    heart: <Heart className="w-5 h-5" />,
  };

  return (
    <section
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
      className="min-h-[80vh] flex items-center px-5 py-16"
    >
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center gap-10 md:gap-16">
        {/* Text Side */}
        <div className="flex-1 text-center md:text-left">
          <div className="flex items-center gap-2 justify-center md:justify-start mb-6">
            <Shield
              className="w-5 h-5"
              style={{ color: theme?.primary }}
            />
            <span
              className="text-sm font-semibold tracking-wide uppercase"
              style={{ color: theme?.primary }}
            >
              Insurance You Can Trust
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight">
            {heading}
          </h1>
          <p className="mt-5 text-base sm:text-lg opacity-70 leading-relaxed max-w-lg">
            {subheading}
          </p>

          <div className="flex flex-wrap gap-4 mt-8 justify-center md:justify-start">
            <a
              href={buttonUrl}
              style={{ backgroundColor: theme?.primary }}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg text-white font-medium bg-emerald-600 hover:opacity-90 transition-opacity"
            >
              {buttonText}
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href={secondaryButtonUrl}
              style={{ color: theme?.primary }}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-medium text-emerald-600 hover:opacity-80 transition-opacity"
            >
              {secondaryButtonText}
            </a>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap gap-6 mt-10 justify-center md:justify-start">
            {items.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2 text-sm"
              >
                <span style={{ color: theme?.primary }} className="text-emerald-600">
                  {iconMap[item.icon || "shield"]}
                </span>
                <span className="opacity-70 font-medium">{item.title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Image Side */}
        <div className="flex-1 w-full">
          <div className="relative">
            <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-gradient-to-br from-emerald-50 to-teal-50">
              {imageUrl ? (
                <img src={imageUrl} alt={heading} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center p-8">
                  <div className="text-center space-y-4">
                    <div className="flex justify-center gap-3">
                      <div
                        style={{ backgroundColor: theme?.primary }}
                        className="w-12 h-12 rounded-full bg-emerald-600 flex items-center justify-center"
                      >
                        <Users className="w-6 h-6 text-white" />
                      </div>
                      <div
                        style={{ backgroundColor: theme?.accent }}
                        className="w-12 h-12 rounded-full bg-teal-500 flex items-center justify-center"
                      >
                        <Heart className="w-6 h-6 text-white" />
                      </div>
                      <div
                        style={{ backgroundColor: theme?.primary }}
                        className="w-12 h-12 rounded-full bg-emerald-600 flex items-center justify-center"
                      >
                        <Shield className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <p className="text-sm font-medium opacity-40">Family Protection</p>
                  </div>
                </div>
              )}
            </div>

            {/* Floating Badge */}
            <div
              style={{ backgroundColor: theme?.background || "#fff", color: theme?.foreground }}
              className="absolute -bottom-4 left-4 right-4 md:left-6 md:right-6 bg-white rounded-xl shadow-lg p-4 flex items-center gap-3"
            >
              <CheckCircle
                className="w-8 h-8 flex-shrink-0"
                style={{ color: theme?.primary }}
              />
              <div>
                <p className="font-semibold text-sm">Claims Settled Fast</p>
                <p className="text-xs opacity-60">Average processing time: 48 hours</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
