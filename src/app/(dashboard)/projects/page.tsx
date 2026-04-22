"use client";

import { useState } from "react";
import Link from "next/link";

export default function ProjectsPage() {
  const [prompt, setPrompt] = useState("");
  const [creating, setCreating] = useState(false);

  async function handleCreateProject(e: React.FormEvent) {
    e.preventDefault();
    if (!prompt.trim()) return;
    setCreating(true);

    // TODO: Call AI agent API to create project from prompt
    // const res = await fetch("/api/ai", { method: "POST", body: JSON.stringify({ prompt }) });
    // const data = await res.json();
    // router.push(`/editor/${data.projectId}`);

    setCreating(false);
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 space-y-2">
        <h1 className="text-2xl font-bold">My Projects</h1>
        <p className="text-muted-foreground">
          Create a new website or manage your existing projects.
        </p>
      </div>

      {/* AI Prompt Section */}
      <div className="mb-8 rounded-lg border bg-card p-6">
        <h2 className="mb-3 text-lg font-semibold">
          What do you want to build?
        </h2>
        <form onSubmit={handleCreateProject} className="flex flex-col gap-3">
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="e.g., I want an e-commerce website that sells shoes with a modern dark theme..."
            rows={3}
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground"
          />
          <button
            type="submit"
            disabled={creating || !prompt.trim()}
            className="inline-flex h-10 items-center justify-center self-end rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground hover:bg-primary/90 disabled:opacity-50"
          >
            {creating ? "Building..." : "Build My Site"}
          </button>
        </form>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {/* Empty state */}
        <div className="flex flex-col items-center justify-center rounded-lg border border-dashed p-8 text-center">
          <p className="text-sm text-muted-foreground">
            No projects yet. Describe your dream website above to get started!
          </p>
        </div>
      </div>
    </div>
  );
}
