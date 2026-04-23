"use client";

import type { BlockProps } from "@/blocks/types";
import { KeyRound, ArrowRight, Shield, Phone, Clock, Lock, Home, AlertTriangle, CheckCircle, Wrench } from "lucide-react";

export default function Hero368(props: BlockProps) {
  const {
    theme,
    heading = "Locked Out? We Are On Our Way",
    subheading = "SafeKey Locksmith",
    bodyText = "Professional locksmith services available 24 hours a day, 7 days a week. Whether it is an emergency lockout, a new installation, or a security upgrade, our licensed technicians arrive fast.",
    buttonText = "Call Now",
    buttonUrl = "tel:+15551234567",
    imageUrl,
    items = [
      { title: "Emergency Lockout", description: "Home, car & office — 20 min response", icon: "alert", value: "24/7" },
      { title: "Lock Installation", description: "Deadbolts, smart locks & high-security", icon: "lock", value: "Same Day" },
      { title: "Key Cutting", description: "Standard, transponder & master keys", icon: "key", value: "On Site" },
      { title: "Security Upgrades", description: "Assessments, rekeying & access control", icon: "shield", value: "Free Quote" },
    ],
  } = props;

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#0f172a", color: theme?.foreground ?? "#f1f5f9" }}
      className="min-h-screen px-5 py-16 sm:py-24 relative overflow-hidden"
    >
      {/* Shield pattern bg */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02]">
        <div className="grid grid-cols-6 gap-12 p-12">
          {[...Array(24)].map((_, i) => (
            <Shield key={i} className="w-12 h-12" style={{ color: theme?.primary ?? "#f59e0b" }} />
          ))}
        </div>
      </div>

      {/* Glow */}
      <div
        className="absolute top-[-80px] left-1/3 w-[400px] h-[400px] rounded-full blur-[180px] opacity-10"
        style={{ backgroundColor: theme?.primary ?? "#f59e0b" }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Emergency banner */}
        <div
          className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl mb-10 border"
          style={{
            borderColor: `${theme?.primary ?? "#f59e0b"}30`,
            backgroundColor: `${theme?.primary ?? "#f59e0b"}10`,
          }}
        >
          <div className="flex items-center gap-3">
            <AlertTriangle className="w-5 h-5 animate-pulse" style={{ color: theme?.primary ?? "#f59e0b" }} />
            <span className="text-sm font-bold">Emergency Lockout?</span>
            <span className="text-sm opacity-50">Average response time: 20 minutes</span>
          </div>
          <a
            href={buttonUrl}
            className="flex items-center gap-2 px-5 py-2 rounded-full text-sm font-bold text-white transition-transform hover:scale-105"
            style={{ backgroundColor: theme?.primary ?? "#f59e0b" }}
          >
            <Phone className="w-4 h-4" />
            (555) 123-4567
          </a>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left */}
          <div>
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider mb-6"
              style={{ backgroundColor: `${theme?.primary ?? "#f59e0b"}15`, color: theme?.primary ?? "#f59e0b" }}
            >
              <KeyRound className="w-3.5 h-3.5" />
              {subheading}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.05] mb-6 tracking-tight">
              {heading}
            </h1>

            <p className="text-base sm:text-lg opacity-40 leading-relaxed mb-8 max-w-lg">
              {bodyText}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <a
                href={buttonUrl}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-bold text-white transition-transform hover:scale-105"
                style={{ backgroundColor: theme?.primary ?? "#f59e0b" }}
              >
                <Phone className="w-4 h-4" />
                {buttonText}
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-semibold border-2 transition-colors"
                style={{ borderColor: `${theme?.primary ?? "#f59e0b"}50`, color: theme?.primary ?? "#f59e0b" }}
              >
                <Shield className="w-4 h-4" />
                Get Free Quote
              </a>
            </div>

            {/* Trust points */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Clock, text: "24/7 Availability" },
                { icon: Shield, text: "Licensed & Insured" },
                { icon: CheckCircle, text: "No Hidden Fees" },
                { icon: Home, text: "Residential & Commercial" },
              ].map(({ icon: Icon, text }, i) => (
                <div key={i} className="flex items-center gap-2 text-sm">
                  <Icon className="w-4 h-4 shrink-0" style={{ color: theme?.primary ?? "#f59e0b" }} />
                  <span className="opacity-60">{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Services */}
          <div>
            {imageUrl && (
              <div className="relative mb-6 rounded-2xl overflow-hidden">
                <img src={imageUrl} alt="Locksmith at work" className="w-full h-56 object-cover" />
              </div>
            )}

            <div className="space-y-3">
              {items.slice(0, 4).map((service, i) => (
                <a
                  key={i}
                  href={buttonUrl}
                  className="flex items-center gap-4 p-5 rounded-xl border transition-all hover:scale-[1.02] group"
                  style={{
                    borderColor: `${theme?.primary ?? "#f59e0b"}12`,
                    backgroundColor: `${theme?.primary ?? "#f59e0b"}05`,
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: `${theme?.primary ?? "#f59e0b"}15` }}
                  >
                    {i === 0 ? <AlertTriangle className="w-5 h-5" style={{ color: theme?.primary ?? "#f59e0b" }} /> :
                     i === 1 ? <Lock className="w-5 h-5" style={{ color: theme?.primary ?? "#f59e0b" }} /> :
                     i === 2 ? <KeyRound className="w-5 h-5" style={{ color: theme?.primary ?? "#f59e0b" }} /> :
                     <Wrench className="w-5 h-5" style={{ color: theme?.primary ?? "#f59e0b" }} />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-bold text-sm">{service.title}</div>
                    <div className="text-xs opacity-40">{service.description}</div>
                  </div>
                  <div
                    className="text-xs font-bold shrink-0 px-3 py-1 rounded-full"
                    style={{ backgroundColor: `${theme?.primary ?? "#f59e0b"}12`, color: theme?.primary ?? "#f59e0b" }}
                  >
                    {service.value}
                  </div>
                </a>
              ))}
            </div>

            {/* Service area */}
            <div
              className="mt-6 p-4 rounded-xl text-center text-sm border"
              style={{ borderColor: `${theme?.primary ?? "#f59e0b"}15`, backgroundColor: `${theme?.primary ?? "#f59e0b"}06` }}
            >
              <span className="font-bold">Serving the entire metro area</span>
              <span className="opacity-40"> — We come to you, wherever you are</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
