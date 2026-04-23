import type { BlockProps } from "@/blocks/types";
import { ArrowRight, Sparkles, Crown } from "lucide-react";

const magneticStyles = `
@keyframes shimmer {
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
}
`;

export default function Hero231(props: BlockProps) {
  const {
    theme,
    heading = "Timeless Elegance, Redefined",
    subheading = "Luxury Maison",
    bodyText = "Discover a curated collection where artistry meets precision. Each piece tells a story of heritage, craftsmanship, and modern sophistication.",
    buttonText = "Explore Collection",
    buttonUrl = "#",
    secondaryButtonText = "Book Appointment",
    secondaryButtonUrl = "#",
    items = [
      { title: "Handcrafted", description: "Every detail perfected by master artisans" },
      { title: "Exclusive", description: "Limited editions for the discerning collector" },
      { title: "Timeless", description: "Designs that transcend seasons and trends" },
    ],
  } = props;

  return (
    <section
      style={{
        backgroundColor: theme?.background ?? "#0c0a09",
        color: theme?.foreground ?? "#faf7f2",
      }}
      className="min-h-screen flex items-center px-4 py-20 overflow-hidden"
    >
      <style>{magneticStyles}</style>
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Crown className="w-5 h-5" style={{ color: theme?.accent ?? "#c9a96e" }} />
              <span
                className="text-xs tracking-[0.3em] uppercase font-medium"
                style={{ color: theme?.accent ?? "#c9a96e" }}
              >
                {subheading}
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light leading-tight mb-6 tracking-tight">
              {heading}
            </h1>
            <p className="text-base sm:text-lg opacity-60 mb-10 max-w-md leading-relaxed font-light">
              {bodyText}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={buttonUrl}
                className="group relative inline-flex items-center justify-center gap-3 px-10 py-4 text-sm font-medium tracking-wider uppercase transition-all duration-500 ease-out hover:scale-105 hover:shadow-2xl"
                style={{
                  backgroundColor: theme?.primary ?? "#c9a96e",
                  color: theme?.background ?? "#0c0a09",
                  boxShadow: "0 4px 20px rgba(201, 169, 110, 0.0)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 12px 40px ${theme?.primary ?? "#c9a96e"}55`;
                  e.currentTarget.style.transform = "scale(1.05) translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "0 4px 20px rgba(201, 169, 110, 0.0)";
                  e.currentTarget.style.transform = "scale(1) translateY(0)";
                }}
              >
                {buttonText}
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href={secondaryButtonUrl}
                className="group inline-flex items-center justify-center gap-3 px-10 py-4 text-sm font-medium tracking-wider uppercase border transition-all duration-500 ease-out hover:scale-105"
                style={{
                  borderColor: theme?.accent ?? "#c9a96e",
                  color: theme?.accent ?? "#c9a96e",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = theme?.accent ?? "#c9a96e";
                  e.currentTarget.style.color = theme?.background ?? "#0c0a09";
                  e.currentTarget.style.boxShadow = `0 8px 30px ${theme?.accent ?? "#c9a96e"}44`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.color = theme?.accent ?? "#c9a96e";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {secondaryButtonText}
              </a>
            </div>
          </div>
          <div className="grid gap-6">
            {items.map((item, i) => (
              <div
                key={i}
                className="group p-6 border transition-all duration-500 ease-out cursor-default hover:scale-[1.02] hover:-translate-y-1"
                style={{
                  borderColor: `${theme?.accent ?? "#c9a96e"}22`,
                  backgroundColor: `${theme?.foreground ?? "#faf7f2"}05`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = `${theme?.accent ?? "#c9a96e"}66`;
                  e.currentTarget.style.boxShadow = `0 10px 40px ${theme?.accent ?? "#c9a96e"}15`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = `${theme?.accent ?? "#c9a96e"}22`;
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div className="flex items-start gap-4">
                  <Sparkles
                    className="w-5 h-5 mt-1 shrink-0 transition-transform duration-500 group-hover:rotate-12"
                    style={{ color: theme?.accent ?? "#c9a96e" }}
                  />
                  <div>
                    <h3 className="text-lg font-medium mb-1 tracking-wide">{item.title}</h3>
                    <p className="text-sm opacity-50 font-light">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
