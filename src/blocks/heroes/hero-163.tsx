import type { BlockProps } from "@/blocks/types";
import { Building, FileCheck, ArrowRight, Shield, CheckCircle } from "lucide-react";

export default function Hero163(props: BlockProps) {
  const {
    theme,
    heading = "Protect Your Investment With Expert Real Estate Legal Counsel",
    subheading = "Closing deals with confidence since 1995",
    bodyText = "From residential purchases to complex commercial transactions, our real estate attorneys ensure every contract, title, and closing protects your interests. We handle due diligence so you can focus on the deal.",
    buttonText = "Get Legal Advice",
    buttonUrl = "#",
    secondaryButtonText = "View Services",
    secondaryButtonUrl = "#",
    items = [
      { title: "Residential Closings", description: "Smooth transactions from contract to keys" },
      { title: "Commercial Leases", description: "Negotiate terms that protect your business" },
      { title: "Title Review", description: "Uncover and resolve title issues" },
      { title: "Zoning & Land Use", description: "Navigate regulations and approvals" },
      { title: "Construction Law", description: "Contracts, disputes, and compliance" },
      { title: "Landlord-Tenant", description: "Rights and obligations for both parties" },
    ],
  } = props;

  const bg = theme?.background ?? "#ffffff";
  const fg = theme?.foreground ?? "#1a1a2e";
  const primary = theme?.primary ?? "#16653a";
  const accent = theme?.accent ?? "#22c55e";

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: bg, color: fg }}
    >
      {/* Top accent bar */}
      <div
        className="absolute top-0 left-0 right-0 h-1"
        style={{ backgroundColor: primary }}
      />

      {/* Subtle architectural grid in background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `linear-gradient(${fg} 1px, transparent 1px), linear-gradient(90deg, ${fg} 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-24 md:py-32">
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Building className="w-6 h-6" style={{ color: primary }} />
            <div
              className="h-px w-10"
              style={{ backgroundColor: `${primary}40` }}
            />
            <span
              className="text-sm font-semibold tracking-widest uppercase"
              style={{ color: primary }}
            >
              Real Estate Law
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-5">
            {heading}
          </h1>

          <p className="text-base sm:text-lg opacity-55 mb-4">
            {subheading}
          </p>

          <p className="text-base opacity-40 max-w-xl mb-10 leading-relaxed">
            {bodyText}
          </p>

          <div className="flex flex-col sm:flex-row items-start gap-4">
            <a
              href={buttonUrl}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-lg text-base font-semibold transition-transform hover:scale-105"
              style={{ backgroundColor: primary, color: "#ffffff" }}
            >
              <FileCheck className="w-5 h-5" />
              {buttonText}
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href={secondaryButtonUrl}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg text-base font-medium border transition-colors hover:opacity-80"
              style={{ borderColor: `${fg}20`, color: fg }}
            >
              {secondaryButtonText}
            </a>
          </div>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((item, i) => (
            <div
              key={i}
              className="p-5 rounded-lg flex items-start gap-4 group transition-all hover:shadow-sm"
              style={{
                backgroundColor: `${fg}03`,
                border: `1px solid ${fg}08`,
              }}
            >
              <CheckCircle
                className="w-5 h-5 flex-shrink-0 mt-0.5"
                style={{ color: accent }}
              />
              <div>
                <h3 className="text-sm font-bold mb-1">{item.title}</h3>
                <p className="text-xs opacity-45 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust bar */}
        <div
          className="mt-12 pt-8 flex flex-wrap items-center gap-6"
          style={{ borderTop: `1px solid ${fg}10` }}
        >
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4" style={{ color: primary }} />
            <span className="text-xs font-semibold opacity-50">
              Licensed in All 50 States
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Building className="w-4 h-4" style={{ color: primary }} />
            <span className="text-xs font-semibold opacity-50">
              10,000+ Transactions Closed
            </span>
          </div>
          <div className="flex items-center gap-2">
            <FileCheck className="w-4 h-4" style={{ color: primary }} />
            <span className="text-xs font-semibold opacity-50">
              AV Rated by Martindale-Hubbell
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
