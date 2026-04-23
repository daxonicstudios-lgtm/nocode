"use client";

import type { BlockProps } from "@/blocks/types";
import { Shield, Lock, AlertTriangle, ArrowRight, Eye, Server, Bug, Scan } from "lucide-react";

export default function Hero347(props: BlockProps) {
  const {
    theme,
    heading = "Your Digital Fortress Starts Here",
    subheading = "Advanced Cybersecurity Solutions",
    bodyText = "Proactive threat detection, 24/7 monitoring, and incident response. We protect your business from ransomware, phishing, data breaches, and zero-day exploits.",
    buttonText = "Get Protected",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Threats Blocked Today", value: "14,892" },
      { title: "Uptime Guarantee", value: "99.99%" },
      { title: "Response Time", value: "<2 min" },
      { title: "Protected Endpoints", value: "50K+" },
    ],
  } = props;

  const services = [
    { icon: Eye, label: "24/7 SOC Monitoring" },
    { icon: Bug, label: "Penetration Testing" },
    { icon: Server, label: "Cloud Security" },
    { icon: Scan, label: "Vulnerability Scanning" },
  ];

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#030712", color: theme?.foreground ?? "#d1d5db" }}
      className="min-h-screen px-5 py-16 sm:py-24 flex items-center relative overflow-hidden"
    >
      {/* Matrix-style falling characters background */}
      <div className="absolute inset-0 overflow-hidden opacity-[0.04]">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="absolute text-xs font-mono leading-tight whitespace-pre select-none"
            style={{
              left: `${8 + i * 8}%`,
              top: `${(i * 17) % 60}%`,
              color: theme?.primary ?? "#10b981",
            }}
          >
            {"01001\n10110\n01101\n11010\n00101\n10011\n01110"}
          </div>
        ))}
      </div>

      {/* Shield glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[200px] opacity-10"
        style={{ backgroundColor: theme?.primary ?? "#10b981" }}
      />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Left — 3 cols */}
          <div className="lg:col-span-3">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded text-xs font-mono uppercase tracking-widest mb-6 border"
              style={{
                borderColor: `${theme?.primary ?? "#10b981"}30`,
                color: theme?.primary ?? "#10b981",
                backgroundColor: `${theme?.primary ?? "#10b981"}08`,
              }}
            >
              <Shield className="w-3.5 h-3.5" />
              {subheading}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.05] mb-6 tracking-tight">
              {heading}
            </h1>

            <p className="text-base sm:text-lg opacity-50 leading-relaxed mb-8 max-w-xl">
              {bodyText}
            </p>

            {/* Threat counter display */}
            <div
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10 p-4 rounded-xl border"
              style={{
                borderColor: `${theme?.primary ?? "#10b981"}15`,
                backgroundColor: `${theme?.primary ?? "#10b981"}05`,
              }}
            >
              {items.slice(0, 4).map((stat, i) => (
                <div key={i} className="text-center">
                  <div
                    className="text-xl sm:text-2xl font-mono font-bold"
                    style={{ color: theme?.primary ?? "#10b981" }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-[10px] uppercase tracking-wider opacity-40 mt-1">{stat.title}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={buttonUrl}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg text-sm font-bold transition-transform hover:scale-105"
                style={{ backgroundColor: theme?.primary ?? "#10b981", color: "#020617" }}
              >
                <Lock className="w-4 h-4" />
                {buttonText}
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg text-sm font-semibold border transition-colors"
                style={{ borderColor: `${theme?.primary ?? "#10b981"}30`, color: theme?.primary ?? "#10b981" }}
              >
                <AlertTriangle className="w-4 h-4" />
                Free Security Audit
              </a>
            </div>
          </div>

          {/* Right — Shield motif + services — 2 cols */}
          <div className="lg:col-span-2">
            {/* Shield icon large */}
            <div className="text-center mb-8">
              <div
                className="w-28 h-28 mx-auto rounded-2xl flex items-center justify-center border relative"
                style={{
                  borderColor: `${theme?.primary ?? "#10b981"}30`,
                  backgroundColor: `${theme?.primary ?? "#10b981"}08`,
                }}
              >
                <Shield className="w-14 h-14" style={{ color: theme?.primary ?? "#10b981" }} />
                {/* Pulse ring */}
                <div
                  className="absolute inset-0 rounded-2xl animate-ping opacity-10"
                  style={{ backgroundColor: theme?.primary ?? "#10b981" }}
                />
              </div>
              <div className="mt-4 text-xs font-mono opacity-40">
                STATUS: <span style={{ color: theme?.primary ?? "#10b981" }}>ALL SYSTEMS PROTECTED</span>
              </div>
            </div>

            {/* Service list */}
            <div className="space-y-3">
              {services.map((svc, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-3 rounded-lg border transition-colors hover:border-opacity-60"
                  style={{
                    borderColor: `${theme?.primary ?? "#10b981"}15`,
                    backgroundColor: `${theme?.primary ?? "#10b981"}04`,
                  }}
                >
                  <svc.icon className="w-5 h-5 shrink-0" style={{ color: theme?.primary ?? "#10b981" }} />
                  <span className="text-sm font-medium">{svc.label}</span>
                </div>
              ))}
            </div>

            {/* Terminal-style log */}
            <div
              className="mt-6 p-4 rounded-lg font-mono text-[11px] leading-relaxed border"
              style={{
                borderColor: `${theme?.primary ?? "#10b981"}15`,
                backgroundColor: `${theme?.primary ?? "#10b981"}05`,
              }}
            >
              <div className="opacity-30 mb-1">$ security-scan --live</div>
              <div style={{ color: theme?.primary ?? "#10b981" }}>
                [OK] Firewall: Active{"\n"}
                [OK] Endpoints: Secured{"\n"}
                [OK] Last Breach: None
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
