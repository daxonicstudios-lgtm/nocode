"use client";

import type { BlockProps } from "@/blocks/types";
import { Headphones, MessageCircle, Clock, CheckCircle, AlertCircle, ArrowRight, Zap, BarChart3 } from "lucide-react";

export default function Hero389(props: BlockProps) {
  const {
    theme,
    heading = "Delight Customers at Every Touchpoint",
    subheading = "Customer Support Platform",
    bodyText = "Unify tickets, live chat, and knowledge base in one powerful platform. Resolve issues faster with AI-powered suggestions and smart routing.",
    buttonText = "Try It Free",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Login page not loading after update", label: "High", value: "Open", description: "Sarah M. — 12 min ago" },
      { title: "How to export billing history?", label: "Medium", value: "In Progress", description: "David K. — 28 min ago" },
      { title: "Integration with Zapier broken", label: "High", value: "Open", description: "Lisa R. — 45 min ago" },
      { title: "Feature request: dark mode", label: "Low", value: "Pending", description: "Tom W. — 1 hr ago" },
    ],
  } = props;

  const responseStats = [
    { label: "First Response", value: "< 2 min", trend: "-34%" },
    { label: "Resolution Time", value: "4.2 hrs", trend: "-18%" },
    { label: "CSAT Score", value: "96.8%", trend: "+4.2%" },
    { label: "Tickets Today", value: "142", trend: "" },
  ];

  const priorityColors: Record<string, string> = {
    High: "#ef4444",
    Medium: "#f59e0b",
    Low: "#10b981",
  };

  const statusIcons: Record<string, typeof CheckCircle> = {
    Open: AlertCircle,
    "In Progress": Clock,
    Pending: Clock,
    Resolved: CheckCircle,
  };

  return (
    <section
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
      className="min-h-screen flex items-center"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        {/* Top area */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium mb-6"
              style={{ backgroundColor: `${theme?.primary || "#7c3aed"}12`, color: theme?.primary || "#7c3aed" }}
            >
              <Headphones className="w-4 h-4" />
              {subheading}
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-5">
              {heading}
            </h1>

            <p className="text-lg opacity-60 mb-8 max-w-lg">
              {bodyText}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
              {responseStats.map((stat, i) => (
                <div
                  key={i}
                  className="p-3 rounded-lg border text-center"
                  style={{ borderColor: `${theme?.foreground || "#000"}08` }}
                >
                  <div className="text-lg sm:text-xl font-bold">{stat.value}</div>
                  <div className="text-[10px] opacity-40 mb-1">{stat.label}</div>
                  {stat.trend && (
                    <span className="text-[10px] font-medium" style={{ color: "#10b981" }}>
                      {stat.trend}
                    </span>
                  )}
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={buttonUrl}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-white font-semibold transition-transform hover:scale-105"
                style={{ backgroundColor: theme?.primary || "#7c3aed" }}
              >
                {buttonText}
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold opacity-60 hover:opacity-100 transition-opacity"
              >
                <Zap className="w-4 h-4" />
                Watch Demo
              </a>
            </div>
          </div>

          {/* Ticket queue + Chat widget */}
          <div className="space-y-4">
            {/* Ticket queue */}
            <div
              className="rounded-2xl border p-5 shadow-lg"
              style={{ borderColor: `${theme?.foreground || "#000"}08` }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-4 h-4" style={{ color: theme?.primary || "#7c3aed" }} />
                  <span className="font-semibold text-sm">Ticket Queue</span>
                </div>
                <span className="text-xs opacity-40">{items.length} tickets</span>
              </div>

              <div className="space-y-2">
                {items.map((ticket, i) => {
                  const StatusIcon = statusIcons[ticket.value || "Open"] || AlertCircle;
                  return (
                    <div
                      key={i}
                      className="p-3 rounded-lg border transition-shadow hover:shadow-sm"
                      style={{ borderColor: `${theme?.foreground || "#000"}06` }}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-start gap-2 min-w-0">
                          <StatusIcon
                            className="w-4 h-4 mt-0.5 flex-shrink-0"
                            style={{ color: priorityColors[ticket.label || "Medium"] }}
                          />
                          <div className="min-w-0">
                            <div className="text-sm font-medium truncate">{ticket.title}</div>
                            <div className="text-[10px] opacity-40">{ticket.description}</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 flex-shrink-0">
                          <span
                            className="text-[10px] px-2 py-0.5 rounded-full font-medium"
                            style={{
                              backgroundColor: `${priorityColors[ticket.label || "Medium"]}12`,
                              color: priorityColors[ticket.label || "Medium"],
                            }}
                          >
                            {ticket.label}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Chat widget preview */}
            <div
              className="rounded-2xl border p-4 shadow-lg"
              style={{ borderColor: `${theme?.foreground || "#000"}08` }}
            >
              <div
                className="flex items-center gap-3 p-3 rounded-t-xl"
                style={{ backgroundColor: theme?.primary || "#7c3aed" }}
              >
                <MessageCircle className="w-5 h-5 text-white" />
                <div>
                  <div className="text-white text-sm font-semibold">Live Chat</div>
                  <div className="text-white/70 text-[10px]">Typically replies in under 2 min</div>
                </div>
              </div>
              <div className="p-3 space-y-3">
                <div className="flex gap-2">
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold text-white flex-shrink-0"
                    style={{ backgroundColor: theme?.primary || "#7c3aed" }}
                  >
                    S
                  </div>
                  <div
                    className="text-sm p-2.5 rounded-lg rounded-tl-none max-w-[80%]"
                    style={{ backgroundColor: `${theme?.foreground || "#000"}06` }}
                  >
                    Hi! I need help resetting my account password.
                  </div>
                </div>
                <div className="flex gap-2 justify-end">
                  <div
                    className="text-sm p-2.5 rounded-lg rounded-tr-none max-w-[80%] text-white"
                    style={{ backgroundColor: theme?.primary || "#7c3aed" }}
                  >
                    Of course! I can help you with that. Let me send you a reset link right away.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
