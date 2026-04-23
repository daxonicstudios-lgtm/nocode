import { createClient } from "@/lib/supabase/client";

interface CreateNotificationPayload {
  projectId: string;
  projectName: string;
  pageCount: number;
  blockCount: number;
}

/**
 * Creates a notification in Supabase when a publish request is submitted.
 * Targets all admin users so they see the request in their notification bell.
 */
export async function createNotification(payload: CreateNotificationPayload) {
  const supabase = createClient();

  // Find admin users to notify
  const { data: admins, error: adminsError } = await supabase
    .from("profiles")
    .select("id")
    .eq("is_admin", true);

  if (adminsError || !admins || admins.length === 0) {
    // Silently fail — notification is non-critical
    return;
  }

  const notifications = admins.map((admin) => ({
    user_id: admin.id,
    type: "publish_request",
    title: `New publish request: ${payload.projectName}`,
    message: `Project "${payload.projectName}" with ${payload.pageCount} page(s) and ${payload.blockCount} block(s) is awaiting review.`,
    data: {
      project_id: payload.projectId,
      project_name: payload.projectName,
      page_count: payload.pageCount,
      block_count: payload.blockCount,
    },
    is_read: false,
  }));

  await supabase.from("notifications").insert(notifications);
}
