import type { BlockProps } from "@/blocks/types";
import { Users, Heart, Music, HandHeart, ArrowRight } from "lucide-react";

export default function Hero195(props: BlockProps) {
  const {
    theme,
    heading = "A Place to Belong",
    subheading = "New Hope Community Church",
    bodyText = "Whether you are new to faith or have been walking with God for years, there is a place for you here. Come as you are and find your community.",
    buttonText = "Get Connected",
    buttonUrl = "#",
    items = [
      { title: "Youth Ministry", description: "Empowering the next generation to live boldly for Christ.", icon: "users" },
      { title: "Worship", description: "Lifting our voices together in praise and adoration.", icon: "music" },
      { title: "Outreach", description: "Serving our neighbors and sharing God's love in action.", icon: "heart" },
    ],
  } = props;

  const iconMap: Record<string, React.ReactNode> = {
    users: <Users className="w-6 h-6" />,
    music: <Music className="w-6 h-6" />,
    heart: <HandHeart className="w-6 h-6" />,
  };

  return (
    <section
      className="min-h-screen flex items-center px-4 py-16 sm:px-8 lg:px-16"
      style={{
        backgroundColor: theme?.background ?? "#faf7f2",
        color: theme?.foreground ?? "#3d3426",
      }}
    >
      <div className="w-full max-w-6xl mx-auto">
        <div className="text-center space-y-6 mb-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
            style={{
              backgroundColor: theme?.accent ?? "#f0e6d3",
              color: theme?.primary ?? "#b8860b",
            }}
          >
            <Heart className="w-4 h-4" />
            <span>{subheading}</span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
            {heading}
          </h1>

          {/* Body */}
          <p className="text-base sm:text-lg leading-relaxed opacity-70 max-w-2xl mx-auto">
            {bodyText}
          </p>

          {/* CTA */}
          <a
            href={buttonUrl}
            className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold tracking-wider uppercase rounded-full transition-transform hover:scale-105"
            style={{
              backgroundColor: theme?.primary ?? "#b8860b",
              color: "#ffffff",
            }}
          >
            {buttonText}
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Ministries grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <div
              key={i}
              className="rounded-2xl p-8 text-center space-y-4 transition-transform hover:-translate-y-1"
              style={{
                backgroundColor: theme?.accent ?? "#ffffff",
                boxShadow: "0 2px 20px rgba(0,0,0,0.06)",
              }}
            >
              <div
                className="w-14 h-14 rounded-full mx-auto flex items-center justify-center"
                style={{
                  backgroundColor: theme?.primary ?? "#b8860b",
                  color: "#ffffff",
                }}
              >
                {iconMap[item.icon ?? "heart"] ?? <Heart className="w-6 h-6" />}
              </div>
              <h3 className="text-lg font-bold">{item.title}</h3>
              <p className="text-sm opacity-60 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Welcoming message */}
        <div className="mt-16 text-center">
          <div className="flex items-center justify-center gap-3 opacity-50 text-sm">
            <Users className="w-4 h-4" />
            <span>Everyone is welcome here — come as you are</span>
            <Heart className="w-4 h-4" />
          </div>
        </div>
      </div>
    </section>
  );
}
