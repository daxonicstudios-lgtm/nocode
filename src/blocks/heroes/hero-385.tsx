"use client";

import type { BlockProps } from "@/blocks/types";
import { Kanban, Users2, Plug, Clock, Plus, MoreHorizontal, ArrowRight, CheckSquare } from "lucide-react";

export default function Hero385(props: BlockProps) {
  const {
    theme,
    heading = "Ship Projects Faster, Together",
    subheading = "Project Management Reimagined",
    bodyText = "From idea to launch, manage every task, deadline, and team member in one place. Integrates with the tools you already use.",
    buttonText = "Get Started Free",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Design homepage mockup", label: "In Progress", value: "High", description: "Sarah K." },
      { title: "Set up CI/CD pipeline", label: "In Progress", value: "Medium", description: "James R." },
      { title: "Write API documentation", label: "To Do", value: "Low", description: "Maria L." },
      { title: "User testing round 2", label: "To Do", value: "High", description: "Alex T." },
      { title: "Deploy staging build", label: "Done", value: "Medium", description: "James R." },
      { title: "Brand guidelines v2", label: "Done", value: "Low", description: "Sarah K." },
    ],
  } = props;

  const columns: Record<string, typeof items> = { "To Do": [], "In Progress": [], "Done": [] };
  items.forEach((item) => {
    const col = item.label || "To Do";
    if (columns[col]) columns[col].push(item);
  });

  const integrations = ["Slack", "GitHub", "Figma", "Notion", "Jira", "Drive"];

  const priorityColors: Record<string, string> = {
    High: "#ef4444",
    Medium: "#f59e0b",
    Low: "#10b981",
  };

  return (
    <section
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
      className="min-h-screen flex items-center"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        {/* Top text */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6"
            style={{ backgroundColor: `${theme?.primary || "#3b82f6"}10`, color: theme?.primary || "#3b82f6" }}
          >
            <Kanban className="w-4 h-4" />
            {subheading}
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-5">
            {heading}
          </h1>

          <p className="text-lg opacity-60 mb-8">
            {bodyText}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={buttonUrl}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-white font-semibold transition-transform hover:scale-105"
              style={{ backgroundColor: theme?.primary || "#3b82f6" }}
            >
              {buttonText}
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Kanban board mockup */}
        <div
          className="rounded-2xl border p-4 sm:p-6 shadow-xl overflow-x-auto"
          style={{ borderColor: `${theme?.foreground || "#000"}08` }}
        >
          {/* Board header */}
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-3">
              <span className="font-semibold">Website Redesign</span>
              <div className="flex -space-x-2">
                {["S", "J", "M", "A"].map((initial, i) => (
                  <div
                    key={i}
                    className="w-7 h-7 rounded-full border-2 flex items-center justify-center text-[10px] font-bold text-white"
                    style={{
                      backgroundColor: theme?.primary || "#3b82f6",
                      borderColor: theme?.background || "#fff",
                      opacity: 1 - i * 0.15,
                    }}
                  >
                    {initial}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs opacity-40">
              <Clock className="w-3.5 h-3.5" />
              <span>Due: Jan 15, 2027</span>
            </div>
          </div>

          {/* Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 min-w-[600px] sm:min-w-0">
            {Object.entries(columns).map(([colName, tasks]) => (
              <div
                key={colName}
                className="rounded-xl p-3"
                style={{ backgroundColor: `${theme?.foreground || "#000"}04` }}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold">{colName}</span>
                    <span
                      className="w-5 h-5 rounded-full text-[10px] flex items-center justify-center font-bold"
                      style={{ backgroundColor: `${theme?.primary || "#3b82f6"}15`, color: theme?.primary || "#3b82f6" }}
                    >
                      {tasks.length}
                    </span>
                  </div>
                  <Plus className="w-4 h-4 opacity-30" />
                </div>

                <div className="space-y-2">
                  {tasks.map((task, i) => (
                    <div
                      key={i}
                      className="rounded-lg p-3 border transition-shadow hover:shadow-md"
                      style={{
                        backgroundColor: theme?.background || "#fff",
                        borderColor: `${theme?.foreground || "#000"}06`,
                      }}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <CheckSquare className="w-3.5 h-3.5 opacity-30" />
                          <span className="text-sm font-medium">{task.title}</span>
                        </div>
                        <MoreHorizontal className="w-3.5 h-3.5 opacity-20" />
                      </div>
                      <div className="flex items-center justify-between">
                        <span
                          className="text-[10px] px-2 py-0.5 rounded-full font-medium"
                          style={{
                            backgroundColor: `${priorityColors[task.value || "Low"]}15`,
                            color: priorityColors[task.value || "Low"],
                          }}
                        >
                          {task.value}
                        </span>
                        <span className="text-[10px] opacity-40">{task.description}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Integrations strip */}
        <div className="mt-8 text-center">
          <p className="text-sm opacity-40 mb-4 flex items-center justify-center gap-2">
            <Plug className="w-4 h-4" />
            Integrates with your favorite tools
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {integrations.map((name, i) => (
              <div
                key={i}
                className="px-4 py-2 rounded-lg text-sm font-medium border"
                style={{ borderColor: `${theme?.foreground || "#000"}10` }}
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
