"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";
import type { Project } from "@/types";
import { Wand2, ArrowRight, Pencil, Eye, Plus, Sparkles, FolderOpen, LayoutGrid, Settings } from "lucide-react";
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
        setError("You must be logged in to create a project");
        setCreating(false);
        return;
      }

      // Create a new app-type project and redirect to the AI builder
      const slug = prompt.trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").slice(0, 40) + "-" + Math.random().toString(36).slice(2, 8);
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

      router.push(`/builder/${newProject.id}?prompt=${encodeURIComponent(prompt.trim())}`);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
      setCreating(false);
    }
  }

  const statusConfig: Record<string, { bg: string; text: string; dot: string }> = {
    draft: { bg: "bg-amber-50", text: "text-amber-700", dot: "bg-amber-400" },
    pending: { bg: "bg-blue-50", text: "text-blue-700", dot: "bg-blue-400" },
    published: { bg: "bg-emerald-50", text: "text-emerald-700", dot: "bg-emerald-400" },
  };

  function formatDate(dateStr: string) {
    return new Date(dateStr).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  }

  return (
    <div className="min-h-screen bg-[#FAF7F4]">
      <div className="mx-auto max-w-6xl px-5 py-10">
        {/* Header */}
        <div className="flex items-start justify-between mb-10">
          <div>
            <h1 className="text-3xl font-bold text-[#1A1A1A]">My Projects</h1>
            <p className="mt-2 text-gray-500">
              Create a new app or manage your existing projects.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowTemplates(true)}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-gray-200 text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors"
            >
              <LayoutGrid className="w-4 h-4" />
              Templates
            </button>
            <Link
              href="/settings"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-gray-200 text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors"
            >
              <Settings className="w-4 h-4" />
              Settings
            </Link>
          </div>
        </div>

        {/* AI Builder Card */}
        <div className="mb-10 rounded-2xl bg-white border border-gray-200/60 shadow-sm overflow-hidden">
          {/* Card header */}
          <div className="px-8 pt-8 pb-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E8553D]/10">
                <Wand2 className="h-5 w-5 text-[#E8553D]" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-[#1A1A1A]">
                  What do you want to build?
                </h2>
                <p className="text-sm text-gray-400">
                  Describe your website and our AI will build it for you
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleCreateProject} className="px-8 pb-8">
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="e.g., Build me a modern restaurant website with a menu page, reservation form, about us section, and photo gallery. Use a warm, elegant style..."
              rows={4}
              className="w-full rounded-xl border border-gray-200 bg-[#FAFAF9] px-4 py-3.5 text-sm text-gray-900 placeholder:text-gray-400 focus:border-[#E8553D] focus:ring-2 focus:ring-[#E8553D]/10 focus:outline-none transition-all resize-none"
            />
            <div className="mt-4 flex items-center justify-between">
              <p className="text-xs text-gray-400">
                <Sparkles className="inline w-3 h-3 mr-1" />
                Be as detailed as you want — the AI adapts to your level of detail
              </p>
              <button
                type="submit"
                disabled={creating || prompt.trim().length === 0}
                className="group inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-[#E8553D] px-6 text-sm font-semibold text-white hover:bg-[#D14832] disabled:opacity-40 transition-all shadow-sm shadow-[#E8553D]/15"
              >
                {creating ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Building your site...
                  </span>
                ) : (
                  <>
                    Build My Site
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>

        {/* Error */}
        {error && (
          <div className="mb-6 rounded-xl bg-red-50 border border-red-100 px-5 py-4 text-sm text-red-600 flex items-start gap-3">
            <span className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">!</span>
            {error}
          </div>
        )}

        {/* Section label */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2">
            <FolderOpen className="w-4 h-4 text-gray-400" />
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
              Your Projects
            </h3>
          </div>
          <span className="text-xs text-gray-400">
            {projects.length} project{projects.length !== 1 ? "s" : ""}
          </span>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {loading ? (
            <>
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="animate-pulse rounded-2xl bg-white border border-gray-200/60 p-6 space-y-4"
                >
                  <div className="flex justify-between">
                    <div className="h-5 w-2/3 rounded-lg bg-gray-100" />
                    <div className="h-5 w-14 rounded-full bg-gray-100" />
                  </div>
                  <div className="h-4 w-full rounded-lg bg-gray-50" />
                  <div className="h-4 w-1/2 rounded-lg bg-gray-50" />
                  <div className="h-3 w-1/3 rounded-lg bg-gray-50" />
                </div>
              ))}
            </>
          ) : projects.length === 0 ? (
            <div className="sm:col-span-2 lg:col-span-3 flex flex-col items-center justify-center rounded-2xl bg-white border border-dashed border-gray-300 p-12 text-center">
              <div className="w-14 h-14 rounded-2xl bg-[#E8553D]/5 flex items-center justify-center mb-4">
                <Plus className="w-6 h-6 text-[#E8553D]" />
              </div>
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-1">No projects yet</h3>
              <p className="text-sm text-gray-500 max-w-sm">
                Describe your dream website above and our AI will build it for you in seconds.
              </p>
            </div>
          ) : (
            projects.map((project) => {
              const status = statusConfig[project.status] ?? { bg: "bg-gray-50", text: "text-gray-700", dot: "bg-gray-400" };
              return (
                <div
                  key={project.id}
                  className="group flex flex-col rounded-2xl bg-white border border-gray-200/60 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 overflow-hidden"
                >
                  {/* Color accent bar */}
                  <div className="h-1 bg-gradient-to-r from-[#E8553D] to-[#E8553D]/60" />

                  <div className="flex flex-col gap-3 p-6 flex-1">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-bold text-[#1A1A1A] leading-tight group-hover:text-[#E8553D] transition-colors">
                        {project.name}
                      </h3>
                      <span className={`inline-flex items-center gap-1.5 rounded-full ${status.bg} px-2.5 py-1 text-[10px] font-semibold ${status.text} shrink-0`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${status.dot}`} />
                        {project.status}
                      </span>
                    </div>

                    {project.description && (
                      <p className="text-sm text-gray-500 line-clamp-2 leading-relaxed">
                        {project.description}
                      </p>
                    )}

                    <p className="text-xs text-gray-400 mt-auto pt-1">
                      Updated {formatDate(project.updated_at)}
                    </p>

                    <div className="flex gap-2 pt-2">
                      <Link
                        href={(project as Project & { project_type?: string }).project_type === "app" ? `/builder/${project.id}` : `/editor/${project.id}`}
                        className="inline-flex h-9 flex-1 items-center justify-center gap-1.5 rounded-lg bg-[#E8553D] text-xs font-semibold text-white hover:bg-[#D14832] transition-colors shadow-sm shadow-[#E8553D]/10"
                      >
                        <Pencil className="w-3 h-3" />
                        {(project as Project & { project_type?: string }).project_type === "app" ? "Open Builder" : "Edit"}
                      </Link>
                      {(project as Project & { project_type?: string }).project_type !== "app" && (
                        <Link
                          href={`/preview/${project.id}`}
                          className="inline-flex h-9 flex-1 items-center justify-center gap-1.5 rounded-lg border border-gray-200 text-xs font-medium text-gray-600 hover:bg-gray-50 transition-colors"
                        >
                          <Eye className="w-3 h-3" />
                          Preview
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
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
