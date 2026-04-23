"use client";

import type { BlockProps } from "@/blocks/types";
import { Wallet, Shield, Blocks } from "lucide-react";

export default function Hero258(props: BlockProps) {
  const {
    theme,
    heading = "The Decentralized Future of Finance",
    subheading = "Web3 Infrastructure",
    bodyText = "Build, deploy, and scale decentralized applications with enterprise-grade infrastructure. Trustless, permissionless, and built for the next billion users.",
    buttonText = "Connect Wallet",
    buttonUrl = "#",
    secondaryButtonText = "Read Whitepaper",
    secondaryButtonUrl = "#",
    imageUrl,
    items = [
      { icon: "shield", title: "Secure by Design", description: "Audited smart contracts with zero exploits" },
      { icon: "blocks", title: "Cross-Chain", description: "Seamless bridging across 15+ networks" },
      { icon: "wallet", title: "Non-Custodial", description: "Your keys, your assets, your control" },
    ],
  } = props;

  const bg = theme?.background ?? "#0c0c1d";
  const fg = theme?.foreground ?? "#e8e8f0";
  const primary = theme?.primary ?? "#8b5cf6";

  const iconMap: Record<string, React.ReactNode> = {
    shield: <Shield className="w-5 h-5" />,
    blocks: <Blocks className="w-5 h-5" />,
    wallet: <Wallet className="w-5 h-5" />,
  };

  return (
    <section
      style={{ backgroundColor: bg, color: fg }}
      className="relative min-h-screen flex items-center px-4 py-20 sm:px-8 overflow-hidden"
    >
      {/* Background gradient mesh */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[120px] opacity-15"
        style={{ background: `linear-gradient(135deg, ${primary}, #ec4899)` }}
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-[100px] opacity-10"
        style={{ background: `linear-gradient(135deg, #06b6d4, ${primary})` }}
      />

      <div className="relative z-10 w-full max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-wide uppercase mb-8"
            style={{
              background: `linear-gradient(135deg, ${primary}20, #ec489920)`,
              border: `1px solid ${primary}30`,
              color: primary,
            }}
          >
            {subheading}
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 max-w-3xl mx-auto">
            <span
              style={{
                background: `linear-gradient(135deg, ${fg}, ${primary})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {heading}
            </span>
          </h1>

          <p className="text-base sm:text-lg leading-relaxed opacity-50 max-w-xl mx-auto mb-10 font-light">
            {bodyText}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={buttonUrl}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-sm font-semibold text-white transition-opacity hover:opacity-90"
              style={{
                background: `linear-gradient(135deg, ${primary}, #ec4899)`,
                boxShadow: `0 4px 20px ${primary}40`,
              }}
            >
              <Wallet className="w-4 h-4" />
              {buttonText}
            </a>
            <a
              href={secondaryButtonUrl as string}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-sm font-medium transition-colors hover:opacity-80"
              style={{
                border: `1px solid ${primary}30`,
                color: fg,
              }}
            >
              {secondaryButtonText as string}
            </a>
          </div>
        </div>

        {/* Feature cards */}
        {items.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {items.map((item, i) => (
              <div
                key={i}
                className="rounded-2xl p-6 sm:p-8 text-center"
                style={{
                  background: `rgba(255,255,255,0.03)`,
                  border: `1px solid rgba(255,255,255,0.06)`,
                }}
              >
                <div
                  className="inline-flex items-center justify-center w-10 h-10 rounded-xl mb-4"
                  style={{ backgroundColor: `${primary}15`, color: primary }}
                >
                  {iconMap[item.icon ?? ""] ?? <Blocks className="w-5 h-5" />}
                </div>
                <h3 className="text-sm font-semibold mb-2">{item.title}</h3>
                <p className="text-xs opacity-50 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
