import type { BlockProps } from "@/blocks/types";
import { Baby, Heart, Camera } from "lucide-react";

export default function Hero183(props: BlockProps) {
  const {
    theme,
    heading = "Precious Moments, Beautifully Preserved",
    subheading = "Newborn & Family Photography",
    bodyText = "Those tiny fingers, first smiles, and loving embraces deserve to be treasured forever. I create gentle, timeless images your family will cherish for generations.",
    buttonText = "Book Your Session",
    buttonUrl = "#",
    items = [
      { title: "Newborn Sessions", description: "First 14 days", value: "From $450" },
      { title: "Family Portraits", description: "Up to 6 people", value: "From $350" },
      { title: "Milestone Sessions", description: "3, 6, 9, 12 months", value: "From $300" },
    ],
  } = props;

  return (
    <section
      className="min-h-screen flex items-center px-4 py-16 sm:px-8 lg:px-16"
      style={{
        backgroundColor: theme?.background ?? "#fdf6f0",
        color: theme?.foreground ?? "#5a4234",
      }}
    >
      <div className="w-full max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — image placeholder */}
          <div className="order-2 lg:order-1">
            <div
              className="aspect-[4/5] rounded-3xl flex items-center justify-center relative overflow-hidden"
              style={{ backgroundColor: theme?.accent ?? "#f3e8dc" }}
            >
              <div className="flex flex-col items-center gap-3 opacity-30">
                <Baby className="w-16 h-16" />
                <Camera className="w-8 h-8" />
              </div>
              {/* Decorative hearts */}
              <Heart
                className="absolute top-6 right-6 w-6 h-6 opacity-20"
                style={{ color: theme?.primary ?? "#d4927a" }}
                fill={theme?.primary ?? "#d4927a"}
              />
              <Heart
                className="absolute bottom-10 left-8 w-4 h-4 opacity-15"
                style={{ color: theme?.primary ?? "#d4927a" }}
                fill={theme?.primary ?? "#d4927a"}
              />
            </div>
          </div>

          {/* Right — content */}
          <div className="order-1 lg:order-2 space-y-8">
            <div className="flex items-center gap-2">
              <Baby className="w-4 h-4" style={{ color: theme?.primary ?? "#d4927a" }} />
              <span className="text-xs tracking-widest uppercase opacity-60">{subheading}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light leading-tight">
              {heading}
            </h1>

            <p className="text-base leading-relaxed opacity-70">
              {bodyText}
            </p>

            <a
              href={buttonUrl}
              className="inline-flex items-center gap-2 px-8 py-4 text-sm font-medium tracking-wide rounded-full transition-opacity hover:opacity-80"
              style={{
                backgroundColor: theme?.primary ?? "#d4927a",
                color: "#ffffff",
              }}
            >
              <Heart className="w-4 h-4" />
              {buttonText}
            </a>

            {/* Packages */}
            <div className="space-y-4 pt-4">
              <p className="text-xs tracking-widest uppercase opacity-50">Session Packages</p>
              <div className="space-y-3">
                {items.map((pkg, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-4 rounded-2xl"
                    style={{ backgroundColor: theme?.accent ?? "#f3e8dc" }}
                  >
                    <div>
                      <p className="font-medium text-sm">{pkg.title}</p>
                      <p className="text-xs opacity-50">{pkg.description}</p>
                    </div>
                    <p
                      className="text-sm font-medium"
                      style={{ color: theme?.primary ?? "#d4927a" }}
                    >
                      {pkg.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
