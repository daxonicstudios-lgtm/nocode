"use client";

import type { BlockProps } from "@/blocks/types";
import { TrendingUp, TrendingDown, ArrowUpRight, Shield, Wallet, ChevronRight } from "lucide-react";

export default function Hero318(props: BlockProps) {
  const {
    theme,
    heading = "Invest Smarter, Grow Faster",
    subheading = "Wealth Management Reimagined",
    bodyText = "AI-powered portfolio management that adapts to market conditions in real-time. Start building wealth with as little as $10.",
    buttonText = "Open Your Account",
    buttonUrl = "#",
    imageUrl,
    items = [],
  } = props;

  const primaryColor = theme?.primary || "#10b981";
  const bgColor = theme?.background || "#050a0e";
  const fgColor = theme?.foreground || "#e2e8f0";

  const tickers = items.length > 0 ? items : [
    { title: "AAPL", value: "+2.34%", description: "$178.52", label: "up" },
    { title: "MSFT", value: "+1.87%", description: "$412.30", label: "up" },
    { title: "GOOGL", value: "-0.42%", description: "$141.80", label: "down" },
    { title: "AMZN", value: "+3.15%", description: "$186.45", label: "up" },
    { title: "TSLA", value: "+0.92%", description: "$248.70", label: "up" },
  ];

  // Portfolio chart path points
  const chartPoints = [
    { x: 0, y: 80 }, { x: 8, y: 75 }, { x: 16, y: 70 }, { x: 24, y: 72 },
    { x: 32, y: 60 }, { x: 40, y: 55 }, { x: 48, y: 50 }, { x: 56, y: 45 },
    { x: 64, y: 48 }, { x: 72, y: 35 }, { x: 80, y: 30 }, { x: 88, y: 25 },
    { x: 96, y: 20 }, { x: 100, y: 15 },
  ];
  const linePath = chartPoints.map((p, i) => `${i === 0 ? "M" : "L"}${p.x} ${p.y}`).join(" ");
  const areaPath = `${linePath} L100 100 L0 100 Z`;

  return (
    <section
      style={{ backgroundColor: bgColor, color: fgColor }}
      className="relative min-h-screen flex flex-col overflow-hidden"
    >
      {/* Ticker bar */}
      <div
        className="border-b py-3 overflow-hidden"
        style={{ borderColor: `${fgColor}08` }}
      >
        <div className="flex items-center gap-8 px-4 sm:px-6 animate-marquee whitespace-nowrap">
          {[...tickers, ...tickers].map((ticker, i) => (
            <div key={i} className="inline-flex items-center gap-3 text-sm">
              <span className="font-bold opacity-80">{ticker.title}</span>
              <span className="opacity-40">{ticker.description}</span>
              <span
                className="flex items-center gap-0.5 font-semibold text-xs"
                style={{ color: ticker.label === "down" ? "#ef4444" : primaryColor }}
              >
                {ticker.label === "down" ? (
                  <TrendingDown className="w-3 h-3" />
                ) : (
                  <TrendingUp className="w-3 h-3" />
                )}
                {ticker.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1 flex items-center">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left content */}
            <div className="space-y-8">
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium border"
                style={{ borderColor: `${primaryColor}30`, color: primaryColor }}
              >
                <Shield className="w-3.5 h-3.5" />
                {subheading}
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
                {heading}
              </h1>

              <p className="text-base md:text-lg opacity-50 max-w-lg leading-relaxed">
                {bodyText}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={buttonUrl}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-bold text-white transition-opacity hover:opacity-90"
                  style={{ backgroundColor: primaryColor }}
                >
                  <Wallet className="w-4 h-4" />
                  {buttonText}
                </a>
                <button
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-semibold border transition-opacity hover:opacity-70"
                  style={{ borderColor: `${fgColor}15` }}
                >
                  Learn More
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-6 pt-2 text-xs opacity-40">
                <span className="flex items-center gap-1.5"><Shield className="w-3.5 h-3.5" /> Bank-grade security</span>
                <span className="flex items-center gap-1.5"><Shield className="w-3.5 h-3.5" /> SEC regulated</span>
                <span className="flex items-center gap-1.5"><Shield className="w-3.5 h-3.5" /> FDIC insured</span>
              </div>
            </div>

            {/* Right - portfolio card */}
            <div
              className="rounded-2xl border overflow-hidden"
              style={{ backgroundColor: `${fgColor}04`, borderColor: `${fgColor}08` }}
            >
              {/* Card header */}
              <div className="p-6 pb-0">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs opacity-40 font-medium">Portfolio Value</span>
                  <span className="text-xs font-semibold flex items-center gap-1" style={{ color: primaryColor }}>
                    <ArrowUpRight className="w-3 h-3" />
                    All Time
                  </span>
                </div>
                <div className="text-3xl font-bold tracking-tight">$48,256.80</div>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-sm font-semibold" style={{ color: primaryColor }}>+$12,340.50</span>
                  <span className="text-xs opacity-40">(+34.4%)</span>
                </div>
              </div>

              {/* Chart */}
              <div className="px-6 pt-4">
                <svg viewBox="0 0 100 100" className="w-full h-40" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="chartGrad318" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor={primaryColor} stopOpacity="0.3" />
                      <stop offset="100%" stopColor={primaryColor} stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path d={areaPath} fill="url(#chartGrad318)" />
                  <path d={linePath} fill="none" stroke={primaryColor} strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>

              {/* Holdings */}
              <div className="p-6 pt-4 space-y-3">
                <div className="text-xs font-semibold opacity-50 uppercase tracking-wider">Top Holdings</div>
                {tickers.slice(0, 3).map((t, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between py-2 border-b last:border-0"
                    style={{ borderColor: `${fgColor}06` }}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold"
                        style={{ backgroundColor: `${primaryColor}15`, color: primaryColor }}
                      >
                        {t.title?.substring(0, 2)}
                      </div>
                      <div>
                        <div className="text-sm font-semibold">{t.title}</div>
                        <div className="text-xs opacity-40">{t.description}</div>
                      </div>
                    </div>
                    <span
                      className="text-xs font-semibold"
                      style={{ color: t.label === "down" ? "#ef4444" : primaryColor }}
                    >
                      {t.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
