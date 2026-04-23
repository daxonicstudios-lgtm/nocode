import type { BlockProps } from "@/blocks/types";
import { ArrowRight, Building2 } from "lucide-react";

export default function Hero005(props: BlockProps) {
  const {
    theme,
    heading = "Powering the next generation of businesses",
    subheading = "Join thousands of companies using our platform to build, launch, and grow their online presence.",
    buttonText = "Start Free Trial",
    buttonUrl = "#",
    items = [
      { label: "Acme Corp" },
      { label: "Globex" },
      { label: "Initech" },
      { label: "Umbrella" },
      { label: "Stark Industries" },
    ],
  } = props;

  return (
    <section
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
      className="min-h-[80vh] flex items-center justify-center px-5 py-20"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight">
          {heading}
        </h1>
        <p className="mt-6 text-lg sm:text-xl opacity-60 leading-relaxed max-w-xl mx-auto">
          {subheading}
        </p>
        <div className="mt-10">
          <a
            href={buttonUrl}
            style={{ backgroundColor: theme?.primary }}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-white font-medium text-base bg-black hover:opacity-90 transition-opacity"
          >
            {buttonText}
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
        <div className="mt-16">
          <p className="text-xs uppercase tracking-widest opacity-40 font-semibold mb-8">
            Trusted by industry leaders
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
            {items.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2 opacity-30 hover:opacity-60 transition-opacity"
              >
                {item.imageUrl ? (
                  <img
                    src={item.imageUrl}
                    alt={item.label || `Partner ${i + 1}`}
                    className="h-8 sm:h-10 object-contain"
                  />
                ) : (
                  <span className="flex items-center gap-2 text-lg font-bold tracking-tight">
                    <Building2 className="w-5 h-5" />
                    {item.label}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
