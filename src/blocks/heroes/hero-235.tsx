import type { BlockProps } from "@/blocks/types";
import { ArrowRight, Star, Shield, Cpu, Wifi } from "lucide-react";

const tooltipStyles = `
.tooltip-card-235 {
  position: relative;
}
.tooltip-content-235 {
  position: absolute;
  bottom: calc(100% + 12px);
  left: 50%;
  transform: translateX(-50%) translateY(8px);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease, transform 0.3s ease;
  z-index: 20;
  min-width: 220px;
}
.tooltip-card-235:hover .tooltip-content-235 {
  opacity: 1;
  transform: translateX(-50%) translateY(0);
  pointer-events: auto;
}
.tooltip-arrow-235 {
  position: absolute;
  bottom: -6px;
  left: 50%;
  transform: translateX(-50%) rotate(45deg);
  width: 12px;
  height: 12px;
}
.product-dot-235 {
  transition: all 0.3s ease;
}
.tooltip-card-235:hover .product-dot-235 {
  transform: scale(1.3);
}
`;

const iconMap = [Star, Shield, Cpu, Wifi];

export default function Hero235(props: BlockProps) {
  const {
    theme,
    heading = "Meet the Device That Does It All",
    subheading = "Introducing Nova Pro",
    bodyText = "Engineered for performance, designed for life. Every feature built with intention, every detail refined through obsession.",
    buttonText = "Pre-order Now",
    buttonUrl = "#",
    secondaryButtonText = "View Specs",
    secondaryButtonUrl = "#",
    items = [
      { title: "Neural Engine", description: "18-core AI processor for real-time learning and adaptation", value: "top-[25%] left-[20%]" },
      { title: "Privacy Shield", description: "Hardware-level encryption keeping your data safe on-device", value: "top-[40%] right-[15%]" },
      { title: "5nm Chip", description: "Industry-leading performance at record-low power consumption", value: "bottom-[30%] left-[35%]" },
      { title: "Wi-Fi 7", description: "Next-gen wireless with 4x faster throughput than Wi-Fi 6E", value: "top-[20%] right-[30%]" },
    ],
  } = props;

  const primary = theme?.primary ?? "#3b82f6";
  const bg = theme?.background ?? "#0f172a";

  return (
    <section
      style={{
        backgroundColor: bg,
        color: theme?.foreground ?? "#e2e8f0",
      }}
      className="min-h-screen flex items-center px-4 py-20"
    >
      <style>{tooltipStyles}</style>
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-16">
          <p
            className="text-xs tracking-widest uppercase font-semibold mb-4"
            style={{ color: primary }}
          >
            {subheading}
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            {heading}
          </h1>
          <p className="text-base sm:text-lg opacity-50 max-w-xl mx-auto mb-8">
            {bodyText}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={buttonUrl}
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold text-white transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: primary,
                boxShadow: `0 4px 20px ${primary}44`,
              }}
            >
              {buttonText}
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href={secondaryButtonUrl}
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-sm font-semibold border transition-all duration-300 hover:scale-105"
              style={{ borderColor: `${primary}44`, color: primary }}
            >
              {secondaryButtonText}
            </a>
          </div>
        </div>

        {/* Product feature grid with tooltips */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {items.slice(0, 4).map((item, i) => {
            const Icon = iconMap[i % iconMap.length];
            return (
              <div key={i} className="tooltip-card-235 flex flex-col items-center text-center cursor-default">
                {/* Tooltip */}
                <div
                  className="tooltip-content-235 p-4 rounded-xl text-left"
                  style={{
                    backgroundColor: `${theme?.foreground ?? "#e2e8f0"}10`,
                    backdropFilter: "blur(12px)",
                    border: `1px solid ${primary}30`,
                  }}
                >
                  <p className="text-xs font-semibold mb-1" style={{ color: primary }}>
                    {item.title}
                  </p>
                  <p className="text-xs opacity-70 leading-relaxed">{item.description}</p>
                  <div
                    className="tooltip-arrow-235"
                    style={{
                      backgroundColor: `${theme?.foreground ?? "#e2e8f0"}10`,
                      borderRight: `1px solid ${primary}30`,
                      borderBottom: `1px solid ${primary}30`,
                    }}
                  />
                </div>

                {/* Feature card */}
                <div
                  className="w-full p-6 rounded-2xl transition-all duration-300 hover:scale-105"
                  style={{
                    backgroundColor: `${theme?.foreground ?? "#e2e8f0"}06`,
                    border: `1px solid ${theme?.foreground ?? "#e2e8f0"}10`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = `${primary}40`;
                    e.currentTarget.style.boxShadow = `0 0 30px ${primary}15`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = `${theme?.foreground ?? "#e2e8f0"}10`;
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <div
                    className="product-dot-235 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
                    style={{ backgroundColor: `${primary}15` }}
                  >
                    <Icon className="w-6 h-6" style={{ color: primary }} />
                  </div>
                  <h3 className="text-sm font-semibold mb-1">{item.title}</h3>
                  <p className="text-xs opacity-40">Hover to learn more</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
