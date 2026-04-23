import type { BlockProps } from "@/blocks/types";
import { Smartphone, Download, Star, ArrowRight, Shield, Zap } from "lucide-react";
import { useCallback } from "react";

const rippleStyles = `
@keyframes ripple240 {
  0% {
    transform: translate(-50%, -50%) scale(0);
    opacity: 0.6;
  }
  100% {
    transform: translate(-50%, -50%) scale(4);
    opacity: 0;
  }
}
.ripple-btn-240 {
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.ripple-btn-240:hover {
  transform: translateY(-2px);
}
.ripple-btn-240:active {
  transform: translateY(0) scale(0.98);
}
.ripple-circle-240 {
  position: absolute;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  animation: ripple240 0.6s linear forwards;
  pointer-events: none;
}
.phone-mockup-240 {
  animation: phoneFloat240 4s ease-in-out infinite;
}
@keyframes phoneFloat240 {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-12px) rotate(1deg); }
}
.store-badge-240 {
  transition: all 0.3s ease;
}
.store-badge-240:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 25px rgba(0,0,0,0.2);
}
`;

export default function Hero240(props: BlockProps) {
  const {
    theme,
    heading = "Your Daily Life, Simplified",
    subheading = "Download the app",
    bodyText = "Manage tasks, track habits, and stay connected — all from one beautifully designed app that fits your lifestyle.",
    buttonText = "Download Free",
    buttonUrl = "#",
    secondaryButtonText = "App Store",
    secondaryButtonUrl = "#",
    items = [
      { title: "4.9 Rating", description: "50K+ reviews", icon: "star" },
      { title: "2M+ Users", description: "Worldwide", icon: "shield" },
      { title: "Lightning Fast", description: "Instant sync", icon: "zap" },
    ],
  } = props;

  const primary = theme?.primary ?? "#6366f1";
  const bg = theme?.background ?? "#ffffff";
  const fg = theme?.foreground ?? "#0f172a";

  const handleRipple = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      const button = e.currentTarget;
      const rect = button.getBoundingClientRect();
      const circle = document.createElement("span");
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      circle.className = "ripple-circle-240";
      circle.style.left = `${x}px`;
      circle.style.top = `${y}px`;
      circle.style.backgroundColor = `${bg}55`;
      button.appendChild(circle);
      setTimeout(() => circle.remove(), 600);
    },
    [bg]
  );

  const handleSecondaryRipple = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      const button = e.currentTarget;
      const rect = button.getBoundingClientRect();
      const circle = document.createElement("span");
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      circle.className = "ripple-circle-240";
      circle.style.left = `${x}px`;
      circle.style.top = `${y}px`;
      circle.style.backgroundColor = `${primary}33`;
      button.appendChild(circle);
      setTimeout(() => circle.remove(), 600);
    },
    [primary]
  );

  const statIcons = [Star, Shield, Zap];

  return (
    <section
      style={{
        backgroundColor: bg,
        color: fg,
      }}
      className="min-h-screen flex items-center px-4 py-20 overflow-hidden"
    >
      <style>{rippleStyles}</style>
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold mb-8"
              style={{
                backgroundColor: `${primary}12`,
                color: primary,
              }}
            >
              <Download className="w-3.5 h-3.5" />
              {subheading}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              {heading.split(",").map((part, i) => (
                <span key={i}>
                  {i > 0 && <br />}
                  {i > 0 ? (
                    <span style={{ color: primary }}>{part.trim()}</span>
                  ) : (
                    part.trim()
                  )}
                </span>
              ))}
            </h1>

            <p className="text-base sm:text-lg opacity-60 mb-10 max-w-md leading-relaxed">
              {bodyText}
            </p>

            {/* Ripple buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href={buttonUrl}
                className="ripple-btn-240 inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-sm font-bold text-white"
                style={{
                  backgroundColor: primary,
                  boxShadow: `0 4px 20px ${primary}44`,
                }}
                onClick={handleRipple}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 8px 30px ${primary}66`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = `0 4px 20px ${primary}44`;
                }}
              >
                {buttonText}
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href={secondaryButtonUrl}
                className="ripple-btn-240 inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-sm font-bold border-2"
                style={{
                  borderColor: `${fg}15`,
                  color: fg,
                }}
                onClick={handleSecondaryRipple}
              >
                <Smartphone className="w-4 h-4" />
                {secondaryButtonText}
              </a>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8">
              {items.slice(0, 3).map((item, i) => {
                const Icon = statIcons[i % statIcons.length];
                return (
                  <div key={i} className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: `${primary}10` }}
                    >
                      <Icon className="w-5 h-5" style={{ color: primary }} />
                    </div>
                    <div>
                      <p className="text-sm font-bold">{item.title}</p>
                      <p className="text-xs opacity-40">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Phone mockup */}
          <div className="flex justify-center lg:justify-end">
            <div className="phone-mockup-240 relative">
              <div
                className="w-64 sm:w-72 h-[500px] sm:h-[560px] rounded-[3rem] border-[6px] relative overflow-hidden"
                style={{
                  borderColor: `${fg}15`,
                  backgroundColor: `${fg}05`,
                }}
              >
                {/* Notch */}
                <div
                  className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 rounded-b-2xl z-10"
                  style={{ backgroundColor: bg }}
                />

                {/* Screen content */}
                <div className="absolute inset-0 p-6 pt-10 flex flex-col">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 mx-auto"
                    style={{ backgroundColor: primary }}
                  >
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div
                    className="h-3 w-24 rounded-full mx-auto mb-2"
                    style={{ backgroundColor: `${fg}15` }}
                  />
                  <div
                    className="h-2 w-32 rounded-full mx-auto mb-6"
                    style={{ backgroundColor: `${fg}08` }}
                  />
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className="h-12 rounded-xl mb-3 flex items-center px-4 gap-3"
                      style={{ backgroundColor: `${fg}05` }}
                    >
                      <div
                        className="w-8 h-8 rounded-lg shrink-0"
                        style={{ backgroundColor: `${primary}${20 + i * 10}` }}
                      />
                      <div className="flex-1">
                        <div
                          className="h-2 rounded-full mb-1"
                          style={{ backgroundColor: `${fg}12`, width: `${70 - i * 10}%` }}
                        />
                        <div
                          className="h-1.5 rounded-full"
                          style={{ backgroundColor: `${fg}06`, width: `${50 - i * 5}%` }}
                        />
                      </div>
                    </div>
                  ))}
                  {/* Bottom nav */}
                  <div className="mt-auto flex justify-around py-3">
                    {[...Array(4)].map((_, i) => (
                      <div
                        key={i}
                        className="w-6 h-6 rounded-full"
                        style={{
                          backgroundColor: i === 0 ? primary : `${fg}10`,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Shadow */}
              <div
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-48 h-8 rounded-full blur-xl"
                style={{ backgroundColor: `${primary}20` }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
