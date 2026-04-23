"use client";

import type { BlockProps } from "@/blocks/types";
import { Calculator, TrendingUp, FileText, PieChart, DollarSign, ArrowRight, CheckCircle, BarChart3 } from "lucide-react";

export default function Hero325(props: BlockProps) {
  const {
    theme,
    heading = "Numbers Tell a Story. We Make Yours a Success.",
    subheading = "Precision Accounting & Tax Services",
    bodyText = "From startups to established businesses, our CPAs deliver strategic financial guidance that saves you money and keeps you compliant. Tax season or year-round — we have you covered.",
    buttonText = "Free Consultation",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Tax Preparation", description: "Individual & business returns", icon: "file" },
      { title: "Bookkeeping", description: "Monthly reconciliation & reports", icon: "calculator" },
      { title: "Financial Planning", description: "Forecasting & growth strategy", icon: "trending" },
      { title: "Audit Support", description: "IRS representation & compliance", icon: "pie" },
    ],
  } = props;

  const iconMap: Record<string, typeof Calculator> = {
    file: FileText,
    calculator: Calculator,
    trending: TrendingUp,
    pie: PieChart,
  };

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#f8faf9", color: theme?.foreground ?? "#1a2332" }}
      className="min-h-screen px-5 py-16 lg:py-24"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Left content */}
          <div className="lg:col-span-3">
            <div className="flex items-center gap-2 mb-6">
              <BarChart3 className="w-5 h-5" style={{ color: theme?.primary ?? "#059669" }} />
              <span className="text-xs font-bold uppercase tracking-wider opacity-50">
                {subheading}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-5">
              {heading}
            </h1>

            <p className="text-base opacity-55 leading-relaxed mb-8 max-w-xl">
              {bodyText}
            </p>

            {/* Inline stats */}
            <div
              className="rounded-2xl p-6 mb-8 grid grid-cols-3 gap-6 text-center"
              style={{ backgroundColor: `${theme?.primary ?? "#059669"}06` }}
            >
              <div>
                <DollarSign className="w-5 h-5 mx-auto mb-2" style={{ color: theme?.primary ?? "#059669" }} />
                <div className="text-xl font-bold">$4.2M</div>
                <div className="text-[10px] opacity-40 uppercase tracking-wider">Tax Savings Secured</div>
              </div>
              <div>
                <FileText className="w-5 h-5 mx-auto mb-2" style={{ color: theme?.primary ?? "#059669" }} />
                <div className="text-xl font-bold">3,800+</div>
                <div className="text-[10px] opacity-40 uppercase tracking-wider">Returns Filed</div>
              </div>
              <div>
                <TrendingUp className="w-5 h-5 mx-auto mb-2" style={{ color: theme?.primary ?? "#059669" }} />
                <div className="text-xl font-bold">99.7%</div>
                <div className="text-[10px] opacity-40 uppercase tracking-wider">Accuracy Rate</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={buttonUrl}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold transition-transform hover:scale-105"
                style={{ backgroundColor: theme?.primary ?? "#059669", color: "#ffffff" }}
              >
                <Calculator className="w-4 h-4" />
                {buttonText}
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold border transition-colors hover:opacity-80"
                style={{ borderColor: `${theme?.foreground ?? "#1a2332"}12` }}
              >
                View Our Services
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right sidebar — services + CTA */}
          <div className="lg:col-span-2 space-y-4">
            {/* Service cards */}
            {items.slice(0, 4).map((item, i) => {
              const Icon = iconMap[item.icon ?? "calculator"] ?? Calculator;
              return (
                <div
                  key={i}
                  className="rounded-xl p-4 border flex items-start gap-4 cursor-pointer transition-colors hover:border-opacity-30"
                  style={{
                    borderColor: `${theme?.foreground ?? "#1a2332"}08`,
                    backgroundColor: `${theme?.foreground ?? "#1a2332"}02`,
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                    style={{ backgroundColor: `${theme?.primary ?? "#059669"}10` }}
                  >
                    <Icon className="w-5 h-5" style={{ color: theme?.primary ?? "#059669" }} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold mb-0.5">{item.title}</h3>
                    <p className="text-xs opacity-45">{item.description}</p>
                  </div>
                </div>
              );
            })}

            {/* Tax deadline reminder */}
            <div
              className="rounded-xl p-5 border-l-4"
              style={{
                borderColor: theme?.primary ?? "#059669",
                backgroundColor: `${theme?.primary ?? "#059669"}06`,
              }}
            >
              <p className="text-xs font-bold mb-1">Tax Deadline Reminder</p>
              <p className="text-[11px] opacity-50 leading-relaxed">
                The filing deadline is approaching. Schedule your consultation now to maximize deductions and avoid penalties.
              </p>
              <div className="flex items-center gap-1.5 mt-3">
                <CheckCircle className="w-3.5 h-3.5" style={{ color: theme?.primary ?? "#059669" }} />
                <span className="text-[10px] font-semibold" style={{ color: theme?.primary ?? "#059669" }}>
                  Free initial consultation
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
