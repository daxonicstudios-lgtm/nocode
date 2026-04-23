import type { BlockProps } from "@/blocks/types";
import { ArrowRight, Download, Mail, ExternalLink } from "lucide-react";

export default function Hero113(props: BlockProps) {
  const {
    theme,
    heading = "Creative Director & Visual Storyteller",
    subheading = "I craft immersive digital experiences for brands that dare to stand out. 10+ years shaping identities for Fortune 500 companies.",
    buttonText = "View Portfolio",
    buttonUrl = "#",
    secondaryButtonText = "Download CV",
    secondaryButtonUrl = "#",
    imageUrl,
    items = [
      { title: "150+", description: "Projects Delivered" },
      { title: "40+", description: "Global Clients" },
      { title: "12", description: "Design Awards" },
    ],
  } = props;

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#111111", color: theme?.foreground ?? "#ffffff" }}
      className="min-h-screen flex flex-col md:flex-row"
    >
      {/* Left: Dark content panel */}
      <div className="flex-1 flex items-center justify-center px-6 sm:px-10 md:px-16 py-20 md:py-10">
        <div className="max-w-lg w-full">
          {/* Name tag */}
          <div className="flex items-center gap-3 mb-8">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white"
              style={{ backgroundColor: theme?.primary ?? "#e11d48" }}
            >
              JD
            </div>
            <div>
              <div className="text-sm font-semibold">Jane Doe</div>
              <div className="text-xs opacity-40">Available for freelance</div>
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.15]">
            {heading}
          </h1>

          <p className="mt-5 text-base opacity-50 leading-relaxed">
            {subheading}
          </p>

          {/* Stats */}
          <div className="mt-8 flex gap-8">
            {items.map((item, i) => (
              <div key={i}>
                <div
                  className="text-2xl font-bold"
                  style={{ color: theme?.primary ?? "#e11d48" }}
                >
                  {item.title}
                </div>
                <div className="text-xs opacity-40 mt-0.5">{item.description}</div>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <a
              href={buttonUrl}
              style={{ backgroundColor: theme?.primary ?? "#e11d48" }}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg text-white font-semibold hover:opacity-90 transition-opacity"
            >
              {buttonText}
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href={secondaryButtonUrl}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg font-semibold border border-white/15 hover:border-white/30 transition-colors"
            >
              <Download className="w-4 h-4" />
              {secondaryButtonText}
            </a>
          </div>

          {/* Contact links */}
          <div className="mt-10 flex items-center gap-5 text-sm opacity-40">
            <a href="#" className="inline-flex items-center gap-1.5 hover:opacity-80 transition-opacity">
              <Mail className="w-3.5 h-3.5" /> Email
            </a>
            <a href="#" className="inline-flex items-center gap-1.5 hover:opacity-80 transition-opacity">
              <ExternalLink className="w-3.5 h-3.5" /> LinkedIn
            </a>
            <a href="#" className="inline-flex items-center gap-1.5 hover:opacity-80 transition-opacity">
              <ExternalLink className="w-3.5 h-3.5" /> Dribbble
            </a>
          </div>
        </div>
      </div>

      {/* Right: Image panel */}
      <div className="flex-1 relative min-h-[50vh] md:min-h-screen">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt="Portfolio showcase"
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{
              background: `linear-gradient(135deg, ${theme?.primary ?? "#e11d48"}30, ${theme?.accent ?? "#f97316"}20)`,
            }}
          >
            <div className="text-center opacity-20">
              <div className="text-8xl font-black tracking-tighter">JD</div>
              <div className="text-sm uppercase tracking-widest mt-2">Portfolio</div>
            </div>
          </div>
        )}
        {/* Overlay gradient at the edge */}
        <div
          className="absolute inset-y-0 left-0 w-24 hidden md:block"
          style={{
            background: `linear-gradient(to right, ${theme?.background ?? "#111111"}, transparent)`,
          }}
        />
      </div>
    </section>
  );
}
