"use client";

import type { BlockProps } from "@/blocks/types";
import { BookOpen, ArrowRight } from "lucide-react";

export default function Hero279(props: BlockProps) {
  const {
    theme,
    heading = "The Future of Work Is Already Here",
    subheading = "Issue No. 47 — Spring Edition",
    bodyText = "How forward-thinking companies are reimagining productivity, culture, and growth in an AI-driven landscape. Inside: exclusive interviews, data-backed insights, and the trends shaping tomorrow.",
    buttonText = "Read the Feature",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Remote Revolution", description: "Why distributed teams outperform offices", label: "CULTURE" },
      { title: "The AI Playbook", description: "Practical strategies for adoption", label: "TECHNOLOGY" },
      { title: "Scaling with Soul", description: "Growth without losing your identity", label: "LEADERSHIP" },
    ],
  } = props;

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#fffbeb", color: theme?.foreground ?? "#1c1917" }}
      className="relative min-h-screen overflow-hidden px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        {/* Masthead */}
        <div className="mb-12 border-b-2 pb-6" style={{ borderColor: theme?.foreground ?? "#1c1917" }}>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p
                className="mb-1 text-xs font-bold uppercase tracking-[0.3em]"
                style={{ color: theme?.primary ?? "#b45309" }}
              >
                {subheading}
              </p>
              <div className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" style={{ color: theme?.primary ?? "#b45309" }} />
                <span className="text-sm font-medium uppercase tracking-[0.15em] opacity-60">
                  The Insider Magazine
                </span>
              </div>
            </div>
            <p className="text-xs font-medium uppercase tracking-widest opacity-40">
              Est. 2019
            </p>
          </div>
        </div>

        {/* Main Editorial Layout */}
        <div className="grid gap-8 lg:grid-cols-12">
          {/* Lead Story */}
          <div className="lg:col-span-7">
            {/* Cover Image */}
            <div className="relative mb-6 overflow-hidden rounded-sm">
              {imageUrl ? (
                <img
                  src={imageUrl}
                  alt={heading}
                  className="aspect-[4/3] w-full object-cover"
                />
              ) : (
                <div
                  className="flex aspect-[4/3] items-center justify-center"
                  style={{
                    background: `linear-gradient(160deg, ${theme?.primary ?? "#b45309"}20, ${theme?.accent ?? "#d97706"}30)`,
                  }}
                >
                  <div
                    className="text-8xl font-black opacity-10 sm:text-9xl"
                    style={{ fontFamily: "Georgia, serif" }}
                  >
                    47
                  </div>
                </div>
              )}
              <div
                className="absolute left-4 top-4 rounded-sm px-3 py-1 text-xs font-bold uppercase tracking-widest text-white"
                style={{ backgroundColor: theme?.primary ?? "#b45309" }}
              >
                Cover Story
              </div>
            </div>

            <h1
              className="mb-4 text-3xl font-black leading-tight sm:text-4xl lg:text-5xl xl:text-6xl"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              {heading}
            </h1>
            <p
              className="mb-6 text-base leading-relaxed opacity-60 sm:text-lg"
              style={{ fontFamily: "Georgia, serif" }}
            >
              {bodyText}
            </p>
            <a
              href={buttonUrl}
              className="inline-flex items-center gap-2 border-b-2 pb-1 text-sm font-bold uppercase tracking-widest transition-opacity hover:opacity-70"
              style={{
                color: theme?.primary ?? "#b45309",
                borderColor: theme?.primary ?? "#b45309",
              }}
            >
              {buttonText}
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          {/* Sidebar Stories */}
          <div className="lg:col-span-5">
            <div
              className="mb-6 border-b pb-4 text-xs font-bold uppercase tracking-[0.2em]"
              style={{ borderColor: theme?.border ?? "#d6d3d1", color: theme?.primary ?? "#b45309" }}
            >
              Also in this issue
            </div>
            <div className="space-y-0">
              {items.map((item, i) => (
                <div
                  key={i}
                  className="group cursor-pointer border-b py-6 transition-colors"
                  style={{ borderColor: theme?.border ?? "#d6d3d1" }}
                >
                  <span
                    className="mb-2 inline-block text-[10px] font-bold uppercase tracking-[0.2em]"
                    style={{ color: theme?.primary ?? "#b45309" }}
                  >
                    {item.label}
                  </span>
                  <h3
                    className="mb-1 text-xl font-bold transition-opacity group-hover:opacity-70 sm:text-2xl"
                    style={{ fontFamily: "Georgia, serif" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm opacity-50" style={{ fontFamily: "Georgia, serif" }}>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Pull Quote */}
            <div className="mt-8 border-l-4 py-2 pl-6" style={{ borderColor: theme?.primary ?? "#b45309" }}>
              <p
                className="text-lg font-medium italic leading-relaxed opacity-70 sm:text-xl"
                style={{ fontFamily: "Georgia, serif" }}
              >
                &ldquo;The companies that will thrive are the ones brave enough to rethink everything.&rdquo;
              </p>
              <p className="mt-3 text-xs font-bold uppercase tracking-widest opacity-40">
                — Editorial Board
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
