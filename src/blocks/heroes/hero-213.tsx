import type { BlockProps } from "@/blocks/types";
import { Home, MapPin, DollarSign, Key, ArrowRight } from "lucide-react";

export default function Hero213(props: BlockProps) {
  const {
    theme,
    heading = "Find Your Dream Property",
    subheading = "Premium Real Estate",
    bodyText = "From luxury condos to family homes, we connect buyers with exceptional properties. Our track record speaks through numbers.",
    buttonText = "Browse Listings",
    buttonUrl = "#",
    secondaryButtonText = "Get Valuation",
    secondaryButtonUrl = "#",
    items = [
      { title: "Properties Sold", value: "3847", icon: "home" },
      { title: "Happy Families", value: "2916", icon: "key" },
      { title: "Cities Covered", value: "64", icon: "map" },
      { title: "Total Value", value: "$2.1B", icon: "dollar" },
    ],
  } = props;

  const iconMap: Record<string, React.ReactNode> = {
    home: <Home className="w-5 h-5" />,
    key: <Key className="w-5 h-5" />,
    map: <MapPin className="w-5 h-5" />,
    dollar: <DollarSign className="w-5 h-5" />,
  };

  return (
    <section
      className="min-h-screen flex items-center px-4 py-16 sm:px-8 lg:px-16 relative overflow-hidden"
      style={{
        backgroundColor: theme?.background ?? "#faf9f6",
        color: theme?.foreground ?? "#1a1a1a",
      }}
    >
      <style>{`
        @keyframes hero213SlideUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes hero213DigitRoll {
          0% { transform: translateY(100%); opacity: 0; }
          30% { opacity: 1; }
          100% { transform: translateY(0); opacity: 1; }
        }
        .hero213-num-0 { animation: hero213DigitRoll 1s cubic-bezier(0.16, 1, 0.3, 1) 0.3s both; }
        .hero213-num-1 { animation: hero213DigitRoll 1s cubic-bezier(0.16, 1, 0.3, 1) 0.5s both; }
        .hero213-num-2 { animation: hero213DigitRoll 1s cubic-bezier(0.16, 1, 0.3, 1) 0.7s both; }
        .hero213-num-3 { animation: hero213DigitRoll 1s cubic-bezier(0.16, 1, 0.3, 1) 0.9s both; }
        .hero213-content { animation: hero213SlideUp 0.8s ease-out 0.2s both; }
      `}</style>

      {/* Accent bar */}
      <div
        className="absolute top-0 left-0 w-full h-1"
        style={{ backgroundColor: theme?.primary ?? "#b8860b" }}
      />

      <div className="w-full max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — Animated numbers */}
          <div className="space-y-8">
            <div
              className="text-xs font-bold tracking-[0.2em] uppercase"
              style={{ color: theme?.primary ?? "#b8860b" }}
            >
              Our Impact in Numbers
            </div>

            <div className="grid grid-cols-2 gap-6">
              {items.map((item, i) => (
                <div
                  key={i}
                  className={`hero213-num-${i} space-y-2`}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center mb-3"
                    style={{
                      backgroundColor: `${theme?.primary ?? "#b8860b"}15`,
                      color: theme?.primary ?? "#b8860b",
                    }}
                  >
                    {iconMap[item.icon as string] ?? <Home className="w-5 h-5" />}
                  </div>
                  <div
                    className="text-4xl sm:text-5xl font-black overflow-hidden"
                    style={{ color: theme?.primary ?? "#b8860b" }}
                  >
                    {item.value}
                  </div>
                  <p className="text-sm opacity-50 font-medium">{item.title}</p>
                  <div
                    className="w-12 h-0.5 rounded-full"
                    style={{ backgroundColor: `${theme?.primary ?? "#b8860b"}30` }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right — Content */}
          <div className="hero213-content space-y-8 lg:pl-8">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase"
              style={{
                backgroundColor: `${theme?.primary ?? "#b8860b"}12`,
                color: theme?.primary ?? "#b8860b",
                border: `1px solid ${theme?.primary ?? "#b8860b"}25`,
              }}
            >
              <Home className="w-3.5 h-3.5" />
              {subheading}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight">
              {heading}
            </h1>

            <p className="text-base sm:text-lg opacity-50 leading-relaxed max-w-lg">
              {bodyText}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href={buttonUrl}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold uppercase tracking-wider rounded-lg transition-transform hover:scale-105"
                style={{
                  backgroundColor: theme?.primary ?? "#b8860b",
                  color: "#fff",
                }}
              >
                {buttonText}
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href={secondaryButtonUrl}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold uppercase tracking-wider rounded-lg border-2 transition-opacity hover:opacity-80"
                style={{
                  borderColor: theme?.primary ?? "#b8860b",
                  color: theme?.primary ?? "#b8860b",
                }}
              >
                {secondaryButtonText}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
