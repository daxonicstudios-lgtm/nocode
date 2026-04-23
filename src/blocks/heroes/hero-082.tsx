import type { BlockProps } from "@/blocks/types";
import { Leaf, ArrowRight, Sun, Droplets } from "lucide-react";

export default function Hero082(props: BlockProps) {
  const {
    theme,
    heading = "Growing the Future of Sustainable Farming",
    subheading = "Empowering smallholder farmers with modern techniques, quality seeds, and market access to boost yields and improve livelihoods.",
    buttonText = "Learn More",
    buttonUrl = "#",
    secondaryButtonText = "Our Programs",
    secondaryButtonUrl = "#",
    imageUrl,
    items = [
      { icon: "leaf", title: "5,000+", description: "Farmers supported" },
      { icon: "sun", title: "40%", description: "Yield increase" },
      { icon: "droplets", title: "120", description: "Communities reached" },
    ],
  } = props;

  const iconMap: Record<string, React.ReactNode> = {
    leaf: <Leaf className="w-5 h-5" />,
    sun: <Sun className="w-5 h-5" />,
    droplets: <Droplets className="w-5 h-5" />,
  };

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#f9fdf4", color: theme?.foreground }}
      className="min-h-[80vh] flex items-center px-5 py-16"
    >
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row-reverse items-center gap-10 md:gap-16">
        {/* Text side (right on desktop) */}
        <div className="flex-1 w-full">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full text-sm font-medium"
            style={{ backgroundColor: theme?.accent ?? "#ecfccb", color: theme?.primary ?? "#4d7c0f" }}
          >
            <Leaf className="w-4 h-4" />
            <span>Sustainable Agriculture</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            {heading}
          </h1>
          <p className="mt-5 text-base sm:text-lg opacity-70 leading-relaxed max-w-lg">
            {subheading}
          </p>

          {/* Stats row */}
          <div className="mt-8 grid grid-cols-3 gap-4">
            {items.map((item, i) => (
              <div key={i} className="text-center md:text-left">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full mb-2"
                  style={{ backgroundColor: theme?.accent ?? "#ecfccb", color: theme?.primary ?? "#4d7c0f" }}
                >
                  {iconMap[item.icon ?? "leaf"] ?? <Leaf className="w-5 h-5" />}
                </div>
                <p className="text-2xl font-bold" style={{ color: theme?.primary ?? "#4d7c0f" }}>{item.title}</p>
                <p className="text-xs opacity-60 mt-0.5">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={buttonUrl}
              style={{ backgroundColor: theme?.primary ?? "#4d7c0f" }}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white font-semibold hover:opacity-90 transition-opacity"
            >
              {buttonText}
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href={secondaryButtonUrl}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border font-medium hover:opacity-80 transition-opacity"
              style={{ borderColor: theme?.primary ?? "#4d7c0f", color: theme?.primary ?? "#4d7c0f" }}
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
              alt="Farm landscape"
              className="w-full h-[350px] sm:h-[450px] md:h-[500px] object-cover rounded-3xl"
            />
          ) : (
            <div
              className="w-full h-[350px] sm:h-[450px] md:h-[500px] rounded-3xl flex items-center justify-center relative overflow-hidden"
              style={{ backgroundColor: theme?.accent ?? "#ecfccb" }}
            >
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-green-800/20 to-transparent" />
              <div className="text-center z-10">
                <Leaf className="w-20 h-20 mx-auto mb-4" style={{ color: theme?.primary ?? "#4d7c0f" }} />
                <p className="text-lg font-medium opacity-70">Farm Landscape</p>
                <p className="text-sm opacity-50 mt-1">Cultivating growth and prosperity</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
