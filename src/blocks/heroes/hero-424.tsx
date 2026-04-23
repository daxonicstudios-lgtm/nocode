"use client";

import type { BlockProps } from "@/blocks/types";
import { ChevronDown, Sparkles } from "lucide-react";
import { useState } from "react";

export default function Hero424(props: BlockProps) {
  const {
    theme,
    heading = "Everything you need to know",
    subheading = "Explore what makes our platform the choice of 30,000+ growing businesses worldwide.",
    bodyText,
    buttonText = "Get Started",
    buttonUrl = "#",
    imageUrl,
    items = [
      {
        title: "What makes this different?",
        description: "Unlike traditional tools that bolt features on as afterthoughts, our platform was built from the ground up as a unified system. Every feature works together — analytics feed into automation, collaboration powers your workflows, and AI assists at every step.",
      },
      {
        title: "How fast can I get started?",
        description: "Most teams are fully set up in under 15 minutes. Import your existing data, connect your tools, and invite your team. Our guided onboarding walks you through every step, and our support team is available 24/7 if you need help.",
      },
      {
        title: "Is my data secure?",
        description: "We take security seriously. SOC 2 Type II certified, GDPR compliant, with end-to-end encryption and daily backups. Your data is stored in ISO 27001 certified data centers across three continents with 99.99% uptime.",
      },
      {
        title: "What about integrations?",
        description: "Connect with 200+ tools including Slack, Notion, GitHub, Figma, Salesforce, HubSpot, and more. Our open API lets developers build custom integrations, and our Zapier connector opens up thousands more possibilities.",
      },
    ],
  } = props;

  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
      className="min-h-screen flex items-center px-4 py-16 sm:py-20"
    >
      <div className="max-w-5xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left column */}
        <div>
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium mb-6"
            style={{
              backgroundColor: theme?.primary ? `${theme.primary}15` : "rgba(16,185,129,0.1)",
              color: theme?.primary ?? "#10b981",
            }}
          >
            <Sparkles className="w-4 h-4" />
            Learn More
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            {heading}
          </h1>
          <p className="text-base sm:text-lg opacity-70 mb-8">
            {subheading}
          </p>

          <a
            href={buttonUrl}
            className="inline-flex items-center gap-2 px-7 py-3 rounded-xl font-semibold text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: theme?.primary ?? "#10b981" }}
          >
            {buttonText}
          </a>
        </div>

        {/* Right column — Accordion */}
        <div className="space-y-3">
          {items.map((item, i) => {
            const isOpen = i === openIndex;
            return (
              <div
                key={i}
                className="rounded-xl border border-current/5 overflow-hidden transition-all"
                style={
                  isOpen
                    ? { backgroundColor: theme?.primary ? `${theme.primary}08` : "rgba(16,185,129,0.04)" }
                    : {}
                }
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <div className="flex items-center gap-3">
                    <span
                      className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0"
                      style={{
                        backgroundColor: isOpen ? (theme?.primary ?? "#10b981") : (theme?.foreground ? `${theme.foreground}10` : "rgba(0,0,0,0.06)"),
                        color: isOpen ? "#fff" : "inherit",
                      }}
                    >
                      {i + 1}
                    </span>
                    <span className="font-semibold text-sm sm:text-base">{item.title}</span>
                  </div>
                  <ChevronDown
                    className="w-5 h-5 flex-shrink-0 transition-transform"
                    style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-0">
                    <div className="pl-10">
                      <p className="text-sm leading-relaxed opacity-70">
                        {item.description}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
