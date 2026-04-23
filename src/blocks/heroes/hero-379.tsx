"use client";

import type { BlockProps } from "@/blocks/types";
import { FileText, Download, ArrowRight, CheckCircle, Sparkles, Layout, Palette, PenTool, Zap } from "lucide-react";

export default function Hero379(props: BlockProps) {
  const {
    theme,
    heading = "Land Your Dream Job with a Standout Resume",
    subheading = "ResumeForge",
    bodyText = "Build a professional, ATS-friendly resume in minutes. Choose from expertly designed templates, get AI-powered suggestions, and download in PDF or Word format.",
    buttonText = "Build My Resume",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Executive Modern", description: "Clean lines, bold headings", value: "Popular", label: "template" },
      { title: "Creative Studio", description: "Color accents, visual layout", value: "Trending", label: "template" },
      { title: "Minimal Classic", description: "Traditional, ATS-optimized", value: "Top Rated", label: "template" },
    ],
  } = props;

  const steps = [
    { num: "1", title: "Choose Template", desc: "Pick from 50+ designs", icon: Layout },
    { num: "2", title: "Add Your Info", desc: "AI helps write sections", icon: PenTool },
    { num: "3", title: "Customize Style", desc: "Colors, fonts, layout", icon: Palette },
    { num: "4", title: "Download", desc: "PDF, Word, or share link", icon: Download },
  ];

  const templateColors = ["#6366f1", "#ec4899", "#10b981"];

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#fafbfc", color: theme?.foreground ?? "#1e293b" }}
      className="min-h-screen px-5 py-16 sm:py-24 flex items-center relative overflow-hidden"
    >
      {/* Subtle accent */}
      <div
        className="absolute top-0 left-1/3 w-[400px] h-[300px] rounded-full blur-[180px] opacity-8"
        style={{ backgroundColor: theme?.primary ?? "#6366f1" }}
      />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left */}
          <div>
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider mb-6"
              style={{ backgroundColor: `${theme?.primary ?? "#6366f1"}10`, color: theme?.primary ?? "#6366f1" }}
            >
              <FileText className="w-3.5 h-3.5" />
              {subheading}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.05] mb-6 tracking-tight">
              {heading}
            </h1>

            <p className="text-base sm:text-lg opacity-50 leading-relaxed mb-6 max-w-lg">
              {bodyText}
            </p>

            {/* Features list */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {["ATS-Friendly", "AI Writing Help", "50+ Templates", "Export to PDF"].map((feat, i) => (
                <div key={i} className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 shrink-0" style={{ color: theme?.primary ?? "#6366f1" }} />
                  <span className="opacity-70">{feat}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href={buttonUrl}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold transition-transform hover:scale-105"
                style={{ backgroundColor: theme?.primary ?? "#6366f1", color: "#ffffff" }}
              >
                <Sparkles className="w-4 h-4" />
                {buttonText}
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold border"
                style={{ borderColor: `${theme?.primary ?? "#6366f1"}30`, color: theme?.primary ?? "#6366f1" }}
              >
                <Layout className="w-4 h-4" />
                Browse Templates
              </a>
            </div>

            {/* Step process */}
            <div className="flex flex-wrap gap-3">
              {steps.map((step, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg border text-xs"
                  style={{
                    borderColor: `${theme?.primary ?? "#6366f1"}12`,
                    backgroundColor: `${theme?.primary ?? "#6366f1"}04`,
                  }}
                >
                  <div
                    className="w-6 h-6 rounded-md flex items-center justify-center shrink-0 text-[10px] font-black"
                    style={{ backgroundColor: `${theme?.primary ?? "#6366f1"}15`, color: theme?.primary ?? "#6366f1" }}
                  >
                    {step.num}
                  </div>
                  <div>
                    <div className="font-bold">{step.title}</div>
                    <div className="opacity-40 text-[10px]">{step.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Template previews */}
          <div>
            {imageUrl && (
              <div className="rounded-2xl overflow-hidden mb-6 shadow-xl">
                <img src={imageUrl} alt="Resume templates" className="w-full h-48 object-cover" />
              </div>
            )}

            <div className="space-y-4">
              {items.slice(0, 3).map((template, i) => (
                <div
                  key={i}
                  className="group flex gap-4 p-5 rounded-2xl border transition-all hover:shadow-lg hover:-translate-y-0.5 cursor-pointer"
                  style={{
                    borderColor: `${templateColors[i]}15`,
                    backgroundColor: `${templateColors[i]}04`,
                  }}
                >
                  {/* Mini resume preview */}
                  <div
                    className="w-16 h-22 rounded-lg shrink-0 p-2 flex flex-col gap-1"
                    style={{ backgroundColor: "#ffffff", border: `2px solid ${templateColors[i]}20` }}
                  >
                    <div className="w-full h-1.5 rounded-full" style={{ backgroundColor: templateColors[i] }} />
                    <div className="w-3/4 h-1 rounded-full opacity-20" style={{ backgroundColor: templateColors[i] }} />
                    <div className="w-full h-0.5 rounded-full bg-gray-200 mt-1" />
                    <div className="w-full h-0.5 rounded-full bg-gray-200" />
                    <div className="w-2/3 h-0.5 rounded-full bg-gray-200" />
                    <div className="w-full h-0.5 rounded-full bg-gray-100 mt-1" />
                    <div className="w-full h-0.5 rounded-full bg-gray-100" />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-sm">{template.title}</span>
                      <span
                        className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full"
                        style={{ backgroundColor: `${templateColors[i]}12`, color: templateColors[i] }}
                      >
                        {template.value}
                      </span>
                    </div>
                    <p className="text-xs opacity-40 mb-3">{template.description}</p>
                    <a
                      href={buttonUrl}
                      className="text-xs font-bold flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ color: templateColors[i] }}
                    >
                      Use This Template <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div
              className="mt-4 p-4 rounded-xl text-center border flex items-center justify-center gap-2"
              style={{
                borderColor: `${theme?.primary ?? "#6366f1"}12`,
                backgroundColor: `${theme?.primary ?? "#6366f1"}04`,
              }}
            >
              <Zap className="w-3.5 h-3.5" style={{ color: theme?.primary ?? "#6366f1" }} />
              <span className="text-xs">
                <span className="font-bold">2.4 million resumes</span>
                <span className="opacity-40"> created by job seekers worldwide</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
