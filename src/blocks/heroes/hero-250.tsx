"use client";

import type { BlockProps } from "@/blocks/types";
import { ChevronDown, Rocket, CheckCircle2, ArrowRight } from "lucide-react";

export default function Hero250(props: BlockProps) {
  const {
    theme,
    heading = "Everything You Need to Launch",
    subheading = "The Complete Platform",
    bodyText = "Build, deploy, and scale your product with one unified platform. From landing pages to payment processing, analytics to customer support, we handle the infrastructure so you can focus on growth.",
    buttonText = "Get Started Free",
    buttonUrl = "#",
    secondaryButtonText = "Schedule a Demo",
    secondaryButtonUrl = "#",
    items = [
      {
        title: "What's included in the free plan?",
        description: "The free plan includes up to 3 projects, 1,000 monthly visitors, basic analytics, email support, and access to all core builder features. No credit card required to get started.",
      },
      {
        title: "Can I upgrade or downgrade at any time?",
        description: "Absolutely. You can switch plans at any time from your dashboard. When upgrading, you'll be charged a prorated amount. When downgrading, the new rate applies at your next billing cycle.",
      },
      {
        title: "Do you offer custom enterprise solutions?",
        description: "Yes. Our enterprise plan includes dedicated infrastructure, custom SLAs, SSO/SAML authentication, priority support, and a dedicated account manager. Contact our sales team for a tailored quote.",
      },
      {
        title: "How does the AI builder work?",
        description: "Simply describe what you want in plain language. Our AI analyzes your requirements, selects the best components, and assembles a complete, responsive website in under 60 seconds. You can then customize every detail.",
      },
      {
        title: "Is my data secure?",
        description: "We use enterprise-grade encryption at rest and in transit, SOC 2 Type II certified infrastructure, automatic backups, and GDPR-compliant data handling. Your data is always yours.",
      },
    ],
  } = props;

  const bgColor = theme?.background ?? "#ffffff";
  const fgColor = theme?.foreground ?? "#0f172a";
  const primaryColor = theme?.primary ?? "#2563eb";
  const accentColor = theme?.accent ?? "#7c3aed";

  const features = ["No credit card required", "14-day free trial", "Cancel anytime"];

  return (
    <section
      className="relative overflow-hidden"
      style={{ backgroundColor: bgColor, color: fgColor }}
    >
      <style>{`
        .hero250-toggle { display: none; }
        .hero250-answer {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.01s;
        }
        .hero250-chevron {
          transition: transform 0.01s;
        }
        ${items.map((_, i) => `
          .hero250-toggle-${i}:checked ~ .hero250-faq .hero250-item-${i} .hero250-answer {
            max-height: 500px;
          }
          .hero250-toggle-${i}:checked ~ .hero250-faq .hero250-item-${i} .hero250-chevron {
            transform: rotate(180deg);
          }
        `).join("")}
      `}</style>

      {/* Hidden checkbox inputs for accordion */}
      {items.map((_, i) => (
        <input key={i} type="checkbox" id={`hero250-q${i}`} className={`hero250-toggle hero250-toggle-${i}`} />
      ))}

      <div className="hero250-faq">
        {/* Hero section */}
        <div className="relative py-20 sm:py-28 lg:py-32">
          {/* Gradient accent */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full blur-[150px] opacity-15"
            style={{ background: `linear-gradient(135deg, ${primaryColor}, ${accentColor})` }}
          />

          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8 border"
              style={{
                borderColor: `${primaryColor}25`,
                backgroundColor: `${primaryColor}08`,
                color: primaryColor,
              }}
            >
              <Rocket className="w-4 h-4" />
              {subheading}
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight mb-6">
              {heading}
            </h1>

            <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-8 opacity-60 leading-relaxed">
              {bodyText}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <a
                href={buttonUrl}
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold text-base transition-all hover:scale-105 flex items-center justify-center gap-2"
                style={{
                  background: `linear-gradient(135deg, ${primaryColor}, ${accentColor})`,
                  color: "#ffffff",
                  boxShadow: `0 8px 30px ${primaryColor}30`,
                }}
              >
                {buttonText}
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href={secondaryButtonUrl}
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold text-base border transition-all hover:scale-105 text-center"
                style={{ borderColor: `${fgColor}15` }}
              >
                {secondaryButtonText}
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
              {features.map((feature, i) => (
                <div key={i} className="flex items-center gap-2 text-sm opacity-50">
                  <CheckCircle2 className="w-4 h-4" style={{ color: "#22c55e" }} />
                  {feature}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 sm:pb-28">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>

          <div className="space-y-3">
            {items.map((item, i) => (
              <div
                key={i}
                className={`hero250-item-${i} rounded-xl border overflow-hidden`}
                style={{
                  borderColor: `${fgColor}10`,
                  backgroundColor: `${fgColor}03`,
                }}
              >
                <label
                  htmlFor={`hero250-q${i}`}
                  className="flex items-center justify-between p-5 cursor-pointer"
                >
                  <span className="font-semibold text-base pr-4">{item.title}</span>
                  <ChevronDown
                    className="hero250-chevron w-5 h-5 flex-shrink-0 opacity-40"
                  />
                </label>
                <div className="hero250-answer">
                  <div className="px-5 pb-5 pt-0 text-sm opacity-60 leading-relaxed">
                    {item.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
