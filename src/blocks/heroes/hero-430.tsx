"use client";

import type { BlockProps } from "@/blocks/types";
import { Mail, ArrowRight, Shield, Clock, CheckCircle2 } from "lucide-react";

export default function Hero430(props: BlockProps) {
  const {
    theme,
    heading = "Grow your business starting today",
    subheading = "Join 15,000+ businesses already using our platform. Get a personalized demo and see results in your first week.",
    bodyText,
    buttonText = "Request a Demo",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Personalized onboarding", icon: "check" },
      { title: "Dedicated account manager", icon: "check" },
      { title: "Free migration from existing tools", icon: "check" },
      { title: "30-day money-back guarantee", icon: "check" },
    ],
  } = props;

  const primaryColor = theme?.primary ?? "#2563eb";

  return (
    <section
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
      className="min-h-screen flex items-center px-4 py-16 sm:py-20"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side — Value prop */}
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
              {heading}
            </h1>
            <p className="text-base sm:text-lg opacity-70 mb-8 leading-relaxed">
              {subheading}
            </p>

            <div className="space-y-3 mb-8">
              {items.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2
                    className="w-5 h-5 flex-shrink-0"
                    style={{ color: primaryColor }}
                  />
                  <span className="text-sm font-medium">{item.title}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-5 text-xs opacity-50">
              <span className="flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5" />
                SOC 2 Certified
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                Setup in 10 minutes
              </span>
            </div>
          </div>

          {/* Right side — Form */}
          <div
            className="rounded-2xl p-6 sm:p-8 border border-current/5 shadow-lg"
            style={{ backgroundColor: theme?.foreground ? `${theme.foreground}04` : "rgba(0,0,0,0.02)" }}
          >
            <div className="text-center mb-6">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: `${primaryColor}15` }}
              >
                <Mail className="w-6 h-6" style={{ color: primaryColor }} />
              </div>
              <h2 className="text-xl font-bold mb-1">Get your free demo</h2>
              <p className="text-sm opacity-60">Fill in the form and we will be in touch within 24 hours</p>
            </div>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="space-y-4"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium mb-1.5 opacity-70">First Name</label>
                  <input
                    type="text"
                    placeholder="John"
                    className="w-full px-4 py-2.5 rounded-lg text-sm border border-current/10 bg-transparent outline-none focus:ring-2 transition-shadow"
                    style={{ "--tw-ring-color": primaryColor } as React.CSSProperties}
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium mb-1.5 opacity-70">Last Name</label>
                  <input
                    type="text"
                    placeholder="Doe"
                    className="w-full px-4 py-2.5 rounded-lg text-sm border border-current/10 bg-transparent outline-none focus:ring-2 transition-shadow"
                    style={{ "--tw-ring-color": primaryColor } as React.CSSProperties}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium mb-1.5 opacity-70">Work Email</label>
                <input
                  type="email"
                  placeholder="john@company.com"
                  className="w-full px-4 py-2.5 rounded-lg text-sm border border-current/10 bg-transparent outline-none focus:ring-2 transition-shadow"
                  style={{ "--tw-ring-color": primaryColor } as React.CSSProperties}
                />
              </div>

              <div>
                <label className="block text-xs font-medium mb-1.5 opacity-70">Company</label>
                <input
                  type="text"
                  placeholder="Acme Inc."
                  className="w-full px-4 py-2.5 rounded-lg text-sm border border-current/10 bg-transparent outline-none focus:ring-2 transition-shadow"
                  style={{ "--tw-ring-color": primaryColor } as React.CSSProperties}
                />
              </div>

              <div>
                <label className="block text-xs font-medium mb-1.5 opacity-70">Team Size</label>
                <select
                  className="w-full px-4 py-2.5 rounded-lg text-sm border border-current/10 bg-transparent outline-none focus:ring-2 transition-shadow appearance-none"
                  style={{ "--tw-ring-color": primaryColor } as React.CSSProperties}
                  defaultValue=""
                >
                  <option value="" disabled>Select team size</option>
                  <option value="1-10">1-10 employees</option>
                  <option value="11-50">11-50 employees</option>
                  <option value="51-200">51-200 employees</option>
                  <option value="201-1000">201-1,000 employees</option>
                  <option value="1000+">1,000+ employees</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: primaryColor }}
              >
                {buttonText}
                <ArrowRight className="w-4 h-4" />
              </button>

              <p className="text-xs text-center opacity-40">
                By submitting, you agree to our Terms of Service and Privacy Policy.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
