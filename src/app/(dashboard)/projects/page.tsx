"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";
import type { Project } from "@/types";

export default function ProjectsPage() {
  const router = useRouter();
  const [prompt, setPrompt] = useState("");
  const [creating, setCreating] = useState(false);
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadProjects = useCallback(async () => {
    setLoading(true);
    setError(null);
    const supabase = createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      setLoading(false);
      return;
    }

    const { data, error: fetchError } = await supabase
      .from("projects")
      .select("*")
      .eq("user_id", user.id)
      .order("updated_at", { ascending: false });

    if (fetchError) {
      setError("Failed to load projects");
      console.error("Load projects error:", fetchError.message);
    } else {
      setProjects((data as Project[]) ?? []);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    loadProjects();
  }, [loadProjects]);

  async function handleCreateProject(e: React.FormEvent) {
    e.preventDefault();
    if (!prompt.trim()) return;
    setCreating(true);
    setError(null);

    try {
      const supabase = createClient();
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        setError("You must be logged in to create a project");
        setCreating(false);
        return;
      }

      const res = await fetch("/api/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt, userId: user.id }),
      });

      if (!res.ok) {
        const body = await res.json();
        throw new Error(body.error || "Failed to create project");
      }

      const data = await res.json();
      router.push(`/editor/${data.projectId}`);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
      setCreating(false);
    }
  }

  const statusColor: Record<string, string> = {
    draft: "bg-yellow-100 text-yellow-800",
    pending: "bg-blue-100 text-blue-800",
    published: "bg-green-100 text-green-800",
  };

  function formatDate(dateStr: string) {
    return new Date(dateStr).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
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

      {error && (
        <div className="mb-6 rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </div>
      )}

      {/* Projects Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {loading ? (
          <>
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="animate-pulse rounded-lg border p-6 space-y-3"
              >
                <div className="h-5 w-2/3 rounded bg-muted" />
                <div className="h-4 w-1/3 rounded bg-muted" />
                <div className="h-4 w-1/2 rounded bg-muted" />
              </div>
            ))}
          </>
        ) : projects.length === 0 ? (
          <div className="flex flex-col items-center justify-center rounded-lg border border-dashed p-8 text-center sm:col-span-2 lg:col-span-3">
            <p className="text-sm text-muted-foreground">
              No projects yet. Describe your dream website above to get started!
            </p>
          </div>
        ) : (
          projects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col gap-3 rounded-lg border bg-card p-6 transition-shadow hover:shadow-md"
            >
              <div className="flex items-start justify-between">
                <h3 className="font-semibold leading-tight">{project.name}</h3>
                <span
                  className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${statusColor[project.status] ?? "bg-gray-100 text-gray-800"}`}
                >
                  {project.status}
                </span>
              </div>
              {project.description && (
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {project.description}
                </p>
              )}
              <p className="text-xs text-muted-foreground">
                Updated {formatDate(project.updated_at)}
              </p>
              <div className="mt-auto flex gap-2 pt-2">
                <Link
                  href={`/editor/${project.id}`}
                  className="inline-flex h-8 items-center rounded-md bg-primary px-3 text-xs font-medium text-primary-foreground hover:bg-primary/90"
                >
                  Edit
                </Link>
                <Link
                  href={`/preview/${project.id}`}
                  className="inline-flex h-8 items-center rounded-md border px-3 text-xs font-medium hover:bg-accent"
                >
                  Preview
                </Link>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
