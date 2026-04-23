"use client";

import type { BlockProps } from "@/blocks/types";
import { Mail, ArrowRight, Users, TrendingUp, BookOpen, Sparkles, CheckCircle } from "lucide-react";

export default function Hero372(props: BlockProps) {
  const {
    theme,
    heading = "Ideas That Compound Weekly",
    subheading = "The Dispatch",
    bodyText = "A weekly newsletter for curious minds. Every Tuesday, get curated insights on technology, culture, and strategy — read by 48,000+ professionals who think long-term.",
    buttonText = "Subscribe Free",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "The Quiet Revolution in Edge Computing", description: "Why moving compute closer to users changes everything for the next decade of software.", label: "Mar 18" },
      { title: "Africa's Fintech Moment", description: "How mobile-first payment rails are leapfrogging legacy banking infrastructure.", label: "Mar 11" },
      { title: "Design Systems at Scale", description: "Lessons from building component libraries used by 200+ engineers daily.", label: "Mar 4" },
    ],
  } = props;

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#fafaf9", color: theme?.foreground ?? "#1c1917" }}
      className="min-h-screen px-5 py-16 sm:py-24 flex items-center relative overflow-hidden"
    >
      {/* Subtle accent glow */}
      <div
        className="absolute top-0 right-1/4 w-[500px] h-[300px] rounded-full blur-[180px] opacity-10"
        style={{ backgroundColor: theme?.primary ?? "#f59e0b" }}
      />

      <div className="max-w-5xl mx-auto w-full relative z-10">
        {/* Top badge */}
        <div className="text-center mb-12">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider mb-6"
            style={{ backgroundColor: `${theme?.primary ?? "#f59e0b"}12`, color: theme?.primary ?? "#f59e0b" }}
          >
            <Sparkles className="w-3.5 h-3.5" />
            {subheading}
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-[1.05] mb-6 tracking-tight max-w-3xl mx-auto">
            {heading}
          </h1>

          <p className="text-base sm:text-lg opacity-50 leading-relaxed mb-8 max-w-2xl mx-auto">
            {bodyText}
          </p>

          {/* Email CTA — primary focus */}
          <div className="max-w-md mx-auto mb-6">
            <div
              className="flex rounded-full overflow-hidden border-2 shadow-lg"
              style={{ borderColor: `${theme?.primary ?? "#f59e0b"}30` }}
            >
              <div className="flex items-center gap-2 pl-5 flex-1">
                <Mail className="w-4 h-4 opacity-30 shrink-0" />
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full py-3.5 text-sm bg-transparent outline-none placeholder:opacity-30"
                  style={{ color: theme?.foreground ?? "#1c1917" }}
                  readOnly
                />
              </div>
              <a
                href={buttonUrl}
                className="flex items-center gap-2 px-6 py-3.5 text-sm font-bold shrink-0 transition-transform hover:scale-105"
                style={{ backgroundColor: theme?.primary ?? "#f59e0b", color: "#ffffff" }}
              >
                {buttonText}
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            <div className="flex items-center justify-center gap-4 mt-3 text-xs opacity-40">
              <span className="flex items-center gap-1">
                <CheckCircle className="w-3 h-3" />
                Free forever
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle className="w-3 h-3" />
                No spam
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle className="w-3 h-3" />
                Unsubscribe anytime
              </span>
            </div>
          </div>

          {/* Subscriber count */}
          <div className="flex items-center justify-center gap-6 mb-12">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" style={{ color: theme?.primary ?? "#f59e0b" }} />
              <span className="text-sm font-bold">48,200+</span>
              <span className="text-xs opacity-40">subscribers</span>
            </div>
            <div className="w-px h-4 opacity-15" style={{ backgroundColor: theme?.foreground ?? "#1c1917" }} />
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4" style={{ color: theme?.primary ?? "#f59e0b" }} />
              <span className="text-sm font-bold">52%</span>
              <span className="text-xs opacity-40">open rate</span>
            </div>
          </div>
        </div>

        {/* Recent issues preview */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-widest opacity-30 mb-4 flex items-center gap-2">
            <BookOpen className="w-3.5 h-3.5" />
            Recent Issues
          </h3>
          <div className="space-y-3">
            {items.slice(0, 3).map((issue, i) => (
              <div
                key={i}
                className="group flex items-start gap-4 p-5 rounded-2xl border transition-all hover:shadow-md cursor-pointer"
                style={{
                  borderColor: `${theme?.primary ?? "#f59e0b"}10`,
                  backgroundColor: `${theme?.primary ?? "#f59e0b"}04`,
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 font-black text-sm"
                  style={{ backgroundColor: `${theme?.primary ?? "#f59e0b"}12`, color: theme?.primary ?? "#f59e0b" }}
                >
                  #{(i + 47).toString().padStart(2, "0")}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-bold text-sm sm:text-base mb-1 group-hover:underline">{issue.title}</div>
                  <div className="text-xs sm:text-sm opacity-40 line-clamp-1">{issue.description}</div>
                </div>
                <div className="text-xs opacity-30 shrink-0 pt-1">{issue.label}</div>
              </div>
            ))}
          </div>
        </div>

        {imageUrl && (
          <div className="mt-10 rounded-2xl overflow-hidden shadow-lg">
            <img src={imageUrl} alt="Newsletter preview" className="w-full h-56 object-cover" />
          </div>
        )}
      </div>
    </section>
  );
}
