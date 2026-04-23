"use client";

import type { BlockProps } from "@/blocks/types";
import { Crown, Lock, ArrowRight, CheckCircle, Star, Users, Gem, Zap } from "lucide-react";

export default function Hero376(props: BlockProps) {
  const {
    theme,
    heading = "Where the Exceptional Gather",
    subheading = "The Inner Circle",
    bodyText = "An invitation-only membership for leaders, creators, and visionaries. Access exclusive events, private communities, and opportunities you won't find anywhere else.",
    buttonText = "Join the Waitlist",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Explorer", description: "Community access, monthly digest, member directory", value: "Free", label: "tier" },
      { title: "Insider", description: "Private events, curated introductions, resource library", value: "$49/mo", label: "tier" },
      { title: "Patron", description: "1-on-1 concierge, retreat invites, advisory board seat", value: "$199/mo", label: "tier" },
    ],
  } = props;

  const perks = [
    "Quarterly private retreats",
    "Vetted member introductions",
    "Exclusive deal flow access",
    "Priority event seating",
  ];

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#0a0a0f", color: theme?.foreground ?? "#ede9e3" }}
      className="min-h-screen px-5 py-16 sm:py-24 flex items-center relative overflow-hidden"
    >
      {/* Warm gold glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full blur-[250px] opacity-8"
        style={{ backgroundColor: theme?.primary ?? "#d4a853" }}
      />

      <div className="max-w-5xl mx-auto w-full relative z-10">
        <div className="text-center mb-14">
          {/* Exclusive badge */}
          <div
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm text-[10px] font-bold uppercase tracking-[0.3em] mb-8 border"
            style={{ borderColor: `${theme?.primary ?? "#d4a853"}40`, color: theme?.primary ?? "#d4a853" }}
          >
            <Crown className="w-3.5 h-3.5" />
            {subheading}
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif font-bold leading-[1.05] mb-6 tracking-tight">
            {heading}
          </h1>

          <p className="text-base sm:text-lg opacity-40 leading-relaxed mb-8 max-w-2xl mx-auto font-light">
            {bodyText}
          </p>

          {/* Waitlist CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a
              href={buttonUrl}
              className="inline-flex items-center gap-2 px-8 py-4 text-sm font-bold tracking-wider uppercase transition-transform hover:scale-105"
              style={{ backgroundColor: theme?.primary ?? "#d4a853", color: "#0a0a0f" }}
            >
              <Lock className="w-4 h-4" />
              {buttonText}
              <ArrowRight className="w-4 h-4" />
            </a>
            <div className="flex items-center gap-2 text-xs opacity-30">
              <Users className="w-3.5 h-3.5" />
              <span>1,247 on the waitlist</span>
            </div>
          </div>

          {/* Perks row */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {perks.map((perk, i) => (
              <span key={i} className="flex items-center gap-1.5 text-xs opacity-50">
                <CheckCircle className="w-3 h-3" style={{ color: theme?.primary ?? "#d4a853" }} />
                {perk}
              </span>
            ))}
          </div>
        </div>

        {imageUrl && (
          <div className="rounded-xl overflow-hidden mb-10 shadow-2xl max-w-2xl mx-auto">
            <img src={imageUrl} alt="Exclusive membership" className="w-full h-48 object-cover" />
          </div>
        )}

        {/* Tier comparison */}
        <div className="grid sm:grid-cols-3 gap-4">
          {items.slice(0, 3).map((tier, i) => {
            const isMiddle = i === 1;
            return (
              <div
                key={i}
                className="relative p-6 rounded-xl border transition-all hover:shadow-lg"
                style={{
                  borderColor: isMiddle ? `${theme?.primary ?? "#d4a853"}50` : `${theme?.primary ?? "#d4a853"}12`,
                  backgroundColor: isMiddle ? `${theme?.primary ?? "#d4a853"}08` : `${theme?.primary ?? "#d4a853"}03`,
                }}
              >
                {isMiddle && (
                  <div
                    className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-widest"
                    style={{ backgroundColor: theme?.primary ?? "#d4a853", color: "#0a0a0f" }}
                  >
                    Most Popular
                  </div>
                )}

                <div className="flex items-center gap-2 mb-3">
                  {i === 0 && <Star className="w-4 h-4" style={{ color: theme?.primary ?? "#d4a853" }} />}
                  {i === 1 && <Gem className="w-4 h-4" style={{ color: theme?.primary ?? "#d4a853" }} />}
                  {i === 2 && <Crown className="w-4 h-4" style={{ color: theme?.primary ?? "#d4a853" }} />}
                  <span className="font-bold text-sm uppercase tracking-wider">{tier.title}</span>
                </div>

                <div className="text-2xl font-black mb-3" style={{ color: theme?.primary ?? "#d4a853" }}>
                  {tier.value}
                </div>

                <p className="text-xs opacity-40 leading-relaxed mb-5">{tier.description}</p>

                <a
                  href={buttonUrl}
                  className="block text-center py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all hover:opacity-80 border"
                  style={{
                    borderColor: `${theme?.primary ?? "#d4a853"}${isMiddle ? "60" : "20"}`,
                    color: isMiddle ? "#0a0a0f" : theme?.primary ?? "#d4a853",
                    backgroundColor: isMiddle ? theme?.primary ?? "#d4a853" : "transparent",
                  }}
                >
                  {i === 0 ? "Get Started" : "Apply Now"}
                </a>
              </div>
            );
          })}
        </div>

        {/* Social proof */}
        <div className="mt-10 text-center">
          <div className="flex items-center justify-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-current" style={{ color: theme?.primary ?? "#d4a853" }} />
            ))}
          </div>
          <p className="text-xs opacity-30 italic">&quot;The connections I&apos;ve made here have been transformative for my career.&quot;</p>
          <p className="text-[10px] opacity-20 mt-1">— Founding Member, since 2023</p>
        </div>
      </div>
    </section>
  );
}
