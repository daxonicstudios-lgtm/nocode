import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function POST(request: NextRequest) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { projectId } = await request.json();

  // Create publish request
  const { data, error } = await supabase
    .from("publish_requests")
    .insert({
      project_id: projectId,
      user_id: user.id,
      status: "pending",
    })
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  // Update project status
  await supabase
    .from("projects")
    .update({ status: "pending" })
    .eq("id", projectId);

  return NextResponse.json(data, { status: 201 });
}
