"use client";

import type { BlockProps } from "@/blocks/types";
import { Package, Shield, Lock, ArrowRight, Ruler, Thermometer, Camera } from "lucide-react";

export default function Hero343(props: BlockProps) {
  const {
    theme,
    heading = "Safe, Secure, Always Accessible",
    subheading = "Self-Storage Solutions",
    bodyText = "Climate-controlled units in a variety of sizes to fit your belongings. 24/7 access, HD security cameras, and month-to-month leases with no long-term contracts.",
    buttonText = "Find Your Unit",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Small", description: "5' × 5' — Closet-sized", value: "$49/mo", label: "25 sq ft" },
      { title: "Medium", description: "10' × 10' — One bedroom", value: "$99/mo", label: "100 sq ft" },
      { title: "Large", description: "10' × 20' — Two bedrooms", value: "$179/mo", label: "200 sq ft" },
      { title: "XL", description: "10' × 30' — Full house", value: "$249/mo", label: "300 sq ft" },
    ],
  } = props;

  const features = [
    { icon: Lock, label: "Individual Unit Locks" },
    { icon: Camera, label: "24/7 Surveillance" },
    { icon: Thermometer, label: "Climate Controlled" },
  ];

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#f5f5f4", color: theme?.foreground ?? "#1c1917" }}
      className="min-h-screen px-5 py-16 sm:py-24 flex items-center"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Top section */}
        <div className="text-center mb-14">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider mb-6"
            style={{ backgroundColor: `${theme?.primary ?? "#2563eb"}10`, color: theme?.primary ?? "#2563eb" }}
          >
            <Package className="w-3.5 h-3.5" />
            {subheading}
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-5">
            {heading}
          </h1>

          <p className="text-base sm:text-lg opacity-60 max-w-2xl mx-auto leading-relaxed mb-8">
            {bodyText}
          </p>

          {/* Security features */}
          <div className="flex flex-wrap items-center justify-center gap-6 mb-10">
            {features.map((f, i) => (
              <div key={i} className="flex items-center gap-2 text-sm font-medium">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: `${theme?.primary ?? "#2563eb"}12` }}
                >
                  <f.icon className="w-4 h-4" style={{ color: theme?.primary ?? "#2563eb" }} />
                </div>
                {f.label}
              </div>
            ))}
          </div>
        </div>

        {/* Unit size calculator / cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {items.slice(0, 4).map((unit, i) => (
            <div
              key={i}
              className="rounded-xl p-5 border text-center transition-all hover:shadow-md hover:-translate-y-1 cursor-pointer"
              style={{
                backgroundColor: theme?.background ?? "#ffffff",
                borderColor: i === 1 ? (theme?.primary ?? "#2563eb") : "rgba(0,0,0,0.06)",
                boxShadow: i === 1 ? `0 0 0 1px ${theme?.primary ?? "#2563eb"}` : undefined,
              }}
            >
              <div
                className="w-14 h-14 mx-auto rounded-lg flex items-center justify-center mb-4"
                style={{ backgroundColor: `${theme?.primary ?? "#2563eb"}10` }}
              >
                <Ruler className="w-6 h-6" style={{ color: theme?.primary ?? "#2563eb" }} />
              </div>
              <h3 className="font-bold text-lg mb-1">{unit.title}</h3>
              <p className="text-sm opacity-50 mb-1">{unit.description}</p>
              <div
                className="text-xs font-bold uppercase tracking-wider mb-3 opacity-40"
              >
                {unit.label}
              </div>
              <div
                className="text-2xl font-bold mb-1"
                style={{ color: theme?.primary ?? "#2563eb" }}
              >
                {unit.value}
              </div>

              {/* Mini size visual */}
              <div className="mt-4 mx-auto" style={{ width: `${30 + i * 18}%`, maxWidth: "90%" }}>
                <div
                  className="h-3 rounded-full"
                  style={{ backgroundColor: `${theme?.primary ?? "#2563eb"}20` }}
                >
                  <div
                    className="h-full rounded-full"
                    style={{
                      backgroundColor: theme?.primary ?? "#2563eb",
                      width: `${25 + i * 25}%`,
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href={buttonUrl}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg text-sm font-bold transition-transform hover:scale-105"
            style={{ backgroundColor: theme?.primary ?? "#2563eb", color: "#ffffff" }}
          >
            <Shield className="w-4 h-4" />
            {buttonText}
            <ArrowRight className="w-4 h-4" />
          </a>
          <p className="text-xs opacity-40 mt-4">No long-term contracts. Cancel anytime.</p>
        </div>
      </div>
    </section>
  );
}
