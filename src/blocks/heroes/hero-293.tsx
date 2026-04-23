"use client";

import type { BlockProps } from "@/blocks/types";
import { Phone, CheckCircle, ArrowRight, Star } from "lucide-react";

export default function Hero293(props: BlockProps) {
  const {
    theme,
    heading = "Strategic Advisory for High-Growth Companies",
    subheading = "McKinsey-Trained Consultants",
    bodyText = "We partner with CEOs and boards to solve their most complex business challenges. Over 15 years of experience guiding Fortune 500 companies through digital transformation.",
    buttonText = "Book a Free Consultation",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Revenue Optimization", description: "Unlock hidden revenue with data-driven strategies" },
      { title: "Market Expansion", description: "Enter new markets with confidence and precision" },
      { title: "Operational Excellence", description: "Streamline processes to boost margins by 30-60%" },
    ],
  } = props;

  const logos = ["Deloitte", "Stripe", "Shopify", "Notion", "Slack"];

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#fafaf8", color: theme?.foreground ?? "#1a1a1a" }}
      className="min-h-screen px-5 py-20 lg:py-28"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-5 gap-16 lg:gap-20">
          {/* Left column — main content */}
          <div className="lg:col-span-3">
            <div className="flex items-center gap-2 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-current"
                  style={{ color: theme?.primary ?? "#b8860b" }}
                />
              ))}
              <span className="text-xs opacity-50 ml-2">Rated 5.0 by 120+ executives</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.15] mb-6 tracking-tight">
              {heading}
            </h1>

            <p
              className="text-xs font-semibold uppercase tracking-[0.2em] mb-6"
              style={{ color: theme?.primary ?? "#b8860b" }}
            >
              {subheading}
            </p>

            <p className="text-base sm:text-lg opacity-60 leading-relaxed mb-10 max-w-xl">
              {bodyText}
            </p>

            <a
              href={buttonUrl}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-lg text-sm font-semibold transition-transform hover:scale-105"
              style={{
                backgroundColor: theme?.primary ?? "#b8860b",
                color: "#ffffff",
              }}
            >
              <Phone className="w-4 h-4" />
              {buttonText}
            </a>

            {/* Trusted by */}
            <div className="mt-16 pt-10 border-t" style={{ borderColor: `${theme?.foreground ?? "#1a1a1a"}10` }}>
              <p className="text-[10px] uppercase tracking-[0.25em] opacity-30 mb-6">Trusted by Leaders at</p>
              <div className="flex flex-wrap items-center gap-8">
                {logos.map((name, i) => (
                  <span key={i} className="text-sm font-semibold opacity-25 tracking-wide">
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right column — expertise */}
          <div className="lg:col-span-2">
            <div
              className="rounded-2xl p-6 sm:p-8 border"
              style={{
                backgroundColor: `${theme?.primary ?? "#b8860b"}06`,
                borderColor: `${theme?.primary ?? "#b8860b"}15`,
              }}
            >
              <h2 className="text-lg font-bold mb-6">Our Core Expertise</h2>

              <div className="space-y-6">
                {items.slice(0, 3).map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <CheckCircle
                      className="w-5 h-5 mt-0.5 flex-shrink-0"
                      style={{ color: theme?.primary ?? "#b8860b" }}
                    />
                    <div>
                      <h3 className="text-sm font-bold mb-1">{item.title}</h3>
                      <p className="text-sm opacity-50 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t" style={{ borderColor: `${theme?.foreground ?? "#1a1a1a"}10` }}>
                <a
                  href={buttonUrl}
                  className="flex items-center justify-between text-sm font-semibold group"
                  style={{ color: theme?.primary ?? "#b8860b" }}
                >
                  <span>Schedule a strategy call</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div
                className="rounded-xl p-5 text-center border"
                style={{
                  backgroundColor: `${theme?.primary ?? "#b8860b"}06`,
                  borderColor: `${theme?.primary ?? "#b8860b"}15`,
                }}
              >
                <div className="text-2xl font-bold mb-1" style={{ color: theme?.primary ?? "#b8860b" }}>$4.2B</div>
                <div className="text-[10px] uppercase tracking-widest opacity-40">Revenue Generated</div>
              </div>
              <div
                className="rounded-xl p-5 text-center border"
                style={{
                  backgroundColor: `${theme?.primary ?? "#b8860b"}06`,
                  borderColor: `${theme?.primary ?? "#b8860b"}15`,
                }}
              >
                <div className="text-2xl font-bold mb-1" style={{ color: theme?.primary ?? "#b8860b" }}>97%</div>
                <div className="text-[10px] uppercase tracking-widest opacity-40">Client Retention</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
