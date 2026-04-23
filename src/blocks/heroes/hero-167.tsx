import type { BlockProps } from "@/blocks/types";
import { Wrench, Settings, Droplets, Disc, Thermometer, Battery } from "lucide-react";

export default function Hero167(props: BlockProps) {
  const {
    theme,
    heading = "Expert Auto Repair You Can Trust",
    subheading = "Factory-trained technicians, honest pricing, and a lifetime warranty on all repairs. Your car deserves the best care.",
    buttonText = "Book a Service",
    buttonUrl = "#",
    secondaryButtonText = "Get a Quote",
    secondaryButtonUrl = "#",
    items = [
      { title: "Oil Change", description: "Full synthetic & conventional", icon: "droplets" },
      { title: "Brake Service", description: "Pads, rotors & fluid flush", icon: "disc" },
      { title: "Engine Diagnostics", description: "Computer scan & analysis", icon: "settings" },
      { title: "AC Repair", description: "Recharge & compressor service", icon: "thermometer" },
      { title: "Transmission", description: "Fluid flush & rebuild", icon: "wrench" },
      { title: "Battery & Electrical", description: "Testing & replacement", icon: "battery" },
    ],
  } = props;

  const iconMap: Record<string, React.ReactNode> = {
    droplets: <Droplets className="w-5 h-5" />,
    disc: <Disc className="w-5 h-5" />,
    settings: <Settings className="w-5 h-5" />,
    thermometer: <Thermometer className="w-5 h-5" />,
    wrench: <Wrench className="w-5 h-5" />,
    battery: <Battery className="w-5 h-5" />,
  };

  return (
    <section
      className="relative px-4 py-16 sm:py-24"
      style={{ backgroundColor: theme?.background ?? "#f0f4f8", color: theme?.foreground ?? "#1e293b" }}
    >
      <div className="w-full max-w-6xl mx-auto">
        {/* Top section */}
        <div className="text-center mb-14">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6"
            style={{ backgroundColor: `${theme?.primary ?? "#2563eb"}15`, color: theme?.primary ?? "#2563eb" }}
          >
            <Wrench className="w-4 h-4" />
            Certified Auto Service Center
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-5 leading-tight">
            {heading}
          </h1>
          <p className="text-base sm:text-lg max-w-2xl mx-auto opacity-60 leading-relaxed mb-8">
            {subheading}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={buttonUrl}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-sm font-semibold transition-opacity hover:opacity-90"
              style={{ backgroundColor: theme?.primary ?? "#2563eb", color: "#ffffff" }}
            >
              <Settings className="w-4 h-4" />
              {buttonText}
            </a>
            <a
              href={secondaryButtonUrl}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-sm font-semibold border-2 transition-opacity hover:opacity-80"
              style={{ borderColor: theme?.primary ?? "#2563eb", color: theme?.primary ?? "#2563eb" }}
            >
              {secondaryButtonText}
            </a>
          </div>
        </div>

        {/* Service highlights grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
          {items.map((item, i) => (
            <div
              key={i}
              className="rounded-xl p-5 sm:p-6 transition-all hover:scale-[1.02]"
              style={{
                backgroundColor: `${theme?.foreground ?? "#1e293b"}06`,
                border: `1px solid ${theme?.foreground ?? "#1e293b"}10`,
              }}
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center mb-3"
                style={{ backgroundColor: `${theme?.primary ?? "#2563eb"}15`, color: theme?.primary ?? "#2563eb" }}
              >
                {iconMap[item.icon ?? "wrench"] ?? <Wrench className="w-5 h-5" />}
              </div>
              <h3 className="font-semibold text-sm sm:text-base mb-1">{item.title}</h3>
              <p className="text-xs sm:text-sm opacity-50">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Trust bar */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 mt-10 text-xs sm:text-sm font-medium opacity-40">
          <span>ASE Certified</span>
          <span className="w-1 h-1 rounded-full bg-current" />
          <span>Same-Day Service</span>
          <span className="w-1 h-1 rounded-full bg-current" />
          <span>Free Inspections</span>
          <span className="w-1 h-1 rounded-full bg-current" />
          <span>Lifetime Warranty</span>
        </div>
      </div>
    </section>
  );
}
