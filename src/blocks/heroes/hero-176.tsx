import type { BlockProps } from "@/blocks/types";
import { Building, Users, Flower2, UtensilsCrossed, Music, Star } from "lucide-react";

export default function Hero176(props: BlockProps) {
  const {
    theme,
    heading = "The Rosewood Estate",
    subheading = "Where Dream Weddings Come to Life",
    bodyText = "An award-winning wedding venue nestled in 20 acres of manicured gardens. Our dedicated team ensures every detail of your celebration is flawless.",
    buttonText = "Book a Tour",
    buttonUrl = "#book-tour",
    secondaryButtonText = "Check Availability",
    secondaryButtonUrl = "#availability",
    items = [
      { title: "Seated Capacity", value: "350", icon: "users" },
      { title: "Garden Ceremony", value: "Included", icon: "flower" },
      { title: "In-House Catering", value: "5-Star", icon: "catering" },
      { title: "Live Entertainment", value: "Available", icon: "music" },
    ],
  } = props;

  const featureIcons: Record<string, React.ReactNode> = {
    users: <Users className="w-5 h-5" />,
    flower: <Flower2 className="w-5 h-5" />,
    catering: <UtensilsCrossed className="w-5 h-5" />,
    music: <Music className="w-5 h-5" />,
  };

  return (
    <section
      className="relative min-h-screen flex items-center px-4 py-16 sm:py-20 overflow-hidden"
      style={{
        backgroundColor: theme?.background ?? "#f8f5f1",
        color: theme?.foreground ?? "#2c2420",
      }}
    >
      <div className="relative z-10 w-full max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left — content */}
          <div>
            {/* Badge */}
            <div className="flex items-center gap-2 mb-6">
              <Building
                className="w-5 h-5"
                style={{ color: theme?.primary ?? "#8b6f4e" }}
              />
              <span
                className="text-xs tracking-[0.3em] uppercase font-medium"
                style={{ color: theme?.primary ?? "#8b6f4e" }}
              >
                Premier Wedding Venue
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light leading-tight mb-3">
              {heading}
            </h1>

            {/* Subheading */}
            <p
              className="text-base sm:text-lg font-light mb-6 opacity-70"
            >
              {subheading}
            </p>

            {/* Body */}
            <p className="text-sm sm:text-base leading-relaxed mb-8 opacity-75 font-light max-w-lg">
              {bodyText}
            </p>

            {/* Rating */}
            <div className="flex items-center gap-1 mb-8">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4"
                  style={{ color: theme?.accent ?? "#d4a373" }}
                  fill={theme?.accent ?? "#d4a373"}
                />
              ))}
              <span className="text-xs ml-2 opacity-60">4.9 / 5 &mdash; 240+ Weddings</span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={buttonUrl}
                className="inline-block px-8 py-3.5 text-sm tracking-widest uppercase font-medium transition-all duration-300 hover:opacity-90 text-center"
                style={{
                  backgroundColor: theme?.primary ?? "#8b6f4e",
                  color: theme?.background ?? "#f8f5f1",
                }}
              >
                {buttonText}
              </a>
              <a
                href={secondaryButtonUrl}
                className="inline-block px-8 py-3.5 text-sm tracking-widest uppercase font-medium border transition-all duration-300 hover:opacity-80 text-center"
                style={{
                  borderColor: theme?.primary ?? "#8b6f4e",
                  color: theme?.primary ?? "#8b6f4e",
                }}
              >
                {secondaryButtonText}
              </a>
            </div>
          </div>

          {/* Right — feature cards */}
          <div className="grid grid-cols-2 gap-4">
            {items.map((item, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center p-5 sm:p-6 rounded-lg border transition-all duration-300"
                style={{
                  borderColor: `${theme?.primary ?? "#8b6f4e"}22`,
                  backgroundColor: `${theme?.primary ?? "#8b6f4e"}08`,
                }}
              >
                <div
                  className="mb-3"
                  style={{ color: theme?.primary ?? "#8b6f4e" }}
                >
                  {featureIcons[item.icon ?? "users"] ?? <Users className="w-5 h-5" />}
                </div>
                <span
                  className="text-xl sm:text-2xl font-serif font-light mb-1"
                  style={{ color: theme?.primary ?? "#8b6f4e" }}
                >
                  {item.value ?? "—"}
                </span>
                <span className="text-xs tracking-widest uppercase opacity-60">
                  {item.title ?? "Feature"}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
