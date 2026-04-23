"use client";

import type { BlockProps } from "@/blocks/types";
import { ChevronUp, ArrowRight, ExternalLink, Zap, Shield, Layers, Code, Users, MessageSquare } from "lucide-react";

export default function Hero420(props: BlockProps) {
  const {
    theme,
    heading = "BuildKit — The Developer Platform That Ships Products 10x Faster",
    subheading = "#1 Product of the Day",
    bodyText = "BuildKit gives engineering teams a complete toolkit for building, testing, and deploying applications. Loved by 3,000+ teams from startups to enterprises.",
    buttonText = "Try BuildKit Free",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "AI Code Generation", description: "Write production-ready code with context-aware AI that understands your codebase", icon: "code" },
      { title: "Instant Deployments", description: "Push to production in under 30 seconds with zero-downtime deploys", icon: "zap" },
      { title: "Built-in Security", description: "Automated vulnerability scanning and compliance checks on every commit", icon: "shield" },
      { title: "Modular Architecture", description: "Composable building blocks that scale from prototype to production", icon: "layers" },
    ],
  } = props;

  const featureIcons = [Code, Zap, Shield, Layers];

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#ffffff", color: theme?.foreground ?? "#1a1a1a" }}
      className="min-h-screen px-4 py-12 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-5xl">
        {/* Product Hunt-style upvote badge */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-10">
          {/* Upvote button */}
          <div
            className="flex flex-col items-center rounded-xl border-2 px-5 py-3 cursor-pointer hover:shadow-lg transition-shadow flex-shrink-0"
            style={{ borderColor: theme?.primary ?? "#ff6154" }}
          >
            <ChevronUp className="h-5 w-5" style={{ color: theme?.primary ?? "#ff6154" }} />
            <span className="text-lg font-black" style={{ color: theme?.primary ?? "#ff6154" }}>847</span>
          </div>

          <div>
            {/* Badge */}
            <div className="flex items-center gap-2 mb-2">
              <span
                className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold text-white"
                style={{ backgroundColor: theme?.primary ?? "#ff6154" }}
              >
                <Zap className="h-3 w-3" />
                {subheading}
              </span>
              <span className="text-xs opacity-30">on Product Hunt</span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black leading-tight">{heading}</h1>
          </div>
        </div>

        {/* Description + maker info */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <p className="text-base sm:text-lg opacity-60 leading-relaxed mb-6">{bodyText}</p>

            <div className="flex flex-wrap gap-3 mb-6">
              {["Developer Tools", "AI", "Productivity", "SaaS"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full px-3 py-1 text-xs font-medium border"
                  style={{ borderColor: theme?.border ?? "#e5e7eb" }}
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={buttonUrl}
                className="inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 font-bold text-white text-sm transition-transform hover:scale-105"
                style={{ backgroundColor: theme?.primary ?? "#ff6154" }}
              >
                {buttonText}
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 rounded-lg border px-6 py-3 font-semibold text-sm hover:opacity-70 transition-opacity"
                style={{ borderColor: theme?.border ?? "#e5e7eb" }}
              >
                <ExternalLink className="h-3.5 w-3.5" />
                Visit Website
              </a>
            </div>
          </div>

          {/* Makers card */}
          <div
            className="rounded-xl border p-5"
            style={{ borderColor: theme?.border ?? "#e5e7eb" }}
          >
            <h3 className="text-xs font-bold uppercase tracking-wider opacity-40 mb-4">Makers</h3>
            {[
              { name: "Alex Chen", role: "Founder & CEO" },
              { name: "Priya Sharma", role: "CTO" },
              { name: "David Okonkwo", role: "Head of Product" },
            ].map((maker, i) => (
              <div key={i} className="flex items-center gap-3 mb-3 last:mb-0">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-white"
                  style={{ backgroundColor: `${theme?.primary ?? "#ff6154"}${["dd", "aa", "77"][i]}` }}
                >
                  {maker.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <div className="text-sm font-semibold">{maker.name}</div>
                  <div className="text-xs opacity-40">{maker.role}</div>
                </div>
              </div>
            ))}

            <div className="border-t mt-4 pt-4" style={{ borderColor: theme?.border ?? "#e5e7eb" }}>
              <div className="flex items-center gap-2 text-xs opacity-40">
                <MessageSquare className="h-3.5 w-3.5" />
                <span>42 comments</span>
                <span className="mx-1">|</span>
                <Users className="h-3.5 w-3.5" />
                <span>3,200 users</span>
              </div>
            </div>
          </div>
        </div>

        {/* Feature highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {items.map((item, i) => {
            const Icon = featureIcons[i % featureIcons.length];
            return (
              <div
                key={i}
                className="rounded-xl border p-5 hover:shadow-md transition-shadow group"
                style={{ borderColor: theme?.border ?? "#e5e7eb" }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${theme?.primary ?? "#ff6154"}10` }}
                  >
                    <Icon className="h-5 w-5" style={{ color: theme?.primary ?? "#ff6154" }} />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm mb-1">{item.title}</h3>
                    <p className="text-xs opacity-50 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Social proof bar */}
        <div
          className="rounded-xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ backgroundColor: theme?.muted ?? "#fafafa" }}
        >
          <div className="flex items-center gap-4">
            <div className="flex -space-x-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full border-2 flex items-center justify-center text-[10px] font-bold text-white"
                  style={{
                    borderColor: theme?.background ?? "#ffffff",
                    backgroundColor: `${theme?.primary ?? "#ff6154"}${["ff", "cc", "99", "77", "55"][i]}`,
                  }}
                >
                  {String.fromCharCode(65 + i)}
                </div>
              ))}
            </div>
            <div>
              <div className="text-sm font-bold">Loved by 3,200+ developers</div>
              <div className="text-xs opacity-40">4.9/5 average rating</div>
            </div>
          </div>
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="w-4 h-4 rounded-sm"
                style={{ backgroundColor: theme?.primary ?? "#ff6154" }}
              />
            ))}
            <span className="text-xs font-bold ml-2" style={{ color: theme?.primary ?? "#ff6154" }}>4.9</span>
          </div>
        </div>
      </div>
    </section>
  );
}
