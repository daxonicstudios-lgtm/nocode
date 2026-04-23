"use client";

import type { BlockProps } from "@/blocks/types";
import { Bot, User, Send, Sparkles, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function Hero429(props: BlockProps) {
  const {
    theme,
    heading = "Meet your AI assistant",
    subheading = "Ask anything, get instant answers. Our AI understands your business and helps you work smarter, not harder.",
    bodyText,
    buttonText = "Try It Now",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "user", description: "Can you analyze last quarter's sales data and highlight the top trends?" },
      { title: "assistant", description: "I've analyzed Q4 sales data across all regions. Here are the key findings:\n\n• Revenue grew 23% quarter-over-quarter\n• Mobile purchases increased by 41%\n• Your top 3 products drove 68% of total revenue\n\nWould you like me to generate a detailed report or create visualizations?" },
      { title: "user", description: "Yes, create a visual report I can share with the team." },
      { title: "assistant", description: "Done! I've generated a shareable report with interactive charts. Key highlights are on page 1, regional breakdown on page 2, and product analysis on page 3. I've also added AI-powered recommendations for Q1 strategy." },
    ],
  } = props;

  const primaryColor = theme?.primary ?? "#a855f7";

  return (
    <section
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
      className="min-h-screen flex items-center px-4 py-16 sm:py-20"
    >
      <div className="max-w-5xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Left side — Text */}
          <div>
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium mb-6"
              style={{
                backgroundColor: `${primaryColor}15`,
                color: primaryColor,
              }}
            >
              <Sparkles className="w-4 h-4" />
              AI-Powered
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
              {heading}
            </h1>
            <p className="text-base sm:text-lg opacity-70 mb-8 leading-relaxed">
              {subheading}
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={buttonUrl}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: primaryColor }}
              >
                {buttonText}
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="flex items-center gap-6 mt-8 text-sm opacity-50">
              <span>No credit card required</span>
              <span>Free for teams up to 5</span>
            </div>
          </div>

          {/* Right side — Chat interface */}
          <div className="rounded-2xl overflow-hidden border border-current/10 shadow-xl">
            {/* Chat header */}
            <div
              className="flex items-center gap-3 px-5 py-4 border-b border-current/5"
              style={{ backgroundColor: `${primaryColor}08` }}
            >
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center"
                style={{ backgroundColor: primaryColor }}
              >
                <Bot className="w-4 h-4 text-white" />
              </div>
              <div>
                <p className="font-semibold text-sm">AI Assistant</p>
                <p className="text-xs opacity-50 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
                  Online
                </p>
              </div>
            </div>

            {/* Messages */}
            <div
              className="p-4 space-y-4 max-h-[360px] overflow-y-auto"
              style={{ backgroundColor: theme?.foreground ? `${theme.foreground}03` : "rgba(0,0,0,0.015)" }}
            >
              {items.map((msg, i) => {
                const isUser = msg.title === "user";
                return (
                  <div key={i} className={`flex gap-2.5 ${isUser ? "flex-row-reverse" : ""}`}>
                    <div
                      className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                      style={{
                        backgroundColor: isUser
                          ? (theme?.foreground ? `${theme.foreground}10` : "rgba(0,0,0,0.06)")
                          : `${primaryColor}20`,
                      }}
                    >
                      {isUser ? (
                        <User className="w-3.5 h-3.5 opacity-60" />
                      ) : (
                        <Bot className="w-3.5 h-3.5" style={{ color: primaryColor }} />
                      )}
                    </div>
                    <div
                      className={`rounded-2xl px-4 py-3 max-w-[85%] text-sm leading-relaxed ${
                        isUser ? "rounded-tr-sm" : "rounded-tl-sm"
                      }`}
                      style={{
                        backgroundColor: isUser
                          ? (primaryColor)
                          : (theme?.foreground ? `${theme.foreground}06` : "rgba(0,0,0,0.04)"),
                        color: isUser ? "#fff" : "inherit",
                      }}
                    >
                      <p className="whitespace-pre-line">{msg.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Input bar */}
            <div className="px-4 py-3 border-t border-current/5">
              <div
                className="flex items-center gap-2 rounded-xl px-4 py-2.5"
                style={{ backgroundColor: theme?.foreground ? `${theme.foreground}05` : "rgba(0,0,0,0.03)" }}
              >
                <span className="text-sm opacity-40 flex-1">Ask anything...</span>
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: primaryColor }}
                >
                  <Send className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
