"use client";

import type { BlockProps } from "@/blocks/types";
import { Check, X, Star, Zap } from "lucide-react";

export default function Hero246(props: BlockProps) {
  const {
    theme,
    heading = "Choose the Right Plan for Your Team",
    subheading = "Compare Our Products",
    bodyText = "Every plan includes core features. Upgrade for advanced analytics, priority support, and enterprise-grade security.",
    buttonText = "Start Free Trial",
    buttonUrl = "#",
    items = [
      {
        title: "Starter",
        description: "$19/mo",
        label: "5 users, 10GB storage, Email support, Basic analytics",
        value: "starter",
      },
      {
        title: "Professional",
        description: "$49/mo",
        label: "25 users, 100GB storage, Priority support, Advanced analytics, API access",
        value: "pro",
      },
      {
        title: "Enterprise",
        description: "$149/mo",
        label: "Unlimited users, 1TB storage, 24/7 support, Custom analytics, API access, SSO, Custom integrations",
        value: "enterprise",
      },
    ],
  } = props;

  const bgColor = theme?.background ?? "#ffffff";
  const fgColor = theme?.foreground ?? "#1e293b";
  const primaryColor = theme?.primary ?? "#6366f1";

  const tabId = "hero246-tab";

  return (
    <section
      className="relative min-h-screen flex items-center"
      style={{ backgroundColor: bgColor, color: fgColor }}
    >
      <style>{`
        .hero246-radio { display: none; }
        .hero246-panel { display: none; }
        ${items.map((_, i) => `
          .hero246-radio:nth-of-type(${i + 1}):checked ~ .hero246-content .hero246-panel:nth-child(${i + 1}) {
            display: block;
          }
          .hero246-radio:nth-of-type(${i + 1}):checked ~ .hero246-tabs .hero246-label:nth-child(${i + 1}) {
            background-color: ${primaryColor};
            color: #ffffff;
            box-shadow: 0 4px 20px ${primaryColor}40;
          }
        `).join("")}
      `}</style>

      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="text-center mb-12">
          <div
            className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider uppercase mb-4"
            style={{ color: primaryColor }}
          >
            <Zap className="w-4 h-4" />
            {subheading}
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight mb-4">
            {heading}
          </h1>
          <p className="text-base sm:text-lg opacity-60 max-w-2xl mx-auto">
            {bodyText}
          </p>
        </div>

        {/* Hidden radio inputs */}
        {items.map((_, i) => (
          <input
            key={i}
            type="radio"
            name={tabId}
            className="hero246-radio"
            id={`${tabId}-${i}`}
            defaultChecked={i === 1}
          />
        ))}

        {/* Tab labels */}
        <div className="hero246-tabs flex flex-wrap justify-center gap-2 mb-10">
          {items.map((item, i) => (
            <label
              key={i}
              htmlFor={`${tabId}-${i}`}
              className="hero246-label px-6 py-3 rounded-full font-semibold text-sm cursor-pointer transition-all border"
              style={{
                borderColor: `${fgColor}15`,
              }}
            >
              {item.title}
            </label>
          ))}
        </div>

        {/* Tab content panels */}
        <div className="hero246-content max-w-3xl mx-auto">
          {items.map((item, i) => {
            const features = (item.label ?? "").split(", ").filter(Boolean);
            const allFeatures = [
              "Users", "Storage", "Support", "Analytics", "API access", "SSO", "Custom integrations"
            ];
            return (
              <div key={i} className="hero246-panel">
                <div
                  className="rounded-2xl p-8 sm:p-10 border shadow-lg"
                  style={{ borderColor: `${primaryColor}20`, backgroundColor: `${primaryColor}03` }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Star className="w-5 h-5" style={{ color: primaryColor }} />
                        <h3 className="text-2xl font-bold">{item.title}</h3>
                      </div>
                      <p className="text-3xl font-extrabold" style={{ color: primaryColor }}>
                        {item.description}
                      </p>
                    </div>
                    <a
                      href={buttonUrl}
                      className="mt-4 sm:mt-0 px-8 py-3 rounded-xl font-semibold text-base transition-all hover:scale-105 text-center"
                      style={{ backgroundColor: primaryColor, color: "#ffffff" }}
                    >
                      {buttonText}
                    </a>
                  </div>

                  <div className="space-y-3">
                    {allFeatures.map((feature, fi) => {
                      const hasFeature = features.some(f =>
                        f.toLowerCase().includes(feature.toLowerCase())
                      );
                      const matchedFeature = features.find(f =>
                        f.toLowerCase().includes(feature.toLowerCase())
                      );
                      return (
                        <div
                          key={fi}
                          className="flex items-center gap-3 py-2 border-b"
                          style={{ borderColor: `${fgColor}08` }}
                        >
                          {hasFeature ? (
                            <Check className="w-5 h-5 flex-shrink-0" style={{ color: "#22c55e" }} />
                          ) : (
                            <X className="w-5 h-5 flex-shrink-0 opacity-30" />
                          )}
                          <span className={hasFeature ? "" : "opacity-40 line-through"}>
                            {matchedFeature ?? feature}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
