import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { createClient } from "@/lib/supabase/server";

export async function GET() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const admin = createAdminClient();

  const { data: credits } = await admin
    .from("credits")
    .select("balance, lifetime_used")
    .eq("user_id", user.id)
    .single();

  // If no credits row exists yet (tables not migrated), return default
  if (!credits) {
    return NextResponse.json({ balance: 50, lifetime_used: 0 });
  }

  return NextResponse.json(credits);
}
