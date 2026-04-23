import type { BlockProps } from "@/blocks/types";
import { Camera, Briefcase } from "lucide-react";

export default function Hero181(props: BlockProps) {
  const {
    theme,
    heading = "Elevating Brands Through Visual Storytelling",
    subheading = "Commercial & Product Photography",
    bodyText = "High-impact imagery for brands that demand attention. From e-commerce to editorial campaigns, we craft visuals that convert browsers into buyers.",
    buttonText = "View Work",
    buttonUrl = "#",
    items = [
      { title: "Nike" },
      { title: "Glossier" },
      { title: "Warby Parker" },
      { title: "Allbirds" },
      { title: "Mejuri" },
      { title: "Aesop" },
    ],
  } = props;

  return (
    <section
      className="min-h-screen flex items-center px-4 py-16 sm:px-8 lg:px-16"
      style={{
        backgroundColor: theme?.background ?? "#ffffff",
        color: theme?.foreground ?? "#1a1a1a",
      }}
    >
      <div className="w-full max-w-6xl mx-auto space-y-16">
        {/* Top bar */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm tracking-widest uppercase opacity-50">
            <Camera className="w-4 h-4" />
            <span>Studio</span>
          </div>
          <div className="flex items-center gap-2 text-sm tracking-widest uppercase opacity-50">
            <Briefcase className="w-4 h-4" />
            <span>Commercial</span>
          </div>
        </div>

        {/* Main content */}
        <div className="space-y-8 max-w-4xl">
          <p
            className="text-xs sm:text-sm font-medium tracking-widest uppercase"
            style={{ color: theme?.primary ?? "#0066ff" }}
          >
            {subheading}
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
            {heading}
          </h1>

          <p className="text-base sm:text-lg leading-relaxed opacity-60 max-w-2xl">
            {bodyText}
          </p>

          <a
            href={buttonUrl}
            className="inline-flex items-center gap-3 group text-sm font-medium tracking-widest uppercase"
            style={{ color: theme?.primary ?? "#0066ff" }}
          >
            <span>{buttonText}</span>
            <span className="inline-block w-8 h-px transition-all group-hover:w-12" style={{ backgroundColor: theme?.primary ?? "#0066ff" }} />
          </a>
        </div>

        {/* Client logos area */}
        <div className="space-y-6 pt-8 border-t" style={{ borderColor: theme?.accent ?? "#e5e5e5" }}>
          <p className="text-xs tracking-widest uppercase opacity-40">Trusted by leading brands</p>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-6">
            {items.map((client, i) => (
              <div
                key={i}
                className="flex items-center justify-center py-4 px-2 rounded"
                style={{ backgroundColor: theme?.accent ?? "#f5f5f5" }}
              >
                <span className="text-xs sm:text-sm font-medium tracking-wider uppercase opacity-40">
                  {client.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
