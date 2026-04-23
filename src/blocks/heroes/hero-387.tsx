"use client";

import type { BlockProps } from "@/blocks/types";
import { Calculator, TrendingUp, TrendingDown, Receipt, Wallet, ArrowRight, RefreshCw, PiggyBank } from "lucide-react";

export default function Hero387(props: BlockProps) {
  const {
    theme,
    heading = "Accounting That Runs Itself",
    subheading = "Smart Financial Software",
    bodyText = "Automate invoicing, expense tracking, and tax prep. Real-time financial dashboards give you clarity on every dollar, so you can focus on growing your business.",
    buttonText = "Start Free Trial",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Revenue", value: "$128,420", description: "+14.2% vs last month", icon: "up" },
      { title: "Expenses", value: "$42,180", description: "-3.8% vs last month", icon: "down" },
      { title: "Net Profit", value: "$86,240", description: "+22.1% vs last month", icon: "up" },
    ],
  } = props;

  const automationFeatures = [
    { icon: Receipt, label: "Auto-categorize expenses" },
    { icon: RefreshCw, label: "Recurring invoices" },
    { icon: PiggyBank, label: "Tax estimation" },
    { icon: Wallet, label: "Multi-currency support" },
  ];

  const transactions = [
    { name: "Stripe Payment", amount: "+$4,200.00", type: "income" },
    { name: "AWS Services", amount: "-$1,842.30", type: "expense" },
    { name: "Client Invoice #1042", amount: "+$8,500.00", type: "income" },
    { name: "Office Supplies", amount: "-$234.50", type: "expense" },
  ];

  const monthlyData = [42, 38, 55, 48, 62, 58, 72, 68, 78, 85, 80, 92];

  return (
    <section
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
      className="min-h-screen flex items-center"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div>
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium mb-6"
              style={{ backgroundColor: `${theme?.primary || "#059669"}12`, color: theme?.primary || "#059669" }}
            >
              <Calculator className="w-4 h-4" />
              {subheading}
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-5">
              {heading}
            </h1>

            <p className="text-lg opacity-60 mb-8 max-w-lg">
              {bodyText}
            </p>

            {/* Financial summary cards */}
            <div className="space-y-3 mb-8">
              {items.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-4 rounded-xl border"
                  style={{ borderColor: `${theme?.foreground || "#000"}08` }}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{
                        backgroundColor: item.icon === "up" ? "#10b98112" : "#ef444412",
                      }}
                    >
                      {item.icon === "up" ? (
                        <TrendingUp className="w-5 h-5" style={{ color: "#10b981" }} />
                      ) : (
                        <TrendingDown className="w-5 h-5" style={{ color: "#ef4444" }} />
                      )}
                    </div>
                    <div>
                      <div className="text-sm font-medium">{item.title}</div>
                      <div className="text-xs opacity-40">{item.description}</div>
                    </div>
                  </div>
                  <div className="text-lg font-bold">{item.value}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={buttonUrl}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-white font-semibold transition-transform hover:scale-105"
                style={{ backgroundColor: theme?.primary || "#059669" }}
              >
                {buttonText}
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right - Dashboard mockup */}
          <div className="space-y-4">
            {/* Revenue chart */}
            <div
              className="rounded-2xl border p-5 shadow-lg"
              style={{ borderColor: `${theme?.foreground || "#000"}08` }}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-semibold text-sm">Revenue Overview</span>
                <span className="text-xs opacity-40">2026</span>
              </div>

              {/* Line chart mockup */}
              <div className="relative h-32 mb-3">
                <svg viewBox="0 0 300 100" className="w-full h-full" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="hero387-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor={theme?.primary || "#059669"} stopOpacity="0.2" />
                      <stop offset="100%" stopColor={theme?.primary || "#059669"} stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path
                    d={`M0,${100 - monthlyData[0]} ${monthlyData.map((v, i) => `L${(i * 300) / 11},${100 - v}`).join(" ")} L300,100 L0,100 Z`}
                    fill="url(#hero387-grad)"
                  />
                  <polyline
                    points={monthlyData.map((v, i) => `${(i * 300) / 11},${100 - v}`).join(" ")}
                    fill="none"
                    stroke={theme?.primary || "#059669"}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {/* Transactions */}
              <div className="border-t pt-4 space-y-2" style={{ borderColor: `${theme?.foreground || "#000"}06` }}>
                <div className="text-xs font-medium opacity-50 mb-2">Recent Transactions</div>
                {transactions.map((tx, i) => (
                  <div key={i} className="flex items-center justify-between text-sm">
                    <span className="opacity-70">{tx.name}</span>
                    <span
                      className="font-semibold"
                      style={{ color: tx.type === "income" ? "#10b981" : "#ef4444" }}
                    >
                      {tx.amount}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Automation features */}
            <div className="grid grid-cols-2 gap-3">
              {automationFeatures.map((feat, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-3 rounded-xl border"
                  style={{ borderColor: `${theme?.foreground || "#000"}08` }}
                >
                  <feat.icon className="w-5 h-5 flex-shrink-0" style={{ color: theme?.primary || "#059669" }} />
                  <span className="text-sm font-medium">{feat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
