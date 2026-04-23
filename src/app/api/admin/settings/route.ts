import { NextRequest, NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { createClient } from "@/lib/supabase/server";

async function verifyAdmin(): Promise<string | null> {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return null;

  const admin = createAdminClient();
  const { data: profile } = await admin
    .from("profiles")
    .select("is_admin")
    .eq("id", user.id)
    .single();

  return profile?.is_admin ? user.id : null;
}

export async function GET() {
  const adminId = await verifyAdmin();
  if (!adminId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  }

  const supabase = createAdminClient();
  const { data, error } = await supabase
    .from("platform_settings")
    .select("*")
    .limit(1)
    .single();

  if (error) {
    // If table doesn't exist or no rows, return defaults
    return NextResponse.json({
      platform_name: "NoCode",
      allow_signups: true,
      max_projects_free: 3,
      max_projects_pro: 50,
      maintenance_mode: false,
    });
  }

  return NextResponse.json(data);
}

export async function PUT(request: NextRequest) {
  const adminId = await verifyAdmin();
  if (!adminId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  }

  const body = await request.json();
  const supabase = createAdminClient();

  // Upsert settings (single row)
  const { data, error } = await supabase
    .from("platform_settings")
    .upsert({ id: 1, ...body })
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data);
}
