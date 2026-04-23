"use client";

import type { BlockProps } from "@/blocks/types";
import { Search, ShieldCheck, Store, Star, ArrowRight, Tag, TrendingUp, Package } from "lucide-react";

export default function Hero373(props: BlockProps) {
  const {
    theme,
    heading = "Everything You Need, One Marketplace",
    subheading = "TradeHub",
    bodyText = "Shop from thousands of verified sellers across electronics, fashion, home goods, and more. Every purchase is backed by our buyer protection guarantee.",
    buttonText = "Start Shopping",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Electronics", description: "2,400+ listings", icon: "monitor", value: "From $15" },
      { title: "Fashion", description: "5,100+ listings", icon: "shirt", value: "From $8" },
      { title: "Home & Living", description: "3,200+ listings", icon: "home", value: "From $12" },
      { title: "Sports & Outdoors", description: "1,800+ listings", icon: "bike", value: "From $20" },
      { title: "Books & Media", description: "4,600+ listings", icon: "book", value: "From $5" },
      { title: "Health & Beauty", description: "2,900+ listings", icon: "heart", value: "From $7" },
    ],
  } = props;

  const stats = [
    { label: "Verified Sellers", value: "12K+", icon: Store },
    { label: "Products Listed", value: "340K+", icon: Package },
    { label: "Avg Rating", value: "4.8", icon: Star },
  ];

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#ffffff", color: theme?.foreground ?? "#111827" }}
      className="min-h-screen px-5 py-16 sm:py-24 flex items-center relative overflow-hidden"
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(${theme?.primary ?? "#2563eb"} 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        {/* Top section */}
        <div className="text-center mb-12">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider mb-6"
            style={{ backgroundColor: `${theme?.primary ?? "#2563eb"}10`, color: theme?.primary ?? "#2563eb" }}
          >
            <Store className="w-3.5 h-3.5" />
            {subheading}
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.08] mb-6 tracking-tight max-w-3xl mx-auto">
            {heading}
          </h1>

          <p className="text-base sm:text-lg opacity-50 leading-relaxed mb-8 max-w-2xl mx-auto">
            {bodyText}
          </p>

          {/* Search bar */}
          <div className="max-w-xl mx-auto mb-8">
            <div
              className="flex rounded-2xl overflow-hidden border-2 shadow-lg"
              style={{ borderColor: `${theme?.primary ?? "#2563eb"}20` }}
            >
              <div className="flex items-center gap-2 pl-5 flex-1">
                <Search className="w-4 h-4 opacity-30 shrink-0" />
                <input
                  type="text"
                  placeholder="Search products, categories, or sellers..."
                  className="w-full py-4 text-sm bg-transparent outline-none placeholder:opacity-30"
                  style={{ color: theme?.foreground ?? "#111827" }}
                  readOnly
                />
              </div>
              <a
                href={buttonUrl}
                className="flex items-center gap-2 px-6 py-4 text-sm font-bold shrink-0"
                style={{ backgroundColor: theme?.primary ?? "#2563eb", color: "#ffffff" }}
              >
                {buttonText}
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap items-center justify-center gap-8 mb-12">
            {stats.map((s, i) => (
              <div key={i} className="flex items-center gap-2">
                <s.icon className="w-4 h-4" style={{ color: theme?.primary ?? "#2563eb" }} />
                <span className="text-lg font-black">{s.value}</span>
                <span className="text-xs opacity-40">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Category grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
          {items.slice(0, 6).map((cat, i) => (
            <a
              key={i}
              href={buttonUrl}
              className="group p-4 rounded-2xl border text-center transition-all hover:shadow-lg hover:-translate-y-1"
              style={{
                borderColor: `${theme?.primary ?? "#2563eb"}10`,
                backgroundColor: `${theme?.primary ?? "#2563eb"}04`,
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3"
                style={{ backgroundColor: `${theme?.primary ?? "#2563eb"}10` }}
              >
                <Tag className="w-5 h-5" style={{ color: theme?.primary ?? "#2563eb" }} />
              </div>
              <div className="font-bold text-sm mb-1">{cat.title}</div>
              <div className="text-[10px] opacity-40 mb-1">{cat.description}</div>
              <div className="text-xs font-semibold" style={{ color: theme?.primary ?? "#2563eb" }}>{cat.value}</div>
            </a>
          ))}
        </div>

        {/* Trust bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-6 p-5 rounded-2xl border"
          style={{
            borderColor: `${theme?.primary ?? "#2563eb"}12`,
            backgroundColor: `${theme?.primary ?? "#2563eb"}04`,
          }}
        >
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5" style={{ color: theme?.primary ?? "#2563eb" }} />
            <span className="text-sm font-bold">Buyer Protection Guarantee</span>
          </div>
          <div className="hidden sm:block w-px h-5 opacity-15" style={{ backgroundColor: theme?.foreground ?? "#111827" }} />
          <span className="text-xs opacity-50">Full refund if your item doesn&apos;t arrive or match the listing</span>
          <a
            href="#"
            className="text-xs font-bold flex items-center gap-1"
            style={{ color: theme?.primary ?? "#2563eb" }}
          >
            Learn more <ArrowRight className="w-3 h-3" />
          </a>
        </div>

        {imageUrl && (
          <div className="mt-10 rounded-2xl overflow-hidden shadow-xl">
            <img src={imageUrl} alt="Marketplace" className="w-full h-56 object-cover" />
          </div>
        )}
      </div>
    </section>
  );
}
