import type { BlockProps } from "@/blocks/types";
import { Globe, Heart, MapPin, ArrowRight, TrendingUp } from "lucide-react";

export default function Hero198(props: BlockProps) {
  const {
    theme,
    heading = "Making a Difference Worldwide",
    subheading = "Global Missions & Outreach",
    bodyText = "From our local neighborhoods to the farthest corners of the earth, we are called to serve. Together we are bringing hope, healing, and the love of Christ to communities in need.",
    buttonText = "Support a Mission",
    buttonUrl = "#",
    secondaryButtonText = "Get Involved",
    secondaryButtonUrl = "#",
    items = [
      { title: "12", description: "Countries Served", icon: "globe" },
      { title: "45K+", description: "Lives Impacted", icon: "heart" },
      { title: "85", description: "Active Missionaries", icon: "map" },
      { title: "200+", description: "Partner Churches", icon: "trending" },
    ],
  } = props;

  return (
    <section
      className="min-h-screen flex items-center px-4 py-16 sm:px-8 lg:px-16 relative overflow-hidden"
      style={{
        backgroundColor: theme?.background ?? "#0c2233",
        color: theme?.foreground ?? "#e8f4f8",
      }}
    >
      {/* Subtle globe pattern background */}
      <div className="absolute inset-0 opacity-5 flex items-center justify-center">
        <Globe className="w-[600px] h-[600px]" />
      </div>

      {/* Gradient overlay */}
      <div
        className="absolute bottom-0 left-0 right-0 h-1/2 opacity-30"
        style={{
          background: `linear-gradient(to top, ${theme?.primary ?? "#0e7c6b"}, transparent)`,
        }}
      />

      <div className="w-full max-w-6xl mx-auto relative z-10">
        <div className="text-center space-y-8 mb-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 text-sm tracking-widest uppercase font-semibold"
            style={{ color: theme?.primary ?? "#22d3a7" }}
          >
            <Globe className="w-5 h-5" />
            {subheading}
          </div>

          {/* Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight max-w-4xl mx-auto">
            {heading}
          </h1>

          {/* Body */}
          <p className="text-base sm:text-lg leading-relaxed opacity-70 max-w-2xl mx-auto">
            {bodyText}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href={buttonUrl}
              className="inline-flex items-center gap-2 px-8 py-4 text-sm font-bold tracking-wider uppercase rounded-lg transition-transform hover:scale-105"
              style={{
                backgroundColor: theme?.primary ?? "#22d3a7",
                color: theme?.background ?? "#0c2233",
              }}
            >
              <Heart className="w-4 h-4" />
              {buttonText}
            </a>
            <a
              href={secondaryButtonUrl}
              className="inline-flex items-center gap-2 px-8 py-4 text-sm font-bold tracking-wider uppercase border-2 rounded-lg transition-opacity hover:opacity-80"
              style={{
                borderColor: theme?.primary ?? "#22d3a7",
                color: theme?.primary ?? "#22d3a7",
              }}
            >
              {secondaryButtonText}
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Mission stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          {items.map((item, i) => {
            const icons: Record<string, React.ReactNode> = {
              globe: <Globe className="w-6 h-6" />,
              heart: <Heart className="w-6 h-6" />,
              map: <MapPin className="w-6 h-6" />,
              trending: <TrendingUp className="w-6 h-6" />,
            };
            return (
              <div
                key={i}
                className="rounded-xl p-6 text-center space-y-3"
                style={{
                  backgroundColor: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <div
                  className="w-12 h-12 rounded-full mx-auto flex items-center justify-center"
                  style={{
                    backgroundColor: `${theme?.primary ?? "#22d3a7"}20`,
                    color: theme?.primary ?? "#22d3a7",
                  }}
                >
                  {icons[item.icon ?? "heart"] ?? <Heart className="w-6 h-6" />}
                </div>
                <p className="text-3xl sm:text-4xl font-black">{item.title}</p>
                <p className="text-xs sm:text-sm opacity-50 uppercase tracking-wider">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
