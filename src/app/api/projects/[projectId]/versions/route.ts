import { NextRequest, NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { createClient } from "@/lib/supabase/server";

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ projectId: string }> }
) {
  const { projectId } = await params;
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

  const { data: versions, error } = await admin
    .from("project_versions")
    .select("id, description, created_at")
    .eq("project_id", projectId)
    .order("created_at", { ascending: false });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ versions: versions || [] });
}

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ projectId: string }> }
) {
  const { projectId } = await params;
  const { description } = await request.json();

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

  // Get current files for snapshot
  const { data: files } = await admin
    .from("project_files")
    .select("path, content")
    .eq("project_id", projectId);

  const snapshot: Record<string, string> = {};
  for (const f of files || []) {
    snapshot[f.path] = f.content;
  }

  const { data: version, error } = await admin
    .from("project_versions")
    .insert({
      project_id: projectId,
      snapshot,
      description: description || "Manual checkpoint",
    })
    .select("id, description, created_at")
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ version });
}
