"use client";

import type { BlockProps } from "@/blocks/types";
import { ArrowRight, Quote } from "lucide-react";

export default function Hero308(props: BlockProps) {
  const {
    theme,
    heading = "Ship products your users will love",
    subheading = "Trusted by Industry Leaders",
    bodyText = "From idea to launch in days, not months. Our platform gives you everything you need to build, test, and scale.",
    buttonText = "Start Free Trial",
    buttonUrl = "#",
    imageUrl,
    items = [
      {
        title: "Sarah Chen",
        description: "This platform cut our development time by 70%. We shipped our MVP in two weeks and landed our first paying customers the same month.",
        label: "CTO, Northlight Labs",
      },
    ],
  } = props;

  const testimonial = items[0];

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#ffffff", color: theme?.foreground ?? "#171717" }}
      className="min-h-screen flex items-center px-5 py-24"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — Hero message */}
          <div>
            <span
              className="inline-block text-xs font-bold uppercase tracking-widest mb-6"
              style={{ color: theme?.primary ?? "#2563eb" }}
            >
              {subheading}
            </span>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black leading-tight mb-6">
              {heading}
            </h1>

            <p className="text-sm sm:text-base opacity-50 leading-relaxed mb-8 max-w-md">
              {bodyText}
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={buttonUrl}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold transition-transform hover:scale-105"
                style={{ backgroundColor: theme?.primary ?? "#2563eb", color: "#ffffff" }}
              >
                {buttonText}
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl text-sm font-bold border transition-colors hover:opacity-70"
                style={{ borderColor: `${theme?.foreground ?? "#171717"}15` }}
              >
                See Pricing
              </a>
            </div>
          </div>

          {/* Right — Testimonial card */}
          <div
            className="rounded-3xl p-8 sm:p-10 border relative"
            style={{
              borderColor: `${theme?.primary ?? "#2563eb"}15`,
              backgroundColor: `${theme?.primary ?? "#2563eb"}04`,
            }}
          >
            <Quote
              className="w-10 h-10 mb-6 opacity-20"
              style={{ color: theme?.primary ?? "#2563eb" }}
            />

            <blockquote className="text-lg sm:text-xl font-medium leading-relaxed mb-8 opacity-80">
              {testimonial?.description ?? "An incredible product that transformed how we work."}
            </blockquote>

            <div className="flex items-center gap-4">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold"
                style={{
                  backgroundColor: `${theme?.primary ?? "#2563eb"}15`,
                  color: theme?.primary ?? "#2563eb",
                }}
              >
                {(testimonial?.title ?? "SC").slice(0, 2).toUpperCase()}
              </div>
              <div>
                <div className="font-bold text-sm">{testimonial?.title ?? "Sarah Chen"}</div>
                <div className="text-xs opacity-40">{testimonial?.label ?? "CTO, Northlight Labs"}</div>
              </div>
            </div>

            {/* Star rating */}
            <div className="flex gap-1 mt-6">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: theme?.primary ?? "#2563eb" }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
