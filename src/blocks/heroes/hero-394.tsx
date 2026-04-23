"use client";

import type { BlockProps } from "@/blocks/types";
import { GitBranch, CheckCircle2, Clock, Rocket, Box, Shield, ArrowRight, Activity } from "lucide-react";

export default function Hero394(props: BlockProps) {
  const {
    theme,
    heading = "Ship Code with Confidence",
    subheading = "CI/CD Pipeline Platform",
    bodyText = "Automate builds, tests, and deployments across any infrastructure. From commit to production in minutes, not hours.",
    buttonText = "Start Deploying",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Build", description: "Compiling application", value: "passed", label: "23s" },
      { title: "Test", description: "Running 1,247 tests", value: "passed", label: "1m 42s" },
      { title: "Security Scan", description: "Vulnerability check", value: "passed", label: "38s" },
      { title: "Deploy to Staging", description: "AWS ECS cluster", value: "passed", label: "52s" },
      { title: "Deploy to Production", description: "Rolling update", value: "running", label: "..." },
    ],
  } = props;

  const stats = [
    { label: "Deployments Today", value: "1,284", icon: Rocket },
    { label: "Avg Build Time", value: "2m 14s", icon: Clock },
    { label: "Success Rate", value: "99.7%", icon: CheckCircle2 },
    { label: "Active Pipelines", value: "342", icon: Activity },
  ];

  const integrations = ["GitHub", "GitLab", "Docker", "AWS", "Kubernetes", "Terraform"];

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#0a0a0a", color: theme?.foreground ?? "#fafafa" }}
      className="min-h-screen px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-mono font-medium mb-6"
            style={{ backgroundColor: `${theme?.primary ?? "#22c55e"}15`, color: theme?.primary ?? "#22c55e" }}
          >
            <GitBranch className="h-4 w-4" />
            {subheading}
          </span>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6">
            {heading}
          </h1>
          <p className="text-lg opacity-50 mb-8">{bodyText}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={buttonUrl}
              className="inline-flex items-center justify-center gap-2 rounded-xl px-7 py-3.5 font-semibold text-white transition-transform hover:scale-105"
              style={{ backgroundColor: theme?.primary ?? "#22c55e" }}
            >
              {buttonText}
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 px-7 py-3.5 font-semibold transition-opacity hover:opacity-80"
            >
              View Demo Pipeline
            </a>
          </div>
        </div>

        {/* Pipeline visualization */}
        <div
          className="rounded-2xl border p-6 sm:p-8 mb-14 overflow-hidden"
          style={{ borderColor: "rgba(255,255,255,0.08)", backgroundColor: theme?.muted ?? "#111" }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-3 w-3 rounded-full animate-pulse" style={{ backgroundColor: theme?.primary ?? "#22c55e" }} />
            <span className="text-sm font-mono opacity-60">Pipeline #4,821 — main branch</span>
            <span className="ml-auto text-xs font-mono opacity-40">triggered 3m ago</span>
          </div>

          <div className="space-y-3">
            {items.map((step, i) => {
              const isPassed = step.value === "passed";
              const isRunning = step.value === "running";
              return (
                <div
                  key={step.title}
                  className="flex items-center gap-4 rounded-xl p-4 transition-all"
                  style={{
                    backgroundColor: isRunning
                      ? `${theme?.primary ?? "#22c55e"}10`
                      : "rgba(255,255,255,0.02)",
                  }}
                >
                  {/* Step number */}
                  <div
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold"
                    style={{
                      backgroundColor: isPassed
                        ? theme?.primary ?? "#22c55e"
                        : isRunning
                        ? `${theme?.primary ?? "#22c55e"}30`
                        : "rgba(255,255,255,0.05)",
                      color: isPassed ? "#fff" : theme?.primary ?? "#22c55e",
                    }}
                  >
                    {isPassed ? <CheckCircle2 className="h-4 w-4" /> : i + 1}
                  </div>
                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold">{step.title}</p>
                    <p className="text-xs opacity-40 truncate">{step.description}</p>
                  </div>
                  {/* Duration */}
                  <span className="text-xs font-mono opacity-40">{step.label}</span>
                  {/* Status indicator */}
                  {isRunning && (
                    <div className="h-2 w-2 rounded-full animate-pulse" style={{ backgroundColor: theme?.primary ?? "#22c55e" }} />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-14">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border p-5 text-center"
              style={{ borderColor: "rgba(255,255,255,0.06)" }}
            >
              <stat.icon className="h-5 w-5 mx-auto mb-3" style={{ color: theme?.primary ?? "#22c55e" }} />
              <p className="text-2xl font-bold">{stat.value}</p>
              <p className="text-xs opacity-40 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Integrations */}
        <div className="text-center">
          <p className="text-sm opacity-40 mb-4">Integrates with your stack</p>
          <div className="flex flex-wrap justify-center gap-3">
            {integrations.map((name) => (
              <span
                key={name}
                className="rounded-full border border-white/10 px-4 py-2 text-sm font-medium opacity-50 flex items-center gap-2"
              >
                <Box className="h-3.5 w-3.5" />
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
