import type { BlockProps } from "@/blocks/types";
import { Camera, Building, CheckCircle, ArrowRight } from "lucide-react";

export default function Hero185(props: BlockProps) {
  const {
    theme,
    heading = "Showcase Properties That Sell",
    subheading = "Professional Real Estate Photography",
    bodyText = "High-quality property imagery that helps listings stand out and sell faster. Trusted by top agents and brokerages across the region.",
    buttonText = "Get a Quote",
    buttonUrl = "#",
    items = [
      { title: "Interior & Exterior Photography" },
      { title: "Aerial Drone Shots" },
      { title: "Virtual Staging" },
      { title: "3D Virtual Tours" },
      { title: "Twilight Photography" },
      { title: "Floor Plan Design" },
    ],
  } = props;

  return (
    <section
      className="min-h-screen flex items-center px-4 py-16 sm:px-8 lg:px-16"
      style={{
        backgroundColor: theme?.background ?? "#f8fafc",
        color: theme?.foreground ?? "#1e293b",
      }}
    >
      <div className="w-full max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium tracking-wide"
              style={{
                backgroundColor: (theme?.primary ?? "#2563eb") + "15",
                color: theme?.primary ?? "#2563eb",
              }}
            >
              <Camera className="w-3.5 h-3.5" />
              {subheading}
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight">
              {heading}
            </h1>

            <p className="text-base sm:text-lg leading-relaxed opacity-60 max-w-lg">
              {bodyText}
            </p>

            {/* Services list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {items.map((service, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <CheckCircle
                    className="w-4 h-4 flex-shrink-0"
                    style={{ color: theme?.primary ?? "#2563eb" }}
                  />
                  <span className="text-sm">{service.title}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a
              href={buttonUrl}
              className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold tracking-wide rounded-lg transition-opacity hover:opacity-90 shadow-lg"
              style={{
                backgroundColor: theme?.primary ?? "#2563eb",
                color: "#ffffff",
                boxShadow: `0 10px 30px -5px ${(theme?.primary ?? "#2563eb")}40`,
              }}
            >
              {buttonText}
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Right — property image mockup */}
          <div className="space-y-4">
            {/* Main image */}
            <div
              className="aspect-[16/10] rounded-xl flex items-center justify-center shadow-xl"
              style={{ backgroundColor: theme?.accent ?? "#e2e8f0" }}
            >
              <div className="flex flex-col items-center gap-3 opacity-30">
                <Building className="w-16 h-16" />
                <span className="text-xs tracking-widest uppercase">Featured Property</span>
              </div>
            </div>

            {/* Thumbnail row */}
            <div className="grid grid-cols-3 gap-3">
              {[1, 2, 3].map((n) => (
                <div
                  key={n}
                  className="aspect-[4/3] rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: theme?.accent ?? "#e2e8f0" }}
                >
                  <Camera className="w-6 h-6 opacity-20" />
                </div>
              ))}
            </div>

            {/* Stats bar */}
            <div
              className="flex items-center justify-around py-4 rounded-lg"
              style={{ backgroundColor: theme?.primary ?? "#2563eb", color: "#ffffff" }}
            >
              <div className="text-center">
                <p className="text-xl font-bold">2,500+</p>
                <p className="text-[10px] tracking-wider uppercase opacity-70">Properties Shot</p>
              </div>
              <div className="w-px h-8 bg-white/20" />
              <div className="text-center">
                <p className="text-xl font-bold">24hr</p>
                <p className="text-[10px] tracking-wider uppercase opacity-70">Turnaround</p>
              </div>
              <div className="w-px h-8 bg-white/20" />
              <div className="text-center">
                <p className="text-xl font-bold">98%</p>
                <p className="text-[10px] tracking-wider uppercase opacity-70">Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
