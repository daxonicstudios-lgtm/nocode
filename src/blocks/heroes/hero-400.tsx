"use client";

import type { BlockProps } from "@/blocks/types";
import { Layers, BarChart3, Shield, Cpu, Globe, ArrowRight, Building2, Users } from "lucide-react";

export default function Hero400(props: BlockProps) {
  const {
    theme,
    heading = "One Platform, Every Solution",
    subheading = "Enterprise Product Suite",
    bodyText = "From analytics to security to infrastructure, our integrated product suite powers the world's most ambitious organizations.",
    buttonText = "Talk to Sales",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Analytics Cloud", description: "Real-time business intelligence and predictive insights for data-driven decisions.", icon: "chart" },
      { title: "Security Suite", description: "End-to-end threat detection, compliance automation, and zero-trust access.", icon: "shield" },
      { title: "AI Platform", description: "Build, train, and deploy ML models at scale with managed infrastructure.", icon: "cpu" },
      { title: "Integration Hub", description: "Connect 400+ apps and services with pre-built connectors and custom workflows.", icon: "layers" },
    ],
  } = props;

  const productIcons = [BarChart3, Shield, Cpu, Layers];

  const customerLogos = ["Acme Corp", "TechGiant", "DataFlow", "CloudScale", "NexGen", "Innovate"];

  const stats = [
    { value: "12,000+", label: "Enterprise Customers" },
    { value: "190", label: "Countries" },
    { value: "99.99%", label: "Uptime SLA" },
    { value: "$4.2B", label: "Revenue Managed" },
  ];

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#ffffff", color: theme?.foreground ?? "#0f172a" }}
      className="min-h-screen px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium mb-6"
            style={{ backgroundColor: `${theme?.primary ?? "#1e40af"}08`, color: theme?.primary ?? "#1e40af" }}
          >
            <Building2 className="h-4 w-4" />
            {subheading}
          </span>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6">
            {heading}
          </h1>
          <p className="text-lg opacity-60 mb-10">{bodyText}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={buttonUrl}
              className="inline-flex items-center justify-center gap-2 rounded-xl px-8 py-4 font-semibold text-white transition-transform hover:scale-105"
              style={{ backgroundColor: theme?.primary ?? "#1e40af" }}
            >
              {buttonText}
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 rounded-xl border px-8 py-4 font-semibold transition-opacity hover:opacity-70"
              style={{ borderColor: theme?.border ?? "#e5e7eb" }}
            >
              <Globe className="h-4 w-4" />
              Explore Products
            </a>
          </div>
        </div>

        {/* Product suite cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-16">
          {items.map((product, i) => {
            const Icon = productIcons[i % productIcons.length];
            return (
              <div
                key={product.title}
                className="group rounded-2xl border p-6 transition-all hover:shadow-xl hover:-translate-y-1 cursor-pointer"
                style={{ borderColor: theme?.border ?? "#e5e7eb" }}
              >
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-xl mb-5"
                  style={{ backgroundColor: `${theme?.primary ?? "#1e40af"}10` }}
                >
                  <Icon className="h-6 w-6" style={{ color: theme?.primary ?? "#1e40af" }} />
                </div>
                <h3 className="text-lg font-bold mb-2">{product.title}</h3>
                <p className="text-sm opacity-50 leading-relaxed mb-4">{product.description}</p>
                <span
                  className="inline-flex items-center gap-1 text-sm font-medium transition-all group-hover:gap-2"
                  style={{ color: theme?.primary ?? "#1e40af" }}
                >
                  Learn more
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            );
          })}
        </div>

        {/* Stats row */}
        <div
          className="rounded-2xl p-8 mb-16 grid grid-cols-2 sm:grid-cols-4 gap-6"
          style={{ backgroundColor: theme?.muted ?? "#f8fafc" }}
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-bold" style={{ color: theme?.primary ?? "#1e40af" }}>
                {stat.value}
              </p>
              <p className="text-sm opacity-50 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Customer logos */}
        <div className="text-center">
          <p className="text-sm opacity-40 mb-6 uppercase tracking-wider">Trusted by industry leaders</p>
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
            {customerLogos.map((name) => (
              <div
                key={name}
                className="flex items-center gap-2 text-lg font-bold opacity-20 hover:opacity-40 transition-opacity"
              >
                <Building2 className="h-5 w-5" />
                {name}
              </div>
            ))}
          </div>
        </div>

        {/* Enterprise CTA */}
        <div
          className="mt-16 rounded-2xl p-8 sm:p-12 text-center"
          style={{ backgroundColor: theme?.primary ?? "#1e40af" }}
        >
          <Users className="h-8 w-8 mx-auto mb-4 text-white opacity-80" />
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Ready to transform your organization?
          </h2>
          <p className="text-white opacity-70 mb-8 max-w-lg mx-auto">
            Get a personalized demo and see how our product suite can accelerate your digital transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 rounded-xl px-8 py-4 font-semibold transition-transform hover:scale-105"
              style={{ backgroundColor: "#fff", color: theme?.primary ?? "#1e40af" }}
            >
              Request a Demo
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 px-8 py-4 font-semibold text-white transition-opacity hover:opacity-80"
            >
              View Pricing
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
