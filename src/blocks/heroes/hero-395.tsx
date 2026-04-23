"use client";

import type { BlockProps } from "@/blocks/types";
import { Wallet, TrendingUp, Shield, Lock, Coins, ArrowUpRight, Layers } from "lucide-react";

export default function Hero395(props: BlockProps) {
  const {
    theme,
    heading = "The Future of Decentralized Finance",
    subheading = "DeFi Protocol",
    bodyText = "Earn yield, swap tokens, and provide liquidity across multiple chains with institutional-grade security and zero custodial risk.",
    buttonText = "Connect Wallet",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Lending", description: "Earn up to 12.4% APY on stablecoin deposits", icon: "coins" },
      { title: "DEX", description: "Swap 500+ tokens with minimal slippage", icon: "swap" },
      { title: "Yield Farming", description: "Automated strategies across top protocols", icon: "trending" },
      { title: "Governance", description: "Vote on protocol upgrades with your tokens", icon: "shield" },
    ],
  } = props;

  const tvlStats = [
    { label: "Total Value Locked", value: "$2.4B" },
    { label: "24h Volume", value: "$184M" },
    { label: "Unique Wallets", value: "412K" },
    { label: "Chains Supported", value: "8" },
  ];

  const featureIcons = [Coins, TrendingUp, Layers, Shield];

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#0c0a1a", color: theme?.foreground ?? "#eee8ff" }}
      className="min-h-screen px-4 py-16 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Background gradient orb */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full opacity-20 blur-[120px] pointer-events-none"
        style={{ background: `radial-gradient(circle, ${theme?.primary ?? "#8b5cf6"}, transparent)` }}
      />

      <div className="mx-auto max-w-7xl relative z-10">
        {/* TVL Stats Bar */}
        <div
          className="rounded-2xl border p-4 sm:p-6 mb-14 grid grid-cols-2 sm:grid-cols-4 gap-4"
          style={{ borderColor: "rgba(255,255,255,0.06)", backgroundColor: "rgba(255,255,255,0.03)" }}
        >
          {tvlStats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl sm:text-3xl font-bold" style={{ color: theme?.primary ?? "#8b5cf6" }}>
                {stat.value}
              </p>
              <p className="text-xs opacity-40 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Main content */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium mb-6"
            style={{ backgroundColor: `${theme?.primary ?? "#8b5cf6"}20`, color: theme?.primary ?? "#8b5cf6" }}
          >
            <Coins className="h-4 w-4" />
            {subheading}
          </span>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6">
            {heading}
          </h1>
          <p className="text-lg opacity-50 mb-10">{bodyText}</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={buttonUrl}
              className="inline-flex items-center justify-center gap-2 rounded-2xl px-8 py-4 text-base font-semibold text-white transition-all hover:scale-105 shadow-lg"
              style={{
                backgroundColor: theme?.primary ?? "#8b5cf6",
                boxShadow: `0 8px 32px ${theme?.primary ?? "#8b5cf6"}40`,
              }}
            >
              <Wallet className="h-5 w-5" />
              {buttonText}
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 px-8 py-4 text-base font-semibold transition-opacity hover:opacity-80"
            >
              View Protocol Docs
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Protocol features */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((feature, i) => {
            const Icon = featureIcons[i % featureIcons.length];
            return (
              <div
                key={feature.title}
                className="group rounded-2xl border p-6 transition-all hover:border-opacity-30 hover:shadow-lg cursor-pointer"
                style={{
                  borderColor: "rgba(255,255,255,0.06)",
                  backgroundColor: "rgba(255,255,255,0.02)",
                }}
              >
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-xl mb-4"
                  style={{ backgroundColor: `${theme?.primary ?? "#8b5cf6"}15` }}
                >
                  <Icon className="h-6 w-6" style={{ color: theme?.primary ?? "#8b5cf6" }} />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm opacity-50 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Security badges */}
        <div className="mt-14 text-center">
          <div className="inline-flex items-center gap-6 rounded-2xl border border-white/5 px-6 py-4">
            <div className="flex items-center gap-2 text-sm opacity-50">
              <Shield className="h-4 w-4" style={{ color: theme?.primary ?? "#8b5cf6" }} />
              Audited by CertiK
            </div>
            <div className="h-4 w-px bg-white/10" />
            <div className="flex items-center gap-2 text-sm opacity-50">
              <Lock className="h-4 w-4" style={{ color: theme?.primary ?? "#8b5cf6" }} />
              Non-Custodial
            </div>
            <div className="h-4 w-px bg-white/10" />
            <div className="flex items-center gap-2 text-sm opacity-50">
              <Layers className="h-4 w-4" style={{ color: theme?.primary ?? "#8b5cf6" }} />
              Multi-Chain
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
