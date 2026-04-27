import { NextRequest, NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { createClient } from "@/lib/supabase/server";

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ projectId: string; versionId: string }> }
) {
  const { projectId, versionId } = await params;
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const admin = createAdminClient();

  const { data: project } = await admin
    .from("projects")
    .select("user_id")
    .eq("id", projectId)
    .single();

  if (!project || project.user_id !== user.id) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  const { data: version, error } = await admin
    .from("project_versions")
    .select("id, snapshot, description, created_at")
    .eq("id", versionId)
    .eq("project_id", projectId)
    .single();

  if (error || !version) {
    return NextResponse.json({ error: "Version not found" }, { status: 404 });
  }

  return NextResponse.json({ version });
}

/** Restore a version — replace all project files with the snapshot */
export async function POST(
  _request: NextRequest,
  { params }: { params: Promise<{ projectId: string; versionId: string }> }
) {
  const { projectId, versionId } = await params;
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const admin = createAdminClient();

  const { data: project } = await admin
    .from("projects")
    .select("user_id")
    .eq("id", projectId)
    .single();

  if (!project || project.user_id !== user.id) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  const { data: version } = await admin
    .from("project_versions")
    .select("snapshot")
    .eq("id", versionId)
    .eq("project_id", projectId)
    .single();

  if (!version) {
    return NextResponse.json({ error: "Version not found" }, { status: 404 });
  }

  const snapshot = version.snapshot as Record<string, string>;

  // Delete all current files
  await admin.from("project_files").delete().eq("project_id", projectId);

  // Insert snapshot files
  const rows = Object.entries(snapshot).map(([path, content]) => ({
    project_id: projectId,
    path,
    content,
    version: 1,
    updated_at: new Date().toISOString(),
  }));

  if (rows.length > 0) {
    await admin.from("project_files").insert(rows);
  }

  return NextResponse.json({ ok: true, filesRestored: rows.length });
}
