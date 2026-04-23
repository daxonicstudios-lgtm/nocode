import type { BlockProps } from "@/blocks/types";
import { Scale, Briefcase, ArrowRight, ChevronRight } from "lucide-react";

export default function Hero158(props: BlockProps) {
  const {
    theme,
    heading = "Trusted Legal Counsel for Complex Business Matters",
    subheading = "Serving Fortune 500 companies and growing enterprises since 1987",
    bodyText = "Our firm brings decades of experience in corporate governance, mergers and acquisitions, securities regulation, and international trade law. We deliver strategic legal solutions that protect your business interests.",
    buttonText = "Schedule a Consultation",
    buttonUrl = "#",
    secondaryButtonText = "Our Practice Areas",
    secondaryButtonUrl = "#",
    items = [
      { title: "Corporate Governance" },
      { title: "Mergers & Acquisitions" },
      { title: "Securities Law" },
      { title: "International Trade" },
      { title: "Tax Strategy" },
      { title: "Compliance" },
    ],
  } = props;

  const bg = theme?.background ?? "#0a1628";
  const fg = theme?.foreground ?? "#f0ece4";
  const primary = theme?.primary ?? "#c9a84c";
  const accent = theme?.accent ?? "#d4b962";

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: bg, color: fg }}
    >
      {/* Subtle gold line accent */}
      <div
        className="absolute top-0 left-0 right-0 h-1"
        style={{ backgroundColor: primary }}
      />

      {/* Decorative vertical line */}
      <div
        className="hidden lg:block absolute left-16 top-1/4 bottom-1/4 w-px opacity-20"
        style={{ backgroundColor: primary }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-8">
              <Scale className="w-6 h-6" style={{ color: primary }} />
              <div
                className="h-px w-12"
                style={{ backgroundColor: `${primary}66` }}
              />
              <span
                className="text-sm font-semibold tracking-widest uppercase"
                style={{ color: primary }}
              >
                Established 1987
              </span>
            </div>

            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-6"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              {heading}
            </h1>

            <p className="text-lg sm:text-xl opacity-60 max-w-xl mb-4 leading-relaxed">
              {subheading}
            </p>

            <p className="text-base opacity-40 max-w-lg mb-10 leading-relaxed">
              {bodyText}
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4 mb-12">
              <a
                href={buttonUrl}
                className="inline-flex items-center gap-3 px-8 py-4 text-base font-semibold tracking-wide transition-transform hover:scale-105"
                style={{ backgroundColor: primary, color: bg }}
              >
                <Briefcase className="w-5 h-5" />
                {buttonText}
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href={secondaryButtonUrl}
                className="inline-flex items-center gap-2 px-8 py-4 text-base font-medium border transition-colors hover:opacity-80"
                style={{ borderColor: `${fg}33`, color: fg }}
              >
                {secondaryButtonText}
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right — Practice area badges */}
          <div className="lg:col-span-5">
            <div
              className="p-8 sm:p-10 rounded-sm"
              style={{
                backgroundColor: `${fg}08`,
                border: `1px solid ${primary}22`,
              }}
            >
              <h3
                className="text-sm font-semibold tracking-widest uppercase mb-6"
                style={{ color: primary }}
              >
                Practice Areas
              </h3>
              <div className="flex flex-wrap gap-3">
                {items.map((item, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium rounded-sm"
                    style={{
                      backgroundColor: `${primary}12`,
                      color: accent,
                      border: `1px solid ${primary}30`,
                    }}
                  >
                    <Scale className="w-3.5 h-3.5" />
                    {item.title}
                  </span>
                ))}
              </div>
              <div
                className="mt-8 pt-6 flex items-center gap-4"
                style={{ borderTop: `1px solid ${fg}15` }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: `${primary}20` }}
                >
                  <Briefcase className="w-5 h-5" style={{ color: primary }} />
                </div>
                <div>
                  <p className="text-sm font-semibold" style={{ color: fg }}>
                    Confidential Consultation
                  </p>
                  <p className="text-xs opacity-50">
                    Attorney-client privilege protected
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
