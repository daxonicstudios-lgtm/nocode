"use client";

import type { BlockProps } from "@/blocks/types";
import { Bot, MessageCircle, ArrowRight, Sparkles, Clock, Brain, Shield, Zap, CheckCircle, Send } from "lucide-react";

export default function Hero380(props: BlockProps) {
  const {
    theme,
    heading = "Your AI-Powered Virtual Assistant",
    subheading = "AskNova",
    bodyText = "Delegate tasks, automate workflows, and get instant answers. Our AI assistant handles scheduling, research, email drafts, data analysis, and more — available 24/7.",
    buttonText = "Try Free for 14 Days",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Starter", description: "100 tasks/mo, email & calendar, basic research", value: "$19/mo", label: "plan" },
      { title: "Professional", description: "Unlimited tasks, advanced research, integrations", value: "$49/mo", label: "plan" },
      { title: "Enterprise", description: "Custom workflows, API access, dedicated support", value: "Custom", label: "plan" },
    ],
  } = props;

  const capabilities = [
    { title: "Email Drafting", desc: "Compose and reply", icon: Send },
    { title: "Research", desc: "Deep web analysis", icon: Brain },
    { title: "Scheduling", desc: "Calendar management", icon: Clock },
    { title: "Data Analysis", desc: "Reports & insights", icon: Sparkles },
  ];

  const chatMessages = [
    { role: "user", text: "Summarize yesterday's sales report and draft a follow-up email to the team." },
    { role: "assistant", text: "Done! Yesterday's sales hit $24,300 (+12% vs Monday). I've drafted the email highlighting top performers and the new product launch uptick. Ready to review?" },
  ];

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#0f0f17", color: theme?.foreground ?? "#e8e8f0" }}
      className="min-h-screen px-5 py-16 sm:py-24 flex items-center relative overflow-hidden"
    >
      {/* Glow */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[400px] rounded-full blur-[200px] opacity-10"
        style={{ backgroundColor: theme?.primary ?? "#a855f7" }}
      />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left */}
          <div>
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider mb-6"
              style={{ backgroundColor: `${theme?.primary ?? "#a855f7"}15`, color: theme?.primary ?? "#a855f7" }}
            >
              <Bot className="w-3.5 h-3.5" />
              {subheading}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.05] mb-6 tracking-tight">
              {heading}
            </h1>

            <p className="text-base sm:text-lg opacity-50 leading-relaxed mb-6 max-w-lg">
              {bodyText}
            </p>

            {/* Capabilities grid */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {capabilities.map((cap, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-3 rounded-xl border"
                  style={{
                    borderColor: `${theme?.primary ?? "#a855f7"}12`,
                    backgroundColor: `${theme?.primary ?? "#a855f7"}05`,
                  }}
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                    style={{ backgroundColor: `${theme?.primary ?? "#a855f7"}15` }}
                  >
                    <cap.icon className="w-4 h-4" style={{ color: theme?.primary ?? "#a855f7" }} />
                  </div>
                  <div>
                    <div className="text-sm font-bold">{cap.title}</div>
                    <div className="text-[10px] opacity-40">{cap.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href={buttonUrl}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold transition-transform hover:scale-105"
                style={{ backgroundColor: theme?.primary ?? "#a855f7", color: "#ffffff" }}
              >
                <Sparkles className="w-4 h-4" />
                {buttonText}
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold border"
                style={{ borderColor: `${theme?.primary ?? "#a855f7"}30`, color: theme?.primary ?? "#a855f7" }}
              >
                Watch Demo
              </a>
            </div>

            <div className="flex items-center gap-4 text-xs opacity-40">
              <span className="flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5" />
                SOC 2 Certified
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                99.99% Uptime
              </span>
              <span className="flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5" />
                Avg 1.2s response
              </span>
            </div>
          </div>

          {/* Right — Chat bubble + pricing */}
          <div>
            {/* Chat preview */}
            <div
              className="rounded-2xl border overflow-hidden mb-6"
              style={{ borderColor: `${theme?.primary ?? "#a855f7"}15`, backgroundColor: `${theme?.primary ?? "#a855f7"}04` }}
            >
              <div
                className="flex items-center gap-3 px-5 py-3 border-b"
                style={{ borderColor: `${theme?.primary ?? "#a855f7"}10` }}
              >
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: theme?.primary ?? "#a855f7" }}
                >
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="text-sm font-bold">Nova Assistant</div>
                  <div className="flex items-center gap-1.5 text-[10px] opacity-40">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                    Online
                  </div>
                </div>
              </div>

              <div className="p-5 space-y-4">
                {chatMessages.map((msg, i) => (
                  <div
                    key={i}
                    className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[85%] px-4 py-3 text-xs leading-relaxed ${
                        msg.role === "user" ? "rounded-2xl rounded-br-md" : "rounded-2xl rounded-bl-md"
                      }`}
                      style={{
                        backgroundColor: msg.role === "user"
                          ? theme?.primary ?? "#a855f7"
                          : `${theme?.primary ?? "#a855f7"}12`,
                        color: msg.role === "user" ? "#ffffff" : theme?.foreground ?? "#e8e8f0",
                      }}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}

                {/* Typing indicator */}
                <div className="flex justify-start">
                  <div
                    className="px-4 py-3 rounded-2xl rounded-bl-md flex items-center gap-1"
                    style={{ backgroundColor: `${theme?.primary ?? "#a855f7"}12` }}
                  >
                    <div className="w-1.5 h-1.5 rounded-full animate-bounce" style={{ backgroundColor: theme?.primary ?? "#a855f7", animationDelay: "0ms" }} />
                    <div className="w-1.5 h-1.5 rounded-full animate-bounce" style={{ backgroundColor: theme?.primary ?? "#a855f7", animationDelay: "150ms" }} />
                    <div className="w-1.5 h-1.5 rounded-full animate-bounce" style={{ backgroundColor: theme?.primary ?? "#a855f7", animationDelay: "300ms" }} />
                  </div>
                </div>
              </div>

              {/* Input area */}
              <div
                className="flex items-center gap-2 px-4 py-3 border-t"
                style={{ borderColor: `${theme?.primary ?? "#a855f7"}10` }}
              >
                <MessageCircle className="w-4 h-4 opacity-30" />
                <span className="text-xs opacity-30 flex-1">Ask Nova anything...</span>
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: theme?.primary ?? "#a855f7" }}
                >
                  <Send className="w-3.5 h-3.5 text-white" />
                </div>
              </div>
            </div>

            {imageUrl && (
              <div className="rounded-2xl overflow-hidden mb-6 shadow-xl">
                <img src={imageUrl} alt="AI assistant" className="w-full h-40 object-cover" />
              </div>
            )}

            {/* Pricing tiers */}
            <div className="space-y-2">
              {items.slice(0, 3).map((plan, i) => {
                const isMiddle = i === 1;
                return (
                  <div
                    key={i}
                    className="flex items-center justify-between p-4 rounded-xl border transition-all hover:translate-x-1 cursor-pointer"
                    style={{
                      borderColor: isMiddle ? `${theme?.primary ?? "#a855f7"}40` : `${theme?.primary ?? "#a855f7"}12`,
                      backgroundColor: isMiddle ? `${theme?.primary ?? "#a855f7"}10` : `${theme?.primary ?? "#a855f7"}04`,
                    }}
                  >
                    <div className="flex items-center gap-3">
                      {isMiddle && (
                        <CheckCircle className="w-4 h-4 shrink-0" style={{ color: theme?.primary ?? "#a855f7" }} />
                      )}
                      <div>
                        <div className="text-sm font-bold flex items-center gap-2">
                          {plan.title}
                          {isMiddle && (
                            <span
                              className="text-[8px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded"
                              style={{ backgroundColor: theme?.primary ?? "#a855f7", color: "#ffffff" }}
                            >
                              Popular
                            </span>
                          )}
                        </div>
                        <div className="text-[10px] opacity-40">{plan.description}</div>
                      </div>
                    </div>
                    <span className="text-sm font-black shrink-0" style={{ color: theme?.primary ?? "#a855f7" }}>
                      {plan.value}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
