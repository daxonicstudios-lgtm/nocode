"use client";

import type { BlockProps } from "@/blocks/types";
import { Mail, Send, BarChart2, Layout, CheckCircle2, ArrowRight, Sparkles } from "lucide-react";

export default function Hero384(props: BlockProps) {
  const {
    theme,
    heading = "Email Campaigns That Actually Convert",
    subheading = "Email Marketing Made Simple",
    bodyText = "Design beautiful emails, automate your sequences, and track every open and click. Achieve inbox placement rates that outperform the industry.",
    buttonText = "Send Your First Campaign",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Welcome Series", description: "5 emails, 68% open rate", label: "Active" },
      { title: "Product Launch", description: "3 emails, 42% click rate", label: "Draft" },
      { title: "Re-engagement", description: "4 emails, 23% conversion", label: "Active" },
    ],
  } = props;

  const deliverabilityStats = [
    { label: "Deliverability", value: "99.2%" },
    { label: "Avg. Open Rate", value: "34.8%" },
    { label: "Click Rate", value: "12.4%" },
    { label: "Unsubscribe", value: "0.08%" },
  ];

  return (
    <section
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
      className="min-h-screen flex items-center relative overflow-hidden"
    >
      {/* Subtle envelope pattern */}
      <div className="absolute top-10 right-10 opacity-[0.04]">
        <Mail className="w-72 h-72" />
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left content */}
          <div className="lg:col-span-5">
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium mb-6"
              style={{ backgroundColor: `${theme?.primary || "#ec4899"}10`, color: theme?.primary || "#ec4899" }}
            >
              <Send className="w-3.5 h-3.5" />
              {subheading}
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-5">
              {heading}
            </h1>

            <p className="text-base opacity-60 mb-8 leading-relaxed">
              {bodyText}
            </p>

            {/* Deliverability stats */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {deliverabilityStats.map((stat, i) => (
                <div
                  key={i}
                  className="p-3 rounded-lg border"
                  style={{ borderColor: `${theme?.foreground || "#000"}08` }}
                >
                  <div className="text-xl font-bold" style={{ color: i === 0 ? (theme?.primary || "#ec4899") : undefined }}>
                    {stat.value}
                  </div>
                  <div className="text-xs opacity-40 mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>

            <a
              href={buttonUrl}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-white font-semibold transition-transform hover:scale-105"
              style={{ backgroundColor: theme?.primary || "#ec4899" }}
            >
              {buttonText}
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Right - Campaign preview + Templates */}
          <div className="lg:col-span-7 space-y-4">
            {/* Email preview card */}
            <div
              className="rounded-2xl border p-5 shadow-lg"
              style={{ borderColor: `${theme?.foreground || "#000"}08` }}
            >
              <div className="flex items-center gap-3 mb-4 pb-4 border-b" style={{ borderColor: `${theme?.foreground || "#000"}08` }}>
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: `${theme?.primary || "#ec4899"}15` }}
                >
                  <Sparkles className="w-5 h-5" style={{ color: theme?.primary || "#ec4899" }} />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-semibold">Your Spring Collection is Here</div>
                  <div className="text-xs opacity-40">From: hello@yourbrand.com</div>
                </div>
                <span className="text-[10px] px-2 py-1 rounded-full font-medium" style={{ backgroundColor: `${theme?.primary || "#ec4899"}12`, color: theme?.primary || "#ec4899" }}>
                  Preview
                </span>
              </div>

              {/* Email body mockup */}
              <div className="space-y-3">
                <div
                  className="h-32 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: `${theme?.primary || "#ec4899"}08` }}
                >
                  {imageUrl ? (
                    <img src={imageUrl} alt="" className="w-full h-full object-cover rounded-lg" />
                  ) : (
                    <Layout className="w-8 h-8 opacity-20" />
                  )}
                </div>
                <div className="space-y-2 px-2">
                  <div className="h-3 rounded-full w-3/4 opacity-10" style={{ backgroundColor: theme?.foreground || "#000" }} />
                  <div className="h-3 rounded-full w-full opacity-10" style={{ backgroundColor: theme?.foreground || "#000" }} />
                  <div className="h-3 rounded-full w-5/6 opacity-10" style={{ backgroundColor: theme?.foreground || "#000" }} />
                </div>
                <div
                  className="inline-block px-5 py-2 rounded-lg text-white text-sm font-medium ml-2"
                  style={{ backgroundColor: theme?.primary || "#ec4899" }}
                >
                  Shop Now
                </div>
              </div>
            </div>

            {/* Campaign list */}
            <div className="grid sm:grid-cols-3 gap-3">
              {items.map((campaign, i) => (
                <div
                  key={i}
                  className="rounded-xl border p-4 transition-transform hover:scale-[1.02]"
                  style={{ borderColor: `${theme?.foreground || "#000"}08` }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <BarChart2 className="w-4 h-4 opacity-30" />
                    <span
                      className="text-[10px] px-2 py-0.5 rounded-full font-medium"
                      style={{
                        backgroundColor: campaign.label === "Active" ? "#10b98115" : `${theme?.foreground || "#000"}08`,
                        color: campaign.label === "Active" ? "#10b981" : undefined,
                      }}
                    >
                      {campaign.label}
                    </span>
                  </div>
                  <div className="text-sm font-semibold mb-1">{campaign.title}</div>
                  <div className="text-xs opacity-40">{campaign.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
