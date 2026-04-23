import type { BlockProps } from "@/blocks/types";
import { ArrowUpRight, Sparkles } from "lucide-react";

export default function Hero057(props: BlockProps) {
  const {
    theme,
    heading = "We Build Brands That Stand Out",
    subheading = "A full-service creative agency specializing in branding, web design, and digital strategy for ambitious companies.",
    buttonText = "View Our Work",
    buttonUrl = "#",
    secondaryButtonText = "Get in Touch",
    secondaryButtonUrl = "#",
    items = [
      { title: "Branding", label: "#c084fc" },
      { title: "Web Design", label: "#60a5fa" },
      { title: "Strategy", label: "#34d399" },
      { title: "Motion", label: "#f97316" },
      { title: "Photography", label: "#f472b6" },
      { title: "Development", label: "#a78bfa" },
    ],
  } = props;

  const colors = ["#c084fc", "#60a5fa", "#34d399", "#f97316", "#f472b6", "#a78bfa"];

  return (
    <section
      style={{ backgroundColor: theme?.background || "#111111", color: theme?.foreground || "#ffffff" }}
      className="min-h-[80vh] flex items-center px-5 py-16"
    >
      <div className="max-w-6xl mx-auto w-full flex flex-col-reverse md:flex-row items-center gap-10 md:gap-14">
        {/* Portfolio Grid Side (left on desktop) */}
        <div className="flex-1 w-full max-w-md md:max-w-none">
          <div className="grid grid-cols-3 gap-3">
            {items.slice(0, 6).map((item, i) => (
              <div
                key={i}
                className="aspect-square rounded-xl flex items-center justify-center group cursor-pointer transition-transform hover:scale-105"
                style={{ backgroundColor: item.label || colors[i % colors.length] }}
              >
                <span className="text-white text-xs font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity text-center px-2">
                  {item.title}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-4 flex items-center gap-2 justify-center md:justify-start">
            <Sparkles className="w-4 h-4 opacity-40" />
            <span className="text-sm opacity-40">120+ projects delivered</span>
          </div>
        </div>

        {/* Text Side (right on desktop) */}
        <div className="flex-1 text-center md:text-left">
          <span
            className="inline-block text-xs font-bold uppercase tracking-[0.2em] mb-6 opacity-50"
          >
            Creative Agency
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight">
            {heading}
          </h1>
          <p className="mt-5 text-lg opacity-50 leading-relaxed max-w-lg">
            {subheading}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
            <a
              href={buttonUrl}
              style={{ backgroundColor: theme?.primary }}
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-white font-medium bg-white/10 hover:bg-white/20 transition-colors"
            >
              {buttonText}
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              href={secondaryButtonUrl}
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-medium border border-current opacity-40 hover:opacity-100 transition-opacity"
            >
              {secondaryButtonText}
            </a>
          </div>

          {/* Client logos placeholder */}
          <div className="mt-12">
            <span className="text-xs uppercase tracking-widest opacity-30 block mb-4">Trusted by</span>
            <div className="flex items-center gap-6 justify-center md:justify-start">
              {["Acme Co", "Globex", "Initech", "Umbrella"].map((name) => (
                <span key={name} className="text-sm font-bold opacity-20">{name}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
