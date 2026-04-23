import type { BlockProps } from "@/blocks/types";
import { Camera, ArrowRight, Aperture } from "lucide-react";

export default function Hero147(props: BlockProps) {
  const {
    theme,
    heading = "Capture Moments That Last Forever",
    subheading = "Professional photography studio and creative space",
    bodyText = "From editorial shoots to family portraits, our studio combines natural light, premium equipment, and a team of seasoned photographers to deliver images that tell your story beautifully.",
    buttonText = "Book a Session",
    buttonUrl = "#",
    secondaryButtonText = "View Portfolio",
    secondaryButtonUrl = "#",
  } = props;

  const bg = theme?.background ?? "#1a1a1a";
  const fg = theme?.foreground ?? "#f5f5f0";
  const primary = theme?.primary ?? "#e2b96f";
  const accent = theme?.accent ?? "#c9944a";

  // Generate bokeh circles
  const bokehCircles = [
    { size: 120, top: "8%", left: "5%", opacity: 0.08 },
    { size: 200, top: "15%", right: "10%", opacity: 0.06 },
    { size: 80, top: "60%", left: "15%", opacity: 0.1 },
    { size: 160, bottom: "20%", right: "5%", opacity: 0.07 },
    { size: 100, top: "40%", left: "60%", opacity: 0.05 },
    { size: 60, top: "25%", left: "40%", opacity: 0.09 },
    { size: 140, bottom: "35%", left: "70%", opacity: 0.06 },
    { size: 90, top: "70%", right: "30%", opacity: 0.08 },
    { size: 50, top: "10%", left: "70%", opacity: 0.12 },
    { size: 180, bottom: "5%", left: "30%", opacity: 0.04 },
  ];

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: bg, color: fg }}
    >
      {/* Bokeh/blur circles */}
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
        {bokehCircles.map((circle, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: circle.size,
              height: circle.size,
              top: circle.top,
              left: circle.left,
              right: (circle as Record<string, unknown>).right as string | undefined,
              bottom: (circle as Record<string, unknown>).bottom as string | undefined,
              opacity: circle.opacity,
              background: `radial-gradient(circle, ${i % 2 === 0 ? primary : accent}, transparent 70%)`,
              filter: "blur(30px)",
            }}
          />
        ))}
      </div>

      {/* Soft warm gradient overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `radial-gradient(ellipse at 50% 50%, ${primary}0d 0%, transparent 70%)`,
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 text-center">
        {/* Aperture icon */}
        <div className="flex justify-center mb-8">
          <Aperture className="w-12 h-12 opacity-40" style={{ color: primary }} />
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight leading-tight mb-6">
          {heading}
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl font-light mb-6 opacity-60 max-w-2xl mx-auto">
          {subheading}
        </p>

        <div
          className="w-16 h-px mx-auto mb-6"
          style={{ backgroundColor: primary }}
        />

        <p className="text-base sm:text-lg max-w-2xl mx-auto mb-12 opacity-40 leading-relaxed">
          {bodyText}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={buttonUrl}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-medium tracking-wide transition-transform hover:scale-105"
            style={{ backgroundColor: primary, color: bg }}
          >
            <Camera className="w-5 h-5" />
            {buttonText}
          </a>
          <a
            href={secondaryButtonUrl}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-medium tracking-wide border transition-colors hover:opacity-80"
            style={{ borderColor: `${primary}55`, color: primary }}
          >
            {secondaryButtonText}
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>

        {/* Service tags */}
        <div className="mt-16 flex flex-wrap justify-center gap-6 opacity-40 text-sm tracking-wider uppercase">
          {["Portraits", "Weddings", "Editorial", "Product", "Events"].map((s) => (
            <span key={s}>{s}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
