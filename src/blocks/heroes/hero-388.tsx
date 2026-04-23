"use client";

import type { BlockProps } from "@/blocks/types";
import { Package, Warehouse, ScanBarcode, AlertTriangle, ArrowRight, TrendingUp, Boxes, Truck } from "lucide-react";

export default function Hero388(props: BlockProps) {
  const {
    theme,
    heading = "Know Every Item, in Every Warehouse, in Real Time",
    subheading = "Inventory Management",
    bodyText = "Track stock levels, automate reorders, and reduce waste with intelligent inventory management. Barcode scanning, multi-location support, and powerful reporting built in.",
    buttonText = "Start Managing Inventory",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Widget Pro X1", value: "2,450", label: "In Stock", description: "SKU-8842" },
      { title: "Sensor Module B", value: "180", label: "Low Stock", description: "SKU-3291" },
      { title: "Power Adapter C3", value: "1,820", label: "In Stock", description: "SKU-6710" },
      { title: "Cable Assembly D", value: "45", label: "Critical", description: "SKU-1155" },
      { title: "Display Panel E2", value: "920", label: "In Stock", description: "SKU-4403" },
    ],
  } = props;

  const warehouseStats = [
    { label: "Total SKUs", value: "12,480" },
    { label: "Warehouses", value: "5" },
    { label: "Fill Rate", value: "98.2%" },
    { label: "Turns/Year", value: "8.4x" },
  ];

  const statusColors: Record<string, string> = {
    "In Stock": "#10b981",
    "Low Stock": "#f59e0b",
    "Critical": "#ef4444",
  };

  const stockLevels = [85, 92, 45, 78, 30, 88, 95, 62];

  return (
    <section
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
      className="min-h-screen flex items-center relative overflow-hidden"
    >
      {/* Barcode motif background */}
      <div className="absolute right-0 top-0 bottom-0 w-32 opacity-[0.03] flex gap-1 items-stretch">
        {[4, 2, 6, 2, 4, 8, 2, 6, 4, 2, 8, 2, 4, 6, 2, 4, 2, 8, 6, 2].map((w, i) => (
          <div key={i} style={{ width: `${w}px`, backgroundColor: theme?.foreground || "#000" }} />
        ))}
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left content */}
          <div className="lg:col-span-5">
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium mb-6"
              style={{ backgroundColor: `${theme?.primary || "#f97316"}12`, color: theme?.primary || "#f97316" }}
            >
              <Warehouse className="w-4 h-4" />
              {subheading}
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-5">
              {heading}
            </h1>

            <p className="text-base opacity-60 mb-8 leading-relaxed">
              {bodyText}
            </p>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {warehouseStats.map((stat, i) => (
                <div
                  key={i}
                  className="p-3 rounded-lg"
                  style={{ backgroundColor: `${theme?.foreground || "#000"}04` }}
                >
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-xs opacity-40">{stat.label}</div>
                </div>
              ))}
            </div>

            <a
              href={buttonUrl}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-white font-semibold transition-transform hover:scale-105"
              style={{ backgroundColor: theme?.primary || "#f97316" }}
            >
              {buttonText}
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Right - Inventory dashboard */}
          <div className="lg:col-span-7 space-y-4">
            {/* Stock levels visualization */}
            <div
              className="rounded-2xl border p-5 shadow-lg"
              style={{ borderColor: `${theme?.foreground || "#000"}08` }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Boxes className="w-4 h-4" style={{ color: theme?.primary || "#f97316" }} />
                  <span className="font-semibold text-sm">Stock Levels by Location</span>
                </div>
                <span className="text-xs opacity-40">8 zones</span>
              </div>

              <div className="grid grid-cols-8 gap-2 mb-1">
                {stockLevels.map((level, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <div className="w-full h-20 rounded-md relative overflow-hidden" style={{ backgroundColor: `${theme?.foreground || "#000"}06` }}>
                      <div
                        className="absolute bottom-0 left-0 right-0 rounded-md transition-all"
                        style={{
                          height: `${level}%`,
                          backgroundColor: level > 70 ? "#10b981" : level > 40 ? "#f59e0b" : "#ef4444",
                          opacity: 0.7,
                        }}
                      />
                    </div>
                    <span className="text-[10px] opacity-40 mt-1">Z{i + 1}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Item list */}
            <div
              className="rounded-2xl border p-5 shadow-lg"
              style={{ borderColor: `${theme?.foreground || "#000"}08` }}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-semibold text-sm">Inventory Items</span>
                <div className="flex items-center gap-2">
                  <ScanBarcode className="w-4 h-4 opacity-30" />
                  <span className="text-xs opacity-40">Scan to add</span>
                </div>
              </div>

              <div className="space-y-2">
                {items.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-3 rounded-lg transition-colors"
                    style={{ backgroundColor: `${theme?.foreground || "#000"}03` }}
                  >
                    <div className="flex items-center gap-3">
                      <Package className="w-4 h-4 opacity-30" />
                      <div>
                        <div className="text-sm font-medium">{item.title}</div>
                        <div className="text-[10px] opacity-40 font-mono">{item.description}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-bold">{item.value}</span>
                      <span
                        className="text-[10px] px-2 py-0.5 rounded-full font-medium"
                        style={{
                          backgroundColor: `${statusColors[item.label || "In Stock"]}15`,
                          color: statusColors[item.label || "In Stock"],
                        }}
                      >
                        {item.label === "Critical" && <AlertTriangle className="w-3 h-3 inline mr-0.5" />}
                        {item.label}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick actions */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { icon: ScanBarcode, label: "Scan Items" },
                { icon: Truck, label: "Shipments" },
                { icon: TrendingUp, label: "Reports" },
              ].map((action, i) => (
                <div
                  key={i}
                  className="flex items-center justify-center gap-2 p-3 rounded-xl border text-sm font-medium transition-colors"
                  style={{ borderColor: `${theme?.foreground || "#000"}10` }}
                >
                  <action.icon className="w-4 h-4" style={{ color: theme?.primary || "#f97316" }} />
                  {action.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
