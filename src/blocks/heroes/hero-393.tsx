"use client";

import type { BlockProps } from "@/blocks/types";
import { Code, Copy, Terminal, BookOpen, Zap, ArrowRight } from "lucide-react";

export default function Hero393(props: BlockProps) {
  const {
    theme,
    heading = "Build Faster with Our API",
    subheading = "Developer-First Platform",
    bodyText = "RESTful and GraphQL APIs with 99.99% uptime, sub-50ms latency, and SDKs for every major language. Ship integrations in hours, not weeks.",
    buttonText = "Read the Docs",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "GET", description: "/v2/users/{id}", value: "200 OK" },
      { title: "POST", description: "/v2/payments", value: "201 Created" },
      { title: "PUT", description: "/v2/orders/{id}", value: "200 OK" },
    ],
  } = props;

  const codeSnippet = `const response = await fetch(
  "https://api.example.com/v2/users",
  {
    headers: {
      Authorization: "Bearer sk_live_...",
      "Content-Type": "application/json",
    },
  }
);

const { data } = await response.json();
// => [{ id: "usr_1", name: "Ada" }, ...]`;

  const methodColors: Record<string, string> = {
    GET: "#22c55e",
    POST: "#3b82f6",
    PUT: "#f59e0b",
    DELETE: "#ef4444",
  };

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#0f172a", color: theme?.foreground ?? "#e2e8f0" }}
      className="min-h-screen px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          {/* Left content */}
          <div className="pt-8">
            <span
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-mono font-medium mb-6"
              style={{ backgroundColor: `${theme?.primary ?? "#6366f1"}20`, color: theme?.primary ?? "#6366f1" }}
            >
              <Terminal className="h-4 w-4" />
              {subheading}
            </span>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6">
              {heading}
            </h1>
            <p className="text-lg opacity-60 mb-8 max-w-lg">
              {bodyText}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href={buttonUrl}
                className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 font-semibold text-white transition-transform hover:scale-105"
                style={{ backgroundColor: theme?.primary ?? "#6366f1" }}
              >
                <BookOpen className="h-4 w-4" />
                {buttonText}
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 px-6 py-3.5 font-semibold transition-opacity hover:opacity-80"
              >
                Get API Key
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            {/* Endpoint preview */}
            <div className="space-y-3">
              <p className="text-sm font-medium opacity-40 uppercase tracking-wider mb-3">Endpoints</p>
              {items.map((endpoint) => (
                <div
                  key={endpoint.description}
                  className="flex items-center gap-3 rounded-lg p-3 font-mono text-sm"
                  style={{ backgroundColor: `${theme?.primary ?? "#6366f1"}08` }}
                >
                  <span
                    className="shrink-0 rounded px-2 py-0.5 text-xs font-bold text-white"
                    style={{ backgroundColor: methodColors[endpoint.title ?? "GET"] ?? "#6366f1" }}
                  >
                    {endpoint.title}
                  </span>
                  <span className="flex-1 truncate opacity-80">{endpoint.description}</span>
                  <span className="text-xs opacity-40">{endpoint.value}</span>
                </div>
              ))}
            </div>

            {/* SDK badges */}
            <div className="mt-8 flex flex-wrap gap-2">
              {["Node.js", "Python", "Go", "Ruby", "PHP", "Java"].map((lang) => (
                <span
                  key={lang}
                  className="rounded-full border border-white/10 px-3 py-1 text-xs font-mono opacity-50"
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>

          {/* Right — Code sample */}
          <div
            className="rounded-2xl border overflow-hidden shadow-2xl"
            style={{ borderColor: "rgba(255,255,255,0.08)", backgroundColor: theme?.muted ?? "#1e293b" }}
          >
            <div className="flex items-center justify-between border-b border-white/5 px-5 py-3">
              <div className="flex items-center gap-2">
                <Code className="h-4 w-4" style={{ color: theme?.primary ?? "#6366f1" }} />
                <span className="text-sm font-mono opacity-60">fetch-users.ts</span>
              </div>
              <button className="flex items-center gap-1.5 rounded-md px-3 py-1 text-xs opacity-40 hover:opacity-70 transition-opacity">
                <Copy className="h-3 w-3" />
                Copy
              </button>
            </div>
            <pre className="p-5 text-sm leading-relaxed overflow-x-auto">
              <code>
                {codeSnippet.split("\n").map((line, i) => (
                  <div key={i} className="flex">
                    <span className="mr-4 select-none opacity-20 w-6 text-right">{i + 1}</span>
                    <span className="opacity-80">{line}</span>
                  </div>
                ))}
              </code>
            </pre>
            {/* Response preview */}
            <div className="border-t border-white/5 px-5 py-4">
              <div className="flex items-center gap-2 mb-2">
                <Zap className="h-3.5 w-3.5" style={{ color: "#22c55e" }} />
                <span className="text-xs font-mono opacity-50">Response — 42ms</span>
              </div>
              <div className="rounded-lg p-3 text-xs font-mono opacity-60" style={{ backgroundColor: "rgba(0,0,0,0.2)" }}>
                {`{ "data": [{ "id": "usr_1", "name": "Ada Lovelace" }], "meta": { "total": 1248 } }`}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
