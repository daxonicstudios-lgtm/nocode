"use client";

import type { BlockProps } from "@/blocks/types";
import { Brain, Cpu, Sparkles, ArrowRight, Layers, Zap, Network } from "lucide-react";

export default function Hero319(props: BlockProps) {
  const {
    theme,
    heading = "Intelligence at Scale",
    subheading = "Next-Generation AI Infrastructure",
    bodyText = "Deploy production-ready machine learning models in minutes. Our neural architecture adapts to your data, delivering 10x faster inference at a fraction of the cost.",
    buttonText = "Request Access",
    buttonUrl = "#",
    imageUrl,
    items = [],
  } = props;

  const primaryColor = theme?.primary || "#8b5cf6";
  const bgColor = theme?.background || "#030712";
  const fgColor = theme?.foreground || "#f1f5f9";

  // Neural network node positions
  const layers = [
    [{ x: 10, y: 20 }, { x: 10, y: 40 }, { x: 10, y: 60 }, { x: 10, y: 80 }],
    [{ x: 30, y: 15 }, { x: 30, y: 35 }, { x: 30, y: 55 }, { x: 30, y: 75 }, { x: 30, y: 90 }],
    [{ x: 50, y: 25 }, { x: 50, y: 45 }, { x: 50, y: 65 }, { x: 50, y: 85 }],
    [{ x: 70, y: 20 }, { x: 70, y: 45 }, { x: 70, y: 70 }],
    [{ x: 90, y: 35 }, { x: 90, y: 65 }],
  ];

  const features = items.length > 0 ? items : [
    { title: "Auto-Scaling", description: "Dynamically scales with demand", icon: "layers" },
    { title: "Edge Inference", description: "Sub-10ms response times", icon: "zap" },
    { title: "Model Hub", description: "200+ pre-trained models", icon: "network" },
  ];

  const iconMap: Record<string, React.ReactNode> = {
    layers: <Layers className="w-5 h-5" />,
    zap: <Zap className="w-5 h-5" />,
    network: <Network className="w-5 h-5" />,
  };

  return (
    <section
      style={{ backgroundColor: bgColor, color: fgColor }}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Radial gradient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-[0.08]"
        style={{
          background: `radial-gradient(circle, ${primaryColor}, transparent 70%)`,
        }}
      />

      {/* Grid lines */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(${fgColor} 1px, transparent 1px), linear-gradient(90deg, ${fgColor} 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: `${primaryColor}15`, color: primaryColor }}
              >
                <Brain className="w-5 h-5" />
              </div>
              <span
                className="text-sm font-semibold tracking-wide"
                style={{ color: primaryColor }}
              >
                {subheading}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tight leading-[1.05]">
              {heading.split(" ").map((word, i) => (
                <span key={i}>
                  {i === heading.split(" ").length - 1 ? (
                    <span
                      className="bg-clip-text text-transparent"
                      style={{
                        backgroundImage: `linear-gradient(135deg, ${primaryColor}, #ec4899)`,
                      }}
                    >
                      {word}
                    </span>
                  ) : (
                    word
                  )}{" "}
                </span>
              ))}
            </h1>

            <p className="text-base md:text-lg opacity-50 max-w-lg leading-relaxed">
              {bodyText}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={buttonUrl}
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-bold text-white transition-all hover:shadow-lg"
                style={{
                  background: `linear-gradient(135deg, ${primaryColor}, #ec4899)`,
                  boxShadow: `0 4px 24px ${primaryColor}30`,
                }}
              >
                <Sparkles className="w-4 h-4" />
                {buttonText}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <button
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-semibold border transition-opacity hover:opacity-70"
                style={{ borderColor: `${fgColor}12` }}
              >
                <Cpu className="w-4 h-4 opacity-50" />
                Read the Docs
              </button>
            </div>

            {/* Feature pills */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4">
              {features.map((f, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-3 rounded-xl border"
                  style={{
                    backgroundColor: `${fgColor}03`,
                    borderColor: `${fgColor}08`,
                  }}
                >
                  <div style={{ color: primaryColor }}>
                    {iconMap[f.icon || ""] || <Zap className="w-5 h-5" />}
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{f.title}</div>
                    <div className="text-xs opacity-40">{f.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - neural network visualization */}
          <div className="flex items-center justify-center">
            <div
              className="relative w-full max-w-md aspect-square rounded-3xl border overflow-hidden"
              style={{
                backgroundColor: `${fgColor}03`,
                borderColor: `${fgColor}08`,
              }}
            >
              <svg viewBox="0 0 100 100" className="w-full h-full">
                {/* Connections */}
                {layers.slice(0, -1).map((layer, li) =>
                  layer.map((node, ni) =>
                    layers[li + 1].map((nextNode, nni) => (
                      <line
                        key={`${li}-${ni}-${nni}`}
                        x1={node.x}
                        y1={node.y}
                        x2={nextNode.x}
                        y2={nextNode.y}
                        stroke={primaryColor}
                        strokeWidth="0.2"
                        opacity={0.15 + (Math.random() * 0.15)}
                      />
                    ))
                  )
                )}

                {/* Nodes */}
                {layers.map((layer, li) =>
                  layer.map((node, ni) => (
                    <g key={`node-${li}-${ni}`}>
                      <circle
                        cx={node.x}
                        cy={node.y}
                        r="2.5"
                        fill={bgColor}
                        stroke={primaryColor}
                        strokeWidth="0.5"
                        opacity={0.8}
                      />
                      <circle
                        cx={node.x}
                        cy={node.y}
                        r="1"
                        fill={primaryColor}
                        opacity={0.5 + (li * 0.1)}
                      />
                    </g>
                  ))
                )}

                {/* Layer labels */}
                {["Input", "Hidden", "Hidden", "Dense", "Output"].map((label, i) => (
                  <text
                    key={label + i}
                    x={10 + i * 20}
                    y={98}
                    fill={fgColor}
                    fontSize="2.5"
                    textAnchor="middle"
                    opacity={0.2}
                    fontFamily="monospace"
                  >
                    {label}
                  </text>
                ))}
              </svg>

              {/* Floating stats */}
              <div
                className="absolute top-4 left-4 px-3 py-2 rounded-lg text-xs border"
                style={{
                  backgroundColor: `${bgColor}e0`,
                  borderColor: `${fgColor}10`,
                }}
              >
                <div className="opacity-40 mb-1">Model Accuracy</div>
                <div className="font-bold text-lg" style={{ color: primaryColor }}>99.2%</div>
              </div>

              <div
                className="absolute bottom-4 right-4 px-3 py-2 rounded-lg text-xs border"
                style={{
                  backgroundColor: `${bgColor}e0`,
                  borderColor: `${fgColor}10`,
                }}
              >
                <div className="opacity-40 mb-1">Inference Time</div>
                <div className="font-bold text-lg" style={{ color: primaryColor }}>8ms</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
