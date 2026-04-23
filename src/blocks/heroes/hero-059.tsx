import type { BlockProps } from "@/blocks/types";
import { Star, ArrowRight, Briefcase, MapPin, ExternalLink } from "lucide-react";

export default function Hero059(props: BlockProps) {
  const {
    theme,
    heading = "Hi, I'm Sarah — a Product Designer Who Ships",
    subheading = "I help startups and scale-ups design digital products that users love. 8+ years of experience across fintech, health, and e-commerce.",
    bodyText = "Lagos, Nigeria",
    buttonText = "Hire Me",
    buttonUrl = "#",
    secondaryButtonText = "View Portfolio",
    secondaryButtonUrl = "#",
    imageUrl,
    items = [
      { title: "50+", description: "Projects delivered" },
      { title: "30+", description: "Happy clients" },
      { title: "8+", description: "Years experience" },
    ],
  } = props;

  return (
    <section
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
      className="min-h-[80vh] flex items-center px-5 py-16"
    >
      <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center gap-10 md:gap-14">
        {/* Text Side */}
        <div className="flex-1 text-center md:text-left">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
            </span>
            <span className="text-sm font-medium opacity-70">Available for new projects</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-5xl font-bold tracking-tight leading-tight">
            {heading}
          </h1>
          <p className="mt-5 text-lg opacity-60 leading-relaxed max-w-lg">
            {subheading}
          </p>

          <div className="mt-4 inline-flex items-center gap-1.5 text-sm opacity-50">
            <MapPin className="w-3.5 h-3.5" />
            {bodyText}
          </div>

          {/* Social proof */}
          <div className="mt-6 flex items-center gap-6 justify-center md:justify-start">
            {items.slice(0, 3).map((item, i) => (
              <div key={i} className="text-center md:text-left">
                <div className="text-2xl font-bold" style={{ color: theme?.primary }}>
                  {item.title}
                </div>
                <div className="text-xs opacity-50">{item.description}</div>
              </div>
            ))}
          </div>

          {/* Review snippet */}
          <div
            className="mt-8 p-4 rounded-xl max-w-md mx-auto md:mx-0"
            style={{ backgroundColor: theme?.accent ? `${theme.accent}11` : "#f9fafb" }}
          >
            <div className="flex items-center gap-0.5 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-current" style={{ color: theme?.accent || "#eab308" }} />
              ))}
            </div>
            <p className="text-sm opacity-70 italic">
              &ldquo;Sarah transformed our product. User engagement went up 40% after the redesign.&rdquo;
            </p>
            <div className="mt-2 text-xs font-semibold opacity-50">
              — Alex M., CEO at Finova
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
            <a
              href={buttonUrl}
              style={{ backgroundColor: theme?.primary }}
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-white font-medium bg-black hover:opacity-90 transition-opacity"
            >
              <Briefcase className="w-4 h-4" />
              {buttonText}
            </a>
            <a
              href={secondaryButtonUrl}
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-medium border border-current opacity-70 hover:opacity-100 transition-opacity"
            >
              {secondaryButtonText}
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Headshot Side */}
        <div className="flex-1 flex justify-center">
          <div className="relative">
            {imageUrl ? (
              <img
                src={imageUrl}
                alt="Freelancer headshot"
                className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover"
              />
            ) : (
              <div
                className="w-64 h-64 md:w-80 md:h-80 rounded-full flex items-center justify-center"
                style={{ backgroundColor: theme?.primary ? `${theme.primary}18` : "#f3f4f6" }}
              >
                <span className="text-6xl md:text-7xl font-bold opacity-20">S</span>
              </div>
            )}
            {/* Decorative ring */}
            <div
              className="absolute inset-0 rounded-full border-2 border-dashed scale-110 opacity-20"
              style={{ borderColor: theme?.primary }}
            />
            {/* Badge */}
            <div
              className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full text-sm font-semibold shadow-lg"
              style={{ backgroundColor: theme?.primary, color: "#fff" }}
            >
              Top Rated
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
