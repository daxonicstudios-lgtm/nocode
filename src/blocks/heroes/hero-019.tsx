import type { BlockProps } from "@/blocks/types";
import { ArrowRight, ChevronRight } from "lucide-react";

export default function Hero019(props: BlockProps) {
  const {
    theme,
    heading = "Build Your Online Store in Minutes",
    subheading = "No coding, no design skills needed. Just describe what you want and let AI handle the rest.",
    buttonText = "Create Your Site",
    buttonUrl = "#create",
    secondaryButtonText = "View Templates",
    secondaryButtonUrl = "#templates",
    navLinks = [
      { label: "Home", url: "#" },
      { label: "Products", url: "#products" },
      { label: "E-Commerce", url: "#ecommerce" },
    ],
  } = props;

  return (
    <section
      style={{
        backgroundColor: theme?.background ?? "#fafafa",
        color: theme?.foreground ?? "#18181b",
      }}
      className="min-h-screen flex items-center justify-center px-6 py-20"
    >
      <div className="max-w-2xl w-full text-center">
        {/* Breadcrumb navigation hint */}
        <nav className="flex items-center justify-center gap-1 text-xs sm:text-sm mb-10 flex-wrap">
          {navLinks.map((link, i) => (
            <span key={i} className="flex items-center gap-1">
              {i > 0 && (
                <ChevronRight className="w-3 h-3 opacity-30" />
              )}
              <a
                href={link.url}
                className={`transition-opacity hover:opacity-100 ${
                  i === navLinks.length - 1 ? "font-medium" : "opacity-50"
                }`}
                style={
                  i === navLinks.length - 1
                    ? { color: theme?.primary ?? "#6366f1" }
                    : undefined
                }
              >
                {link.label}
              </a>
            </span>
          ))}
        </nav>

        {/* Tag */}
        <span
          className="inline-block px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium mb-7"
          style={{
            backgroundColor: (theme?.primary ?? "#6366f1") + "10",
            color: theme?.primary ?? "#6366f1",
          }}
        >
          New: AI-powered website builder
        </span>

        {/* Heading */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-5 leading-tight">
          {heading}
        </h1>

        {/* Subheading */}
        <p className="text-base sm:text-lg opacity-55 max-w-lg mx-auto mb-10 leading-relaxed">
          {subheading}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={buttonUrl}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg text-white font-semibold text-sm sm:text-base transition-opacity hover:opacity-90 shadow-md"
            style={{ backgroundColor: theme?.primary ?? "#6366f1" }}
          >
            {buttonText}
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href={secondaryButtonUrl}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold text-sm sm:text-base border transition-opacity hover:opacity-70"
            style={{
              borderColor: theme?.foreground ? theme.foreground + "20" : "#18181b20",
              color: theme?.foreground ?? "#18181b",
            }}
          >
            {secondaryButtonText}
          </a>
        </div>
      </div>
    </section>
  );
}
