"use client";

import type { BlockProps } from "@/blocks/types";
import { Zap, ArrowRight, Check, Clock, Tag, Sparkles } from "lucide-react";

export default function Hero399(props: BlockProps) {
  const {
    theme,
    heading = "Ship your idea this weekend",
    subheading = "Built by a solo developer",
    bodyText = "A lightweight tool that does one thing really well. No bloat, no enterprise pricing, no 47-step onboarding. Just sign up and start.",
    buttonText = "Try It Free",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "v2.4.0", description: "Added CSV export and webhook support", label: "Apr 18" },
      { title: "v2.3.1", description: "Fixed timezone bug in scheduled reports", label: "Apr 12" },
      { title: "v2.3.0", description: "Dark mode and keyboard shortcuts", label: "Apr 5" },
      { title: "v2.2.0", description: "Team workspaces with role-based access", label: "Mar 28" },
    ],
  } = props;

  const benefits = [
    "Set up in under 2 minutes",
    "No credit card required",
    "$9/mo — forever. No surprises",
    "Your data, your export, any time",
  ];

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#fffdf7", color: theme?.foreground ?? "#1c1917" }}
      className="min-h-screen px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-14 lg:grid-cols-5 lg:items-start">
          {/* Left — main content (3 cols) */}
          <div className="lg:col-span-3">
            <div className="flex items-center gap-2 mb-6">
              <Zap className="h-5 w-5" style={{ color: theme?.primary ?? "#f97316" }} />
              <span className="text-sm font-medium opacity-60">{subheading}</span>
            </div>

            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl mb-6 leading-tight">
              {heading}
            </h1>

            <p className="text-base opacity-60 mb-8 max-w-md leading-relaxed">
              {bodyText}
            </p>

            {/* Benefits checklist */}
            <ul className="space-y-3 mb-10">
              {benefits.map((b) => (
                <li key={b} className="flex items-center gap-3 text-sm">
                  <Check className="h-4 w-4 shrink-0" style={{ color: theme?.primary ?? "#f97316" }} />
                  <span className="opacity-70">{b}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={buttonUrl}
                className="inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 font-semibold text-white transition-transform hover:scale-105"
                style={{ backgroundColor: theme?.primary ?? "#f97316" }}
              >
                {buttonText}
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 rounded-lg border px-6 py-3 font-semibold transition-opacity hover:opacity-70"
                style={{ borderColor: theme?.border ?? "#e5e7eb" }}
              >
                See Demo
              </a>
            </div>

            {/* Indie hacker social proof */}
            <div className="mt-10 flex items-center gap-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="h-8 w-8 rounded-full border-2 flex items-center justify-center text-xs font-bold"
                    style={{
                      borderColor: theme?.background ?? "#fffdf7",
                      backgroundColor: `${theme?.primary ?? "#f97316"}${15 + i * 12}`,
                      color: theme?.primary ?? "#f97316",
                    }}
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div>
                <p className="text-sm font-medium">1,247 makers using it</p>
                <p className="text-xs opacity-40">Featured on Product Hunt #3</p>
              </div>
            </div>
          </div>

          {/* Right — Changelog (2 cols) */}
          <div className="lg:col-span-2">
            <div
              className="rounded-xl border p-5"
              style={{ borderColor: theme?.border ?? "#e5e7eb", backgroundColor: theme?.muted ?? "#fafaf8" }}
            >
              <div className="flex items-center gap-2 mb-5">
                <Sparkles className="h-4 w-4" style={{ color: theme?.primary ?? "#f97316" }} />
                <span className="text-sm font-semibold">Changelog</span>
                <span className="ml-auto text-xs opacity-40">shipping weekly</span>
              </div>

              <div className="space-y-4">
                {items.map((entry, i) => (
                  <div key={entry.title} className="relative pl-6">
                    {/* Timeline line */}
                    {i < items.length - 1 && (
                      <div
                        className="absolute left-[7px] top-6 bottom-0 w-px"
                        style={{ backgroundColor: `${theme?.primary ?? "#f97316"}20` }}
                      />
                    )}
                    {/* Timeline dot */}
                    <div
                      className="absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full border-2"
                      style={{
                        borderColor: theme?.primary ?? "#f97316",
                        backgroundColor: i === 0 ? theme?.primary ?? "#f97316" : "transparent",
                      }}
                    />
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Tag className="h-3 w-3 opacity-40" />
                        <span className="text-sm font-mono font-semibold">{entry.title}</span>
                        <span className="flex items-center gap-1 text-xs opacity-40">
                          <Clock className="h-3 w-3" />
                          {entry.label}
                        </span>
                      </div>
                      <p className="text-sm opacity-60">{entry.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <a
                href="#"
                className="mt-5 flex items-center justify-center gap-1.5 rounded-lg border py-2.5 text-sm font-medium transition-opacity hover:opacity-70"
                style={{ borderColor: theme?.border ?? "#e5e7eb" }}
              >
                View full changelog
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>

            {/* Pricing badge */}
            <div
              className="mt-4 rounded-xl border p-4 text-center"
              style={{ borderColor: theme?.border ?? "#e5e7eb", backgroundColor: `${theme?.primary ?? "#f97316"}06` }}
            >
              <p className="text-2xl font-bold" style={{ color: theme?.primary ?? "#f97316" }}>$9<span className="text-sm font-normal opacity-50">/mo</span></p>
              <p className="text-xs opacity-50 mt-1">One plan. Everything included. No per-seat pricing.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
