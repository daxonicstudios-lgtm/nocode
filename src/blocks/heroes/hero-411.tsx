"use client";

import type { BlockProps } from "@/blocks/types";
import { Newspaper, Clock, TrendingUp, ArrowRight, BookOpen } from "lucide-react";

export default function Hero411(props: BlockProps) {
  const {
    theme,
    heading = "Revolutionary AI Platform Transforms How Businesses Operate Worldwide",
    subheading = "BREAKING NEWS",
    bodyText = "A groundbreaking new platform is empowering companies across 40 countries to automate workflows, reduce overhead by 60%, and scale operations faster than ever before. Industry analysts call it the most significant shift in enterprise technology this decade.",
    buttonText = "Read Full Story",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Market Impact", description: "Stock prices of early adopters surged 34% in the first quarter after implementation, signaling strong investor confidence in the platform's potential." },
      { title: "Expert Analysis", description: "Leading technology researchers predict this category will grow to a $200B market by 2028, with adoption rates doubling year over year." },
      { title: "User Spotlight", description: "A Lagos-based logistics startup credits the platform for cutting delivery times in half and expanding to three new cities within six months." },
    ],
  } = props;

  const today = new Date();
  const dateStr = today.toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" });

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#fefcf3", color: theme?.foreground ?? "#1a1a1a" }}
      className="min-h-screen px-4 py-8 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        {/* Masthead */}
        <div className="text-center border-b-4 border-double pb-4 mb-2" style={{ borderColor: theme?.foreground ?? "#1a1a1a" }}>
          <div className="flex items-center justify-center gap-2 mb-2">
            <Newspaper className="h-5 w-5 opacity-60" />
            <span className="text-xs uppercase tracking-[0.3em] opacity-50">The Innovation Tribune</span>
            <Newspaper className="h-5 w-5 opacity-60" />
          </div>
          <h2 className="text-sm opacity-40">{dateStr} — Vol. CXII, No. 847</h2>
        </div>

        <div className="border-b pb-1 mb-6 flex justify-between text-xs opacity-40 uppercase tracking-wider" style={{ borderColor: theme?.border ?? "#d4c9a8" }}>
          <span>Technology</span>
          <span>Special Edition</span>
          <span className="hidden sm:inline">Final Edition</span>
        </div>

        {/* Headline */}
        <div className="text-center mb-8">
          <span
            className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 mb-4"
            style={{ backgroundColor: theme?.primary ?? "#b91c1c", color: "#fff" }}
          >
            {subheading}
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-black leading-tight tracking-tight mb-4">
            {heading}
          </h1>
          <div className="flex items-center justify-center gap-2 text-sm opacity-50">
            <Clock className="h-3.5 w-3.5" />
            <span>5 min read</span>
            <span className="mx-2">|</span>
            <span>By Editorial Staff</span>
          </div>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
          {/* Main story column */}
          <div className="lg:col-span-2">
            {/* Image */}
            {imageUrl ? (
              <img src={imageUrl} alt="" className="w-full h-64 sm:h-80 object-cover mb-4" />
            ) : (
              <div
                className="w-full h-64 sm:h-80 mb-4 flex items-center justify-center"
                style={{ backgroundColor: theme?.muted ?? "#f0ead6" }}
              >
                <TrendingUp className="h-16 w-16 opacity-20" />
              </div>
            )}
            <p className="text-xs uppercase tracking-wider opacity-40 mb-3">Photo: Platform headquarters in San Francisco</p>

            <p className="text-lg leading-relaxed first-letter:text-5xl first-letter:font-bold first-letter:float-left first-letter:mr-2 first-letter:leading-none mb-6" style={{ fontFamily: "Georgia, serif" }}>
              {bodyText}
            </p>

            <a
              href={buttonUrl}
              className="inline-flex items-center gap-2 font-semibold text-sm uppercase tracking-wider hover:opacity-70 transition-opacity"
              style={{ color: theme?.primary ?? "#b91c1c" }}
            >
              {buttonText}
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          {/* Sidebar columns */}
          <div className="space-y-6 border-l-0 lg:border-l lg:pl-8" style={{ borderColor: theme?.border ?? "#d4c9a8" }}>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest opacity-60 mb-2">
              <BookOpen className="h-4 w-4" />
              Related Stories
            </div>
            {items.map((item, i) => (
              <div
                key={i}
                className="pb-6 border-b last:border-b-0"
                style={{ borderColor: theme?.border ?? "#d4c9a8" }}
              >
                <h3 className="text-lg font-bold mb-2 font-serif">{item.title}</h3>
                <p className="text-sm opacity-60 leading-relaxed">{item.description}</p>
              </div>
            ))}

            {/* Pull quote */}
            <div
              className="border-l-4 pl-4 py-2 italic opacity-80"
              style={{ borderColor: theme?.primary ?? "#b91c1c", fontFamily: "Georgia, serif" }}
            >
              &ldquo;This is a once-in-a-generation technology shift. Every business needs to pay attention.&rdquo;
              <span className="block text-xs mt-2 not-italic opacity-50">— Dr. Sarah Chen, Tech Analyst</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
