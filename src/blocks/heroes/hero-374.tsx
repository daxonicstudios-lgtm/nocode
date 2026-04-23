"use client";

import type { BlockProps } from "@/blocks/types";
import { Gavel, Clock, Eye, ArrowRight, Shield, TrendingUp, Award } from "lucide-react";

export default function Hero374(props: BlockProps) {
  const {
    theme,
    heading = "Discover Rare & Extraordinary",
    subheading = "Prestige Auctions",
    bodyText = "Curated auctions featuring fine art, collectibles, vintage timepieces, and estate jewelry. Bid with confidence — every lot authenticated by our expert panel.",
    buttonText = "Place a Bid",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "1967 Omega Speedmaster", description: "Pre-Moon, cal. 321 movement", value: "$18,500", label: "Lot 042" },
      { title: "Basquiat Original Sketch", description: "Provenance verified, 1983", value: "$124,000", label: "Lot 043" },
      { title: "Ming Dynasty Vase", description: "Blue and white porcelain, 15th century", value: "$67,300", label: "Lot 044" },
    ],
  } = props;

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#1a1510", color: theme?.foreground ?? "#f5f0e8" }}
      className="min-h-screen px-5 py-16 sm:py-24 flex items-center relative overflow-hidden"
    >
      {/* Gold accent glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full blur-[200px] opacity-10"
        style={{ backgroundColor: theme?.primary ?? "#c9a84c" }}
      />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left */}
          <div>
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-sm text-xs font-bold uppercase tracking-[0.2em] mb-6 border"
              style={{ borderColor: `${theme?.primary ?? "#c9a84c"}40`, color: theme?.primary ?? "#c9a84c" }}
            >
              <Gavel className="w-3.5 h-3.5" />
              {subheading}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold leading-[1.1] mb-6 tracking-tight">
              {heading}
            </h1>

            <p className="text-base sm:text-lg opacity-50 leading-relaxed mb-8 max-w-lg font-light">
              {bodyText}
            </p>

            {/* Live auction timer */}
            <div
              className="p-5 rounded-xl border mb-8"
              style={{ borderColor: `${theme?.primary ?? "#c9a84c"}20`, backgroundColor: `${theme?.primary ?? "#c9a84c"}06` }}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs uppercase tracking-widest opacity-40 font-bold">Live Auction Ends In</span>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: "#ef4444" }} />
                  <span className="text-xs font-bold" style={{ color: "#ef4444" }}>LIVE</span>
                </div>
              </div>
              <div className="flex gap-4">
                {[
                  { val: "02", unit: "Days" },
                  { val: "14", unit: "Hours" },
                  { val: "37", unit: "Min" },
                  { val: "52", unit: "Sec" },
                ].map((t, i) => (
                  <div key={i} className="text-center">
                    <div
                      className="text-2xl sm:text-3xl font-black font-mono px-3 py-2 rounded-lg"
                      style={{ backgroundColor: `${theme?.primary ?? "#c9a84c"}10`, color: theme?.primary ?? "#c9a84c" }}
                    >
                      {t.val}
                    </div>
                    <div className="text-[9px] uppercase tracking-wider opacity-30 mt-1">{t.unit}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href={buttonUrl}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold tracking-wide uppercase transition-transform hover:scale-105"
                style={{ backgroundColor: theme?.primary ?? "#c9a84c", color: "#1a1510" }}
              >
                <Gavel className="w-4 h-4" />
                {buttonText}
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold border tracking-wide uppercase"
                style={{ borderColor: `${theme?.primary ?? "#c9a84c"}40`, color: theme?.primary ?? "#c9a84c" }}
              >
                View Catalog
              </a>
            </div>

            <div className="flex items-center gap-6 text-xs opacity-40">
              <span className="flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5" />
                Authenticated Lots
              </span>
              <span className="flex items-center gap-1.5">
                <Eye className="w-3.5 h-3.5" />
                2,400 watching
              </span>
            </div>
          </div>

          {/* Right — Featured lots */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] opacity-30 mb-4 flex items-center gap-2">
              <Award className="w-3.5 h-3.5" />
              Featured Lots
            </h3>

            {imageUrl && (
              <div className="rounded-xl overflow-hidden mb-4 border" style={{ borderColor: `${theme?.primary ?? "#c9a84c"}15` }}>
                <img src={imageUrl} alt="Featured lot" className="w-full h-48 object-cover" />
              </div>
            )}

            <div className="space-y-3">
              {items.slice(0, 3).map((lot, i) => (
                <div
                  key={i}
                  className="group p-5 rounded-xl border transition-all hover:shadow-lg cursor-pointer"
                  style={{
                    borderColor: `${theme?.primary ?? "#c9a84c"}15`,
                    backgroundColor: `${theme?.primary ?? "#c9a84c"}05`,
                  }}
                >
                  <div className="flex items-start justify-between mb-2">
                    <span
                      className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded"
                      style={{ backgroundColor: `${theme?.primary ?? "#c9a84c"}12`, color: theme?.primary ?? "#c9a84c" }}
                    >
                      {lot.label}
                    </span>
                    <div className="flex items-center gap-1 text-xs opacity-40">
                      <Eye className="w-3 h-3" />
                      {(320 + i * 47).toLocaleString()}
                    </div>
                  </div>
                  <div className="font-bold text-base mb-1">{lot.title}</div>
                  <div className="text-xs opacity-40 mb-3">{lot.description}</div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-[10px] uppercase tracking-wider opacity-30">Current Bid</div>
                      <div className="text-xl font-black" style={{ color: theme?.primary ?? "#c9a84c" }}>
                        {lot.value}
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-xs" style={{ color: theme?.primary ?? "#c9a84c" }}>
                      <TrendingUp className="w-3.5 h-3.5" />
                      <span className="font-bold">{12 + i * 3} bids</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
