import type { BlockProps } from "@/blocks/types";
import { Landmark, TrendingUp, Shield, ArrowRight } from "lucide-react";

export default function Hero215(props: BlockProps) {
  const {
    theme,
    heading = "Wealth Management Redefined",
    subheading = "Trusted Financial Advisory",
    bodyText = "Over three decades of expertise in wealth preservation and growth. Our numbers represent the trust of thousands of clients worldwide.",
    buttonText = "Schedule Consultation",
    buttonUrl = "#",
    secondaryButtonText = "Our Services",
    secondaryButtonUrl = "#",
    items = [
      { title: "Assets Under Management", value: "12.7", label: "B" },
      { title: "Client Retention Rate", value: "98.4", label: "%" },
      { title: "Years of Excellence", value: "34", label: "YRS" },
    ],
  } = props;

  return (
    <section
      className="min-h-screen flex items-center px-4 py-16 sm:px-8 lg:px-16 relative overflow-hidden"
      style={{
        backgroundColor: theme?.background ?? "#0c1220",
        color: theme?.foreground ?? "#e8e6e1",
      }}
    >
      <style>{`
        @keyframes hero215OdometerRoll {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(0); }
        }
        @keyframes hero215FadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes hero215SlideRight {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .hero215-digit {
          display: inline-block;
          overflow: hidden;
          height: 1.2em;
          line-height: 1.2;
          vertical-align: bottom;
        }
        .hero215-digit-inner {
          display: inline-block;
          animation: hero215OdometerRoll 1.2s cubic-bezier(0.23, 1, 0.32, 1) both;
        }
        .hero215-digit-d0 .hero215-digit-inner { animation-delay: 0.2s; }
        .hero215-digit-d1 .hero215-digit-inner { animation-delay: 0.35s; }
        .hero215-digit-d2 .hero215-digit-inner { animation-delay: 0.5s; }
        .hero215-digit-d3 .hero215-digit-inner { animation-delay: 0.65s; }
        .hero215-digit-d4 .hero215-digit-inner { animation-delay: 0.8s; }
        .hero215-row-0 { animation: hero215SlideRight 0.7s ease-out 0.1s both; }
        .hero215-row-1 { animation: hero215SlideRight 0.7s ease-out 0.4s both; }
        .hero215-row-2 { animation: hero215SlideRight 0.7s ease-out 0.7s both; }
        .hero215-label { animation: hero215FadeIn 0.5s ease-out 1.2s both; }
        .hero215-line {
          height: 1px;
          background: linear-gradient(90deg, ${theme?.primary ?? "#c9a84c"}40 0%, transparent 100%);
        }
      `}</style>

      {/* Subtle gold line accents */}
      <div
        className="absolute top-0 left-0 w-full h-px"
        style={{ backgroundColor: `${theme?.primary ?? "#c9a84c"}30` }}
      />
      <div
        className="absolute bottom-0 left-0 w-full h-px"
        style={{ backgroundColor: `${theme?.primary ?? "#c9a84c"}30` }}
      />

      {/* Background emblem */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 opacity-[0.03]">
        <Shield className="w-[500px] h-[500px]" />
      </div>

      <div className="w-full max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left — content */}
          <div className="lg:col-span-5 space-y-8">
            <div className="flex items-center gap-3">
              <Landmark className="w-5 h-5" style={{ color: theme?.primary ?? "#c9a84c" }} />
              <span
                className="text-xs font-bold tracking-[0.25em] uppercase"
                style={{ color: theme?.primary ?? "#c9a84c" }}
              >
                {subheading}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight" style={{ fontFamily: "Georgia, serif" }}>
              {heading}
            </h1>

            <p className="text-sm sm:text-base opacity-50 leading-relaxed">
              {bodyText}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={buttonUrl}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-bold tracking-wider uppercase rounded transition-transform hover:scale-105"
                style={{
                  backgroundColor: theme?.primary ?? "#c9a84c",
                  color: "#0c1220",
                }}
              >
                {buttonText}
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href={secondaryButtonUrl}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-bold tracking-wider uppercase border rounded transition-opacity hover:opacity-80"
                style={{
                  borderColor: `${theme?.primary ?? "#c9a84c"}50`,
                  color: theme?.primary ?? "#c9a84c",
                }}
              >
                {secondaryButtonText}
              </a>
            </div>
          </div>

          {/* Right — odometer numbers */}
          <div className="lg:col-span-7 space-y-10 lg:pl-12">
            {items.map((item, rowIdx) => {
              const digits = (item.value ?? "0").toString().split("");
              return (
                <div key={rowIdx} className={`hero215-row-${rowIdx}`}>
                  <div className="flex items-baseline gap-1">
                    {/* Prefix $ for first item */}
                    {rowIdx === 0 && (
                      <span
                        className="text-3xl sm:text-4xl lg:text-5xl font-light opacity-50"
                        style={{ fontFamily: "Georgia, serif", color: theme?.primary ?? "#c9a84c" }}
                      >
                        $
                      </span>
                    )}
                    {digits.map((d, di) => (
                      <span
                        key={di}
                        className={`hero215-digit hero215-digit-d${di} text-5xl sm:text-6xl lg:text-8xl font-black`}
                        style={{ color: theme?.primary ?? "#c9a84c" }}
                      >
                        <span className="hero215-digit-inner">{d}</span>
                      </span>
                    ))}
                    <span
                      className="hero215-label text-lg sm:text-xl lg:text-2xl font-bold ml-2 opacity-60"
                      style={{ color: theme?.primary ?? "#c9a84c" }}
                    >
                      {item.label}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 mt-3">
                    <TrendingUp className="w-3.5 h-3.5 opacity-40" />
                    <span className="text-xs sm:text-sm opacity-40 font-medium">{item.title}</span>
                  </div>
                  <div className="hero215-line mt-6 w-full" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
