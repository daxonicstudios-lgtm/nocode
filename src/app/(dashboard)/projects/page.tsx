"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";
import type { Project } from "@/types";
import {
  Sparkles,
  ArrowRight,
  Plus,
  FolderOpen,
  LayoutGrid,
  Settings,
  Rocket,
  Clock,
  ExternalLink,
  Globe,
} from "lucide-react";
import TemplateGallery from "@/components/builder/TemplateGallery";

export default function ProjectsPage() {
  const [showTemplates, setShowTemplates] = useState(false);
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
        setError("You must be logged in");
        setCreating(false);
        return;
      }

      const slug =
        prompt
          .trim()
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .slice(0, 40) +
        "-" +
        Math.random().toString(36).slice(2, 8);

      const { data: newProject, error: createErr } = await supabase
        .from("projects")
        .insert({
          user_id: user.id,
          name: prompt.trim().slice(0, 100),
          slug,
          description: prompt.trim(),
          status: "draft",
          project_type: "app",
        })
        .select("id")
        .single();

      if (createErr || !newProject) {
        throw new Error(createErr?.message || "Failed to create project");
      }

      router.push(
        `/builder/${newProject.id}?prompt=${encodeURIComponent(prompt.trim())}`
      );
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
      setCreating(false);
    }
  }

  function timeAgo(dateStr: string): string {
    const seconds = Math.floor(
      (Date.now() - new Date(dateStr).getTime()) / 1000
    );
    if (seconds < 60) return "just now";
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `${minutes}m ago`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours}h ago`;
    const days = Math.floor(hours / 24);
    if (days < 30) return `${days}d ago`;
    return new Date(dateStr).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });
  }

  const statusConfig: Record<
    string,
    { dot: string; label: string }
  > = {
    draft: { dot: "bg-amber-400", label: "Draft" },
    pending: { dot: "bg-blue-400", label: "Pending" },
    published: { dot: "bg-emerald-400", label: "Live" },
  };

  return (
    <div className="min-h-screen bg-[#0A0A0F]">
      <div className="mx-auto max-w-6xl px-5 py-8">
        {/* ─── Header ─── */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-blue-400"
            >
              XXEL
            </Link>
            <div className="w-px h-5 bg-zinc-800" />
            <h1 className="text-lg font-semibold text-zinc-200">Projects</h1>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowTemplates(true)}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg border border-zinc-800 text-sm text-zinc-400 hover:bg-zinc-900 hover:text-zinc-200 transition-colors"
            >
              <LayoutGrid className="w-4 h-4" />
              <span className="hidden sm:inline">Templates</span>
            </button>
            <Link
              href="/settings"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg border border-zinc-800 text-sm text-zinc-400 hover:bg-zinc-900 hover:text-zinc-200 transition-colors"
            >
              <Settings className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* ─── Create Card ─── */}
        <div className="mb-8 rounded-2xl bg-zinc-900/50 border border-zinc-800/50 overflow-hidden">
          <form onSubmit={handleCreateProject} className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-violet-400" />
              <h2 className="text-base font-semibold text-zinc-200">
                What do you want to build?
              </h2>
            </div>
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Describe your app... e.g., Build a crypto dashboard with portfolio tracking, live charts, and a dark theme"
              rows={3}
              className="w-full rounded-xl bg-zinc-800/50 border border-zinc-700/50 px-4 py-3 text-sm text-zinc-200 placeholder:text-zinc-600 focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/20 outline-none transition-all resize-none"
            />
            <div className="mt-3 flex items-center justify-between">
              <p className="text-xs text-zinc-600">
                The AI generates real React + TypeScript code
              </p>
              <button
                type="submit"
                disabled={creating || prompt.trim().length === 0}
                className="group inline-flex h-10 items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 px-5 text-sm font-semibold text-white hover:from-violet-500 hover:to-blue-500 disabled:opacity-40 transition-all shadow-lg shadow-violet-500/10"
              >
                {creating ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Creating...
                  </>
                ) : (
                  <>
                    Build
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>

        {/* ─── Error ─── */}
        {error && (
          <div className="mb-6 rounded-xl bg-red-500/10 border border-red-500/20 px-4 py-3 text-sm text-red-400">
            {error}
          </div>
        )}

        {/* ─── Projects Header ─── */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <FolderOpen className="w-4 h-4 text-zinc-600" />
            <h3 className="text-xs font-semibold text-zinc-600 uppercase tracking-wider">
              Your Projects
            </h3>
          </div>
          <span className="text-xs text-zinc-700">
            {projects.length} project{projects.length !== 1 ? "s" : ""}
          </span>
        </div>

        {/* ─── Projects Grid ─── */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {loading ? (
            <>
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="animate-pulse rounded-xl bg-zinc-900/50 border border-zinc-800/50 p-5 space-y-3"
                >
                  <div className="h-4 w-2/3 rounded bg-zinc-800" />
                  <div className="h-3 w-full rounded bg-zinc-800/50" />
                  <div className="h-3 w-1/2 rounded bg-zinc-800/50" />
                </div>
              ))}
            </>
          ) : projects.length === 0 ? (
            <div className="sm:col-span-2 lg:col-span-3 flex flex-col items-center justify-center rounded-xl border border-dashed border-zinc-800 p-12 text-center">
              <div className="w-14 h-14 rounded-2xl bg-violet-600/10 flex items-center justify-center mb-4">
                <Plus className="w-6 h-6 text-violet-400" />
              </div>
              <h3 className="text-base font-semibold text-zinc-300 mb-1">
                No projects yet
              </h3>
              <p className="text-sm text-zinc-600 max-w-sm">
                Describe your app above or pick a template to get started.
              </p>
            </div>
          ) : (
            projects.map((project) => {
              const p = project as Project & { project_type?: string; published_url?: string };
              const status = statusConfig[project.status] ?? {
                dot: "bg-zinc-500",
                label: project.status,
              };
              const isApp = p.project_type === "app";
              const href = isApp
                ? `/builder/${project.id}`
                : `/editor/${project.id}`;

              return (
                <Link
                  key={project.id}
                  href={href}
                  className="group flex flex-col rounded-xl bg-zinc-900/50 border border-zinc-800/50 hover:border-zinc-700/50 hover:bg-zinc-900/80 transition-all duration-200 overflow-hidden"
                >
                  {/* Gradient accent */}
                  <div className="h-0.5 bg-gradient-to-r from-violet-600 to-blue-600 opacity-60 group-hover:opacity-100 transition-opacity" />

                  <div className="flex flex-col gap-2.5 p-5 flex-1">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-semibold text-zinc-200 leading-tight group-hover:text-white transition-colors line-clamp-1">
                        {project.name}
                      </h3>
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-zinc-800/80 px-2 py-0.5 text-[10px] font-medium text-zinc-400 shrink-0">
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${status.dot}`}
                        />
                        {status.label}
                      </span>
                    </div>

                    {project.description && (
                      <p className="text-xs text-zinc-600 line-clamp-2 leading-relaxed">
                        {project.description}
                      </p>
                    )}

                    <div className="flex items-center gap-3 mt-auto pt-2 text-xs text-zinc-700">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {timeAgo(project.updated_at)}
                      </span>
                      {p.published_url && (
                        <span className="flex items-center gap-1 text-emerald-600">
                          <Globe className="w-3 h-3" />
                          Live
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              );
            })
          )}
        </div>
      </div>

      {/* Template gallery modal */}
      {showTemplates && (
        <TemplateGallery onClose={() => setShowTemplates(false)} />
      )}
    </div>
  );
}
