import type { BlockProps } from "@/blocks/types";
import { Camera, Aperture, ImageIcon, ArrowRight } from "lucide-react";

export default function Hero065(props: BlockProps) {
  const {
    theme,
    heading = "Capturing Moments That Last Forever",
    subheading = "Professional Photography",
    bodyText = "From weddings and portraits to commercial shoots and events, we bring your vision to life through stunning imagery that tells your unique story.",
    buttonText = "View Gallery",
    buttonUrl = "#",
    secondaryButtonText = "Book a Session",
    secondaryButtonUrl = "#",
    imageUrl,
    items = [
      { imageUrl: "", label: "Weddings" },
      { imageUrl: "", label: "Portraits" },
      { imageUrl: "", label: "Commercial" },
      { imageUrl: "", label: "Events" },
    ],
  } = props;

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#111111", color: theme?.foreground ?? "#f5f5f5" }}
      className="min-h-[80vh] flex items-center"
    >
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center px-6 py-12 md:px-10 gap-10">
        {/* Text Left */}
        <div className="w-full md:w-5/12">
          <div className="flex items-center gap-3 mb-5">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center"
              style={{ backgroundColor: `${theme?.primary ?? "#f59e0b"}20` }}
            >
              <Camera className="w-5 h-5" style={{ color: theme?.primary ?? "#f59e0b" }} />
            </div>
            <span
              className="text-sm font-semibold uppercase tracking-widest"
              style={{ color: theme?.primary ?? "#f59e0b" }}
            >
              {subheading}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            {heading}
          </h1>

          <p className="mt-5 text-base opacity-60 leading-relaxed">
            {bodyText}
          </p>

          <div className="mt-6 flex items-center gap-4 text-sm opacity-50">
            <span className="flex items-center gap-1.5">
              <Aperture className="w-4 h-4" /> 10+ Years Experience
            </span>
            <span className="flex items-center gap-1.5">
              <ImageIcon className="w-4 h-4" /> 5,000+ Photos Delivered
            </span>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href={buttonUrl}
              className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-lg text-black font-semibold hover:opacity-90 transition-opacity"
              style={{ backgroundColor: theme?.primary ?? "#f59e0b" }}
            >
              {buttonText}
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href={secondaryButtonUrl}
              className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-lg font-semibold border hover:opacity-80 transition-opacity"
              style={{ borderColor: `${theme?.foreground ?? "#f5f5f5"}25` }}
            >
              {secondaryButtonText}
            </a>
          </div>
        </div>

        {/* Portfolio Grid Right */}
        <div className="w-full md:w-7/12">
          <div className="grid grid-cols-2 gap-3">
            {items.slice(0, 4).map((item, i) => (
              <div key={i} className="relative group overflow-hidden rounded-lg">
                {item.imageUrl ? (
                  <img
                    src={item.imageUrl}
                    alt={item.label ?? `Photo ${i + 1}`}
                    className="w-full aspect-square object-cover"
                  />
                ) : (
                  <div
                    className="w-full aspect-square flex items-center justify-center"
                    style={{
                      backgroundColor: `${theme?.primary ?? "#f59e0b"}${i % 2 === 0 ? "12" : "08"}`,
                    }}
                  >
                    <Camera
                      className="w-10 h-10 opacity-20"
                      style={{ color: theme?.primary ?? "#f59e0b" }}
                    />
                  </div>
                )}
                {/* Label overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent">
                  <p className="text-sm font-medium text-white">{item.label ?? `Photo ${i + 1}`}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
