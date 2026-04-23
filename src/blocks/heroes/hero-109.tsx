import type { BlockProps } from "@/blocks/types";
import { ArrowRight, Leaf, Heart, Sun } from "lucide-react";

export default function Hero109(props: BlockProps) {
  const {
    theme,
    heading = "Restore Your Inner Balance",
    subheading = "A sanctuary for mind, body, and soul",
    bodyText = "Escape the noise of everyday life and rediscover tranquility. Our holistic wellness programs are designed to nurture you from the inside out.",
    buttonText = "Book a Session",
    buttonUrl = "#",
    secondaryButtonText = "Explore Treatments",
    secondaryButtonUrl = "#",
    items = [
      { icon: "leaf", title: "Natural Therapies" },
      { icon: "heart", title: "Mindful Healing" },
      { icon: "sun", title: "Guided Retreats" },
    ],
  } = props;

  const primaryColor = theme?.primary ?? "#a3896b";
  const accentColor = theme?.accent ?? "#d4c5b0";
  const bgColor = theme?.background ?? "#faf8f5";
  const fgColor = theme?.foreground ?? "#2d2a26";

  const iconMap: Record<string, React.ReactNode> = {
    leaf: <Leaf className="w-5 h-5" />,
    heart: <Heart className="w-5 h-5" />,
    sun: <Sun className="w-5 h-5" />,
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: bgColor, color: fgColor }}
    >
      {/* Soft gradient background */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            background: `
              radial-gradient(ellipse at 30% 20%, ${primaryColor}15 0%, transparent 50%),
              radial-gradient(ellipse at 70% 80%, ${accentColor}20 0%, transparent 50%),
              radial-gradient(ellipse at 50% 50%, ${primaryColor}08 0%, transparent 70%)
            `,
          }}
        />
      </div>

      {/* Decorative circles */}
      <div
        className="absolute top-10 right-10 w-64 h-64 rounded-full opacity-[0.06]"
        style={{ border: `2px solid ${primaryColor}` }}
      />
      <div
        className="absolute bottom-20 left-10 w-40 h-40 rounded-full opacity-[0.04]"
        style={{ border: `2px solid ${accentColor}` }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Leaf icon */}
        <div className="mb-8 flex justify-center">
          <div
            className="w-14 h-14 rounded-full flex items-center justify-center"
            style={{
              backgroundColor: `${primaryColor}15`,
              color: primaryColor,
            }}
          >
            <Leaf className="w-6 h-6" />
          </div>
        </div>

        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight leading-tight mb-6"
          style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
        >
          {heading}
        </h1>

        <p className="text-lg sm:text-xl font-light mb-4 opacity-60">
          {subheading}
        </p>

        <p className="text-base max-w-lg mx-auto mb-10 opacity-40 leading-relaxed">
          {bodyText}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href={buttonUrl}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-medium transition-all hover:scale-105"
            style={{
              backgroundColor: primaryColor,
              color: bgColor,
            }}
          >
            {buttonText}
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href={secondaryButtonUrl}
            className="px-8 py-4 rounded-full text-base font-medium border transition-colors hover:opacity-80"
            style={{
              borderColor: `${primaryColor}44`,
              color: primaryColor,
            }}
          >
            {secondaryButtonText}
          </a>
        </div>

        {/* Services */}
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{
                  backgroundColor: `${primaryColor}10`,
                  color: primaryColor,
                }}
              >
                {iconMap[item.icon ?? "leaf"] ?? <Leaf className="w-5 h-5" />}
              </div>
              <span className="text-sm font-medium opacity-60">{item.title}</span>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="mt-16 flex items-center justify-center gap-4 opacity-20">
          <div className="w-12 h-px" style={{ backgroundColor: primaryColor }} />
          <Leaf className="w-3 h-3" style={{ color: primaryColor }} />
          <div className="w-12 h-px" style={{ backgroundColor: primaryColor }} />
        </div>
      </div>
    </section>
  );
}
