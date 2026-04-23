"use client";

import type { BlockProps } from "@/blocks/types";
import { Code2, ArrowRight, Layers, Rocket, GitBranch, Monitor, Smartphone, Cloud, Database, Zap, CheckCircle } from "lucide-react";

export default function Hero377(props: BlockProps) {
  const {
    theme,
    heading = "We Build What Others Can't",
    subheading = "Nexus Digital Agency",
    bodyText = "Full-stack digital agency specializing in complex web applications, mobile platforms, and cloud infrastructure. From concept to deployment, we ship products that scale.",
    buttonText = "Start a Project",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "React / Next.js", description: "Frontend", icon: "react" },
      { title: "Node / Python", description: "Backend", icon: "node" },
      { title: "AWS / GCP", description: "Cloud", icon: "cloud" },
      { title: "PostgreSQL", description: "Database", icon: "db" },
      { title: "React Native", description: "Mobile", icon: "mobile" },
      { title: "Docker / K8s", description: "DevOps", icon: "devops" },
    ],
  } = props;

  const processSteps = [
    { step: "01", title: "Discovery", desc: "Requirements & architecture" },
    { step: "02", title: "Design", desc: "UI/UX & prototyping" },
    { step: "03", title: "Develop", desc: "Agile sprints & CI/CD" },
    { step: "04", title: "Deploy", desc: "Launch & monitoring" },
  ];

  const techIcons = [Code2, Monitor, Smartphone, Cloud, Database, GitBranch];

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#0d1117", color: theme?.foreground ?? "#e6edf3" }}
      className="min-h-screen px-5 py-16 sm:py-24 flex items-center relative overflow-hidden"
    >
      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(${theme?.primary ?? "#58a6ff"} 1px, transparent 1px), linear-gradient(90deg, ${theme?.primary ?? "#58a6ff"} 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left */}
          <div>
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider mb-6 border"
              style={{ borderColor: `${theme?.primary ?? "#58a6ff"}30`, color: theme?.primary ?? "#58a6ff" }}
            >
              <Code2 className="w-3.5 h-3.5" />
              {subheading}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.05] mb-6 tracking-tight">
              {heading}
            </h1>

            <p className="text-base sm:text-lg opacity-50 leading-relaxed mb-6 max-w-lg">
              {bodyText}
            </p>

            {/* Project counter */}
            <div className="flex flex-wrap gap-6 mb-8">
              {[
                { val: "180+", label: "Projects Shipped" },
                { val: "40+", label: "Enterprise Clients" },
                { val: "99.9%", label: "Uptime SLA" },
              ].map((s, i) => (
                <div key={i}>
                  <div className="text-2xl font-black" style={{ color: theme?.primary ?? "#58a6ff" }}>{s.val}</div>
                  <div className="text-[10px] uppercase tracking-wider opacity-30">{s.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href={buttonUrl}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg text-sm font-bold transition-transform hover:scale-105"
                style={{ backgroundColor: theme?.primary ?? "#58a6ff", color: "#0d1117" }}
              >
                <Rocket className="w-4 h-4" />
                {buttonText}
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg text-sm font-semibold border"
                style={{ borderColor: `${theme?.primary ?? "#58a6ff"}30`, color: theme?.primary ?? "#58a6ff" }}
              >
                View Case Studies
              </a>
            </div>

            {/* Tech stack */}
            <div>
              <span className="text-xs uppercase tracking-widest opacity-30 font-bold">Our Stack</span>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 mt-3">
                {items.slice(0, 6).map((tech, i) => {
                  const Icon = techIcons[i % techIcons.length];
                  return (
                    <div
                      key={i}
                      className="flex flex-col items-center gap-1.5 p-3 rounded-lg border transition-all hover:scale-105"
                      style={{
                        borderColor: `${theme?.primary ?? "#58a6ff"}12`,
                        backgroundColor: `${theme?.primary ?? "#58a6ff"}05`,
                      }}
                    >
                      <Icon className="w-5 h-5" style={{ color: theme?.primary ?? "#58a6ff" }} />
                      <span className="text-[9px] font-semibold text-center leading-tight opacity-60">{tech.title}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right — Process + image */}
          <div>
            {imageUrl && (
              <div className="rounded-2xl overflow-hidden mb-6 shadow-xl border" style={{ borderColor: `${theme?.primary ?? "#58a6ff"}10` }}>
                <img src={imageUrl} alt="Agency work" className="w-full h-48 object-cover" />
              </div>
            )}

            <h3 className="text-xs font-bold uppercase tracking-widest opacity-30 mb-4 flex items-center gap-2">
              <Layers className="w-3.5 h-3.5" />
              Development Process
            </h3>

            <div className="space-y-3">
              {processSteps.map((step, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-4 rounded-xl border transition-all hover:translate-x-1"
                  style={{
                    borderColor: `${theme?.primary ?? "#58a6ff"}12`,
                    backgroundColor: `${theme?.primary ?? "#58a6ff"}05`,
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 font-mono font-black text-sm"
                    style={{ backgroundColor: `${theme?.primary ?? "#58a6ff"}15`, color: theme?.primary ?? "#58a6ff" }}
                  >
                    {step.step}
                  </div>
                  <div>
                    <div className="font-bold text-sm">{step.title}</div>
                    <div className="text-xs opacity-40">{step.desc}</div>
                  </div>
                  <CheckCircle className="w-4 h-4 ml-auto opacity-20" />
                </div>
              ))}
            </div>

            <div
              className="mt-4 p-4 rounded-xl text-center text-xs border flex items-center justify-center gap-2"
              style={{
                borderColor: `${theme?.primary ?? "#58a6ff"}12`,
                backgroundColor: `${theme?.primary ?? "#58a6ff"}05`,
              }}
            >
              <Zap className="w-3.5 h-3.5" style={{ color: theme?.primary ?? "#58a6ff" }} />
              <span className="font-bold">Average delivery:</span>
              <span className="opacity-50">8-12 weeks from kickoff to launch</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
