"use client";

import type { BlockProps } from "@/blocks/types";
import {
  CreditCard,
  Send,
  PiggyBank,
  TrendingUp,
  Shield,
  Globe,
  Smartphone,
  ArrowRight,
  Check,
} from "lucide-react";

export default function Hero499(props: BlockProps) {
  const {
    theme,
    heading = "Banking That Moves at Your Speed",
    subheading = "NovaPay",
    bodyText = "No fees. No branches. No nonsense. A modern banking experience with instant transfers, smart savings, and a card that earns you more.",
    buttonText = "Join the Waitlist",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Instant Transfers", description: "Send money in under 3 seconds", icon: "send" },
      { title: "Smart Savings", description: "Round-ups and auto-save vaults", icon: "piggy" },
      { title: "Zero Fees", description: "No monthly, ATM, or FX fees", icon: "shield" },
      { title: "Global Spending", description: "150+ currencies at real rates", icon: "globe" },
    ],
  } = props;

  const iconMap: Record<string, React.ReactNode> = {
    send: <Send className="w-5 h-5" />,
    piggy: <PiggyBank className="w-5 h-5" />,
    shield: <Shield className="w-5 h-5" />,
    globe: <Globe className="w-5 h-5" />,
  };

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#09090b", color: theme?.foreground ?? "#fafafa" }}
      className="min-h-screen relative overflow-hidden"
    >
      {/* Subtle gradient */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full blur-[160px] opacity-15"
        style={{ backgroundColor: theme?.primary ?? "#6d28d9" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: theme?.primary ?? "#6d28d9" }}
              >
                <Smartphone className="w-4 h-4 text-white" />
              </div>
              <span className="text-sm font-bold tracking-wide">{subheading}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              {heading}
            </h1>

            <p className="text-base sm:text-lg opacity-50 leading-relaxed mb-8 max-w-lg">
              {bodyText}
            </p>

            {/* Waitlist form */}
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <div className="flex-1 flex items-center gap-2 bg-white/10 rounded-xl px-4 py-3 border border-white/10">
                <span className="text-sm opacity-30">@</span>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-transparent text-sm outline-none placeholder:opacity-40"
                  style={{ color: theme?.foreground ?? "#fafafa" }}
                  readOnly
                />
              </div>
              <a
                href={buttonUrl}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-white font-semibold text-sm transition-transform hover:scale-105 shrink-0"
                style={{ backgroundColor: theme?.primary ?? "#6d28d9" }}
              >
                {buttonText}
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-xs opacity-40">
              {["No credit check", "Setup in 2 minutes", "Cancel anytime"].map((note) => (
                <span key={note} className="flex items-center gap-1">
                  <Check className="w-3 h-3" style={{ color: theme?.primary ?? "#6d28d9" }} />
                  {note}
                </span>
              ))}
            </div>
          </div>

          {/* Right — Card + features */}
          <div className="space-y-5">
            {/* Card showcase */}
            <div
              className="rounded-2xl p-6 sm:p-8 relative overflow-hidden"
              style={{
                background: `linear-gradient(135deg, ${theme?.primary ?? "#6d28d9"}, ${theme?.accent ?? "#4f46e5"})`,
              }}
            >
              <div className="flex items-start justify-between mb-12">
                <span className="text-white text-lg font-bold tracking-wider">{subheading}</span>
                <CreditCard className="w-8 h-8 text-white/60" />
              </div>
              <div className="text-white/80 text-sm tracking-[0.2em] mb-6 font-mono">
                **** **** **** 4921
              </div>
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-[10px] text-white/40 uppercase">Cardholder</p>
                  <p className="text-sm text-white font-medium">Your Name Here</p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] text-white/40 uppercase">Expires</p>
                  <p className="text-sm text-white font-medium">12/28</p>
                </div>
              </div>
              {/* Decorative circles */}
              <div className="absolute -right-8 -bottom-8 w-32 h-32 rounded-full border border-white/10" />
              <div className="absolute -right-4 -bottom-4 w-24 h-24 rounded-full border border-white/10" />
            </div>

            {/* Feature list */}
            <div className="grid grid-cols-2 gap-3">
              {items.map((item, i) => (
                <div
                  key={i}
                  className="bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-colors"
                >
                  <div className="mb-2" style={{ color: theme?.primary ?? "#6d28d9" }}>
                    {iconMap[item.icon ?? "send"]}
                  </div>
                  <p className="text-sm font-semibold mb-1">{item.title}</p>
                  <p className="text-xs opacity-40">{item.description}</p>
                </div>
              ))}
            </div>

            {/* Growth stat */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center gap-4">
              <TrendingUp className="w-8 h-8" style={{ color: theme?.primary ?? "#6d28d9" }} />
              <div>
                <p className="text-sm font-semibold">2.4M+ on the waitlist</p>
                <p className="text-xs opacity-40">Join the movement redefining personal finance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
