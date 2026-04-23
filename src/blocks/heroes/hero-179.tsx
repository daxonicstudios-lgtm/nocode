import type { BlockProps } from "@/blocks/types";
import { Camera, User } from "lucide-react";

export default function Hero179(props: BlockProps) {
  const {
    theme,
    heading = "Alexandra Reed",
    subheading = "Portrait & Lifestyle Photography",
    bodyText = "Capturing authentic moments and creating timeless portraits that reflect who you truly are. Based in Brooklyn, available worldwide.",
    buttonText = "Book a Session",
    buttonUrl = "#",
    items = [
      { title: "Editorial" },
      { title: "Lifestyle" },
      { title: "Headshots" },
    ],
  } = props;

  return (
    <section
      className="min-h-screen flex items-center px-4 py-16 sm:px-8 lg:px-16"
      style={{
        backgroundColor: theme?.background ?? "#0a0a0a",
        color: theme?.foreground ?? "#f5f5f5",
      }}
    >
      <div className="w-full max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 text-sm tracking-widest uppercase opacity-70">
              <Camera className="w-4 h-4" />
              <span>Photography</span>
              <span className="mx-1">|</span>
              <User className="w-4 h-4" />
              <span>Portraits</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight leading-none">
              {heading}
            </h1>

            <p
              className="text-lg sm:text-xl font-light tracking-wide uppercase"
              style={{ color: theme?.primary ?? "#c9a87c" }}
            >
              {subheading}
            </p>

            <p className="text-base sm:text-lg leading-relaxed opacity-70 max-w-md">
              {bodyText}
            </p>

            <a
              href={buttonUrl}
              className="inline-flex items-center gap-2 px-8 py-4 text-sm font-medium tracking-widest uppercase transition-opacity hover:opacity-80"
              style={{
                backgroundColor: theme?.primary ?? "#c9a87c",
                color: theme?.background ?? "#0a0a0a",
              }}
            >
              {buttonText}
            </a>
          </div>

          {/* Right — mini portfolio grid */}
          <div className="grid grid-cols-3 gap-3 sm:gap-4">
            {items.map((item, i) => (
              <div key={i} className="space-y-3">
                <div
                  className="aspect-square w-full rounded-sm"
                  style={{
                    backgroundColor: theme?.accent ?? "#2a2a2a",
                  }}
                >
                  <div className="w-full h-full flex items-center justify-center opacity-30">
                    <Camera className="w-8 h-8" />
                  </div>
                </div>
                <p className="text-xs tracking-widest uppercase text-center opacity-50">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
